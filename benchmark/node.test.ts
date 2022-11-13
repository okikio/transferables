import { MB, generateObj, add, perfs, timeFormatter } from "./utils";

import { it } from 'vitest';
import { getTransferables, hasTransferables } from "../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import Table from "cli-table3";

it("structuredClone", async () => {
  // `structuredClone`, 
  let head = [`hasTransferables`, `getTransferables`, `structuredClone (Transferable)`];
  // for (let cycle = 0; cycle < 4; cycle++) {
    // for (let i = 0; i < Math.log2(1.6 * MB); i++) {
      let i = 1;
      const num = Math.pow(2, i);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });
      const obj = generateObj(num / MB, { streams: false });

      let has;
      await add(sizeStr, `hasTransferables`, () => {
        has = hasTransferables(obj, 100, true);
      })

      let transfer: any[] | null = null;
      await add(sizeStr, `getTransferables`, () => {
        transfer = has ? getTransferables(obj, 100, true) : [];
        console.log(transfer)
      })

      // add(sizeStr, `structuredClone`, () => {
      //   try {
      //     structuredClone(obj);
      //   } catch (e) { console.warn(e); }
      // })

      await add(sizeStr, `structuredClone (Transferable)`, () => {
        try {
          structuredClone(obj, transfer && transfer.length > 0 ? { transfer } : undefined);
        } catch (e) { console.warn(e); }
      })

      await Promise.resolve();
    // }
    // console.log("\n")
  // }

  // const table = new Table({
  //   head: ["", ...head]
  // });

  // perfs.forEach((variants, name) => {
  //   let obj = {};
  //   variants.forEach((durations = [0], variant) => {
  //     const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);
  //     obj[name] ??= [];
  //     obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

  //   });
  //   table.push(obj);
  // })

  // console.log(table.toString())
})