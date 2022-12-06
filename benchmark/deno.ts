import { MB, generateObj, add, isClonable, createStructuredCloneVariants, printTable, maxSize } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/index.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

const variants = createStructuredCloneVariants(hasTransferables, getTransferable, getTransferables);
const keys = Object.keys(variants) as (keyof typeof variants)[];
const len = keys.length;

for (let cycle = 0; cycle < 5; cycle++) {
  for (let i = 0; i < Math.log2(maxSize * MB); i++) {
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



