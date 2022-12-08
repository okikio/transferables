import { MB, generateObj, add, printTable, createWorkerPromise, postMessageVariants, createPromise, IIterationType, maxSize, isClonable } from "./utils.ts";
import { writeFile } from "./deno.utils.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

for (let i = 0; i < Math.log2(maxSize * MB); i++) {
  const num = Math.pow(2, i);
  const name = bytes(num, { maximumFractionDigits: 3 });
  const obj = generateObj(num / MB, isClonable);
  console.log({ type: "postMessage [deno] (Worker)", name, transferable: obj.transferable.length })
}

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

      /**
       * Deno doesn't allow for transfering message channels
       */
      const obj = generateObj(num / MB, isClonable);

      await add(name, variant, async () => {
        await createWorkerPromise({ name, index, variant, cycle, obj, worker, queue });
      })
    }
  }

  worker.terminate();
  queue.clear();
}

const result = printTable(postMessageVariants, dmeanstdev, markdownTable);
writeFile(result, `Worker`, `deno`);



