export const TypedArray = Object.getPrototypeOf(Int8Array);
export const AudioData = globalThis.AudioData;
export const VideoFrame = globalThis.VideoFrame;
export const OffscreenCanvas = globalThis.OffscreenCanvas;
export const RTCDataChannel = globalThis.RTCDataChannel;

const ReadableStreamExists = "ReadableStream" in globalThis;
const WritableStreamExists = "WritableStream" in globalThis;
const TransformStreamExists = "TransformStream" in globalThis;

const MessageChannelExists = "MessageChannel" in globalThis;
const MessagePortExists = "MessagePort" in globalThis;

const ArrayBufferExists = "ArrayBuffer" in globalThis;
const AudioDataExists = "AudioData" in globalThis;
const ImageBitmapExists = "ImageBitmap" in globalThis;
const VideoFrameExists = "VideoFrame" in globalThis;

const OffscreenCanvasExists = "OffscreenCanvas" in globalThis;
const RTCDataChannelExists = "RTCDataChannel" in globalThis;

/**
 * Let's you know which transferable objects to actually exist in the js runtime the library is running in
 */
export const AVAILABLE_TRANSFERABLE_OBJECTS = {
  ReadableStreamExists,
  WritableStreamExists,
  TransformStreamExists,
  MessageChannelExists,
  MessagePortExists,
  ArrayBufferExists,
  AudioDataExists,
  ImageBitmapExists,
  VideoFrameExists,
  OffscreenCanvasExists,
  RTCDataChannelExists,
} 

export type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream /* | typeof AudioData */ | ImageBitmap /* | typeof VideoFrame */ | OffscreenCanvas | RTCDataChannel;

/**
 * Tests if certain transferable objects are actually supported in a specific js environment when using `structuredClone` and `MessageChannel postMessage`
 */
export async function isSupported() {
  const channel = await (async () => {
    try {
      if (!MessageChannelExists)
        return false;

      const msgChanl = new MessageChannel();
      const obj = { port1: msgChanl.port1 }
      const clonedObj = structuredClone(obj, {
        transfer: [
          msgChanl.port1,
        ]
      })

      const messageChannel = new MessageChannel()
      const obj1 = { port1: clonedObj.port1 }
      await new Promise<void>(resolve => {
        messageChannel.port1.postMessage(obj1, [
          obj1.port1,
        ])
        messageChannel.port1.onmessage = () => {
          resolve()
        }
        messageChannel.port2.onmessage = ({ data }) => {
          messageChannel.port2.postMessage(data, [
            data.port1,
          ]);
        }
      })
      messageChannel.port1.close();
    } catch (e) {
      console.warn(e);
      return false;
    }

    return true;
  })();

  const streams = await (async () => {
    try {
      if (!ReadableStreamExists || !WritableStreamExists || !TransformStreamExists) 
        return false;
      
      const streams = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }

      const clonedObj = structuredClone(streams, {
        transfer: [
          streams.readonly as unknown as Transferable,
          streams.writeonly as unknown as Transferable,
          streams.tranformonly as unknown as Transferable,
        ]
      })

      const messageChannel = new MessageChannel()
      const streams1 = clonedObj;
      await new Promise<void>(resolve => {
        messageChannel.port1.postMessage(streams1, [
          streams1.readonly as unknown as Transferable,
          streams1.writeonly as unknown as Transferable,
          streams1.tranformonly as unknown as Transferable,
        ])
        messageChannel.port1.onmessage = () => {
          resolve();
        }
        messageChannel.port2.onmessage = ({ data }) => {
          messageChannel.port2.postMessage(data, [
            data.readonly as unknown as Transferable,
            data.writeonly as unknown as Transferable,
            data.tranformonly as unknown as Transferable,
          ].filter(x => x !== undefined));
        }
      })
      messageChannel.port1.close();
    } catch (e) {
      console.warn(e);
      return false;
    }

    return true;
  })();

  return { channel, streams };
}

/**
 * Check if an object is an object or a function (because functions also count as objects)
 */
export function isObject(obj: unknown): obj is object | Function {
  return (typeof obj === "object" && obj !== null) || typeof obj === "function";
}

/**
 * Check if an object is an instanceof [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 * 
 * > `DataView` a lower level `TypedArray` which can function while ignoring the platforms inherent endianness. Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 */
export function isTypedArray(obj: unknown): obj is TypeTypedArray | DataView {
  return obj instanceof TypedArray || obj instanceof DataView;
}

/**
 * Check's if an object is `ReadableStream`, `WritableStream` and/or `TransformStream`
 * 
 * > Note: None of the stream API's are transferables in Safari 😥
 */
export function isStream(obj: unknown): obj is ReadableStream | WritableStream | TransformStream {
  return (
    (ReadableStreamExists && obj instanceof ReadableStream) ||
    (WritableStreamExists && obj instanceof WritableStream) ||
    (TransformStreamExists && obj instanceof TransformStream)
  );
}

/**
 * Check's if an object is `MessageChannel`
 */
export function isMessageChannel(obj: unknown): obj is MessageChannel {
  return (
    (MessageChannelExists && obj instanceof MessageChannel)
  );
}

/**
 * Check if an object is a supported transferable
 */
export function isTransferable(obj: unknown): obj is TypeTransferable {
  return (
    (ArrayBufferExists && obj instanceof ArrayBuffer) ||
    (MessagePortExists && obj instanceof MessagePort) ||
    (AudioDataExists && obj instanceof AudioData) ||
    (ImageBitmapExists && obj instanceof ImageBitmap) ||
    (VideoFrameExists && obj instanceof VideoFrame) ||
    (OffscreenCanvasExists && obj instanceof OffscreenCanvas) ||
    (RTCDataChannelExists && obj instanceof RTCDataChannel)
  );
}

/**
 * Filters out duplicate items
 */
export function filterOutDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Creates an array of transferable objects which exist in a given input, up to a max number of iterations
 * Thanks @aaorris for the help optimizing perf.
 * 
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns An array of transferable objects
 */
export function getTransferables(obj: unknown, streams = false, maxCount = 10_000): TypeTransferable[] {
  const result = new Set([]);

  let nextQueue = [];
  let queue = [obj];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      if (isTransferable(item)) {
        result.add(item);
      } else if (isTypedArray(item)) {
        result.add(item.buffer);
      } else if (isMessageChannel(item)) {
        result.add(item.port1);
        result.add(item.port2);
      } else if (streams && isStream(item)) {
        result.add(item);
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        const len = values.length;

        for (let j = 0; j < len; j++) {
          nextQueue.push(values[j]);
        }
      }
    }

    queue = nextQueue;
    nextQueue = [];

    maxCount--;
  }

  return Array.from(result);
}

/**
 * An iterator that contains the transferable objects from the input, up to a max number of iterations
 * Thanks @aaorris for the help optimizing perf.
 * 
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Iterator that contains the transferable objects from the input
 */
export function* getTransferable(obj: unknown, streams = false, maxCount = 10_000): Generator<TypeTransferable | TypeTypedArray | MessageChannel | DataView> {
  const seen = new Set([]);

  let queue = [obj];
  let nextQueue = [];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      if (seen.has(item)) continue;

      if (isTypedArray(item)) {
        seen.add(item);
        const { buffer } = item;
        if (seen.has(buffer)) continue;

        yield buffer;
        seen.add(buffer);
      } else if (isTransferable(item)) {
        yield item;
        seen.add(item);
      } else if (isMessageChannel(item)) {
        seen.add(item);
        if (seen.has(item.port1) || seen.has(item.port2)) continue;

        yield item.port1;
        yield item.port2;

        seen.add(item.port1);
        seen.add(item.port2);
      } else if (streams && isStream(item)) {
        yield item;
        seen.add(item);
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        const len = values.length;

        for (let j = 0; j < len; j++) {
          nextQueue.push(values[j])
        }
      }
    }

    queue = nextQueue;
    nextQueue = [];

    maxCount--;
  }

  seen.clear();
  queue = null;
  nextQueue = null;

  return null;
}

/**
 * Quickly checks to see if input contains at least one transferable object, up to a max number of iterations
 * Thanks @aaorris for the help optimizing perf.
 * 
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Whether input object contains transferable objects
 */
export function hasTransferables(obj: unknown, streams = false, maxCount = 10_000): boolean {
  let queue = [obj];
  let nextQueue = [];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      if (isTypedArray(item)) {
        return true;
      } else if (isTransferable(item)) {
        return true;
      } else if (isMessageChannel(item)) {
        return true;
      } else if (streams && isStream(item)) {
        return true;
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      if (isObject(item) && !isStream(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        const len = values.length;

        for (let j = 0; j < len; j++) {
          nextQueue.push(values[j])
        }
      }
    }

    queue = nextQueue;
    nextQueue = [];

    maxCount--;
  }

  queue = null;
  nextQueue = null;

  return false;
}