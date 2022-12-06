export declare const TypedArray: any;
export declare const AudioData: any;
export declare const VideoFrame: any;
export declare const OffscreenCanvas: {
    new (width: number, height: number): OffscreenCanvas;
    /**
     * Check's if an object is `ReadableStream`, `WritableStream` and/or `TransformStream`
     *
     * > Note: None of the stream API's are transferables in Safari 😥
     */
    prototype: OffscreenCanvas;
};
export declare const RTCDataChannel: {
    new (): RTCDataChannel;
    prototype: RTCDataChannel;
};
export declare type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export declare type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream | ImageBitmap | OffscreenCanvas | RTCDataChannel;
/**
 * Tests if certain transferable objects are actually supported in a specific js environment when using `structuredClone` and `MessageChannel postMessage`
 */
export declare function isSupported(): Promise<{
    channel: boolean;
    streams: boolean;
}>;
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
 * Creates an array of transferable objects which exist in a given input, up to a max number of iterations
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns An array of transferable objects
 */
export declare function getTransferables(obj: unknown, streams?: boolean, maxCount?: number): TypeTransferable[];
/**
 * An iterator that contains the transferable objects from the input, up to a max number of iterations
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Iterator that contains the transferable objects from the input
 */
export declare function getTransferable(obj: unknown, streams?: boolean, maxCount?: number): Generator<TypeTransferable | TypeTypedArray | MessageChannel | DataView>;
/**
 * Quickly checks to see if input contains at least one transferable object, up to a max number of iterations
 * Thanks @aaorris
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Whether input object contains transferable objects
 */
export declare function hasTransferables(obj: unknown, streams?: boolean, maxCount?: number): boolean;
