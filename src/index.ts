export const TypedArray = Object.getPrototypeOf(Int8Array);
export const AudioData = globalThis.AudioData;
export const VideoFrame = globalThis.VideoFrame;
export const OffscreenCanvas = globalThis.OffscreenCanvas;
export const RTCDataChannel = globalThis.RTCDataChannel;

export type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream | typeof AudioData | ImageBitmap | typeof VideoFrame | OffscreenCanvas | RTCDataChannel;

/**
 * Check if an object is an object or a function (because functions also count as objects)
 */
export function isObject(obj: unknown) {
  return (typeof obj === "object" && obj !== null) || typeof obj === "function";
}

/**
 * Check if an object is an instanceof [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 * 
 * > `DataView` a lower level `TypedArray` which can function while ignoring the platforms inherent endianness. Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 */
export function isTypedArray(obj: unknown) {
  return obj instanceof TypedArray || obj instanceof DataView;
}

/**
 * Check's if an object is `ReadableStream`, `WritableStream` and/or `TransformStream`
 * 
 * > Note: None of the stream API's are transferables in Safari 😥
 */
export function isStream(obj: unknown) {
  return ("ReadableStream" in globalThis && obj instanceof ReadableStream) ||
    ("WritableStream" in globalThis && obj instanceof WritableStream) ||
    ("TransformStream" in globalThis && obj instanceof TransformStream);
}

/**
 * Check if an object is a supported transferable
 */
export function isTransferable(obj: unknown) {
  return ("ArrayBuffer" in globalThis && obj instanceof ArrayBuffer) ||
    ("MessagePort" in globalThis && obj instanceof MessagePort) ||
    ("AudioData" in globalThis && obj instanceof AudioData) ||
    ("ImageBitmap" in globalThis && obj instanceof ImageBitmap) ||
    ("VideoFrame" in globalThis && obj instanceof VideoFrame) ||
    ("OffscreenCanvas" in globalThis && obj instanceof OffscreenCanvas) ||
    ("RTCDataChannel" in globalThis && obj instanceof RTCDataChannel);
}

/**
 * Filters out duplicate items
 */
export function filterOutDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * 
 * @param obj Input object
 * @param depth Maximum depth
 * @param streams Includes streams as transferable
 * @returns An array of transferable objects
 */
export function getTransferables(obj: unknown, depth = 25, streams = false): TypeTransferable[] {
  if (depth <= 0) return [];

  if (isTypedArray(obj)) {
    const buffer = (obj as TypeTypedArray).buffer;
    return [buffer];
  } else if (isTransferable(obj) || (streams && isStream(obj))) {
    return [obj as TypeTransferable];
  } else if (Array.isArray(obj)) {
    const transferables = obj.flatMap(x => getTransferables(x, depth - 1, streams));
    return filterOutDuplicates(transferables);
  }
  
  /* 
    Streams are circular objects, to avoid an infinite loop 
    we need to ensure that the object is not a stream 
  */
  else if (isObject(obj) && !isStream(obj)) {
    const transferables = Object.values(obj).flatMap(x => getTransferables(x, depth - 1, streams));
    return filterOutDuplicates(transferables);
  }

  return [];
}

/**
 * Check if object contains transferable objects
 * 
 * @param obj Input object
 * @param depth Maximum depth to look
 * @param streams Includes streams as transferable
 * @returns Whether object contains transferable objects
 */
export function hasTransferables(obj: unknown, depth = 25, streams = false): boolean {
  if (depth <= 0) return false;

  if (streams && isStream(obj)) {
    return true;
  } else if (isTypedArray(obj) || isTransferable(obj)) {
    return true;
  } else if (Array.isArray(obj)) {
    return obj.flatMap(x => hasTransferables(x, depth - 1, streams)).includes(true);
  }
    
  /* 
    Streams are circular objects, to avoid an infinite loop 
    we need to ensure that the object is not a stream 
  */
  else if (isObject(obj) && !isStream(obj)) {
    return Object.values(obj).flatMap(x => hasTransferables(x, depth - 1, streams)).includes(true);
  }

  return false;
}