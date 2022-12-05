import { MB, generateObj, add, perfs, timeFormat, isClonable } from "./utils";

import { it } from 'vitest';
import { getTransferable, getTransferables, hasTransferables } from "../src";
import { registerMessageListener } from "./workers/messagechannel";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import { markdownTable } from 'markdown-table';

interface IIterationType {
  name: string;
  variant: string;
  cycle: number;
  i: number;
  obj: ReturnType<typeof generateObj>;
}

interface ICreateWorkerIteratorOptions {
  index: number;
  variant: string;
  cycle?: number;
  obj: ReturnType<typeof generateObj>;
  channel: MessageChannel;
  queue: Map<string, ReturnType<typeof createPromise>>;
}

function createPromise() {
  let resolve: ((value: unknown) => void) | undefined;
  let reject: ((value: unknown) => void) | undefined;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

async function createMessageChannelPromise({ index, cycle = 0, variant, obj, channel, queue }: ICreateWorkerIteratorOptions) {
  const num = Math.pow(2, index);
  const sizeStr = bytes(num, { maximumFractionDigits: 3 });

  try {
    const msg = { name: sizeStr, variant, cycle, i: index, obj };
    channel.port1.postMessage(msg);
  } catch (e) {
    console.warn(e);
  }

  const promise = createPromise();
  const queueKey = `${sizeStr}-${variant}-${cycle}-${index}`;
  queue.set(queueKey, promise);
  await promise.promise;
}

console.log({ isClonable })

it("postMessage (message channel)", async () => {
  const variants = [`hasTransferables`, `postMessage (no transfers)`, `postMessage (manually)`, `postMessage (getTransferable*)`, `postMessage (getTransferables)`];
  const maxSize = 1.6;
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

    for (let variant of variants) {
      for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
        const num = Math.pow(2, index);
        const sizeStr = bytes(num, { maximumFractionDigits: 3 });

        /**
         * Deno doesn't allow for transfering message channels
         */
        const obj = generateObj(num / MB, { ...isClonable, channel: false });

        await add(sizeStr, variant, async () => {
          await createMessageChannelPromise({ index, variant, cycle, obj, channel: channel, queue });
        })
      }
    }

    channel?.port1?.close?.();
    queue.clear();
  }

  const Head = ["", ...variants];
  const table: Record<string, string[]>[] = [];

  let strVal = 'Map {\n'
  perfs.forEach((variants, name) => {
    strVal += `  "${name}" => Map { `;

    const obj: Record<string, string[]> = {};
    variants.forEach((durations, variant) => {
      const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

      obj[name] ??= [];
      obj[name].push(`${timeFormat(mean)} ± ${timeFormat(std).replace("in ", "")}`);

      strVal += `"${variant}" => [${durations.map(x => timeFormat(x)).join(", ")}], `

    });

    table.push(obj);
    strVal += `},\n`;
  })

  const str = table.map((x) => {
    const [key] = Object.keys(x);
    return [key, ...x[key]]
  })

  strVal += `}`;

  console.log(markdownTable([Head, ...str]));
  console.log("\n");
  // console.log(strVal);
})