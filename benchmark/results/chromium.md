# Chromium

## structuredClone (browser)

|            | hasTransferables      | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | --------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.075 ms | null                          | in 8.14 ms ± 5.451 ms      | in 4.02 ms ± 0.93 ms               | in 4 ms ± 0.99 ms                  |
| 2 B        | in 0.12 ms ± 0.04 ms  | null                          | in 3.74 ms ± 1.129 ms      | in 3.8 ms ± 0.473 ms               | in 3.44 ms ± 0.174 ms              |
| 4 B        | in 0.06 ms ± 0.08 ms  | null                          | in 3.24 ms ± 0.162 ms      | in 3.8 ms ± 0.405 ms               | in 3.62 ms ± 0.826 ms              |
| 8 B        | in 0.12 ms ± 0.04 ms  | null                          | in 4.24 ms ± 2.542 ms      | in 3.86 ms ± 1.183 ms              | in 3.64 ms ± 0.484 ms              |
| 16 B       | in 0.12 ms ± 0.04 ms  | null                          | in 3.08 ms ± 0.354 ms      | in 4.04 ms ± 0.954 ms              | in 3.68 ms ± 0.483 ms              |
| 32 B       | in 0.12 ms ± 0.04 ms  | null                          | in 3.02 ms ± 0.337 ms      | in 3.24 ms ± 0.294 ms              | in 3.26 ms ± 0.301 ms              |
| 64 B       | in 0.14 ms ± 0.049 ms | null                          | in 6.56 ms ± 7.026 ms      | in 3.2 ms ± 0.219 ms               | in 4.5 ms ± 1.544 ms               |
| 128 B      | in 0.06 ms ± 0.08 ms  | null                          | in 3.16 ms ± 0.543 ms      | in 3.76 ms ± 0.338 ms              | in 3.48 ms ± 0.397 ms              |
| 256 B      | in 0.06 ms ± 0.049 ms | null                          | in 3.44 ms ± 0.35 ms       | in 4.02 ms ± 0.248 ms              | in 4.14 ms ± 0.372 ms              |
| 512 B      | in 0.12 ms ± 0.04 ms  | null                          | in 4.12 ms ± 0.366 ms      | in 9.28 ms ± 8.114 ms              | in 5.1 ms ± 0.335 ms               |
| 1.024 kB   | in 0.12 ms ± 0.04 ms  | null                          | in 5.68 ms ± 0.458 ms      | in 9.32 ms ± 2.695 ms              | in 7.1 ms ± 0.31 ms                |
| 2.048 kB   | in 0.12 ms ± 0.04 ms  | null                          | in 7.18 ms ± 0.075 ms      | in 11.7 ms ± 0.11 ms               | in 11.6 ms ± 0.853 ms              |
| 4.096 kB   | in 0.08 ms ± 0.04 ms  | null                          | in 11.52 ms ± 0.172 ms     | in 20.8 ms ± 0.707 ms              | in 19.78 ms ± 0.571 ms             |
| 8.192 kB   | in 0.02 ms ± 0.04 ms  | null                          | in 20.64 ms ± 0.102 ms     | in 38.2 ms ± 0.155 ms              | in 36.8 ms ± 0.555 ms              |
| 16.384 kB  | in 0.06 ms ± 0.049 ms | null                          | in 39.52 ms ± 0.376 ms     | in 75.48 ms ± 0.694 ms             | in 71.92 ms ± 0.649 ms             |
| 32.768 kB  | in 0.08 ms ± 0.04 ms  | null                          | in 86.76 ms ± 3.721 ms     | in 158.84 ms ± 1.458 ms            | in 147.78 ms ± 1.351 ms            |
| 65.536 kB  | in 0.1 ms ± now       | null                          | in 171.6 ms ± 1.961 ms     | in 314.1 ms ± 2.138 ms             | in 301.68 ms ± 1.882 ms            |
| 131.072 kB | in 0.12 ms ± 0.04 ms  | null                          | in 381.16 ms ± 16.072 ms   | in 634.56 ms ± 13.744 ms           | in 611.54 ms ± 24.788 ms           |
| 262.144 kB | in 0.12 ms ± 0.04 ms  | null                          | in 773.7 ms ± 30.946 ms    | in 1,359.22 ms ± 44.723 ms         | in 1,303.1 ms ± 50.369 ms          |
| 524.288 kB | in 0.1 ms ± 0.063 ms  | null                          | in 1,509.84 ms ± 30.905 ms | in 2,612.58 ms ± 20.291 ms         | in 2,528.44 ms ± 37.467 ms         |
| 1.049 MB   | in 0.14 ms ± 0.049 ms | null                          | in 2,979.82 ms ± 33.922 ms | in 5,233.12 ms ± 18.836 ms         | in 5,019.92 ms ± 57.488 ms         |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 38.26 ms ± 31.715 ms     | in 17.46 ms ± 10.518 ms     | in 20.82 ms ± 3.985 ms      | in 27.86 ms ± 11.173 ms        | in 50.68 ms ± 33.476 ms        |
| 2 B        | in 8.1 ms ± 5.466 ms        | in 16.36 ms ± 19.294 ms     | in 19.58 ms ± 10.833 ms     | in 39.56 ms ± 19.601 ms        | in 17.88 ms ± 11.84 ms         |
| 4 B        | in 7.16 ms ± 5.649 ms       | in 20.58 ms ± 23.867 ms     | in 16.54 ms ± 15.211 ms     | in 7.9 ms ± 0.616 ms           | in 8.92 ms ± 2.198 ms          |
| 8 B        | in 10.92 ms ± 12.275 ms     | in 3.46 ms ± 0.273 ms       | in 12.36 ms ± 9.688 ms      | in 7.8 ms ± 0.953 ms           | in 8.34 ms ± 1.661 ms          |
| 16 B       | in 16.46 ms ± 18.083 ms     | in 3.8 ms ± 0.21 ms         | in 8.82 ms ± 1.382 ms       | in 9.44 ms ± 2.179 ms          | in 8.1 ms ± 2.219 ms           |
| 32 B       | in 9.26 ms ± 6.833 ms       | in 3.56 ms ± 0.185 ms       | in 9.38 ms ± 2.777 ms       | in 9.52 ms ± 1.991 ms          | in 8.14 ms ± 1.891 ms          |
| 64 B       | in 14.04 ms ± 12.51 ms      | in 3.82 ms ± 0.588 ms       | in 8 ms ± 1.006 ms          | in 9.04 ms ± 1.468 ms          | in 8.16 ms ± 0.967 ms          |
| 128 B      | in 7.68 ms ± 4.8 ms         | in 4.32 ms ± 0.549 ms       | in 8.64 ms ± 1.824 ms       | in 8.84 ms ± 0.307 ms          | in 9.88 ms ± 2.713 ms          |
| 256 B      | in 7 ms ± 5.952 ms          | in 4.4 ms ± 0.19 ms         | in 8.28 ms ± 0.76 ms        | in 9.02 ms ± 0.306 ms          | in 9.84 ms ± 2.253 ms          |
| 512 B      | in 4.62 ms ± 0.371 ms       | in 5.84 ms ± 2.291 ms       | in 9.2 ms ± 0.699 ms        | in 10.84 ms ± 0.427 ms         | in 21.98 ms ± 23.26 ms         |
| 1.024 kB   | in 6.44 ms ± 1.256 ms       | in 7.12 ms ± 1.434 ms       | in 13.54 ms ± 3.227 ms      | in 14.48 ms ± 0.806 ms         | in 14.3 ms ± 0.764 ms          |
| 2.048 kB   | in 9.64 ms ± 2.64 ms        | in 8.72 ms ± 0.56 ms        | in 16.42 ms ± 0.808 ms      | in 21.48 ms ± 0.725 ms         | in 20.8 ms ± 0.465 ms          |
| 4.096 kB   | in 15.94 ms ± 2.405 ms      | in 14.94 ms ± 1.923 ms      | in 32.12 ms ± 0.736 ms      | in 40.96 ms ± 1.263 ms         | in 39.12 ms ± 2.183 ms         |
| 8.192 kB   | in 25.42 ms ± 3.025 ms      | in 25.02 ms ± 2.227 ms      | in 50.02 ms ± 1.382 ms      | in 67.46 ms ± 0.84 ms          | in 64.52 ms ± 2.436 ms         |
| 16.384 kB  | in 41.6 ms ± 0.385 ms       | in 42.6 ms ± 0.155 ms       | in 83.94 ms ± 0.476 ms      | in 118.18 ms ± 0.449 ms        | in 113.56 ms ± 0.463 ms        |
| 32.768 kB  | in 88.36 ms ± 0.273 ms      | in 91.58 ms ± 0.991 ms      | in 172.72 ms ± 0.349 ms     | in 242.34 ms ± 1.505 ms        | in 232.5 ms ± 0.787 ms         |
| 65.536 kB  | in 172.14 ms ± 0.995 ms     | in 186.06 ms ± 11.873 ms    | in 344.36 ms ± 0.557 ms     | in 481.94 ms ± 0.258 ms        | in 466.94 ms ± 2.498 ms        |
| 131.072 kB | in 377.96 ms ± 35.339 ms    | in 408.1 ms ± 35.438 ms     | in 759.3 ms ± 52.473 ms     | in 1,023.64 ms ± 28.648 ms     | in 985.34 ms ± 23.141 ms       |
| 262.144 kB | in 775.94 ms ± 38.652 ms    | in 806.14 ms ± 40.473 ms    | in 1,537.94 ms ± 59.742 ms  | in 2,156.26 ms ± 83.346 ms     | in 2,089.56 ms ± 82.838 ms     |
| 524.288 kB | in 1,548.38 ms ± 143.304 ms | in 1,636.9 ms ± 119.124 ms  | in 3,142.78 ms ± 174.037 ms | in 4,160.92 ms ± 93.819 ms     | in 4,179.52 ms ± 131.811 ms    |
| 1.049 MB   | in 3,100.18 ms ± 156.063 ms | in 3,222.32 ms ± 184.268 ms | in 6,198.74 ms ± 332.372 ms | in 8,444.7 ms ± 194.23 ms      | in 8,114.86 ms ± 199.025 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 142.02 ms ± 94.658 ms  | in 6.12 ms ± 1.267 ms      | in 6.12 ms ± 0.773 ms       | in 18.98 ms ± 6.316 ms         | in 16.74 ms ± 11.026 ms        |
| 2 B        | in 42.76 ms ± 23.041 ms   | in 4.46 ms ± 0.977 ms      | in 6.04 ms ± 0.641 ms       | in 22.92 ms ± 12.139 ms        | in 11.8 ms ± 4.81 ms           |
| 4 B        | in 43.74 ms ± 32.375 ms   | in 4.36 ms ± 0.564 ms      | in 5.42 ms ± 0.402 ms       | in 19.3 ms ± 10.531 ms         | in 11.5 ms ± 4.351 ms          |
| 8 B        | in 48.16 ms ± 37.846 ms   | in 3.9 ms ± 0.303 ms       | in 6.82 ms ± 1.262 ms       | in 9.02 ms ± 2.234 ms          | in 10.44 ms ± 6.499 ms         |
| 16 B       | in 21.96 ms ± 21.71 ms    | in 3.48 ms ± 0.36 ms       | in 7.62 ms ± 0.371 ms       | in 12.5 ms ± 6.182 ms          | in 13.32 ms ± 13.7 ms          |
| 32 B       | in 11.8 ms ± 10.942 ms    | in 3.46 ms ± 0.422 ms      | in 5.64 ms ± 0.338 ms       | in 10.04 ms ± 1.835 ms         | in 6.92 ms ± 0.838 ms          |
| 64 B       | in 10.1 ms ± 10.442 ms    | in 6.68 ms ± 1.061 ms      | in 6 ms ± 0.276 ms          | in 8.16 ms ± 1.812 ms          | in 11.92 ms ± 2.899 ms         |
| 128 B      | in 9.92 ms ± 5.594 ms     | in 4.34 ms ± 0.273 ms      | in 11.98 ms ± 5.542 ms      | in 7.3 ms ± 0.29 ms            | in 10.64 ms ± 4.795 ms         |
| 256 B      | in 19.9 ms ± 15.838 ms    | in 4.48 ms ± 0.471 ms      | in 7 ms ± 0.61 ms           | in 7.84 ms ± 0.546 ms          | in 11.16 ms ± 7.454 ms         |
| 512 B      | in 15.7 ms ± 10.906 ms    | in 4.82 ms ± 0.673 ms      | in 8.36 ms ± 0.524 ms       | in 9.14 ms ± 0.671 ms          | in 11.52 ms ± 4.763 ms         |
| 1.024 kB   | in 11.78 ms ± 6.736 ms    | in 6.92 ms ± 1.065 ms      | in 10.44 ms ± 0.531 ms      | in 12.48 ms ± 0.531 ms         | in 15.04 ms ± 5.5 ms           |
| 2.048 kB   | in 13.48 ms ± 4.928 ms    | in 8.28 ms ± 0.542 ms      | in 14.82 ms ± 0.431 ms      | in 18.2 ms ± 0.4 ms            | in 25.04 ms ± 12.107 ms        |
| 4.096 kB   | in 22.48 ms ± 9.003 ms    | in 13.22 ms ± 0.747 ms     | in 24.4 ms ± 0.71 ms        | in 31.86 ms ± 0.995 ms         | in 29.98 ms ± 0.435 ms         |
| 8.192 kB   | in 26.62 ms ± 3.448 ms    | in 23.2 ms ± 1.022 ms      | in 43.34 ms ± 0.338 ms      | in 57.34 ms ± 0.524 ms         | in 54.66 ms ± 0.662 ms         |
| 16.384 kB  | in 42.6 ms ± 1.352 ms     | in 44.44 ms ± 0.758 ms     | in 83 ms ± 0.867 ms         | in 113.82 ms ± 4.832 ms        | in 110.82 ms ± 13.329 ms       |
| 32.768 kB  | in 89.34 ms ± 2.928 ms    | in 91.66 ms ± 0.717 ms     | in 210.06 ms ± 19.607 ms    | in 231.34 ms ± 10.692 ms       | in 228.98 ms ± 14.623 ms       |
| 65.536 kB  | in 174.28 ms ± 1.08 ms    | in 229.48 ms ± 24.94 ms    | in 353.18 ms ± 2.869 ms     | in 466.42 ms ± 7.302 ms        | in 468.74 ms ± 21.922 ms       |
| 131.072 kB | in 392.58 ms ± 28.725 ms  | in 389.74 ms ± 25.479 ms   | in 728.34 ms ± 18.733 ms    | in 958.26 ms ± 20.781 ms       | in 909.52 ms ± 11.359 ms       |
| 262.144 kB | in 733.52 ms ± 17.783 ms  | in 780.46 ms ± 17.869 ms   | in 1,518.28 ms ± 19.974 ms  | in 1,941.86 ms ± 26.216 ms     | in 1,907.4 ms ± 40.697 ms      |
| 524.288 kB | in 1,460.46 ms ± 38.11 ms | in 1,530.7 ms ± 27.416 ms  | in 3,030.22 ms ± 89.371 ms  | in 3,915.08 ms ± 64.385 ms     | in 3,739.86 ms ± 57.658 ms     |
| 1.049 MB   | in 2,925.7 ms ± 37.78 ms  | in 3,071.98 ms ± 44.18 ms  | in 6,297.08 ms ± 286.085 ms | in 8,049.18 ms ± 267.991 ms    | in 7,666.7 ms ± 211.376 ms     |