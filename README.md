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

To gurantee performance

* `Node 19` - This benchmark was run using `vitest`

<details>
<summary>Node</summary>

|            | hasTransferables | structuredClone (predefined) | getTransferable    | getTransferable(s) | structuredClone (getTransferable) |
| ---------- | ---------------- | ---------------------------- | ------------------ | ------------------ | --------------------------------- |
| 1 B        | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 2 B        | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 4 B        | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 8 B        | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 16 B       | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 32 B       | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 64 B       | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 128 B      | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 256 B      | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 512 B      | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 1.024 kB   | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 2.048 kB   | now ± now        | now ± now                    | now ± now          | now ± now          | now ± now                         |
| 4.096 kB   | now ± now        | in 0.007s ± now              | in 0.008s ± now    | in 0.006s ± now    | in 0.008s ± now                   |
| 8.192 kB   | now ± now        | in 0.015s ± now              | in 0.017s ± now    | in 0.012s ± now    | in 0.014s ± now                   |
| 16.384 kB  | now ± now        | in 0.031s ± now              | in 0.035s ± now    | in 0.026s ± now    | in 0.03s ± now                    |
| 32.768 kB  | now ± now        | in 0.061s ± now              | in 0.068s ± now    | in 0.046s ± now    | in 0.062s ± now                   |
| 65.536 kB  | now ± now        | in 0.123s ± now              | in 0.135s ± now    | in 0.093s ± now    | in 0.131s ± 0.017s                |
| 131.072 kB | now ± now        | in 0.248s ± now              | in 0.277s ± 0.016s | in 0.186s ± now    | in 0.247s ± now                   |
| 262.144 kB | in 0.006s ± now  | in 0.572s ± 0.008s           | in 0.529s ± 0.005s | in 0.359s ± now    | in 0.545s ± 0.036s                |
| 524.288 kB | in 0.011s ± now  | in 1.188s ± 0.023s           | in 1.048s ± 0.012s | in 0.718s ± now    | in 1.215s ± now                   |
| 1.049 MB   | in 0.02s ± now   | in 2.153s ± 0.155s           | in 2.157s ± 0.048s | in 1.44s ± now     | in 2.351s ± 0.008s                |

</details>


<details>
<summary>Deno</summary>

|            | hasTransferables            | structuredClone (predefined)  | getTransferable               | getTransferable(s)            | structuredClone (getTransferable) |
| ---------- | --------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | --------------------------------- |
| 1 B        | in 0.087 sec. ± 0.132 sec.  | in 0.346 sec. ± 0.229 sec.    | in 0.147 sec. ± 0.128 sec.    | in 0.086 sec. ± 0.104 sec.    | in 0.224 sec. ± 0.085 sec.        |
| 2 B        | in 0.02 sec. ± 0.014 sec.   | in 0.174 sec. ± 0.045 sec.    | in 0.075 sec. ± 0.059 sec.    | in 0.182 sec. ± 0.259 sec.    | in 0.194 sec. ± 0.014 sec.        |
| 4 B        | in 0.019 sec. ± 0.007 sec.  | in 0.188 sec. ± 0.04 sec.     | in 0.081 sec. ± 0.063 sec.    | in 0.063 sec. ± 0.051 sec.    | in 0.183 sec. ± 0.038 sec.        |
| 8 B        | in 0.017 sec. ± 0.012 sec.  | in 0.175 sec. ± 0.039 sec.    | in 0.081 sec. ± 0.067 sec.    | in 0.116 sec. ± 0.175 sec.    | in 0.17 sec. ± 0.053 sec.         |
| 16 B       | in 0.017 sec. ± 0.012 sec.  | in 0.189 sec. ± 0.038 sec.    | in 0.091 sec. ± 0.081 sec.    | in 0.062 sec. ± 0.067 sec.    | in 0.225 sec. ± 0.092 sec.        |
| 32 B       | in 0.017 sec. ± 0.013 sec.  | in 0.311 sec. ± 0.333 sec.    | in 0.064 sec. ± 0.036 sec.    | in 0.044 sec. ± 0.029 sec.    | in 0.163 sec. ± 0.043 sec.        |
| 64 B       | in 0.034 sec. ± 0.033 sec.  | in 0.186 sec. ± 0.034 sec.    | in 0.108 sec. ± 0.087 sec.    | in 0.081 sec. ± 0.077 sec.    | in 0.216 sec. ± 0.059 sec.        |
| 128 B      | in 0.018 sec. ± 0.011 sec.  | in 0.261 sec. ± 0.092 sec.    | in 0.162 sec. ± 0.139 sec.    | in 0.107 sec. ± 0.102 sec.    | in 0.24 sec. ± 0.046 sec.         |
| 256 B      | in 0.08 sec. ± 0.108 sec.   | in 0.289 sec. ± 0.046 sec.    | in 0.231 sec. ± 0.221 sec.    | in 0.198 sec. ± 0.244 sec.    | in 0.317 sec. ± 0.089 sec.        |
| 512 B      | in 0.024 sec. ± 0.016 sec.  | in 0.404 sec. ± 0.077 sec.    | in 0.351 sec. ± 0.324 sec.    | in 0.177 sec. ± 0.114 sec.    | in 0.443 sec. ± 0.109 sec.        |
| 1.024 kB   | in 0.036 sec. ± 0.024 sec.  | in 0.612 sec. ± 0.092 sec.    | in 0.389 sec. ± 0.196 sec.    | in 0.339 sec. ± 0.23 sec.     | in 0.668 sec. ± 0.143 sec.        |
| 2.048 kB   | in 0.06 sec. ± 0.055 sec.   | in 1.089 sec. ± 0.163 sec.    | in 0.691 sec. ± 0.192 sec.    | in 0.582 sec. ± 0.374 sec.    | in 1.16 sec. ± 0.194 sec.         |
| 4.096 kB   | in 0.166 sec. ± 0.241 sec.  | in 2.076 sec. ± 0.194 sec.    | in 1.497 sec. ± 0.82 sec.     | in 1.19 sec. ± 0.858 sec.     | in 2.048 sec. ± 0.353 sec.        |
| 8.192 kB   | in 0.18 sec. ± 0.216 sec.   | in 3.763 sec. ± 0.638 sec.    | in 2.072 sec. ± 0.376 sec.    | in 1.584 sec. ± 0.482 sec.    | in 3.537 sec. ± 0.57 sec.         |
| 16.384 kB  | in 0.355 sec. ± 0.46 sec.   | in 6.801 sec. ± 1.105 sec.    | in 4.354 sec. ± 0.86 sec.     | in 2.515 sec. ± 0.585 sec.    | in 6.876 sec. ± 1.253 sec.        |
| 32.768 kB  | in 0.267 sec. ± 0.034 sec.  | in 13.679 sec. ± 1.57 sec.    | in 8.525 sec. ± 1.675 sec.    | in 5.098 sec. ± 0.685 sec.    | in 13.165 sec. ± 1.55 sec.        |
| 65.536 kB  | in 0.706 sec. ± 0.156 sec.  | in 27.44 sec. ± 6.163 sec.    | in 18.367 sec. ± 3.44 sec.    | in 14.49 sec. ± 2.184 sec.    | in 27.586 sec. ± 5.608 sec.       |
| 131.072 kB | in 1.394 sec. ± 0.161 sec.  | in 53.452 sec. ± 5.464 sec.   | in 33.421 sec. ± 4.276 sec.   | in 19.888 sec. ± 1.473 sec.   | in 52.368 sec. ± 4.451 sec.       |
| 262.144 kB | in 4.374 sec. ± 0.947 sec.  | in 106.18 sec. ± 15.722 sec.  | in 70.974 sec. ± 3.553 sec.   | in 45.37 sec. ± 4.99 sec.     | in 105.444 sec. ± 10.677 sec.     |
| 524.288 kB | in 12.437 sec. ± 1.746 sec. | in 208.805 sec. ± 15.47 sec.  | in 139.576 sec. ± 12.81 sec.  | in 85.163 sec. ± 6.734 sec.   | in 213.606 sec. ± 15.134 sec.     |
| 1.049 MB   | in 11.897 sec. ± 0.307 sec. | in 472.841 sec. ± 65.988 sec. | in 296.482 sec. ± 61.616 sec. | in 191.668 sec. ± 25.715 sec. | in 509.71 sec. ± 58.659 sec.      |

</details>


<details>
<summary>Deno (Worker)</summary>

|            | postMessage                    | postMessage (predefined)      | hasTransferables              | getTransferable               | getTransferable(s)            |
| ---------- | ------------------------------ | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| 1 B        | in 28.785 sec. ± 2.635 sec.    | in 26.398 sec. ± 2.617 sec.   | in 22.025 sec. ± 0.567 sec.   | in 26.228 sec. ± 3.018 sec.   | in 23.924 sec. ± 0.678 sec.   |
| 2 B        | in 22.854 sec. ± 1.615 sec.    | in 20.549 sec. ± 3.785 sec.   | in 26.111 sec. ± 2.016 sec.   | in 19.248 sec. ± 0.648 sec.   | in 18.735 sec. ± 0.524 sec.   |
| 4 B        | in 18.519 sec. ± 0.594 sec.    | in 20.043 sec. ± 3.473 sec.   | in 19.295 sec. ± 0.383 sec.   | in 19.182 sec. ± 0.29 sec.    | in 18.97 sec. ± 0.486 sec.    |
| 8 B        | in 18.33 sec. ± 0.715 sec.     | in 21.291 sec. ± 3.68 sec.    | in 19.14 sec. ± 0.635 sec.    | in 18.805 sec. ± 0.545 sec.   | in 19.278 sec. ± 0.693 sec.   |
| 16 B       | in 18.823 sec. ± 0.958 sec.    | in 20.325 sec. ± 3.993 sec.   | in 19.319 sec. ± 0.685 sec.   | in 18.864 sec. ± 0.474 sec.   | in 18.747 sec. ± 0.621 sec.   |
| 32 B       | in 19.189 sec. ± 1.26 sec.     | in 21.57 sec. ± 6.29 sec.     | in 19.48 sec. ± 0.928 sec.    | in 18.926 sec. ± 0.339 sec.   | in 19.289 sec. ± 0.567 sec.   |
| 64 B       | in 17.923 sec. ± 0.499 sec.    | in 21.093 sec. ± 5.27 sec.    | in 18.689 sec. ± 0.587 sec.   | in 18.987 sec. ± 0.661 sec.   | in 18.995 sec. ± 0.377 sec.   |
| 128 B      | in 19.012 sec. ± 0.467 sec.    | in 21.088 sec. ± 5.304 sec.   | in 18.994 sec. ± 0.806 sec.   | in 19.21 sec. ± 0.697 sec.    | in 19.067 sec. ± 0.844 sec.   |
| 256 B      | in 19.529 sec. ± 1.689 sec.    | in 20.645 sec. ± 4.157 sec.   | in 19.302 sec. ± 1.147 sec.   | in 19.606 sec. ± 0.348 sec.   | in 19.157 sec. ± 0.36 sec.    |
| 512 B      | in 18.943 sec. ± 0.89 sec.     | in 27.202 sec. ± 11.869 sec.  | in 19.194 sec. ± 0.771 sec.   | in 20.654 sec. ± 0.608 sec.   | in 20.091 sec. ± 0.463 sec.   |
| 1.024 kB   | in 19.466 sec. ± 1.039 sec.    | in 23.31 sec. ± 6.828 sec.    | in 19.642 sec. ± 0.407 sec.   | in 23.281 sec. ± 0.748 sec.   | in 21.829 sec. ± 1.43 sec.    |
| 2.048 kB   | in 21.272 sec. ± 1.134 sec.    | in 22.877 sec. ± 4.171 sec.   | in 20.283 sec. ± 0.592 sec.   | in 25.113 sec. ± 0.503 sec.   | in 24.572 sec. ± 0.774 sec.   |
| 4.096 kB   | in 22.166 sec. ± 1.417 sec.    | in 26.123 sec. ± 9.268 sec.   | in 22.762 sec. ± 0.539 sec.   | in 27.219 sec. ± 0.338 sec.   | in 26.889 sec. ± 0.527 sec.   |
| 8.192 kB   | in 24.961 sec. ± 2.082 sec.    | in 28.427 sec. ± 6.735 sec.   | in 34.529 sec. ± 14.665 sec.  | in 32.125 sec. ± 0.815 sec.   | in 33.012 sec. ± 1.034 sec.   |
| 16.384 kB  | in 33.646 sec. ± 3.573 sec.    | in 33.581 sec. ± 6.869 sec.   | in 31.64 sec. ± 0.513 sec.    | in 42.135 sec. ± 0.786 sec.   | in 41.512 sec. ± 2.406 sec.   |
| 32.768 kB  | in 42.657 sec. ± 2.104 sec.    | in 47.861 sec. ± 12.053 sec.  | in 49.173 sec. ± 11.898 sec.  | in 62.903 sec. ± 2.486 sec.   | in 57.918 sec. ± 1.159 sec.   |
| 65.536 kB  | in 65.365 sec. ± 4.488 sec.    | in 69.842 sec. ± 13.386 sec.  | in 68 sec. ± 2.9 sec.         | in 99.317 sec. ± 5.923 sec.   | in 92.192 sec. ± 4.579 sec.   |
| 131.072 kB | in 116.38 sec. ± 9.203 sec.    | in 124.016 sec. ± 19.238 sec. | in 109.301 sec. ± 3.356 sec.  | in 177.816 sec. ± 5.123 sec.  | in 154.128 sec. ± 3.155 sec.  |
| 262.144 kB | in 201.405 sec. ± 11.732 sec.  | in 193.65 sec. ± 7.214 sec.   | in 209.276 sec. ± 8.621 sec.  | in 305.869 sec. ± 9.442 sec.  | in 279.563 sec. ± 6.461 sec.  |
| 524.288 kB | in 393.655 sec. ± 22.258 sec.  | in 354.24 sec. ± 15.541 sec.  | in 384.12 sec. ± 3.224 sec.   | in 515.708 sec. ± 9.455 sec.  | in 512.903 sec. ± 30.949 sec. |
| 1.049 MB   | in 802.321 sec. ± 125.163 sec. | in 707.707 sec. ± 39.558 sec. | in 747.069 sec. ± 21.797 sec. | in 980.326 sec. ± 22.111 sec. | in 909.461 sec. ± 26.814 sec. |

</details>


<details>
<summary>Bun</summary>

|            | hasTransferables    | structuredClone (predefined) | getTransferable       | getTransferable(s)    | structuredClone (getTransferable) |
| ---------- | ------------------- | ---------------------------- | --------------------- | --------------------- | --------------------------------- |
| 1 B        | in 0.105s ± 0.171s  | in 0.217s ± 0.086s           | in 0.132s ± 0.161s    | in 0.08s ± 0.1s       | in 0.132s ± 0.029s                |
| 2 B        | in 0.018s ± 0.013s  | in 0.114s ± 0.016s           | in 0.059s ± 0.035s    | in 0.043s ± 0.03s     | in 0.107s ± 0.009s                |
| 4 B        | in 0.015s ± 0.009s  | in 0.118s ± 0.024s           | in 0.068s ± 0.048s    | in 0.045s ± 0.035s    | in 0.112s ± 0.013s                |
| 8 B        | in 0.013s ± 0.005s  | in 0.111s ± 0.017s           | in 0.062s ± 0.035s    | in 0.056s ± 0.047s    | in 0.109s ± 0.011s                |
| 16 B       | in 0.013s ± 0.005s  | in 0.111s ± 0.006s           | in 0.07s ± 0.05s      | in 0.056s ± 0.047s    | in 0.114s ± 0.014s                |
| 32 B       | in 0.013s ± 0.005s  | in 0.114s ± 0.012s           | in 0.065s ± 0.035s    | in 0.047s ± 0.03s     | in 0.119s ± 0.017s                |
| 64 B       | in 0.013s ± now     | in 0.121s ± 0.009s           | in 0.077s ± 0.045s    | in 0.063s ± 0.042s    | in 0.138s ± 0.036s                |
| 128 B      | in 0.03s ± 0.03s    | in 0.143s ± 0.01s            | in 0.113s ± 0.079s    | in 0.086s ± 0.073s    | in 0.154s ± 0.025s                |
| 256 B      | in 0.017s ± 0.008s  | in 0.189s ± 0.014s           | in 0.17s ± 0.138s     | in 0.132s ± 0.112s    | in 0.2s ± 0.017s                  |
| 512 B      | in 0.019s ± 0.011s  | in 0.274s ± 0.015s           | in 0.21s ± 0.081s     | in 0.152s ± 0.075s    | in 0.28s ± 0.016s                 |
| 1.024 kB   | in 0.025s ± 0.014s  | in 0.431s ± 0.01s            | in 0.348s ± 0.088s    | in 0.262s ± 0.122s    | in 0.44s ± 0.025s                 |
| 2.048 kB   | in 0.039s ± 0.026s  | in 0.778s ± 0.016s           | in 0.703s ± 0.181s    | in 0.548s ± 0.203s    | in 0.832s ± 0.136s                |
| 4.096 kB   | in 0.064s ± 0.047s  | in 1.447s ± 0.031s           | in 1.265s ± 0.484s    | in 0.935s ± 0.444s    | in 1.458s ± 0.04s                 |
| 8.192 kB   | in 0.12s ± 0.114s   | in 2.78s ± 0.079s            | in 1.985s ± 0.028s    | in 1.818s ± 0.772s    | in 2.749s ± 0.059s                |
| 16.384 kB  | in 0.295s ± 0.222s  | in 5.717s ± 0.452s           | in 4.096s ± 0.039s    | in 2.953s ± 0.027s    | in 5.574s ± 0.179s                |
| 32.768 kB  | in 0.519s ± 0.233s  | in 11.17s ± 0.312s           | in 17.84s ± 11.88s    | in 5.868s ± 0.101s    | in 10.839s ± 0.055s               |
| 65.536 kB  | in 0.833s ± 0.046s  | in 23.028s ± 1.738s          | in 16.998s ± 0.457s   | in 12.545s ± 0.86s    | in 21.382s ± 0.102s               |
| 131.072 kB | in 2.704s ± 1.178s  | in 43.195s ± 1.163s          | in 35.33s ± 2.385s    | in 25.562s ± 0.953s   | in 42.917s ± 1.061s               |
| 262.144 kB | in 6.008s ± 1.173s  | in 95.04s ± 9.838s           | in 71.911s ± 3.015s   | in 53.393s ± 1.758s   | in 85.836s ± 1.167s               |
| 524.288 kB | in 8.449s ± 0.539s  | in 187.417s ± 26.78s         | in 149.84s ± 30.415s  | in 110.388s ± 24.13s  | in 198.92s ± 50.062s              |
| 1.049 MB   | in 24.285s ± 6.062s | in 410.515s ± 99.12s         | in 312.833s ± 70.597s | in 218.127s ± 22.755s | in 364.738s ± 14.092s             |

</details>

<br>

## Asterisks\*

There are a lot of asterisks involved with transferable objects. 
* First, not all transferable objects are supported in all browsers.
* Second, not all transferable objects can be transfered between Workers and the main thread.
* Third, `structuredClone` when not using transferable objects crashes if the object to be cloned contains transferable objects.
* Fourth, and most important only use this library when you don't know the shape of the object to be transfered, as traversing the input object adds a delay.

There is quite a bit of browser compatibility issues with Transferable Objects that are just not yet resolved as far as I can tell a large number of them occur on Safari, due to either a lack of usage or just not wanting to add the feature. 

This is a list of the issues that I have found so far.

* Safari does not support transferable objects with [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility), [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#browser_compatibility), and [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream#browser_compatibility)
* [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) & [`VideoFrame`](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame) are not supported on Firefox and Safari
* `OffscreenCanvas` is not supported on Safari
* In a twist of fate **only** Safari supports [`RTCDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel) being transferable

So, as always, do your own research before using.

There are a couple asterisks involved in transferable objects, and it's important to note that not all transferable objects are supported in every browser.

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
