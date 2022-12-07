import { MB, generateObj, add, printTable, postMessageVariants, createMessageChannelPromise, createPromise, IIterationType, maxSize, isClonable } from "../utils";

import { getTransferable, getTransferables, hasTransferables } from "../../src";
import { registerMessageListener } from "../workers/messagechannel";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

export default async function (e: MouseEvent) {
  e.preventDefault();

  for (let i = 0; i < Math.log2(maxSize * MB); i++) {
    const num = Math.pow(2, i);
    const name = bytes(num, { maximumFractionDigits: 3 });
    const obj = generateObj(num / MB, isClonable);
    console.log({ type: "postMessageMessageChannel (browser)", name, transferable: obj.transferable.length })
  }

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
        const obj = generateObj(num / MB, isClonable);

        await add(name, variant, async () => {
          await createMessageChannelPromise({ name, index, variant, cycle, obj, channel, queue });
        })
      }
    }

    channel?.port1?.close?.();
    queue.clear();
  }

  return printTable(postMessageVariants, dmeanstdev, markdownTable);
}