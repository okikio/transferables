import { MB, generateObj, add, createStructuredCloneVariants, printTable, maxSize, isClonable } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/index.ts";
import { writeFile } from "./deno.utils.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import { markdownTable } from "https://esm.sh/markdown-table@3.0.3";
import { dmeanstdev } from './dmeanstdev.ts';

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

const num_ = Math.pow(2, Math.log2(maxSize * MB));
const name_ = bytes(num_, { maximumFractionDigits: 3 });
const obj_ = generateObj(num_ / MB, isClonable);
console.log({ type: "structuredClone (deno)", name: name_, transferable: obj_.transferable.length })

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
writeFile(result, `structuredClone`, `deno`);



