import { it } from 'vitest';

import bytes from "pretty-bytes";
import { markdownTable } from 'markdown-table';
import { dmeanstdev } from './dmeanstdev.ts';

import { MB, generateObj, add, printTable, createMessageChannelPromise, createPromise, IIterationType, maxSize, postMessageVariants, isClonable } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../src/mod.ts";
import { registerMessageListener } from "./workers/messagechannel.ts";
import { writeFile } from "./node.utils.ts";

it("MessageChannel", async ({ task }) => {
  const num_ = Math.pow(2, Math.log2(maxSize * MB));
  const name_ = bytes(num_, { maximumFractionDigits: 3 });
  const obj_ = generateObj(num_ / MB, isClonable);
  console.log({ type: `MessageChannel (${globalThis.Bun ? "bun" : "node"})`, name: name_, transferable: obj_.transferable.length })

  for (let cycle = 0; cycle < 5; cycle++) {
    const queue = new Map<string, ReturnType<typeof createPromise>>();
    const channel = new MessageChannel();

    registerMessageListener(channel.port1, {
      getTransferable,
      getTransferables,
      hasTransferables
    })

    channel.port2.onmessage = ({ data }: MessageEvent<IIterationType>) => {
      const { name, variant, cycle, i: index, error } = data;

      const queueKey = `${name}-${variant}-${cycle}-${index}`;
      const { resolve, reject } = queue.get(queueKey) ?? {};

      if (!error) {
        resolve?.(data);
      } else {
        reject?.(error);
      }
    }

    for (let variant of postMessageVariants) {
      for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
        const num = Math.pow(2, index);
        const name = bytes(num, { maximumFractionDigits: 3 });
        const obj = generateObj(num / MB, isClonable);

        console.log({ name, index, variant, cycle })

        const { wait } = createMessageChannelPromise({ name, index, variant, cycle, obj, channel, queue });
        await add(name, variant, async () => {
          await wait();
        })
      }
    }
    console.log("\n")

    channel?.port1?.close?.();
    queue.clear();
  }

  const result = printTable(postMessageVariants, dmeanstdev, markdownTable);
  await writeFile(result, task.name, globalThis.Bun ? 'bun' : 'node');
})