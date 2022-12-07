import { MB, generateObj, add, printTable, createStructuredCloneVariants, maxSize } from "./utils";

import { it } from 'vitest';
import { getTransferable, getTransferables, hasTransferables, isSupported } from "../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

it("structuredClone", async () => {
  const isClonable = { ...await isSupported() };
  for (let i = 0; i < Math.log2(maxSize * MB); i++) {
    const num = Math.pow(2, i);
    const name = bytes(num, { maximumFractionDigits: 3 });
    const obj = generateObj(num / MB, isClonable);
    console.log({ type: "structuredClone [node]", name, transferable: obj.transferable.length })
  }

  for (let cycle = 0; cycle < 5; cycle++) {
    for (let i = 0; i < Math.log2(maxSize * MB); i++) {
      const num = Math.pow(2, i);
      const name = bytes(num, { maximumFractionDigits: 3 });

      for (let j = 0; j < len; j++) {
        const variant = keys[j];
        const fn = variants[variant];

        const obj = generateObj(num / MB, isClonable);
        await add(name, variant, fn, obj);

        console.log({ name, index: i, variant, cycle })
      }

      await Promise.resolve();
    }
    console.log("\n")
  }

  printTable(keys, dmeanstdev, markdownTable);
 })