import { MB, generateObj, add, perfs, timeFormatter } from "../utils";
import { getTransferable, getTransferables, hasTransferables } from "../../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

export default async function (e: MouseEvent) {
  e.preventDefault();

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

  let Head = ["", ...head];
  let table: object[] = [];

  let strVal = 'Map {\n';
  perfs.forEach((variants, name) => {
    strVal += `  "${name}" => Map { `;

    let obj = {};
    variants.forEach((durations, variant) => {
      const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

      obj[name] ??= [];
      obj[name].push(`${mean / 1000} ± ${std / 1000} secs`);

      strVal += `"${variant}" => [${durations.map(x => `${x / 1000} secs`).join(", ")}], `

    });

    table.push(obj);
    strVal += `},\n`;
  })

  let str = table.map((x) => {
    let [key] = Object.keys(x);
    return [key, ...x[key]]
  })

  strVal += `}`;

  const result = markdownTable([Head, ...str])
  console.log(result);
  console.log(strVal);

  return result;
}