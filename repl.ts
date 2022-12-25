import { MB, generateObj, maxSize, isClonable } from "./benchmark/utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "./src/index.ts";

// import { prettyBytes as bytes } from "https://deno.land/x/pretty_bytes@v2.0.0/mod.ts";

const num = Math.pow(2, Math.log2(maxSize * MB));
const obj = generateObj(num / MB, isClonable);

console.time("Benchmark");

getTransferables(obj, isClonable.streams);

console.timeEnd("Benchmark");