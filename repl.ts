import { MB, generateObj, maxSize, isClonable } from "./benchmark/utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "./src/mod.ts";

const num = Math.pow(2, Math.log2(maxSize * MB));
const obj = generateObj(num / MB, isClonable);

console.time("Benchmark");

hasTransferables(obj, isClonable.streams);

// Array.from(getTransferable(obj, isClonable.streams));

// getTransferables(obj, isClonable.streams);

console.timeEnd("Benchmark");


// console.log(x)


// console.time("Benchmark2");

// // hasTransferables(obj, isClonable.streams);

// // Array.from(getTransferable(obj, isClonable.streams));

// let y = getTransferables2(obj, isClonable.streams);

// console.timeEnd("Benchmark2");


/**
 
export function getTransferables2(obj: unknown, streams = false, maxCount = 10_000): TypeTransferable[] {
  const result = [];
  const queues = [[obj]];

  for (let i = 0; i < queues.length; i ++) {
    const queue = queues[i];
    const len = queue.length;

    for (let j = 0; j < len; j ++) {
      let item = queue[j];
      const struct = item?.constructor;

      switch (true) {
        case struct === Int8Array:
        case struct === Uint8Array:
        case struct === Uint8ClampedArray:
        case struct === Int16Array:
        case struct === Uint16Array:
        case struct === Int32Array:
        case struct === Uint32Array:
        case struct === Float32Array:
        case struct === Float64Array:
        case struct === DataView:
          result.push((item as TypeTypedArray | DataView).buffer);
          break;

        case struct === MessageChannel:
          result.push((item as MessageChannel).port1);
          result.push((item as MessageChannel).port2);
          break;

        // case isTransferable(item):
        case struct === ArrayBuffer:
        case struct === MessagePort:
        case struct === AudioData:
        case struct === ImageBitmap:
        case struct === VideoFrame:
        case struct === OffscreenCanvas:
        case struct === RTCDataChannel:
          
        case struct === ReadableStream:
        case struct === WritableStream:
        case struct === TransformStream:
          if (streams)
            result.push(item);
          break;

        /**
         * Streams are circular objects, to avoid an infinite loop 
         * we need to ensure that the object is not a stream 
        * /
        default:
          if (!isStream(item) && isObject(item)) {
            const values = struct === Array ? item as any[] : Object.values(item);
            if (values.length) queues.push(values);
          }
      }



      // switch (struct) {
      //   case Int8Array:
      //   case Uint8Array:
      //   case Uint8ClampedArray:
      //   case Int16Array:
      //   case Uint16Array:
      //   case Int32Array:
      //   case Uint32Array:
      //   case Float32Array:
      //   case Float64Array:
      //   case DataView:
      //     result.push((item as TypeTypedArray | DataView).buffer);
      //     break;

      //   case MessageChannel:
      //     result.push((item as MessageChannel).port1);
      //     result.push((item as MessageChannel).port2);
      //     break;

      //   case ArrayBuffer:
      //   case MessagePort:
      //   case AudioData:
      //   case ImageBitmap:
      //   case VideoFrame:
      //   case OffscreenCanvas:
      //   case RTCDataChannel:

      //   case ReadableStream:
      //   case WritableStream:
      //   case TransformStream:
      //     if (streams)
      //       result.push(item);
      //     break;

      //   /**
      //    * Streams are circular objects, to avoid an infinite loop 
      //    * we need to ensure that the object is not a stream 
      //   * /
      //   default:
      //     if (!isStream(item) && isObject(item)) {
      //       const values = struct === Array ? item as any[] : Object.values(item);
      //       if (values.length) queues.push(values);
      //     }
      // }

      // if (isTypedArray(item)) {
      //   result.add(item.buffer);
      // } else if (isTransferable(item)) {
      //   result.add(item);
      // } else if (isMessageChannel(item)) {
      //   result.add(item.port1);
      //   result.add(item.port2);
      // } else if (streams && isStream(item)) {
      //   result.add(item);
      // }

      // /**  
      //  * Streams are circular objects, to avoid an infinite loop 
      //  * we need to ensure that the object is not a stream 
      // * /
      // else if (!isStream(item) && isObject(item)) {
      //   const values = Array.isArray(item) ? item : Object.values(item);
      //   if (values.length) queues.push(values);
      // }
    }

    if (--maxCount <= 0) break;
  }

  return Array.from(result);
}


*/



/**
 * Check if an object is an instanceof [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 *
 * > `DataView` a lower level `TypedArray` which can function while ignoring the platforms inherent endianness. Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 */
// export function isTypedArray(obj: unknown): obj is TypeTypedArray | DataView {
//   switch (obj && obj.constructor) {
//     case Int8Array:
//     case Uint8Array:
//     case Uint8ClampedArray:
//     case Int16Array:
//     case Uint16Array:
//     case Int32Array:
//     case Uint32Array:
//     case Float32Array:
//     case Float64Array:
//     case DataView:
//       return true;
//     default:
//       return false;
//   }
// }

// /**
//  * Check's if an object is `ReadableStream`, `WritableStream` and/or `TransformStream`
//  * 
//  * > Note: None of the stream API's are transferables in Safari 😥
//  */
// export function isStream(obj: unknown): obj is ReadableStream | WritableStream | TransformStream {
//   if (!StreamExists) return false;
//   switch (obj && obj.constructor) {
//     case ReadableStream:
//     case WritableStream:
//     case TransformStream:
//       return true;
//     default:
//       return false;
//   }
//   // if (!StreamExists) return false;
//   // return (
//   //   (obj instanceof ReadableStream) ||
//   //   (obj instanceof WritableStream) ||
//   //   (obj instanceof TransformStream)
//   // );
// }

// /**
//  * Check's if an object is `MessageChannel`
//  */
// export function isMessageChannel(obj: unknown): obj is MessageChannel {
//   if (!MessageChannelExists) return false;
//   switch (obj && obj.constructor) {
//     case MessageChannel:
//       return true;
//     default:
//       return false;
//   }
//   // return (
//   //   (obj instanceof MessageChannel)
//   // );
// }

// /**
//  * Check if an object is a supported transferable
//  */
// export function isTransferable(obj: unknown): obj is TypeTransferable {
//   if (!TransferableExists) return false;
//   switch (obj && obj.constructor) {
//     case ArrayBuffer:
//     case MessagePort:
//     case AudioData:
//     case ImageBitmap:
//     case VideoFrame:
//     case OffscreenCanvas:
//     case RTCDataChannel:
//       return true;
//     default:
//       return false;
//   }
//   // return (
//   //   (ArrayBufferExists && obj instanceof ArrayBuffer) ||
//   //   (MessagePortExists && obj instanceof MessagePort) ||
//   //   (AudioDataExists && obj instanceof AudioData) ||
//   //   (ImageBitmapExists && obj instanceof ImageBitmap) ||
//   //   (VideoFrameExists && obj instanceof VideoFrame) ||
//   //   (OffscreenCanvasExists && obj instanceof OffscreenCanvas) ||
//   //   (RTCDataChannelExists && obj instanceof RTCDataChannel)
//   // );
// }