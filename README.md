# transferables

[![Open Bundle](https://bundlejs.com/badge-light.svg)](https://bundlejs.com/?q=transferables&bundle "Check the total bundle size of transferables")

[NPM](https://www.npmjs.com/package/transferables) <span style="padding-inline: 1rem">|</span> [GitHub](https://github.com/okikio/transferables#readme) <span style="padding-inline: 1rem">|</span> [Licence](./LICENSE)

A utility library that lists out all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) that can be moved between Workers and the main thread\*.

> _`*` There are many [asterisks](#asterisks) involved in transferable objects, I've listed out some of them to be aware of, but as always, do your own research before using._

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
* `getTransferables` generates an [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) from the input.
* `isSupported` tests what transferable objects are actually supported (support isn't always guranteed) and returns an object with features that are supported.
* `isObject`, `isTypedArray`, `isStream`, `isMessageChannel`, `isTransferable`, and `filterOutDuplicates` are utility functions that are used internally by `transferable`.

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

> Note: `(Readable/Writeable/Transform)streams` aren't transferables in all js runtimes; devs can decide based off the runtime whether to support streams or not
 
> Note: depending on how large your object is you may blow through the `maxCount` (max iteration count), if you need to change the max number of iterations remember that--that might cause the thread to be blocked while it's computing.

```ts
/**
 * Quickly checks to see if input contains at least one transferable object, up to a max number of iterations
 * Thanks @aaorris
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

The benchmark ran 5 cycles for 3 different forms of transferable objects all in a transfer list of 132 objects with one run per object size ranging from `1 B` to `1,049 MB` (with 21 sizes from the total range).

We ran the benchmark with 
1. `structuredClone` (`All`)
2. `MessageChannel` (`All`)
3. `Worker` (`Deno`, `Chrome`, `Firefox`, and `Safari`)

> Note: `Worker`'s aren't supported in all runtimes   


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




</details>


<details>
<summary>Worker</summary>

|            | hasTransferables             | postMessage (no transfers)   | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | ---------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 5.274 ms ± 1.535 ms       | in 1.477 ms ± 0.176 ms       | in 2.144 ms ± 0.459 ms       | in 2.522 ms ± 0.279 ms         | in 2.109 ms ± 0.116 ms         |
| 2 B        | in 1.02 ms ± 0.257 ms        | in 0.829 ms ± 0.05 ms        | in 1.184 ms ± 0.166 ms       | in 1.641 ms ± 0.288 ms         | in 1.226 ms ± 0.074 ms         |
| 4 B        | in 1.029 ms ± 0.237 ms       | in 0.767 ms ± 0.056 ms       | in 1.055 ms ± 0.102 ms       | in 1.422 ms ± 0.129 ms         | in 1.141 ms ± 0.057 ms         |
| 8 B        | in 1.069 ms ± 0.266 ms       | in 0.75 ms ± 0.101 ms        | in 1.223 ms ± 0.119 ms       | in 1.234 ms ± 0.047 ms         | in 1.151 ms ± 0.051 ms         |
| 16 B       | in 1.098 ms ± 0.305 ms       | in 0.801 ms ± 0.119 ms       | in 1.087 ms ± 0.061 ms       | in 1.348 ms ± 0.051 ms         | in 1.204 ms ± 0.089 ms         |
| 32 B       | in 1.013 ms ± 0.235 ms       | in 0.893 ms ± 0.155 ms       | in 1.064 ms ± 0.066 ms       | in 1.685 ms ± 0.204 ms         | in 1.325 ms ± 0.14 ms          |
| 64 B       | in 1.19 ms ± 0.257 ms        | in 1.167 ms ± 0.248 ms       | in 1.181 ms ± 0.065 ms       | in 1.925 ms ± 0.209 ms         | in 1.605 ms ± 0.162 ms         |
| 128 B      | in 1.543 ms ± 0.331 ms       | in 1.38 ms ± 0.119 ms        | in 1.459 ms ± 0.076 ms       | in 2.33 ms ± 0.221 ms          | in 2.052 ms ± 0.301 ms         |
| 256 B      | in 2.16 ms ± 0.39 ms         | in 1.889 ms ± 0.279 ms       | in 2.036 ms ± 0.167 ms       | in 3.045 ms ± 0.255 ms         | in 2.811 ms ± 0.459 ms         |
| 512 B      | in 3.414 ms ± 0.677 ms       | in 2.968 ms ± 0.328 ms       | in 3.084 ms ± 0.219 ms       | in 4.97 ms ± 0.975 ms          | in 4.425 ms ± 0.284 ms         |
| 1.024 kB   | in 5.781 ms ± 1.047 ms       | in 5.615 ms ± 0.601 ms       | in 5.195 ms ± 0.511 ms       | in 6.621 ms ± 0.897 ms         | in 5.898 ms ± 0.095 ms         |
| 2.048 kB   | in 10.808 ms ± 2.161 ms      | in 9.578 ms ± 1.14 ms        | in 9.556 ms ± 1.458 ms       | in 12.216 ms ± 1.797 ms        | in 10.658 ms ± 0.304 ms        |
| 4.096 kB   | in 20.634 ms ± 4.081 ms      | in 19.337 ms ± 2.288 ms      | in 16.972 ms ± 1.144 ms      | in 23.834 ms ± 3.846 ms        | in 20.588 ms ± 0.743 ms        |
| 8.192 kB   | in 37.522 ms ± 0.851 ms      | in 33.76 ms ± 2.378 ms       | in 33.458 ms ± 1.807 ms      | in 46.509 ms ± 5.087 ms        | in 39.052 ms ± 0.375 ms        |
| 16.384 kB  | in 71.85 ms ± 3.632 ms       | in 73.338 ms ± 7.561 ms      | in 64.387 ms ± 0.791 ms      | in 104.53 ms ± 10.474 ms       | in 84.133 ms ± 6.901 ms        |
| 32.768 kB  | in 194.305 ms ± 22.236 ms    | in 199.264 ms ± 38.017 ms    | in 182.548 ms ± 32.041 ms    | in 208.273 ms ± 14.496 ms      | in 197.019 ms ± 6.808 ms       |
| 65.536 kB  | in 301.619 ms ± 17.916 ms    | in 266.598 ms ± 11.198 ms    | in 296.565 ms ± 38.027 ms    | in 383.53 ms ± 51.396 ms       | in 317.135 ms ± 14.129 ms      |
| 131.072 kB | in 576.109 ms ± 28.564 ms    | in 558.362 ms ± 30.514 ms    | in 569.61 ms ± 87.563 ms     | in 698.831 ms ± 20.12 ms       | in 639.793 ms ± 10.721 ms      |
| 262.144 kB | in 1,250.771 ms ± 168.716 ms | in 1,092.555 ms ± 26.022 ms  | in 1,084.701 ms ± 45.234 ms  | in 1,412.306 ms ± 49.827 ms    | in 1,274.971 ms ± 26.051 ms    |
| 524.288 kB | in 2,367.449 ms ± 155.411 ms | in 2,277.334 ms ± 58.657 ms  | in 2,329.497 ms ± 106.941 ms | in 2,885.096 ms ± 63.014 ms    | in 2,721.838 ms ± 106.331 ms   |
| 1.049 MB   | in 4,571.345 ms ± 172.758 ms | in 4,695.677 ms ± 410.801 ms | in 4,640.202 ms ± 239.044 ms | in 5,865.573 ms ± 126.505 ms   | in 5,604.887 ms ± 178.402 ms   |


</details>


### Bun

<details>
<summary>structuredClone</summary>



|            | hasTransferables        | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.247 ms ± 0.267 ms  | in 4.81 ms ± 1.552 ms        | in 4.361 ms ± 0.903 ms             | in 4.129 ms ± 1 second             |
| 2 B        | in 0.113 ms ± 0.027 ms  | in 4.386 ms ± 0.656 ms       | in 4.622 ms ± 0.78 ms              | in 4.539 ms ± 0.898 ms             |
| 4 B        | in 0.138 ms ± 0.053 ms  | in 3.975 ms ± 0.576 ms       | in 4.406 ms ± 0.806 ms             | in 4.17 ms ± 0.597 ms              |
| 8 B        | in 0.117 ms ± 0.021 ms  | in 3.857 ms ± 0.468 ms       | in 4.435 ms ± 0.364 ms             | in 3.811 ms ± 0.685 ms             |
| 16 B       | in 0.109 ms ± 0.025 ms  | in 5.101 ms ± 2.231 ms       | in 8.656 ms ± 4.429 ms             | in 4.234 ms ± 0.803 ms             |
| 32 B       | in 0.137 ms ± 0.047 ms  | in 3.79 ms ± 0.743 ms        | in 3.871 ms ± 0.924 ms             | in 4.352 ms ± 1.372 ms             |
| 64 B       | in 0.155 ms ± 0.064 ms  | in 4.359 ms ± 1.196 ms       | in 12.969 ms ± 1.109 ms            | in 3.82 ms ± 0.719 ms              |
| 128 B      | in 0.134 ms ± 0.05 ms   | in 3.943 ms ± 1.071 ms       | in 4.053 ms ± 0.623 ms             | in 3.828 ms ± 0.915 ms             |
| 256 B      | in 0.11 ms ± 0.023 ms   | in 4.143 ms ± 1.131 ms       | in 4.858 ms ± 1.005 ms             | in 5.995 ms ± 3 ms                 |
| 512 B      | in 0.165 ms ± 0.057 ms  | in 4.573 ms ± 0.734 ms       | in 5.444 ms ± 0.936 ms             | in 4.81 ms ± 0.731 ms              |
| 1.024 kB   | in 0.15 ms ± 0.056 ms   | in 5.298 ms ± 0.767 ms       | in 12.423 ms ± 9.028 ms            | in 9.919 ms ± 3.493 ms             |
| 2.048 kB   | in 0.156 ms ± 0.038 ms  | in 7.542 ms ± 1.011 ms       | in 12.023 ms ± 1.621 ms            | in 13.864 ms ± 3.541 ms            |
| 4.096 kB   | in 0.163 ms ± 0.055 ms  | in 11.992 ms ± 1.509 ms      | in 19.377 ms ± 3.229 ms            | in 17.548 ms ± 3.065 ms            |
| 8.192 kB   | in 0.35 ms ± 0.338 ms   | in 22.408 ms ± 3.375 ms      | in 34.624 ms ± 4.846 ms            | in 30.67 ms ± 4.167 ms             |
| 16.384 kB  | in 0.314 ms ± 0.065 ms  | in 37.692 ms ± 7.142 ms      | in 65.858 ms ± 8.854 ms            | in 65.82 ms ± 8.31 ms              |
| 32.768 kB  | in 0.546 ms ± 0.113 ms  | in 69.807 ms ± 9.323 ms      | in 130.956 ms ± 20.049 ms          | in 117.669 ms ± 19.146 ms          |
| 65.536 kB  | in 1.035 ms ± 0.1 ms    | in 140.251 ms ± 15.45 ms     | in 261.96 ms ± 36.225 ms           | in 230.37 ms ± 33.779 ms           |
| 131.072 kB | in 2.642 ms ± 1.013 ms  | in 273.821 ms ± 27.837 ms    | in 505.793 ms ± 75.587 ms          | in 459.113 ms ± 73.966 ms          |
| 262.144 kB | in 8.046 ms ± 2.189 ms  | in 661.745 ms ± 85.731 ms    | in 1,086.604 ms ± 142.219 ms       | in 942.594 ms ± 135.851 ms         |
| 524.288 kB | in 9.755 ms ± 1.251 ms  | in 1,308.609 ms ± 144.738 ms | in 2,249.668 ms ± 396.958 ms       | in 2,034.777 ms ± 360.333 ms       |
| 1.049 MB   | in 26.499 ms ± 9.497 ms | in 2,504.882 ms ± 219.223 ms | in 4,499.338 ms ± 451.951 ms       | in 3,806.749 ms ± 301.764 ms       |


</details>


<details>
<summary>MessageChannel</summary>  




</details>


### Chrome


<details>
<summary>structuredClone</summary>



</details>


<details>
<summary>MessageChannel</summary>



</details>


<details>
<summary>Worker</summary>



</details>


### Firefox


<details>
<summary>structuredClone</summary>



</details>


<details>
<summary>MessageChannel</summary>



</details>


<details>
<summary>Worker</summary>



</details>


### Safari


<details>
<summary>structuredClone</summary>



</details>


<details>
<summary>MessageChannel</summary>



</details>


<details>
<summary>Worker</summary>



</details>


<br>

## Asterisks\*

There are a lot of asterisks involved with transferable objects. 
* First, not all transferable objects are supported in all browsers.
* Second, not all transferable objects can be transfered between Workers and the main thread.
* Third, `structuredClone` when trying to clone an object that is transferable will crashes if the transferable objects aren't listed in the transfer list.
* Fourth, and most important, only use this library when you don't know the shape of the object to be transfered as traversing the input object adds a delay, you can go through the [#benchmark](#benchmarks) above to see the delay in action.

All environments have compatability problems, but the environment with the least number is `Chrome` followed closely behind are `Node`/`Bun`, then `Deno`, and it just continues down from there. 

Here is a list of issues that I've found so far.

* Safari does not support transferable objects with [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility), [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#browser_compatibility), and [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream#browser_compatibility)
* [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) & [`VideoFrame`](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame) are not supported on Firefox and Safari
* `OffscreenCanvas` is not supported on Safari
* In a twist of fate **only** Safari supports [`RTCDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel) being transferable
* `Deno` doesn't support transferable `MessagePort`

So, as always, do your own research before using.

There are a couple asterisks involved in transferable objects, and it's important to note that not all transferable objects are supported in every browser.

Streams and message channel support is iffy here is a list of current support, as of Dec. 4, 2022.

|                           | Chrome | Firefox | Safari | Node   | Deno   | Bun    | 
| ------------------------- | ------ | ------- | ------ | ------ | ------ | ------ | 
| structuredClone (channel) | false  | false   | false  | true   | true   | true   |   
| structuredClone (streams) | true   | true    | false  | true   | false  | true   | 
| postMessage (channel)     | false  | false   | false  | -      | true   | -      |   
| postMessage (streams)     | false  | false   | false  | -      | false  | -      |   


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

- **`ArrayBuffer`**: Can be transferred between Workers and the main thread. It's the only type of data buffer that can be transferred. 
- **`TypedArray`**: A data view of an `ArrayBuffer` (e.g. `Uint8Array`, `Int32Array`, `Float64Array`, etc.). They ***can't*** directly be transferred between Workers and the main thread, but the `ArrayBuffer` they contain can. Due to this fact, it's possible if you can have multiple `TypedArray`'s that all share the same `ArrayBuffer` only that `ArrayBuffer` is transfered. 
- **`MessagePort`**: A port to communicate with other workers. Can be transferred between Workers and the main thread. With little to now problems and good support across the board except for node which doesn't support `MessagePort` 
- **`ImageBitmap`** (`^`): An image that can be transferred between Workers and the main thread. It represents a bitmap image which can be drawn to a `<canvas>` without undue latency. It can also be used as textures in WebGL.
- **`OffscreenCanvas`**: A canvas that can be transferred between Workers and the main thread. It can also be used as a texture in WebGL.
- **`(Readable/Writable/Transform)Stream`**: A stream that can be transferred between Workers and the main thread. They can also be used to create `Response` objects. Support across js runtimes is very spotty


> _`^` unverified/untested - Make sure to do your own research for this specific use case._
> _`~` spotty support - Check below for js runtimes where it's ok to use_

> 

<br>




## Limitations

There are a couple limitations to using transferable objects with Workers and the main thread:

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) can be transfered between Workers and the main thread. For example, `ReadableStream` and `WritableStream` can only be transfered within a Worker or a Service Worker.

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs




## FAQ & Glossary

### What are transferable objects?

Transferable objects are objects that can be transferred between Workers and the main thread. It works sort of like ploping out the piece of memory attached to the Worker for the transferable object (e.g. an ArrayBuffer) and then moving that piece of memory to the main-thread for use by a newly created transferable object and vice-versa. You can read more about them in the [MDN docs](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).

> Notable exceptions to the transferable objects list are `Blob` and `File` objects, which are not transferable, but can be cloned.

<br />


### Why should I use this?

It's main use case is for determining when there is a transferable object and then listing said transferable objects out. A good example of when to use this is when working with [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). `structuredClone` errors out when using transferables objects as they are not cloneable, e.g. 

![Error shown when trying to use structuredClone with an object which contains a transferable object](assets/structuredclone-transfer-error.png)


You should only really use this when Worker or main thread no longer needs the transferable object for use. e.g. returning the result of a complex from a Worker in ArrayBuffer form (assuming that the result is no longer nesscary in the Worker). 
> Warning: There is a performance threshold for transferable objects, before which using transferable objects becomes genuinly slower, it's probably not worth it to use this library if you reach that threshold [#benchmark](#benchmark). You can read more about that in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage#performance_considerations). 

<br />

### What is the difference between transferable objects and cloneable objects?

Transferable objects are objects that can be transferred between Workers and the main thread. They can be transferred from the main thread to a Worker, and vice versa. Cloneable objects are objects that can be cloned between Workers and the main thread. They can
be cloned from the main thread to a Worker, and vice versa. You can read more about them in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).


<br />



## Browser Support

| Chrome | Edge | Firefox | Safari |
| ------ | ---- | ------- | ------ |
| 7+     | 12+  | 41+     | 5+     |

Native support for `transferables` is dependent on which [transferable object](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) great as it doesn't use any browser specific or nodejs specific API's, you should be good to use `transferables` in any environment.


## Contributing

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

> _**Note**: this project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commits, so, please format your commits using the rules it sets out._

## Licence

See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).
