import { MB, add, perfs, timeFormat } from "./utils.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

interface IIterationType {
  name: string;
  variant: string;
  cycle: number;
  i: number;
  obj?: Record<string, unknown>;
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

const variants = [`hasTransferables`, `postMessage (no transfers)`, `postMessage (manually)`, `postMessage (getTransferable)`, `postMessage (getTransferables)`];
const maxSize = 1.6;
for (let cycle = 0; cycle < 5; cycle++) {
  for (let variant of variants) {
    for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
      const num = Math.pow(2, index);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });

      await add(sizeStr, variant, async () => {
        await createWorkerPromise({ index, variant, cycle });
      })
    }
  }
}

const Head = ["", ...variants];
const table: Record<string, string[]>[] = [];

let strVal = 'Map {\n'
perfs.forEach((variants, name) => {
  strVal += `  "${name}" => Map { `;

  const obj: Record<string, string[]> = {};
  variants.forEach((durations, variant) => {
    const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

    obj[name] ??= [];
    obj[name].push(`${timeFormat(mean)} ± ${timeFormat(std).replace("in ", "")}`);

    strVal += `"${variant}" => [${durations.map(x => timeFormat(x)).join(", ")}], `

  });

  table.push(obj);
  strVal += `},\n`;
})

const str = table.map((x) => {
  const [key] = Object.keys(x);
  return [key, ...x[key]]
})

strVal += `}`;

console.log(markdownTable([Head, ...str]))
console.log(strVal);




