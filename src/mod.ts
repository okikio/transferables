/// <reference path="./types.d.ts" />

/**
 * Represents the prototype from which all typed arrays are derived. This can be used to check if an object is a typed array.
 * 
 * @example
 * ```ts
 * const isTypedArray = (obj: any): obj is TypedArray => obj instanceof TypedArray;
 * console.log(isTypedArray(new Uint8Array(10))); // true
 * ```
 */
export const TypedArray: any = Object.getPrototypeOf(Int8Array);

/**
 * Represents the AudioData interface from the Web Audio API, allowing manipulation of audio data directly.
 * 
 * @example
 * ```ts
 * if (AudioData) {
 *   console.log("AudioData is supported in this environment.");
 * }
 * ```
 */
export const AudioData = globalThis.AudioData;

/**
 * Represents the ImageBitmap interface, enabling manipulation of images in a way that is optimized for performance.
 * 
 * @example
 * ```ts
 * createImageBitmap(blob).then((imageBitmap) => {
 *   console.log(imageBitmap instanceof ImageBitmap); // true
 * });
 * ```
 */
export const ImageBitmap = globalThis.ImageBitmap;

/**
 * Represents the VideoFrame interface, part of the WebCodecs API, allowing low-level manipulation of video frames.
 * 
 * @example
 * ```ts
 * if (VideoFrame) {
 *   console.log("VideoFrame is supported, can manipulate video frames directly.");
 * }
 * ```
 */
export const VideoFrame = globalThis.VideoFrame;

/**
 * Represents the OffscreenCanvas interface, enabling canvas rendering to be done off the main thread.
 * 
 * @example
 * ```ts
 * if (OffscreenCanvas) {
 *   const offscreen = new OffscreenCanvas(256, 256);
 *   console.log(offscreen instanceof OffscreenCanvas); // true
 * }
 * ```
 */
export const OffscreenCanvas = globalThis.OffscreenCanvas;

/**
 * Represents the RTCDataChannel interface, used for bidirectional peer-to-peer transfers of arbitrary data.
 * 
 * @example
 * ```ts
 * const peerConnection = new RTCPeerConnection();
 * const dataChannel = peerConnection.createDataChannel("myLabel");
 * console.log(dataChannel instanceof RTCDataChannel); // true
 * ```
 */
export const RTCDataChannel = globalThis.RTCDataChannel;

/**
 * Represents the MessageChannel interface, providing a way to send data between different parts of your application.
 * 
 * @example
 * ```ts
 * const channel = new MessageChannel();
 * channel.port1.onmessage = (event) => console.log(event.data);
 * channel.port2.postMessage("Hello, world!");
 * ```
 */
export const MessageChannel = globalThis.MessageChannel;

/**
 * Represents the ReadableStream interface, providing a way to handle streamed data read operations.
 */
export const ReadableStream = globalThis.ReadableStream;

/**
 * Represents the WritableStream interface, providing a way to handle streamed data write operations.
 */
export const WritableStream = globalThis.WritableStream;

/**
 * Represents the TransformStream interface, allowing data to be transformed as it is passed through the stream.
 */
export const TransformStream = globalThis.TransformStream;

const ReadableStreamExists = "ReadableStream" in globalThis;
const WritableStreamExists = "WritableStream" in globalThis;
const TransformStreamExists = "TransformStream" in globalThis;

const StreamExists = (
  ReadableStreamExists &&
  WritableStreamExists &&
  TransformStreamExists
);

const MessageChannelExists = "MessageChannel" in globalThis;
const MessagePortExists = "MessagePort" in globalThis;

const ArrayBufferExists = "ArrayBuffer" in globalThis;
const AudioDataExists = "AudioData" in globalThis;
const ImageBitmapExists = "ImageBitmap" in globalThis;
const VideoFrameExists = "VideoFrame" in globalThis;

const OffscreenCanvasExists = "OffscreenCanvas" in globalThis;
const RTCDataChannelExists = "RTCDataChannel" in globalThis;

const TransferableExists = (
  ArrayBufferExists &&
  MessagePortExists &&
  AudioDataExists &&
  ImageBitmapExists &&
  VideoFrameExists &&
  OffscreenCanvasExists &&
  RTCDataChannelExists
);

const structuredCloneExists = "structuredClone" in globalThis;

/**
 * Summary of the available transferable objects in the current JavaScript runtime, useful for feature detection.
 * 
 * @example
 * ```ts
 * if (AVAILABLE_TRANSFERABLE_OBJECTS.AudioDataExists) {
 *   console.log("AudioData is available for use.");
 * }
 * ```
 */
export const AVAILABLE_TRANSFERABLE_OBJECTS = {
  TransferableExists,
  StreamExists,

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
};

/**
 * Type definition for all typed array variants, useful for type checking and TypeScript interfaces.
 * 
 * @example
 * ```ts
 * function processTypedArray(typedArray: TypeTypedArray) {
 *   console.log(typedArray.byteLength);
 * }
 * ```
 */
export type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

/**
 * Type definition for all transferable object types, supporting efficient data transfer operations.
 * 
 * @example
 * ```ts
 * function transferObjects(transferable: TypeTransferable) {
 *   postMessage(message, [transferable]);
 * }
 * ```
 */
export type TypeTransferable = ArrayBufferLike | ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream | AudioData | ImageBitmap | VideoFrame | OffscreenCanvas | RTCDataChannel;

/**
 * Tests if certain transferable objects are actually supported in a specific js environment when using `structuredClone` and `MessageChannel postMessage`
 */
export async function isSupported(): Promise<{
  channel: boolean;
  streams: boolean;
}> {
  async function getChannels() {
    try {
      if (!MessageChannelExists)
        return false;

      const msgChanl = new MessageChannel();
      const obj = { port1: msgChanl.port1 }
      const clonedObj = structuredCloneExists ? structuredClone(obj, {
        transfer: [
          msgChanl.port1,
        ]
      }) : obj;

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
      return false;
    }

    return true;
  };

  async function getStreams() {
    try {
      if (!StreamExists)
        return false;

      if (!MessageChannelExists && !structuredCloneExists)
        return false;

      const streams = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }

      const clonedObj = structuredCloneExists ? structuredClone(streams, {
        transfer: [
          streams.readonly as unknown as Transferable,
          streams.writeonly as unknown as Transferable,
          streams.tranformonly as unknown as Transferable,
        ]
      }) : streams;

      if (MessageChannelExists) {
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
      }
    } catch (e) {
      return false;
    }

    return true;
  };

  const [channel, streams] = await Promise.all([getChannels(), getStreams()])
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
  return ArrayBuffer.isView(obj);
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
  const result = new Set<TypeTransferable>([]);
  const queues = [[obj]];

  for (let i = 0; i < queues.length; i++) {
    const queue = queues[i];
    const len = queue.length;

    for (let j = 0; j < len; j++) {
      const item = queue[j];

      if (isTypedArray(item)) {
        result.add(item.buffer);
      } else if (isTransferable(item) || streams && isStream(item)) {
        result.add(item);
      } else if (isMessageChannel(item)) {
        result.add(item.port1);
        result.add(item.port2);
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        if (values.length) queues.push(values);
      }

      if (--maxCount <= 0) break;
    }
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
  const seen = new Set<TypeTransferable>([]);
  const queues = [[obj]];

  for (let i = 0; i < queues.length; i++) {
    const queue = queues[i];
    const len = queue.length;

    for (let j = 0; j < len; j++) {
      const item = queue[j];

      if (isTypedArray(item)) {
        const { buffer } = item;
        if (seen.has(buffer)) continue;

        yield buffer;
        seen.add(buffer);
      } else if (isTransferable(item) || streams && isStream(item)) {
        if (seen.has(item)) continue;

        yield item;
        seen.add(item);
      } else if (isMessageChannel(item)) {
        if (seen.has(item.port1) || seen.has(item.port2)) continue;

        yield item.port1;
        yield item.port2;

        seen.add(item.port1);
        seen.add(item.port2);
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        if (values.length) queues.push(values);
      }

      if (--maxCount <= 0) break;
    }
  }

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
  const queues = [[obj]];

  for (let i = 0; i < queues.length; i++) {
    const queue = queues[i];
    const len = queue.length;

    for (let j = 0; j < len; j++) {
      const item = queue[j];

      if (isTypedArray(item)) {
        return true;
      } else if (isTransferable(item) || (streams && isStream(item))) {
        return true;
      } else if (isMessageChannel(item)) {
        return true;
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = Array.isArray(item) ? item : Object.values(item);
        if (values.length) queues.push(values)
      }

      if (--maxCount <= 0) break;
    }
  }

  return false;
}
