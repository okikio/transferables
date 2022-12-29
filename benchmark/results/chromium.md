# Chromium

## structuredClone (browser)

|            | hasTransferables      | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | --------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.14 ms ± 0.136 ms | null                          | in 5.38 ms ± 3.69 ms       | in 4.08 ms ± 1.169 ms              | in 3.66 ms ± 1.025 ms              |
| 2 B        | in 0.06 ms ± 0.049 ms | null                          | in 3.16 ms ± 0.496 ms      | in 5.56 ms ± 4.821 ms              | in 3.16 ms ± 0.287 ms              |
| 4 B        | in 0.1 ms ± 0.063 ms  | null                          | in 3 ms ± 0.316 ms         | in 3.16 ms ± 0.326 ms              | in 3.38 ms ± 0.614 ms              |
| 8 B        | in 0.16 ms ± 0.136 ms | null                          | in 3.16 ms ± 0.454 ms      | in 4.14 ms ± 1.785 ms              | in 3.46 ms ± 0.344 ms              |
| 16 B       | in 0.3 ms ± 0.405 ms  | null                          | in 3.46 ms ± 0.714 ms      | in 3.48 ms ± 0.534 ms              | in 3.68 ms ± 0.435 ms              |
| 32 B       | in 0.08 ms ± 0.04 ms  | null                          | in 3.66 ms ± 0.739 ms      | in 7.66 ms ± 8.534 ms              | in 3.44 ms ± 0.768 ms              |
| 64 B       | in 0.08 ms ± 0.04 ms  | null                          | in 3.42 ms ± 0.426 ms      | in 3.56 ms ± 0.258 ms              | in 4.1 ms ± 1.699 ms               |
| 128 B      | in 0.04 ms ± 0.049 ms | null                          | in 3.46 ms ± 0.662 ms      | in 4.28 ms ± 1.258 ms              | in 3.58 ms ± 0.479 ms              |
| 256 B      | in 0.1 ms ± 0.063 ms  | null                          | in 3.48 ms ± 0.402 ms      | in 3.7 ms ± 0.19 ms                | in 4.24 ms ± 0.372 ms              |
| 512 B      | in 0.08 ms ± 0.04 ms  | null                          | in 4.1 ms ± 0.901 ms       | in 4.48 ms ± 0.16 ms               | in 4.5 ms ± 0.126 ms               |
| 1.024 kB   | in 0.14 ms ± 0.049 ms | null                          | in 4.58 ms ± 0.133 ms      | in 7.36 ms ± 2.229 ms              | in 6.56 ms ± 0.102 ms              |
| 2.048 kB   | in 0.08 ms ± 0.075 ms | null                          | in 6.56 ms ± 0.174 ms      | in 9.7 ms ± 0.415 ms               | in 10.68 ms ± 0.776 ms             |
| 4.096 kB   | in 0.1 ms ± 0.063 ms  | null                          | in 10.28 ms ± 0.117 ms     | in 16.38 ms ± 0.172 ms             | in 21.32 ms ± 7.091 ms             |
| 8.192 kB   | in 0.1 ms ± now       | null                          | in 18.92 ms ± 0.462 ms     | in 30.82 ms ± 0.542 ms             | in 33.54 ms ± 0.595 ms             |
| 16.384 kB  | in 0.02 ms ± 0.04 ms  | null                          | in 34.8 ms ± 0.316 ms      | in 59.22 ms ± 0.435 ms             | in 64.68 ms ± 0.534 ms             |
| 32.768 kB  | in 0.12 ms ± 0.04 ms  | null                          | in 80.3 ms ± 6.271 ms      | in 125.96 ms ± 1.999 ms            | in 133.6 ms ± 1.099 ms             |
| 65.536 kB  | in 0.1 ms ± 0.063 ms  | null                          | in 151.44 ms ± 0.5 ms      | in 248 ms ± 1.045 ms               | in 271.38 ms ± 2.351 ms            |
| 131.072 kB | in 0.08 ms ± 0.04 ms  | null                          | in 345.78 ms ± 32.914 ms   | in 497.7 ms ± 1.356 ms             | in 539.1 ms ± 2.474 ms             |
| 262.144 kB | in 0.12 ms ± 0.04 ms  | null                          | in 679.88 ms ± 23.462 ms   | in 1,072.46 ms ± 18.136 ms         | in 1,153.68 ms ± 15.422 ms         |
| 524.288 kB | in 0.32 ms ± 0.591 ms | null                          | in 1,338.66 ms ± 38.392 ms | in 2,098.82 ms ± 19.836 ms         | in 2,268.86 ms ± 18.341 ms         |
| 1.049 MB   | in 0.14 ms ± 0.08 ms  | null                          | in 2,620.12 ms ± 25.915 ms | in 4,172.52 ms ± 43.382 ms         | in 4,492.42 ms ± 38.88 ms          |

## MessageChannel (browser)

|            | hasTransferables         | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ------------------------ | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 23.42 ms ± 18.918 ms  | in 3.72 ms ± 1.032 ms      | in 15.76 ms ± 9.231 ms      | in 21.66 ms ± 8.201 ms         | in 29.4 ms ± 21.406 ms         |
| 2 B        | in 3.32 ms ± 1.647 ms    | in 9.32 ms ± 14.045 ms     | in 22.52 ms ± 12.09 ms      | in 28.32 ms ± 16.426 ms        | in 8.9 ms ± 3.776 ms           |
| 4 B        | in 2.92 ms ± 0.974 ms    | in 3.02 ms ± 2.048 ms      | in 8.64 ms ± 4.263 ms       | in 7.22 ms ± 3.393 ms          | in 7.06 ms ± 1.991 ms          |
| 8 B        | in 12.46 ms ± 18.828 ms  | in 1.88 ms ± 0.232 ms      | in 7.1 ms ± 3.724 ms        | in 5.34 ms ± 0.367 ms          | in 6.02 ms ± 0.755 ms          |
| 16 B       | in 4.68 ms ± 4.22 ms     | in 2.26 ms ± 0.734 ms      | in 5.12 ms ± 0.117 ms       | in 5.5 ms ± 0.785 ms           | in 5.84 ms ± 0.862 ms          |
| 32 B       | in 10.24 ms ± 11.57 ms   | in 2.48 ms ± 0.786 ms      | in 5.22 ms ± 0.534 ms       | in 5.16 ms ± 0.136 ms          | in 5.92 ms ± 0.471 ms          |
| 64 B       | in 8.8 ms ± 8.821 ms     | in 2.56 ms ± 1.462 ms      | in 5.12 ms ± 0.264 ms       | in 5.64 ms ± 0.831 ms          | in 11.2 ms ± 11.052 ms         |
| 128 B      | in 10.1 ms ± 14.77 ms    | in 2.02 ms ± 0.24 ms       | in 5.6 ms ± 0.473 ms        | in 5.8 ms ± 0.385 ms           | in 6.06 ms ± 0.206 ms          |
| 256 B      | in 6.52 ms ± 8.043 ms    | in 2.38 ms ± 0.624 ms      | in 5.88 ms ± 0.366 ms       | in 6.18 ms ± 0.232 ms          | in 6.78 ms ± 0.337 ms          |
| 512 B      | in 5.92 ms ± 7.691 ms    | in 3.26 ms ± 1.183 ms      | in 6.8 ms ± 0.812 ms        | in 7.62 ms ± 0.286 ms          | in 8.02 ms ± 0.214 ms          |
| 1.024 kB   | in 4.72 ms ± 3.4 ms      | in 3.8 ms ± 1.319 ms       | in 9.58 ms ± 2.67 ms        | in 10.26 ms ± 0.48 ms          | in 10.66 ms ± 0.403 ms         |
| 2.048 kB   | in 4.12 ms ± 0.299 ms    | in 4.5 ms ± 0.261 ms       | in 11.56 ms ± 0.301 ms      | in 15.06 ms ± 0.233 ms         | in 15.56 ms ± 0.524 ms         |
| 4.096 kB   | in 6.46 ms ± 0.136 ms    | in 8.5 ms ± 1.602 ms       | in 23.38 ms ± 0.673 ms      | in 29.34 ms ± 0.356 ms         | in 31.64 ms ± 1.332 ms         |
| 8.192 kB   | in 11.96 ms ± 0.753 ms   | in 14.12 ms ± 1.905 ms     | in 35.52 ms ± 0.697 ms      | in 48.52 ms ± 0.556 ms         | in 50.98 ms ± 0.445 ms         |
| 16.384 kB  | in 20.74 ms ± 0.326 ms   | in 23.16 ms ± 2.424 ms     | in 59.14 ms ± 1.315 ms      | in 84.02 ms ± 0.453 ms         | in 88.56 ms ± 0.224 ms         |
| 32.768 kB  | in 41.92 ms ± 0.588 ms   | in 45.1 ms ± 0.21 ms       | in 120.32 ms ± 5.708 ms     | in 168.08 ms ± 0.487 ms        | in 177.52 ms ± 1.416 ms        |
| 65.536 kB  | in 85.68 ms ± 0.733 ms   | in 92.94 ms ± 0.422 ms     | in 239.62 ms ± 1.23 ms      | in 341.08 ms ± 1.978 ms        | in 360.36 ms ± 2.302 ms        |
| 131.072 kB | in 183.08 ms ± 14.718 ms | in 194.72 ms ± 6.712 ms    | in 512.88 ms ± 24.419 ms    | in 713.14 ms ± 15.816 ms       | in 756 ms ± 9.198 ms           |
| 262.144 kB | in 425.18 ms ± 41.95 ms  | in 456.4 ms ± 38.858 ms    | in 1,083.36 ms ± 39.003 ms  | in 1,495.54 ms ± 37.119 ms     | in 1,604.46 ms ± 57.559 ms     |
| 524.288 kB | in 782.44 ms ± 45.983 ms | in 857.26 ms ± 30.727 ms   | in 2,145.62 ms ± 87.615 ms  | in 2,982.26 ms ± 59.154 ms     | in 3,202.58 ms ± 92.508 ms     |
| 1.049 MB   | in 1,501.8 ms ± 54.28 ms | in 1,657.62 ms ± 75.267 ms | in 4,326.56 ms ± 252.237 ms | in 5,867.26 ms ± 174.979 ms    | in 6,241.3 ms ± 105.688 ms     |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 104.82 ms ± 70.142 ms  | in 3.1 ms ± 3.073 ms       | in 3.14 ms ± 0.609 ms      | in 9.44 ms ± 3.322 ms          | in 10.78 ms ± 7.428 ms         |
| 2 B        | in 44.26 ms ± 30.677 ms   | in 1.34 ms ± 0.459 ms      | in 3.34 ms ± 0.233 ms      | in 12.14 ms ± 12.829 ms        | in 6.2 ms ± 2.794 ms           |
| 4 B        | in 36.46 ms ± 31.707 ms   | in 2.52 ms ± 0.676 ms      | in 3.32 ms ± 0.204 ms      | in 8.12 ms ± 7.505 ms          | in 10.84 ms ± 8.904 ms         |
| 8 B        | in 15.24 ms ± 15.877 ms   | in 1.46 ms ± 0.467 ms      | in 4.12 ms ± 0.749 ms      | in 3.86 ms ± 0.826 ms          | in 6.48 ms ± 4.561 ms          |
| 16 B       | in 11.82 ms ± 14.243 ms   | in 1.66 ms ± 0.265 ms      | in 4.22 ms ± 0.492 ms      | in 4.74 ms ± 0.92 ms           | in 6.96 ms ± 2.329 ms          |
| 32 B       | in 12.94 ms ± 16.945 ms   | in 1.56 ms ± 0.393 ms      | in 4.24 ms ± 0.831 ms      | in 6.42 ms ± 2.353 ms          | in 4.2 ms ± 1.192 ms           |
| 64 B       | in 28.24 ms ± 17.134 ms   | in 2.22 ms ± 0.776 ms      | in 3.48 ms ± 0.16 ms       | in 8.34 ms ± 3.581 ms          | in 4.48 ms ± 0.93 ms           |
| 128 B      | in 6.96 ms ± 3.491 ms     | in 3.26 ms ± 2.206 ms      | in 5.78 ms ± 0.392 ms      | in 5.42 ms ± 0.875 ms          | in 11.42 ms ± 13.25 ms         |
| 256 B      | in 14.8 ms ± 16.204 ms    | in 1.86 ms ± 0.162 ms      | in 5.1 ms ± 1.602 ms       | in 5.94 ms ± 1.323 ms          | in 4.96 ms ± 1.24 ms           |
| 512 B      | in 9.78 ms ± 4.621 ms     | in 1.92 ms ± 0.306 ms      | in 5.38 ms ± 0.214 ms      | in 6.96 ms ± 0.755 ms          | in 6 ms ± 1.846 ms             |
| 1.024 kB   | in 6.96 ms ± 4.238 ms     | in 2.14 ms ± 0.845 ms      | in 7 ms ± 0.316 ms         | in 7.32 ms ± 2.139 ms          | in 7.28 ms ± 2.123 ms          |
| 2.048 kB   | in 9.8 ms ± 4.972 ms      | in 3.52 ms ± 1.172 ms      | in 9.08 ms ± 1.359 ms      | in 12.34 ms ± 0.665 ms         | in 13.14 ms ± 0.463 ms         |
| 4.096 kB   | in 13.88 ms ± 7.306 ms    | in 5.68 ms ± 1.845 ms      | in 16.44 ms ± 0.367 ms     | in 21.18 ms ± 0.95 ms          | in 22.4 ms ± 0.341 ms          |
| 8.192 kB   | in 16.46 ms ± 5.923 ms    | in 10.3 ms ± 2.012 ms      | in 28.86 ms ± 0.45 ms      | in 38.12 ms ± 0.598 ms         | in 40.46 ms ± 0.45 ms          |
| 16.384 kB  | in 20.52 ms ± 0.172 ms    | in 18.64 ms ± 4.569 ms     | in 58.32 ms ± 3.294 ms     | in 77.8 ms ± 5.633 ms          | in 86.12 ms ± 5.846 ms         |
| 32.768 kB  | in 41.08 ms ± 0.376 ms    | in 53.14 ms ± 13.277 ms    | in 134.18 ms ± 15.943 ms   | in 148.64 ms ± 1.005 ms        | in 173.22 ms ± 6.592 ms        |
| 65.536 kB  | in 84.32 ms ± 0.662 ms    | in 111.34 ms ± 21.139 ms   | in 238.66 ms ± 1.483 ms    | in 317.62 ms ± 8.972 ms        | in 342.88 ms ± 2.769 ms        |
| 131.072 kB | in 182.86 ms ± 2.887 ms   | in 189.76 ms ± 14.295 ms   | in 483.22 ms ± 10.571 ms   | in 630.98 ms ± 15.258 ms       | in 670.22 ms ± 8.587 ms        |
| 262.144 kB | in 377.34 ms ± 43.197 ms  | in 405.42 ms ± 29.449 ms   | in 1,041.66 ms ± 34.547 ms | in 1,314.46 ms ± 17.959 ms     | in 1,425.5 ms ± 38.449 ms      |
| 524.288 kB | in 705.78 ms ± 21.753 ms  | in 783.96 ms ± 22.896 ms   | in 2,037.98 ms ± 34.751 ms | in 2,571.74 ms ± 26.525 ms     | in 2,791.84 ms ± 26.584 ms     |
| 1.049 MB   | in 1,438.14 ms ± 20.19 ms | in 1,525.56 ms ± 21.329 ms | in 4,019.18 ms ± 91.567 ms | in 5,094.9 ms ± 71.669 ms      | in 5,475.96 ms ± 54.699 ms     |