# Webkit

## structuredClone (browser)

|            | hasTransferables     | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | -------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.4 ms ± 0.49 ms  | null                          | in 1.6 ms ± 1.2 ms         | in 2.4 ms ± 0.49 ms                | in 2.2 ms ± 0.4 ms                 |
| 2 B        | in 0.2 ms ± 0.4 ms   | null                          | in 1.2 ms ± 0.98 ms        | in 2 ms ± 0.894 ms                 | in 1.4 ms ± 0.8 ms                 |
| 4 B        | in 0.2 ms ± 0.4 ms   | null                          | in 0.2 ms ± 0.4 ms         | in 1.2 ms ± 0.98 ms                | in 1.2 ms ± 0.98 ms                |
| 8 B        | now ± now            | null                          | in 0.8 ms ± 1.166 ms       | in 1.2 ms ± 0.4 ms                 | in 1 second ± now                  |
| 16 B       | now ± now            | null                          | in 0.4 ms ± 0.49 ms        | in 1.6 ms ± 0.8 ms                 | in 1.4 ms ± 0.49 ms                |
| 32 B       | now ± now            | null                          | in 0.2 ms ± 0.4 ms         | in 7.4 ms ± 0.8 ms                 | in 1.4 ms ± 0.8 ms                 |
| 64 B       | in 0.6 ms ± 1.2 ms   | null                          | in 1 second ± 0.632 ms     | in 3.2 ms ± 0.98 ms                | in 2.2 ms ± 0.748 ms               |
| 128 B      | in 0.2 ms ± 0.4 ms   | null                          | in 0.8 ms ± 0.748 ms       | in 8.4 ms ± 1.96 ms                | in 4 ms ± 1.549 ms                 |
| 256 B      | in 0.2 ms ± 0.4 ms   | null                          | in 0.6 ms ± 0.49 ms        | in 6.4 ms ± 0.49 ms                | in 6.2 ms ± 1.166 ms               |
| 512 B      | in 0.4 ms ± 0.49 ms  | null                          | in 1.4 ms ± 1.02 ms        | in 13.2 ms ± 0.748 ms              | in 10.6 ms ± 0.8 ms                |
| 1.024 kB   | now ± now            | null                          | in 0.8 ms ± 0.4 ms         | in 22.2 ms ± 1.6 ms                | in 19.2 ms ± 0.4 ms                |
| 2.048 kB   | in 0.4 ms ± 0.49 ms  | null                          | in 1.6 ms ± 0.8 ms         | in 40 ms ± 1.789 ms                | in 37.2 ms ± 0.748 ms              |
| 4.096 kB   | in 0.2 ms ± 0.4 ms   | null                          | in 2.8 ms ± 0.4 ms         | in 79.6 ms ± 1.356 ms              | in 73.2 ms ± 1.327 ms              |
| 8.192 kB   | now ± now            | null                          | in 5.6 ms ± 0.49 ms        | in 157.8 ms ± 2.713 ms             | in 147.2 ms ± 1.166 ms             |
| 16.384 kB  | now ± now            | null                          | in 9.6 ms ± 0.49 ms        | in 298.4 ms ± 8.114 ms             | in 288.8 ms ± 3.487 ms             |
| 32.768 kB  | in 0.6 ms ± 0.8 ms   | null                          | in 18 ms ± 1.095 ms        | in 604 ms ± 10.936 ms              | in 584.8 ms ± 2.926 ms             |
| 65.536 kB  | in 1.2 ms ± 0.748 ms | null                          | in 35.6 ms ± 1.497 ms      | in 1,201 ms ± 29.36 ms             | in 1,161.2 ms ± 7.277 ms           |
| 131.072 kB | in 1.8 ms ± 0.4 ms   | null                          | in 68.6 ms ± 1.625 ms      | in 2,351.4 ms ± 17.27 ms           | in 2,321.4 ms ± 22.94 ms           |
| 262.144 kB | in 4.2 ms ± 0.748 ms | null                          | in 146.6 ms ± 6.974 ms     | in 4,755.4 ms ± 48.426 ms          | in 4,656.8 ms ± 23.172 ms          |
| 524.288 kB | in 7.6 ms ± 1.625 ms | null                          | in 282 ms ± 9.274 ms       | in 9,347.2 ms ± 48.824 ms          | in 9,263.2 ms ± 39.189 ms          |
| 1.049 MB   | in 16.6 ms ± 0.49 ms | null                          | in 534.8 ms ± 23.034 ms    | in 18,652 ms ± 49.425 ms           | in 18,543.2 ms ± 97.36 ms          |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 10.6 ms ± 4.964 ms      | in 4.8 ms ± 0.4 ms         | in 10 ms ± 4.69 ms         | in 15 ms ± 4.858 ms            | in 8.8 ms ± 1.327 ms           |
| 2 B        | in 5.8 ms ± 3.187 ms       | in 6.6 ms ± 3.382 ms       | in 5.4 ms ± 2.498 ms       | in 7 ms ± 1.414 ms             | in 7.4 ms ± 2.245 ms           |
| 4 B        | in 5.8 ms ± 2.482 ms       | in 5.2 ms ± 3.429 ms       | in 5.8 ms ± 2.482 ms       | in 10.2 ms ± 5.706 ms          | in 6.4 ms ± 1.497 ms           |
| 8 B        | in 4.8 ms ± 2.638 ms       | in 5.8 ms ± 2.786 ms       | in 6.2 ms ± 3.544 ms       | in 6 ms ± 0.894 ms             | in 8.4 ms ± 4.409 ms           |
| 16 B       | in 3.6 ms ± 0.49 ms        | in 4.8 ms ± 2.227 ms       | in 7 ms ± 5.329 ms         | in 8.8 ms ± 2.713 ms           | in 7 ms ± 1.673 ms             |
| 32 B       | in 4.8 ms ± 3.187 ms       | in 4.4 ms ± 1.02 ms        | in 6.2 ms ± 3.655 ms       | in 9.4 ms ± 3.007 ms           | in 6.2 ms ± 1.72 ms            |
| 64 B       | in 7.8 ms ± 3.187 ms       | in 5.2 ms ± 0.748 ms       | in 6 ms ± 3.521 ms         | in 11.8 ms ± 3.187 ms          | in 8.6 ms ± 2.8 ms             |
| 128 B      | in 6 ms ± 1.897 ms         | in 10 ms ± 9.099 ms        | in 5 ms ± 2.098 ms         | in 11.4 ms ± 1.744 ms          | in 16.6 ms ± 11.307 ms         |
| 256 B      | in 6.2 ms ± 0.98 ms        | in 5 ms ± 0.632 ms         | in 9.6 ms ± 3.611 ms       | in 18.8 ms ± 5.036 ms          | in 13.4 ms ± 1.356 ms          |
| 512 B      | in 6.2 ms ± 0.98 ms        | in 10 ms ± 6.387 ms        | in 11.4 ms ± 6.312 ms      | in 23.8 ms ± 3.97 ms           | in 19.2 ms ± 2.04 ms           |
| 1.024 kB   | in 6.6 ms ± 1.356 ms       | in 12.6 ms ± 7.003 ms      | in 11.4 ms ± 1.96 ms       | in 44.8 ms ± 8.976 ms          | in 35.2 ms ± 5.845 ms          |
| 2.048 kB   | in 10.4 ms ± 3.2 ms        | in 9.4 ms ± 2.059 ms       | in 15.4 ms ± 1.2 ms        | in 60.8 ms ± 2.786 ms          | in 54.4 ms ± 4.883 ms          |
| 4.096 kB   | in 18 ms ± 2.828 ms        | in 15.6 ms ± 2.332 ms      | in 24.2 ms ± 2.135 ms      | in 108.2 ms ± 3.187 ms         | in 110.8 ms ± 5.845 ms         |
| 8.192 kB   | in 27.2 ms ± 3.429 ms      | in 28.4 ms ± 5.535 ms      | in 42.8 ms ± 5.231 ms      | in 211.2 ms ± 6.765 ms         | in 201 ms ± 9.571 ms           |
| 16.384 kB  | in 47 ms ± 5.514 ms        | in 45.8 ms ± 2.482 ms      | in 78.6 ms ± 5.919 ms      | in 397 ms ± 18.665 ms          | in 373.8 ms ± 4.445 ms         |
| 32.768 kB  | in 88.4 ms ± 4.128 ms      | in 97 ms ± 4.427 ms        | in 162.2 ms ± 9.745 ms     | in 807 ms ± 40.846 ms          | in 765.4 ms ± 19.845 ms        |
| 65.536 kB  | in 194.2 ms ± 16.228 ms    | in 198.8 ms ± 10.591 ms    | in 333.6 ms ± 8.686 ms     | in 1,589 ms ± 72.117 ms        | in 1,518.6 ms ± 7.605 ms       |
| 131.072 kB | in 398.8 ms ± 32.689 ms    | in 405.4 ms ± 47.42 ms     | in 667 ms ± 9.381 ms       | in 3,154.8 ms ± 128.054 ms     | in 3,103.8 ms ± 14.105 ms      |
| 262.144 kB | in 816.6 ms ± 58.527 ms    | in 880.4 ms ± 60.497 ms    | in 1,631.6 ms ± 67.695 ms  | in 6,414.4 ms ± 239.94 ms      | in 6,410.6 ms ± 168.8 ms       |
| 524.288 kB | in 1,637.8 ms ± 107.162 ms | in 1,700.2 ms ± 125.904 ms | in 3,208.4 ms ± 126.539 ms | in 12,612.6 ms ± 350.924 ms    | in 12,664.8 ms ± 358.9 ms      |
| 1.049 MB   | in 3,386.8 ms ± 278.66 ms  | in 3,350.6 ms ± 233.653 ms | in 6,357.8 ms ± 241.604 ms | in 25,887.6 ms ± 558.322 ms    | in 25,076.8 ms ± 506.871 ms    |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19.6 ms ± 7.499 ms   | in 4.4 ms ± 2.332 ms       | in 5.4 ms ± 3.137 ms    | in 11.4 ms ± 4.079 ms          | in 12.2 ms ± 4.069 ms          |
| 2 B        | in 3.6 ms ± 2.245 ms    | in 1.8 ms ± 1.47 ms        | in 4 ms ± 1.897 ms      | in 7.6 ms ± 4.716 ms           | in 4.2 ms ± 1.166 ms           |
| 4 B        | in 1.4 ms ± 1.2 ms      | in 3.2 ms ± 2.315 ms       | in 4.6 ms ± 1.02 ms     | in 4 ms ± 2.191 ms             | in 4 ms ± 1.549 ms             |
| 8 B        | in 2.4 ms ± 1.02 ms     | in 7 ms ± 6.723 ms         | in 7 ms ± 2.098 ms      | in 4.6 ms ± 3.774 ms           | in 6.8 ms ± 3.311 ms           |
| 16 B       | in 2.4 ms ± 0.49 ms     | in 1.6 ms ± 1.02 ms        | in 5 ms ± 0.632 ms      | in 3.6 ms ± 2.245 ms           | in 4 ms ± 1.897 ms             |
| 32 B       | in 2.2 ms ± 1.166 ms    | in 3.8 ms ± 3.763 ms       | in 2.6 ms ± 1.96 ms     | in 5.6 ms ± 4.841 ms           | in 6.6 ms ± 3.774 ms           |
| 64 B       | in 5.2 ms ± 1.327 ms    | in 2.4 ms ± 0.8 ms         | in 5.4 ms ± 2.653 ms    | in 7.2 ms ± 2.713 ms           | in 7.6 ms ± 3.72 ms            |
| 128 B      | in 3 ms ± 2.098 ms      | in 3.4 ms ± 3.499 ms       | in 5.6 ms ± 3.2 ms      | in 10.2 ms ± 2.926 ms          | in 8.6 ms ± 3.611 ms           |
| 256 B      | in 2.4 ms ± 1.2 ms      | in 4.2 ms ± 2.4 ms         | in 5.4 ms ± 3.611 ms    | in 13.8 ms ± 4.308 ms          | in 11.4 ms ± 2.8 ms            |
| 512 B      | in 5 ms ± 5.06 ms       | in 3.8 ms ± 3.763 ms       | in 3.8 ms ± 1.833 ms    | in 21.8 ms ± 3.763 ms          | in 13.4 ms ± 1.2 ms            |
| 1.024 kB   | in 4.4 ms ± 2.577 ms    | in 6.4 ms ± 2.498 ms       | in 6.4 ms ± 3.007 ms    | in 31.2 ms ± 3.709 ms          | in 27.2 ms ± 2.926 ms          |
| 2.048 kB   | in 4 ms ± 1.095 ms      | in 5.6 ms ± 4.271 ms       | in 8 ms ± 3.578 ms      | in 53.6 ms ± 8.639 ms          | in 40.8 ms ± 1.327 ms          |
| 4.096 kB   | in 7.2 ms ± 1.72 ms     | in 6 ms ± 1.095 ms         | in 10 ms ± 3.847 ms     | in 92.4 ms ± 6.917 ms          | in 81.8 ms ± 4.534 ms          |
| 8.192 kB   | in 11.2 ms ± 0.98 ms    | in 8.2 ms ± 1.166 ms       | in 16.2 ms ± 4.261 ms   | in 188.2 ms ± 19.773 ms        | in 174.4 ms ± 9.091 ms         |
| 16.384 kB  | in 13.6 ms ± 0.49 ms    | in 17.4 ms ± 3.878 ms      | in 21.8 ms ± 2.926 ms   | in 326.8 ms ± 13.452 ms        | in 308 ms ± 11.541 ms          |
| 32.768 kB  | in 22.8 ms ± 3.487 ms   | in 28.4 ms ± 10.442 ms     | in 41 ms ± 6.841 ms     | in 629.2 ms ± 17.982 ms        | in 591.4 ms ± 7.144 ms         |
| 65.536 kB  | in 46.6 ms ± 4.8 ms     | in 50.6 ms ± 5.571 ms      | in 82.2 ms ± 3.868 ms   | in 1,226.2 ms ± 38.186 ms      | in 1,182.8 ms ± 31.044 ms      |
| 131.072 kB | in 94.6 ms ± 5.919 ms   | in 95.6 ms ± 8.237 ms      | in 155.4 ms ± 12.659 ms | in 2,426 ms ± 81.927 ms        | in 2,344.4 ms ± 66.467 ms      |
| 262.144 kB | in 181.8 ms ± 9.368 ms  | in 203 ms ± 19.95 ms       | in 316 ms ± 8.343 ms    | in 4,886.4 ms ± 130.866 ms     | in 4,716 ms ± 93.708 ms        |
| 524.288 kB | in 340.6 ms ± 14.221 ms | in 368.4 ms ± 23.905 ms    | in 633.6 ms ± 74.521 ms | in 9,682.6 ms ± 272.779 ms     | in 9,325.2 ms ± 195.874 ms     |
| 1.049 MB   | in 680.2 ms ± 43.888 ms | in 687.4 ms ± 19.356 ms    | in 1,243 ms ± 61.514 ms | in 19,482 ms ± 585.11 ms       | in 18,812.8 ms ± 401.309 ms    |

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms     | null                          | in 1 second ± 0.632 ms     | in 3.2 ms ± 1.6 ms                 | in 2 ms ± now                      |
| 2 B        | in 0.8 ms ± 0.4 ms     | null                          | in 1 second ± 1.095 ms     | in 1.8 ms ± 0.748 ms               | in 1.8 ms ± 0.748 ms               |
| 4 B        | now ± now              | null                          | in 1.2 ms ± 1.166 ms       | in 1.2 ms ± 0.748 ms               | in 1.2 ms ± 0.98 ms                |
| 8 B        | now ± now              | null                          | in 0.8 ms ± 0.748 ms       | in 1.6 ms ± 0.8 ms                 | in 1.2 ms ± 0.4 ms                 |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 1 second ± 0.632 ms     | in 2 ms ± 1.265 ms                 | in 3.8 ms ± 5.115 ms               |
| 32 B       | in 0.2 ms ± 0.4 ms     | null                          | in 0.8 ms ± 0.748 ms       | in 6.2 ms ± 1.72 ms                | in 1.4 ms ± 0.8 ms                 |
| 64 B       | in 1 second ± 1.549 ms | null                          | in 0.6 ms ± 0.8 ms         | in 3 ms ± 0.894 ms                 | in 2.2 ms ± 0.4 ms                 |
| 128 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1 second ± 0.632 ms     | in 8.8 ms ± 2.227 ms               | in 4.6 ms ± 1.497 ms               |
| 256 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1.4 ms ± 0.49 ms        | in 8.2 ms ± 2.482 ms               | in 6.2 ms ± 1.166 ms               |
| 512 B      | in 0.6 ms ± 0.8 ms     | null                          | in 1.6 ms ± 1.356 ms       | in 16.4 ms ± 3.137 ms              | in 11.2 ms ± 0.4 ms                |
| 1.024 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 1.4 ms ± 0.8 ms         | in 21.8 ms ± 0.748 ms              | in 18.6 ms ± 0.8 ms                |
| 2.048 kB   | now ± now              | null                          | in 2 ms ± 0.632 ms         | in 41.6 ms ± 2.417 ms              | in 36.8 ms ± 0.4 ms                |
| 4.096 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 2.8 ms ± 0.4 ms         | in 87 ms ± 5.586 ms                | in 71.4 ms ± 1.356 ms              |
| 8.192 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 6 ms ± now              | in 163.2 ms ± 1.47 ms              | in 140.6 ms ± 1.356 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 9.2 ms ± 0.748 ms       | in 298.2 ms ± 3.059 ms             | in 280.2 ms ± 2.638 ms             |
| 32.768 kB  | in 0.8 ms ± 0.748 ms   | null                          | in 18.6 ms ± 0.8 ms        | in 599.6 ms ± 6.248 ms             | in 564 ms ± 5.02 ms                |
| 65.536 kB  | in 1.8 ms ± 1.166 ms   | null                          | in 41.2 ms ± 10.496 ms     | in 1,192.2 ms ± 8.635 ms           | in 1,128.6 ms ± 11.092 ms          |
| 131.072 kB | in 1.4 ms ± 0.49 ms    | null                          | in 67.4 ms ± 1.625 ms      | in 2,381.2 ms ± 26.836 ms          | in 2,241.8 ms ± 20.024 ms          |
| 262.144 kB | in 4 ms ± 0.632 ms     | null                          | in 148.4 ms ± 5.643 ms     | in 4,755 ms ± 23.315 ms            | in 4,479.4 ms ± 29.743 ms          |
| 524.288 kB | in 7.8 ms ± 1.166 ms   | null                          | in 282.4 ms ± 14.235 ms    | in 9,228.8 ms ± 51.34 ms           | in 8,952 ms ± 51.923 ms            |
| 1.049 MB   | in 15.4 ms ± 2.245 ms  | null                          | in 551.8 ms ± 16.762 ms    | in 18,474 ms ± 163.274 ms          | in 17,808 ms ± 119.636 ms          |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 10.6 ms ± 3.2 ms        | in 4.8 ms ± 1.72 ms        | in 5.2 ms ± 1.327 ms       | in 15.6 ms ± 4.883 ms          | in 11 ms ± 2 ms                |
| 2 B        | in 3.8 ms ± 0.748 ms       | in 4 ms ± 1.549 ms         | in 6.2 ms ± 2.04 ms        | in 7.6 ms ± 2.059 ms           | in 6.4 ms ± 1.96 ms            |
| 4 B        | in 5 ms ± 2.683 ms         | in 4 ms ± 0.894 ms         | in 5 ms ± 1.095 ms         | in 9.8 ms ± 2.786 ms           | in 7.4 ms ± 2.417 ms           |
| 8 B        | in 6.6 ms ± 5.783 ms       | in 5.4 ms ± 2.059 ms       | in 6 ms ± 1.095 ms         | in 8.4 ms ± 2.059 ms           | in 7.8 ms ± 1.166 ms           |
| 16 B       | in 5 ms ± 0.894 ms         | in 5 ms ± 2.098 ms         | in 6.6 ms ± 2.154 ms       | in 6.6 ms ± 0.8 ms             | in 7.4 ms ± 3.007 ms           |
| 32 B       | in 4.2 ms ± 0.4 ms         | in 6.2 ms ± 2.315 ms       | in 6.2 ms ± 1.47 ms        | in 13.2 ms ± 7.167 ms          | in 9 ms ± 3.742 ms             |
| 64 B       | in 7 ms ± 1.549 ms         | in 6.2 ms ± 3.97 ms        | in 7.6 ms ± 2.245 ms       | in 11.2 ms ± 3.187 ms          | in 9.4 ms ± 1.855 ms           |
| 128 B      | in 6.4 ms ± 1.497 ms       | in 6 ms ± 1.897 ms         | in 8.4 ms ± 3.323 ms       | in 19.8 ms ± 10.833 ms         | in 13.2 ms ± 4.534 ms          |
| 256 B      | in 4.8 ms ± 0.4 ms         | in 5.4 ms ± 1.02 ms        | in 7.4 ms ± 1.02 ms        | in 13.2 ms ± 0.748 ms          | in 15.4 ms ± 5.535 ms          |
| 512 B      | in 15.4 ms ± 13.485 ms     | in 5.8 ms ± 1.166 ms       | in 11.4 ms ± 6.312 ms      | in 34.4 ms ± 10.131 ms         | in 20.2 ms ± 4.02 ms           |
| 1.024 kB   | in 8.2 ms ± 1.6 ms         | in 10.8 ms ± 8.134 ms      | in 10.4 ms ± 2.577 ms      | in 41 ms ± 5.099 ms            | in 46.8 ms ± 6.524 ms          |
| 2.048 kB   | in 11 ms ± 2.28 ms         | in 15 ms ± 10.658 ms       | in 17.2 ms ± 6.493 ms      | in 56.8 ms ± 1.939 ms          | in 55.8 ms ± 3.429 ms          |
| 4.096 kB   | in 18 ms ± 3.521 ms        | in 17.4 ms ± 2.871 ms      | in 22.6 ms ± 3.382 ms      | in 108.4 ms ± 3.499 ms         | in 104.2 ms ± 4.915 ms         |
| 8.192 kB   | in 35.2 ms ± 5.418 ms      | in 27.8 ms ± 3.655 ms      | in 45.2 ms ± 2.786 ms      | in 206.6 ms ± 4.317 ms         | in 202.6 ms ± 4.964 ms         |
| 16.384 kB  | in 51.6 ms ± 3.611 ms      | in 48.4 ms ± 4.758 ms      | in 80.2 ms ± 5.231 ms      | in 390.4 ms ± 6.499 ms         | in 369 ms ± 1.673 ms           |
| 32.768 kB  | in 88.6 ms ± 3.499 ms      | in 98.8 ms ± 5.154 ms      | in 170.2 ms ± 7.467 ms     | in 802.6 ms ± 8.499 ms         | in 760.6 ms ± 4.923 ms         |
| 65.536 kB  | in 182.8 ms ± 7.305 ms     | in 184.8 ms ± 12.56 ms     | in 332.6 ms ± 13.485 ms    | in 1,574.8 ms ± 21.349 ms      | in 1,521.4 ms ± 35.183 ms      |
| 131.072 kB | in 409.8 ms ± 29.674 ms    | in 378.2 ms ± 25.748 ms    | in 672.6 ms ± 24.105 ms    | in 3,123.2 ms ± 41.907 ms      | in 3,078.4 ms ± 56.986 ms      |
| 262.144 kB | in 863.2 ms ± 75.168 ms    | in 878.2 ms ± 64.515 ms    | in 1,667.6 ms ± 80.572 ms  | in 6,429.4 ms ± 119.066 ms     | in 6,294.4 ms ± 141.244 ms     |
| 524.288 kB | in 1,730 ms ± 160.946 ms   | in 1,708.6 ms ± 70.079 ms  | in 3,254.8 ms ± 167.091 ms | in 12,593.4 ms ± 329.476 ms    | in 12,618.4 ms ± 254.544 ms    |
| 1.049 MB   | in 3,397.6 ms ± 291.903 ms | in 3,447.4 ms ± 281.665 ms | in 6,537 ms ± 390.259 ms   | in 25,463.6 ms ± 381.336 ms    | in 24,575.4 ms ± 383.528 ms    |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 22.8 ms ± 4.534 ms   | in 3.2 ms ± 1.939 ms       | in 6.2 ms ± 2.227 ms      | in 14.2 ms ± 4.622 ms          | in 13.6 ms ± 2.871 ms          |
| 2 B        | in 4.8 ms ± 2.786 ms    | in 3.8 ms ± 2.926 ms       | in 3.4 ms ± 1.855 ms      | in 8.4 ms ± 4.079 ms           | in 5.6 ms ± 2.417 ms           |
| 4 B        | in 2 ms ± 1.265 ms      | in 3.2 ms ± 0.4 ms         | in 4.4 ms ± 5.044 ms      | in 7.6 ms ± 3.441 ms           | in 5.4 ms ± 2.059 ms           |
| 8 B        | in 4 ms ± 3.347 ms      | in 2.8 ms ± 0.98 ms        | in 4.2 ms ± 2.993 ms      | in 5.4 ms ± 1.2 ms             | in 6.2 ms ± 2.561 ms           |
| 16 B       | in 2.8 ms ± 0.748 ms    | in 2.4 ms ± 1.02 ms        | in 4 ms ± 2.53 ms         | in 5.2 ms ± 1.166 ms           | in 4.2 ms ± 1.327 ms           |
| 32 B       | in 2 ms ± 1.265 ms      | in 3.8 ms ± 1.939 ms       | in 3.6 ms ± 1.625 ms      | in 11.4 ms ± 9.972 ms          | in 6.4 ms ± 1.855 ms           |
| 64 B       | in 6 ms ± 2 ms          | in 2.6 ms ± 1.02 ms        | in 6.4 ms ± 5.161 ms      | in 7.8 ms ± 4.792 ms           | in 8.6 ms ± 3.072 ms           |
| 128 B      | in 3.4 ms ± 1.356 ms    | in 3 ms ± 0.632 ms         | in 4.6 ms ± 3.382 ms      | in 9.8 ms ± 1.72 ms            | in 8 ms ± 1.414 ms             |
| 256 B      | in 3 ms ± 1.095 ms      | in 4.6 ms ± 2.653 ms       | in 6.2 ms ± 3.544 ms      | in 14.8 ms ± 1.327 ms          | in 9.2 ms ± 1.327 ms           |
| 512 B      | in 8.6 ms ± 2.653 ms    | in 3 ms ± 0.632 ms         | in 4.6 ms ± 2.154 ms      | in 18.8 ms ± 2.926 ms          | in 16.2 ms ± 3.763 ms          |
| 1.024 kB   | in 4.4 ms ± 1.625 ms    | in 5 ms ± 3.578 ms         | in 7.6 ms ± 1.855 ms      | in 37.2 ms ± 14.648 ms         | in 30.2 ms ± 6.337 ms          |
| 2.048 kB   | in 5.4 ms ± 3.499 ms    | in 3.6 ms ± 0.49 ms        | in 7.2 ms ± 2.135 ms      | in 70.2 ms ± 35.329 ms         | in 52.4 ms ± 7.003 ms          |
| 4.096 kB   | in 9.6 ms ± 8.732 ms    | in 8.4 ms ± 3.441 ms       | in 8.8 ms ± 1.939 ms      | in 106 ms ± 26.351 ms          | in 78.6 ms ± 2.332 ms          |
| 8.192 kB   | in 11.2 ms ± 2.857 ms   | in 12.2 ms ± 3.6 ms        | in 15.8 ms ± 2.315 ms     | in 173.6 ms ± 3.499 ms         | in 179.8 ms ± 4.4 ms           |
| 16.384 kB  | in 16.4 ms ± 3.929 ms   | in 15 ms ± 3.286 ms        | in 24.2 ms ± 3.868 ms     | in 314.2 ms ± 7.679 ms         | in 308.8 ms ± 11.143 ms        |
| 32.768 kB  | in 23.6 ms ± 3.262 ms   | in 24.2 ms ± 3.487 ms      | in 39.4 ms ± 7.499 ms     | in 623 ms ± 19.131 ms          | in 592.4 ms ± 8.686 ms         |
| 65.536 kB  | in 45.4 ms ± 2.332 ms   | in 51.6 ms ± 6.151 ms      | in 81.2 ms ± 6.013 ms     | in 1,240 ms ± 37.068 ms        | in 1,185 ms ± 48.253 ms        |
| 131.072 kB | in 89.2 ms ± 6.274 ms   | in 94.4 ms ± 3.929 ms      | in 165 ms ± 7.772 ms      | in 2,439.4 ms ± 29.931 ms      | in 2,367.6 ms ± 76.009 ms      |
| 262.144 kB | in 181.6 ms ± 9.499 ms  | in 190.2 ms ± 15.955 ms    | in 312 ms ± 12.791 ms     | in 4,866.4 ms ± 112.178 ms     | in 4,667 ms ± 70.234 ms        |
| 524.288 kB | in 328.8 ms ± 16.928 ms | in 374.2 ms ± 29.762 ms    | in 608.4 ms ± 37.803 ms   | in 9,746.4 ms ± 109.248 ms     | in 9,376.6 ms ± 104.07 ms      |
| 1.049 MB   | in 755 ms ± 66.78 ms    | in 722.4 ms ± 56.726 ms    | in 1,272.6 ms ± 63.487 ms | in 19,145.8 ms ± 335.106 ms    | in 18,780.8 ms ± 304.167 ms    |

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | now ± now              | null                          | in 1.2 ms ± 0.98 ms        | in 1.6 ms ± 0.8 ms                 | in 1 second ± 1.095 ms             |
| 2 B        | now ± now              | null                          | in 0.8 ms ± 0.748 ms       | in 1.6 ms ± 0.8 ms                 | in 1.4 ms ± 1.02 ms                |
| 4 B        | in 0.2 ms ± 0.4 ms     | null                          | in 3.4 ms ± 4.841 ms       | in 1.4 ms ± 1.02 ms                | in 1 second ± 0.894 ms             |
| 8 B        | in 0.2 ms ± 0.4 ms     | null                          | in 1 second ± 0.894 ms     | in 2 ms ± 1.673 ms                 | in 1.2 ms ± 1.166 ms               |
| 16 B       | now ± now              | null                          | in 1.2 ms ± 0.748 ms       | in 1.6 ms ± 0.8 ms                 | in 1.6 ms ± 0.8 ms                 |
| 32 B       | now ± now              | null                          | in 0.6 ms ± 0.8 ms         | in 2 ms ± 2.608 ms                 | in 1 second ± 0.894 ms             |
| 64 B       | in 0.6 ms ± 1.2 ms     | null                          | in 1.2 ms ± 0.98 ms        | in 1.2 ms ± 0.4 ms                 | in 1 second ± 1.095 ms             |
| 128 B      | now ± now              | null                          | in 3.4 ms ± 4.03 ms        | in 3.6 ms ± 2.939 ms               | in 1.6 ms ± 1.2 ms                 |
| 256 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1.6 ms ± 1.356 ms       | in 3.4 ms ± 3.323 ms               | in 1.4 ms ± 0.49 ms                |
| 512 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1.2 ms ± 0.4 ms         | in 4 ms ± 2.53 ms                  | in 2.4 ms ± 0.8 ms                 |
| 1.024 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 1.4 ms ± 0.8 ms         | in 6.2 ms ± 1.939 ms               | in 4.8 ms ± 3.124 ms               |
| 2.048 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 1.8 ms ± 0.748 ms       | in 11.2 ms ± 1.939 ms              | in 6.4 ms ± 1.02 ms                |
| 4.096 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 3.8 ms ± 0.98 ms        | in 19.4 ms ± 1.96 ms               | in 11.6 ms ± 0.49 ms               |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 5.8 ms ± 0.748 ms       | in 35.6 ms ± 0.49 ms               | in 21.8 ms ± 0.748 ms              |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 10 ms ± now             | in 52.2 ms ± 1.833 ms              | in 42.2 ms ± 0.4 ms                |
| 32.768 kB  | in 1 second ± 0.632 ms | null                          | in 19 ms ± 2.608 ms        | in 102.6 ms ± 4.317 ms             | in 81 ms ± 2.191 ms                |
| 65.536 kB  | in 1 second ± now      | null                          | in 37 ms ± 1.095 ms        | in 200.4 ms ± 2.728 ms             | in 162.6 ms ± 5.886 ms             |
| 131.072 kB | in 2 ms ± 0.894 ms     | null                          | in 72.8 ms ± 3.187 ms      | in 406.4 ms ± 12.339 ms            | in 332 ms ± 6.542 ms               |
| 262.144 kB | in 4.2 ms ± 1.166 ms   | null                          | in 150.8 ms ± 6.969 ms     | in 824.8 ms ± 8.565 ms             | in 687 ms ± 6.164 ms               |
| 524.288 kB | in 11.2 ms ± 3.187 ms  | null                          | in 306.4 ms ± 3.441 ms     | in 1,545.8 ms ± 40.435 ms          | in 1,367.8 ms ± 21.056 ms          |
| 1.049 MB   | in 16 ms ± 3.033 ms    | null                          | in 579.6 ms ± 19.896 ms    | in 3,167.6 ms ± 342.603 ms         | in 2,681 ms ± 21.735 ms            |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 8.6 ms ± 4.176 ms    | in 4.2 ms ± 0.748 ms       | in 7 ms ± 2.28 ms         | in 13.2 ms ± 4.665 ms          | in 11.4 ms ± 3.007 ms          |
| 2 B        | in 2.8 ms ± 1.166 ms    | in 5 ms ± 5.02 ms          | in 5.4 ms ± 2.245 ms      | in 10.6 ms ± 4.499 ms          | in 5.2 ms ± 3.124 ms           |
| 4 B        | in 2.4 ms ± 1.497 ms    | in 2.6 ms ± 1.356 ms       | in 4 ms ± 4.29 ms         | in 9.6 ms ± 3.611 ms           | in 7.4 ms ± 5.276 ms           |
| 8 B        | in 5.8 ms ± 5.776 ms    | in 3 ms ± 2.53 ms          | in 3.2 ms ± 2.4 ms        | in 5.4 ms ± 2.8 ms             | in 5.2 ms ± 4.261 ms           |
| 16 B       | in 3.2 ms ± 1.47 ms     | in 5.8 ms ± 5.913 ms       | in 4 ms ± 1.789 ms        | in 6 ms ± 1.673 ms             | in 5.2 ms ± 2.638 ms           |
| 32 B       | in 6.8 ms ± 3.655 ms    | in 1.8 ms ± 1.6 ms         | in 5.2 ms ± 3.059 ms      | in 8.2 ms ± 2.227 ms           | in 7.2 ms ± 2.786 ms           |
| 64 B       | in 10.4 ms ± 5.713 ms   | in 2.8 ms ± 1.939 ms       | in 5 ms ± 1.673 ms        | in 10.2 ms ± 2.482 ms          | in 6 ms ± 3.286 ms             |
| 128 B      | in 4.8 ms ± 1.327 ms    | in 4.4 ms ± 2.871 ms       | in 5.4 ms ± 3.382 ms      | in 9.8 ms ± 2.135 ms           | in 9 ms ± 4.099 ms             |
| 256 B      | in 4.4 ms ± 1.02 ms     | in 3.8 ms ± 1.47 ms        | in 4.8 ms ± 1.166 ms      | in 8.6 ms ± 0.49 ms            | in 7 ms ± 1.414 ms             |
| 512 B      | in 3.6 ms ± 0.8 ms      | in 8.2 ms ± 4.167 ms       | in 5.4 ms ± 1.855 ms      | in 14.8 ms ± 5.344 ms          | in 11.2 ms ± 4.792 ms          |
| 1.024 kB   | in 4.2 ms ± 0.4 ms      | in 34.2 ms ± 52.48 ms      | in 8.4 ms ± 3.72 ms       | in 18.6 ms ± 4.716 ms          | in 10 ms ± 1.095 ms            |
| 2.048 kB   | in 7 ms ± 3.742 ms      | in 7.6 ms ± 2.417 ms       | in 10.6 ms ± 2.871 ms     | in 21.6 ms ± 4.543 ms          | in 15.2 ms ± 2.926 ms          |
| 4.096 kB   | in 8.2 ms ± 1.327 ms    | in 12.6 ms ± 5.713 ms      | in 12.6 ms ± 2.332 ms     | in 32 ms ± 5.55 ms             | in 24 ms ± 4.05 ms             |
| 8.192 kB   | in 18.8 ms ± 12.073 ms  | in 14.4 ms ± 4.079 ms      | in 18.4 ms ± 4.758 ms     | in 50.4 ms ± 4.8 ms            | in 38 ms ± 5.254 ms            |
| 16.384 kB  | in 17.6 ms ± 5.004 ms   | in 14.4 ms ± 3.137 ms      | in 25 ms ± 3.033 ms       | in 70 ms ± 3.742 ms            | in 56.4 ms ± 1.96 ms           |
| 32.768 kB  | in 22.4 ms ± 2.154 ms   | in 25.8 ms ± 6.242 ms      | in 43 ms ± 8 ms           | in 131.8 ms ± 4.445 ms         | in 116.2 ms ± 6.823 ms         |
| 65.536 kB  | in 50.2 ms ± 10.4 ms    | in 46.6 ms ± 4.454 ms      | in 79.8 ms ± 6.554 ms     | in 241 ms ± 5.514 ms           | in 205.4 ms ± 2.577 ms         |
| 131.072 kB | in 87.2 ms ± 10.303 ms  | in 85 ms ± 5.55 ms         | in 161.4 ms ± 20.165 ms   | in 495.2 ms ± 15.105 ms        | in 418.8 ms ± 13.526 ms        |
| 262.144 kB | in 192 ms ± 16.112 ms   | in 196.6 ms ± 7.579 ms     | in 306 ms ± 14.967 ms     | in 1,027 ms ± 29.031 ms        | in 905.2 ms ± 27.455 ms        |
| 524.288 kB | in 360 ms ± 16.358 ms   | in 369.8 ms ± 28.59 ms     | in 607.2 ms ± 16.105 ms   | in 2,070.6 ms ± 113.658 ms     | in 1,867.6 ms ± 102.416 ms     |
| 1.049 MB   | in 753.4 ms ± 52.709 ms | in 678 ms ± 27.174 ms      | in 1,154.8 ms ± 35.589 ms | in 3,955.2 ms ± 190.619 ms     | in 3,483.8 ms ± 81.637 ms      |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 24.2 ms ± 6.046 ms   | in 3.4 ms ± 1.497 ms       | in 4.2 ms ± 2.135 ms    | in 13.4 ms ± 6.02 ms           | in 12.2 ms ± 5.845 ms          |
| 2 B        | in 2.4 ms ± 0.8 ms      | in 4 ms ± 1.549 ms         | in 5.4 ms ± 1.96 ms     | in 8.8 ms ± 2.926 ms           | in 6.2 ms ± 4.578 ms           |
| 4 B        | in 2.4 ms ± 2.332 ms    | in 4.2 ms ± 2.926 ms       | in 4.4 ms ± 2.245 ms    | in 6.6 ms ± 1.744 ms           | in 4.2 ms ± 1.939 ms           |
| 8 B        | in 2.6 ms ± 1.02 ms     | in 4.4 ms ± 3.007 ms       | in 5.2 ms ± 2.561 ms    | in 7.8 ms ± 3.187 ms           | in 5.6 ms ± 3.929 ms           |
| 16 B       | in 2.2 ms ± 0.98 ms     | in 2.8 ms ± 0.98 ms        | in 4.6 ms ± 1.855 ms    | in 6.4 ms ± 2.498 ms           | in 6.6 ms ± 4.409 ms           |
| 32 B       | in 1.6 ms ± 1.2 ms      | in 2.6 ms ± 1.02 ms        | in 3.6 ms ± 1.855 ms    | in 9.6 ms ± 5.643 ms           | in 5 ms ± 1.789 ms             |
| 64 B       | in 4.2 ms ± 3.487 ms    | in 2.8 ms ± 1.6 ms         | in 3.8 ms ± 2.135 ms    | in 5.8 ms ± 2.227 ms           | in 5.2 ms ± 2.135 ms           |
| 128 B      | in 1.6 ms ± 0.8 ms      | in 4.4 ms ± 3.826 ms       | in 3.6 ms ± 2.154 ms    | in 11 ms ± 4.05 ms             | in 5.6 ms ± 1.744 ms           |
| 256 B      | in 5 ms ± 4.517 ms      | in 3.4 ms ± 1.625 ms       | in 3.8 ms ± 2.04 ms     | in 12.8 ms ± 1.72 ms           | in 10.4 ms ± 3.382 ms          |
| 512 B      | in 4.2 ms ± 5.036 ms    | in 2.8 ms ± 0.748 ms       | in 6 ms ± 4.382 ms      | in 13 ms ± 2.608 ms            | in 12.8 ms ± 7.25 ms           |
| 1.024 kB   | in 10.4 ms ± 3.878 ms   | in 5.2 ms ± 3.37 ms        | in 8.4 ms ± 5.004 ms    | in 26.2 ms ± 1.833 ms          | in 18 ms ± 8.718 ms            |
| 2.048 kB   | in 4.8 ms ± 0.4 ms      | in 6.4 ms ± 4.409 ms       | in 12.6 ms ± 7.499 ms   | in 36.8 ms ± 7.44 ms           | in 27.2 ms ± 5.192 ms          |
| 4.096 kB   | in 5.8 ms ± 1.72 ms     | in 9.2 ms ± 6.046 ms       | in 13 ms ± 2.757 ms     | in 59.2 ms ± 10.008 ms         | in 67.2 ms ± 47.985 ms         |
| 8.192 kB   | in 12.2 ms ± 1.939 ms   | in 10.4 ms ± 2.728 ms      | in 18.6 ms ± 3.382 ms   | in 108.8 ms ± 13.526 ms        | in 103.2 ms ± 6.369 ms         |
| 16.384 kB  | in 17.6 ms ± 3.262 ms   | in 15.2 ms ± 3.763 ms      | in 23.8 ms ± 0.98 ms    | in 162 ms ± 6.387 ms           | in 165.8 ms ± 4.02 ms          |
| 32.768 kB  | in 25.2 ms ± 1.47 ms    | in 22.8 ms ± 1.6 ms        | in 40.6 ms ± 3.007 ms   | in 339.4 ms ± 14.732 ms        | in 304.4 ms ± 8.212 ms         |
| 65.536 kB  | in 51 ms ± 7.43 ms      | in 46.6 ms ± 3.774 ms      | in 77.6 ms ± 3.007 ms   | in 628.8 ms ± 4.792 ms         | in 607.2 ms ± 16.702 ms        |
| 131.072 kB | in 95.4 ms ± 3.774 ms   | in 99.2 ms ± 7.467 ms      | in 144.8 ms ± 5.636 ms  | in 1,250.6 ms ± 25.017 ms      | in 1,190.6 ms ± 28.204 ms      |
| 262.144 kB | in 197 ms ± 8.741 ms    | in 200.6 ms ± 17.281 ms    | in 305.6 ms ± 9.851 ms  | in 2,495.8 ms ± 21.17 ms       | in 2,357 ms ± 44.699 ms        |
| 524.288 kB | in 355.2 ms ± 20.488 ms | in 367.6 ms ± 24.41 ms     | in 616.8 ms ± 40.578 ms | in 5,091.4 ms ± 90.301 ms      | in 4,874.6 ms ± 280.898 ms     |
| 1.049 MB   | in 762.8 ms ± 51.894 ms | in 689.4 ms ± 36.434 ms    | in 1,205 ms ± 60.382 ms | in 9,874.8 ms ± 225.236 ms     | in 9,760 ms ± 521.877 ms       |