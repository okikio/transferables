import { MB, generateObj, add, printTable, createWorkerPromise, postMessageVariants, createPromise, IIterationType, maxSize, isClonable } from "./utils.ts";
import { writeFile } from "./deno.utils.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import { markdownTable } from "https://esm.sh/markdown-table@3.0.3";
import { dmeanstdev } from './dmeanstdev.ts';

const num_ = Math.pow(2, Math.log2(maxSize * MB));
const name_ = bytes(num_, { maximumFractionDigits: 3 });
const obj_ = generateObj(num_ / MB, isClonable);
console.log({ type: "Worker (deno)", name: name_, transferable: obj_.transferable.length })

for (let cycle = 0; cycle < 5; cycle++) {
  const queue = new Map<string, ReturnType<typeof createPromise>>();
  const worker = new Worker(new URL("./workers/deno.ts", import.meta.url).href, { type: "module" });

  worker.onmessage = ({ data }: MessageEvent<IIterationType>) => {
    const { name, variant, cycle, i: index } = data;

    const queueKey = `${name}-${variant}-${cycle}-${index}`;
    const { resolve } = queue.get(queueKey) ?? {};
    resolve?.(data);
  }

  for (let variant of postMessageVariants) {
    for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
      const num = Math.pow(2, index);
      const name = bytes(num, { maximumFractionDigits: 3 });
      const obj = generateObj(num / MB, isClonable);

      console.log({ name, index, variant, cycle })
      
      const { wait } = createWorkerPromise({ name, index, variant, cycle, obj, worker, queue });
      await add(name, variant, async () => {
        await wait();
      })
    }
  }
  console.log("\n")

  worker.terminate();
  queue.clear();
}

const result = printTable(postMessageVariants, dmeanstdev, markdownTable);
writeFile(result, `Worker`, `deno`);



