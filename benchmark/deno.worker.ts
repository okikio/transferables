import { MB, add, perfs, timeFormatter } from "./utils.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

interface IIterationType {
  name: string;
  variant: string;
  cycle: number;
  i: number;
  obj?: object;
}

interface ICreateWorkerIteratorOptions {
  index: number;
  variant: string;
  cycle?: number;
}

async function createWorkerPromise({ index, cycle = 0, variant }: ICreateWorkerIteratorOptions) {
  const worker = new Worker(new URL("./workers/deno.ts", import.meta.url).href, { type: "module" });

  const num = Math.pow(2, index);
  const sizeStr = bytes(num, { maximumFractionDigits: 3 });

  const msg = { name: sizeStr, variant, cycle, i: index };
  worker.postMessage(msg);

  const data = await new Promise<IIterationType>(resolve => {
    worker.onmessage = ({ data }: MessageEvent<IIterationType>) => {
      resolve(data);
    }
  });

  worker.terminate();
  return data;
}

const variants = [`postMessage`, `postMessage (predefined)`, `hasTransferables`, `getTransferable`, `getTransferable(s)`];
const maxSize = 1.6;
for (let cycle = 0; cycle < 5; cycle++) {
  for (let variant of variants) {
    for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
      const num = Math.pow(2, index);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });

      await add(sizeStr, variant, async () => {
        await createWorkerPromise({ index, variant });
      })
    }
  }
}

let Head = ["", ...variants];
let table: object[] = [];

let strVal = 'Map {\n'
perfs.forEach((variants, name) => {
  strVal += `  "${name}" => Map { `;

  let obj = {};
  variants.forEach((durations, variant) => {
    const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

    obj[name] ??= [];
    obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

    strVal += `"${variant}" => [${durations.map(x => timeFormatter.format(x, "seconds")).join(", ")}], `

  });

  table.push(obj);
  strVal += `},\n`;
})

let str = table.map((x) => {
  let [key] = Object.keys(x);
  return [key, ...x[key]]
})

strVal += `}`;

console.log(markdownTable([Head, ...str]))
console.log(strVal);



