/**
 * Represents the number of bits in a single byte.
 * @constant
 * @type {number}
 */
export const BITS_IN_BYTE: number = 8; // 1 byte = 8 bits

/**
 * Represents the number of bytes in a megabyte (MB) in the binary system.
 * In the binary system, a megabyte is defined as 1024^2 bytes (1,048,576 bytes), which is 2^20 bytes.
 * This definition is based on binary multiples, which are convenient for the binary architecture of computer memory.
 * The term "mebibyte" (MiB) is also used to denote 2^20 bytes to avoid confusion with the decimal definition of a megabyte (1,000,000 bytes).
 * @constant
 * @type {number}
 */
export const BYTES_IN_MEGABYTE: number = 2 ** 20; // 1,048,576 bytes

/**
 * Represents the number of bits in a megabyte (MB) in the binary system.
 * This calculation uses the binary definition of a megabyte, where 1 MB = 1024^2 bytes.
 * The value 1024 (2^10) is used because it is a power of two, aligning with the binary nature of computing.
 * @constant
 * @type {number}
 */
export const BITS_IN_MEGABYTE: number = BITS_IN_BYTE * BYTES_IN_MEGABYTE; // 8 bits/byte * 1,048,576 bytes

/**
 * Represents the maximum size limit in bytes.
 * This example sets the maximum size to 2 times the size of a megabyte.
 * @constant
 * @type {number}
 */
export const MAX_SIZE: number = 2 * BITS_IN_MEGABYTE; // 2 MB in bytes
