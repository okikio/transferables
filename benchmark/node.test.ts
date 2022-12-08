import { it } from 'vitest';

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

import { MB, generateObj, isClonable, add, printTable, createStructuredCloneVariants, maxSize } from "./utils";
import { getTransferable, getTransferables, hasTransferables } from "../src";
import { writeFile } from "./node.utils";

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

it("structuredClone", async ({ meta }) => {
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

  const result = printTable(keys, dmeanstdev, markdownTable);
  writeFile(result, meta.name, globalThis.Bun ? 'bun' : 'node');
})