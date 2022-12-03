import { MB, generateObj, add, perfs, timeFormat } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/index.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

const head = [`hasTransferables`, `structuredClone (manually)`, `structuredClone (getTransferable)`, `structuredClone (getTransferables)`];
for (let cycle = 0; cycle < 5; cycle++) {
  for (let i = 0; i < Math.log2(1.6 * MB); i++) {
    const num = Math.pow(2, i);
    const sizeStr = bytes(num, { maximumFractionDigits: 3 });
    const obj = generateObj(num / MB, { streams: false });
    const obj1 = generateObj(num / MB, { streams: false });
    const obj2 = generateObj(num / MB, { streams: false });

    await add(sizeStr, `hasTransferables`, () => {
      hasTransferables(obj, true);
    })

    await add(sizeStr, `structuredClone (manually)`, () => {
      try {
        structuredClone(obj, { transfer: obj.transferable });
      } catch (e) { console.warn(e); }
    })

    await add(sizeStr, `structuredClone (getTransferable)`, () => {
      try {
        const transfer = Array.from(getTransferable(obj1, true)) as Transferable[];
        structuredClone(obj1, { transfer });
      } catch (e) { console.warn(e); }
    })

    await add(sizeStr, `structuredClone (getTransferables)`, () => {
      try {
        const transfer = getTransferables(obj2, true) as Transferable[];
        structuredClone(obj2, { transfer });
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



