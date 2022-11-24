export const TypedArray = Object.getPrototypeOf(Int8Array);
export const AudioData = globalThis.AudioData;
export const VideoFrame = globalThis.VideoFrame;
export const OffscreenCanvas = globalThis.OffscreenCanvas;
export const RTCDataChannel = globalThis.RTCDataChannel;

export type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream /* | typeof AudioData */ | ImageBitmap /* | typeof VideoFrame */ | OffscreenCanvas | RTCDataChannel;

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
    ("ReadableStream" in globalThis && obj instanceof ReadableStream) ||
    ("WritableStream" in globalThis && obj instanceof WritableStream) ||
    ("TransformStream" in globalThis && obj instanceof TransformStream)
  );
}

/**
 * Check if an object is a supported transferable
 */
export function isTransferable(obj: unknown): obj is TypeTransferable {
  return (
    ("ArrayBuffer" in globalThis && obj instanceof ArrayBuffer) ||
    ("MessagePort" in globalThis && obj instanceof MessagePort) ||
    ("AudioData" in globalThis && obj instanceof AudioData) ||
    ("ImageBitmap" in globalThis && obj instanceof ImageBitmap) ||
    ("VideoFrame" in globalThis && obj instanceof VideoFrame) ||
    ("OffscreenCanvas" in globalThis && obj instanceof OffscreenCanvas) ||
    ("RTCDataChannel" in globalThis && obj instanceof RTCDataChannel)
  );
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
// export function* getTransferable(obj: unknown, streams = false, depth = 25): Generator<TypeTransferable | []> {
//   if (depth <= 0) return [];

//   if (isTypedArray(obj)) {
//     yield obj.buffer;
//   } else if (isTransferable(obj) || (streams && isStream(obj))) {
//     yield obj;
//   }

//   /* 
//     Streams are circular objects, to avoid an infinite loop 
//     we need to ensure that the object is not a stream 
//   */
//   else if (isObject(obj) && !isStream(obj)) {
//     const values = Array.isArray(obj) ? obj : Object.values(obj);
//     for (let x of values) {
//       yield* getTransferable(x, streams, depth - 1);
//     }
//   }

//   yield [];
// }

/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * 
 * @param obj Input object
 * @param depth Maximum depth
 * @param streams Includes streams as transferable
 * @returns An array of transferable objects
 */
// export function getTransferables(obj: unknown, depth = 25, streams = false): TypeTransferable[] {
//   return [...filterOutDuplicates(Array.from(getTransferable(obj, depth, streams)).flat())];
// }

/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * Thanks @aaorris
 * 
 * @param obj Input object
 * @param maxCount Maximum depth
 * @param streams Includes streams as transferable
 * @returns An array of transferable objects
 */
export function getTransferables(obj: unknown, streams = false, maxCount = 10_000): TypeTransferable[] {
  const result = new Set([]);

  let nextQueue = [];
  let queue = [obj];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      if (isTypedArray(item)) {
        result.add((item as TypeTypedArray).buffer);
      } else if (isTransferable(item)) {
        result.add(item);
      } else if (streams && isStream(item)) {
        result.add(item);
      }

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (isObject(item) && !isStream(item)) {
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

// export function getTransferables(obj: unknown, streams = false, depth = 25): TypeTransferable[] {
//   if (depth <= 0) return [];

//   if (isTypedArray(obj)) {
//     const buffer = (obj as TypeTypedArray).buffer;
//     return [buffer];
//   } else if (isTransferable(obj) || (streams && isStream(obj))) {
//     return [obj as TypeTransferable];
//   }

//   /* 
//     Streams are circular objects, to avoid an infinite loop 
//     we need to ensure that the object is not a stream 
//   */
//   else if (isObject(obj) && !isStream(obj)) {
//     const values = Array.isArray(obj) ? obj : Object.values(obj);
//     const transferables = values.flatMap(x => getTransferables(x, streams, depth - 1));
//     return filterOutDuplicates(transferables);
//   }

//   return [];
// }

/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * Thanks @aaorris
 * 
 * @param obj Input object
 * @param maxCount Maximum depth
 * @param streams Includes streams as transferable
 * @returns An array of transferable objects
 */
export function* getTransferable(obj: unknown, streams = false, maxCount = 10_000): Generator<TypeTransferable | TypeTypedArray | DataView> {
  const seen = new Set([]);

  let queue = [obj];
  let nextQueue = [];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      const newItem = !seen.has(item);
      if (isTypedArray(item)) {
        if (newItem) {
          const { buffer } = item;
          if (!seen.has(buffer)) {
            yield buffer;
            seen.add(buffer);
          }

          seen.add(item);
        }
      } else if (isTransferable(item) || (streams && isStream(item))) {
        if (newItem) {
          yield item;
          seen.add(item);
        }
      } 

      /**  
       * Streams are circular objects, to avoid an infinite loop 
       * we need to ensure that the object is not a stream 
      */
      else if (!isStream(item) && isObject(item)) {
        const values = (Array.isArray(item) ? item : Object.values(item));
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
  // queue.clear();
}

// export function* getTransferable(obj: unknown, streams = false, depth = 25): Generator<TypeTransferable | []> {
//   if (depth <= 0) return [];

//   if (isTypedArray(obj)) {
//     yield obj.buffer;
//   } else if (isTransferable(obj) || (streams && isStream(obj))) {
//     yield obj;
//   }

//   /* 
//     Streams are circular objects, to avoid an infinite loop 
//     we need to ensure that the object is not a stream 
//   */
//   else if (isObject(obj) && !isStream(obj)) {
//     const values = Array.isArray(obj) ? obj : Object.values(obj);
//     for (let x of values) {
//       yield* getTransferable(x, streams, depth - 1);
//     }
//   }

//   yield [];
// }

/**
 * Check if object contains transferable objects
 * 
 * @param obj Input object
 * @param depth Maximum depth to look
 * @param streams Includes streams as transferable
 * @returns Whether object contains transferable objects
 */
// export function hasTransferables(obj: unknown, depth = 25, streams = false): boolean {
//   if (depth <= 0) return false;

//   if (streams && isStream(obj)) {
//     return true;
//   } else if (isTypedArray(obj) || isTransferable(obj)) {
//     return true;
//   }

//   /* 
//     Streams are circular objects, to avoid an infinite loop 
//     we need to ensure that the object is not a stream 
//   */
//   else if (isObject(obj) && !isStream(obj)) {
//     const deepValues = [];
//     const values = Array.isArray(obj) ? obj : Object.values(obj);
//     const inBreadth = values.some(x => {
//       if ((streams && isStream(x)) || isTypedArray(x) || isTransferable(x)) return true;
//       if (isObject(x)) {
//         const asValues = Array.isArray(obj) ? obj : Object.values(obj); 
//         const len = asValues.length;
//         // deepValues.push(...asValues);
//         for (let j = 0; j < len; j++) {
//           deepValues.push(asValues[j])
//         }
//       }
//       return false;
//     });

//     if (inBreadth) return true;
//     return deepValues.some(x => hasTransferables(x, depth - 1, streams));
//   }

//   return false;
// }

export function hasTransferables(obj: unknown, streams = false, maxCount = 10_000): boolean {
  let queue = [obj];
  let nextQueue = [];

  while (queue.length > 0 && maxCount > 0) {
    for (let item of queue) {
      if (isTypedArray(item)) {
        return true;
      } else if (isTransferable(item)) {
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

  return false;
}