# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.34 ms ± 0.301 ms   | null                          | in 6.38 ms ± 5.609 ms      | in 3.8 ms ± 1.471 ms               | in 3.38 ms ± 0.466 ms              |
| 2 B        | in 0.12 ms ± 0.075 ms   | null                          | in 2.96 ms ± 0.383 ms      | in 3.54 ms ± 0.665 ms              | in 3.22 ms ± 0.412 ms              |
| 4 B        | in 0.1 ms ± 0.063 ms    | null                          | in 2.8 ms ± 0.245 ms       | in 3.08 ms ± 0.319 ms              | in 3.26 ms ± 0.185 ms              |
| 8 B        | in 0.06 ms ± 0.08 ms    | null                          | in 3.02 ms ± 0.483 ms      | in 3.68 ms ± 1.172 ms              | in 3.08 ms ± 0.232 ms              |
| 16 B       | in 0.12 ms ± 0.04 ms    | null                          | in 3.38 ms ± 0.798 ms      | in 3.14 ms ± 0.206 ms              | in 3.5 ms ± 0.566 ms               |
| 32 B       | in 0.08 ms ± 0.04 ms    | null                          | in 3.18 ms ± 0.588 ms      | in 3.52 ms ± 0.655 ms              | in 3.68 ms ± 0.898 ms              |
| 64 B       | in 0.1 ms ± now         | null                          | in 5.2 ms ± 3.917 ms       | in 3.38 ms ± 0.223 ms              | in 4.06 ms ± 2.075 ms              |
| 128 B      | in 0.14 ms ± 0.08 ms    | null                          | in 3 ms ± 0.21 ms          | in 3.64 ms ± 0.634 ms              | in 3.44 ms ± 0.12 ms               |
| 256 B      | in 0.1 ms ± 0.063 ms    | null                          | in 3.38 ms ± 0.286 ms      | in 4.02 ms ± 0.299 ms              | in 3.94 ms ± 0.265 ms              |
| 512 B      | in 0.1 ms ± 0.089 ms    | null                          | in 3.74 ms ± 0.08 ms       | in 12.02 ms ± 3.599 ms             | in 4.98 ms ± 0.264 ms              |
| 1.024 kB   | in 0.12 ms ± 0.098 ms   | null                          | in 5.6 ms ± 0.98 ms        | in 8.08 ms ± 0.857 ms              | in 6.94 ms ± 0.136 ms              |
| 2.048 kB   | in 0.14 ms ± 0.102 ms   | null                          | in 7.06 ms ± 0.136 ms      | in 12.1 ms ± 0.228 ms              | in 11.28 ms ± 0.147 ms             |
| 4.096 kB   | in 0.18 ms ± 0.117 ms   | null                          | in 11.74 ms ± 0.422 ms     | in 22.94 ms ± 0.242 ms             | in 19.86 ms ± 0.326 ms             |
| 8.192 kB   | in 0.12 ms ± 0.04 ms    | null                          | in 20.66 ms ± 0.206 ms     | in 40.24 ms ± 0.242 ms             | in 36.94 ms ± 0.307 ms             |
| 16.384 kB  | in 0.24 ms ± 0.049 ms   | null                          | in 40.62 ms ± 2.096 ms     | in 82.22 ms ± 2.298 ms             | in 73.14 ms ± 0.504 ms             |
| 32.768 kB  | in 0.4 ms ± now         | null                          | in 85.28 ms ± 0.893 ms     | in 165.84 ms ± 2.197 ms            | in 151 ms ± 2.924 ms               |
| 65.536 kB  | in 0.84 ms ± 0.049 ms   | null                          | in 178.94 ms ± 17.925 ms   | in 329.94 ms ± 1.067 ms            | in 310.58 ms ± 17.13 ms            |
| 131.072 kB | in 3.14 ms ± 2.244 ms   | null                          | in 362.24 ms ± 20.003 ms   | in 664.16 ms ± 1.903 ms            | in 614.24 ms ± 8.45 ms             |
| 262.144 kB | in 4.14 ms ± 0.136 ms   | null                          | in 802.1 ms ± 34.058 ms    | in 1,428.52 ms ± 56.554 ms         | in 1,283.58 ms ± 27.435 ms         |
| 524.288 kB | in 7.72 ms ± 1.916 ms   | null                          | in 1,513.2 ms ± 15.694 ms  | in 2,800.08 ms ± 48.423 ms         | in 2,604.52 ms ± 43.578 ms         |
| 1.049 MB   | in 27.56 ms ± 17.258 ms | null                          | in 2,937.24 ms ± 31.013 ms | in 5,543.74 ms ± 20.637 ms         | in 5,128.1 ms ± 49.879 ms          |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19.78 ms ± 17.38 ms     | in 5.42 ms ± 2.02 ms       | in 10.8 ms ± 3.965 ms       | in 37.26 ms ± 37.329 ms        | in 33.38 ms ± 23.993 ms        |
| 2 B        | in 5.92 ms ± 2.661 ms      | in 3.6 ms ± 0.303 ms       | in 10.96 ms ± 3.113 ms      | in 12.38 ms ± 4.753 ms         | in 12.32 ms ± 5.777 ms         |
| 4 B        | in 6.26 ms ± 5.083 ms      | in 5.08 ms ± 2.945 ms      | in 7.92 ms ± 0.527 ms       | in 8.78 ms ± 0.974 ms          | in 8.44 ms ± 1.578 ms          |
| 8 B        | in 3.46 ms ± 0.28 ms       | in 5.08 ms ± 3.071 ms      | in 8.42 ms ± 1.969 ms       | in 7.98 ms ± 1.089 ms          | in 7.42 ms ± 0.479 ms          |
| 16 B       | in 3.82 ms ± 0.387 ms      | in 3.78 ms ± 0.337 ms      | in 8.5 ms ± 0.885 ms        | in 12.24 ms ± 5.862 ms         | in 7.64 ms ± 0.561 ms          |
| 32 B       | in 3.94 ms ± 0.671 ms      | in 3.74 ms ± 0.307 ms      | in 7.78 ms ± 0.744 ms       | in 8.46 ms ± 1.977 ms          | in 8.72 ms ± 2.596 ms          |
| 64 B       | in 3.78 ms ± 0.813 ms      | in 3.94 ms ± 0.589 ms      | in 7.76 ms ± 0.755 ms       | in 8.56 ms ± 1.802 ms          | in 7.6 ms ± 0.089 ms           |
| 128 B      | in 3.56 ms ± 0.215 ms      | in 4.14 ms ± 0.422 ms      | in 7.82 ms ± 0.449 ms       | in 8.34 ms ± 0.595 ms          | in 7.98 ms ± 0.271 ms          |
| 256 B      | in 3.92 ms ± 0.337 ms      | in 4.14 ms ± 0.28 ms       | in 8.22 ms ± 0.256 ms       | in 9.18 ms ± 0.546 ms          | in 8.7 ms ± 0.385 ms           |
| 512 B      | in 4.46 ms ± 0.136 ms      | in 4.94 ms ± 0.361 ms      | in 9.26 ms ± 0.753 ms       | in 11.32 ms ± 0.786 ms         | in 10.7 ms ± 0.179 ms          |
| 1.024 kB   | in 5.62 ms ± 0.306 ms      | in 6.74 ms ± 2.132 ms      | in 13.82 ms ± 3.475 ms      | in 14.86 ms ± 0.628 ms         | in 14.12 ms ± 0.542 ms         |
| 2.048 kB   | in 9.42 ms ± 2.853 ms      | in 8.22 ms ± 0.194 ms      | in 15.86 ms ± 0.185 ms      | in 26.72 ms ± 2.657 ms         | in 20.72 ms ± 0.431 ms         |
| 4.096 kB   | in 19.06 ms ± 2.593 ms     | in 18.26 ms ± 1.842 ms     | in 31.94 ms ± 1.153 ms      | in 36.02 ms ± 0.793 ms         | in 38.68 ms ± 7.467 ms         |
| 8.192 kB   | in 27.38 ms ± 0.835 ms     | in 28.84 ms ± 1.407 ms     | in 50.4 ms ± 0.707 ms       | in 65.62 ms ± 0.676 ms         | in 63.04 ms ± 4.122 ms         |
| 16.384 kB  | in 41.36 ms ± 0.233 ms     | in 42.72 ms ± 0.637 ms     | in 83.78 ms ± 0.744 ms      | in 125.1 ms ± 0.482 ms         | in 118.7 ms ± 0.957 ms         |
| 32.768 kB  | in 87.18 ms ± 0.534 ms     | in 88.96 ms ± 0.864 ms     | in 169.9 ms ± 1.166 ms      | in 255.84 ms ± 1.65 ms         | in 238.7 ms ± 4.669 ms         |
| 65.536 kB  | in 171.22 ms ± 0.728 ms    | in 179.44 ms ± 0.891 ms    | in 342.54 ms ± 1.056 ms     | in 505.66 ms ± 2.22 ms         | in 476.36 ms ± 0.84 ms         |
| 131.072 kB | in 369.36 ms ± 7.744 ms    | in 369.58 ms ± 12.424 ms   | in 709.54 ms ± 10.177 ms    | in 1,088.7 ms ± 33.579 ms      | in 1,041.54 ms ± 29.319 ms     |
| 262.144 kB | in 801.24 ms ± 57.631 ms   | in 836.88 ms ± 41.686 ms   | in 1,558.9 ms ± 38.317 ms   | in 2,276.58 ms ± 114.271 ms    | in 2,171.26 ms ± 85.417 ms     |
| 524.288 kB | in 1,535.64 ms ± 74.441 ms | in 1,627.12 ms ± 41.067 ms | in 3,050.74 ms ± 103.969 ms | in 4,396.92 ms ± 113.157 ms    | in 4,287.06 ms ± 156.012 ms    |
| 1.049 MB   | in 2,990.64 ms ± 93.186 ms | in 3,080.42 ms ± 66.224 ms | in 6,003.86 ms ± 122.872 ms | in 8,653.22 ms ± 120.223 ms    | in 8,426.98 ms ± 184.881 ms    |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 118.06 ms ± 65.205 ms   | in 5.52 ms ± 0.578 ms      | in 6.7 ms ± 0.576 ms        | in 18.52 ms ± 5.438 ms         | in 21.7 ms ± 9.891 ms          |
| 2 B        | in 52.58 ms ± 26.985 ms    | in 5.64 ms ± 1.305 ms      | in 6.8 ms ± 1.131 ms        | in 17.86 ms ± 9.906 ms         | in 15.12 ms ± 7.871 ms         |
| 4 B        | in 60.3 ms ± 34.211 ms     | in 4.84 ms ± 1.524 ms      | in 5.48 ms ± 0.343 ms       | in 23.46 ms ± 8.935 ms         | in 12.28 ms ± 7.617 ms         |
| 8 B        | in 32.02 ms ± 24.571 ms    | in 3.86 ms ± 0.508 ms      | in 6.86 ms ± 2.523 ms       | in 17.58 ms ± 14.057 ms        | in 15.92 ms ± 11.279 ms        |
| 16 B       | in 29.26 ms ± 28.284 ms    | in 3.94 ms ± 0.454 ms      | in 7.26 ms ± 0.92 ms        | in 9.94 ms ± 1.489 ms          | in 7.82 ms ± 2.096 ms          |
| 32 B       | in 22.4 ms ± 32.678 ms     | in 4.2 ms ± 0.713 ms       | in 6.98 ms ± 1.402 ms       | in 13.04 ms ± 5.234 ms         | in 12.02 ms ± 1.333 ms         |
| 64 B       | in 16.76 ms ± 8.098 ms     | in 6.36 ms ± 0.602 ms      | in 5.92 ms ± 0.337 ms       | in 9.34 ms ± 1.644 ms          | in 10.16 ms ± 4.147 ms         |
| 128 B      | in 11.68 ms ± 8.061 ms     | in 4.2 ms ± 0.39 ms        | in 8.86 ms ± 1.177 ms       | in 11.26 ms ± 6.756 ms         | in 8 ms ± 1.006 ms             |
| 256 B      | in 37.72 ms ± 22.936 ms    | in 4.9 ms ± 0.522 ms       | in 7.14 ms ± 0.488 ms       | in 10.14 ms ± 3.418 ms         | in 7.7 ms ± 0.297 ms           |
| 512 B      | in 12.82 ms ± 5.413 ms     | in 5.46 ms ± 0.734 ms      | in 8.72 ms ± 0.515 ms       | in 9.04 ms ± 0.326 ms          | in 9.36 ms ± 0.575 ms          |
| 1.024 kB   | in 15.82 ms ± 9.491 ms     | in 8.08 ms ± 1.454 ms      | in 10.5 ms ± 0.54 ms        | in 12.8 ms ± 1.01 ms           | in 12.12 ms ± 0.549 ms         |
| 2.048 kB   | in 14.38 ms ± 5.134 ms     | in 10.98 ms ± 6.366 ms     | in 15.1 ms ± 0.899 ms       | in 19.12 ms ± 0.605 ms         | in 19.58 ms ± 2.57 ms          |
| 4.096 kB   | in 29.2 ms ± 14.257 ms     | in 12.9 ms ± 0.623 ms      | in 24.44 ms ± 0.831 ms      | in 32.68 ms ± 0.875 ms         | in 31.64 ms ± 2.156 ms         |
| 8.192 kB   | in 26.34 ms ± 3.896 ms     | in 22.28 ms ± 0.349 ms     | in 43.52 ms ± 1.212 ms      | in 63.1 ms ± 1.421 ms          | in 57.84 ms ± 1.347 ms         |
| 16.384 kB  | in 43.72 ms ± 1.345 ms     | in 42.66 ms ± 0.361 ms     | in 82.96 ms ± 1.155 ms      | in 122.64 ms ± 4.146 ms        | in 109.02 ms ± 4.024 ms        |
| 32.768 kB  | in 88.42 ms ± 1.017 ms     | in 91.24 ms ± 0.864 ms     | in 208.44 ms ± 4.726 ms     | in 242.44 ms ± 4.806 ms        | in 220.4 ms ± 2.419 ms         |
| 65.536 kB  | in 176.2 ms ± 1.404 ms     | in 223.28 ms ± 21.403 ms   | in 354.94 ms ± 2.181 ms     | in 496.96 ms ± 4.989 ms        | in 463.1 ms ± 24.02 ms         |
| 131.072 kB | in 373.82 ms ± 10.63 ms    | in 375.38 ms ± 12.419 ms   | in 711.56 ms ± 14.974 ms    | in 1,008.54 ms ± 31.424 ms     | in 941.52 ms ± 60.124 ms       |
| 262.144 kB | in 727.26 ms ± 12.49 ms    | in 778.24 ms ± 38.198 ms   | in 1,531.82 ms ± 37.206 ms  | in 2,056.94 ms ± 59.032 ms     | in 1,970.02 ms ± 64.125 ms     |
| 524.288 kB | in 1,477.92 ms ± 37.885 ms | in 1,510.06 ms ± 21.381 ms | in 3,016.54 ms ± 74.402 ms  | in 4,083.46 ms ± 99.072 ms     | in 3,826.8 ms ± 64.632 ms      |
| 1.049 MB   | in 2,959.18 ms ± 24.514 ms | in 3,087.86 ms ± 50.205 ms | in 6,338.32 ms ± 295.031 ms | in 8,373.08 ms ± 262.737 ms    | in 7,890.02 ms ± 257.038 ms    |