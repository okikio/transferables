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

// isSupported
isSupported(); // { channel: true, streams: true }

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
<summary>Node (structuredClone)</summary>  


|            | hasTransferables        | structuredClone (manually)  | structuredClone (getTransferable) | structuredClone (getTransferables) |
| ---------- | ----------------------- | --------------------------- | --------------------------------- | ---------------------------------- |
| 1 B        | in 0.207 ms ± 0.237 ms  | in 4.035 ms ± 1.394 ms      | in 3.72 ms ± 0.82 ms              | in 3.644 ms ± 1.136 ms             |
| 2 B        | in 0.093 ms ± 0.034 ms  | in 3.329 ms ± 0.775 ms      | in 4.406 ms ± 2.512 ms            | in 3.584 ms ± 0.862 ms             |
| 4 B        | in 0.072 ms ± 0.015 ms  | in 3.157 ms ± 0.687 ms      | in 3.28 ms ± 0.327 ms             | in 3.489 ms ± 0.467 ms             |
| 8 B        | in 0.069 ms ± 0.014 ms  | in 3.098 ms ± 0.451 ms      | in 3.404 ms ± 0.704 ms            | in 3.276 ms ± 0.632 ms             |
| 16 B       | in 0.086 ms ± 0.024 ms  | in 4.746 ms ± 3.103 ms      | in 6.883 ms ± 3.004 ms            | in 3.424 ms ± 0.467 ms             |
| 32 B       | in 0.084 ms ± 0.024 ms  | in 3.637 ms ± 0.696 ms      | in 4.105 ms ± 0.898 ms            | in 3.903 ms ± 0.745 ms             |
| 64 B       | in 0.094 ms ± 0.032 ms  | in 3.419 ms ± 0.122 ms      | in 11.573 ms ± 1.147 ms           | in 3.05 ms ± 0.223 ms              |
| 128 B      | in 0.067 ms ± 0.014 ms  | in 2.973 ms ± 0.116 ms      | in 3.294 ms ± 0.2 ms              | in 3.108 ms ± 0.173 ms             |
| 256 B      | in 0.062 ms ± 0.012 ms  | in 3.223 ms ± 0.096 ms      | in 3.823 ms ± 0.299 ms            | in 3.529 ms ± 0.125 ms             |
| 512 B      | in 0.101 ms ± 0.016 ms  | in 3.851 ms ± 0.286 ms      | in 4.879 ms ± 0.567 ms            | in 4.465 ms ± 0.255 ms             |
| 1.024 kB   | in 0.1 ms ± 0.046 ms    | in 4.637 ms ± 0.305 ms      | in 8.324 ms ± 2.119 ms            | in 8.716 ms ± 2.274 ms             |
| 2.048 kB   | in 0.105 ms ± 0.023 ms  | in 6.573 ms ± 0.205 ms      | in 10.888 ms ± 1.075 ms           | in 11.614 ms ± 1.43 ms             |
| 4.096 kB   | in 0.149 ms ± 0.062 ms  | in 11.231 ms ± 0.83 ms      | in 17.431 ms ± 1.408 ms           | in 15.273 ms ± 0.598 ms            |
| 8.192 kB   | in 0.236 ms ± 0.203 ms  | in 21.292 ms ± 2.279 ms     | in 31.419 ms ± 1.585 ms           | in 28.886 ms ± 1.074 ms            |
| 16.384 kB  | in 0.275 ms ± 0.029 ms  | in 36.087 ms ± 2.384 ms     | in 61.124 ms ± 1.846 ms           | in 60.629 ms ± 2.548 ms            |
| 32.768 kB  | in 0.444 ms ± 0.052 ms  | in 67.182 ms ± 4.587 ms     | in 123.134 ms ± 6.56 ms           | in 116.684 ms ± 14.69 ms           |
| 65.536 kB  | in 0.932 ms ± 0.054 ms  | in 131.45 ms ± 1.566 ms     | in 243.099 ms ± 15.986 ms         | in 219.32 ms ± 14.69 ms            |
| 131.072 kB | in 3.001 ms ± 1.117 ms  | in 261.401 ms ± 10.264 ms   | in 491.725 ms ± 31.017 ms         | in 440.797 ms ± 31.359 ms          |
| 262.144 kB | in 6.991 ms ± 1.898 ms  | in 643.805 ms ± 33.111 ms   | in 1,024.814 ms ± 46.353 ms       | in 901.455 ms ± 43.328 ms          |
| 524.288 kB | in 10.858 ms ± 1.324 ms | in 1,265.384 ms ± 50.39 ms  | in 2,165.863 ms ± 258.351 ms      | in 1,951.202 ms ± 190.088 ms       |
| 1.049 MB   | in 23.865 ms ± 6.409 ms | in 2,495.775 ms ± 98.087 ms | in 4,181.129 ms ± 26.851 ms       | in 3,689.064 ms ± 71.118 ms        |


</details>


<details>
<summary>Deno (structuredClone)</summary>


|            | hasTransferables        | structuredClone (manually)   | structuredClone (getTransferable) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ---------------------------- | --------------------------------- | ---------------------------------- |
| 1 B        | in 0.111 ms ± 0.184 ms  | in 0.794 ms ± 0.463 ms       | in 1.121 ms ± 0.862 ms            | in 0.764 ms ± 0.402 ms             |
| 2 B        | in 0.021 ms ± 0.018 ms  | in 0.491 ms ± 0.132 ms       | in 0.693 ms ± 0.261 ms            | in 0.747 ms ± 0.326 ms             |
| 4 B        | in 0.02 ms ± 0.013 ms   | in 0.543 ms ± 0.141 ms       | in 0.734 ms ± 0.287 ms            | in 0.652 ms ± 0.279 ms             |
| 8 B        | in 0.018 ms ± 0.012 ms  | in 0.598 ms ± 0.195 ms       | in 0.761 ms ± 0.315 ms            | in 0.808 ms ± 0.463 ms             |
| 16 B       | in 0.018 ms ± 0.011 ms  | in 0.577 ms ± 0.191 ms       | in 0.789 ms ± 0.38 ms             | in 0.996 ms ± 0.839 ms             |
| 32 B       | in 0.017 ms ± 0.009 ms  | in 0.63 ms ± 0.187 ms        | in 0.827 ms ± 0.333 ms            | in 0.766 ms ± 0.289 ms             |
| 64 B       | in 0.017 ms ± 0.01 ms   | in 0.847 ms ± 0.396 ms       | in 1.078 ms ± 0.6 ms              | in 0.925 ms ± 0.386 ms             |
| 128 B      | in 0.019 ms ± 0.012 ms  | in 0.895 ms ± 0.223 ms       | in 1.523 ms ± 0.954 ms            | in 1.153 ms ± 0.406 ms             |
| 256 B      | in 0.018 ms ± 0.009 ms  | in 1.05 ms ± 0.165 ms        | in 1.515 ms ± 0.271 ms            | in 1.283 ms ± 0.191 ms             |
| 512 B      | in 0.022 ms ± 0.011 ms  | in 1.586 ms ± 0.274 ms       | in 2.296 ms ± 0.321 ms            | in 2.031 ms ± 0.207 ms             |
| 1.024 kB   | in 0.032 ms ± 0.02 ms   | in 2.579 ms ± 0.327 ms       | in 4.102 ms ± 0.668 ms            | in 3.485 ms ± 0.575 ms             |
| 2.048 kB   | in 0.044 ms ± 0.03 ms   | in 4.714 ms ± 0.516 ms       | in 7.444 ms ± 0.923 ms            | in 6.615 ms ± 1.086 ms             |
| 4.096 kB   | in 0.075 ms ± 0.062 ms  | in 8.94 ms ± 0.959 ms        | in 14.285 ms ± 2.109 ms           | in 12.48 ms ± 2.082 ms             |
| 8.192 kB   | in 0.151 ms ± 0.148 ms  | in 17.78 ms ± 2.638 ms       | in 28.397 ms ± 4.938 ms           | in 24.056 ms ± 3.768 ms            |
| 16.384 kB  | in 0.158 ms ± 0.044 ms  | in 34.271 ms ± 5.025 ms      | in 56.046 ms ± 7.63 ms            | in 48.669 ms ± 7.548 ms            |
| 32.768 kB  | in 0.258 ms ± 0.018 ms  | in 68.844 ms ± 10.652 ms     | in 110.572 ms ± 17.107 ms         | in 98.469 ms ± 16.096 ms           |
| 65.536 kB  | in 0.64 ms ± 0.042 ms   | in 155.509 ms ± 28.332 ms    | in 244.009 ms ± 35.439 ms         | in 190.963 ms ± 28.552 ms          |
| 131.072 kB | in 1.403 ms ± 0.11 ms   | in 273.621 ms ± 38.109 ms    | in 465.486 ms ± 67.459 ms         | in 418.501 ms ± 75.302 ms          |
| 262.144 kB | in 2.897 ms ± 0.227 ms  | in 575.995 ms ± 75.497 ms    | in 907.142 ms ± 135.338 ms        | in 812.624 ms ± 123.536 ms         |
| 524.288 kB | in 6.443 ms ± 1.854 ms  | in 1,193.178 ms ± 129.871 ms | in 1,853.896 ms ± 255.83 ms       | in 1,646.245 ms ± 178.562 ms       |
| 1.049 MB   | in 10.872 ms ± 1.251 ms | in 2,146.543 ms ± 124.704 ms | in 3,698.17 ms ± 193.609 ms       | in 3,264.512 ms ± 25.533 ms        |

</details>


<details>
<summary>Deno (postMessage)</summary>




</details>


<details>
<summary>Bun (structuredClone)</summary>



</details>


<details>
<summary>Chrome (structuredClone)</summary>



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

Streams and message channel support is iffy here is a list of current support, as of Dec. 4, 2022.

Chrome 107.0.1418.62
Firefox 107.0.1
Safari 16.4

Node v19.2.0
Bun 0.2.2
Deno 1.28.3

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
