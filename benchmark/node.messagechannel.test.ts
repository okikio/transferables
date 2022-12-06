import { MB, generateObj, add, printTable, createMessageChannelPromise, createPromise, IIterationType, maxSize, postMessageVariants } from "./utils";

import { it } from 'vitest';
import { getTransferable, getTransferables, hasTransferables, isSupported } from "../src";
import { registerMessageListener } from "./workers/messagechannel";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

it("postMessage (message channel)", async () => {
  const isClonable = await isSupported();

  for (let cycle = 0; cycle < 5; cycle++) {
    const queue = new Map<string, ReturnType<typeof createPromise>>();
    const channel = new MessageChannel();

    registerMessageListener(channel.port1, {
      getTransferable,
      getTransferables,
      hasTransferables
    })

    channel.port2.onmessage = ({ data }: MessageEvent<IIterationType>) => {
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
        const obj = generateObj(num / MB, { ...isClonable, channel: false, streams: false });

        await add(name, variant, async () => {
          await createMessageChannelPromise({ name, index, variant, cycle, obj, channel, queue });
        })
      }
    }

    channel?.port1?.close?.();
    queue.clear();
  }

  printTable(postMessageVariants, dmeanstdev, markdownTable);
})