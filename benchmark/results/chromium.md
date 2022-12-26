# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.16 ms    | null                          | in 2.82 ms ± 0.445 ms      | in 2.82 ms ± 0.16 ms               | in 2.78 ms ± 0.183 ms              |
| 2 B        | in 0.08 ms ± 0.04 ms    | null                          | in 2.62 ms ± 0.16 ms       | in 2.84 ms ± 0.287 ms              | in 3.08 ms ± 0.319 ms              |
| 4 B        | in 0.06 ms ± 0.049 ms   | null                          | in 2.64 ms ± 0.224 ms      | in 2.84 ms ± 0.162 ms              | in 2.94 ms ± 0.15 ms               |
| 8 B        | in 0.06 ms ± 0.049 ms   | null                          | in 2.72 ms ± 0.204 ms      | in 3.3 ms ± 0.953 ms               | in 2.92 ms ± 0.183 ms              |
| 16 B       | in 0.18 ms ± 0.075 ms   | null                          | in 2.78 ms ± 0.306 ms      | in 3.04 ms ± 0.136 ms              | in 3.18 ms ± 0.232 ms              |
| 32 B       | in 0.04 ms ± 0.08 ms    | null                          | in 2.84 ms ± 0.301 ms      | in 3 ms ± 0.167 ms                 | in 3.04 ms ± 0.224 ms              |
| 64 B       | in 0.12 ms ± 0.04 ms    | null                          | in 2.98 ms ± 0.232 ms      | in 3.3 ms ± 0.297 ms               | in 3.9 ms ± 1.671 ms               |
| 128 B      | in 0.08 ms ± 0.04 ms    | null                          | in 2.8 ms ± 0.155 ms       | in 3.26 ms ± 0.273 ms              | in 3.2 ms ± 0.126 ms               |
| 256 B      | in 0.08 ms ± 0.075 ms   | null                          | in 3.06 ms ± 0.08 ms       | in 3.78 ms ± 0.172 ms              | in 3.86 ms ± 0.472 ms              |
| 512 B      | in 0.08 ms ± 0.04 ms    | null                          | in 3.5 ms ± 0.063 ms       | in 6.42 ms ± 3.09 ms               | in 4.76 ms ± 0.102 ms              |
| 1.024 kB   | in 0.12 ms ± 0.04 ms    | null                          | in 5.12 ms ± 0.605 ms      | in 7.28 ms ± 0.194 ms              | in 6.74 ms ± 0.08 ms               |
| 2.048 kB   | in 0.18 ms ± 0.075 ms   | null                          | in 6.94 ms ± 0.08 ms       | in 11.86 ms ± 0.08 ms              | in 11.18 ms ± 0.768 ms             |
| 4.096 kB   | in 0.14 ms ± 0.102 ms   | null                          | in 11.82 ms ± 0.786 ms     | in 22.5 ms ± 0.141 ms              | in 19 ms ± 0.089 ms                |
| 8.192 kB   | in 0.32 ms ± 0.492 ms   | null                          | in 20.14 ms ± 0.102 ms     | in 40.68 ms ± 0.223 ms             | in 35.5 ms ± 0.11 ms               |
| 16.384 kB  | in 0.16 ms ± 0.049 ms   | null                          | in 40.48 ms ± 2.838 ms     | in 80.06 ms ± 0.776 ms             | in 70.34 ms ± 0.589 ms             |
| 32.768 kB  | in 0.32 ms ± 0.04 ms    | null                          | in 82.8 ms ± 0.654 ms      | in 179.94 ms ± 31.094 ms           | in 143.36 ms ± 0.52 ms             |
| 65.536 kB  | in 0.78 ms ± 0.117 ms   | null                          | in 168.78 ms ± 1.179 ms    | in 326.96 ms ± 1.331 ms            | in 305.6 ms ± 16.291 ms            |
| 131.072 kB | in 2.96 ms ± 2.421 ms   | null                          | in 380.44 ms ± 33.223 ms   | in 657.44 ms ± 3.899 ms            | in 582.74 ms ± 2.913 ms            |
| 262.144 kB | in 4.12 ms ± 0.542 ms   | null                          | in 775.02 ms ± 20.518 ms   | in 1,406.44 ms ± 14.461 ms         | in 1,229.52 ms ± 32.28 ms          |
| 524.288 kB | in 7.88 ms ± 2.012 ms   | null                          | in 1,464.14 ms ± 21.691 ms | in 2,736.78 ms ± 32.525 ms         | in 2,464.62 ms ± 29.408 ms         |
| 1.049 MB   | in 19.96 ms ± 10.833 ms | null                          | in 2,920.44 ms ± 42.642 ms | in 5,497.6 ms ± 35.916 ms          | in 4,927.96 ms ± 33.147 ms         |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 5.98 ms ± 1.957 ms       | in 10.66 ms ± 7.923 ms     | in 25.44 ms ± 10.702 ms     | in 24.72 ms ± 13.386 ms        | in 24.72 ms ± 18.824 ms        |
| 2 B        | in 5.04 ms ± 2.839 ms       | in 4.76 ms ± 1.017 ms      | in 19.1 ms ± 12.143 ms      | in 30.32 ms ± 18.77 ms         | in 10.06 ms ± 3.862 ms         |
| 4 B        | in 3.2 ms ± 0.276 ms        | in 4.2 ms ± 0.923 ms       | in 10.22 ms ± 3.686 ms      | in 7.74 ms ± 0.512 ms          | in 8.24 ms ± 1.89 ms           |
| 8 B        | in 3.44 ms ± 0.28 ms        | in 4.16 ms ± 0.977 ms      | in 8.54 ms ± 1.54 ms        | in 7 ms ± 0.443 ms             | in 7.08 ms ± 0.435 ms          |
| 16 B       | in 3.68 ms ± 0.793 ms       | in 10.36 ms ± 11.814 ms    | in 7.6 ms ± 0.283 ms        | in 8.98 ms ± 2.529 ms          | in 6.82 ms ± 0.133 ms          |
| 32 B       | in 3.64 ms ± 0.314 ms       | in 8.28 ms ± 9.015 ms      | in 8.28 ms ± 0.945 ms       | in 7.3 ms ± 0.385 ms           | in 7.36 ms ± 0.28 ms           |
| 64 B       | in 4.06 ms ± 0.871 ms       | in 3.76 ms ± 0.578 ms      | in 7.82 ms ± 0.803 ms       | in 7.8 ms ± 0.832 ms           | in 7.18 ms ± 0.232 ms          |
| 128 B      | in 4.1 ms ± 0.802 ms        | in 4.1 ms ± 0.648 ms       | in 7.52 ms ± 0.483 ms       | in 8.1 ms ± 0.424 ms           | in 7.98 ms ± 0.725 ms          |
| 256 B      | in 3.84 ms ± 0.432 ms       | in 6.22 ms ± 2.869 ms      | in 8.32 ms ± 0.483 ms       | in 8.84 ms ± 0.361 ms          | in 8.52 ms ± 0.392 ms          |
| 512 B      | in 4.46 ms ± 0.206 ms       | in 5.9 ms ± 2.318 ms       | in 10.52 ms ± 2.2 ms        | in 10.56 ms ± 0.162 ms         | in 10.08 ms ± 0.117 ms         |
| 1.024 kB   | in 5.98 ms ± 0.584 ms       | in 7.22 ms ± 1.482 ms      | in 15.32 ms ± 4.733 ms      | in 14.28 ms ± 0.475 ms         | in 13.54 ms ± 0.102 ms         |
| 2.048 kB   | in 9.56 ms ± 3.423 ms       | in 8.32 ms ± 0.466 ms      | in 16.9 ms ± 2.069 ms       | in 27.28 ms ± 0.637 ms         | in 19.9 ms ± 0.429 ms          |
| 4.096 kB   | in 17.9 ms ± 2.687 ms       | in 15.7 ms ± 2.075 ms      | in 31.08 ms ± 0.634 ms      | in 35.92 ms ± 0.556 ms         | in 43.8 ms ± 7.977 ms          |
| 8.192 kB   | in 26.66 ms ± 0.492 ms      | in 25.48 ms ± 1.746 ms     | in 49.28 ms ± 0.741 ms      | in 64.56 ms ± 0.845 ms         | in 68.62 ms ± 8.198 ms         |
| 16.384 kB  | in 40.62 ms ± 0.248 ms      | in 42.6 ms ± 0.844 ms      | in 83.24 ms ± 0.589 ms      | in 122.58 ms ± 0.744 ms        | in 113.16 ms ± 1.143 ms        |
| 32.768 kB  | in 91.88 ms ± 9.044 ms      | in 89.74 ms ± 1.009 ms     | in 171.94 ms ± 1.981 ms     | in 252.74 ms ± 3.513 ms        | in 228.22 ms ± 0.83 ms         |
| 65.536 kB  | in 188.28 ms ± 34.526 ms    | in 178.86 ms ± 0.821 ms    | in 341.32 ms ± 2.301 ms     | in 499.5 ms ± 1.553 ms         | in 458.28 ms ± 1.429 ms        |
| 131.072 kB | in 372.48 ms ± 14.325 ms    | in 371.44 ms ± 10.394 ms   | in 747.74 ms ± 42.091 ms    | in 1,060.52 ms ± 27.201 ms     | in 990.86 ms ± 44.569 ms       |
| 262.144 kB | in 783.48 ms ± 48.95 ms     | in 823.92 ms ± 53.029 ms   | in 1,506.3 ms ± 44.511 ms   | in 2,253.66 ms ± 88.13 ms      | in 2,022.96 ms ± 53.292 ms     |
| 524.288 kB | in 1,519.14 ms ± 65.969 ms  | in 1,638.16 ms ± 97.592 ms | in 3,036.94 ms ± 122.386 ms | in 4,395.9 ms ± 206.654 ms     | in 4,081.72 ms ± 116.427 ms    |
| 1.049 MB   | in 3,003.72 ms ± 140.671 ms | in 3,122.4 ms ± 119.106 ms | in 6,124.64 ms ± 258.287 ms | in 8,575.92 ms ± 103.78 ms     | in 7,995.72 ms ± 116.588 ms    |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 149.14 ms ± 109.944 ms  | in 7.24 ms ± 4.821 ms      | in 6.3 ms ± 0.352 ms        | in 18.08 ms ± 5.527 ms         | in 14.02 ms ± 3.738 ms         |
| 2 B        | in 43.1 ms ± 36.281 ms     | in 4.48 ms ± 0.194 ms      | in 5.86 ms ± 0.742 ms       | in 14.1 ms ± 5.474 ms          | in 12.44 ms ± 3.87 ms          |
| 4 B        | in 28.66 ms ± 23.763 ms    | in 4.28 ms ± 1.151 ms      | in 5.54 ms ± 0.361 ms       | in 20.06 ms ± 6.422 ms         | in 25.42 ms ± 14.873 ms        |
| 8 B        | in 10.96 ms ± 10.849 ms    | in 3.68 ms ± 0.649 ms      | in 6.7 ms ± 2.257 ms        | in 8.68 ms ± 2.101 ms          | in 9.4 ms ± 2.248 ms           |
| 16 B       | in 9.92 ms ± 12.406 ms     | in 3.36 ms ± 0.301 ms      | in 6.44 ms ± 0.96 ms        | in 11.76 ms ± 3.097 ms         | in 7.46 ms ± 1.491 ms          |
| 32 B       | in 13 ms ± 14.735 ms       | in 4.1 ms ± 0.863 ms       | in 8.9 ms ± 5.626 ms        | in 9.44 ms ± 2.223 ms          | in 9.42 ms ± 4.964 ms          |
| 64 B       | in 24.8 ms ± 27.941 ms     | in 4.62 ms ± 0.952 ms      | in 9.92 ms ± 6.83 ms        | in 9.4 ms ± 0.938 ms           | in 13.32 ms ± 2.895 ms         |
| 128 B      | in 6.18 ms ± 3.228 ms      | in 4.12 ms ± 1.042 ms      | in 9.12 ms ± 1.745 ms       | in 8.58 ms ± 1.273 ms          | in 12.2 ms ± 6.252 ms          |
| 256 B      | in 4.26 ms ± 0.615 ms      | in 4.64 ms ± 0.48 ms       | in 6.82 ms ± 0.466 ms       | in 9.18 ms ± 1.379 ms          | in 10.32 ms ± 4.222 ms         |
| 512 B      | in 5.86 ms ± 2.96 ms       | in 5.16 ms ± 1.563 ms      | in 8.36 ms ± 0.561 ms       | in 8.68 ms ± 0.531 ms          | in 9.08 ms ± 0.924 ms          |
| 1.024 kB   | in 13.86 ms ± 16.12 ms     | in 5.96 ms ± 1.048 ms      | in 10.14 ms ± 0.422 ms      | in 12.24 ms ± 0.791 ms         | in 15.86 ms ± 7.638 ms         |
| 2.048 kB   | in 16.6 ms ± 12.713 ms     | in 7.68 ms ± 0.445 ms      | in 14.7 ms ± 0.775 ms       | in 19.1 ms ± 0.802 ms          | in 19.08 ms ± 2.052 ms         |
| 4.096 kB   | in 19.76 ms ± 7.528 ms     | in 13.04 ms ± 0.273 ms     | in 24.04 ms ± 0.554 ms      | in 32.76 ms ± 0.671 ms         | in 30.16 ms ± 0.508 ms         |
| 8.192 kB   | in 24.78 ms ± 2.724 ms     | in 23.84 ms ± 2.541 ms     | in 42.76 ms ± 0.628 ms      | in 63.34 ms ± 0.889 ms         | in 55.52 ms ± 1.264 ms         |
| 16.384 kB  | in 45.34 ms ± 3.414 ms     | in 42.54 ms ± 0.476 ms     | in 82.3 ms ± 1.018 ms       | in 120.2 ms ± 2.134 ms         | in 108.32 ms ± 2.926 ms        |
| 32.768 kB  | in 87.26 ms ± 1.275 ms     | in 91.48 ms ± 2.284 ms     | in 201.62 ms ± 24.56 ms     | in 248.84 ms ± 8.223 ms        | in 219.52 ms ± 1.08 ms         |
| 65.536 kB  | in 172.24 ms ± 1.033 ms    | in 217.02 ms ± 22.841 ms   | in 354.08 ms ± 9.053 ms     | in 494.68 ms ± 1.777 ms        | in 443.22 ms ± 8.773 ms        |
| 131.072 kB | in 381.16 ms ± 19.424 ms   | in 386.86 ms ± 27.61 ms    | in 699.8 ms ± 14.832 ms     | in 1,019.4 ms ± 20.415 ms      | in 900.46 ms ± 18.977 ms       |
| 262.144 kB | in 747.22 ms ± 33.455 ms   | in 747.92 ms ± 14.512 ms   | in 1,520.24 ms ± 44.906 ms  | in 2,059.06 ms ± 50.28 ms      | in 1,910.8 ms ± 36.808 ms      |
| 524.288 kB | in 1,432.34 ms ± 30.291 ms | in 1,512.22 ms ± 24.164 ms | in 3,004.42 ms ± 71.679 ms  | in 4,084.1 ms ± 98.483 ms      | in 3,797.7 ms ± 73.801 ms      |
| 1.049 MB   | in 2,938.26 ms ± 42.261 ms | in 3,050.2 ms ± 9.453 ms   | in 6,262.82 ms ± 267.274 ms | in 8,413.98 ms ± 272.613 ms    | in 7,797.8 ms ± 230.045 ms     |