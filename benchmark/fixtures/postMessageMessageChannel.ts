import { MB, generateObj, add, printTable, postMessageVariants, createMessageChannelPromise, createPromise, IIterationType, maxSize, isClonable } from "../utils";

import { getTransferable, getTransferables, hasTransferables } from "../../src";
import { registerMessageListener } from "../workers/messagechannel";

import bytes from "pretty-bytes";
import { dmeanstdev } from '../dmeanstdev';

import { markdownTable } from 'markdown-table';

export default async function (e: MouseEvent) {
  e.preventDefault();

  const num_ = Math.pow(2, Math.log2(maxSize * MB));
  const name_ = bytes(num_, { maximumFractionDigits: 3 });
  const obj_ = generateObj(num_ / MB, isClonable);
  console.log({ type: "MessageChannel (browser)", name: name_, transferable: obj_.transferable.length })

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
        const obj = generateObj(num / MB, isClonable);

        console.log({ name, index, variant, cycle })
        
        const { wait } = createMessageChannelPromise({ size: num / MB, name, index, variant, cycle, obj, channel, queue });
        await add(name, variant, async () => {
          await wait();
        })
      }
    }
    console.log("\n")

    channel?.port1?.close?.();
    queue.clear();
  }

  return printTable(postMessageVariants, dmeanstdev, markdownTable);
}