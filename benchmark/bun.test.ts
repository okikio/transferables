import { MB, generateObj, add, perfs, timeFormatter } from "./utils";

import { it } from 'vitest';
import { getTransferable, getTransferables, hasTransferables } from "../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import Table from "cli-table3";


it("structuredClone", async () => {
  let head = [`hasTransferables`, `getTransferable`, `getTransferable(s)`, `structuredClone (Transferable)`];
  for (let cycle = 0; cycle < 5; cycle++) {
    for (let i = 0; i < Math.log2(1.6 * MB); i++) {
      const num = Math.pow(2, i);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });
      const obj = generateObj(num / MB, { streams: false });

      let has: boolean | null = null;
      await add(sizeStr, `hasTransferables`, () => {
        has = hasTransferables(obj, true);
      })

      let transferItt: any[] | null = null;
      await add(sizeStr, `getTransferable`, () => {
        transferItt = has ? Array.from(getTransferable(obj, true)) : [];
      })

      let transferGen: any[] | null = null;
      await add(sizeStr, `getTransferable(s)`, () => {
        transferGen = has ? getTransferables(obj, true) : [];
      })

      // add(sizeStr, `structuredClone`, () => {
      //   try {
      //     structuredClone(obj);
      //   } catch (e) { console.warn(e); }
      // })

      await add(sizeStr, `structuredClone (Transferable)`, () => {
        try {
          structuredClone(obj, transferGen && transferGen.length > 0 ? { transfer: transferGen } : undefined);
        } catch (e) { console.warn(e); }
      })

      await Promise.resolve();
    }
    console.log("\n")
  }

  const table = new Table({
    head: ["", ...head]
  });

  perfs.forEach((variants, name) => {
    let obj = {};
    variants.forEach((durations = [0], variant) => {
      const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);
      obj[name] ??= [];
      obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

    });
    table.push(obj);
  })

  console.log(table.toString())
})
