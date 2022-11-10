# transferables

[![Open Bundle](https://bundlejs.com/badge-light.svg)](https://bundlejs.com/?q=transferables&bundle "Check the total bundle size of transferables")

[NPM](https://www.npmjs.com/package/transferables) <span style="padding-inline: 1rem">|</span> [GitHub](https://github.com/okikio/transferables#readme) <span style="padding-inline: 1rem">|</span> [Licence](./LICENSE)

A utility library that lists out all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) that can be transfered between Workers and the main thread\*.

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

- Your site/project here...
  
<br>



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

## API

The API of `transferables` is pretty straight forward, 
* `hasTransferables` function check if an object contains [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).
* `getTransferables` function generates an array of values from the input object that are [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects).
* `isObject`, `isTypedArray`, `isTransferable`, `isStream`, `isTransferable`, and `filterOutDuplicates` are utility functions that are used internally by `transferables`.

You use them like this:

```ts
import { hasTransferables, getTransferables } from "transferables";

// data is an object that contains transferable objects


// Send postMessage with transferables
const transferables = getTransferables(data);
postMessage(data, transferables);

// isObject
isObject(data); // true

// isTypedArray
isTypedArray(data); // false

// isStream
isStream(data); // false

// isTransferable
isTransferable(data); // true

// filterOutDuplicates
filterOutDuplicates([1, 2, 3, 3, 4, 5, 5]); // [1, 2, 3, 4, 5]

```


<br>

## Asterisks

There are a lot of asterisks involved with transferable objects. 
* First, not all transferable objects are supported in all browsers.
* Second, not all transferable objects can be transfered between Workers and the main thread.
* Third, not all transferable objects are transfered between Workers and the main thread.
* Fourth, not all transferable objects are transfered between Workers and the main thread in the same way.
* Fifth, not all transferable objects are transfered between Workers and the main thread in the same way in all browsers.

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



There are many asterisks involved in transferable objects...there's a lot. I've sorted out some of the things to be aware of, but as always, do your own research before using.

- **`ArrayBuffer`**: Can be transferred between Workers and the main thread. It's the only type of array that can be transferred. It's also the only type of array that can be used in SharedArrayBuffers.
- **`ArrayBufferView`**: An array view of an `ArrayBuffer` (e.g. `Uint8Array`, `Int32Array`, `Float64Array`, etc.). They can be transferred between Workers and the main thread. They're also the only type of array that can be used in SharedArrayBuffers.
- **`MessagePort`**: A port to communicate with other workers. Can be transferred between Workers and the main thread.
- **`ImageBitmap`**: An image that can be transferred between Workers and the main thread. They can also be used as textures in WebGL.
- **`OffscreenCanvas`**: A canvas that can be transferred between Workers and the main thread. It can also be used as a texture in WebGL.
- **`ReadableStream`**: A stream that can be transferred between Workers and the main thread. They can also be used to create `Response` objects.


> _`*` There are many [asterisks](#asterisks) involved in transferable objects...there's a lot. I've sorted out some of the things to be  aware of, but as always, do your own research before using._

### Typed Arrays

Typed arrays are not transferable objects, but they can be transfered between Workers and the main thread\*.

> _`*` There are many [asterisks](#asterisks) involved in transferable objects...there's a lot. I've sorted out some of the things to be  aware of, but as always, do your own research before using._

### Streams

Streams are not transferable objects, but they can be transfered between Workers and the main thread\*.

> _`*` There are many [asterisks](#asterisks) involved in transferable objects...there's a lot. I've sorted out some of
> 

<br>



There are a few asterisks that you should be aware of, before using `transferables`:

- `transferables` doesn't check for `SharedArrayBuffer` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `MessagePort` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `ReadableStream` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `WritableStream` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `TransformStream` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `File` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `FileList` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `Blob` objects, because they're not supported in all browsers. If you're using them, you can check for them using `ArrayBuffer.isView` or `ArrayBuffer.isView`.
- `transferables` doesn't check for `ImageData` objects

## Benchmarks


## Limitations

There are a couple limitations to using transferable objects with Workers and the main thread:

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) can be transfered between Workers and the main thread. For example, `ReadableStream` and `WritableStream` can only be transfered within a Worker or a Service Worker.

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs



There are a couple limitations to using transferable objects with Workers and the main thread:

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) can be transfered between Workers and the main thread. For example, `ReadableStream` and `WritableStream` can only be transfered within a Worker or a Service Worker.

- Not all [transferable objects](https://developer.mozilla.org/en-US/docs



## Asterisks\*


There is quite a bit of browser compatibility issues with Transferable Objects that are just not yet resolved as far as I can tell a large number of them occur on Safari, due to just not wanting to add the feature. 

This is a list of the issues that I have found so far.
* Safari does not support transferable objects with [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility), [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#browser_compatibility), and [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream#browser_compatibility)
* [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) & [`VideoFrame`](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame) are not supported on Firefox and Safari
* `OffscreenCanvas` is not supported on Safari
* In a twist of fate **only** Safari supports [`RTCDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel) being transferable


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
