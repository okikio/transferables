import { bench, group, run, type BenchmarkReport } from "@poolifier/tatami-ng";
import { format as bytes } from "@std/fmt/bytes";

import { getTransferable, getTransferables, hasTransferables } from "../../src/mod.ts";
import { AsyncPostMessagePromise, CreatePostMessageVariants, ListenPostMessageRecieverSetup, ListenPostMessageSenderSetup } from "../utils/_postmessage.ts";

import { PrintMarkdownTable, GenerateStub, IsClonable, } from "../utils/_utils.ts";
import { MAX_SIZE } from "../utils/_constants.ts";

export default async function (e: MouseEvent): Promise<string> {
  e.preventDefault();

  const variantsFn = CreatePostMessageVariants({
    hasTransferables, getTransferable, getTransferables
  });
  const variants = Object.keys(variantsFn) as (keyof typeof variantsFn)[];

  // Setting up benchmark testing.
  const name_ = bytes(MAX_SIZE, { maximumFractionDigits: 3 });
  const data_ = GenerateStub(MAX_SIZE, IsClonable);
  const env_ = (() => {
    if ('Bun' in globalThis) return 'bun';
    else if ('Deno' in globalThis) return 'deno';
    else if ('process' in globalThis) return 'node';
    else return 'browser';
  })();

  console.log({
    type: `MessageChannel (${env_})`,
    name: name_,
    transferable: data_.transferable.length,
  })  

  let counter = 0;
  for (let index = 0; index <= Math.log2(MAX_SIZE); index++) {
    const num = Math.pow(2, index);
    const name = bytes(num, { maximumFractionDigits: 3 });

    let channel: MessageChannel | null = null;

    group({
      name,
      before() { 
        channel = new MessageChannel();
        ListenPostMessageSenderSetup(channel.port1);
        ListenPostMessageRecieverSetup(channel.port2, variantsFn);
      },
      after() {
        channel?.port1.close();
      },
    }, () => {
      for (const variant of variants) {
        let data: ReturnType<typeof GenerateStub> | null = null;

        const instanceKey = `#${index} ${name} -> ${variant}`;
        console.log(`${counter++} - ${instanceKey}`);

        bench(
          variant,
          async () => {
            data = GenerateStub(num, IsClonable);
            await AsyncPostMessagePromise?.(channel?.port1, {
              name, index: counter, variant, data: data!
            });
            data = null;
          },
          {
            warmup: true,
            before() { },
            after() {
              data = null;
            },
          }
        );
      }
    });
  }

  const results = await run({
    units: true, // print units cheatsheet (default: false)
    silent: false, // enable/disable stdout output (default: false)
    json: false, // enable/disable json output (default: false)
    colors: true, // enable/disable colors (default: true)
    samples: 128, // minimum number of benchmark samples (default: 128)
    time: 1_000_000_000, // minimum benchmark time in nanoseconds (default: 1_000_000_000)
    throughput: true,
    latencyPercentiles: true,
    latencyMinMax: true
    // avg: true, // enable/disable time (avg) column (default: true)
    // iter: true, // enable/disable iter/s column (default: true)
    // rmoe: true, // enable/disable error margin column (default: true)
    // min_max: true, // enable/disable (min...max) column (default: true)
    // percentiles: true, // enable/disable percentile columns (default: true)
  }) as BenchmarkReport;

  const benchmarks = results?.benchmarks as unknown as BenchmarkReport["benchmarks"][];
  const result = PrintMarkdownTable(variants, benchmarks);
  return result;
}