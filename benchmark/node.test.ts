import { MB, generateObj, add, isClonable, printTable, createStructuredCloneVariants } from "./utils";

import { it } from 'vitest';
import { getTransferable, getTransferables, hasTransferables } from "../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

it("structuredClone", async () => {
  for (let cycle = 0; cycle < 5; cycle++) {
    for (let i = 0; i < Math.log2(1.6 * MB); i++) {
      const num = Math.pow(2, i);
      const name = bytes(num, { maximumFractionDigits: 3 });

      for (let j = 0; j < len; j++) {
        const variant = keys[j];
        const fn = variants[variant];

        const obj = generateObj(num / MB, isClonable);
        await add(name, variant, fn, obj)
      }

      await Promise.resolve();
    }
    console.log("\n")
  }

  printTable(keys, dmeanstdev, markdownTable);
 })