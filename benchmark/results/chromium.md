# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.117 ms   | null                          | in 6.62 ms ± 6.847 ms      | in 3.46 ms ± 0.233 ms              | in 3.4 ms ± 0.228 ms               |
| 2 B        | in 0.08 ms ± 0.04 ms    | null                          | in 3.14 ms ± 0.287 ms      | in 3.68 ms ± 0.519 ms              | in 3.52 ms ± 0.417 ms              |
| 4 B        | in 0.1 ms ± 0.063 ms    | null                          | in 3.16 ms ± 0.15 ms       | in 3.44 ms ± 0.174 ms              | in 3.38 ms ± 0.248 ms              |
| 8 B        | in 0.14 ms ± 0.049 ms   | null                          | in 3.02 ms ± 0.183 ms      | in 3.86 ms ± 1.056 ms              | in 3.3 ms ± 0.261 ms               |
| 16 B       | in 0.14 ms ± 0.08 ms    | null                          | in 2.98 ms ± 0.117 ms      | in 3.66 ms ± 0.372 ms              | in 3.74 ms ± 0.287 ms              |
| 32 B       | in 0.08 ms ± 0.04 ms    | null                          | in 3.16 ms ± 0.102 ms      | in 3.64 ms ± 0.344 ms              | in 3.58 ms ± 0.271 ms              |
| 64 B       | in 0.06 ms ± 0.049 ms   | null                          | in 3.34 ms ± 0.206 ms      | in 4.36 ms ± 0.907 ms              | in 5.46 ms ± 1.898 ms              |
| 128 B      | in 0.16 ms ± 0.136 ms   | null                          | in 3.74 ms ± 0.546 ms      | in 4.1 ms ± 0.482 ms               | in 3.86 ms ± 0.12 ms               |
| 256 B      | in 0.1 ms ± 0.11 ms     | null                          | in 3.56 ms ± 0.12 ms       | in 4.46 ms ± 0.102 ms              | in 5 ms ± 1.018 ms                 |
| 512 B      | in 0.08 ms ± 0.075 ms   | null                          | in 4.4 ms ± 0.316 ms       | in 13.34 ms ± 3.926 ms             | in 5.72 ms ± 0.299 ms              |
| 1.024 kB   | in 0.14 ms ± 0.136 ms   | null                          | in 5.76 ms ± 0.578 ms      | in 9.06 ms ± 0.774 ms              | in 8.44 ms ± 0.48 ms               |
| 2.048 kB   | in 0.4 ms ± 0.551 ms    | null                          | in 8.18 ms ± 0.214 ms      | in 14.52 ms ± 0.24 ms              | in 13.86 ms ± 1.025 ms             |
| 4.096 kB   | in 0.2 ms ± 0.155 ms    | null                          | in 13.6 ms ± 0.469 ms      | in 36.46 ms ± 18.685 ms            | in 24.48 ms ± 1.854 ms             |
| 8.192 kB   | in 0.14 ms ± 0.049 ms   | null                          | in 24.14 ms ± 0.383 ms     | in 47.46 ms ± 0.774 ms             | in 43.74 ms ± 0.836 ms             |
| 16.384 kB  | in 0.24 ms ± 0.049 ms   | null                          | in 46.06 ms ± 0.736 ms     | in 94.46 ms ± 1.477 ms             | in 87.7 ms ± 3.069 ms              |
| 32.768 kB  | in 0.64 ms ± 0.531 ms   | null                          | in 105.22 ms ± 13.692 ms   | in 193.56 ms ± 1.213 ms            | in 176.98 ms ± 2.946 ms            |
| 65.536 kB  | in 0.96 ms ± 0.102 ms   | null                          | in 197.2 ms ± 2.26 ms      | in 394.68 ms ± 7.927 ms            | in 394.88 ms ± 42.577 ms           |
| 131.072 kB | in 2.18 ms ± 0.117 ms   | null                          | in 415.38 ms ± 27.081 ms   | in 788.54 ms ± 9.289 ms            | in 717.62 ms ± 15.44 ms            |
| 262.144 kB | in 4.72 ms ± 0.331 ms   | null                          | in 870.82 ms ± 22.149 ms   | in 1,678.38 ms ± 28.091 ms         | in 1,533.56 ms ± 30.229 ms         |
| 524.288 kB | in 8.62 ms ± 2.197 ms   | null                          | in 1,717.16 ms ± 42.752 ms | in 3,283.8 ms ± 33.975 ms          | in 3,023.74 ms ± 48.209 ms         |
| 1.049 MB   | in 22.16 ms ± 14.174 ms | null                          | in 3,419.06 ms ± 16.864 ms | in 6,524.6 ms ± 102.879 ms         | in 6,031.94 ms ± 52.897 ms         |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 12.84 ms ± 2.38 ms      | in 6.18 ms ± 3.316 ms       | in 12.04 ms ± 3.16 ms       | in 16.64 ms ± 6.328 ms         | in 27.8 ms ± 23.003 ms         |
| 2 B        | in 10.44 ms ± 5.127 ms     | in 7.92 ms ± 4.675 ms       | in 11.58 ms ± 3.947 ms      | in 10.74 ms ± 2.298 ms         | in 13.1 ms ± 5.282 ms          |
| 4 B        | in 6.16 ms ± 1.56 ms       | in 7.08 ms ± 4.854 ms       | in 8.14 ms ± 0.408 ms       | in 8.58 ms ± 0.511 ms          | in 8.84 ms ± 0.811 ms          |
| 8 B        | in 9.24 ms ± 9.457 ms      | in 5.56 ms ± 2.354 ms       | in 8.1 ms ± 0.559 ms        | in 8.32 ms ± 0.504 ms          | in 8.26 ms ± 0.674 ms          |
| 16 B       | in 12.52 ms ± 14.477 ms    | in 4.46 ms ± 0.546 ms       | in 8.72 ms ± 0.725 ms       | in 9.58 ms ± 2.164 ms          | in 8.42 ms ± 0.496 ms          |
| 32 B       | in 8.14 ms ± 7.041 ms      | in 4.28 ms ± 0.564 ms       | in 8.58 ms ± 0.697 ms       | in 8.54 ms ± 0.913 ms          | in 8.32 ms ± 0.232 ms          |
| 64 B       | in 8.28 ms ± 8.417 ms      | in 5.26 ms ± 1.404 ms       | in 8.64 ms ± 0.848 ms       | in 10.28 ms ± 2.821 ms         | in 9.06 ms ± 0.75 ms           |
| 128 B      | in 8.1 ms ± 6.457 ms       | in 4.7 ms ± 0.283 ms        | in 8.7 ms ± 0.46 ms         | in 9.02 ms ± 0.232 ms          | in 9.26 ms ± 0.287 ms          |
| 256 B      | in 8.24 ms ± 6.984 ms      | in 4.86 ms ± 0.383 ms       | in 9.5 ms ± 0.666 ms        | in 10.16 ms ± 0.582 ms         | in 10.28 ms ± 0.232 ms         |
| 512 B      | in 5.28 ms ± 0.172 ms      | in 5.76 ms ± 0.215 ms       | in 10.44 ms ± 0.484 ms      | in 12.22 ms ± 0.492 ms         | in 12.26 ms ± 0.356 ms         |
| 1.024 kB   | in 7.26 ms ± 0.755 ms      | in 7.96 ms ± 1.887 ms       | in 15.36 ms ± 3.733 ms      | in 16.62 ms ± 0.571 ms         | in 16.88 ms ± 0.611 ms         |
| 2.048 kB   | in 11.56 ms ± 3.085 ms     | in 9.78 ms ± 0.426 ms       | in 18.42 ms ± 0.279 ms      | in 31.74 ms ± 0.488 ms         | in 24.1 ms ± 0.559 ms          |
| 4.096 kB   | in 21.82 ms ± 2.709 ms     | in 20 ms ± 0.518 ms         | in 37.14 ms ± 1.542 ms      | in 42.44 ms ± 1.071 ms         | in 39.92 ms ± 0.808 ms         |
| 8.192 kB   | in 32.22 ms ± 1.618 ms     | in 32.66 ms ± 1.702 ms      | in 57.34 ms ± 0.488 ms      | in 76.42 ms ± 1.415 ms         | in 70.6 ms ± 0.772 ms          |
| 16.384 kB  | in 48.9 ms ± 0.374 ms      | in 49.9 ms ± 0.322 ms       | in 97.52 ms ± 0.768 ms      | in 144.78 ms ± 1.375 ms        | in 138.76 ms ± 1.481 ms        |
| 32.768 kB  | in 102.1 ms ± 1.066 ms     | in 103.5 ms ± 2.056 ms      | in 200.36 ms ± 3.244 ms     | in 298.14 ms ± 3.424 ms        | in 278.52 ms ± 11.985 ms       |
| 65.536 kB  | in 201.72 ms ± 2.651 ms    | in 208.82 ms ± 3.425 ms     | in 402.14 ms ± 5.025 ms     | in 590.06 ms ± 5.232 ms        | in 556.14 ms ± 2.966 ms        |
| 131.072 kB | in 429.92 ms ± 8.264 ms    | in 437.08 ms ± 14.576 ms    | in 873.44 ms ± 33.589 ms    | in 1,263.12 ms ± 55.541 ms     | in 1,223.2 ms ± 43.317 ms      |
| 262.144 kB | in 914.68 ms ± 52.429 ms   | in 948.74 ms ± 33.414 ms    | in 1,759.94 ms ± 71.206 ms  | in 2,639.34 ms ± 117.32 ms     | in 2,453.92 ms ± 95.295 ms     |
| 524.288 kB | in 1,774.92 ms ± 70.596 ms | in 1,853.78 ms ± 66.108 ms  | in 3,597.38 ms ± 168.067 ms | in 5,111.06 ms ± 238.441 ms    | in 4,911.52 ms ± 137.871 ms    |
| 1.049 MB   | in 3,436.88 ms ± 70.922 ms | in 3,580.42 ms ± 101.252 ms | in 6,933.9 ms ± 182.732 ms  | in 9,978.3 ms ± 122.482 ms     | in 9,630.98 ms ± 168.546 ms    |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 137.26 ms ± 72.806 ms   | in 5.9 ms ± 1.092 ms       | in 8.06 ms ± 0.983 ms       | in 30.64 ms ± 14.451 ms        | in 17.32 ms ± 10.118 ms        |
| 2 B        | in 67.96 ms ± 33.612 ms    | in 5 ms ± 1.06 ms          | in 6.86 ms ± 1.405 ms       | in 18.3 ms ± 9.651 ms          | in 13.1 ms ± 5.133 ms          |
| 4 B        | in 55.4 ms ± 30.94 ms      | in 4.9 ms ± 0.972 ms       | in 6.52 ms ± 0.889 ms       | in 14.72 ms ± 9.438 ms         | in 15.66 ms ± 11.295 ms        |
| 8 B        | in 35.76 ms ± 27.58 ms     | in 4.5 ms ± 0.51 ms        | in 7.96 ms ± 1.211 ms       | in 8.58 ms ± 1.552 ms          | in 19.98 ms ± 16.678 ms        |
| 16 B       | in 18.26 ms ± 22.334 ms    | in 4.42 ms ± 0.479 ms      | in 9.3 ms ± 1.733 ms        | in 9.74 ms ± 4.635 ms          | in 8.6 ms ± 1.322 ms           |
| 32 B       | in 29.26 ms ± 35.241 ms    | in 4.82 ms ± 1.474 ms      | in 6.76 ms ± 0.875 ms       | in 11.88 ms ± 3.446 ms         | in 12.22 ms ± 4.855 ms         |
| 64 B       | in 22.3 ms ± 13.391 ms     | in 6.14 ms ± 2.02 ms       | in 6.96 ms ± 0.668 ms       | in 11.14 ms ± 2.158 ms         | in 10.06 ms ± 1.826 ms         |
| 128 B      | in 18 ms ± 10.776 ms       | in 4.76 ms ± 0.403 ms      | in 10.32 ms ± 1.79 ms       | in 9 ms ± 1.719 ms             | in 9.46 ms ± 2.042 ms          |
| 256 B      | in 13.88 ms ± 8.023 ms     | in 5.82 ms ± 1.457 ms      | in 8.46 ms ± 0.546 ms       | in 9.12 ms ± 0.755 ms          | in 9.18 ms ± 0.958 ms          |
| 512 B      | in 19.26 ms ± 13.778 ms    | in 5.66 ms ± 0.546 ms      | in 10.9 ms ± 1.284 ms       | in 11.72 ms ± 0.73 ms          | in 11.84 ms ± 0.791 ms         |
| 1.024 kB   | in 13.88 ms ± 7.571 ms     | in 7.94 ms ± 0.873 ms      | in 12.92 ms ± 1.289 ms      | in 14.96 ms ± 0.72 ms          | in 13.82 ms ± 0.387 ms         |
| 2.048 kB   | in 23.56 ms ± 13.746 ms    | in 9.32 ms ± 0.412 ms      | in 21.9 ms ± 9.187 ms       | in 23.46 ms ± 0.799 ms         | in 22.78 ms ± 2.889 ms         |
| 4.096 kB   | in 26.42 ms ± 9.608 ms     | in 15.5 ms ± 0.669 ms      | in 28.76 ms ± 0.911 ms      | in 40.54 ms ± 1.306 ms         | in 36.74 ms ± 1.457 ms         |
| 8.192 kB   | in 37.88 ms ± 9.028 ms     | in 26.64 ms ± 0.383 ms     | in 52.7 ms ± 0.11 ms        | in 77.42 ms ± 1.685 ms         | in 68.36 ms ± 0.697 ms         |
| 16.384 kB  | in 59.08 ms ± 12.509 ms    | in 51.92 ms ± 0.866 ms     | in 100.34 ms ± 3.19 ms      | in 140.24 ms ± 2.391 ms        | in 126.8 ms ± 3.019 ms         |
| 32.768 kB  | in 107.2 ms ± 6.643 ms     | in 108.08 ms ± 1.741 ms    | in 243.4 ms ± 22.699 ms     | in 281.16 ms ± 3.275 ms        | in 263.16 ms ± 1.9 ms          |
| 65.536 kB  | in 210.12 ms ± 6.409 ms    | in 261.18 ms ± 22.624 ms   | in 419.56 ms ± 4.683 ms     | in 570.94 ms ± 13.287 ms       | in 529.14 ms ± 17.68 ms        |
| 131.072 kB | in 433 ms ± 4.43 ms        | in 456.52 ms ± 20.402 ms   | in 842.92 ms ± 16.019 ms    | in 1,170.24 ms ± 30.645 ms     | in 1,105.74 ms ± 50.096 ms     |
| 262.144 kB | in 881.5 ms ± 31.775 ms    | in 881.22 ms ± 8.171 ms    | in 1,795.6 ms ± 41.811 ms   | in 2,422.3 ms ± 97.077 ms      | in 2,286.96 ms ± 67.024 ms     |
| 524.288 kB | in 1,747.3 ms ± 50.26 ms   | in 1,819.7 ms ± 55.626 ms  | in 3,535.66 ms ± 78.526 ms  | in 4,763.48 ms ± 84.83 ms      | in 4,523.06 ms ± 106.291 ms    |
| 1.049 MB   | in 3,484.64 ms ± 32.556 ms | in 3,618.84 ms ± 41.408 ms | in 7,455.22 ms ± 348.677 ms | in 9,833.08 ms ± 357.168 ms    | in 9,207.02 ms ± 327.994 ms    |