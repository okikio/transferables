import { MB, generateObj, add, createMessageChannelPromise, createPromise, IIterationType, maxSize, printTable, postMessageVariants } from "./utils.ts";
import { getTransferable, getTransferables, hasTransferables, isSupported } from "../src/index.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import { markdownTable } from "https://esm.sh/markdown-table@3.0.2";

import { registerMessageListener } from "./workers/messagechannel.ts";

const isClonable = { ...await isSupported(), channel: false };
for (let i = 0; i < Math.log2(maxSize * MB); i++) {
  const num = Math.pow(2, i);
  const name = bytes(num, { maximumFractionDigits: 3 });
  const obj = generateObj(num / MB, isClonable);
  console.log({ type: "postMessage [deno] (MessageChannel)", name, transferable: obj.transferable.length })
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
        await createMessageChannelPromise({ name, index, variant, cycle, obj, channel: channel, queue });
      })
    }
  }

  channel?.port1?.close?.();
  queue.clear();
}

printTable(postMessageVariants, dmeanstdev, markdownTable)
