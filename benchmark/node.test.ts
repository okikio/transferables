import { it } from 'vitest';

import bytes from "pretty-bytes";
import { markdownTable } from 'markdown-table';
import { dmeanstdev } from './dmeanstdev.ts';

import { MB, generateObj, isClonable, add, printTable, createStructuredCloneVariants, maxSize } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/mod.ts";
import { writeFile } from "./node.utils.ts";

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

it("structuredClone", async ({ task }) => {
  const num_ = Math.pow(2, Math.log2(maxSize * MB));
  const name_ = bytes(num_, { maximumFractionDigits: 3 });
  const obj_ = generateObj(num_ / MB, isClonable);
  console.log({ type: `structuredClone (${globalThis.Bun ? "bun" : "node"})`, name: name_, transferable: obj_.transferable.length })

  for (let cycle = 0; cycle < 5; cycle++) {
    for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
      const num = Math.pow(2, index);
      const name = bytes(num, { maximumFractionDigits: 3 });

      for (let j = 0; j < len; j++) {
        const variant = keys[j];
        const fn = variants[variant];
        const obj = generateObj(num / MB, isClonable);

        console.log({ name, index, variant, cycle })
        await add(name, variant, fn, obj);
      }
    }
    console.log("\n")
  }

  const result = printTable(keys, dmeanstdev, markdownTable);
  await writeFile(result, task.name, globalThis.Bun ? 'bun' : 'node');
})