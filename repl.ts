import { MB, generateObj, maxSize, isClonable } from "./benchmark/utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "./src/index.ts";

const num = Math.pow(2, Math.log2(maxSize * MB));
const obj = generateObj(num / MB, isClonable);

console.time("Benchmark");

// hasTransferables(obj, isClonable.streams);

Array.from(getTransferable(obj, isClonable.streams));

// getTransferables(obj, isClonable.streams);

console.timeEnd("Benchmark");