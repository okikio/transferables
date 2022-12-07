# transferables

[![Open Bundle](https://bundlejs.com/badge-light.svg)](https://bundlejs.com/?q=transferables&bundle "Check the total bundle size of transferables")

[NPM](https://www.npmjs.com/package/transferables) <span style="padding-inline: 1rem">|</span> [GitHub](https://github.com/okikio/transferables#readme) <span style="padding-inline: 1rem">|</span> [Licence](./LICENSE)

A utility library that lists out all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) that can be moved between Workers and the main thread\*.

> _`*` There are many [asterisks](#asterisks) involved in transferable objects, I've listed out some of them, but as always, do your own research before using._

<!-- > You can also read the [blog post](https://blog.okikio.dev/transferables), created for it's launch. -->

## Installation

```bash
npm install transferables
```

<details>
    <summary>Others</summary>

```bash
yarn add transferables
```

or

```bash
pnpm install transferables
```

</details>
<br>

## Usage

```ts
import { hasTransferables, getTransferables } from "transferables";
```

You can also use it directly through a script tag:

```html
<script src="https://unpkg.com/transferables" type="module"></script>
<script type="module">
  // You can then use it like this
  const { hasTransferables, getTransferables } = window.Transferables;
</script>
```

You can also use it via a CDN, e.g.

```ts
import { hasTransferables, getTransferables } from "https://cdn.skypack.dev/transferables";
// or
import { hasTransferables, getTransferables } from "https://cdn.jsdelivr.net/npm/transferables";
// or any number of other CDN's
```

<br>


## Showcase

A couple sites/projects that use `transferables`:

<!-- - [bundlejs](https://bundlejs.com) -->
- Your site/project here...
  
<br>


## API

The API of `transferables` is pretty straight forward, 
* `hasTransferables` quickly checks if the input contains at least one [transferable object](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).
* `getTransferable` returns an iterator that contains the [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) from the input.
* `getTransferables` generates an array of [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) from the input.
* `isSupported` tests what transferable objects are actually supported (support isn't always guranteed) and returns an object with keys-value pairs that represent if message channel and streams are supported [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).
* `isObject`, `isTypedArray`, `isStream`, `isMessageChannel`, `isTransferable`, and `filterOutDuplicates` are utility functions that are used internally by `transferables`, but you can use them as well to customize transferable to match your usecase.

You use them like this:

```ts
import { hasTransferables, getTransferables, getTransferable } from "transferables";

// data is an object that contains transferable objects
const data = { /* ... */ }

// Quick check for transferable object
const containsTransferables = hasTransferables(data);

// Send postMessage with transferables, if they exist
const transferables = containsTransferables ? getTransferables(data) : undefined;
postMessage(data, transferables);

// Clone data with transferables, if they exist
const transferablesIterator = containsTransferables ? Array.from(getTransferable(data)) : undefined;
structuredClone(data, transferablesIterator);
```

```ts
import { 
  isSupported, 
  isObject, 
  isTypedArray, 
  isStream, 
  isMessageChannel, 
  isTransferable, 
  filterOutDuplicates 
} from "transferables";

// isSupported
isSupported(); // Promise<{ channel: true, streams: true }>

// isObject
isObject(data); // true

// isTypedArray
isTypedArray(data); // false

// isStream
isStream(data); // false

// isMessageChannel
isMessageChannel(data); // false

// isTransferable
isTransferable(data); // false

// filterOutDuplicates
filterOutDuplicates([1, 2, 3, 3, 4, 5, 5]); // [1, 2, 3, 4, 5]
```


### Advanced Usage

```ts
/**
 * Quickly checks to see if input contains at least one transferable object, up to a max number of iterations
 * 
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Whether input object contains transferable objects
 */
hasTransferables(data: unknown, streams: boolean, maxCount: number): boolean


/**
 * Creates an array of transferable objects which exist in a given input, up to a max number of iterations
 * ...
 * @returns An array of transferable objects
 */
getTransferables(data: unknown, streams: boolean, maxCount: number): TypeTransferable[]


/**
 * An iterator that contains the transferable objects from the input, up to a max number of iterations
 * ...
 * @returns Iterator that contains the transferable objects from the input
 */
getTransferable(data: unknown, streams: boolean, maxCount: number): Generator<TypeTransferable | TypeTypedArray | MessageChannel | DataView>
```

> Note: `(Readable/Writeable/Transform)streams` and `MessagePort` aren't transferable in all js runtimes; devs can decide based off the runtime whether to support streams and message channel/port or not
 
> Note: depending on how large your object is you may need go over the `maxCount` (max iteration count), if you need to change the max number of iterations remember that--that might cause the thread to be blocked while it's computing.

<br>

## Benchmarks

**Machine**: [GitHub Action `ubuntu-latest`](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)
* 2-core CPU (x86_64)
* 7 GB of RAM
* 14 GB of SSD space

**JS Runtimes**:
* `Node 19` - Run using `vitest`
* `Deno 1.28.3`
* `Bun v0.2.2` - Run using `vitest` (it's basically a clone of the nodejs benchmark)
* `Chrome (latest)`
* `Firefox (latest)`
* `Safari (latest)`

To determine just how useful the `transferables` library was, I ran a benchmark to compare it to manually grabbing the [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) from the object to be transferred, here are the results.

The benchmark ran using the 3 different forms of transfering [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) 
We ran the benchmark with 
1. `structuredClone` (`All`)
2. `MessageChannel` (`All`)
3. `Worker` (`Deno`, `Chrome`, `Firefox`, and `Safari`) 

> Note: `Worker`'s aren't supported in all runtimes   

Each form ran for 5 cycles, with a transfer list of ranging from 108 - 168 objects per run (depending on the js environement), with 21 different data sizes ranging from `1 B` to `1,049 MB` in the transfer list.

Each cycle had variants, specifically for the `structuredClone` form, we had these variants
* hasTransferables
* structuredClone (manually) 
* structuredClone (getTransferable*) 
* structuredClone (getTransferables)

for the `MessageChannel` and `Worker` forms we had these variants
* hasTransferables
* postMessage (no transfers) - `postMessage` doesn't actually require listing out objects in the transfer list, only `structuredClone` requires that; TIL
* postMessage (manually) 
* postMessage (getTransferable*) 
* postMessage (getTransferables)


### Node

<details>
<summary>structuredClone</summary>  


|            | hasTransferables         | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.445 ms ± 0.779 ms   | in 7.061 ms ± 4.722 ms       | in 10.51 ms ± 4.357 ms             | in 6.242 ms ± 3.255 ms             |
| 2 B        | in 0.061 ms ± 0.015 ms   | in 5.629 ms ± 2.308 ms       | in 4.628 ms ± 0.715 ms             | in 4.397 ms ± 0.384 ms             |
| 4 B        | in 0.071 ms ± 0.058 ms   | in 3.964 ms ± 0.251 ms       | in 4.133 ms ± 0.26 ms              | in 4.146 ms ± 0.218 ms             |
| 8 B        | in 0.047 ms ± 0.01 ms    | in 4.913 ms ± 1.705 ms       | in 4.215 ms ± 0.415 ms             | in 4.546 ms ± 0.723 ms             |
| 16 B       | in 0.05 ms ± 0.014 ms    | in 14.197 ms ± 4.941 ms      | in 4.449 ms ± 0.584 ms             | in 4.304 ms ± 0.509 ms             |
| 32 B       | in 0.047 ms ± 0.005 ms   | in 4.967 ms ± 1.405 ms       | in 4.234 ms ± 0.303 ms             | in 4.446 ms ± 0.749 ms             |
| 64 B       | in 0.056 ms ± 0.019 ms   | in 23.418 ms ± 10.178 ms     | in 4.685 ms ± 0.92 ms              | in 4.814 ms ± 1.752 ms             |
| 128 B      | in 0.046 ms ± 0.012 ms   | in 3.872 ms ± 0.182 ms       | in 4.363 ms ± 0.253 ms             | in 5.513 ms ± 2.818 ms             |
| 256 B      | in 0.052 ms ± 0.014 ms   | in 4.466 ms ± 0.711 ms       | in 4.855 ms ± 0.204 ms             | in 14.498 ms ± 4.903 ms            |
| 512 B      | in 0.06 ms ± 0.013 ms    | in 4.694 ms ± 0.075 ms       | in 5.848 ms ± 0.166 ms             | in 5.55 ms ± 0.135 ms              |
| 1.024 kB   | in 0.096 ms ± 0.052 ms   | in 5.606 ms ± 0.209 ms       | in 8.415 ms ± 0.491 ms             | in 7.423 ms ± 0.12 ms              |
| 2.048 kB   | in 0.089 ms ± 0.04 ms    | in 7.519 ms ± 0.162 ms       | in 12.465 ms ± 0.691 ms            | in 11.047 ms ± 0.552 ms            |
| 4.096 kB   | in 0.122 ms ± 0.075 ms   | in 11.957 ms ± 0.976 ms      | in 21.987 ms ± 2.109 ms            | in 18.531 ms ± 0.059 ms            |
| 8.192 kB   | in 0.202 ms ± 0.161 ms   | in 21.249 ms ± 1.054 ms      | in 40.056 ms ± 1.92 ms             | in 36.133 ms ± 2.15 ms             |
| 16.384 kB  | in 0.32 ms ± 0.011 ms    | in 40.834 ms ± 3.35 ms       | in 74.905 ms ± 5.508 ms            | in 68.596 ms ± 1.258 ms            |
| 32.768 kB  | in 0.566 ms ± 0.02 ms    | in 71.664 ms ± 9.916 ms      | in 141.631 ms ± 5.737 ms           | in 124.294 ms ± 5.175 ms           |
| 65.536 kB  | in 1.503 ms ± 0.369 ms   | in 137.615 ms ± 17.73 ms     | in 286.211 ms ± 2.113 ms           | in 251.425 ms ± 1.258 ms           |
| 131.072 kB | in 3.567 ms ± 0.292 ms   | in 279 ms ± 8.86 ms          | in 567.116 ms ± 25.789 ms          | in 482.521 ms ± 25.338 ms          |
| 262.144 kB | in 16.714 ms ± 2.995 ms  | in 780.75 ms ± 41.798 ms     | in 1,408.089 ms ± 95.159 ms        | in 1,318.552 ms ± 134.962 ms       |
| 524.288 kB | in 26.079 ms ± 19.455 ms | in 1,412.332 ms ± 71.87 ms   | in 2,685.257 ms ± 68.368 ms        | in 2,270.075 ms ± 101.738 ms       |
| 1.049 MB   | in 43.351 ms ± 16.836 ms | in 2,706.992 ms ± 177.034 ms | in 5,245.171 ms ± 89.433 ms        | in 4,597.683 ms ± 127.638 ms       |


</details>


<details>
<summary>MessageChannel</summary>  

|            | hasTransferables             | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 2.331 ms ± 3.625 ms       | in 0.658 ms ± 0.039 ms      | in 0.743 ms ± 0.016 ms       | in 1.064 ms ± 0.263 ms         | in 2.7 ms ± 3.624 ms           |
| 2 B        | in 0.381 ms ± 0.04 ms        | in 0.576 ms ± 0.015 ms      | in 0.64 ms ± 0.007 ms        | in 0.848 ms ± 0.117 ms         | in 0.818 ms ± 0.094 ms         |
| 4 B        | in 0.347 ms ± 0.028 ms       | in 0.572 ms ± 0.03 ms       | in 0.636 ms ± 0.051 ms       | in 0.83 ms ± 0.121 ms          | in 0.73 ms ± 0.041 ms          |
| 8 B        | in 0.355 ms ± 0.041 ms       | in 0.599 ms ± 0.03 ms       | in 0.653 ms ± 0.038 ms       | in 0.865 ms ± 0.099 ms         | in 0.747 ms ± 0.045 ms         |
| 16 B       | in 0.351 ms ± 0.017 ms       | in 0.616 ms ± 0.029 ms      | in 0.663 ms ± 0.033 ms       | in 0.896 ms ± 0.146 ms         | in 0.802 ms ± 0.056 ms         |
| 32 B       | in 0.375 ms ± 0.012 ms       | in 0.671 ms ± 0.029 ms      | in 0.706 ms ± 0.007 ms       | in 1.037 ms ± 0.232 ms         | in 0.907 ms ± 0.057 ms         |
| 64 B       | in 0.431 ms ± 0.014 ms       | in 0.816 ms ± 0.031 ms      | in 0.842 ms ± 0.023 ms       | in 2.941 ms ± 3.164 ms         | in 1.094 ms ± 0.108 ms         |
| 128 B      | in 2.975 ms ± 4.808 ms       | in 1.055 ms ± 0.053 ms      | in 1.1 ms ± 0.015 ms         | in 1.89 ms ± 0.557 ms          | in 1.481 ms ± 0.128 ms         |
| 256 B      | in 0.836 ms ± 0.033 ms       | in 1.596 ms ± 0.063 ms      | in 1.615 ms ± 0.011 ms       | in 4.86 ms ± 4.698 ms          | in 2.287 ms ± 0.228 ms         |
| 512 B      | in 1.331 ms ± 0.07 ms        | in 2.626 ms ± 0.118 ms      | in 2.616 ms ± 0.017 ms       | in 4.448 ms ± 0.386 ms         | in 3.855 ms ± 0.478 ms         |
| 1.024 kB   | in 2.31 ms ± 0.13 ms         | in 4.724 ms ± 0.207 ms      | in 4.724 ms ± 0.1 ms         | in 7.613 ms ± 0.109 ms         | in 7.169 ms ± 0.859 ms         |
| 2.048 kB   | in 6.512 ms ± 4.587 ms       | in 8.848 ms ± 0.372 ms      | in 8.733 ms ± 0.048 ms       | in 14.337 ms ± 0.093 ms        | in 12.493 ms ± 0.082 ms        |
| 4.096 kB   | in 8.258 ms ± 0.415 ms       | in 17.034 ms ± 0.728 ms     | in 16.906 ms ± 0.086 ms      | in 30.463 ms ± 0.519 ms        | in 26.314 ms ± 0.311 ms        |
| 8.192 kB   | in 16.182 ms ± 0.827 ms      | in 34.772 ms ± 2.504 ms     | in 33.213 ms ± 0.334 ms      | in 53.281 ms ± 0.562 ms        | in 48.015 ms ± 0.31 ms         |
| 16.384 kB  | in 37.648 ms ± 0.34 ms       | in 73.23 ms ± 4.085 ms      | in 69.945 ms ± 0.819 ms      | in 105.694 ms ± 0.822 ms       | in 95.43 ms ± 0.385 ms         |
| 32.768 kB  | in 66.918 ms ± 0.863 ms      | in 140.185 ms ± 2.296 ms    | in 134.045 ms ± 0.466 ms     | in 212.494 ms ± 1.384 ms       | in 193.1 ms ± 1.07 ms          |
| 65.536 kB  | in 136.604 ms ± 1.507 ms     | in 283.994 ms ± 4.737 ms    | in 265.3 ms ± 0.575 ms       | in 419.805 ms ± 2.136 ms       | in 379.044 ms ± 1.617 ms       |
| 131.072 kB | in 279.709 ms ± 8.35 ms      | in 584.442 ms ± 7.346 ms    | in 537.174 ms ± 6.182 ms     | in 819.642 ms ± 41.9 ms        | in 778.404 ms ± 12.951 ms      |
| 262.144 kB | in 662.626 ms ± 29.129 ms    | in 1,249.019 ms ± 43.921 ms | in 1,258.01 ms ± 43.757 ms   | in 1,843.439 ms ± 81.53 ms     | in 1,658.805 ms ± 44.711 ms    |
| 524.288 kB | in 1,325.393 ms ± 20.91 ms   | in 2,470.552 ms ± 96.342 ms | in 2,598.903 ms ± 39.317 ms  | in 3,838.294 ms ± 36.674 ms    | in 3,505.701 ms ± 107.163 ms   |
| 1.049 MB   | in 2,541.582 ms ± 115.006 ms | in 5,388.847 ms ± 42.743 ms | in 5,267.612 ms ± 221.235 ms | in 7,841.42 ms ± 100.897 ms    | in 7,393.18 ms ± 100.68 ms     |


</details>


### Deno

<details>
<summary>structuredClone</summary>


|            | hasTransferables         | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.112 ms ± 0.177 ms   | in 0.72 ms ± 0.361 ms        | in 0.76 ms ± 0.261 ms              | in 0.684 ms ± 0.231 ms             |
| 2 B        | in 0.019 ms ± 0.013 ms   | in 0.484 ms ± 0.019 ms       | in 0.629 ms ± 0.109 ms             | in 0.605 ms ± 0.143 ms             |
| 4 B        | in 0.016 ms ± 0.008 ms   | in 0.538 ms ± 0.072 ms       | in 0.705 ms ± 0.132 ms             | in 0.692 ms ± 0.115 ms             |
| 8 B        | in 0.015 ms ± 0.007 ms   | in 0.572 ms ± 0.022 ms       | in 0.703 ms ± 0.087 ms             | in 0.706 ms ± 0.153 ms             |
| 16 B       | in 0.015 ms ± 0.007 ms   | in 0.615 ms ± 0.107 ms       | in 0.757 ms ± 0.172 ms             | in 0.763 ms ± 0.247 ms             |
| 32 B       | in 0.016 ms ± 0.006 ms   | in 0.582 ms ± 0.053 ms       | in 0.805 ms ± 0.179 ms             | in 0.731 ms ± 0.13 ms              |
| 64 B       | in 0.016 ms ± 0.006 ms   | in 0.629 ms ± 0.053 ms       | in 0.95 ms ± 0.19 ms               | in 0.874 ms ± 0.186 ms             |
| 128 B      | in 0.017 ms ± 0.008 ms   | in 0.797 ms ± 0.057 ms       | in 1.242 ms ± 0.248 ms             | in 1.129 ms ± 0.251 ms             |
| 256 B      | in 0.021 ms ± 0.014 ms   | in 1.071 ms ± 0.094 ms       | in 1.838 ms ± 0.534 ms             | in 1.569 ms ± 0.3 ms               |
| 512 B      | in 0.024 ms ± 0.014 ms   | in 1.671 ms ± 0.242 ms       | in 2.561 ms ± 0.079 ms             | in 2.46 ms ± 0.471 ms              |
| 1.024 kB   | in 0.036 ms ± 0.024 ms   | in 2.662 ms ± 0.059 ms       | in 4.547 ms ± 0.134 ms             | in 3.957 ms ± 0.112 ms             |
| 2.048 kB   | in 0.055 ms ± 0.046 ms   | in 4.799 ms ± 0.059 ms       | in 8.755 ms ± 0.521 ms             | in 9.711 ms ± 1.133 ms             |
| 4.096 kB   | in 0.096 ms ± 0.09 ms    | in 9.217 ms ± 0.137 ms       | in 16.559 ms ± 0.323 ms            | in 14.232 ms ± 0.301 ms            |
| 8.192 kB   | in 0.164 ms ± 0.159 ms   | in 17.831 ms ± 0.15 ms       | in 32.358 ms ± 0.214 ms            | in 27.982 ms ± 0.062 ms            |
| 16.384 kB  | in 0.156 ms ± now        | in 35.295 ms ± 0.535 ms      | in 64.203 ms ± 0.137 ms            | in 56.073 ms ± 0.45 ms             |
| 32.768 kB  | in 0.338 ms ± now        | in 72.168 ms ± 0.797 ms      | in 130.313 ms ± 2.508 ms           | in 113.152 ms ± 2.064 ms           |
| 65.536 kB  | in 0.854 ms ± 0.059 ms   | in 145.749 ms ± 2.916 ms     | in 261.217 ms ± 0.299 ms           | in 224.961 ms ± 1.521 ms           |
| 131.072 kB | in 1.871 ms ± 0.015 ms   | in 290.1 ms ± 2.513 ms       | in 548.772 ms ± 28.549 ms          | in 454.328 ms ± 2.316 ms           |
| 262.144 kB | in 4.15 ms ± 0.05 ms     | in 610.79 ms ± 8.028 ms      | in 1,084.648 ms ± 31.847 ms        | in 938.771 ms ± 7.283 ms           |
| 524.288 kB | in 7.093 ms ± 0.327 ms   | in 1,353.351 ms ± 117.165 ms | in 2,345.532 ms ± 113.717 ms       | in 2,065.322 ms ± 97.109 ms        |
| 1.049 MB   | in 21.092 ms ± 11.077 ms | in 2,694.026 ms ± 244.591 ms | in 4,754.395 ms ± 193.674 ms       | in 4,035.363 ms ± 261.329 ms       |


</details>


<details>
<summary>MessageChannel</summary>  

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.512 ms ± 0.913 ms      | in 0.974 ms ± 0.078 ms      | in 1.742 ms ± 0.843 ms       | in 1.578 ms ± 0.269 ms         | in 1.486 ms ± 0.155 ms         |
| 2 B        | in 0.685 ms ± 0.073 ms      | in 0.926 ms ± 0.097 ms      | in 1.126 ms ± 0.02 ms        | in 1.3 ms ± 0.106 ms           | in 1.289 ms ± 0.101 ms         |
| 4 B        | in 0.711 ms ± 0.033 ms      | in 0.875 ms ± 0.045 ms      | in 1.123 ms ± 0.023 ms       | in 1.27 ms ± 0.124 ms          | in 1.196 ms ± 0.031 ms         |
| 8 B        | in 0.67 ms ± 0.064 ms       | in 0.861 ms ± 0.036 ms      | in 1.158 ms ± 0.061 ms       | in 1.268 ms ± 0.071 ms         | in 1.216 ms ± 0.045 ms         |
| 16 B       | in 0.751 ms ± 0.138 ms      | in 0.916 ms ± 0.056 ms      | in 1.161 ms ± 0.028 ms       | in 1.33 ms ± 0.103 ms          | in 1.248 ms ± 0.043 ms         |
| 32 B       | in 0.756 ms ± 0.165 ms      | in 1.011 ms ± 0.088 ms      | in 1.244 ms ± 0.042 ms       | in 1.44 ms ± 0.153 ms          | in 1.336 ms ± 0.067 ms         |
| 64 B       | in 0.826 ms ± 0.166 ms      | in 1.092 ms ± 0.036 ms      | in 1.351 ms ± 0.029 ms       | in 1.649 ms ± 0.227 ms         | in 1.523 ms ± 0.107 ms         |
| 128 B      | in 0.909 ms ± 0.073 ms      | in 1.414 ms ± 0.06 ms       | in 1.655 ms ± 0.038 ms       | in 2.124 ms ± 0.347 ms         | in 1.89 ms ± 0.125 ms          |
| 256 B      | in 1.188 ms ± 0.057 ms      | in 1.955 ms ± 0.013 ms      | in 2.193 ms ± 0.036 ms       | in 3.017 ms ± 0.621 ms         | in 2.646 ms ± 0.214 ms         |
| 512 B      | in 1.768 ms ± 0.113 ms      | in 3.095 ms ± now           | in 3.272 ms ± 0.05 ms        | in 4.85 ms ± 1.294 ms          | in 4.139 ms ± 0.451 ms         |
| 1.024 kB   | in 2.858 ms ± 0.113 ms      | in 5.421 ms ± 0.071 ms      | in 5.447 ms ± 0.082 ms       | in 7.281 ms ± 0.049 ms         | in 6.656 ms ± 0.021 ms         |
| 2.048 kB   | in 5.038 ms ± 0.182 ms      | in 9.876 ms ± 0.036 ms      | in 9.83 ms ± 0.145 ms        | in 13.338 ms ± 0.033 ms        | in 12.343 ms ± 0.036 ms        |
| 4.096 kB   | in 9.404 ms ± 0.274 ms      | in 18.824 ms ± 0.16 ms      | in 18.523 ms ± 0.266 ms      | in 25.363 ms ± 0.139 ms        | in 23.235 ms ± 0.097 ms        |
| 8.192 kB   | in 18.215 ms ± 0.706 ms     | in 39.672 ms ± 0.435 ms     | in 37.357 ms ± 0.902 ms      | in 52.257 ms ± 1.284 ms        | in 47.29 ms ± 0.2 ms           |
| 16.384 kB  | in 36.168 ms ± 1.015 ms     | in 81.214 ms ± 2.989 ms     | in 72.231 ms ± 0.994 ms      | in 101.094 ms ± 0.321 ms       | in 92.808 ms ± 0.39 ms         |
| 32.768 kB  | in 72.984 ms ± 1.008 ms     | in 160.438 ms ± 7.23 ms     | in 144.433 ms ± 1.623 ms     | in 199.418 ms ± 0.295 ms       | in 183.29 ms ± 0.337 ms        |
| 65.536 kB  | in 144.583 ms ± 1.958 ms    | in 321.346 ms ± 10.82 ms    | in 298.29 ms ± 10.242 ms     | in 407.219 ms ± 7.145 ms       | in 366.714 ms ± 2.396 ms       |
| 131.072 kB | in 292.841 ms ± 0.496 ms    | in 626.791 ms ± 6.969 ms    | in 585.163 ms ± 3.793 ms     | in 818.582 ms ± 9.572 ms       | in 762.697 ms ± 4.486 ms       |
| 262.144 kB | in 655.044 ms ± 62.437 ms   | in 1,320.005 ms ± 30.663 ms | in 1,264.32 ms ± 77.892 ms   | in 1,701.999 ms ± 60.621 ms    | in 1,562.124 ms ± 59.667 ms    |
| 524.288 kB | in 1,267.998 ms ± 44.89 ms  | in 2,565.313 ms ± 77.724 ms | in 2,632.813 ms ± 111.123 ms | in 3,502.25 ms ± 169.627 ms    | in 3,296.111 ms ± 87.174 ms    |
| 1.049 MB   | in 2,520.66 ms ± 200.197 ms | in 5,205.243 ms ± 79.274 ms | in 4,830.485 ms ± 119.905 ms | in 6,755.085 ms ± 154.069 ms   | in 6,176.825 ms ± 205.481 ms   |


</details>


<details>
<summary>Worker</summary>

|            | hasTransferables            | postMessage (no transfers)   | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | ---------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.665 ms ± 1.481 ms      | in 1.199 ms ± 0.052 ms       | in 2.039 ms ± 0.474 ms       | in 2.579 ms ± 0.027 ms         | in 2.158 ms ± 0.035 ms         |
| 2 B        | in 1.449 ms ± 0.157 ms      | in 1.006 ms ± 0.121 ms       | in 1.358 ms ± 0.066 ms       | in 1.822 ms ± 0.096 ms         | in 1.683 ms ± 0.044 ms         |
| 4 B        | in 0.819 ms ± 0.085 ms      | in 0.981 ms ± 0.115 ms       | in 1.267 ms ± 0.044 ms       | in 1.753 ms ± 0.104 ms         | in 1.449 ms ± 0.031 ms         |
| 8 B        | in 0.853 ms ± 0.135 ms      | in 0.956 ms ± 0.087 ms       | in 1.283 ms ± 0.044 ms       | in 1.661 ms ± 0.106 ms         | in 1.433 ms ± 0.046 ms         |
| 16 B       | in 0.997 ms ± 0.096 ms      | in 1.054 ms ± 0.209 ms       | in 1.351 ms ± 0.042 ms       | in 1.688 ms ± 0.06 ms          | in 1.565 ms ± 0.079 ms         |
| 32 B       | in 0.965 ms ± 0.058 ms      | in 1.06 ms ± 0.108 ms        | in 1.332 ms ± 0.036 ms       | in 1.893 ms ± 0.045 ms         | in 1.755 ms ± 0.037 ms         |
| 64 B       | in 0.856 ms ± 0.04 ms       | in 1.421 ms ± 0.146 ms       | in 1.908 ms ± 0.968 ms       | in 2.247 ms ± 0.088 ms         | in 1.87 ms ± 0.026 ms          |
| 128 B      | in 1.009 ms ± 0.044 ms      | in 1.499 ms ± 0.057 ms       | in 1.815 ms ± 0.087 ms       | in 3.039 ms ± 0.233 ms         | in 2.375 ms ± 0.034 ms         |
| 256 B      | in 1.527 ms ± 0.158 ms      | in 2.112 ms ± 0.193 ms       | in 2.365 ms ± 0.07 ms        | in 4.371 ms ± 0.015 ms         | in 3.197 ms ± 0.031 ms         |
| 512 B      | in 1.969 ms ± 0.106 ms      | in 3.202 ms ± 0.043 ms       | in 3.382 ms ± 0.087 ms       | in 5.14 ms ± 0.933 ms          | in 4.966 ms ± 0.321 ms         |
| 1.024 kB   | in 3.458 ms ± 0.137 ms      | in 5.504 ms ± 0.138 ms       | in 5.586 ms ± 0.154 ms       | in 7.443 ms ± 0.073 ms         | in 6.952 ms ± 0.123 ms         |
| 2.048 kB   | in 5.532 ms ± 0.121 ms      | in 9.919 ms ± 0.173 ms       | in 9.854 ms ± 0.328 ms       | in 13.411 ms ± 0.483 ms        | in 12.553 ms ± 0.165 ms        |
| 4.096 kB   | in 10.095 ms ± 0.166 ms     | in 18.745 ms ± 0.397 ms      | in 18.334 ms ± 0.584 ms      | in 26.059 ms ± 1.213 ms        | in 32.435 ms ± 17.827 ms       |
| 8.192 kB   | in 20.746 ms ± 0.465 ms     | in 37.241 ms ± 1.324 ms      | in 37.208 ms ± 1.014 ms      | in 52.24 ms ± 1.829 ms         | in 47.831 ms ± 0.855 ms        |
| 16.384 kB  | in 38.915 ms ± 1.802 ms     | in 78.385 ms ± 1.608 ms      | in 71.625 ms ± 2.486 ms      | in 104.52 ms ± 5.06 ms         | in 113.728 ms ± 10.663 ms      |
| 32.768 kB  | in 77.583 ms ± 1.101 ms     | in 168.023 ms ± 8.046 ms     | in 144.68 ms ± 5.705 ms      | in 202.347 ms ± 13.654 ms      | in 183.179 ms ± 3.534 ms       |
| 65.536 kB  | in 147.136 ms ± 1.584 ms    | in 341.539 ms ± 36.589 ms    | in 282.628 ms ± 8.035 ms     | in 409.564 ms ± 3.396 ms       | in 368.088 ms ± 6.361 ms       |
| 131.072 kB | in 306.255 ms ± 11.424 ms   | in 624.369 ms ± 5.68 ms      | in 581.013 ms ± 12.348 ms    | in 807.913 ms ± 33.947 ms      | in 750.055 ms ± 18.006 ms      |
| 262.144 kB | in 649.541 ms ± 26.632 ms   | in 1,394.291 ms ± 77.54 ms   | in 1,319.245 ms ± 68.331 ms  | in 1,662.859 ms ± 82.634 ms    | in 1,583.883 ms ± 28.998 ms    |
| 524.288 kB | in 1,398.87 ms ± 49.11 ms   | in 2,611.737 ms ± 65.686 ms  | in 2,566.924 ms ± 82.708 ms  | in 3,546.559 ms ± 150.312 ms   | in 3,342.859 ms ± 141.526 ms   |
| 1.049 MB   | in 2,667.594 ms ± 78.732 ms | in 5,092.417 ms ± 185.304 ms | in 4,716.281 ms ± 160.156 ms | in 6,975.603 ms ± 133.962 ms   | in 6,602.223 ms ± 219.615 ms   |



</details>


### Bun

<details>
<summary>structuredClone</summary>

|            | hasTransferables         | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.488 ms ± 0.867 ms   | in 6.374 ms ± 3.196 ms       | in 5.066 ms ± 0.282 ms             | in 7.834 ms ± 5.704 ms             |
| 2 B        | in 0.074 ms ± 0.015 ms   | in 6.181 ms ± 3.486 ms       | in 6.795 ms ± 3.343 ms             | in 4.697 ms ± 0.464 ms             |
| 4 B        | in 0.075 ms ± 0.057 ms   | in 4.405 ms ± 0.284 ms       | in 4.676 ms ± 0.35 ms              | in 4.916 ms ± 0.988 ms             |
| 8 B        | in 0.052 ms ± 0.013 ms   | in 4.248 ms ± 0.233 ms       | in 4.439 ms ± 0.225 ms             | in 6.809 ms ± 4.808 ms             |
| 16 B       | in 0.052 ms ± 0.013 ms   | in 15.34 ms ± 5.53 ms        | in 4.642 ms ± 0.214 ms             | in 4.42 ms ± 0.316 ms              |
| 32 B       | in 0.05 ms ± 0.008 ms    | in 5.998 ms ± 3.757 ms       | in 4.51 ms ± 0.29 ms               | in 8.644 ms ± 8.657 ms             |
| 64 B       | in 0.061 ms ± 0.023 ms   | in 21.698 ms ± 8.767 ms      | in 4.083 ms ± 0.288 ms             | in 4.471 ms ± 1.264 ms             |
| 128 B      | in 0.051 ms ± 0.015 ms   | in 3.878 ms ± 0.468 ms       | in 4.931 ms ± 1.703 ms             | in 5.467 ms ± 3.106 ms             |
| 256 B      | in 0.054 ms ± 0.017 ms   | in 5.064 ms ± 2.418 ms       | in 4.732 ms ± 0.337 ms             | in 14.534 ms ± 4.413 ms            |
| 512 B      | in 0.059 ms ± 0.017 ms   | in 4.622 ms ± 0.337 ms       | in 5.743 ms ± 0.402 ms             | in 5.366 ms ± 0.343 ms             |
| 1.024 kB   | in 0.092 ms ± 0.071 ms   | in 5.743 ms ± 1.049 ms       | in 7.946 ms ± 0.546 ms             | in 7.176 ms ± 0.46 ms              |
| 2.048 kB   | in 0.089 ms ± 0.044 ms   | in 7.232 ms ± 0.454 ms       | in 12.138 ms ± 0.57 ms             | in 10.858 ms ± 0.611 ms            |
| 4.096 kB   | in 0.123 ms ± 0.074 ms   | in 11.95 ms ± 0.812 ms       | in 22.003 ms ± 2.066 ms            | in 18.697 ms ± 0.151 ms            |
| 8.192 kB   | in 0.212 ms ± 0.164 ms   | in 22.194 ms ± 1.269 ms      | in 40.855 ms ± 0.661 ms            | in 36.574 ms ± 1.655 ms            |
| 16.384 kB  | in 0.339 ms ± 0.013 ms   | in 42.384 ms ± 4.708 ms      | in 76.762 ms ± 3.538 ms            | in 69.994 ms ± 1.811 ms            |
| 32.768 kB  | in 0.596 ms ± 0.023 ms   | in 73.726 ms ± 8.753 ms      | in 141.936 ms ± 5.919 ms           | in 127.563 ms ± 0.569 ms           |
| 65.536 kB  | in 1.578 ms ± 0.448 ms   | in 137.99 ms ± 17.675 ms     | in 280.157 ms ± 11.264 ms          | in 247.479 ms ± 10.291 ms          |
| 131.072 kB | in 3.591 ms ± 0.249 ms   | in 295.095 ms ± 27.857 ms    | in 575.697 ms ± 2.811 ms           | in 502.949 ms ± 2.173 ms           |
| 262.144 kB | in 12.495 ms ± 3.64 ms   | in 834.825 ms ± 97.77 ms     | in 1,467.023 ms ± 121.797 ms       | in 1,368.117 ms ± 119.955 ms       |
| 524.288 kB | in 15.882 ms ± 7.056 ms  | in 1,495.9 ms ± 145.513 ms   | in 2,598.217 ms ± 176.894 ms       | in 2,251.951 ms ± 281.003 ms       |
| 1.049 MB   | in 50.776 ms ± 30.651 ms | in 2,732.867 ms ± 133.425 ms | in 5,217.499 ms ± 76.148 ms        | in 4,409.595 ms ± 199.31 ms        |

</details>


<details>
<summary>MessageChannel</summary>  

|            | hasTransferables            | postMessage (no transfers)   | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | ---------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.416 ms ± 1.758 ms      | in 0.717 ms ± 0.029 ms       | in 0.754 ms ± 0.035 ms      | in 1.08 ms ± 0.294 ms          | in 1.395 ms ± 1.054 ms         |
| 2 B        | in 0.398 ms ± 0.048 ms      | in 0.604 ms ± 0.01 ms        | in 0.658 ms ± 0.014 ms      | in 0.884 ms ± 0.1 ms           | in 0.777 ms ± 0.097 ms         |
| 4 B        | in 0.35 ms ± 0.021 ms       | in 0.579 ms ± 0.012 ms       | in 0.622 ms ± 0.038 ms      | in 0.9 ms ± 0.068 ms           | in 2.919 ms ± 4.412 ms         |
| 8 B        | in 0.357 ms ± 0.025 ms      | in 0.604 ms ± 0.007 ms       | in 0.635 ms ± 0.041 ms      | in 0.873 ms ± 0.119 ms         | in 0.782 ms ± 0.083 ms         |
| 16 B       | in 0.372 ms ± 0.029 ms      | in 0.628 ms ± 0.01 ms        | in 0.637 ms ± 0.031 ms      | in 0.93 ms ± 0.132 ms          | in 0.797 ms ± 0.057 ms         |
| 32 B       | in 0.432 ms ± 0.042 ms      | in 0.694 ms ± 0.017 ms       | in 0.708 ms ± 0.043 ms      | in 1.079 ms ± 0.229 ms         | in 0.892 ms ± 0.073 ms         |
| 64 B       | in 0.473 ms ± 0.025 ms      | in 0.821 ms ± now            | in 1.565 ms ± 1.374 ms      | in 1.325 ms ± 0.315 ms         | in 1.086 ms ± 0.139 ms         |
| 128 B      | in 0.587 ms ± 0.028 ms      | in 1.083 ms ± now            | in 1.1 ms ± 0.01 ms         | in 1.906 ms ± 0.611 ms         | in 1.467 ms ± 0.157 ms         |
| 256 B      | in 0.862 ms ± 0.048 ms      | in 1.639 ms ± 0.01 ms        | in 1.636 ms ± 0.019 ms      | in 2.828 ms ± 0.625 ms         | in 2.295 ms ± 0.27 ms          |
| 512 B      | in 1.348 ms ± 0.071 ms      | in 2.727 ms ± 0.026 ms       | in 2.658 ms ± 0.036 ms      | in 4.745 ms ± 1.206 ms         | in 3.809 ms ± 0.511 ms         |
| 1.024 kB   | in 2.355 ms ± 0.085 ms      | in 4.863 ms ± 0.015 ms       | in 4.723 ms ± 0.053 ms      | in 7.903 ms ± 0.726 ms         | in 6.457 ms ± 0.348 ms         |
| 2.048 kB   | in 4.37 ms ± 0.248 ms       | in 9.114 ms ± 0.032 ms       | in 8.784 ms ± 0.116 ms      | in 14.383 ms ± 0.081 ms        | in 12.085 ms ± 0.69 ms         |
| 4.096 kB   | in 8.313 ms ± 0.4 ms        | in 17.651 ms ± 0.154 ms      | in 16.909 ms ± 0.076 ms     | in 30.39 ms ± 0.261 ms         | in 25.826 ms ± 1.228 ms        |
| 8.192 kB   | in 16.343 ms ± 0.775 ms     | in 34.742 ms ± 0.365 ms      | in 32.504 ms ± 1.432 ms     | in 53.218 ms ± 0.062 ms        | in 46.772 ms ± 2.175 ms        |
| 16.384 kB  | in 37.435 ms ± 1.428 ms     | in 73.967 ms ± 0.434 ms      | in 70.553 ms ± 0.75 ms      | in 105.264 ms ± 0.177 ms       | in 92.701 ms ± 4.07 ms         |
| 32.768 kB  | in 66.395 ms ± 3.054 ms     | in 143.502 ms ± 4.892 ms     | in 134.101 ms ± 0.516 ms    | in 211.878 ms ± 0.447 ms       | in 187.634 ms ± 8.174 ms       |
| 65.536 kB  | in 135.02 ms ± 6 ms         | in 284.098 ms ± 23.2 ms      | in 276.528 ms ± 19.111 ms   | in 421.088 ms ± 3.215 ms       | in 363.832 ms ± 20.413 ms      |
| 131.072 kB | in 279.152 ms ± 11.136 ms   | in 591.593 ms ± 12.77 ms     | in 531.042 ms ± 5.765 ms    | in 838.661 ms ± 5.675 ms       | in 755.808 ms ± 37.034 ms      |
| 262.144 kB | in 663.785 ms ± 5.163 ms    | in 1,244.783 ms ± 22.384 ms  | in 1,280.881 ms ± 57.297 ms | in 1,877.496 ms ± 28.997 ms    | in 1,556.423 ms ± 85.589 ms    |
| 524.288 kB | in 1,313.371 ms ± 14.282 ms | in 2,510.64 ms ± 22.521 ms   | in 2,638.992 ms ± 23.64 ms  | in 3,878.171 ms ± 18.811 ms    | in 3,402.51 ms ± 161.939 ms    |
| 1.049 MB   | in 2,628.833 ms ± 54.597 ms | in 5,365.204 ms ± 230.585 ms | in 5,358.797 ms ± 74.527 ms | in 7,474.5 ms ± 409.244 ms     | in 7,161.178 ms ± 524.295 ms   |


</details>


### Chrome


<details>
<summary>structuredClone</summary>

|            | hasTransferables      | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | --------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.36 ms ± 0.472 ms | in 4.84 ms ± 4.781 ms      | in 2.68 ms ± 0.194 ms              | in 2.8 ms ± 0.19 ms                |
| 2 B        | in 0.1 ms ± now       | in 2.64 ms ± 0.136 ms      | in 2.7 ms ± 0.141 ms               | in 2.82 ms ± 0.376 ms              |
| 4 B        | in 0.1 ms ± 0.063 ms  | in 3.06 ms ± 0.776 ms      | in 2.92 ms ± 0.471 ms              | in 2.68 ms ± 0.232 ms              |
| 8 B        | in 0.1 ms ± now       | in 2.6 ms ± 0.268 ms       | in 2.68 ms ± 0.194 ms              | in 2.6 ms ± 0.11 ms                |
| 16 B       | in 0.1 ms ± 0.063 ms  | in 2.46 ms ± 0.12 ms       | in 2.74 ms ± 0.102 ms              | in 3.28 ms ± 0.87 ms               |
| 32 B       | in 0.08 ms ± 0.04 ms  | in 2.94 ms ± 0.981 ms      | in 3 ms ± 0.415 ms                 | in 2.84 ms ± 0.08 ms               |
| 64 B       | in 0.1 ms ± now       | in 2.56 ms ± 0.233 ms      | in 3.78 ms ± 1.281 ms              | in 4.96 ms ± 4.073 ms              |
| 128 B      | in 0.06 ms ± 0.049 ms | in 3.24 ms ± 1.136 ms      | in 3.26 ms ± 0.08 ms               | in 3.22 ms ± 0.075 ms              |
| 256 B      | in 0.06 ms ± 0.049 ms | in 3.5 ms ± 1.401 ms       | in 5.58 ms ± 2.91 ms               | in 3.94 ms ± 0.08 ms               |
| 512 B      | in 0.08 ms ± 0.075 ms | in 3.32 ms ± 0.098 ms      | in 5.82 ms ± 0.16 ms               | in 5.54 ms ± 0.185 ms              |
| 1.024 kB   | in 0.08 ms ± 0.075 ms | in 4.4 ms ± 0.063 ms       | in 9.08 ms ± 0.075 ms              | in 8.5 ms ± 0.21 ms                |
| 2.048 kB   | in 0.12 ms ± 0.04 ms  | in 10.78 ms ± 3.545 ms     | in 15.36 ms ± 0.233 ms             | in 17.34 ms ± 6.33 ms              |
| 4.096 kB   | in 1.1 ms ± 2.001 ms  | in 10.64 ms ± 0.28 ms      | in 28.18 ms ± 0.214 ms             | in 25.84 ms ± 0.102 ms             |
| 8.192 kB   | in 2.82 ms ± 5.39 ms  | in 19 ms ± 0.11 ms         | in 53.88 ms ± 0.271 ms             | in 49.36 ms ± 0.35 ms              |
| 16.384 kB  | in 0.2 ms ± 0.063 ms  | in 36.04 ms ± 0.287 ms     | in 107.86 ms ± 0.836 ms            | in 98.22 ms ± 1.019 ms             |
| 32.768 kB  | in 0.3 ms ± now       | in 98.86 ms ± 13.405 ms    | in 223.6 ms ± 3.184 ms             | in 199.78 ms ± 1.329 ms            |
| 65.536 kB  | in 0.78 ms ± 0.04 ms  | in 178.84 ms ± 16.123 ms   | in 441.62 ms ± 2.47 ms             | in 403.42 ms ± 2.248 ms            |
| 131.072 kB | in 1.7 ms ± 0.063 ms  | in 328.88 ms ± 18.706 ms   | in 893.74 ms ± 21.082 ms           | in 808.8 ms ± 2.873 ms             |
| 262.144 kB | in 4.1 ms ± 0.469 ms  | in 692.6 ms ± 19.565 ms    | in 1,830.38 ms ± 17.07 ms          | in 1,675.58 ms ± 31.854 ms         |
| 524.288 kB | in 15.7 ms ± 6.797 ms | in 1,344.4 ms ± 22.311 ms  | in 3,628.54 ms ± 53.795 ms         | in 3,299.6 ms ± 23.257 ms          |
| 1.049 MB   | in 17.3 ms ± 4.623 ms | in 2,658.22 ms ± 21.158 ms | in 7,199.28 ms ± 28.522 ms         | in 6,608.02 ms ± 44.109 ms         |

</details>


<details>
<summary>MessageChannel</summary>

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 4.02 ms ± 2.918 ms      | in 1.2 ms ± 0.303 ms       | in 1.7 ms ± 0.063 ms        | in 3.3 ms ± 1.524 ms           | in 2.38 ms ± 0.402 ms          |
| 2 B        | in 1.66 ms ± 1.675 ms      | in 0.86 ms ± 0.224 ms      | in 0.96 ms ± 0.08 ms        | in 1.52 ms ± 0.223 ms          | in 1.6 ms ± 0.283 ms           |
| 4 B        | in 2.88 ms ± 4.311 ms      | in 0.9 ms ± 0.21 ms        | in 1.1 ms ± 0.179 ms        | in 1.38 ms ± 0.248 ms          | in 1.32 ms ± 0.172 ms          |
| 8 B        | in 0.72 ms ± 0.204 ms      | in 0.88 ms ± 0.117 ms      | in 0.94 ms ± 0.08 ms        | in 1.3 ms ± 0.19 ms            | in 1.28 ms ± 0.183 ms          |
| 16 B       | in 0.96 ms ± 0.273 ms      | in 0.94 ms ± 0.185 ms      | in 0.98 ms ± 0.04 ms        | in 1.42 ms ± 0.256 ms          | in 1.36 ms ± 0.162 ms          |
| 32 B       | in 0.8 ms ± 0.179 ms       | in 0.96 ms ± 0.12 ms       | in 1.02 ms ± 0.04 ms        | in 1.64 ms ± 0.338 ms          | in 1.46 ms ± 0.185 ms          |
| 64 B       | in 1.12 ms ± 0.549 ms      | in 1.16 ms ± 0.08 ms       | in 1.12 ms ± 0.075 ms       | in 1.88 ms ± 0.331 ms          | in 1.74 ms ± 0.196 ms          |
| 128 B      | in 1.08 ms ± 0.172 ms      | in 1.4 ms ± 0.167 ms       | in 1.52 ms ± 0.204 ms       | in 2.52 ms ± 0.397 ms          | in 2.2 ms ± 0.11 ms            |
| 256 B      | in 1.32 ms ± 0.232 ms      | in 1.96 ms ± 0.08 ms       | in 2 ms ± 0.089 ms          | in 3.94 ms ± 0.689 ms          | in 3.38 ms ± 0.194 ms          |
| 512 B      | in 1.76 ms ± 0.102 ms      | in 3.2 ms ± 0.126 ms       | in 2.96 ms ± 0.049 ms       | in 6.32 ms ± 1.347 ms          | in 5.5 ms ± 0.329 ms           |
| 1.024 kB   | in 2.76 ms ± 0.102 ms      | in 5.62 ms ± 0.248 ms      | in 5.16 ms ± 0.12 ms        | in 10.72 ms ± 0.733 ms         | in 10.08 ms ± 0.747 ms         |
| 2.048 kB   | in 4.82 ms ± 0.098 ms      | in 13.88 ms ± 7.311 ms     | in 9.3 ms ± 0.063 ms        | in 20.42 ms ± 1.887 ms         | in 21.28 ms ± 6.968 ms         |
| 4.096 kB   | in 9.54 ms ± 0.644 ms      | in 19.88 ms ± 0.293 ms     | in 19.72 ms ± 0.232 ms      | in 41.64 ms ± 2.732 ms         | in 40.36 ms ± 7.295 ms         |
| 8.192 kB   | in 18.12 ms ± 0.449 ms     | in 40.72 ms ± 0.813 ms     | in 35.88 ms ± 0.376 ms      | in 72.2 ms ± 0.965 ms          | in 66.02 ms ± 0.564 ms         |
| 16.384 kB  | in 35.92 ms ± 0.426 ms     | in 78.8 ms ± 3.253 ms      | in 72.96 ms ± 4.297 ms      | in 144.18 ms ± 1.755 ms        | in 131 ms ± 0.395 ms           |
| 32.768 kB  | in 77.32 ms ± 0.306 ms     | in 176.32 ms ± 4.221 ms    | in 150.34 ms ± 0.784 ms     | in 299.34 ms ± 6.336 ms        | in 273 ms ± 2.279 ms           |
| 65.536 kB  | in 155.06 ms ± 0.422 ms    | in 340.04 ms ± 2.276 ms    | in 307.02 ms ± 1.275 ms     | in 599.54 ms ± 1.346 ms        | in 554.72 ms ± 1.775 ms        |
| 131.072 kB | in 330.8 ms ± 24.092 ms    | in 695.12 ms ± 29.697 ms   | in 659.62 ms ± 9.793 ms     | in 1,245.78 ms ± 6.637 ms      | in 1,150.62 ms ± 10.94 ms      |
| 262.144 kB | in 709.56 ms ± 22.654 ms   | in 1,433.26 ms ± 12.603 ms | in 1,386.5 ms ± 26.126 ms   | in 2,601.32 ms ± 6.078 ms      | in 2,318.4 ms ± 27.543 ms      |
| 524.288 kB | in 1,331.06 ms ± 27.991 ms | in 2,809.58 ms ± 31.73 ms  | in 2,642.22 ms ± 36.446 ms  | in 5,229.32 ms ± 65.415 ms     | in 4,851.66 ms ± 82.191 ms     |
| 1.049 MB   | in 2,595.5 ms ± 23.209 ms  | in 5,543.56 ms ± 42.756 ms | in 5,248.46 ms ± 256.421 ms | in 10,046.1 ms ± 341.161 ms    | in 9,540.88 ms ± 227.292 ms    |

</details>


<details>
<summary>Worker</summary>

|            | hasTransferables           | postMessage (no transfers)  | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | --------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 15 ms ± 2.17 ms         | in 1.4 ms ± 0.346 ms        | in 3.18 ms ± 2.102 ms      | in 2.66 ms ± 0.539 ms          | in 3.1 ms ± 0.645 ms           |
| 2 B        | in 0.92 ms ± 0.172 ms      | in 1.1 ms ± 0.219 ms        | in 3.26 ms ± 2.703 ms      | in 4.68 ms ± 2.529 ms          | in 2.84 ms ± 0.92 ms           |
| 4 B        | in 0.84 ms ± 0.102 ms      | in 1.32 ms ± 0.571 ms       | in 2.24 ms ± 1.803 ms      | in 1.46 ms ± 0.12 ms           | in 2.44 ms ± 0.889 ms          |
| 8 B        | in 1.56 ms ± 1.67 ms       | in 1.06 ms ± 0.12 ms        | in 1.34 ms ± 0.233 ms      | in 1.64 ms ± 0.35 ms           | in 3.5 ms ± 3.254 ms           |
| 16 B       | in 0.84 ms ± 0.049 ms      | in 1.02 ms ± 0.117 ms       | in 1.34 ms ± 0.361 ms      | in 2.34 ms ± 1.389 ms          | in 1.98 ms ± 0.755 ms          |
| 32 B       | in 0.88 ms ± 0.194 ms      | in 1.24 ms ± 0.273 ms       | in 1.44 ms ± 0.484 ms      | in 4.92 ms ± 3.407 ms          | in 4.4 ms ± 3.254 ms           |
| 64 B       | in 0.86 ms ± 0.136 ms      | in 1.18 ms ± 0.098 ms       | in 1.5 ms ± 0.374 ms       | in 2.38 ms ± 0.286 ms          | in 4.34 ms ± 3.13 ms           |
| 128 B      | in 0.96 ms ± 0.185 ms      | in 1.48 ms ± 0.075 ms       | in 1.84 ms ± 0.427 ms      | in 3.44 ms ± 0.467 ms          | in 3.86 ms ± 1.823 ms          |
| 256 B      | in 1.28 ms ± 0.117 ms      | in 2.56 ms ± 0.162 ms       | in 2.22 ms ± 0.349 ms      | in 5.08 ms ± 1.623 ms          | in 5.62 ms ± 2.416 ms          |
| 512 B      | in 2 ms ± 0.167 ms         | in 3.24 ms ± 0.102 ms       | in 3.46 ms ± 0.484 ms      | in 6.68 ms ± 0.88 ms           | in 18.34 ms ± 10.026 ms        |
| 1.024 kB   | in 2.82 ms ± 0.04 ms       | in 5.5 ms ± 0.063 ms        | in 5.4 ms ± 0.469 ms       | in 12.66 ms ± 3.7 ms           | in 16.36 ms ± 5.87 ms          |
| 2.048 kB   | in 5.08 ms ± 0.194 ms      | in 10.36 ms ± 0.102 ms      | in 9.48 ms ± 0.271 ms      | in 21.62 ms ± 6.905 ms         | in 20.44 ms ± 7.787 ms         |
| 4.096 kB   | in 9.2 ms ± 0.063 ms       | in 19.5 ms ± 0.155 ms       | in 18.56 ms ± 0.739 ms     | in 34.84 ms ± 1.32 ms          | in 32.5 ms ± 2.265 ms          |
| 8.192 kB   | in 61.7 ms ± 52.628 ms     | in 38.68 ms ± 0.172 ms      | in 35.72 ms ± 1.17 ms      | in 74.1 ms ± 11.858 ms         | in 61.06 ms ± 0.388 ms         |
| 16.384 kB  | in 35.96 ms ± 0.508 ms     | in 77.62 ms ± 0.366 ms      | in 71.08 ms ± 1.005 ms     | in 138.02 ms ± 1.336 ms        | in 125.08 ms ± 0.733 ms        |
| 32.768 kB  | in 95.98 ms ± 37.971 ms    | in 170.92 ms ± 7.253 ms     | in 160.26 ms ± 6.598 ms    | in 281.5 ms ± 1.985 ms         | in 260.2 ms ± 0.815 ms         |
| 65.536 kB  | in 156.22 ms ± 0.752 ms    | in 341.96 ms ± 2.563 ms     | in 326.84 ms ± 18.671 ms   | in 574.88 ms ± 1.828 ms        | in 536.02 ms ± 9.67 ms         |
| 131.072 kB | in 323.34 ms ± 0.993 ms    | in 711.96 ms ± 17.654 ms    | in 643.82 ms ± 17.574 ms   | in 1,168.96 ms ± 21.285 ms     | in 1,106.42 ms ± 32.171 ms     |
| 262.144 kB | in 648.78 ms ± 18.413 ms   | in 1,433.32 ms ± 28.825 ms  | in 1,366.54 ms ± 47.855 ms | in 2,407.92 ms ± 15.127 ms     | in 2,236.04 ms ± 27.731 ms     |
| 524.288 kB | in 1,391.7 ms ± 34.074 ms  | in 2,858.42 ms ± 28.597 ms  | in 2,710 ms ± 35.65 ms     | in 4,823.68 ms ± 22.804 ms     | in 4,588.24 ms ± 39.343 ms     |
| 1.049 MB   | in 2,729.64 ms ± 81.521 ms | in 5,816.64 ms ± 138.713 ms | in 5,444.62 ms ± 66.324 ms | in 9,460.62 ms ± 111.766 ms    | in 8,812.24 ms ± 31.934 ms     |

</details>


### Firefox


<details>
<summary>structuredClone</summary>

|            | hasTransferables      | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | --------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms    | in 0.4 ms ± 0.8 ms         | in 1.6 ms ± 1.2 ms                 | in 1.2 ms ± 0.4 ms                 |
| 2 B        | in 0.2 ms ± 0.4 ms    | in 0.6 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 4 B        | in 0.4 ms ± 0.49 ms   | in 0.4 ms ± 0.49 ms        | in 1.2 ms ± 0.4 ms                 | in 1 second ± now                  |
| 8 B        | now ± now             | in 0.2 ms ± 0.4 ms         | in 1 second ± now                  | in 1 second ± now                  |
| 16 B       | in 0.2 ms ± 0.4 ms    | in 0.4 ms ± 0.49 ms        | in 1 second ± now                  | in 0.8 ms ± 0.4 ms                 |
| 32 B       | now ± now             | in 0.4 ms ± 0.49 ms        | in 1.4 ms ± 0.49 ms                | in 1.4 ms ± 0.49 ms                |
| 64 B       | now ± now             | in 0.8 ms ± 0.4 ms         | in 4 ms ± 2.098 ms                 | in 2 ms ± now                      |
| 128 B      | now ± now             | in 0.6 ms ± 0.49 ms        | in 4.4 ms ± 0.8 ms                 | in 3.4 ms ± 0.49 ms                |
| 256 B      | now ± now             | in 0.6 ms ± 0.49 ms        | in 6.8 ms ± 0.748 ms               | in 6.2 ms ± 0.4 ms                 |
| 512 B      | in 0.2 ms ± 0.4 ms    | in 1 second ± now          | in 13.4 ms ± 0.49 ms               | in 12.8 ms ± 2.135 ms              |
| 1.024 kB   | now ± now             | in 1 second ± now          | in 24.8 ms ± 1.166 ms              | in 21 ms ± 1.095 ms                |
| 2.048 kB   | in 0.2 ms ± 0.4 ms    | in 1.8 ms ± 0.4 ms         | in 48 ms ± 3.633 ms                | in 41.4 ms ± 0.49 ms               |
| 4.096 kB   | now ± now             | in 4 ms ± 0.632 ms         | in 93 ms ± 3.578 ms                | in 85.2 ms ± 2.638 ms              |
| 8.192 kB   | in 0.8 ms ± 0.4 ms    | in 6.6 ms ± 0.49 ms        | in 186.2 ms ± 5.075 ms             | in 166.2 ms ± 5.913 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms   | in 10.4 ms ± 0.49 ms       | in 356.2 ms ± 7.985 ms             | in 339.6 ms ± 9.521 ms             |
| 32.768 kB  | in 1 second ± now     | in 21 ms ± 1.673 ms        | in 699 ms ± 9.529 ms               | in 673.8 ms ± 23.566 ms            |
| 65.536 kB  | in 1.2 ms ± 0.4 ms    | in 38.2 ms ± 2.135 ms      | in 1,408 ms ± 24.017 ms            | in 1,306 ms ± 29.1 ms              |
| 131.072 kB | in 2 ms ± 0.632 ms    | in 85 ms ± 1.897 ms        | in 2,747.8 ms ± 49.061 ms          | in 2,657.2 ms ± 37.992 ms          |
| 262.144 kB | in 4.8 ms ± 0.98 ms   | in 166.6 ms ± 8.546 ms     | in 5,501 ms ± 100.008 ms           | in 5,436 ms ± 123.429 ms           |
| 524.288 kB | in 10 ms ± 0.632 ms   | in 331.4 ms ± 11.074 ms    | in 10,975.4 ms ± 181.179 ms        | in 10,622.4 ms ± 159.962 ms        |
| 1.049 MB   | in 18.2 ms ± 0.748 ms | in 615.6 ms ± 31.847 ms    | in 21,617 ms ± 148.277 ms          | in 21,196 ms ± 271.634 ms          |

</details>


<details>
<summary>MessageChannel</summary>

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 12.8 ms ± 1.939 ms      | in 5.6 ms ± 2.728 ms       | in 15.8 ms ± 1.327 ms      | in 18 ms ± 4.94 ms             | in 11.2 ms ± 2.315 ms          |
| 2 B        | in 4.6 ms ± 1.2 ms         | in 4.2 ms ± 1.939 ms       | in 4.8 ms ± 3.124 ms       | in 5.8 ms ± 1.72 ms            | in 5 ms ± 1.549 ms             |
| 4 B        | in 4.4 ms ± 0.49 ms        | in 3.4 ms ± 0.8 ms         | in 3.4 ms ± 0.8 ms         | in 5 ms ± 0.632 ms             | in 5.2 ms ± 2.482 ms           |
| 8 B        | in 6.6 ms ± 2.577 ms       | in 3 ms ± 1.095 ms         | in 4.4 ms ± 2.871 ms       | in 6.2 ms ± 3.059 ms           | in 6.6 ms ± 4.317 ms           |
| 16 B       | in 4.6 ms ± 1.497 ms       | in 4.4 ms ± 3.826 ms       | in 6.6 ms ± 3.774 ms       | in 5.2 ms ± 1.939 ms           | in 6.6 ms ± 3.262 ms           |
| 32 B       | in 4.2 ms ± 1.939 ms       | in 5.2 ms ± 2.482 ms       | in 3.6 ms ± 1.02 ms        | in 7 ms ± 3.098 ms             | in 5.2 ms ± 0.98 ms            |
| 64 B       | in 7.6 ms ± 2.577 ms       | in 4 ms ± 0.632 ms         | in 8.2 ms ± 3.544 ms       | in 11.2 ms ± 5.418 ms          | in 7.8 ms ± 3.6 ms             |
| 128 B      | in 5.2 ms ± 0.748 ms       | in 5 ms ± 1.414 ms         | in 5.2 ms ± 2.227 ms       | in 13.2 ms ± 4.167 ms          | in 12 ms ± 1.897 ms            |
| 256 B      | in 4.2 ms ± 0.748 ms       | in 6.8 ms ± 3.25 ms        | in 5.2 ms ± 1.6 ms         | in 21 ms ± 8.025 ms            | in 20.2 ms ± 12.624 ms         |
| 512 B      | in 4.8 ms ± 0.98 ms        | in 6.6 ms ± 1.02 ms        | in 6.2 ms ± 1.166 ms       | in 27.8 ms ± 7.467 ms          | in 28.2 ms ± 8.232 ms          |
| 1.024 kB   | in 7 ms ± 1.673 ms         | in 8.6 ms ± 0.49 ms        | in 7.4 ms ± 0.49 ms        | in 42.8 ms ± 5.671 ms          | in 35.2 ms ± 3.919 ms          |
| 2.048 kB   | in 11.8 ms ± 4.707 ms      | in 17.8 ms ± 5.845 ms      | in 16 ms ± 4.05 ms         | in 67 ms ± 4.858 ms            | in 56.8 ms ± 1.939 ms          |
| 4.096 kB   | in 22 ms ± 5.099 ms        | in 37 ms ± 14.56 ms        | in 24.8 ms ± 1.939 ms      | in 134.8 ms ± 9.064 ms         | in 112.4 ms ± 7.283 ms         |
| 8.192 kB   | in 30.8 ms ± 4.4 ms        | in 56.8 ms ± 4.308 ms      | in 51.6 ms ± 4.8 ms        | in 240.6 ms ± 2.332 ms         | in 225.2 ms ± 15.942 ms        |
| 16.384 kB  | in 54.6 ms ± 3.007 ms      | in 104.2 ms ± 10.284 ms    | in 104.6 ms ± 12.862 ms    | in 440 ms ± 10.991 ms          | in 430.8 ms ± 11.303 ms        |
| 32.768 kB  | in 119.8 ms ± 11.285 ms    | in 247.2 ms ± 20.644 ms    | in 223.2 ms ± 35.504 ms    | in 905 ms ± 14.832 ms          | in 897.4 ms ± 25.041 ms        |
| 65.536 kB  | in 225.8 ms ± 22.293 ms    | in 388.4 ms ± 33.524 ms    | in 410 ms ± 23.108 ms      | in 1,771.4 ms ± 24.434 ms      | in 1,763 ms ± 36.403 ms        |
| 131.072 kB | in 485.8 ms ± 52.335 ms    | in 931.2 ms ± 87.082 ms    | in 895.4 ms ± 67.849 ms    | in 3,628.2 ms ± 76.167 ms      | in 3,568.6 ms ± 47.42 ms       |
| 262.144 kB | in 1,059.8 ms ± 130.467 ms | in 2,065.2 ms ± 142.72 ms  | in 1,978.4 ms ± 99.192 ms  | in 7,330.2 ms ± 61.225 ms      | in 7,045.8 ms ± 42.897 ms      |
| 524.288 kB | in 2,057.8 ms ± 170.511 ms | in 4,229.2 ms ± 237.286 ms | in 3,885.8 ms ± 264.246 ms | in 14,335.4 ms ± 126.356 ms    | in 14,169.4 ms ± 154.443 ms    |
| 1.049 MB   | in 4,164 ms ± 368.028 ms   | in 8,071.8 ms ± 345.148 ms | in 7,883.4 ms ± 286.049 ms | in 28,992 ms ± 603.122 ms      | in 28,835.4 ms ± 413.125 ms    |

</details>


<details>
<summary>Worker</summary>

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 41.2 ms ± 24.053 ms  | in 2.8 ms ± 1.327 ms       | in 8.2 ms ± 2.713 ms       | in 19 ms ± 2.449 ms            | in 10.8 ms ± 4.167 ms          |
| 2 B        | in 4.2 ms ± 2.993 ms    | in 2.2 ms ± 0.98 ms        | in 5.8 ms ± 3.709 ms       | in 4 ms ± 1.549 ms             | in 4.2 ms ± 1.72 ms            |
| 4 B        | in 2 ms ± 0.894 ms      | in 2.4 ms ± 1.497 ms       | in 1 second ± now          | in 3.8 ms ± 1.6 ms             | in 3.4 ms ± 1.744 ms           |
| 8 B        | in 1.6 ms ± 0.49 ms     | in 2 ms ± 0.632 ms         | in 1.6 ms ± 0.8 ms         | in 2.8 ms ± 1.166 ms           | in 3 ms ± 1.549 ms             |
| 16 B       | in 2.4 ms ± 1.497 ms    | in 2 ms ± 0.894 ms         | in 1.4 ms ± 0.49 ms        | in 4.4 ms ± 2.8 ms             | in 4.2 ms ± 2.04 ms            |
| 32 B       | in 1.4 ms ± 0.49 ms     | in 1.6 ms ± 0.49 ms        | in 1.4 ms ± 0.49 ms        | in 4.6 ms ± 3.2 ms             | in 4.2 ms ± 2.04 ms            |
| 64 B       | in 3.2 ms ± 2.713 ms    | in 2 ms ± 0.894 ms         | in 1.4 ms ± 0.49 ms        | in 7 ms ± 2.966 ms             | in 5.4 ms ± 1.356 ms           |
| 128 B      | in 3.2 ms ± 1.6 ms      | in 4 ms ± 2.28 ms          | in 2.6 ms ± 1.02 ms        | in 12.4 ms ± 6.375 ms          | in 11 ms ± 3.742 ms            |
| 256 B      | in 2.6 ms ± 2.245 ms    | in 2.4 ms ± 0.49 ms        | in 2.2 ms ± 1.166 ms       | in 12.2 ms ± 5.154 ms          | in 11.8 ms ± 2.227 ms          |
| 512 B      | in 3.6 ms ± 1.2 ms      | in 3.6 ms ± 0.8 ms         | in 3.4 ms ± 0.8 ms         | in 22.2 ms ± 5.492 ms          | in 15.8 ms ± 3.763 ms          |
| 1.024 kB   | in 6 ms ± 4.147 ms      | in 10.8 ms ± 5.269 ms      | in 4.2 ms ± 1.47 ms        | in 38.2 ms ± 9.516 ms          | in 27.6 ms ± 1.356 ms          |
| 2.048 kB   | in 3.8 ms ± 0.748 ms    | in 7 ms ± 0.632 ms         | in 4 ms ± now              | in 64 ms ± 4.195 ms            | in 59.2 ms ± 11.479 ms         |
| 4.096 kB   | in 10.4 ms ± 4.758 ms   | in 11.8 ms ± 2.227 ms      | in 12.4 ms ± 5.276 ms      | in 121.2 ms ± 11.99 ms         | in 99.2 ms ± 7.386 ms          |
| 8.192 kB   | in 18.4 ms ± 4.176 ms   | in 23.4 ms ± 5.083 ms      | in 17.6 ms ± 4.128 ms      | in 227.6 ms ± 15.679 ms        | in 195 ms ± 13.431 ms          |
| 16.384 kB  | in 22.2 ms ± 2.786 ms   | in 48 ms ± 27.151 ms       | in 27.8 ms ± 2.482 ms      | in 396.2 ms ± 9.537 ms         | in 392 ms ± 7.183 ms           |
| 32.768 kB  | in 35.2 ms ± 11.285 ms  | in 96.6 ms ± 25.057 ms     | in 57.4 ms ± 6.53 ms       | in 805.4 ms ± 14.513 ms        | in 754.6 ms ± 19.886 ms        |
| 65.536 kB  | in 53.4 ms ± 7.446 ms   | in 152.2 ms ± 11.034 ms    | in 94.6 ms ± 5.276 ms      | in 1,576.2 ms ± 53.252 ms      | in 1,470.8 ms ± 52.389 ms      |
| 131.072 kB | in 104.4 ms ± 5.122 ms  | in 312.2 ms ± 37.005 ms    | in 176.2 ms ± 13.106 ms    | in 3,097.6 ms ± 82.74 ms       | in 2,928 ms ± 80.506 ms        |
| 262.144 kB | in 210.6 ms ± 24.638 ms | in 681.2 ms ± 44.557 ms    | in 360.4 ms ± 26.234 ms    | in 6,189.8 ms ± 195.046 ms     | in 5,838.6 ms ± 137.683 ms     |
| 524.288 kB | in 368.8 ms ± 22.319 ms | in 1,273 ms ± 128.524 ms   | in 676.4 ms ± 47.064 ms    | in 12,122.4 ms ± 371.699 ms    | in 11,783.8 ms ± 639.944 ms    |
| 1.049 MB   | in 735 ms ± 39.446 ms   | in 2,390.8 ms ± 119.906 ms | in 1,361.8 ms ± 122.632 ms | in 24,512.6 ms ± 874.462 ms    | in 24,033.2 ms ± 1,242.784 ms  |

</details>


### Safari


<details>
<summary>structuredClone</summary>

|            | hasTransferables       | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms     | in 0.6 ms ± 0.49 ms        | in 1.6 ms ± 1.2 ms                 | in 1 second ± now                  |
| 2 B        | now ± now              | in 0.8 ms ± 0.4 ms         | in 1 second ± now                  | in 1 second ± now                  |
| 4 B        | in 0.2 ms ± 0.4 ms     | in 0.2 ms ± 0.4 ms         | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 8 B        | now ± now              | in 0.4 ms ± 0.49 ms        | in 1 second ± now                  | in 1 second ± now                  |
| 16 B       | now ± now              | now ± now                  | in 1.4 ms ± 0.49 ms                | in 1 second ± now                  |
| 32 B       | now ± now              | now ± now                  | in 1.4 ms ± 0.49 ms                | in 1.2 ms ± 0.4 ms                 |
| 64 B       | now ± now              | in 0.6 ms ± 0.49 ms        | in 2.8 ms ± 0.748 ms               | in 2.2 ms ± 0.4 ms                 |
| 128 B      | now ± now              | in 0.2 ms ± 0.4 ms         | in 3.8 ms ± 0.748 ms               | in 3.4 ms ± 0.49 ms                |
| 256 B      | in 0.4 ms ± 0.49 ms    | in 0.2 ms ± 0.4 ms         | in 6.4 ms ± 0.49 ms                | in 6.2 ms ± 0.98 ms                |
| 512 B      | now ± now              | in 1 second ± now          | in 12.2 ms ± 0.98 ms               | in 10.4 ms ± 0.49 ms               |
| 1.024 kB   | now ± now              | in 1 second ± now          | in 23 ms ± 1.265 ms                | in 20 ms ± 0.632 ms                |
| 2.048 kB   | now ± now              | in 1.2 ms ± 0.4 ms         | in 45 ms ± 0.894 ms                | in 39.4 ms ± 0.49 ms               |
| 4.096 kB   | in 0.2 ms ± 0.4 ms     | in 3.8 ms ± 1.72 ms        | in 88.2 ms ± 1.327 ms              | in 80.4 ms ± 2.871 ms              |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | in 6.4 ms ± 0.49 ms        | in 173.4 ms ± 1.744 ms             | in 156.4 ms ± 4.224 ms             |
| 16.384 kB  | in 0.2 ms ± 0.4 ms     | in 9.4 ms ± 1.02 ms        | in 323 ms ± 4.561 ms               | in 316 ms ± 19.026 ms              |
| 32.768 kB  | in 1 second ± now      | in 17.4 ms ± 1.855 ms      | in 651.2 ms ± 4.445 ms             | in 619.8 ms ± 9.064 ms             |
| 65.536 kB  | in 1 second ± 0.632 ms | in 33.6 ms ± 1.625 ms      | in 1,290.4 ms ± 22.33 ms           | in 1,269.4 ms ± 19.896 ms          |
| 131.072 kB | in 1.6 ms ± 0.49 ms    | in 73.8 ms ± 1.72 ms       | in 2,584.2 ms ± 36.135 ms          | in 2,496.8 ms ± 40.445 ms          |
| 262.144 kB | in 4 ms ± 0.894 ms     | in 141.4 ms ± 7.632 ms     | in 5,103.2 ms ± 23.095 ms          | in 4,980.8 ms ± 39.957 ms          |
| 524.288 kB | in 8.6 ms ± 2.059 ms   | in 279 ms ± 4.604 ms       | in 10,191 ms ± 118.786 ms          | in 10,004.2 ms ± 85.464 ms         |
| 1.049 MB   | in 17.4 ms ± 0.8 ms    | in 538 ms ± 23.858 ms      | in 20,322.4 ms ± 330.194 ms        | in 19,782.4 ms ± 219.27 ms         |

</details>


<details>
<summary>MessageChannel</summary>



</details>


<details>
<summary>Worker</summary>

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 34.4 ms ± 12.339 ms  | in 2.8 ms ± 2.638 ms       | in 5 ms ± 2.898 ms      | in 14 ms ± 3.033 ms            | in 8 ms ± 1.673 ms             |
| 2 B        | in 2.2 ms ± 1.939 ms    | in 0.8 ms ± 0.4 ms         | in 3.2 ms ± 2.315 ms    | in 4.4 ms ± 2.332 ms           | in 3.4 ms ± 1.855 ms           |
| 4 B        | in 1.2 ms ± 0.4 ms      | in 1 second ± now          | in 1.2 ms ± 0.4 ms      | in 2.8 ms ± 1.72 ms            | in 1.6 ms ± 0.49 ms            |
| 8 B        | in 3.4 ms ± 2.332 ms    | in 1 second ± 0.632 ms     | in 1 second ± 0.632 ms  | in 3.4 ms ± 2.154 ms           | in 2.8 ms ± 2.638 ms           |
| 16 B       | in 2.6 ms ± 1.356 ms    | in 2.6 ms ± 2.245 ms       | in 1 second ± now       | in 2 ms ± 0.632 ms             | in 2 ms ± 0.632 ms             |
| 32 B       | in 1 second ± now       | in 1.4 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms      | in 5.6 ms ± 3.611 ms           | in 2.2 ms ± 0.4 ms             |
| 64 B       | in 2.6 ms ± 2.059 ms    | in 1 second ± now          | in 1.2 ms ± 0.4 ms      | in 7.2 ms ± 4.874 ms           | in 4.6 ms ± 2.871 ms           |
| 128 B      | in 2.8 ms ± 2.227 ms    | in 1.4 ms ± 0.49 ms        | in 1.4 ms ± 0.49 ms     | in 6.4 ms ± 2.728 ms           | in 9 ms ± 2.28 ms              |
| 256 B      | in 1 second ± now       | in 1.4 ms ± 0.49 ms        | in 1.8 ms ± 0.4 ms      | in 10.2 ms ± 4.4 ms            | in 11 ms ± 1.897 ms            |
| 512 B      | in 5.6 ms ± 4.8 ms      | in 5 ms ± 5.02 ms          | in 3.4 ms ± 2.8 ms      | in 21 ms ± 7.403 ms            | in 15.2 ms ± 3.059 ms          |
| 1.024 kB   | in 3.6 ms ± 2.728 ms    | in 3.6 ms ± 0.8 ms         | in 4.8 ms ± 3.487 ms    | in 31.2 ms ± 4.445 ms          | in 24.6 ms ± 2.059 ms          |
| 2.048 kB   | in 3 ms ± 1.095 ms      | in 5 ms ± 0.632 ms         | in 5.8 ms ± 3.059 ms    | in 63.8 ms ± 10.206 ms         | in 46.6 ms ± 5.004 ms          |
| 4.096 kB   | in 4.4 ms ± 0.49 ms     | in 9 ms ± 1.095 ms         | in 9.6 ms ± 4.128 ms    | in 97.6 ms ± 9.091 ms          | in 84.4 ms ± 4.716 ms          |
| 8.192 kB   | in 9.2 ms ± 2.713 ms    | in 17.2 ms ± 3.816 ms      | in 12.8 ms ± 0.748 ms   | in 205 ms ± 15.633 ms          | in 182.2 ms ± 4.308 ms         |
| 16.384 kB  | in 17.6 ms ± 4.271 ms   | in 26.6 ms ± 2.059 ms      | in 22.8 ms ± 2.786 ms   | in 354.2 ms ± 14.386 ms        | in 331.4 ms ± 7.31 ms          |
| 32.768 kB  | in 22.8 ms ± 1.166 ms   | in 61 ms ± 2.608 ms        | in 41.8 ms ± 5.344 ms   | in 704.8 ms ± 17.871 ms        | in 676.6 ms ± 28.689 ms        |
| 65.536 kB  | in 44.4 ms ± 1.356 ms   | in 128.2 ms ± 5.845 ms     | in 81.6 ms ± 7.864 ms   | in 1,380.6 ms ± 13.306 ms      | in 1,323.2 ms ± 41.662 ms      |
| 131.072 kB | in 92.6 ms ± 5.276 ms   | in 252.8 ms ± 19.631 ms    | in 156.8 ms ± 8.424 ms  | in 2,711 ms ± 50.577 ms        | in 2,635.6 ms ± 86.217 ms      |
| 262.144 kB | in 185.8 ms ± 6.21 ms   | in 539 ms ± 69.888 ms      | in 314.4 ms ± 19.231 ms | in 5,364.4 ms ± 107.548 ms     | in 5,247.8 ms ± 130.177 ms     |
| 524.288 kB | in 321.8 ms ± 20.351 ms | in 1,029.8 ms ± 78.311 ms  | in 621.6 ms ± 20.264 ms | in 10,844.8 ms ± 242.852 ms    | in 10,595.8 ms ± 309.165 ms    |
| 1.049 MB   | in 673.4 ms ± 37.644 ms | in 2,071.8 ms ± 218.478 ms | in 1,183 ms ± 66.753 ms | in 21,731.4 ms ± 585.302 ms    | in 20,947 ms ± 585.932 ms      |

</details>


<br>

## Asterisks\* & Limitations

There are lots of asterisks involved with [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects). 
1. Not all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) are supported in all browsers.
2. Not all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) can be transfered between Workers and the main thread.
3. `structuredClone` when trying to clone an object that is transferable will crashes if the transferable objects aren't listed in the transfer list.
4. Only use this library when you don't know the shape of the object to be transfered as traversing the input object adds a delay, you can go through the [#benchmark](#benchmarks) above to view the delay in action.

Here is a list of issues that I've found so far.

* Safari does not support transferable objects with [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility), [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#browser_compatibility), and [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream#browser_compatibility)
* [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) & [`VideoFrame`](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame) are not supported on Firefox and Safari
* `OffscreenCanvas` is not supported on Safari
* In a reverse uno card action, **only** Safari supports [`RTCDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel) being transferable
* `Deno` doesn't support transferable `MessagePort`

### Transferable objects

The following are [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects):

- `ArrayBuffer`
- `MessagePort`
- `ImageBitmap`
- `ReadableStream`
- `WritableStream`
- `TransformStream`
- `DataView`
- `AudioData`
- `ImageBitmap`
- `VideoFrame`
- `OffscreenCanvas`
- `RTCDataChannel`

From the brief research I've done on the topic, I've found that 

- **`ArrayBuffer`**: Can be transferred between Workers and the main thread. It's really the only type of data buffer that can be transferred. 
- **`TypedArray`**: A data view of an `ArrayBuffer` (e.g. `Uint8Array`, `Int32Array`, `Float64Array`, etc.). They ***can't*** directly be transferred between Workers and the main thread, but the `ArrayBuffer` they contain can. Due to this fact, it's possible if you have multiple `TypedArray`'s that all share the same `ArrayBuffer`, that only that `ArrayBuffer` is transfered. 
- **`MessagePort`** (`~`): A port to communicate with other workers. Can be transferred between Workers and the main thread. Support for this isn't guranteed in all js endpoints, and can be finicky in `Deno` 
- **`ImageBitmap`** (`^`): An image that can be transferred between Workers and the main thread. It represents a bitmap image which can be drawn to a `<canvas>` without undue latency. It can also be used as textures in WebGL.
- **`OffscreenCanvas`**: A canvas that can be transferred between Workers and the main thread. It can also be used as a texture in WebGL.
- **`(Readable/Writable/Transform)Stream`**: A stream that can be transferred between Workers and the main thread. They can also be used to create `Response` objects. Support across js runtimes is very spotty


> _`^` unverified/untested - Make sure to do your own research for this specific use case._

> _`~` spotty support - Check below for js runtimes where it's ok to use_


Here is a support matrix that might help your decision making process,

|                              | Chrome | Firefox | Safari | Node   | Deno   | Bun    | 
| ---------------------------- | ------ | ------- | ------ | ------ | ------ | ------ | 
| structuredClone (channel)    | false  | false   | false  | true   | true   | true   |   
| structuredClone (streams)    | true   | true    | false  | true   | false  | true   | 
| Worker.postMessage (channel) | false  | false   | false  | -      | true   | -      |   
| Worker.postMessage (streams) | false  | false   | false  | -      | false  | -      |   


So, do your own research before using.

<br>


## FAQ & Glossary

### What are transferable objects?

Transferable objects are objects that can be transferred between Workers and the main thread. It works sort of like ploping out the piece of memory attached to the Worker for the transferable object (e.g. an ArrayBuffer) and then moving that piece of memory to the main-thread for use by a newly created [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) and vice-versa. You can read more about them on the [MDN docs](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).

> Note: Notable exceptions to the transferable objects list are `Blob` and `File` objects, which are not transferable, but can be cloned.

<br />


### Why should I use this?

The main use case of the `transferables` library is for determining when there is a transferable object and/or then listing said [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) out. A good example of when to use this is when working with [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). `structuredClone` errors out when using transferables objects as they are not cloneable, e.g. 

![Error shown when trying to use structuredClone with an object which contains a transferable object](assets/structuredclone-transfer-error.png)

> Warning: Remember the previous thread [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) are transfered from lose all access to the transfered data.

> Warning: There is a performance threshold for transferable objects, before which using transferable objects becomes genuinly slower, it's probably not worth it to use this library if you reach that threshold [#benchmark](#benchmark). 

<br />

### What is the difference between transferable objects and cloneable objects?

Transferable objects are objects that can be transferred between Workers and the main thread. They can be transferred from the main thread to a Worker, and vice versa. Cloneable objects are objects that can be cloned using the [structured clone algorithim](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), due to not all objects being cloneable we use [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) to move transfer uncloneable object to the new cloned object, [MDN - structured clone algorithim](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).



<br />



## Browser Support

| Chrome | Edge | Firefox | Safari |
| ------ | ---- | ------- | ------ |
| 7+     | 12+  | 41+     | 5+     |

Native support for `transferables` is actually rather good, but which [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) are supported is where the complexity comes in, [#astericks](#asterisks--limitations) covers these limitations.


## Contributing

> Thanks [@aaorris](https://github.com/aaorris) for the helping optimize performance.

I encourage you to use [pnpm](https://pnpm.io/configuring) to contribute to this repo, but you can also use [yarn](https://classic.yarnpkg.com/lang/en/) or [npm](https://npmjs.com) if you prefer.

Install all necessary packages

```bash
npm install
```

Then run tests

```bash
npm test
```

Build project

```bash
npm run build
```

You can also run the benchmarks

```bash
npm run benchmark:node:all
```

To run the browser benchmarks,
```bash
npm run playwright:init &&
npm run benchmark:browser
```

To run the deno & bun benchmarks (install [deno](https://deno.land/manual@v1.28.3/getting_started/installation) & [bun](https://bun.sh/))
```bash
npm run benchmark:deno:all &&
npm run benhmark:bun:all
```

> _Note: This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commits, so, please format your commits using the rules it sets out._

## Licence

See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).