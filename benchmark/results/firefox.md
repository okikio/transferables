# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1 second ± 1.095 ms | null                          | in 5 ms ± 0.632 ms         | in 5.4 ms ± 1.02 ms                | in 6.8 ms ± 3.655 ms               |
| 2 B        | in 0.6 ms ± 0.49 ms    | null                          | in 3.8 ms ± 1.166 ms       | in 5 ms ± 1.549 ms                 | in 6.8 ms ± 3.655 ms               |
| 4 B        | in 0.6 ms ± 0.49 ms    | null                          | in 4.6 ms ± 0.8 ms         | in 5 ms ± 1.095 ms                 | in 5.4 ms ± 1.855 ms               |
| 8 B        | in 0.8 ms ± 0.4 ms     | null                          | in 4.2 ms ± 1.166 ms       | in 5.2 ms ± 0.98 ms                | in 6.8 ms ± 3.25 ms                |
| 16 B       | in 2 ms ± 3.033 ms     | null                          | in 4.8 ms ± 0.748 ms       | in 4.8 ms ± 1.47 ms                | in 6 ms ± 1.095 ms                 |
| 32 B       | in 0.6 ms ± 0.49 ms    | null                          | in 4.2 ms ± 1.166 ms       | in 9.6 ms ± 5.817 ms               | in 7.6 ms ± 4.176 ms               |
| 64 B       | in 0.4 ms ± 0.8 ms     | null                          | in 6.6 ms ± 2.417 ms       | in 10 ms ± 3.847 ms                | in 6.6 ms ± 0.8 ms                 |
| 128 B      | in 0.2 ms ± 0.4 ms     | null                          | in 7.4 ms ± 2.728 ms       | in 8.6 ms ± 2.059 ms               | in 11.8 ms ± 5.706 ms              |
| 256 B      | in 0.4 ms ± 0.49 ms    | null                          | in 6.6 ms ± 2.245 ms       | in 14 ms ± 2.608 ms                | in 9.8 ms ± 2.135 ms               |
| 512 B      | in 0.2 ms ± 0.4 ms     | null                          | in 9 ms ± 3.033 ms         | in 14.8 ms ± 1.72 ms               | in 13.8 ms ± 1.833 ms              |
| 1.024 kB   | in 0.8 ms ± 0.4 ms     | null                          | in 8.8 ms ± 1.72 ms        | in 27 ms ± 5.762 ms                | in 20 ms ± 1.673 ms                |
| 2.048 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 10.6 ms ± 1.96 ms       | in 37.2 ms ± 1.939 ms              | in 32 ms ± 1.549 ms                |
| 4.096 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 11 ms ± 0.894 ms        | in 68.2 ms ± 1.939 ms              | in 57.8 ms ± 0.4 ms                |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 18.2 ms ± 0.4 ms        | in 129.6 ms ± 6.651 ms             | in 110.8 ms ± 0.748 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 32 ms ± 0.632 ms        | in 244 ms ± 2.53 ms                | in 216.2 ms ± 1.327 ms             |
| 32.768 kB  | in 1.2 ms ± 0.4 ms     | null                          | in 60.2 ms ± 0.748 ms      | in 479.6 ms ± 2.577 ms             | in 428.6 ms ± 2.728 ms             |
| 65.536 kB  | in 1.6 ms ± 0.8 ms     | null                          | in 117.2 ms ± 0.4 ms       | in 950.2 ms ± 4.665 ms             | in 850.8 ms ± 0.98 ms              |
| 131.072 kB | in 2.8 ms ± 0.748 ms   | null                          | in 233.8 ms ± 2.926 ms     | in 1,927.2 ms ± 55.127 ms          | in 1,701.6 ms ± 6.8 ms             |
| 262.144 kB | in 5.6 ms ± 0.49 ms    | null                          | in 464.6 ms ± 3.72 ms      | in 3,761.8 ms ± 10.107 ms          | in 3,384.4 ms ± 3.72 ms            |
| 524.288 kB | in 8.4 ms ± 1.02 ms    | null                          | in 932.6 ms ± 13.425 ms    | in 7,542.2 ms ± 28.505 ms          | in 6,780.8 ms ± 24.433 ms          |
| 1.049 MB   | in 15.2 ms ± 0.98 ms   | null                          | in 1,818.8 ms ± 9.196 ms   | in 15,255.4 ms ± 116.986 ms        | in 13,517.2 ms ± 14.442 ms         |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 181 ms ± 83.566 ms      | in 7.8 ms ± 1.166 ms       | in 15.2 ms ± 0.748 ms      | in 243.6 ms ± 22.15 ms         | in 228 ms ± 8.672 ms           |
| 2 B        | in 10 ms ± 3.742 ms        | in 8.6 ms ± 0.8 ms         | in 19.4 ms ± 2.728 ms      | in 23.4 ms ± 4.499 ms          | in 21.6 ms ± 6.28 ms           |
| 4 B        | in 10.2 ms ± 2.135 ms      | in 8.6 ms ± 1.356 ms       | in 15.8 ms ± 2.04 ms       | in 22.8 ms ± 4.833 ms          | in 20 ms ± 2.449 ms            |
| 8 B        | in 10.6 ms ± 1.625 ms      | in 10.6 ms ± 1.02 ms       | in 28 ms ± 11.384 ms       | in 21.8 ms ± 3.97 ms           | in 22.4 ms ± 2.417 ms          |
| 16 B       | in 9.4 ms ± 1.497 ms       | in 8.2 ms ± 1.47 ms        | in 21.4 ms ± 8.868 ms      | in 22.6 ms ± 4.841 ms          | in 21.2 ms ± 4.622 ms          |
| 32 B       | in 8.4 ms ± 1.356 ms       | in 8.4 ms ± 1.356 ms       | in 29 ms ± 6.693 ms        | in 23.4 ms ± 4.317 ms          | in 23.2 ms ± 2.482 ms          |
| 64 B       | in 10.6 ms ± 2.332 ms      | in 11.8 ms ± 1.6 ms        | in 20.8 ms ± 4.833 ms      | in 24.8 ms ± 4.534 ms          | in 24.2 ms ± 2.926 ms          |
| 128 B      | in 11.8 ms ± 5.192 ms      | in 8.2 ms ± 0.98 ms        | in 23 ms ± 5.762 ms        | in 23.6 ms ± 3.137 ms          | in 22.4 ms ± 2.417 ms          |
| 256 B      | in 13 ms ± 7.457 ms        | in 9.6 ms ± 0.49 ms        | in 20.2 ms ± 5.913 ms      | in 34.8 ms ± 22.328 ms         | in 27 ms ± 3.162 ms            |
| 512 B      | in 10 ms ± 0.632 ms        | in 14 ms ± 4.05 ms         | in 26.8 ms ± 7.521 ms      | in 31.4 ms ± 4.587 ms          | in 29 ms ± 0.894 ms            |
| 1.024 kB   | in 12.4 ms ± 2.871 ms      | in 12.6 ms ± 1.497 ms      | in 31.2 ms ± 7.705 ms      | in 53.6 ms ± 19.683 ms         | in 39.2 ms ± 1.6 ms            |
| 2.048 kB   | in 15 ms ± 1.673 ms        | in 15.8 ms ± 1.72 ms       | in 33.4 ms ± 5.535 ms      | in 59.2 ms ± 1.72 ms           | in 55.2 ms ± 2.926 ms          |
| 4.096 kB   | in 26 ms ± 10.526 ms       | in 18.4 ms ± 1.02 ms       | in 41.8 ms ± 6.794 ms      | in 96.4 ms ± 7.228 ms          | in 87.2 ms ± 3.124 ms          |
| 8.192 kB   | in 29.2 ms ± 2.786 ms      | in 34.8 ms ± 9.261 ms      | in 70.6 ms ± 12.563 ms     | in 215.2 ms ± 81.891 ms        | in 158.8 ms ± 9.282 ms         |
| 16.384 kB  | in 51 ms ± 3.742 ms        | in 52.4 ms ± 3.878 ms      | in 117.2 ms ± 12.952 ms    | in 313.6 ms ± 7.813 ms         | in 290.2 ms ± 11.25 ms         |
| 32.768 kB  | in 90.4 ms ± 4.841 ms      | in 105.4 ms ± 19.335 ms    | in 227.2 ms ± 41.306 ms    | in 601.4 ms ± 12.769 ms        | in 558.8 ms ± 25.972 ms        |
| 65.536 kB  | in 193.2 ms ± 47.246 ms    | in 177 ms ± 2.898 ms       | in 335.8 ms ± 8.328 ms     | in 1,196.6 ms ± 77.358 ms      | in 1,086.2 ms ± 50.038 ms      |
| 131.072 kB | in 325.8 ms ± 12.27 ms     | in 335.4 ms ± 6.437 ms     | in 638.6 ms ± 6.02 ms      | in 2,292.2 ms ± 27.766 ms      | in 2,144.6 ms ± 94.954 ms      |
| 262.144 kB | in 618.2 ms ± 7.679 ms     | in 649.6 ms ± 10.442 ms    | in 1,217.2 ms ± 12.608 ms  | in 4,585.2 ms ± 70.949 ms      | in 4,251.8 ms ± 212.495 ms     |
| 524.288 kB | in 1,265 ms ± 65.742 ms    | in 1,262.8 ms ± 10.342 ms  | in 2,390.4 ms ± 77.425 ms  | in 9,390.2 ms ± 284.911 ms     | in 8,694 ms ± 333.839 ms       |
| 1.049 MB   | in 2,558.4 ms ± 164.847 ms | in 2,514.6 ms ± 20.616 ms  | in 4,964.4 ms ± 200.743 ms | in 18,298 ms ± 364.341 ms      | in 16,565.2 ms ± 584.126 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 97.2 ms ± 44.459 ms    | in 13.4 ms ± 1.625 ms      | in 21.2 ms ± 3.311 ms     | in 21.2 ms ± 2.786 ms          | in 21 ms ± 2.608 ms            |
| 2 B        | in 14.4 ms ± 11.038 ms    | in 11.6 ms ± 3.929 ms      | in 26.8 ms ± 12.057 ms    | in 19.4 ms ± 4.409 ms          | in 21.8 ms ± 3.544 ms          |
| 4 B        | in 16 ms ± 3.795 ms       | in 9.6 ms ± 3.611 ms       | in 20 ms ± 3.521 ms       | in 20.4 ms ± 3.2 ms            | in 21 ms ± 1.673 ms            |
| 8 B        | in 16.8 ms ± 6.306 ms     | in 11 ms ± 2.966 ms        | in 26.2 ms ± 12.27 ms     | in 18.4 ms ± 2.728 ms          | in 21 ms ± 1.789 ms            |
| 16 B       | in 16.2 ms ± 2.04 ms      | in 9.2 ms ± 2.786 ms       | in 19.8 ms ± 4.02 ms      | in 19.2 ms ± 3.544 ms          | in 19.2 ms ± 0.748 ms          |
| 32 B       | in 13.6 ms ± 3.007 ms     | in 9.8 ms ± 2.713 ms       | in 17.4 ms ± 4.409 ms     | in 20.6 ms ± 5.2 ms            | in 21.8 ms ± 1.327 ms          |
| 64 B       | in 13.8 ms ± 3.816 ms     | in 7.8 ms ± 1.939 ms       | in 18.4 ms ± 5.463 ms     | in 21.2 ms ± 2.04 ms           | in 19.4 ms ± 2.577 ms          |
| 128 B      | in 17.4 ms ± 6.28 ms      | in 8.6 ms ± 1.744 ms       | in 20.4 ms ± 3.72 ms      | in 23.4 ms ± 2.332 ms          | in 19.2 ms ± 2.315 ms          |
| 256 B      | in 11.8 ms ± 1.166 ms     | in 7.6 ms ± 2.417 ms       | in 20.4 ms ± 4.716 ms     | in 26 ms ± 4 ms                | in 23.8 ms ± 2.482 ms          |
| 512 B      | in 12.4 ms ± 2.332 ms     | in 9 ms ± 1.414 ms         | in 19.6 ms ± 3.007 ms     | in 29 ms ± 3.521 ms            | in 25 ms ± 3.578 ms            |
| 1.024 kB   | in 14.8 ms ± 3.311 ms     | in 9.6 ms ± 1.356 ms       | in 21.6 ms ± 1.497 ms     | in 34.6 ms ± 2.332 ms          | in 42.2 ms ± 15.171 ms         |
| 2.048 kB   | in 15.2 ms ± 1.939 ms     | in 14.8 ms ± 1.327 ms      | in 33.8 ms ± 9.196 ms     | in 56.6 ms ± 4.317 ms          | in 58.8 ms ± 14.414 ms         |
| 4.096 kB   | in 17.6 ms ± 3.611 ms     | in 17 ms ± 2.28 ms         | in 33.8 ms ± 2.786 ms     | in 86.6 ms ± 1.855 ms          | in 78.2 ms ± 4.49 ms           |
| 8.192 kB   | in 29.4 ms ± 4.03 ms      | in 26 ms ± 2.608 ms        | in 49.4 ms ± 3.878 ms     | in 152 ms ± 3.286 ms           | in 129.8 ms ± 4.02 ms          |
| 16.384 kB  | in 41.2 ms ± 3.544 ms     | in 40.8 ms ± 1.939 ms      | in 79.6 ms ± 9.769 ms     | in 275.2 ms ± 1.47 ms          | in 240.8 ms ± 3.709 ms         |
| 32.768 kB  | in 75.2 ms ± 11.957 ms    | in 74.4 ms ± 2.059 ms      | in 136.4 ms ± 2.577 ms    | in 536.6 ms ± 4.317 ms         | in 468 ms ± 16.661 ms          |
| 65.536 kB  | in 132.4 ms ± 1.625 ms    | in 134 ms ± 2.191 ms       | in 256 ms ± 3.847 ms      | in 1,065.8 ms ± 20.653 ms      | in 901.2 ms ± 9.108 ms         |
| 131.072 kB | in 263 ms ± 2.098 ms      | in 257.4 ms ± 3.555 ms     | in 491.6 ms ± 7.965 ms    | in 2,079.6 ms ± 21.068 ms      | in 1,776.6 ms ± 2.417 ms       |
| 262.144 kB | in 490.2 ms ± 20.605 ms   | in 500 ms ± 5.514 ms       | in 975 ms ± 31.061 ms     | in 4,089.4 ms ± 30.217 ms      | in 3,515.8 ms ± 13.703 ms      |
| 524.288 kB | in 946 ms ± 15.401 ms     | in 979.2 ms ± 7.782 ms     | in 1,863.6 ms ± 9.769 ms  | in 8,169.2 ms ± 57.471 ms      | in 6,985.8 ms ± 35.561 ms      |
| 1.049 MB   | in 1,968.8 ms ± 20.644 ms | in 2,080.2 ms ± 24.718 ms  | in 3,842.6 ms ± 38.161 ms | in 16,573.2 ms ± 154.685 ms    | in 14,213.4 ms ± 109.531 ms    |