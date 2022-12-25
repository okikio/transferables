# Node

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.217 ms ± 0.305 ms   | null                          | in 7.723 ms ± 3.242 ms      | in 8.127 ms ± 4.585 ms             | in 13.859 ms ± 6.13 ms             |
| 2 B        | in 0.085 ms ± 0.028 ms   | null                          | in 4.823 ms ± 0.251 ms      | in 6.898 ms ± 3.179 ms             | in 4.943 ms ± 0.285 ms             |
| 4 B        | in 0.077 ms ± 0.022 ms   | null                          | in 4.74 ms ± 0.211 ms       | in 5.187 ms ± 0.786 ms             | in 4.911 ms ± 0.296 ms             |
| 8 B        | in 0.076 ms ± 0.022 ms   | null                          | in 4.608 ms ± 0.105 ms      | in 9.353 ms ± 5.523 ms             | in 5.059 ms ± 0.195 ms             |
| 16 B       | in 0.075 ms ± 0.018 ms   | null                          | in 4.899 ms ± 0.297 ms      | in 5.067 ms ± 0.536 ms             | in 4.939 ms ± 0.469 ms             |
| 32 B       | in 0.071 ms ± 0.016 ms   | null                          | in 8.994 ms ± 8.888 ms      | in 23.486 ms ± 7.58 ms             | in 4.4 ms ± 0.223 ms               |
| 64 B       | in 0.071 ms ± 0.016 ms   | null                          | in 4.068 ms ± 0.264 ms      | in 4.746 ms ± 0.653 ms             | in 4.392 ms ± 0.249 ms             |
| 128 B      | in 0.068 ms ± 0.015 ms   | null                          | in 4.747 ms ± 0.709 ms      | in 4.703 ms ± 0.213 ms             | in 4.582 ms ± 0.285 ms             |
| 256 B      | in 0.107 ms ± 0.059 ms   | null                          | in 7.993 ms ± 3.856 ms      | in 6.681 ms ± 3.163 ms             | in 4.921 ms ± 0.157 ms             |
| 512 B      | in 0.074 ms ± 0.022 ms   | null                          | in 8.108 ms ± 5.883 ms      | in 18.322 ms ± 6.232 ms            | in 5.58 ms ± 0.173 ms              |
| 1.024 kB   | in 0.11 ms ± 0.084 ms    | null                          | in 6.278 ms ± 0.262 ms      | in 9.861 ms ± 3.827 ms             | in 14.883 ms ± 3.845 ms            |
| 2.048 kB   | in 0.487 ms ± 0.822 ms   | null                          | in 8.565 ms ± 0.286 ms      | in 19.003 ms ± 3.501 ms            | in 10.667 ms ± 0.261 ms            |
| 4.096 kB   | in 0.149 ms ± 0.106 ms   | null                          | in 13.563 ms ± 0.747 ms     | in 21.31 ms ± 2.095 ms             | in 17.616 ms ± 0.706 ms            |
| 8.192 kB   | in 0.145 ms ± 0.028 ms   | null                          | in 22.842 ms ± 1.326 ms     | in 41.818 ms ± 5.386 ms            | in 30.321 ms ± 1.273 ms            |
| 16.384 kB  | in 0.327 ms ± 0.009 ms   | null                          | in 42.441 ms ± 1.875 ms     | in 72.339 ms ± 4.225 ms            | in 63.137 ms ± 2.819 ms            |
| 32.768 kB  | in 0.618 ms ± 0.014 ms   | null                          | in 79.735 ms ± 1.812 ms     | in 136.959 ms ± 7.78 ms            | in 113.902 ms ± 3.595 ms           |
| 65.536 kB  | in 1.473 ms ± 0.069 ms   | null                          | in 185.89 ms ± 39.274 ms    | in 265.802 ms ± 4.634 ms           | in 224.117 ms ± 2.85 ms            |
| 131.072 kB | in 3.442 ms ± 0.214 ms   | null                          | in 317.863 ms ± 5.515 ms    | in 534.443 ms ± 14.749 ms          | in 443.066 ms ± 6.008 ms           |
| 262.144 kB | in 14.479 ms ± 5.207 ms  | null                          | in 889.675 ms ± 31.421 ms   | in 1,383.415 ms ± 158.06 ms        | in 1,264.905 ms ± 125.316 ms       |
| 524.288 kB | in 15.271 ms ± 3.676 ms  | null                          | in 1,672.39 ms ± 101.157 ms | in 2,534.39 ms ± 65.788 ms         | in 2,026.997 ms ± 187.993 ms       |
| 1.049 MB   | in 32.132 ms ± 10.636 ms | null                          | in 3,194.749 ms ± 154.98 ms | in 4,884.689 ms ± 243.958 ms       | in 4,136.421 ms ± 117.707 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19.736 ms ± 8.029 ms      | null                       | in 25.32 ms ± 13.289 ms      | in 28.031 ms ± 15.051 ms       | in 18.813 ms ± 1.955 ms        |
| 2 B        | in 13.525 ms ± 8.666 ms      | null                       | in 19.914 ms ± 8.18 ms       | in 27.376 ms ± 14.625 ms       | in 18.25 ms ± 2.318 ms         |
| 4 B        | in 13.009 ms ± 8.404 ms      | null                       | in 16.002 ms ± 3.153 ms      | in 26.579 ms ± 14.532 ms       | in 17.251 ms ± 2.402 ms        |
| 8 B        | in 12.894 ms ± 5.213 ms      | null                       | in 15.561 ms ± 2.765 ms      | in 23.064 ms ± 11.008 ms       | in 16.988 ms ± 2.572 ms        |
| 16 B       | in 16.857 ms ± 11.737 ms     | null                       | in 14.993 ms ± 2.705 ms      | in 18.179 ms ± 3.493 ms        | in 16.843 ms ± 2.619 ms        |
| 32 B       | in 11.964 ms ± 4.202 ms      | null                       | in 15.127 ms ± 2.427 ms      | in 23.096 ms ± 6.622 ms        | in 16.717 ms ± 2.783 ms        |
| 64 B       | in 13.009 ms ± 7.682 ms      | null                       | in 28.438 ms ± 2.988 ms      | in 31.393 ms ± 5.4 ms          | in 32.044 ms ± 2.53 ms         |
| 128 B      | in 11.46 ms ± 4.844 ms       | null                       | in 16.535 ms ± 2.677 ms      | in 17.492 ms ± 3.86 ms         | in 17.374 ms ± 2.724 ms        |
| 256 B      | in 13.464 ms ± 4.382 ms      | null                       | in 16.805 ms ± 2.482 ms      | in 17.919 ms ± 3.421 ms        | in 17.838 ms ± 2.803 ms        |
| 512 B      | in 21.175 ms ± 7.315 ms      | null                       | in 38.554 ms ± 3.153 ms      | in 41.111 ms ± 6.302 ms        | in 39.897 ms ± 1.98 ms         |
| 1.024 kB   | in 12.617 ms ± 3.287 ms      | null                       | in 20.225 ms ± 2.809 ms      | in 21.848 ms ± 3.638 ms        | in 20.817 ms ± 2.424 ms        |
| 2.048 kB   | in 18.116 ms ± 5.442 ms      | null                       | in 24.01 ms ± 2.388 ms       | in 38.716 ms ± 3.991 ms        | in 26.335 ms ± 2.421 ms        |
| 4.096 kB   | in 19.619 ms ± 2.609 ms      | null                       | in 33.279 ms ± 2.264 ms      | in 48.078 ms ± 2.919 ms        | in 37.552 ms ± 2.509 ms        |
| 8.192 kB   | in 35.178 ms ± 6.136 ms      | null                       | in 53.091 ms ± 4.088 ms      | in 72.457 ms ± 5.014 ms        | in 60.461 ms ± 3.332 ms        |
| 16.384 kB  | in 55.05 ms ± 3.281 ms       | null                       | in 100.119 ms ± 3.129 ms     | in 126.152 ms ± 8.045 ms       | in 113.481 ms ± 4.483 ms       |
| 32.768 kB  | in 86.986 ms ± 2.624 ms      | null                       | in 173.792 ms ± 7.691 ms     | in 232.143 ms ± 9.797 ms       | in 219.157 ms ± 11.547 ms      |
| 65.536 kB  | in 178.456 ms ± 15.483 ms    | null                       | in 373.359 ms ± 13.599 ms    | in 437.089 ms ± 13.476 ms      | in 390.551 ms ± 4.672 ms       |
| 131.072 kB | in 343.126 ms ± 9.239 ms     | null                       | in 962.522 ms ± 247.018 ms   | in 1,206.786 ms ± 224.518 ms   | in 1,189.199 ms ± 217.615 ms   |
| 262.144 kB | in 1,328.881 ms ± 332.927 ms | null                       | in 2,111.006 ms ± 469.249 ms | in 2,553.746 ms ± 427.324 ms   | in 2,542.439 ms ± 462.707 ms   |
| 524.288 kB | in 1,726.67 ms ± 99.298 ms   | null                       | in 3,516.268 ms ± 258.987 ms | in 4,445.47 ms ± 298.077 ms    | in 4,118.448 ms ± 269.433 ms   |
| 1.049 MB   | in 3,321.079 ms ± 101.813 ms | null                       | in 6,541.645 ms ± 317.427 ms | in 8,496.647 ms ± 455.578 ms   | in 8,260.444 ms ± 648.49 ms    |