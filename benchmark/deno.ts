import { MB, generateObj, add, perfs, timeFormatter } from "./utils.ts";
import { getTransferables, hasTransferables } from "../src/index.ts";

// import { loading } from 'cli-loading-animation';
// const { start, stop } = loading('Loading..');

import {
  loading,
  clearLoading,
} from "https://deno.land/x/loading_spinner@v1.0.2/mod.ts";

import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";
import dmeanstdev from 'https://cdn.skypack.dev/@stdlib/stats-base-dmeanstdev@0.0.9';

import Table from "http://esm.sh/cli-table3@0.6.3";

// `structuredClone`, 
// let head = [`hasTransferables`, `getTransferables`, `structuredClone (Transferable)`];
// for (let cycle = 0; cycle < 5; cycle++) {
//   for (let i = 0; i < Math.log2(0.16 * MB); i++) {
//     const num = Math.pow(2, i);
//     const sizeStr = bytes(num, { maximumFractionDigits: 3 });

//     /**
//      * Deno doesn't support transferable streams
//      */
//     const obj = generateObj(num / MB, { streams: false, channel: false });

//     add(sizeStr, `hasTransferables`, () => {
//       hasTransferables(obj, 100, true);
//     })

//     let transfer: any[] | null = null;
//     add(sizeStr, `getTransferables`, () => {
//       transfer = getTransferables(obj, 100, true);
//     })

//     // add(sizeStr, `structuredClone`, () => {
//     //   try {
//     //     structuredClone(obj);
//     //   } catch (e) { console.warn(e); }
//     // })

//     add(sizeStr, `structuredClone (Transferable)`, () => {
//       try {
//         structuredClone(obj, transfer && transfer.length > 0 ? { transfer } : undefined);
//       } catch (e) { console.warn(e); }
//     })

//   }
//   console.log("\n")
// }

// const table = new Table({
//   head: ["", ...head]
// });

// perfs.forEach((variants, name) => {
//   let obj = {};
//   variants.forEach((durations, variant) => {
//     const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);
//     obj[name] ??= [];
//     obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

//   });
//   table.push(obj);
// })

// console.log(table.toString())

interface IIterationType {
  name: string;
  variant: string;
  cycle: number;
  i: number;
  obj?: object;
}
function iterationKey({ name, variant, cycle, i }: IIterationType) {
  return `${name}_${variant}_${cycle}_${i}`;
}

const startTime = new Map<string, number>();
const endTime = new Map<string, number>();

interface ICreateWorkerOptions {
  variants: string[];
  maxSize?: number;
  cycle?: number;
}

async function* createWorker(opts: ICreateWorkerOptions) {
  const { maxSize = 1.6, cycle = 0, variants } = opts;
  const worker = new Worker(new URL("./deno.worker.ts", import.meta.url).href, { type: "module" });
  let numOfIterations = 0;
  for (let variant of variants) {
    for (let i = 0; i <= Math.log2(maxSize * MB); i++) {
      const num = Math.pow(2, i);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });

      let msg = { name: sizeStr, variant, cycle, i };
      let key = iterationKey(msg);

      startTime.set(key, performance.now());
      worker.postMessage(msg);
      numOfIterations++;

      await Promise.resolve(msg);
    }
  }

  const resolvers: ((data: IIterationType) => void)[] = []
  const promises = [
    new Promise<IIterationType>((resolve) => {
      resolvers.push(resolve)
    })
  ]

  worker.onmessage = ({ data }: MessageEvent<IIterationType>) => {
    promises.push(
      new Promise<IIterationType>((resolve) => {
        resolvers.push(resolve);
        resolvers.shift()!(data);
      })
    )
  }

  let counter = 0;
  while (counter < numOfIterations) {
    yield await promises.shift();
    counter++;
  }

  worker.terminate();
}

interface ICreateWorkerIteratorOptions {
  index: number;
  variant: string;
  cycle?: number;
}

async function createWorkerPromise({ index, cycle = 0, variant }: ICreateWorkerIteratorOptions) {
  const worker = new Worker(new URL("./deno.worker.ts", import.meta.url).href, { type: "module" });

  const num = Math.pow(2, index);
  const sizeStr = bytes(num, { maximumFractionDigits: 3 });

  const msg = { name: sizeStr, variant, cycle, i: index };
  worker.postMessage(msg);

  const data = await new Promise<IIterationType>(resolve => {
    worker.onmessage = ({ data }: MessageEvent<IIterationType>) => {
      resolve(data);
    }
  });

  worker.terminate();
  return data;
}

// const workerIterator = createWorker({
//   variants: ["postMessage", "postMessage (Transferable)"],
//   maxSize: 1
// })


// start();
// for await (const item of workerIterator) {
//   if (!item) continue;

//   const { name, variant, cycle, i } = item;
//   const key = iterationKey({ name, variant, cycle, i });

//   const start = startTime.get(key);
//   const end = performance.now();
//   const duration = start != undefined ? end - start : 0;
//   endTime.set(key, end);

//   if (!perfs.has(name)) perfs.set(name, new Map<string, number[]>());
//   if (!perfs.get(name)?.has(variant)) perfs.get(name)?.set(variant, []);

//   let durations = perfs.get(name)?.get(variant);
//   if (durations) durations[cycle] = duration;
// }
// stop();

const variants = ["postMessage", "postMessage (Transferable)"];
const maxSize = 1.6;
for (let cycle = 0; cycle < 5; cycle++) {

  const loadingId = loading(`Cycle ${cycle + 1}`);
  for (let variant of variants) {
    for (let index = 0; index <= Math.log2(maxSize * MB); index++) {
      const num = Math.pow(2, index);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });

      await add(sizeStr, variant, async () => {
        await createWorkerPromise({ index, variant });
      })
    }
  }
  clearLoading(loadingId, "Done!");
}


let head = [`postMessage`, `postMessage (Transferable)`];
const table = new Table({ head: ["", ...head] });

let strVal = 'Map {\n'
perfs.forEach((variants, name) => {
  strVal += `  "${name}" => Map { `;

  let obj = {};
  variants.forEach((durations, variant) => {
    const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

    obj[name] ??= [];
    obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

    strVal += `"${variant}" => [${durations.join(", ")}], `

  });

  table.push(obj);
  strVal += `},\n`;
})

strVal += `}`;

console.log(table.toString());
console.log(strVal);


// let numOfCycles = 5;
// for (let cycle = 0; cycle < numOfCycles; cycle++) {
//   let secondVariantFialKey = '';
//   const worker = new Worker(new URL("./deno.worker.ts", import.meta.url).href, { type: "module" });
//   await new Promise<void>((resolve) => {
//     for (let i = 0; i < Math.log2(1.6 * MB); i++) {
//       const num = Math.pow(2, i);
//       const sizeStr = bytes(num, { maximumFractionDigits: 3 });

//       let msg = { name: sizeStr, variant: `postMessage`, cycle, i };
//       let key = iterationKey(msg);
//       startTime.set(key, performance.now());
//       worker.postMessage(msg);

//       msg = { name: sizeStr, variant: `postMessage (Transferable)`, cycle, i };
//       key = iterationKey(msg);
//       startTime.set(key, performance.now());
//       worker.postMessage(msg);

//       if (i == Math.round(Math.log2(0.16 * MB)) - 1) {
//         secondVariantFialKey = key;
//       }
//     }

//     worker.onmessage = ({ data }) => {
//       const { name, variant, cycle, i, obj } = data;
//       const key = iterationKey({ name, variant, cycle, i });

//       const start = startTime.get(key);
//       const end = performance.now();
//       const duration = start != undefined ? end - start : 0;
//       endTime.set(key, end);

//       if (!perfs.has(name)) perfs.set(name, new Map<string, number[]>());
//       if (!perfs.get(name)?.has(variant)) perfs.get(name)?.set(variant, []);

//       let durations = perfs.get(name)?.get(variant);
//       if (durations) durations[cycle] = duration;

//       if (key == secondVariantFialKey) {
//         if (cycle == numOfCycles - 1) {
//           let head = [`postMessage`, `postMessage (Transferable)`];
//           const table = new Table({ head: ["", ...head] });

//           let strVal = 'Map {\n'
//           perfs.forEach((variants, name) => {
//             strVal += `  "${name}" => Map { `;

//             let obj = {};
//             variants.forEach((durations, variant) => {
//               const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);

//               obj[name] ??= [];
//               obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

//               strVal += `"${variant}" => [${durations.join(", ")}], `

//             });

//             table.push(obj);
//             strVal += `},\n`;
//           })

//           strVal += `}`;

//           console.log(table.toString());
//           console.log(strVal);
//         }

//         resolve();
//       }
//     }
//   });

//   worker.terminate();
// }

