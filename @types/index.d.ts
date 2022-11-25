export declare const TypedArray: any;
export declare const AudioData: any;
export declare const VideoFrame: any;
export declare const OffscreenCanvas: {
    new (width: number, height: number): OffscreenCanvas;
    prototype: OffscreenCanvas;
};
export declare const RTCDataChannel: {
    new (): RTCDataChannel;
    prototype: RTCDataChannel;
};
export declare type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export declare type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream | ImageBitmap | OffscreenCanvas | RTCDataChannel;
/**
 * Check if an object is an object or a function (because functions also count as objects)
 */
export declare function isObject(obj: unknown): obj is object | Function;
/**
 * Check if an object is an instanceof [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 *
 * > `DataView` a lower level `TypedArray` which can function while ignoring the platforms inherent endianness. Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 */
export declare function isTypedArray(obj: unknown): obj is TypeTypedArray | DataView;
/**
 * Check's if an object is `ReadableStream`, `WritableStream` and/or `TransformStream`
 *
 * > Note: None of the stream API's are transferables in Safari 😥
 */
export declare function isStream(obj: unknown): obj is ReadableStream | WritableStream | TransformStream;
/**
 * Check's if an object is `MessageChannel`
 */
export declare function isMessageChannel(obj: unknown): obj is MessageChannel;
/**
 * Check if an object is a supported transferable
 */
export declare function isTransferable(obj: unknown): obj is TypeTransferable;
/**
 * Filters out duplicate items
 */
export declare function filterOutDuplicates<T>(array: T[]): T[];
/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum iteration
 * @returns An array of transferable objects
 */
export declare function getTransferables(obj: unknown, streams?: boolean, maxCount?: number): TypeTransferable[];
/**
 * Create an array of transferable objects which exist in a given object, to a maximum set depth given
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum iteration
 * @returns An array of transferable objects
 */
export declare function getTransferable(obj: unknown, streams?: boolean, maxCount?: number): Generator<TypeTransferable | TypeTypedArray | MessageChannel | DataView>;
/**
 * Check if object contains transferable objects
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param depth Maximum depth to look
 * @param streams Includes streams as transferable
 * @returns Whether object contains transferable objects
 */
/**
 * Check if object contains transferable objects
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum iteration
 * @returns Whether object contains transferable objects
 */
export declare function hasTransferables(obj: unknown, streams?: boolean, maxCount?: number): boolean;
