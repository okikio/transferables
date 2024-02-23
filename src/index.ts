/**
 * Provides utilities for working with transferable objects in JavaScript, such as TypedArrays, Streams, and other objects that can be transferred between different execution contexts (e.g., main thread and Web Workers) without copying the actual data. This module checks for the availability of various transferable types in the current environment and includes functions to identify, validate, and manage these objects efficiently.
 *
 * It's useful for optimizing performance in web applications by allowing for the efficient transfer of data. The module offers methods to detect support for different objects and to work with them, including checking their transferability and retrieving transferable objects from a given structure.
 * 
 * 
 * The utility functions include:
 * - `isSupported`: Checks if certain transferable objects are supported in the current JS environment.
 * - `isObject`: Determines if a given value is an object or a function.
 * - `isTypedArray`, `isStream`, `isMessageChannel`, `isTransferable`: Type guards for different transferable object types.
 * - `getTransferables`, `getTransferable`, `hasTransferables`: Utilities for working with collections of transferable objects.
 *
 * @example
 * ```ts
 * import { isTypedArray, getTransferables } from "jsr:@okikio/transferables";
 *
 * const myTypedArray = new Uint8Array(1024);
 * // Check if it's a typed array
 * console.log(isTypedArray(myTypedArray)); // true
 *
 * // Retrieve transferable objects from an object
 * const transferables = getTransferables({ key: myTypedArray });
 * // Use transferables in postMessage for efficient data transfer
 * postMessage({ key: myTypedArray }, transferables);
 * ```
 *
 * @module
 */

export * from "./mod.ts";
