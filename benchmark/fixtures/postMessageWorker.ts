import { MB, generateObj, add, printTable, postMessageVariants, createPromise, createWorkerPromise, IIterationType, maxSize } from "../utils";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';
import { isSupported } from "../../src";

export default async function (e: MouseEvent) {
  e.preventDefault();
  const isClonable = await isSupported();

  for (let cycle = 0; cycle < 5; cycle++) {
    const queue = new Map<string, ReturnType<typeof createPromise>>();
    const worker = new Worker(new URL("../workers/worker.ts", import.meta.url).href, { type: "module" });

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
         * Deno doesn't support transferable streams
         */
        const obj = generateObj(num / MB, { ...isClonable, channel: false, streams: false });

        await add(name, variant, async () => {
          await createWorkerPromise({ name, index, variant, cycle, obj, worker, queue });
        })
      }
    }

    worker.terminate();
    queue.clear();
  }

  return printTable(postMessageVariants, dmeanstdev, markdownTable);
}