import { MB, generateObj, add, perfs, timeFormatter } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/index.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

let head = [`hasTransferables`, `structuredClone (predefined)`, `getTransferable`, `getTransferable(s)`, `structuredClone (getTransferable)`];
for (let cycle = 0; cycle < 5; cycle++) {
  for (let i = 0; i < Math.log2(1.6 * MB); i++) {
    const num = Math.pow(2, i);
    const sizeStr = bytes(num, { maximumFractionDigits: 3 });
    const obj = generateObj(num / MB, { streams: false });

    let has: boolean | null = null;
    await add(sizeStr, `hasTransferables`, () => {
      has = hasTransferables(obj, true);
    })

    let clonedObj: any = {};
    await add(sizeStr, `structuredClone (predefined)`, () => {
      try {
        clonedObj = structuredClone(obj, has ? { transfer: obj.transferable } : undefined);
      } catch (e) { console.warn(e); }
    })

    let transferItt: any[] | null = null;
    await add(sizeStr, `getTransferable`, () => {
      transferItt = has ? Array.from(getTransferable(clonedObj, true)) : [];
    })

    let transferGen: any[] | null = null;
    await add(sizeStr, `getTransferable(s)`, () => {
      transferGen = has ? getTransferables(clonedObj, true) : [];
    })

    await add(sizeStr, `structuredClone (getTransferables)`, () => {
      try {
        structuredClone(clonedObj, transferGen && transferGen.length > 0 ? { transfer: transferGen } : undefined);
      } catch (e) { console.warn(e); }
    })

    await Promise.resolve();
  }
  console.log("\n")
}

const Head = ["", ...head];
const table: Record<string, string[]>[] = [];

let strVal = 'Map {\n'
perfs.forEach((variants, name) => {
  strVal += `  "${name}" => Map { `;

  const obj: Record<string, string[]> = {};
  variants.forEach((durations, variant) => {
    const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

    obj[name] ??= [];
    obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

    strVal += `"${variant}" => [${durations.map(x => timeFormatter.format(x, "seconds")).join(", ")}], `

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



