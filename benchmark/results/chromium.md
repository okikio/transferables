# Chromium

## structuredClone (browser)

|            | hasTransferables      | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | --------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.14 ms ± 0.102 ms | null                          | in 3.96 ms ± 1.481 ms      | in 5.58 ms ± 4.18 ms               | in 4.24 ms ± 2.486 ms              |
| 2 B        | in 0.08 ms ± 0.04 ms  | null                          | in 3.24 ms ± 0.709 ms      | in 3.66 ms ± 1.397 ms              | in 3.32 ms ± 0.571 ms              |
| 4 B        | in 0.1 ms ± 0.063 ms  | null                          | in 2.88 ms ± 0.349 ms      | in 2.94 ms ± 0.25 ms               | in 3.14 ms ± 0.136 ms              |
| 8 B        | in 0.12 ms ± 0.04 ms  | null                          | in 3.02 ms ± 0.655 ms      | in 3.64 ms ± 0.933 ms              | in 3.04 ms ± 0.196 ms              |
| 16 B       | in 0.12 ms ± 0.04 ms  | null                          | in 3.18 ms ± 0.852 ms      | in 3.02 ms ± 0.172 ms              | in 3.14 ms ± 0.301 ms              |
| 32 B       | in 0.06 ms ± 0.049 ms | null                          | in 2.74 ms ± 0.196 ms      | in 6.24 ms ± 6.386 ms              | in 3.84 ms ± 1.446 ms              |
| 64 B       | in 0.1 ms ± now       | null                          | in 2.9 ms ± 0.228 ms       | in 3.08 ms ± 0.133 ms              | in 3.8 ms ± 1.665 ms               |
| 128 B      | in 0.08 ms ± 0.075 ms | null                          | in 3.44 ms ± 1.285 ms      | in 3.8 ms ± 1.404 ms               | in 3.18 ms ± 0.075 ms              |
| 256 B      | in 0.08 ms ± 0.04 ms  | null                          | in 3.32 ms ± 0.376 ms      | in 4.06 ms ± 0.878 ms              | in 3.68 ms ± 0.04 ms               |
| 512 B      | in 0.08 ms ± 0.075 ms | null                          | in 3.94 ms ± 0.585 ms      | in 4.74 ms ± 0.102 ms              | in 4.86 ms ± 0.136 ms              |
| 1.024 kB   | in 0.12 ms ± 0.04 ms  | null                          | in 4.84 ms ± 0.12 ms       | in 6.84 ms ± 0.102 ms              | in 7.44 ms ± 0.589 ms              |
| 2.048 kB   | in 0.06 ms ± 0.049 ms | null                          | in 7.06 ms ± 0.136 ms      | in 11 ms ± 0.155 ms                | in 11.54 ms ± 0.162 ms             |
| 4.096 kB   | in 0.1 ms ± 0.063 ms  | null                          | in 11.9 ms ± 0.707 ms      | in 19.16 ms ± 0.265 ms             | in 20.14 ms ± 0.206 ms             |
| 8.192 kB   | in 0.08 ms ± 0.04 ms  | null                          | in 20.32 ms ± 0.133 ms     | in 35.88 ms ± 1.163 ms             | in 37.6 ms ± 0.39 ms               |
| 16.384 kB  | in 0.02 ms ± 0.04 ms  | null                          | in 39.04 ms ± 0.372 ms     | in 69.7 ms ± 0.21 ms               | in 74.96 ms ± 1.042 ms             |
| 32.768 kB  | in 0.04 ms ± 0.049 ms | null                          | in 82.92 ms ± 0.768 ms     | in 146.24 ms ± 1.728 ms            | in 151.86 ms ± 1.138 ms            |
| 65.536 kB  | in 0.12 ms ± 0.075 ms | null                          | in 168.48 ms ± 1.034 ms    | in 289.4 ms ± 0.66 ms              | in 311.12 ms ± 2.421 ms            |
| 131.072 kB | in 0.16 ms ± 0.08 ms  | null                          | in 366.7 ms ± 19.348 ms    | in 592.62 ms ± 21.215 ms           | in 620.46 ms ± 7.053 ms            |
| 262.144 kB | in 0.16 ms ± 0.08 ms  | null                          | in 773.5 ms ± 24.183 ms    | in 1,247.94 ms ± 21.36 ms          | in 1,307.48 ms ± 20.487 ms         |
| 524.288 kB | in 1.92 ms ± 3.59 ms  | null                          | in 1,491.6 ms ± 32.137 ms  | in 2,447.64 ms ± 31.388 ms         | in 2,618.6 ms ± 54.414 ms          |
| 1.049 MB   | in 0.12 ms ± 0.04 ms  | null                          | in 2,952.1 ms ± 58.891 ms  | in 4,874.12 ms ± 57.067 ms         | in 5,144.12 ms ± 50.761 ms         |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | --------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 27.3 ms ± 22.689 ms      | in 19.64 ms ± 13.253 ms     | in 20.8 ms ± 6.605 ms       | in 18.7 ms ± 7.459 ms          | in 59.9 ms ± 27.922 ms         |
| 2 B        | in 6.64 ms ± 3.487 ms       | in 15.5 ms ± 19.998 ms      | in 19.44 ms ± 19.541 ms     | in 30.38 ms ± 13.425 ms        | in 13.38 ms ± 4.166 ms         |
| 4 B        | in 8.4 ms ± 9.137 ms        | in 5.56 ms ± 1.808 ms       | in 14 ms ± 7.347 ms         | in 17.8 ms ± 20.555 ms         | in 10.14 ms ± 2.358 ms         |
| 8 B        | in 4.48 ms ± 1.532 ms       | in 4.14 ms ± 0.836 ms       | in 9.44 ms ± 1.883 ms       | in 7.7 ms ± 0.832 ms           | in 8.06 ms ± 0.472 ms          |
| 16 B       | in 4.28 ms ± 1.143 ms       | in 3.94 ms ± 0.615 ms       | in 13.72 ms ± 12.298 ms     | in 9.48 ms ± 3.404 ms          | in 8.14 ms ± 0.92 ms           |
| 32 B       | in 3.8 ms ± 0.369 ms        | in 14.14 ms ± 21.631 ms     | in 8.76 ms ± 2.957 ms       | in 7.86 ms ± 0.595 ms          | in 8.24 ms ± 1.159 ms          |
| 64 B       | in 4 ms ± 0.639 ms          | in 4.82 ms ± 2.553 ms       | in 7.48 ms ± 0.631 ms       | in 8.18 ms ± 0.768 ms          | in 11.18 ms ± 5.411 ms         |
| 128 B      | in 4.5 ms ± 0.888 ms        | in 4.68 ms ± 1.469 ms       | in 7.62 ms ± 0.553 ms       | in 8.34 ms ± 0.516 ms          | in 8.8 ms ± 0.846 ms           |
| 256 B      | in 7.08 ms ± 5.868 ms       | in 4.32 ms ± 0.611 ms       | in 8.4 ms ± 0.69 ms         | in 8.56 ms ± 0.585 ms          | in 16.68 ms ± 14.961 ms        |
| 512 B      | in 10.96 ms ± 11.633 ms     | in 5.08 ms ± 1.068 ms       | in 9.28 ms ± 0.382 ms       | in 10.64 ms ± 0.739 ms         | in 11.14 ms ± 0.546 ms         |
| 1.024 kB   | in 10.52 ms ± 9.256 ms      | in 7.94 ms ± 2.705 ms       | in 13.02 ms ± 3.096 ms      | in 13.68 ms ± 0.271 ms         | in 14.16 ms ± 0.512 ms         |
| 2.048 kB   | in 14.84 ms ± 8.671 ms      | in 8.74 ms ± 0.92 ms        | in 15.72 ms ± 0.264 ms      | in 20.1 ms ± 0.245 ms          | in 20.62 ms ± 0.397 ms         |
| 4.096 kB   | in 18.54 ms ± 4.964 ms      | in 13.98 ms ± 1.569 ms      | in 30.44 ms ± 0.887 ms      | in 39.48 ms ± 1.618 ms         | in 38.72 ms ± 2.612 ms         |
| 8.192 kB   | in 25.28 ms ± 2.836 ms      | in 23.7 ms ± 1.632 ms       | in 47.96 ms ± 0.973 ms      | in 71.02 ms ± 12.8 ms          | in 64.9 ms ± 2.105 ms          |
| 16.384 kB  | in 40.96 ms ± 0.622 ms      | in 43 ms ± 1.511 ms         | in 82.12 ms ± 0.611 ms      | in 112.4 ms ± 0.283 ms         | in 117.54 ms ± 0.524 ms        |
| 32.768 kB  | in 92.44 ms ± 8.989 ms      | in 90.88 ms ± 0.264 ms      | in 170.84 ms ± 0.902 ms     | in 231.34 ms ± 1.011 ms        | in 243.5 ms ± 5.186 ms         |
| 65.536 kB  | in 169.78 ms ± 0.523 ms     | in 183.56 ms ± 8.902 ms     | in 340.76 ms ± 2.134 ms     | in 461.92 ms ± 1.468 ms        | in 480.94 ms ± 1.503 ms        |
| 131.072 kB | in 382.2 ms ± 34.307 ms     | in 382.22 ms ± 27.799 ms    | in 733.12 ms ± 39.65 ms     | in 970.94 ms ± 26.067 ms       | in 1,019.94 ms ± 28.431 ms     |
| 262.144 kB | in 778.48 ms ± 55.102 ms    | in 806.26 ms ± 29.86 ms     | in 1,537.66 ms ± 32.123 ms  | in 2,037.34 ms ± 81.236 ms     | in 2,150.44 ms ± 73.439 ms     |
| 524.288 kB | in 1,516.88 ms ± 74.974 ms  | in 1,616.54 ms ± 126.906 ms | in 3,078.14 ms ± 159.481 ms | in 3,999.54 ms ± 97.263 ms     | in 4,220.06 ms ± 118.058 ms    |
| 1.049 MB   | in 3,067.86 ms ± 184.311 ms | in 3,154.16 ms ± 145.437 ms | in 6,185.56 ms ± 285.939 ms | in 8,049.12 ms ± 176.016 ms    | in 8,437.1 ms ± 262.061 ms     |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 92.82 ms ± 53.703 ms    | in 5.22 ms ± 0.519 ms      | in 7.2 ms ± 1.41 ms        | in 20.72 ms ± 8.379 ms         | in 12.02 ms ± 3.504 ms         |
| 2 B        | in 44.86 ms ± 25.409 ms    | in 5.36 ms ± 3.002 ms      | in 5.84 ms ± 0.524 ms      | in 21.34 ms ± 15.125 ms        | in 10.82 ms ± 3.36 ms          |
| 4 B        | in 47.48 ms ± 28.651 ms    | in 5.14 ms ± 2.514 ms      | in 5.12 ms ± 0.172 ms      | in 9.76 ms ± 7.301 ms          | in 9.62 ms ± 2.878 ms          |
| 8 B        | in 41.42 ms ± 22.055 ms    | in 3.22 ms ± 0.471 ms      | in 6.32 ms ± 1.958 ms      | in 11.64 ms ± 5.746 ms         | in 18.06 ms ± 14.204 ms        |
| 16 B       | in 52.74 ms ± 40.189 ms    | in 3.88 ms ± 0.646 ms      | in 7.08 ms ± 0.92 ms       | in 9.76 ms ± 3.234 ms          | in 9.86 ms ± 2.85 ms           |
| 32 B       | in 23.54 ms ± 22.485 ms    | in 3.62 ms ± 0.293 ms      | in 6.68 ms ± 1.379 ms      | in 7.88 ms ± 1.238 ms          | in 10.7 ms ± 4.813 ms          |
| 64 B       | in 11.76 ms ± 8.352 ms     | in 5.54 ms ± 0.739 ms      | in 6.1 ms ± 0.986 ms       | in 11.22 ms ± 2.099 ms         | in 8.06 ms ± 1.461 ms          |
| 128 B      | in 13.02 ms ± 11.077 ms    | in 3.34 ms ± 0.422 ms      | in 8.1 ms ± 0.363 ms       | in 8.66 ms ± 1.331 ms          | in 7.44 ms ± 1.164 ms          |
| 256 B      | in 26.82 ms ± 16.001 ms    | in 4.12 ms ± 0.312 ms      | in 6.86 ms ± 0.294 ms      | in 8.26 ms ± 1.606 ms          | in 8.06 ms ± 0.944 ms          |
| 512 B      | in 19.74 ms ± 9.393 ms     | in 5.08 ms ± 0.618 ms      | in 8.04 ms ± 0.582 ms      | in 8.42 ms ± 0.519 ms          | in 9.08 ms ± 0.783 ms          |
| 1.024 kB   | in 18.34 ms ± 5.904 ms     | in 6.42 ms ± 0.671 ms      | in 10.46 ms ± 0.656 ms     | in 11.66 ms ± 0.774 ms         | in 12.16 ms ± 0.307 ms         |
| 2.048 kB   | in 13.26 ms ± 2.967 ms     | in 8.5 ms ± 0.39 ms        | in 14.26 ms ± 0.265 ms     | in 17.34 ms ± 0.717 ms         | in 19.3 ms ± 2.416 ms          |
| 4.096 kB   | in 24.26 ms ± 10.549 ms    | in 13.36 ms ± 0.618 ms     | in 24.1 ms ± 1.345 ms      | in 29.12 ms ± 0.366 ms         | in 31.04 ms ± 0.786 ms         |
| 8.192 kB   | in 26 ms ± 3.08 ms         | in 22.48 ms ± 1.03 ms      | in 42.34 ms ± 0.508 ms     | in 54.08 ms ± 0.719 ms         | in 56.5 ms ± 0.642 ms          |
| 16.384 kB  | in 41.72 ms ± 0.387 ms     | in 42.96 ms ± 0.546 ms     | in 81.86 ms ± 0.791 ms     | in 113.04 ms ± 8.689 ms        | in 116.14 ms ± 10.502 ms       |
| 32.768 kB  | in 87.08 ms ± 0.902 ms     | in 90.6 ms ± 0.642 ms      | in 218.1 ms ± 25.271 ms    | in 214.52 ms ± 0.991 ms        | in 233.46 ms ± 10.589 ms       |
| 65.536 kB  | in 173.4 ms ± 1.313 ms     | in 221.3 ms ± 19.018 ms    | in 350.14 ms ± 1.925 ms    | in 445.04 ms ± 10.509 ms       | in 475.62 ms ± 6.87 ms         |
| 131.072 kB | in 367 ms ± 10.96 ms       | in 377.36 ms ± 8.606 ms    | in 707.98 ms ± 21.266 ms   | in 899.22 ms ± 19.224 ms       | in 948.24 ms ± 19.718 ms       |
| 262.144 kB | in 731.78 ms ± 29.002 ms   | in 757.16 ms ± 15.738 ms   | in 1,510.98 ms ± 27.566 ms | in 1,867.52 ms ± 36.512 ms     | in 1,963.34 ms ± 43.667 ms     |
| 524.288 kB | in 1,453.76 ms ± 38.889 ms | in 1,530.4 ms ± 42.43 ms   | in 2,972.46 ms ± 52.841 ms | in 3,700.82 ms ± 60.92 ms      | in 3,858.54 ms ± 57.57 ms      |
| 1.049 MB   | in 2,901.38 ms ± 49.428 ms | in 3,028.8 ms ± 46.14 ms   | in 6,275.5 ms ± 241.426 ms | in 7,590.24 ms ± 277.8 ms      | in 7,962.96 ms ± 273.954 ms    |