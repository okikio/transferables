export declare const TypedArray: any;
export declare const AudioData: any;
export declare const ImageBitmap: {
    new (): ImageBitmap;
    prototype: ImageBitmap;
};
export declare const VideoFrame: any;
export declare const OffscreenCanvas: {
    new (width: number, height: number): OffscreenCanvas;
    prototype: OffscreenCanvas;
};
export declare const RTCDataChannel: {
    new (): RTCDataChannel;
    prototype: RTCDataChannel;
};
export declare const MessageChannel: {
    new (): MessageChannel;
    prototype: MessageChannel;
};
export declare const ReadableStream: {
    new (underlyingSource: UnderlyingByteSource, strategy?: {
        highWaterMark?: number;
    }): ReadableStream<Uint8Array>;
    new <R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    new <R_1 = any>(underlyingSource?: UnderlyingSource<R_1>, strategy?: QueuingStrategy<R_1>): ReadableStream<R_1>;
    prototype: ReadableStream<any>;
};
export declare const WritableStream: {
    new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    prototype: WritableStream<any>;
};
export declare const TransformStream: {
    new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
    prototype: TransformStream<any, any>;
};
/**
 * Let's you know which transferable objects to actually exist in the js runtime the library is running in
 */
export declare const AVAILABLE_TRANSFERABLE_OBJECTS: {
    TransferableExists: boolean;
    StreamExists: boolean;
    ReadableStreamExists: boolean;
    WritableStreamExists: boolean;
    TransformStreamExists: boolean;
    MessageChannelExists: boolean;
    MessagePortExists: boolean;
    ArrayBufferExists: boolean;
    AudioDataExists: boolean;
    ImageBitmapExists: boolean;
    VideoFrameExists: boolean;
    OffscreenCanvasExists: boolean;
    RTCDataChannelExists: boolean;
};
export type TypeTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type TypeTransferable = ArrayBuffer | MessagePort | ReadableStream | WritableStream | TransformStream | ImageBitmap | OffscreenCanvas | RTCDataChannel;
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
 * Thanks @aaorris for the help optimizing perf.
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns An array of transferable objects
 */
export declare function getTransferables(obj: unknown, streams?: boolean, maxCount?: number): TypeTransferable[];
/**
 * An iterator that contains the transferable objects from the input, up to a max number of iterations
 * Thanks @aaorris for the help optimizing perf.
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Iterator that contains the transferable objects from the input
 */
export declare function getTransferable(obj: unknown, streams?: boolean, maxCount?: number): Generator<TypeTransferable | TypeTypedArray | MessageChannel | DataView>;
/**
 * Quickly checks to see if input contains at least one transferable object, up to a max number of iterations
 * Thanks @aaorris for the help optimizing perf.
 *
 * @param obj Input object
 * @param streams Includes streams as transferable
 * @param maxCount Maximum number of iterations
 * @returns Whether input object contains transferable objects
 */
export declare function hasTransferables(obj: unknown, streams?: boolean, maxCount?: number): boolean;
