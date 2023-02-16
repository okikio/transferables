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

## structuredClone (browser)

|            | hasTransferables     | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | -------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms   | null                          | in 0.8 ms ± 0.4 ms         | in 1.2 ms ± 0.4 ms                 | in 1 second ± 0.632 ms             |
| 2 B        | in 0.2 ms ± 0.4 ms   | null                          | in 1 second ± now          | in 1 second ± now                  | in 0.6 ms ± 0.49 ms                |
| 4 B        | now ± now            | null                          | in 0.8 ms ± 0.748 ms       | in 1 second ± 0.632 ms             | in 1 second ± 0.632 ms             |
| 8 B        | now ± now            | null                          | in 0.8 ms ± 0.748 ms       | in 1 second ± 0.632 ms             | in 0.8 ms ± 0.748 ms               |
| 16 B       | now ± now            | null                          | in 0.8 ms ± 0.748 ms       | in 1 second ± 0.632 ms             | in 1 second ± 0.632 ms             |
| 32 B       | now ± now            | null                          | in 0.4 ms ± 0.8 ms         | in 1 second ± 0.632 ms             | in 0.8 ms ± 0.4 ms                 |
| 64 B       | now ± now            | null                          | in 0.4 ms ± 0.8 ms         | in 1.2 ms ± 0.4 ms                 | in 0.8 ms ± 0.748 ms               |
| 128 B      | in 0.2 ms ± 0.4 ms   | null                          | in 2.2 ms ± 3.919 ms       | in 1.8 ms ± 1.166 ms               | in 1 second ± 0.894 ms             |
| 256 B      | now ± now            | null                          | in 0.8 ms ± 0.748 ms       | in 2.6 ms ± 0.8 ms                 | in 1.6 ms ± 0.8 ms                 |
| 512 B      | now ± now            | null                          | in 4.2 ms ± 5.913 ms       | in 3 ms ± 0.894 ms                 | in 1.8 ms ± 1.166 ms               |
| 1.024 kB   | now ± now            | null                          | in 0.6 ms ± 0.49 ms        | in 4.8 ms ± 0.4 ms                 | in 3 ms ± now                      |
| 2.048 kB   | now ± now            | null                          | in 1.2 ms ± 0.4 ms         | in 9.2 ms ± 0.98 ms                | in 6.2 ms ± 0.98 ms                |
| 4.096 kB   | in 0.4 ms ± 0.49 ms  | null                          | in 3 ms ± 0.894 ms         | in 20.6 ms ± 6.216 ms              | in 9.6 ms ± 0.49 ms                |
| 8.192 kB   | in 0.4 ms ± 0.49 ms  | null                          | in 4.4 ms ± 1.356 ms       | in 33.2 ms ± 0.748 ms              | in 18.4 ms ± 0.49 ms               |
| 16.384 kB  | now ± now            | null                          | in 9.2 ms ± 0.4 ms         | in 45.6 ms ± 1.625 ms              | in 36 ms ± 2.28 ms                 |
| 32.768 kB  | in 0.4 ms ± 0.8 ms   | null                          | in 15 ms ± 1.095 ms        | in 92.2 ms ± 3.429 ms              | in 67.8 ms ± 1.72 ms               |
| 65.536 kB  | in 0.8 ms ± 0.4 ms   | null                          | in 30.6 ms ± 1.02 ms       | in 181.6 ms ± 2.871 ms             | in 139.2 ms ± 8.681 ms             |
| 131.072 kB | in 2.2 ms ± 1.47 ms  | null                          | in 59.8 ms ± 4.02 ms       | in 362.2 ms ± 3.709 ms             | in 279.2 ms ± 6.177 ms             |
| 262.144 kB | in 2.6 ms ± 0.8 ms   | null                          | in 124.8 ms ± 7.277 ms     | in 727.2 ms ± 7.167 ms             | in 573 ms ± 9.654 ms               |
| 524.288 kB | in 7.2 ms ± 3.655 ms | null                          | in 242.4 ms ± 3.555 ms     | in 1,426.2 ms ± 64.722 ms          | in 1,133 ms ± 9.899 ms             |
| 1.049 MB   | in 13.8 ms ± 2.4 ms  | null                          | in 459.2 ms ± 20.923 ms    | in 2,803.4 ms ± 309.727 ms         | in 2,224.2 ms ± 27.404 ms          |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 6 ms ± 2.098 ms      | in 4 ms ± 0.894 ms         | in 7.6 ms ± 2.417 ms    | in 6.6 ms ± 1.855 ms           | in 7.8 ms ± 2.786 ms           |
| 2 B        | in 5.2 ms ± 3.187 ms    | in 3 ms ± 1.673 ms         | in 3.4 ms ± 1.356 ms    | in 5.2 ms ± 2.227 ms           | in 6.2 ms ± 3.544 ms           |
| 4 B        | in 3.2 ms ± 1.6 ms      | in 5.8 ms ± 4.956 ms       | in 4.4 ms ± 1.855 ms    | in 3 ms ± 0.894 ms             | in 9.2 ms ± 5.528 ms           |
| 8 B        | in 3.2 ms ± 1.47 ms     | in 3.6 ms ± 3.774 ms       | in 3.2 ms ± 1.166 ms    | in 2.4 ms ± 1.02 ms            | in 5.6 ms ± 1.855 ms           |
| 16 B       | in 2.6 ms ± 1.356 ms    | in 3 ms ± 1.673 ms         | in 6 ms ± 4.336 ms      | in 4.8 ms ± 3.187 ms           | in 6.4 ms ± 3.137 ms           |
| 32 B       | in 3 ms ± 1.265 ms      | in 4.8 ms ± 5.706 ms       | in 6.6 ms ± 3.137 ms    | in 10.4 ms ± 3.262 ms          | in 6 ms ± 2.098 ms             |
| 64 B       | in 4.6 ms ± 2.728 ms    | in 5.2 ms ± 2.561 ms       | in 4.4 ms ± 1.02 ms     | in 7.4 ms ± 2.417 ms           | in 6.4 ms ± 1.356 ms           |
| 128 B      | in 4.4 ms ± 1.02 ms     | in 5.8 ms ± 4.118 ms       | in 8.2 ms ± 3.763 ms    | in 6.4 ms ± 2.653 ms           | in 10 ms ± 2.366 ms            |
| 256 B      | in 4.2 ms ± 2.993 ms    | in 3 ms ± 0.632 ms         | in 5 ms ± 1.549 ms      | in 9.2 ms ± 1.939 ms           | in 8.4 ms ± 3.611 ms           |
| 512 B      | in 3.2 ms ± 1.6 ms      | in 3.4 ms ± 1.625 ms       | in 6.2 ms ± 0.4 ms      | in 8.2 ms ± 3.37 ms            | in 6.8 ms ± 2.135 ms           |
| 1.024 kB   | in 9.4 ms ± 7.172 ms    | in 6 ms ± 3.347 ms         | in 6.8 ms ± 0.4 ms      | in 13.6 ms ± 2.332 ms          | in 8.4 ms ± 1.855 ms           |
| 2.048 kB   | in 6 ms ± 1.789 ms      | in 11.4 ms ± 8.593 ms      | in 8.8 ms ± 2.135 ms    | in 18.8 ms ± 1.939 ms          | in 11.6 ms ± 1.96 ms           |
| 4.096 kB   | in 10.4 ms ± 5.571 ms   | in 7.2 ms ± 3.124 ms       | in 12.2 ms ± 4.02 ms    | in 27.6 ms ± 7.889 ms          | in 18.2 ms ± 3.311 ms          |
| 8.192 kB   | in 10.4 ms ± 4.841 ms   | in 10.2 ms ± 2.786 ms      | in 13.6 ms ± 0.8 ms     | in 43.4 ms ± 7.552 ms          | in 35.6 ms ± 7.632 ms          |
| 16.384 kB  | in 12.4 ms ± 2.059 ms   | in 18 ms ± 5.477 ms        | in 21.8 ms ± 2.4 ms     | in 59.2 ms ± 4.622 ms          | in 50.8 ms ± 5.036 ms          |
| 32.768 kB  | in 25 ms ± 4.561 ms     | in 22.2 ms ± 3.25 ms       | in 38.4 ms ± 13.321 ms  | in 115.4 ms ± 3.007 ms         | in 97.8 ms ± 4.49 ms           |
| 65.536 kB  | in 45.2 ms ± 18.016 ms  | in 39.4 ms ± 5.678 ms      | in 66.6 ms ± 5.463 ms   | in 218.8 ms ± 7.574 ms         | in 179.2 ms ± 5.307 ms         |
| 131.072 kB | in 73 ms ± 8.319 ms     | in 70 ms ± 4.817 ms        | in 120.8 ms ± 4.261 ms  | in 425 ms ± 16.285 ms          | in 344.4 ms ± 16.645 ms        |
| 262.144 kB | in 152.4 ms ± 3.611 ms  | in 148.8 ms ± 9.02 ms      | in 244.6 ms ± 6.053 ms  | in 893.2 ms ± 30.281 ms        | in 759.8 ms ± 16.582 ms        |
| 524.288 kB | in 278 ms ± 13.342 ms   | in 277.4 ms ± 19.127 ms    | in 472.6 ms ± 19.643 ms | in 1,792.2 ms ± 66.059 ms      | in 1,565.6 ms ± 51.071 ms      |
| 1.049 MB   | in 578.2 ms ± 31.511 ms | in 536.4 ms ± 23.652 ms    | in 903.2 ms ± 35.578 ms | in 3,476.4 ms ± 195.041 ms     | in 2,983.2 ms ± 205.644 ms     |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 24.2 ms ± 2.857 ms   | in 3.2 ms ± 0.748 ms       | in 3 ms ± 2 ms          | in 11 ms ± 2.098 ms            | in 13.8 ms ± 1.327 ms          |
| 2 B        | in 3.8 ms ± 2.638 ms    | in 2.6 ms ± 0.8 ms         | in 5 ms ± 3.162 ms      | in 6.6 ms ± 3.774 ms           | in 5.2 ms ± 2.713 ms           |
| 4 B        | in 5 ms ± 3.033 ms      | in 4.6 ms ± 2.245 ms       | in 3 ms ± 0.894 ms      | in 5.6 ms ± 3.611 ms           | in 4.2 ms ± 2.482 ms           |
| 8 B        | in 3 ms ± 1.265 ms      | in 3.6 ms ± 2.245 ms       | in 3.6 ms ± 1.356 ms    | in 4.2 ms ± 1.166 ms           | in 5.2 ms ± 2.786 ms           |
| 16 B       | in 5.4 ms ± 3.555 ms    | in 3.6 ms ± 2.245 ms       | in 3.2 ms ± 1.6 ms      | in 5 ms ± 3.098 ms             | in 3.2 ms ± 1.47 ms            |
| 32 B       | in 3.2 ms ± 2.04 ms     | in 3 ms ± 0.632 ms         | in 3.6 ms ± 2.154 ms    | in 5.6 ms ± 2.8 ms             | in 3 ms ± 0.894 ms             |
| 64 B       | in 2.8 ms ± 0.748 ms    | in 2.6 ms ± 0.49 ms        | in 3.6 ms ± 2.154 ms    | in 7.4 ms ± 2.417 ms           | in 2.4 ms ± 0.49 ms            |
| 128 B      | in 3 ms ± 1.549 ms      | in 2.8 ms ± 0.4 ms         | in 3.6 ms ± 2.154 ms    | in 6.2 ms ± 1.72 ms            | in 4.8 ms ± 2.227 ms           |
| 256 B      | in 2.2 ms ± 0.748 ms    | in 4 ms ± 3.033 ms         | in 3.8 ms ± 1.939 ms    | in 10 ms ± 2.608 ms            | in 6.8 ms ± 4.622 ms           |
| 512 B      | in 2.8 ms ± 0.748 ms    | in 2.8 ms ± 0.4 ms         | in 3.6 ms ± 2.154 ms    | in 10 ms ± 2.828 ms            | in 7.2 ms ± 1.327 ms           |
| 1.024 kB   | in 8 ms ± 4.147 ms      | in 3.8 ms ± 0.748 ms       | in 5.4 ms ± 2.577 ms    | in 19 ms ± 4.98 ms             | in 12.2 ms ± 1.72 ms           |
| 2.048 kB   | in 6.6 ms ± 4.841 ms    | in 4.8 ms ± 0.98 ms        | in 5.2 ms ± 1.939 ms    | in 31.4 ms ± 4.841 ms          | in 19.8 ms ± 2.561 ms          |
| 4.096 kB   | in 4.2 ms ± 1.166 ms    | in 7 ms ± 3.521 ms         | in 9.2 ms ± 3.311 ms    | in 45.4 ms ± 4.587 ms          | in 35.6 ms ± 4.587 ms          |
| 8.192 kB   | in 10 ms ± 2.828 ms     | in 7.6 ms ± 1.625 ms       | in 11 ms ± 1.673 ms     | in 80.2 ms ± 3.124 ms          | in 73.6 ms ± 3.072 ms          |
| 16.384 kB  | in 13.2 ms ± 2.135 ms   | in 16.6 ms ± 4.883 ms      | in 19.4 ms ± 2.577 ms   | in 137.6 ms ± 5.161 ms         | in 131.6 ms ± 5.535 ms         |
| 32.768 kB  | in 20.2 ms ± 2.4 ms     | in 20.6 ms ± 3.878 ms      | in 34.2 ms ± 5.913 ms   | in 286.2 ms ± 4.956 ms         | in 256.6 ms ± 9.972 ms         |
| 65.536 kB  | in 53.4 ms ± 28.133 ms  | in 35.6 ms ± 1.855 ms      | in 70.4 ms ± 13.063 ms  | in 530.2 ms ± 11.356 ms        | in 488.2 ms ± 14.932 ms        |
| 131.072 kB | in 72.6 ms ± 2.653 ms   | in 73.2 ms ± 4.167 ms      | in 123.8 ms ± 6.046 ms  | in 1,075 ms ± 24.306 ms        | in 979.8 ms ± 32.388 ms        |
| 262.144 kB | in 152.4 ms ± 10.307 ms | in 148.6 ms ± 7.864 ms     | in 253 ms ± 11.916 ms   | in 2,078 ms ± 34.831 ms        | in 1,956.2 ms ± 47.562 ms      |
| 524.288 kB | in 279 ms ± 22.334 ms   | in 285.8 ms ± 13.644 ms    | in 473.8 ms ± 21.461 ms | in 4,266.6 ms ± 129.056 ms     | in 3,845.4 ms ± 77.466 ms      |
| 1.049 MB   | in 573.6 ms ± 22.114 ms | in 524.8 ms ± 25.443 ms    | in 944 ms ± 54.402 ms   | in 8,147.4 ms ± 186.916 ms     | in 7,792.6 ms ± 524.073 ms     |

## structuredClone (browser)

|            | hasTransferables     | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | -------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms   | null                          | in 0.6 ms ± 0.49 ms        | in 1.6 ms ± 1.2 ms                 | in 1.2 ms ± 0.98 ms                |
| 2 B        | in 0.2 ms ± 0.4 ms   | null                          | in 1 second ± now          | in 1.2 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 4 B        | now ± now            | null                          | in 0.6 ms ± 0.8 ms         | in 0.4 ms ± 0.8 ms                 | in 0.6 ms ± 0.8 ms                 |
| 8 B        | in 0.2 ms ± 0.4 ms   | null                          | in 0.6 ms ± 0.49 ms        | in 1.2 ms ± 0.98 ms                | in 1 second ± 0.632 ms             |
| 16 B       | in 0.2 ms ± 0.4 ms   | null                          | in 0.8 ms ± 0.748 ms       | in 1 second ± 0.632 ms             | in 3.4 ms ± 5.817 ms               |
| 32 B       | now ± now            | null                          | in 0.8 ms ± 0.748 ms       | in 1.2 ms ± 0.98 ms                | in 1 second ± 1.095 ms             |
| 64 B       | now ± now            | null                          | in 0.6 ms ± 0.8 ms         | in 1.6 ms ± 0.8 ms                 | in 1.6 ms ± 0.8 ms                 |
| 128 B      | now ± now            | null                          | in 0.6 ms ± 0.8 ms         | in 2 ms ± 0.894 ms                 | in 1.2 ms ± 0.98 ms                |
| 256 B      | in 0.2 ms ± 0.4 ms   | null                          | in 0.4 ms ± 0.8 ms         | in 3.2 ms ± 1.939 ms               | in 1.6 ms ± 0.8 ms                 |
| 512 B      | in 0.2 ms ± 0.4 ms   | null                          | in 1.2 ms ± 0.4 ms         | in 3.4 ms ± 0.8 ms                 | in 4.4 ms ± 4.317 ms               |
| 1.024 kB   | now ± now            | null                          | in 1.2 ms ± 0.4 ms         | in 11.2 ms ± 4.707 ms              | in 6 ms ± 5.514 ms                 |
| 2.048 kB   | now ± now            | null                          | in 1.8 ms ± 1.166 ms       | in 12.8 ms ± 2.315 ms              | in 6.6 ms ± 1.02 ms                |
| 4.096 kB   | now ± now            | null                          | in 3.8 ms ± 0.748 ms       | in 21.8 ms ± 0.98 ms               | in 12 ms ± 0.632 ms                |
| 8.192 kB   | in 0.2 ms ± 0.4 ms   | null                          | in 6.6 ms ± 1.02 ms        | in 38.8 ms ± 3.544 ms              | in 21.8 ms ± 1.166 ms              |
| 16.384 kB  | in 0.2 ms ± 0.4 ms   | null                          | in 11.8 ms ± 2.4 ms        | in 58 ms ± 3.033 ms                | in 43.2 ms ± 2.315 ms              |
| 32.768 kB  | in 0.6 ms ± 0.49 ms  | null                          | in 22.8 ms ± 2.713 ms      | in 121.2 ms ± 3.311 ms             | in 88.8 ms ± 2.926 ms              |
| 65.536 kB  | in 1.2 ms ± 0.4 ms   | null                          | in 42.2 ms ± 1.72 ms       | in 231.6 ms ± 11.271 ms            | in 174.6 ms ± 6.468 ms             |
| 131.072 kB | in 2.8 ms ± 0.748 ms | null                          | in 78.2 ms ± 4.118 ms      | in 463.4 ms ± 16.255 ms            | in 356.8 ms ± 10.98 ms             |
| 262.144 kB | in 5 ms ± now        | null                          | in 160.4 ms ± 8.261 ms     | in 908 ms ± 36.639 ms              | in 707.6 ms ± 19.795 ms            |
| 524.288 kB | in 8.8 ms ± 1.939 ms | null                          | in 318.2 ms ± 9.432 ms     | in 1,775.6 ms ± 62.87 ms           | in 1,427.8 ms ± 39.746 ms          |
| 1.049 MB   | in 20 ms ± 0.632 ms  | null                          | in 636.6 ms ± 21.823 ms    | in 3,286.8 ms ± 59.196 ms          | in 2,744.4 ms ± 67.45 ms           |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 8.4 ms ± 3.2 ms      | in 4 ms ± 3.521 ms         | in 4.4 ms ± 3.499 ms       | in 13.6 ms ± 3.137 ms          | in 13.8 ms ± 2.227 ms          |
| 2 B        | in 5.8 ms ± 2.482 ms    | in 1.6 ms ± 1.2 ms         | in 4 ms ± 2.757 ms         | in 7.6 ms ± 3.2 ms             | in 11.4 ms ± 4.587 ms          |
| 4 B        | in 5 ms ± 2.28 ms       | in 4.8 ms ± 6.21 ms        | in 2 ms ± 1.095 ms         | in 8.6 ms ± 6.651 ms           | in 8 ms ± 2.898 ms             |
| 8 B        | in 5.8 ms ± 3.059 ms    | in 2.4 ms ± 1.96 ms        | in 3.4 ms ± 3.323 ms       | in 5.8 ms ± 2.227 ms           | in 11.2 ms ± 4.707 ms          |
| 16 B       | in 5.6 ms ± 3.666 ms    | in 15.8 ms ± 24.774 ms     | in 4.6 ms ± 3.072 ms       | in 7.8 ms ± 5.115 ms           | in 9.4 ms ± 6.468 ms           |
| 32 B       | in 3.6 ms ± 1.356 ms    | in 4.2 ms ± 3.544 ms       | in 4.8 ms ± 3.25 ms        | in 10.8 ms ± 3.709 ms          | in 9 ms ± 4 ms                 |
| 64 B       | in 3.6 ms ± 1.855 ms    | in 4.4 ms ± 2.577 ms       | in 7.2 ms ± 5.269 ms       | in 7.4 ms ± 1.625 ms           | in 9 ms ± 3.286 ms             |
| 128 B      | in 10 ms ± 9.033 ms     | in 6.4 ms ± 6.437 ms       | in 7.4 ms ± 3.929 ms       | in 19.2 ms ± 5.154 ms          | in 10 ms ± 4.195 ms            |
| 256 B      | in 3.8 ms ± 0.748 ms    | in 5.4 ms ± 2.059 ms       | in 8.2 ms ± 5.741 ms       | in 18 ms ± 5.099 ms            | in 14.2 ms ± 4.534 ms          |
| 512 B      | in 8 ms ± 3.225 ms      | in 6 ms ± 2.757 ms         | in 7.6 ms ± 3.826 ms       | in 22.8 ms ± 5.845 ms          | in 23.4 ms ± 10.892 ms         |
| 1.024 kB   | in 7.8 ms ± 2.482 ms    | in 7.4 ms ± 5.083 ms       | in 8.4 ms ± 3.611 ms       | in 30.4 ms ± 4.317 ms          | in 23 ms ± 5.762 ms            |
| 2.048 kB   | in 11.4 ms ± 1.497 ms   | in 9.2 ms ± 4.167 ms       | in 10 ms ± 3.162 ms        | in 41.8 ms ± 4.445 ms          | in 39 ms ± 4.98 ms             |
| 4.096 kB   | in 10.2 ms ± 3.97 ms    | in 12.4 ms ± 3.98 ms       | in 16.4 ms ± 4.673 ms      | in 74.8 ms ± 1.939 ms          | in 66 ms ± 6.512 ms            |
| 8.192 kB   | in 13.2 ms ± 3.655 ms   | in 15.8 ms ± 9.196 ms      | in 19.8 ms ± 3.37 ms       | in 138 ms ± 11.713 ms          | in 111.6 ms ± 9.436 ms         |
| 16.384 kB  | in 20.4 ms ± 5.987 ms   | in 18 ms ± 3.286 ms        | in 29.6 ms ± 5.352 ms      | in 218.6 ms ± 10.744 ms        | in 207.2 ms ± 7.026 ms         |
| 32.768 kB  | in 26.2 ms ± 2.857 ms   | in 27.2 ms ± 2.4 ms        | in 44.6 ms ± 5.238 ms      | in 438.8 ms ± 25.67 ms         | in 400.6 ms ± 19.926 ms        |
| 65.536 kB  | in 46.8 ms ± 3.919 ms   | in 62.2 ms ± 8.704 ms      | in 88 ms ± 7.127 ms        | in 850.2 ms ± 37.934 ms        | in 788.6 ms ± 25.951 ms        |
| 131.072 kB | in 102.8 ms ± 9.064 ms  | in 98.6 ms ± 9.002 ms      | in 168.2 ms ± 11.652 ms    | in 1,699.4 ms ± 59.261 ms      | in 1,594.8 ms ± 42.291 ms      |
| 262.144 kB | in 214 ms ± 20.08 ms    | in 208.2 ms ± 23.928 ms    | in 337.8 ms ± 20.183 ms    | in 3,452 ms ± 133.217 ms       | in 3,220.2 ms ± 157.076 ms     |
| 524.288 kB | in 380.4 ms ± 24.889 ms | in 400.4 ms ± 37.5 ms      | in 682.4 ms ± 35.624 ms    | in 6,799.4 ms ± 251.832 ms     | in 6,363.8 ms ± 143.882 ms     |
| 1.049 MB   | in 847 ms ± 83.711 ms   | in 750 ms ± 59.957 ms      | in 1,308.6 ms ± 113.833 ms | in 13,307.2 ms ± 664.018 ms    | in 12,481.4 ms ± 378.511 ms    |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 27.6 ms ± 4.176 ms   | in 6.2 ms ± 2.786 ms       | in 7 ms ± 3.742 ms        | in 14.2 ms ± 0.98 ms           | in 14 ms ± 4.517 ms            |
| 2 B        | in 2.2 ms ± 0.748 ms    | in 6.6 ms ± 6.28 ms        | in 6.2 ms ± 2.135 ms      | in 8 ms ± 3.406 ms             | in 7.4 ms ± 3.499 ms           |
| 4 B        | in 1.8 ms ± 1.166 ms    | in 5 ms ± 2.608 ms         | in 7.6 ms ± 5.276 ms      | in 7 ms ± 4.147 ms             | in 4.2 ms ± 1.166 ms           |
| 8 B        | in 1.4 ms ± 0.49 ms     | in 3.4 ms ± 1.625 ms       | in 4 ms ± 2.191 ms        | in 6.4 ms ± 2.059 ms           | in 5.4 ms ± 2.059 ms           |
| 16 B       | in 2 ms ± 1.265 ms      | in 2.6 ms ± 1.02 ms        | in 3.8 ms ± 1.939 ms      | in 6.4 ms ± 1.855 ms           | in 9.4 ms ± 6.02 ms            |
| 32 B       | in 1.6 ms ± 2.245 ms    | in 2.2 ms ± 1.327 ms       | in 5.4 ms ± 2.653 ms      | in 6.8 ms ± 2.993 ms           | in 4.4 ms ± 1.855 ms           |
| 64 B       | in 6 ms ± 3.464 ms      | in 3.6 ms ± 1.356 ms       | in 6 ms ± 1.265 ms        | in 9 ms ± 3.633 ms             | in 6 ms ± 2.191 ms             |
| 128 B      | in 4.4 ms ± 2.417 ms    | in 4.4 ms ± 1.497 ms       | in 5 ms ± 2.449 ms        | in 8.6 ms ± 3.262 ms           | in 5.6 ms ± 1.744 ms           |
| 256 B      | in 2.8 ms ± 1.833 ms    | in 4.4 ms ± 2.871 ms       | in 6.2 ms ± 1.72 ms       | in 13.6 ms ± 2.332 ms          | in 6.2 ms ± 1.47 ms            |
| 512 B      | in 2.2 ms ± 1.6 ms      | in 3.6 ms ± 1.2 ms         | in 8.2 ms ± 5.528 ms      | in 14.6 ms ± 4.224 ms          | in 15 ms ± 4.858 ms            |
| 1.024 kB   | in 9.4 ms ± 4.841 ms    | in 5.2 ms ± 2.4 ms         | in 7.4 ms ± 2.332 ms      | in 21.6 ms ± 3.323 ms          | in 15.6 ms ± 1.855 ms          |
| 2.048 kB   | in 6.4 ms ± 3.007 ms    | in 5.4 ms ± 1.96 ms        | in 8 ms ± 3.521 ms        | in 37.8 ms ± 7.414 ms          | in 29.6 ms ± 4.03 ms           |
| 4.096 kB   | in 9.4 ms ± 2.577 ms    | in 9.8 ms ± 5.671 ms       | in 9.8 ms ± 2.4 ms        | in 64 ms ± 8.718 ms            | in 46.6 ms ± 1.96 ms           |
| 8.192 kB   | in 11.6 ms ± 2.871 ms   | in 12.2 ms ± 3.544 ms      | in 21.6 ms ± 4.499 ms     | in 116.2 ms ± 11.053 ms        | in 91.2 ms ± 3.97 ms           |
| 16.384 kB  | in 17.8 ms ± 5.269 ms   | in 16 ms ± 4.733 ms        | in 24.6 ms ± 4.079 ms     | in 189 ms ± 3.795 ms           | in 192.4 ms ± 5.886 ms         |
| 32.768 kB  | in 24.4 ms ± 3.323 ms   | in 26.2 ms ± 4.534 ms      | in 47.8 ms ± 4.874 ms     | in 374.2 ms ± 4.214 ms         | in 339.4 ms ± 19.345 ms        |
| 65.536 kB  | in 48.6 ms ± 5.713 ms   | in 58.4 ms ± 11.808 ms     | in 88.6 ms ± 3.072 ms     | in 714.8 ms ± 26.301 ms        | in 693.2 ms ± 32.474 ms        |
| 131.072 kB | in 113.8 ms ± 19.198 ms | in 102.4 ms ± 8.777 ms     | in 178.4 ms ± 18.554 ms   | in 1,405.6 ms ± 49.106 ms      | in 1,374.2 ms ± 71.726 ms      |
| 262.144 kB | in 205 ms ± 9.274 ms    | in 228.6 ms ± 42.401 ms    | in 330 ms ± 20.11 ms      | in 2,879 ms ± 79.463 ms        | in 2,655.2 ms ± 100.73 ms      |
| 524.288 kB | in 382.2 ms ± 11.268 ms | in 396.2 ms ± 27.491 ms    | in 670.2 ms ± 26.202 ms   | in 5,751.8 ms ± 109.635 ms     | in 5,294.6 ms ± 125.763 ms     |
| 1.049 MB   | in 776 ms ± 60.614 ms   | in 735 ms ± 21.982 ms      | in 1,325.6 ms ± 55.529 ms | in 11,583.6 ms ± 375.153 ms    | in 10,712.4 ms ± 283.302 ms    |

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.4 ms ± 0.49 ms    | null                          | in 1.2 ms ± 0.98 ms        | in 2 ms ± 1.265 ms                 | in 1.6 ms ± 0.8 ms                 |
| 2 B        | now ± now              | null                          | in 2 ms ± 1.673 ms         | in 2.2 ms ± 1.166 ms               | in 1.4 ms ± 1.02 ms                |
| 4 B        | now ± now              | null                          | in 1 second ± 1.549 ms     | in 1.4 ms ± 1.497 ms               | in 1.2 ms ± 1.47 ms                |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 1 second ± 1.095 ms     | in 1.4 ms ± 0.8 ms                 | in 1.2 ms ± 0.98 ms                |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 0.6 ms ± 1.2 ms         | in 2 ms ± 1.265 ms                 | in 4.6 ms ± 8.212 ms               |
| 32 B       | now ± now              | null                          | in 1.2 ms ± 1.166 ms       | in 1.4 ms ± 0.8 ms                 | in 1.4 ms ± 1.356 ms               |
| 64 B       | now ± now              | null                          | in 1 second ± 1.095 ms     | in 2 ms ± 1.095 ms                 | in 1.6 ms ± 0.8 ms                 |
| 128 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1.2 ms ± 0.98 ms        | in 3.4 ms ± 3.007 ms               | in 1.6 ms ± 1.2 ms                 |
| 256 B      | in 0.2 ms ± 0.4 ms     | null                          | in 1 second ± 1.095 ms     | in 3 ms ± 1.095 ms                 | in 2 ms ± 1.095 ms                 |
| 512 B      | in 2.6 ms ± 4.716 ms   | null                          | in 1.2 ms ± 1.47 ms        | in 8 ms ± 4.195 ms                 | in 7.2 ms ± 6.765 ms               |
| 1.024 kB   | in 1 second ± 1.549 ms | null                          | in 1.4 ms ± 0.49 ms        | in 7.4 ms ± 2.332 ms               | in 4.2 ms ± 0.4 ms                 |
| 2.048 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 1.6 ms ± 0.49 ms        | in 13.4 ms ± 2.332 ms              | in 7.6 ms ± 1.625 ms               |
| 4.096 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 3.4 ms ± 0.8 ms         | in 24.6 ms ± 2.059 ms              | in 13.2 ms ± 0.98 ms               |
| 8.192 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 6.8 ms ± 0.98 ms        | in 42.2 ms ± 2.227 ms              | in 24.4 ms ± 1.855 ms              |
| 16.384 kB  | now ± now              | null                          | in 12 ms ± 0.632 ms        | in 67.8 ms ± 5.115 ms              | in 48.6 ms ± 2.728 ms              |
| 32.768 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 23.2 ms ± 2.926 ms      | in 131 ms ± 5.06 ms                | in 98 ms ± 7.616 ms                |
| 65.536 kB  | in 2 ms ± 2 ms         | null                          | in 42.6 ms ± 5.463 ms      | in 251 ms ± 5.215 ms               | in 184.6 ms ± 2.059 ms             |
| 131.072 kB | in 2.8 ms ± 0.4 ms     | null                          | in 80.6 ms ± 0.8 ms        | in 505 ms ± 11.367 ms              | in 389.2 ms ± 3.763 ms             |
| 262.144 kB | in 4 ms ± 0.894 ms     | null                          | in 156.4 ms ± 3.72 ms      | in 960 ms ± 35.197 ms              | in 764.8 ms ± 14.006 ms            |
| 524.288 kB | in 8.8 ms ± 0.4 ms     | null                          | in 323.4 ms ± 12.468 ms    | in 1,879.8 ms ± 38.065 ms          | in 1,515.2 ms ± 13.891 ms          |
| 1.049 MB   | in 23.4 ms ± 6.651 ms  | null                          | in 610.4 ms ± 16.5 ms      | in 3,654.4 ms ± 53.421 ms          | in 2,964.2 ms ± 14.945 ms          |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 8.6 ms ± 3.262 ms    | in 6.4 ms ± 1.744 ms       | in 10.8 ms ± 3.311 ms      | in 18.8 ms ± 5.492 ms          | in 14.8 ms ± 8.085 ms          |
| 2 B        | in 5.4 ms ± 3.382 ms    | in 3.6 ms ± 1.96 ms        | in 6 ms ± 2.191 ms         | in 7.2 ms ± 2.315 ms           | in 9.8 ms ± 3.37 ms            |
| 4 B        | in 5.2 ms ± 1.939 ms    | in 7.2 ms ± 7.194 ms       | in 7.2 ms ± 2.786 ms       | in 8 ms ± 3.464 ms             | in 8.4 ms ± 3.262 ms           |
| 8 B        | in 12.6 ms ± 14.486 ms  | in 4.2 ms ± 2.04 ms        | in 5.8 ms ± 3.37 ms        | in 9.8 ms ± 3.655 ms           | in 8.2 ms ± 2.786 ms           |
| 16 B       | in 6.2 ms ± 3.25 ms     | in 4.2 ms ± 2.638 ms       | in 10.2 ms ± 3.429 ms      | in 8 ms ± 1.549 ms             | in 8 ms ± 3.521 ms             |
| 32 B       | in 10.4 ms ± 7.419 ms   | in 6.6 ms ± 3.72 ms        | in 8 ms ± 1.673 ms         | in 11.6 ms ± 2.939 ms          | in 8.4 ms ± 1.356 ms           |
| 64 B       | in 7.4 ms ± 1.625 ms    | in 7.6 ms ± 7.031 ms       | in 8 ms ± 1.265 ms         | in 10.4 ms ± 2.417 ms          | in 10.6 ms ± 2.728 ms          |
| 128 B      | in 6.8 ms ± 0.98 ms     | in 4 ms ± 2.449 ms         | in 10.4 ms ± 4.454 ms      | in 25.2 ms ± 19.009 ms         | in 10 ms ± 3.347 ms            |
| 256 B      | in 5.6 ms ± 1.356 ms    | in 4.6 ms ± 2.245 ms       | in 10.2 ms ± 2.482 ms      | in 15.4 ms ± 4.841 ms          | in 9.4 ms ± 1.02 ms            |
| 512 B      | in 8.6 ms ± 2.728 ms    | in 4.6 ms ± 1.855 ms       | in 9.8 ms ± 2.227 ms       | in 15.6 ms ± 3.72 ms           | in 20 ms ± 7.127 ms            |
| 1.024 kB   | in 8.6 ms ± 1.356 ms    | in 6.4 ms ± 2.653 ms       | in 9.2 ms ± 1.166 ms       | in 20.8 ms ± 4.354 ms          | in 13.4 ms ± 1.02 ms           |
| 2.048 kB   | in 7.6 ms ± 0.8 ms      | in 10.4 ms ± 5.083 ms      | in 12.6 ms ± 2.059 ms      | in 23.4 ms ± 3.878 ms          | in 17.2 ms ± 1.72 ms           |
| 4.096 kB   | in 10.6 ms ± 2.939 ms   | in 17.2 ms ± 5.636 ms      | in 19.2 ms ± 8.658 ms      | in 40.4 ms ± 6.312 ms          | in 28.8 ms ± 4.4 ms            |
| 8.192 kB   | in 13.2 ms ± 3.187 ms   | in 20.6 ms ± 5.886 ms      | in 17.2 ms ± 1.327 ms      | in 63.2 ms ± 7.44 ms           | in 40.4 ms ± 2.154 ms          |
| 16.384 kB  | in 16.6 ms ± 1.2 ms     | in 18.8 ms ± 2.4 ms        | in 29.2 ms ± 4.214 ms      | in 80.2 ms ± 3.124 ms          | in 69.6 ms ± 3.72 ms           |
| 32.768 kB  | in 31.4 ms ± 5.851 ms   | in 35 ms ± 9.94 ms         | in 51.6 ms ± 7.526 ms      | in 153 ms ± 4.733 ms           | in 121.8 ms ± 5.307 ms         |
| 65.536 kB  | in 47.8 ms ± 5.418 ms   | in 55.8 ms ± 4.534 ms      | in 87 ms ± 15.232 ms       | in 288.2 ms ± 7.467 ms         | in 233.8 ms ± 9.786 ms         |
| 131.072 kB | in 99.4 ms ± 3.382 ms   | in 100.4 ms ± 4.079 ms     | in 157.4 ms ± 4.271 ms     | in 597 ms ± 17.355 ms          | in 464.6 ms ± 15.628 ms        |
| 262.144 kB | in 187.2 ms ± 11.338 ms | in 201.6 ms ± 13.588 ms    | in 314.4 ms ± 18.747 ms    | in 1,229.6 ms ± 38.645 ms      | in 971.2 ms ± 26.392 ms        |
| 524.288 kB | in 358.6 ms ± 9.708 ms  | in 366.2 ms ± 16.03 ms     | in 633.6 ms ± 36.593 ms    | in 2,368.8 ms ± 80.156 ms      | in 1,989 ms ± 103.178 ms       |
| 1.049 MB   | in 764.4 ms ± 39.576 ms | in 700.6 ms ± 35.206 ms    | in 1,328.8 ms ± 175.321 ms | in 4,809 ms ± 353.005 ms       | in 3,865 ms ± 291.884 ms       |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 35.8 ms ± 9.064 ms   | in 3.8 ms ± 1.939 ms       | in 6 ms ± 1.789 ms        | in 17.8 ms ± 5.706 ms          | in 10.4 ms ± 3.826 ms          |
| 2 B        | in 5.6 ms ± 0.49 ms     | in 3.6 ms ± 1.96 ms        | in 6.8 ms ± 2.926 ms      | in 10.4 ms ± 5.678 ms          | in 5.6 ms ± 2.728 ms           |
| 4 B        | in 3.8 ms ± 1.327 ms    | in 5 ms ± 3.162 ms         | in 5.2 ms ± 2.713 ms      | in 7 ms ± 2.966 ms             | in 5 ms ± 2.757 ms             |
| 8 B        | in 4.2 ms ± 1.327 ms    | in 5.2 ms ± 2.993 ms       | in 5.4 ms ± 3.007 ms      | in 8.8 ms ± 2.713 ms           | in 5.8 ms ± 2.561 ms           |
| 16 B       | in 6.2 ms ± 5.564 ms    | in 5.4 ms ± 6.888 ms       | in 7.8 ms ± 7.026 ms      | in 8 ms ± 2.28 ms              | in 4.2 ms ± 2.04 ms            |
| 32 B       | in 3.8 ms ± 2.482 ms    | in 2.6 ms ± 1.497 ms       | in 3.4 ms ± 2.245 ms      | in 6.6 ms ± 3.007 ms           | in 5.6 ms ± 3.137 ms           |
| 64 B       | in 8.2 ms ± 6.177 ms    | in 3 ms ± 1.095 ms         | in 4.4 ms ± 2.8 ms        | in 8 ms ± 4.69 ms              | in 6.8 ms ± 3.655 ms           |
| 128 B      | in 6.4 ms ± 2.577 ms    | in 4 ms ± 4.099 ms         | in 4.2 ms ± 2.227 ms      | in 7.6 ms ± 2.577 ms           | in 8.4 ms ± 4.317 ms           |
| 256 B      | in 3.6 ms ± 1.855 ms    | in 9.4 ms ± 12.355 ms      | in 7.2 ms ± 4.707 ms      | in 14.4 ms ± 3.929 ms          | in 13.2 ms ± 9.108 ms          |
| 512 B      | in 3.4 ms ± 2.332 ms    | in 5.2 ms ± 1.72 ms        | in 7 ms ± 3.633 ms        | in 18.2 ms ± 3.25 ms           | in 18 ms ± 5.692 ms            |
| 1.024 kB   | in 16.6 ms ± 10.594 ms  | in 5.8 ms ± 2.227 ms       | in 11.2 ms ± 5.269 ms     | in 30.6 ms ± 6.344 ms          | in 21.2 ms ± 3.868 ms          |
| 2.048 kB   | in 9.2 ms ± 3.37 ms     | in 5.8 ms ± 1.6 ms         | in 6.2 ms ± 2.135 ms      | in 44.2 ms ± 7.494 ms          | in 27.4 ms ± 3.382 ms          |
| 4.096 kB   | in 10 ms ± 3.406 ms     | in 10.2 ms ± 4.707 ms      | in 14.6 ms ± 5.004 ms     | in 64.6 ms ± 5.851 ms          | in 49.4 ms ± 5.886 ms          |
| 8.192 kB   | in 14.4 ms ± 5.044 ms   | in 10.2 ms ± 2.135 ms      | in 17 ms ± 1.897 ms       | in 128.8 ms ± 7.909 ms         | in 94.2 ms ± 9.516 ms          |
| 16.384 kB  | in 20.8 ms ± 8.75 ms    | in 17.2 ms ± 5.154 ms      | in 26 ms ± 1.789 ms       | in 211.6 ms ± 16.28 ms         | in 185.4 ms ± 11.2 ms          |
| 32.768 kB  | in 27.4 ms ± 5.004 ms   | in 24.4 ms ± 3.441 ms      | in 48.8 ms ± 7.808 ms     | in 407.6 ms ± 18.139 ms        | in 344.6 ms ± 11.395 ms        |
| 65.536 kB  | in 49.6 ms ± 4.499 ms   | in 47.8 ms ± 4.833 ms      | in 82.8 ms ± 3.487 ms     | in 769.4 ms ± 32.153 ms        | in 711.4 ms ± 24.614 ms        |
| 131.072 kB | in 103.4 ms ± 8.429 ms  | in 106.6 ms ± 16.62 ms     | in 171.6 ms ± 9.972 ms    | in 1,518.8 ms ± 47.831 ms      | in 1,380.6 ms ± 50.17 ms       |
| 262.144 kB | in 206 ms ± 10.257 ms   | in 218.6 ms ± 19.033 ms    | in 330.6 ms ± 25.445 ms   | in 3,006.4 ms ± 80.104 ms      | in 2,763.4 ms ± 102.814 ms     |
| 524.288 kB | in 364.4 ms ± 14.894 ms | in 377.6 ms ± 27.84 ms     | in 649.2 ms ± 51.023 ms   | in 5,982.8 ms ± 88.271 ms      | in 5,450 ms ± 126.493 ms       |
| 1.049 MB   | in 760.4 ms ± 45.955 ms | in 734.4 ms ± 71.118 ms    | in 1,223.4 ms ± 55.175 ms | in 11,709.8 ms ± 412.234 ms    | in 11,185.4 ms ± 549.362 ms    |

## structuredClone (browser)

|            | hasTransferables    | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.6 ms ± 0.49 ms | null                          | in 0.4 ms ± 0.49 ms        | in 1.4 ms ± 0.8 ms                 | in 1.2 ms ± 0.748 ms               |
| 2 B        | now ± now           | null                          | in 0.6 ms ± 0.49 ms        | in 0.6 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                |
| 4 B        | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 8 B        | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 16 B       | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 0.8 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                |
| 32 B       | now ± now           | null                          | in 0.6 ms ± 0.49 ms        | in 0.6 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                |
| 64 B       | now ± now           | null                          | in 1.6 ms ± 3.2 ms         | in 0.8 ms ± 0.4 ms                 | in 0.4 ms ± 0.49 ms                |
| 128 B      | in 0.2 ms ± 0.4 ms  | null                          | in 0.8 ms ± 0.748 ms       | in 1.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.8 ms                 |
| 256 B      | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 1.4 ms ± 0.49 ms                | in 1.2 ms ± 0.4 ms                 |
| 512 B      | in 0.2 ms ± 0.4 ms  | null                          | in 0.8 ms ± 0.748 ms       | in 2.6 ms ± 1.356 ms               | in 2 ms ± 0.632 ms                 |
| 1.024 kB   | in 0.2 ms ± 0.4 ms  | null                          | in 1.2 ms ± 0.4 ms         | in 3.2 ms ± 0.4 ms                 | in 2.2 ms ± 0.4 ms                 |
| 2.048 kB   | now ± now           | null                          | in 1.4 ms ± 0.49 ms        | in 6.4 ms ± 1.855 ms               | in 7.2 ms ± 4.956 ms               |
| 4.096 kB   | in 0.2 ms ± 0.4 ms  | null                          | in 3.2 ms ± 0.748 ms       | in 13.4 ms ± 4.841 ms              | in 9.2 ms ± 1.166 ms               |
| 8.192 kB   | now ± now           | null                          | in 5 ms ± 0.894 ms         | in 20.4 ms ± 1.02 ms               | in 16.8 ms ± 0.748 ms              |
| 16.384 kB  | now ± now           | null                          | in 11.2 ms ± 5.492 ms      | in 39.8 ms ± 0.98 ms               | in 32 ms ± 0.632 ms                |
| 32.768 kB  | now ± now           | null                          | in 15.8 ms ± 1.72 ms       | in 78.2 ms ± 1.72 ms               | in 63.2 ms ± 0.98 ms               |
| 65.536 kB  | now ± now           | null                          | in 28.8 ms ± 1.166 ms      | in 154.6 ms ± 5.238 ms             | in 127 ms ± 1.414 ms               |
| 131.072 kB | in 0.2 ms ± 0.4 ms  | null                          | in 59.6 ms ± 1.02 ms       | in 306.8 ms ± 3.709 ms             | in 258 ms ± 3.033 ms               |
| 262.144 kB | now ± now           | null                          | in 121 ms ± 2.757 ms       | in 610.6 ms ± 4.673 ms             | in 511.6 ms ± 3.007 ms             |
| 524.288 kB | now ± now           | null                          | in 244.6 ms ± 11.182 ms    | in 1,214.4 ms ± 8.686 ms           | in 1,011.6 ms ± 9.478 ms           |
| 1.049 MB   | now ± now           | null                          | in 454.4 ms ± 10.781 ms    | in 2,385.2 ms ± 31.745 ms          | in 1,988.2 ms ± 13.045 ms          |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 6.4 ms ± 5.817 ms    | in 5.2 ms ± 3.187 ms       | in 8.6 ms ± 3.929 ms    | in 14.8 ms ± 4.707 ms          | in 8 ms ± 3.742 ms             |
| 2 B        | in 4.8 ms ± 2.482 ms    | in 2.8 ms ± 1.47 ms        | in 6.4 ms ± 1.02 ms     | in 5.2 ms ± 1.833 ms           | in 4.4 ms ± 1.2 ms             |
| 4 B        | in 3.6 ms ± 2.417 ms    | in 2.8 ms ± 1.72 ms        | in 5 ms ± 2 ms          | in 6.4 ms ± 1.625 ms           | in 4.4 ms ± 1.744 ms           |
| 8 B        | in 3.4 ms ± 2.577 ms    | in 7.6 ms ± 4.758 ms       | in 7.2 ms ± 2.4 ms      | in 5.8 ms ± 0.748 ms           | in 4.6 ms ± 1.855 ms           |
| 16 B       | in 3.6 ms ± 1.96 ms     | in 3.4 ms ± 1.2 ms         | in 6.4 ms ± 1.356 ms    | in 6 ms ± 1.095 ms             | in 6 ms ± 2.898 ms             |
| 32 B       | in 2.4 ms ± 1.02 ms     | in 2.6 ms ± 1.356 ms       | in 6.4 ms ± 3.611 ms    | in 6.2 ms ± 0.748 ms           | in 4.6 ms ± 1.96 ms            |
| 64 B       | in 4 ms ± 1.897 ms      | in 4 ms ± 1.265 ms         | in 4.6 ms ± 1.356 ms    | in 8.8 ms ± 2.04 ms            | in 6.4 ms ± 1.02 ms            |
| 128 B      | in 3.8 ms ± 3.25 ms     | in 5.2 ms ± 6.013 ms       | in 5 ms ± 1.549 ms      | in 6.4 ms ± 0.49 ms            | in 7.4 ms ± 4.079 ms           |
| 256 B      | in 2.2 ms ± 0.748 ms    | in 6.6 ms ± 8.261 ms       | in 5.2 ms ± 1.6 ms      | in 6.6 ms ± 0.8 ms             | in 6.8 ms ± 2.561 ms           |
| 512 B      | in 3 ms ± 0.632 ms      | in 3.4 ms ± 1.744 ms       | in 7 ms ± 1.549 ms      | in 7.8 ms ± 0.4 ms             | in 7.4 ms ± 2.417 ms           |
| 1.024 kB   | in 4.4 ms ± 2.417 ms    | in 4.4 ms ± 1.356 ms       | in 6.2 ms ± 1.6 ms      | in 9.6 ms ± 0.8 ms             | in 8 ms ± 1.673 ms             |
| 2.048 kB   | in 9.4 ms ± 5.004 ms    | in 5 ms ± 1.789 ms         | in 9.2 ms ± 2.482 ms    | in 12.2 ms ± 0.748 ms          | in 13.8 ms ± 2.04 ms           |
| 4.096 kB   | in 7.6 ms ± 1.625 ms    | in 8.2 ms ± 2.04 ms        | in 9.8 ms ± 1.939 ms    | in 19.2 ms ± 1.72 ms           | in 18.8 ms ± 2.482 ms          |
| 8.192 kB   | in 10.6 ms ± 3.774 ms   | in 9.6 ms ± 1.744 ms       | in 16 ms ± 2.53 ms      | in 32.8 ms ± 7.111 ms          | in 26.4 ms ± 1.02 ms           |
| 16.384 kB  | in 13.6 ms ± 2.577 ms   | in 13.6 ms ± 1.855 ms      | in 19.4 ms ± 0.49 ms    | in 59.4 ms ± 3.826 ms          | in 47 ms ± 2.608 ms            |
| 32.768 kB  | in 21.6 ms ± 4.409 ms   | in 19.4 ms ± 0.8 ms        | in 33 ms ± 1.265 ms     | in 103 ms ± 8.649 ms           | in 87 ms ± 5.621 ms            |
| 65.536 kB  | in 34.4 ms ± 1.855 ms   | in 40.4 ms ± 7.116 ms      | in 64 ms ± 5.514 ms     | in 190.2 ms ± 3.655 ms         | in 162.6 ms ± 2.417 ms         |
| 131.072 kB | in 68 ms ± 7.014 ms     | in 72.8 ms ± 7.782 ms      | in 122.8 ms ± 17.429 ms | in 382.6 ms ± 12.452 ms        | in 321.2 ms ± 4.874 ms         |
| 262.144 kB | in 155 ms ± 2.366 ms    | in 150.2 ms ± 10.245 ms    | in 254.2 ms ± 11.303 ms | in 812.2 ms ± 20.4 ms          | in 678.4 ms ± 33.392 ms        |
| 524.288 kB | in 284.2 ms ± 12.828 ms | in 283.8 ms ± 12.139 ms    | in 484.2 ms ± 11.889 ms | in 1,636.4 ms ± 71.545 ms      | in 1,405.4 ms ± 58.219 ms      |
| 1.049 MB   | in 595.6 ms ± 52.599 ms | in 545.8 ms ± 30.347 ms    | in 914 ms ± 37.507 ms   | in 3,009 ms ± 31.718 ms        | in 2,774 ms ± 75.323 ms        |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19 ms ± 3.899 ms     | in 3.6 ms ± 0.8 ms         | in 4.6 ms ± 2.728 ms    | in 12.8 ms ± 1.327 ms          | in 13.4 ms ± 1.855 ms          |
| 2 B        | in 4.2 ms ± 2.04 ms     | in 2 ms ± 1.414 ms         | in 4.4 ms ± 1.356 ms    | in 6 ms ± 1.789 ms             | in 4.4 ms ± 3.499 ms           |
| 4 B        | in 1.6 ms ± 0.8 ms      | in 2.2 ms ± 1.72 ms        | in 4.2 ms ± 3.187 ms    | in 3.8 ms ± 2.482 ms           | in 5 ms ± 2.53 ms              |
| 8 B        | in 3.2 ms ± 2.227 ms    | in 2.8 ms ± 1.939 ms       | in 3.8 ms ± 1.47 ms     | in 4.4 ms ± 2.059 ms           | in 6.4 ms ± 3.382 ms           |
| 16 B       | in 2.6 ms ± 1.356 ms    | in 3 ms ± 1.414 ms         | in 3.6 ms ± 1.497 ms    | in 5 ms ± 2.28 ms              | in 4.4 ms ± 1.356 ms           |
| 32 B       | in 2.6 ms ± 1.855 ms    | in 3.4 ms ± 2.417 ms       | in 3.8 ms ± 1.6 ms      | in 4.4 ms ± 1.625 ms           | in 4.6 ms ± 1.356 ms           |
| 64 B       | in 3.8 ms ± 4.167 ms    | in 5.8 ms ± 4.874 ms       | in 4.4 ms ± 1.625 ms    | in 3.6 ms ± 2.154 ms           | in 5.2 ms ± 0.4 ms             |
| 128 B      | in 2.4 ms ± 1.2 ms      | in 2 ms ± 1.095 ms         | in 5.2 ms ± 0.98 ms     | in 7.6 ms ± 3.878 ms           | in 5.4 ms ± 0.8 ms             |
| 256 B      | in 1.8 ms ± 0.4 ms      | in 3 ms ± 1.095 ms         | in 5 ms ± 0.632 ms      | in 6.4 ms ± 2.498 ms           | in 5.6 ms ± 0.49 ms            |
| 512 B      | in 3 ms ± 0.894 ms      | in 3.2 ms ± 1.166 ms       | in 5 ms ± 0.632 ms      | in 9.6 ms ± 3.323 ms           | in 9 ms ± 1.414 ms             |
| 1.024 kB   | in 8.8 ms ± 4.4 ms      | in 2 ms ± 0.894 ms         | in 5.2 ms ± 0.98 ms     | in 13.2 ms ± 2.926 ms          | in 14.6 ms ± 3.774 ms          |
| 2.048 kB   | in 4.8 ms ± 2.638 ms    | in 4.2 ms ± 1.166 ms       | in 7.2 ms ± 1.939 ms    | in 26.4 ms ± 8.015 ms          | in 23.2 ms ± 2.561 ms          |
| 4.096 kB   | in 4.8 ms ± 1.47 ms     | in 4.8 ms ± 0.98 ms        | in 10.2 ms ± 3.25 ms    | in 42 ms ± 7.403 ms            | in 33.8 ms ± 4.956 ms          |
| 8.192 kB   | in 8.6 ms ± 2.059 ms    | in 7.2 ms ± 2.857 ms       | in 12.8 ms ± 1.72 ms    | in 67.4 ms ± 4.317 ms          | in 64.8 ms ± 7.547 ms          |
| 16.384 kB  | in 16 ms ± 3.033 ms     | in 15.6 ms ± 5.953 ms      | in 19.4 ms ± 1.497 ms   | in 146 ms ± 6.164 ms           | in 126 ms ± 7.483 ms           |
| 32.768 kB  | in 19.4 ms ± 2.332 ms   | in 19.4 ms ± 3.929 ms      | in 32.2 ms ± 2.638 ms   | in 255.6 ms ± 8.357 ms         | in 237.6 ms ± 11.603 ms        |
| 65.536 kB  | in 34.8 ms ± 2.638 ms   | in 34.2 ms ± 2.993 ms      | in 63.4 ms ± 3.441 ms   | in 501 ms ± 11.576 ms          | in 479.2 ms ± 9.152 ms         |
| 131.072 kB | in 75 ms ± 4.336 ms     | in 67.8 ms ± 6.705 ms      | in 120.8 ms ± 1.939 ms  | in 999.8 ms ± 22.4 ms          | in 947.2 ms ± 20.961 ms        |
| 262.144 kB | in 152.6 ms ± 8.188 ms  | in 140.6 ms ± 7.283 ms     | in 242.8 ms ± 11.071 ms | in 1,961 ms ± 25.179 ms        | in 1,909.6 ms ± 66.827 ms      |
| 524.288 kB | in 273.2 ms ± 18.946 ms | in 281.8 ms ± 12.671 ms    | in 458.2 ms ± 21.839 ms | in 3,982.2 ms ± 98.119 ms      | in 3,794 ms ± 29.305 ms        |
| 1.049 MB   | in 565.8 ms ± 41.252 ms | in 495 ms ± 15.192 ms      | in 942.4 ms ± 54.949 ms | in 7,807.2 ms ± 129.648 ms     | in 7,392 ms ± 187.445 ms       |

## structuredClone (browser)

|            | hasTransferables   | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ------------------ | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | now ± now          | null                          | in 0.2 ms ± 0.4 ms         | in 0.8 ms ± 0.748 ms               | in 0.8 ms ± 0.748 ms               |
| 2 B        | now ± now          | null                          | in 0.4 ms ± 0.49 ms        | in 0.6 ms ± 0.49 ms                | in 0.6 ms ± 0.49 ms                |
| 4 B        | in 0.2 ms ± 0.4 ms | null                          | in 0.6 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.4 ms ± 0.49 ms                |
| 8 B        | in 0.2 ms ± 0.4 ms | null                          | in 0.4 ms ± 0.49 ms        | now ± now                          | in 0.4 ms ± 0.49 ms                |
| 16 B       | now ± now          | null                          | in 0.4 ms ± 0.49 ms        | in 0.6 ms ± 0.49 ms                | in 0.6 ms ± 0.49 ms                |
| 32 B       | now ± now          | null                          | in 1.2 ms ± 1.47 ms        | in 0.6 ms ± 0.49 ms                | in 0.8 ms ± 0.4 ms                 |
| 64 B       | in 0.2 ms ± 0.4 ms | null                          | in 0.6 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 128 B      | now ± now          | null                          | in 0.6 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 256 B      | now ± now          | null                          | in 0.4 ms ± 0.49 ms        | in 1 second ± now                  | in 1.4 ms ± 0.49 ms                |
| 512 B      | now ± now          | null                          | in 0.8 ms ± 0.4 ms         | in 2 ms ± 0.632 ms                 | in 2.2 ms ± 0.4 ms                 |
| 1.024 kB   | now ± now          | null                          | in 1 second ± now          | in 2.8 ms ± 0.4 ms                 | in 3.6 ms ± 0.49 ms                |
| 2.048 kB   | in 0.2 ms ± 0.4 ms | null                          | in 1.6 ms ± 0.8 ms         | in 5 ms ± now                      | in 8 ms ± 4.147 ms                 |
| 4.096 kB   | now ± now          | null                          | in 3.4 ms ± 1.02 ms        | in 10.4 ms ± 1.02 ms               | in 11 ms ± 0.894 ms                |
| 8.192 kB   | in 0.2 ms ± 0.4 ms | null                          | in 4.8 ms ± 0.4 ms         | in 23.2 ms ± 5.6 ms                | in 23.6 ms ± 3.774 ms              |
| 16.384 kB  | now ± now          | null                          | in 9.2 ms ± 0.748 ms       | in 37.2 ms ± 0.4 ms                | in 43 ms ± now                     |
| 32.768 kB  | now ± now          | null                          | in 17.4 ms ± 0.8 ms        | in 75.4 ms ± 3.382 ms              | in 87 ms ± 2.828 ms                |
| 65.536 kB  | now ± now          | null                          | in 33.8 ms ± 2.926 ms      | in 150 ms ± 6.603 ms               | in 169 ms ± 2.608 ms               |
| 131.072 kB | now ± now          | null                          | in 75.4 ms ± 10.404 ms     | in 307.6 ms ± 2.939 ms             | in 348 ms ± 3.464 ms               |
| 262.144 kB | now ± now          | null                          | in 146.2 ms ± 9.847 ms     | in 608.2 ms ± 2.135 ms             | in 684.4 ms ± 3.72 ms              |
| 524.288 kB | now ± now          | null                          | in 291.6 ms ± 7.526 ms     | in 1,210.2 ms ± 1.72 ms            | in 1,358.8 ms ± 11.479 ms          |
| 1.049 MB   | now ± now          | null                          | in 563.4 ms ± 18.683 ms    | in 2,393.2 ms ± 2.561 ms           | in 2,678.2 ms ± 29.694 ms          |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 5.2 ms ± 5.075 ms    | in 4.8 ms ± 1.72 ms        | in 5 ms ± 1.265 ms        | in 9 ms ± 3.633 ms             | in 7.8 ms ± 3.059 ms           |
| 2 B        | in 4.2 ms ± 3.655 ms    | in 3 ms ± 1.265 ms         | in 5.4 ms ± 4.224 ms      | in 4.4 ms ± 1.356 ms           | in 7.8 ms ± 3.655 ms           |
| 4 B        | in 3.4 ms ± 2.577 ms    | in 3 ms ± 1.265 ms         | in 5.6 ms ± 3.137 ms      | in 5.8 ms ± 3.763 ms           | in 4.8 ms ± 3.187 ms           |
| 8 B        | in 2.6 ms ± 1.356 ms    | in 3.8 ms ± 3.709 ms       | in 5 ms ± 2.098 ms        | in 10.2 ms ± 9.196 ms          | in 6.2 ms ± 3.868 ms           |
| 16 B       | in 4.4 ms ± 3.262 ms    | in 2.8 ms ± 1.47 ms        | in 5.2 ms ± 1.72 ms       | in 8.6 ms ± 4.923 ms           | in 3.2 ms ± 1.47 ms            |
| 32 B       | in 5.6 ms ± 4.224 ms    | in 5 ms ± 3.578 ms         | in 5 ms ± 1.673 ms        | in 6.6 ms ± 1.96 ms            | in 5 ms ± 3.899 ms             |
| 64 B       | in 3.8 ms ± 0.4 ms      | in 3.4 ms ± 0.8 ms         | in 10.8 ms ± 10.759 ms    | in 5.2 ms ± 2.04 ms            | in 9 ms ± 4.817 ms             |
| 128 B      | in 5.6 ms ± 5.314 ms    | in 3 ms ± 1.673 ms         | in 5 ms ± 1.673 ms        | in 9.6 ms ± 3.72 ms            | in 6.2 ms ± 1.72 ms            |
| 256 B      | in 3.4 ms ± 1.356 ms    | in 8.8 ms ± 8.976 ms       | in 7.4 ms ± 3.072 ms      | in 7 ms ± 0.632 ms             | in 6.8 ms ± 1.47 ms            |
| 512 B      | in 3.6 ms ± 1.497 ms    | in 3.4 ms ± 2.245 ms       | in 4.2 ms ± 2.4 ms        | in 8.6 ms ± 2.8 ms             | in 11.2 ms ± 3.187 ms          |
| 1.024 kB   | in 6.8 ms ± 2.713 ms    | in 8 ms ± 7.589 ms         | in 5.6 ms ± 2.245 ms      | in 11.8 ms ± 2.786 ms          | in 13 ms ± 2.966 ms            |
| 2.048 kB   | in 6.2 ms ± 2.482 ms    | in 8.4 ms ± 4.317 ms       | in 9.2 ms ± 1.47 ms       | in 14 ms ± 1.789 ms            | in 15.8 ms ± 3.311 ms          |
| 4.096 kB   | in 10.4 ms ± 3.262 ms   | in 11 ms ± 2.608 ms        | in 12.2 ms ± 3.124 ms     | in 17.4 ms ± 2.059 ms          | in 20.4 ms ± 1.855 ms          |
| 8.192 kB   | in 15.6 ms ± 8.593 ms   | in 11.8 ms ± 2.04 ms       | in 18.8 ms ± 7.73 ms      | in 29 ms ± 2.098 ms            | in 31.6 ms ± 1.855 ms          |
| 16.384 kB  | in 11.8 ms ± 1.47 ms    | in 16.8 ms ± 7.25 ms       | in 23.2 ms ± 3.544 ms     | in 53.8 ms ± 3.709 ms          | in 57.8 ms ± 1.327 ms          |
| 32.768 kB  | in 19.6 ms ± 1.02 ms    | in 22.8 ms ± 6.615 ms      | in 40.4 ms ± 3.499 ms     | in 99.8 ms ± 2.713 ms          | in 105 ms ± 2.608 ms           |
| 65.536 kB  | in 39.4 ms ± 5.044 ms   | in 47.2 ms ± 7.859 ms      | in 74.6 ms ± 4.454 ms     | in 188.8 ms ± 3.655 ms         | in 212.4 ms ± 5.748 ms         |
| 131.072 kB | in 87.6 ms ± 8.616 ms   | in 83.6 ms ± 5.953 ms      | in 145.6 ms ± 12.548 ms   | in 373 ms ± 2.191 ms           | in 408.6 ms ± 8.523 ms         |
| 262.144 kB | in 173.2 ms ± 8.232 ms  | in 174.4 ms ± 7.003 ms     | in 290.8 ms ± 7.626 ms    | in 787.2 ms ± 17.993 ms        | in 866 ms ± 34.322 ms          |
| 524.288 kB | in 324.4 ms ± 12.924 ms | in 357.6 ms ± 30.897 ms    | in 571 ms ± 23.289 ms     | in 1,606.4 ms ± 42.735 ms      | in 1,779 ms ± 37.646 ms        |
| 1.049 MB   | in 665.8 ms ± 38.181 ms | in 642 ms ± 25.636 ms      | in 1,119.4 ms ± 34.691 ms | in 3,135.2 ms ± 50.229 ms      | in 3,415 ms ± 30.574 ms        |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ----------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 24.4 ms ± 3.72 ms    | in 3.8 ms ± 2.638 ms       | in 3.4 ms ± 1.625 ms      | in 11.4 ms ± 2.332 ms          | in 12.4 ms ± 2.577 ms          |
| 2 B        | in 3.6 ms ± 1.855 ms    | in 4.2 ms ± 2.4 ms         | in 3 ms ± 2.098 ms        | in 5.2 ms ± 1.47 ms            | in 6.6 ms ± 2.245 ms           |
| 4 B        | in 2 ms ± 0.632 ms      | in 3 ms ± 1.265 ms         | in 3.2 ms ± 1.939 ms      | in 2.6 ms ± 1.02 ms            | in 6.6 ms ± 2.059 ms           |
| 8 B        | in 2.6 ms ± 1.02 ms     | in 3 ms ± 1.414 ms         | in 3.2 ms ± 1.833 ms      | in 5.6 ms ± 1.02 ms            | in 4.8 ms ± 1.47 ms            |
| 16 B       | in 2.4 ms ± 0.8 ms      | in 2.8 ms ± 0.748 ms       | in 6.2 ms ± 5.115 ms      | in 5 ms ± 1.095 ms             | in 4.6 ms ± 0.49 ms            |
| 32 B       | in 2 ms ± 1.549 ms      | in 2.6 ms ± 0.49 ms        | in 3 ms ± 1.673 ms        | in 4.4 ms ± 1.744 ms           | in 6.6 ms ± 3.98 ms            |
| 64 B       | in 2.6 ms ± 1.356 ms    | in 3 ms ± 0.632 ms         | in 4 ms ± 2.449 ms        | in 7 ms ± 3.688 ms             | in 6.8 ms ± 2.857 ms           |
| 128 B      | in 2 ms ± 0.632 ms      | in 2.6 ms ± 0.8 ms         | in 3 ms ± 1.897 ms        | in 5 ms ± 1.789 ms             | in 9 ms ± 5.404 ms             |
| 256 B      | in 5.6 ms ± 4.63 ms     | in 3 ms ± 0.632 ms         | in 5.2 ms ± 1.72 ms       | in 7.6 ms ± 2.577 ms           | in 6.4 ms ± 2.154 ms           |
| 512 B      | in 3 ms ± 1.789 ms      | in 3 ms ± 1.265 ms         | in 5.6 ms ± 1.356 ms      | in 14 ms ± 1.414 ms            | in 8.4 ms ± 2.577 ms           |
| 1.024 kB   | in 8 ms ± 4.29 ms       | in 3.4 ms ± 1.625 ms       | in 8.2 ms ± 2.786 ms      | in 16.2 ms ± 4.167 ms          | in 16.2 ms ± 3.655 ms          |
| 2.048 kB   | in 3.8 ms ± 0.4 ms      | in 5.2 ms ± 0.98 ms        | in 8.2 ms ± 3.059 ms      | in 24.6 ms ± 4.176 ms          | in 27.6 ms ± 6.312 ms          |
| 4.096 kB   | in 10.2 ms ± 5.231 ms   | in 6.6 ms ± 0.8 ms         | in 9.6 ms ± 2.332 ms      | in 46.2 ms ± 7.054 ms          | in 44.2 ms ± 1.166 ms          |
| 8.192 kB   | in 10 ms ± 3.795 ms     | in 11.4 ms ± 3.826 ms      | in 12 ms ± 0.632 ms       | in 77.2 ms ± 5.706 ms          | in 86.8 ms ± 11.214 ms         |
| 16.384 kB  | in 15.6 ms ± 2.332 ms   | in 13.4 ms ± 2.154 ms      | in 22.4 ms ± 2.059 ms     | in 156.6 ms ± 15.2 ms          | in 171.2 ms ± 10.323 ms        |
| 32.768 kB  | in 21.6 ms ± 2.653 ms   | in 21.4 ms ± 2.498 ms      | in 38.2 ms ± 8.035 ms     | in 296.6 ms ± 9.541 ms         | in 312.6 ms ± 9.972 ms         |
| 65.536 kB  | in 46 ms ± 4.94 ms      | in 46.4 ms ± 4.079 ms      | in 77 ms ± 3.406 ms       | in 575 ms ± 9.487 ms           | in 599.8 ms ± 16.963 ms        |
| 131.072 kB | in 81.2 ms ± 0.748 ms   | in 86.8 ms ± 10.925 ms     | in 141 ms ± 5.55 ms       | in 1,146.4 ms ± 20.006 ms      | in 1,207.6 ms ± 34.337 ms      |
| 262.144 kB | in 183.8 ms ± 9.928 ms  | in 187.4 ms ± 9.436 ms     | in 311.6 ms ± 3.262 ms    | in 2,252.6 ms ± 26.964 ms      | in 2,402 ms ± 60.679 ms        |
| 524.288 kB | in 340.8 ms ± 12.75 ms  | in 360.2 ms ± 30.551 ms    | in 593.4 ms ± 38.14 ms    | in 4,567 ms ± 96.805 ms        | in 4,761.8 ms ± 74.858 ms      |
| 1.049 MB   | in 746.8 ms ± 58.369 ms | in 660.8 ms ± 36.444 ms    | in 1,142.2 ms ± 43.384 ms | in 9,098.4 ms ± 207.836 ms     | in 9,286.4 ms ± 105.871 ms     |

## structuredClone (browser)

|            | hasTransferables    | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms  | null                          | in 0.4 ms ± 0.49 ms        | in 1.2 ms ± 0.98 ms                | in 2.2 ms ± 2.135 ms               |
| 2 B        | in 0.4 ms ± 0.49 ms | null                          | in 1 second ± 0.632 ms     | in 0.6 ms ± 0.8 ms                 | now ± now                          |
| 4 B        | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 0.6 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                |
| 8 B        | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 0.8 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                 |
| 16 B       | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 0.8 ms ± 0.4 ms                 | in 1 second ± now                  |
| 32 B       | in 0.2 ms ± 0.4 ms  | null                          | in 0.6 ms ± 0.49 ms        | in 0.4 ms ± 0.49 ms                | in 1 second ± now                  |
| 64 B       | now ± now           | null                          | in 0.8 ms ± 0.4 ms         | in 1 second ± now                  | in 1.2 ms ± 0.4 ms                 |
| 128 B      | now ± now           | null                          | in 0.4 ms ± 0.49 ms        | in 1 second ± now                  | in 1.4 ms ± 0.49 ms                |
| 256 B      | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 1 second ± now                  | in 1 second ± now                  |
| 512 B      | now ± now           | null                          | in 0.6 ms ± 0.8 ms         | in 2.6 ms ± 1.2 ms                 | in 1.8 ms ± 0.4 ms                 |
| 1.024 kB   | now ± now           | null                          | in 0.8 ms ± 0.4 ms         | in 2.2 ms ± 0.4 ms                 | in 3.4 ms ± 0.49 ms                |
| 2.048 kB   | now ± now           | null                          | in 1.6 ms ± 0.49 ms        | in 4.6 ms ± 0.49 ms                | in 5.8 ms ± 0.748 ms               |
| 4.096 kB   | now ± now           | null                          | in 2.6 ms ± 0.49 ms        | in 8.6 ms ± 0.49 ms                | in 11.4 ms ± 1.02 ms               |
| 8.192 kB   | now ± now           | null                          | in 4.4 ms ± 0.49 ms        | in 19.2 ms ± 4.02 ms               | in 20.8 ms ± 0.748 ms              |
| 16.384 kB  | now ± now           | null                          | in 7.4 ms ± 0.49 ms        | in 33 ms ± 1.095 ms                | in 40.4 ms ± 1.02 ms               |
| 32.768 kB  | in 0.2 ms ± 0.4 ms  | null                          | in 16.6 ms ± 1.356 ms      | in 63.8 ms ± 0.98 ms               | in 79 ms ± 3.347 ms                |
| 65.536 kB  | in 0.2 ms ± 0.4 ms  | null                          | in 28.2 ms ± 1.6 ms        | in 126.2 ms ± 1.166 ms             | in 157 ms ± 3.347 ms               |
| 131.072 kB | now ± now           | null                          | in 62.8 ms ± 6.853 ms      | in 262.4 ms ± 2.871 ms             | in 325.4 ms ± 7.473 ms             |
| 262.144 kB | in 0.2 ms ± 0.4 ms  | null                          | in 124 ms ± 4.817 ms       | in 522.8 ms ± 5.492 ms             | in 642.2 ms ± 8.612 ms             |
| 524.288 kB | now ± now           | null                          | in 242 ms ± 9.695 ms       | in 1,039.4 ms ± 10.307 ms          | in 1,269.4 ms ± 15.92 ms           |
| 1.049 MB   | now ± now           | null                          | in 474.4 ms ± 11.092 ms    | in 2,046.4 ms ± 15.895 ms          | in 2,482.2 ms ± 10.225 ms          |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 5 ms ± 3.286 ms      | in 4.2 ms ± 2.482 ms       | in 8 ms ± 1.414 ms      | in 7.8 ms ± 2.482 ms           | in 5.8 ms ± 2.227 ms           |
| 2 B        | in 4 ms ± 2.966 ms      | in 1.8 ms ± 0.748 ms       | in 4.4 ms ± 1.356 ms    | in 5 ms ± 3.286 ms             | in 5.6 ms ± 3.666 ms           |
| 4 B        | in 1.8 ms ± 0.98 ms     | in 1.4 ms ± 0.8 ms         | in 4.6 ms ± 1.625 ms    | in 3.8 ms ± 1.72 ms            | in 4.4 ms ± 2.245 ms           |
| 8 B        | in 3.6 ms ± 3.262 ms    | in 4.6 ms ± 4.454 ms       | in 4.8 ms ± 1.47 ms     | in 6.4 ms ± 5.083 ms           | in 3.6 ms ± 1.2 ms             |
| 16 B       | in 2 ms ± 0.894 ms      | in 3.8 ms ± 2.993 ms       | in 4.8 ms ± 1.327 ms    | in 4.6 ms ± 2.939 ms           | in 3.6 ms ± 2.417 ms           |
| 32 B       | in 5.6 ms ± 4.716 ms    | in 4.4 ms ± 3.929 ms       | in 3.8 ms ± 0.98 ms     | in 3 ms ± 1.265 ms             | in 3.4 ms ± 2.059 ms           |
| 64 B       | in 3.4 ms ± 2.871 ms    | in 4.4 ms ± 3.441 ms       | in 4.2 ms ± 0.98 ms     | in 5.6 ms ± 2.577 ms           | in 7.2 ms ± 0.98 ms            |
| 128 B      | in 4.2 ms ± 3.187 ms    | in 2.4 ms ± 0.8 ms         | in 6.2 ms ± 2.926 ms    | in 2.8 ms ± 1.166 ms           | in 5 ms ± 3.162 ms             |
| 256 B      | in 3.2 ms ± 2.993 ms    | in 5.2 ms ± 3.6 ms         | in 5.4 ms ± 0.8 ms      | in 7.2 ms ± 3.187 ms           | in 4.2 ms ± 1.47 ms            |
| 512 B      | in 3.4 ms ± 2.871 ms    | in 6.4 ms ± 3.382 ms       | in 6.4 ms ± 1.855 ms    | in 9.6 ms ± 2.332 ms           | in 5 ms ± 1.265 ms             |
| 1.024 kB   | in 3 ms ± 1.549 ms      | in 3 ms ± 1.095 ms         | in 7.2 ms ± 1.6 ms      | in 8 ms ± 3.098 ms             | in 6.8 ms ± 1.939 ms           |
| 2.048 kB   | in 2.6 ms ± 1.2 ms      | in 4 ms ± 2.449 ms         | in 6.4 ms ± 2.577 ms    | in 9.6 ms ± 1.625 ms           | in 10.2 ms ± 0.748 ms          |
| 4.096 kB   | in 2.6 ms ± 1.02 ms     | in 5.6 ms ± 2.332 ms       | in 8 ms ± 2 ms          | in 15.4 ms ± 4.079 ms          | in 15.6 ms ± 0.49 ms           |
| 8.192 kB   | in 6 ms ± 1.897 ms      | in 7.2 ms ± 3.37 ms        | in 10.4 ms ± 1.855 ms   | in 23 ms ± 2.966 ms            | in 26.8 ms ± 1.6 ms            |
| 16.384 kB  | in 9 ms ± 2.828 ms      | in 5.6 ms ± 1.356 ms       | in 16.4 ms ± 4.317 ms   | in 42 ms ± 3.162 ms            | in 53 ms ± 4.427 ms            |
| 32.768 kB  | in 9.6 ms ± 2.332 ms    | in 12.4 ms ± 4.454 ms      | in 25 ms ± 1.414 ms     | in 77 ms ± 5.215 ms            | in 86.6 ms ± 2.577 ms          |
| 65.536 kB  | in 19.8 ms ± 7.167 ms   | in 17.6 ms ± 1.96 ms       | in 49.4 ms ± 3.382 ms   | in 141.8 ms ± 1.6 ms           | in 166.2 ms ± 4.308 ms         |
| 131.072 kB | in 26.4 ms ± 2.653 ms   | in 31.8 ms ± 4.578 ms      | in 76.6 ms ± 4.8 ms     | in 279.8 ms ± 3.311 ms         | in 328.6 ms ± 6.711 ms         |
| 262.144 kB | in 54.8 ms ± 5.075 ms   | in 61.2 ms ± 6.675 ms      | in 165 ms ± 7.376 ms    | in 572 ms ± 10.354 ms          | in 670.2 ms ± 19.712 ms        |
| 524.288 kB | in 96.6 ms ± 2.939 ms   | in 109.2 ms ± 8.818 ms     | in 297.4 ms ± 15.654 ms | in 1,162.8 ms ± 28.889 ms      | in 1,370.6 ms ± 30.46 ms       |
| 1.049 MB   | in 179.2 ms ± 17.221 ms | in 213 ms ± 7.874 ms       | in 583.4 ms ± 22.966 ms | in 2,243.4 ms ± 42.907 ms      | in 2,624.6 ms ± 37.205 ms      |

## Worker (browser)

|            | hasTransferables       | postMessage (no transfers) | postMessage (manually)  | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ---------------------- | -------------------------- | ----------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 20.6 ms ± 2.417 ms  | in 3.4 ms ± 3.072 ms       | in 3.4 ms ± 2.577 ms    | in 10.2 ms ± 4.069 ms          | in 8.8 ms ± 3.6 ms             |
| 2 B        | in 3.8 ms ± 2.926 ms   | in 1.2 ms ± 0.98 ms        | in 3 ms ± 1.414 ms      | in 5.8 ms ± 2.713 ms           | in 4.8 ms ± 0.748 ms           |
| 4 B        | in 2 ms ± 2 ms         | in 1.6 ms ± 0.8 ms         | in 3.6 ms ± 1.356 ms    | in 1.6 ms ± 0.8 ms             | in 2.8 ms ± 1.327 ms           |
| 8 B        | in 2.2 ms ± 0.4 ms     | in 1.4 ms ± 1.855 ms       | in 3.4 ms ± 0.8 ms      | in 3 ms ± 1.789 ms             | in 3.8 ms ± 0.748 ms           |
| 16 B       | in 2.4 ms ± 1.855 ms   | in 1 second ± 0.632 ms     | in 3.8 ms ± 1.327 ms    | in 4 ms ± 2.366 ms             | in 2.8 ms ± 0.748 ms           |
| 32 B       | in 1.2 ms ± 0.748 ms   | in 2 ms ± 2.608 ms         | in 3 ms ± 1.265 ms      | in 3 ms ± 1.095 ms             | in 3.4 ms ± 1.2 ms             |
| 64 B       | in 0.6 ms ± 0.49 ms    | in 0.6 ms ± 0.8 ms         | in 2.8 ms ± 1.166 ms    | in 3.4 ms ± 1.02 ms            | in 5.8 ms ± 3.187 ms           |
| 128 B      | in 1.4 ms ± 1.02 ms    | in 0.8 ms ± 0.4 ms         | in 3.4 ms ± 0.49 ms     | in 4 ms ± 2.098 ms             | in 3.2 ms ± 0.748 ms           |
| 256 B      | in 1.2 ms ± 1.47 ms    | in 0.8 ms ± 0.748 ms       | in 3.2 ms ± 1.166 ms    | in 6.8 ms ± 3.763 ms           | in 4.2 ms ± 1.166 ms           |
| 512 B      | in 1 second ± 0.632 ms | in 3.8 ms ± 3.709 ms       | in 2.8 ms ± 0.4 ms      | in 3.8 ms ± 1.939 ms           | in 6.8 ms ± 3.655 ms           |
| 1.024 kB   | in 4.8 ms ± 4.354 ms   | in 0.8 ms ± 0.4 ms         | in 4 ms ± 1.095 ms      | in 6 ms ± 3.162 ms             | in 8 ms ± 3.406 ms             |
| 2.048 kB   | in 1.6 ms ± 1.2 ms     | in 1.2 ms ± 0.98 ms        | in 5 ms ± 2.098 ms      | in 21 ms ± 3.162 ms            | in 23.6 ms ± 6.02 ms           |
| 4.096 kB   | in 3.2 ms ± 2.926 ms   | in 1.4 ms ± 1.02 ms        | in 5.6 ms ± 1.744 ms    | in 33.6 ms ± 9.769 ms          | in 36.6 ms ± 1.625 ms          |
| 8.192 kB   | in 8.2 ms ± 3.97 ms    | in 3 ms ± 3.033 ms         | in 10.6 ms ± 5.161 ms   | in 64.8 ms ± 5.741 ms          | in 67.4 ms ± 4.499 ms          |
| 16.384 kB  | in 7 ms ± 3.578 ms     | in 4.2 ms ± 2.482 ms       | in 24.2 ms ± 21.414 ms  | in 125.4 ms ± 6.375 ms         | in 133.8 ms ± 9.786 ms         |
| 32.768 kB  | in 7.4 ms ± 2.154 ms   | in 8.8 ms ± 1.72 ms        | in 20 ms ± 2 ms         | in 235.4 ms ± 5.535 ms         | in 246.8 ms ± 8.931 ms         |
| 65.536 kB  | in 14.2 ms ± 2.04 ms   | in 20.4 ms ± 4.03 ms       | in 42.4 ms ± 2.577 ms   | in 456 ms ± 5.177 ms           | in 487.2 ms ± 13.732 ms        |
| 131.072 kB | in 28.4 ms ± 7.446 ms  | in 29.8 ms ± 4.49 ms       | in 79 ms ± 3.162 ms     | in 896.2 ms ± 19.6 ms          | in 963 ms ± 19.748 ms          |
| 262.144 kB | in 60.6 ms ± 5.535 ms  | in 61.4 ms ± 6.28 ms       | in 155.4 ms ± 13.351 ms | in 1,782.2 ms ± 11.125 ms      | in 1,894.6 ms ± 41.389 ms      |
| 524.288 kB | in 90.6 ms ± 2.245 ms  | in 115.2 ms ± 9.704 ms     | in 296.4 ms ± 13.032 ms | in 3,537.2 ms ± 39.148 ms      | in 3,807 ms ± 101.603 ms       |
| 1.049 MB   | in 177 ms ± 16.959 ms  | in 210.6 ms ± 15.756 ms    | in 608.6 ms ± 30.057 ms | in 7,112.2 ms ± 143.749 ms     | in 7,553.8 ms ± 186.551 ms     |

## structuredClone (browser)

|            | hasTransferables    | structuredClone (no transfer) | structuredClone (manually) | structuredClone (manually) (transfer) | structuredClone (getTransferables) | structuredClone (getTransferables) (transfer) | structuredClone (getTransferable*) | structuredClone (getTransferable*) (transfer) |
| ---------- | ------------------- | ----------------------------- | -------------------------- | ------------------------------------- | ---------------------------------- | --------------------------------------------- | ---------------------------------- | --------------------------------------------- |
| 1 B        | in 0.6 ms ± 0.49 ms | null                          | now ± now                  | in 0.6 ms ± 0.49 ms                   | in 0.4 ms ± 0.8 ms                 | in 0.6 ms ± 0.49 ms                           | in 0.6 ms ± 1.2 ms                 | in 0.6 ms ± 0.49 ms                           |
| 2 B        | in 0.4 ms ± 0.49 ms | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | now ± now                          | in 0.6 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 4 B        | now ± now           | null                          | now ± now                  | now ± now                             | now ± now                          | in 0.4 ms ± 0.49 ms                           | now ± now                          | in 0.2 ms ± 0.4 ms                            |
| 8 B        | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 0.4 ms ± 0.49 ms                   | in 0.2 ms ± 0.4 ms                 | now ± now                                     | in 0.2 ms ± 0.4 ms                 | in 0.2 ms ± 0.4 ms                            |
| 16 B       | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 0.2 ms ± 0.4 ms                    | in 0.2 ms ± 0.4 ms                 | in 0.4 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 32 B       | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | in 0.4 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.8 ms ± 0.748 ms                          |
| 64 B       | now ± now           | null                          | now ± now                  | in 0.4 ms ± 0.49 ms                   | in 0.6 ms ± 0.8 ms                 | in 0.4 ms ± 0.49 ms                           | in 0.4 ms ± 0.49 ms                | in 0.8 ms ± 0.4 ms                            |
| 128 B      | now ± now           | null                          | now ± now                  | in 0.6 ms ± 0.49 ms                   | in 0.4 ms ± 0.8 ms                 | in 0.2 ms ± 0.4 ms                            | in 0.2 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                            |
| 256 B      | now ± now           | null                          | now ± now                  | in 0.2 ms ± 0.4 ms                    | in 0.4 ms ± 0.49 ms                | in 0.8 ms ± 0.4 ms                            | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 512 B      | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | in 0.2 ms ± 0.4 ms                 | in 1 second ± now                             | in 0.6 ms ± 0.49 ms                | in 1 second ± now                             |
| 1.024 kB   | now ± now           | null                          | now ± now                  | in 1 second ± now                     | in 0.8 ms ± 0.4 ms                 | in 1.6 ms ± 0.8 ms                            | in 0.6 ms ± 0.49 ms                | in 1.8 ms ± 0.748 ms                          |
| 2.048 kB   | now ± now           | null                          | now ± now                  | in 2 ms ± 0.894 ms                    | in 1 second ± now                  | in 3 ms ± 0.894 ms                            | in 1.2 ms ± 0.4 ms                 | in 3.4 ms ± 0.8 ms                            |
| 4.096 kB   | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 3 ms ± 1.265 ms                    | in 2.2 ms ± 0.4 ms                 | in 6 ms ± 1.673 ms                            | in 2.2 ms ± 0.4 ms                 | in 5.4 ms ± 1.02 ms                           |
| 8.192 kB   | now ± now           | null                          | now ± now                  | in 4.6 ms ± 0.49 ms                   | in 5.8 ms ± 3.6 ms                 | in 8.2 ms ± 0.748 ms                          | in 4.2 ms ± 0.4 ms                 | in 8.6 ms ± 0.49 ms                           |
| 16.384 kB  | now ± now           | null                          | now ± now                  | in 8.4 ms ± 0.49 ms                   | in 7.4 ms ± 0.49 ms                | in 16.4 ms ± 2.417 ms                         | in 8.2 ms ± 0.4 ms                 | in 15.4 ms ± 0.49 ms                          |
| 32.768 kB  | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 15.6 ms ± 1.2 ms                   | in 15 ms ± now                     | in 29.4 ms ± 1.02 ms                          | in 16.2 ms ± 0.4 ms                | in 30.8 ms ± 1.47 ms                          |
| 65.536 kB  | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 30.8 ms ± 0.4 ms                   | in 29 ms ± now                     | in 58 ms ± 0.632 ms                           | in 32.2 ms ± 1.166 ms              | in 58.4 ms ± 1.497 ms                         |
| 131.072 kB | in 0.2 ms ± 0.4 ms  | null                          | in 0.2 ms ± 0.4 ms         | in 63.2 ms ± 1.166 ms                 | in 57 ms ± 0.632 ms                | in 121.8 ms ± 1.939 ms                        | in 62 ms ± 0.632 ms                | in 127.2 ms ± 3.763 ms                        |
| 262.144 kB | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 126.8 ms ± 8.704 ms                | in 113.4 ms ± 0.49 ms              | in 237.4 ms ± 5.953 ms                        | in 123.2 ms ± 1.72 ms              | in 250.4 ms ± 5.463 ms                        |
| 524.288 kB | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 245 ms ± 6.066 ms                  | in 225.4 ms ± 0.49 ms              | in 474.2 ms ± 9.152 ms                        | in 242.2 ms ± 5.418 ms             | in 497 ms ± 10.696 ms                         |
| 1.049 MB   | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 485.2 ms ± 23.37 ms                | in 449.2 ms ± 0.748 ms             | in 912.6 ms ± 10.346 ms                       | in 480.2 ms ± 12.09 ms             | in 940.6 ms ± 17.591 ms                       |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually) | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ----------------------- | -------------------------- | ---------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 10 ms ± 2.449 ms     | in 4.6 ms ± 2.939 ms       | in 3.2 ms ± 0.4 ms     | in 4 ms ± 2.098 ms                | in 8.2 ms ± 6.4 ms             | in 8.2 ms ± 1.833 ms                      | in 8 ms ± 2.28 ms              | in 9 ms ± 4.29 ms                         |
| 2 B        | in 2.6 ms ± 1.356 ms    | in 2.4 ms ± 1.356 ms       | in 3.6 ms ± 2.332 ms   | in 3.6 ms ± 1.497 ms              | in 4.4 ms ± 2.332 ms           | in 4.4 ms ± 3.323 ms                      | in 3.8 ms ± 0.748 ms           | in 4.4 ms ± 1.356 ms                      |
| 4 B        | in 2.2 ms ± 1.6 ms      | in 3.8 ms ± 2.713 ms       | in 2 ms ± 0.894 ms     | in 8 ms ± 9.633 ms                | in 3.6 ms ± 2.417 ms           | in 2.2 ms ± 0.748 ms                      | in 3.8 ms ± 0.748 ms           | in 4 ms ± 1.414 ms                        |
| 8 B        | in 4.4 ms ± 4.454 ms    | in 2 ms ± 0.632 ms         | in 5.8 ms ± 6.493 ms   | in 6 ms ± 4.382 ms                | in 6.8 ms ± 2.786 ms           | in 2.6 ms ± 0.49 ms                       | in 3.8 ms ± 0.98 ms            | in 5 ms ± 1.897 ms                        |
| 16 B       | in 3.4 ms ± 3.007 ms    | in 1.6 ms ± 0.8 ms         | in 4.8 ms ± 2.993 ms   | in 3 ms ± 1.789 ms                | in 3.8 ms ± 0.98 ms            | in 3.8 ms ± 3.124 ms                      | in 4.8 ms ± 1.72 ms            | in 7.2 ms ± 2.561 ms                      |
| 32 B       | in 1.6 ms ± 1.2 ms      | in 2.6 ms ± 2.059 ms       | in 6.2 ms ± 3.97 ms    | in 3.6 ms ± 1.625 ms              | in 4.6 ms ± 2.8 ms             | in 4.8 ms ± 3.763 ms                      | in 4.6 ms ± 1.2 ms             | in 6.4 ms ± 2.417 ms                      |
| 64 B       | in 1.8 ms ± 0.98 ms     | in 2.6 ms ± 2.059 ms       | in 5.6 ms ± 1.855 ms   | in 4 ms ± 1.897 ms                | in 3.4 ms ± 0.49 ms            | in 4.4 ms ± 3.826 ms                      | in 4.4 ms ± 1.02 ms            | in 4.6 ms ± 2.8 ms                        |
| 128 B      | in 4 ms ± 3.286 ms      | in 5.2 ms ± 4.261 ms       | in 5.8 ms ± 4.118 ms   | in 4.4 ms ± 1.744 ms              | in 4.4 ms ± 1.02 ms            | in 6.4 ms ± 3.137 ms                      | in 7 ms ± 3.286 ms             | in 6.2 ms ± 1.6 ms                        |
| 256 B      | in 3.8 ms ± 1.47 ms     | in 6 ms ± 2.608 ms         | in 5.4 ms ± 5.535 ms   | in 5.8 ms ± 2.993 ms              | in 5.6 ms ± 1.2 ms             | in 5 ms ± 1.789 ms                        | in 5.6 ms ± 2.059 ms           | in 6.2 ms ± 2.315 ms                      |
| 512 B      | in 6.2 ms ± 2.926 ms    | in 2.2 ms ± 1.166 ms       | in 4.8 ms ± 1.72 ms    | in 4 ms ± 1.673 ms                | in 6.8 ms ± 1.47 ms            | in 5.6 ms ± 3.137 ms                      | in 5.8 ms ± 1.939 ms           | in 7.8 ms ± 5.269 ms                      |
| 1.024 kB   | in 8 ms ± 4.648 ms      | in 5.2 ms ± 2.482 ms       | in 5.8 ms ± 1.72 ms    | in 7 ms ± 2.757 ms                | in 5.2 ms ± 0.4 ms             | in 8.8 ms ± 3.059 ms                      | in 6 ms ± 1.897 ms             | in 8 ms ± 3.033 ms                        |
| 2.048 kB   | in 4.6 ms ± 0.49 ms     | in 7.8 ms ± 3.059 ms       | in 5.6 ms ± 2.245 ms   | in 14.6 ms ± 8.868 ms             | in 7 ms ± 2.53 ms              | in 10.2 ms ± 3.187 ms                     | in 6 ms ± 0.632 ms             | in 12.6 ms ± 2.332 ms                     |
| 4.096 kB   | in 7.2 ms ± 1.6 ms      | in 8.8 ms ± 3.37 ms        | in 6.2 ms ± 0.4 ms     | in 13 ms ± 3.464 ms               | in 8 ms ± 0.894 ms             | in 11.2 ms ± 2.482 ms                     | in 8 ms ± 0.894 ms             | in 15.6 ms ± 1.855 ms                     |
| 8.192 kB   | in 13.2 ms ± 9.908 ms   | in 11.2 ms ± 1.6 ms        | in 9.2 ms ± 2.926 ms   | in 19.4 ms ± 6.02 ms              | in 12.4 ms ± 1.02 ms           | in 16.8 ms ± 2.638 ms                     | in 14.8 ms ± 2.482 ms          | in 18.2 ms ± 1.47 ms                      |
| 16.384 kB  | in 13.6 ms ± 2.154 ms   | in 11.6 ms ± 1.744 ms      | in 14.2 ms ± 4.833 ms  | in 20.8 ms ± 3.25 ms              | in 20.8 ms ± 3.124 ms          | in 30.4 ms ± 7.864 ms                     | in 24.2 ms ± 3.37 ms           | in 31.4 ms ± 6.946 ms                     |
| 32.768 kB  | in 20.2 ms ± 3.919 ms   | in 23.2 ms ± 5.036 ms      | in 19.4 ms ± 1.356 ms  | in 67.6 ms ± 69.756 ms            | in 38.2 ms ± 5.154 ms          | in 49.6 ms ± 1.744 ms                     | in 39.6 ms ± 4.317 ms          | in 54.8 ms ± 4.707 ms                     |
| 65.536 kB  | in 35.6 ms ± 5.499 ms   | in 33.6 ms ± 2.245 ms      | in 38 ms ± 6.261 ms    | in 66.6 ms ± 12.955 ms            | in 69 ms ± 5.865 ms            | in 95.2 ms ± 3.655 ms                     | in 66.4 ms ± 1.855 ms          | in 98.4 ms ± 8.452 ms                     |
| 131.072 kB | in 69.2 ms ± 3.868 ms   | in 81.6 ms ± 14.596 ms     | in 68.4 ms ± 3.499 ms  | in 117.4 ms ± 7.228 ms            | in 119.4 ms ± 1.497 ms         | in 176.6 ms ± 5.817 ms                    | in 127 ms ± 4.147 ms           | in 179.6 ms ± 3.499 ms                    |
| 262.144 kB | in 143.8 ms ± 5.6 ms    | in 160 ms ± 11.933 ms      | in 149.4 ms ± 15.97 ms | in 244.4 ms ± 8.8 ms              | in 249.6 ms ± 5.426 ms         | in 368.8 ms ± 8.376 ms                    | in 254.8 ms ± 4.069 ms         | in 375.6 ms ± 2.653 ms                    |
| 524.288 kB | in 288.2 ms ± 14.091 ms | in 304 ms ± 14.381 ms      | in 289.6 ms ± 10.67 ms | in 476.2 ms ± 14.077 ms           | in 508.4 ms ± 22.791 ms        | in 784.8 ms ± 32.921 ms                   | in 533 ms ± 5.55 ms            | in 794.4 ms ± 10.012 ms                   |
| 1.049 MB   | in 557 ms ± 41.246 ms   | in 555.4 ms ± 38.448 ms    | in 499 ms ± 22.821 ms  | in 956.8 ms ± 37.658 ms           | in 964.8 ms ± 31.288 ms        | in 1,444.4 ms ± 45.632 ms                 | in 996 ms ± 18.942 ms          | in 1,510 ms ± 16.334 ms                   |

## Worker (browser)

|            | hasTransferables       | postMessage (no transfers) | postMessage (manually)  | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ---------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 23 ms ± 4.604 ms    | in 1.8 ms ± 0.748 ms       | in 4.6 ms ± 2.8 ms      | in 4.6 ms ± 1.855 ms              | in 11.4 ms ± 1.96 ms           | in 9.8 ms ± 4.578 ms                      | in 11.4 ms ± 3.441 ms          | in 4.4 ms ± 2.498 ms                      |
| 2 B        | in 3.6 ms ± 2.939 ms   | in 2.8 ms ± 1.72 ms        | in 3.4 ms ± 1.356 ms    | in 3.8 ms ± 2.482 ms              | in 6 ms ± 2.608 ms             | in 5.6 ms ± 4.923 ms                      | in 2.6 ms ± 1.02 ms            | in 4.8 ms ± 2.315 ms                      |
| 4 B        | in 1.8 ms ± 0.748 ms   | in 1.8 ms ± 0.98 ms        | in 3.8 ms ± 2.227 ms    | in 2.8 ms ± 1.833 ms              | in 4.2 ms ± 1.72 ms            | in 3.8 ms ± 3.763 ms                      | in 2.4 ms ± 0.8 ms             | in 3 ms ± 1.789 ms                        |
| 8 B        | in 3.2 ms ± 2.482 ms   | in 2.8 ms ± 1.6 ms         | in 3 ms ± 2.191 ms      | in 3.6 ms ± 2.939 ms              | in 4.8 ms ± 1.6 ms             | in 2.4 ms ± 1.356 ms                      | in 2.2 ms ± 1.166 ms           | in 4 ms ± 2 ms                            |
| 16 B       | in 2.6 ms ± 1.02 ms    | in 3.6 ms ± 3.262 ms       | in 1.8 ms ± 0.98 ms     | in 4 ms ± 2.53 ms                 | in 3 ms ± 1.095 ms             | in 3 ms ± 1.789 ms                        | in 1.8 ms ± 0.98 ms            | in 4.8 ms ± 1.72 ms                       |
| 32 B       | in 4 ms ± 2.608 ms     | in 2 ms ± 1.673 ms         | in 2.2 ms ± 1.166 ms    | in 4 ms ± 2.191 ms                | in 3.6 ms ± 3.262 ms           | in 4 ms ± 3.162 ms                        | in 2.8 ms ± 2.786 ms           | in 3.8 ms ± 1.72 ms                       |
| 64 B       | in 1.8 ms ± 1.6 ms     | in 2.4 ms ± 1.744 ms       | in 3.4 ms ± 3.007 ms    | in 3.6 ms ± 2.154 ms              | in 4 ms ± 4.561 ms             | in 3.6 ms ± 2.245 ms                      | in 3.6 ms ± 2.417 ms           | in 7.8 ms ± 7.782 ms                      |
| 128 B      | in 2.2 ms ± 1.166 ms   | in 4 ms ± 2.53 ms          | in 2 ms ± 1.265 ms      | in 4.8 ms ± 3.816 ms              | in 2.8 ms ± 0.98 ms            | in 3.6 ms ± 1.855 ms                      | in 5.8 ms ± 2.561 ms           | in 3.8 ms ± 1.939 ms                      |
| 256 B      | in 2.2 ms ± 0.748 ms   | in 3.6 ms ± 1.855 ms       | in 2.6 ms ± 1.356 ms    | in 3.4 ms ± 1.625 ms              | in 4.4 ms ± 1.497 ms           | in 3.2 ms ± 1.47 ms                       | in 3.8 ms ± 2.227 ms           | in 4 ms ± 2.098 ms                        |
| 512 B      | in 1.6 ms ± 0.8 ms     | in 3 ms ± 0.632 ms         | in 2.4 ms ± 1.744 ms    | in 3 ms ± 1.414 ms                | in 5.8 ms ± 1.72 ms            | in 3.6 ms ± 2.417 ms                      | in 5 ms ± 3.742 ms             | in 4.6 ms ± 1.855 ms                      |
| 1.024 kB   | in 3.6 ms ± 0.8 ms     | in 4.2 ms ± 2.04 ms        | in 3.6 ms ± 1.625 ms    | in 6.6 ms ± 0.8 ms                | in 7.4 ms ± 2.728 ms           | in 8 ms ± 2.608 ms                        | in 3.4 ms ± 1.02 ms            | in 5.2 ms ± 1.833 ms                      |
| 2.048 kB   | in 5 ms ± 2.098 ms     | in 4.2 ms ± 0.98 ms        | in 3 ms ± 0.894 ms      | in 7.6 ms ± 3.137 ms              | in 5 ms ± 0.632 ms             | in 7.6 ms ± 3.262 ms                      | in 5.4 ms ± 1.356 ms           | in 8.6 ms ± 3.499 ms                      |
| 4.096 kB   | in 5.2 ms ± 0.4 ms     | in 4.8 ms ± 0.748 ms       | in 5.6 ms ± 2.939 ms    | in 10.2 ms ± 3.487 ms             | in 8.2 ms ± 2.135 ms           | in 11.4 ms ± 2.332 ms                     | in 8.2 ms ± 2.926 ms           | in 17.8 ms ± 2.926 ms                     |
| 8.192 kB   | in 11 ms ± 9.033 ms    | in 10.2 ms ± 5.115 ms      | in 11.8 ms ± 7.467 ms   | in 14.4 ms ± 2.871 ms             | in 15.8 ms ± 4.833 ms          | in 18.4 ms ± 3.2 ms                       | in 10.6 ms ± 0.49 ms           | in 20.4 ms ± 5.238 ms                     |
| 16.384 kB  | in 12.2 ms ± 2.786 ms  | in 11.4 ms ± 2.417 ms      | in 12 ms ± 2.28 ms      | in 20 ms ± 1.789 ms               | in 19.6 ms ± 2.332 ms          | in 32.4 ms ± 7.031 ms                     | in 25.2 ms ± 6.369 ms          | in 29.6 ms ± 3.98 ms                      |
| 32.768 kB  | in 20.4 ms ± 4.128 ms  | in 19.2 ms ± 2.638 ms      | in 16.4 ms ± 0.49 ms    | in 34.8 ms ± 3.97 ms              | in 39.8 ms ± 6.112 ms          | in 54.6 ms ± 5.535 ms                     | in 35 ms ± 2.449 ms            | in 53.4 ms ± 4.224 ms                     |
| 65.536 kB  | in 35 ms ± 3.742 ms    | in 43.2 ms ± 13.717 ms     | in 35.6 ms ± 3.666 ms   | in 71 ms ± 12.602 ms              | in 68.6 ms ± 5.2 ms            | in 98.2 ms ± 5.381 ms                     | in 65.8 ms ± 5.741 ms          | in 94.8 ms ± 5.418 ms                     |
| 131.072 kB | in 64.6 ms ± 4.841 ms  | in 71 ms ± 2.28 ms         | in 66.4 ms ± 2.871 ms   | in 122 ms ± 3.633 ms              | in 120.6 ms ± 2.332 ms         | in 188.2 ms ± 6.369 ms                    | in 130.2 ms ± 9.304 ms         | in 186 ms ± 8.222 ms                      |
| 262.144 kB | in 150 ms ± 3.406 ms   | in 143 ms ± 5.899 ms       | in 143.6 ms ± 7.658 ms  | in 244 ms ± 10.431 ms             | in 256.8 ms ± 7.359 ms         | in 364.6 ms ± 5.748 ms                    | in 257.2 ms ± 21.056 ms        | in 370.6 ms ± 7.761 ms                    |
| 524.288 kB | in 271 ms ± 15.139 ms  | in 283.8 ms ± 12.123 ms    | in 256.6 ms ± 6.53 ms   | in 463.8 ms ± 11.303 ms           | in 486.4 ms ± 11.977 ms        | in 730 ms ± 17.1 ms                       | in 516 ms ± 25.558 ms          | in 738.6 ms ± 22.141 ms                   |
| 1.049 MB   | in 505.6 ms ± 7.552 ms | in 517.2 ms ± 18.291 ms    | in 471.8 ms ± 13.905 ms | in 939.6 ms ± 19.946 ms           | in 933.6 ms ± 24.229 ms        | in 1,410.4 ms ± 17.095 ms                 | in 957 ms ± 18.515 ms          | in 1,416 ms ± 19.308 ms                   |

## structuredClone (browser)

|            | hasTransferables    | structuredClone (no transfer) | structuredClone (manually) | structuredClone (manually) (transfer) | structuredClone (getTransferables) | structuredClone (getTransferables) (transfer) | structuredClone (getTransferable*) | structuredClone (getTransferable*) (transfer) |
| ---------- | ------------------- | ----------------------------- | -------------------------- | ------------------------------------- | ---------------------------------- | --------------------------------------------- | ---------------------------------- | --------------------------------------------- |
| 1 B        | in 0.4 ms ± 0.49 ms | null                          | now ± now                  | in 0.2 ms ± 0.4 ms                    | in 0.6 ms ± 0.49 ms                | in 0.6 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 1.4 ms ± 0.8 ms                            |
| 2 B        | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 0.6 ms ± 0.49 ms                   | now ± now                          | in 0.8 ms ± 0.4 ms                            | now ± now                          | in 0.6 ms ± 0.49 ms                           |
| 4 B        | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | now ± now                          | in 0.6 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.8 ms ± 0.4 ms                            |
| 8 B        | now ± now           | null                          | now ± now                  | in 0.4 ms ± 0.49 ms                   | now ± now                          | in 1 second ± now                             | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 16 B       | now ± now           | null                          | now ± now                  | in 0.6 ms ± 0.49 ms                   | in 0.2 ms ± 0.4 ms                 | in 1 second ± 0.632 ms                        | now ± now                          | in 0.8 ms ± 0.4 ms                            |
| 32 B       | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | now ± now                          | in 0.6 ms ± 0.49 ms                           | in 0.4 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                           |
| 64 B       | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.748 ms                  | in 0.4 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                           | now ± now                          | in 0.8 ms ± 0.748 ms                          |
| 128 B      | now ± now           | null                          | now ± now                  | in 3.2 ms ± 4.915 ms                  | in 0.2 ms ± 0.4 ms                 | in 1.4 ms ± 1.02 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.8 ms                            |
| 256 B      | now ± now           | null                          | now ± now                  | in 0.8 ms ± 0.748 ms                  | now ± now                          | in 0.6 ms ± 0.8 ms                            | in 0.2 ms ± 0.4 ms                 | in 1 second ± 1.095 ms                        |
| 512 B      | now ± now           | null                          | now ± now                  | in 0.6 ms ± 0.8 ms                    | in 0.6 ms ± 0.49 ms                | in 1.4 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 1 second ± 0.632 ms                        |
| 1.024 kB   | now ± now           | null                          | now ± now                  | in 1 second ± 0.632 ms                | in 0.4 ms ± 0.49 ms                | in 1.8 ms ± 0.4 ms                            | in 0.8 ms ± 0.4 ms                 | in 1.8 ms ± 0.748 ms                          |
| 2.048 kB   | now ± now           | null                          | now ± now                  | in 1.8 ms ± 0.748 ms                  | in 1.2 ms ± 0.4 ms                 | in 3 ms ± 1.095 ms                            | in 1 second ± now                  | in 2.6 ms ± 0.8 ms                            |
| 4.096 kB   | now ± now           | null                          | now ± now                  | in 3 ms ± 0.632 ms                    | in 2.4 ms ± 0.49 ms                | in 5.8 ms ± 2.713 ms                          | in 2.4 ms ± 0.49 ms                | in 5.2 ms ± 0.98 ms                           |
| 8.192 kB   | now ± now           | null                          | now ± now                  | in 4.8 ms ± 1.166 ms                  | in 4.2 ms ± 0.4 ms                 | in 8 ms ± now                                 | in 4.6 ms ± 0.49 ms                | in 9.8 ms ± 2.227 ms                          |
| 16.384 kB  | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 8.4 ms ± 0.8 ms                    | in 8.2 ms ± 0.4 ms                 | in 15.8 ms ± 0.4 ms                           | in 8.6 ms ± 0.49 ms                | in 18 ms ± 3.162 ms                           |
| 32.768 kB  | now ± now           | null                          | in 0.2 ms ± 0.4 ms         | in 15.2 ms ± 0.98 ms                  | in 16.6 ms ± 0.49 ms               | in 34.6 ms ± 6.829 ms                         | in 18.4 ms ± 1.2 ms                | in 32.6 ms ± 1.2 ms                           |
| 65.536 kB  | now ± now           | null                          | now ± now                  | in 31 ms ± 2.53 ms                    | in 32.2 ms ± 0.4 ms                | in 59.6 ms ± 0.49 ms                          | in 35 ms ± 2.53 ms                 | in 60.8 ms ± 0.4 ms                           |
| 131.072 kB | in 0.2 ms ± 0.4 ms  | null                          | now ± now                  | in 61.2 ms ± 3.6 ms                   | in 62.8 ms ± 0.4 ms                | in 128 ms ± 2.191 ms                          | in 64.8 ms ± 0.4 ms                | in 130.2 ms ± 3.187 ms                        |
| 262.144 kB | now ± now           | null                          | now ± now                  | in 128.2 ms ± 5.307 ms                | in 125 ms ± now                    | in 252.8 ms ± 7.222 ms                        | in 129.8 ms ± 0.748 ms             | in 259.2 ms ± 5.6 ms                          |
| 524.288 kB | now ± now           | null                          | now ± now                  | in 241.2 ms ± 11.531 ms               | in 249.8 ms ± 0.4 ms               | in 497.4 ms ± 6.741 ms                        | in 265 ms ± 16.781 ms              | in 516.6 ms ± 20.026 ms                       |
| 1.049 MB   | now ± now           | null                          | now ± now                  | in 470.4 ms ± 16.764 ms               | in 499 ms ± now                    | in 961 ms ± 5.831 ms                          | in 511.6 ms ± 17.648 ms            | in 972.6 ms ± 15.819 ms                       |

## MessageChannel (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 7 ms ± 5.514 ms      | in 2 ms ± 0.894 ms         | in 1.6 ms ± 1.2 ms      | in 2.4 ms ± 0.8 ms                | in 4 ms ± 0.894 ms             | in 3.8 ms ± 2.638 ms                      | in 4.4 ms ± 2.417 ms           | in 3.6 ms ± 0.49 ms                       |
| 2 B        | in 3 ms ± 0.632 ms      | in 2.6 ms ± 0.8 ms         | in 2 ms ± 0.632 ms      | in 3.4 ms ± 0.8 ms                | in 2.4 ms ± 0.49 ms            | in 4.8 ms ± 5.154 ms                      | in 3.6 ms ± 3.323 ms           | in 2.8 ms ± 0.748 ms                      |
| 4 B        | in 4.2 ms ± 2.4 ms      | in 2.8 ms ± 1.166 ms       | in 2.2 ms ± 0.4 ms      | in 2.8 ms ± 0.748 ms              | in 2.4 ms ± 1.02 ms            | in 3.4 ms ± 1.855 ms                      | in 2 ms ± 1.095 ms             | in 2.6 ms ± 0.49 ms                       |
| 8 B        | in 3 ms ± 1.414 ms      | in 2 ms ± 0.894 ms         | in 2.4 ms ± 1.356 ms    | in 4.4 ms ± 1.625 ms              | in 3.6 ms ± 1.497 ms           | in 4 ms ± 1.673 ms                        | in 1.8 ms ± 0.748 ms           | in 4.6 ms ± 2.8 ms                        |
| 16 B       | in 2.2 ms ± 1.166 ms    | in 3 ms ± 2.191 ms         | in 3.6 ms ± 3.072 ms    | in 3 ms ± 1.414 ms                | in 2.2 ms ± 1.166 ms           | in 3.6 ms ± 1.356 ms                      | in 1.8 ms ± 0.4 ms             | in 4.4 ms ± 1.02 ms                       |
| 32 B       | in 2 ms ± 1.095 ms      | in 2.6 ms ± 1.625 ms       | in 1.6 ms ± 0.49 ms     | in 3.2 ms ± 1.6 ms                | in 2.2 ms ± 0.98 ms            | in 3.6 ms ± 1.625 ms                      | in 2.8 ms ± 1.47 ms            | in 4 ms ± 0.894 ms                        |
| 64 B       | in 1.6 ms ± 0.49 ms     | in 2.4 ms ± 2.332 ms       | in 1.6 ms ± 0.49 ms     | in 2.8 ms ± 1.327 ms              | in 3 ms ± 0.894 ms             | in 4.6 ms ± 2.939 ms                      | in 5 ms ± 2.608 ms             | in 4.8 ms ± 1.47 ms                       |
| 128 B      | in 2 ms ± 1.095 ms      | in 2.8 ms ± 1.166 ms       | in 3.6 ms ± 2.653 ms    | in 4.8 ms ± 2.713 ms              | in 3 ms ± 1.673 ms             | in 3 ms ± 1.549 ms                        | in 2.8 ms ± 1.327 ms           | in 4.8 ms ± 0.748 ms                      |
| 256 B      | in 2.4 ms ± 1.744 ms    | in 3.4 ms ± 1.02 ms        | in 2.2 ms ± 0.4 ms      | in 3.2 ms ± 1.327 ms              | in 3 ms ± 1.095 ms             | in 4.2 ms ± 1.166 ms                      | in 2.6 ms ± 1.2 ms             | in 4.4 ms ± 1.855 ms                      |
| 512 B      | in 2.2 ms ± 0.748 ms    | in 3.4 ms ± 1.356 ms       | in 3 ms ± 0.894 ms      | in 3.6 ms ± 1.02 ms               | in 3.2 ms ± 1.47 ms            | in 3.8 ms ± 1.833 ms                      | in 2.8 ms ± 1.166 ms           | in 4.2 ms ± 1.6 ms                        |
| 1.024 kB   | in 8 ms ± 8.602 ms      | in 3.8 ms ± 1.327 ms       | in 2.6 ms ± 0.8 ms      | in 5.2 ms ± 2.926 ms              | in 3.6 ms ± 1.625 ms           | in 6.8 ms ± 3.311 ms                      | in 4.2 ms ± 1.47 ms            | in 9.4 ms ± 5.678 ms                      |
| 2.048 kB   | in 3.4 ms ± 0.8 ms      | in 3.8 ms ± 1.47 ms        | in 4 ms ± 1.265 ms      | in 5 ms ± 0.632 ms                | in 4.6 ms ± 1.625 ms           | in 6.2 ms ± 1.939 ms                      | in 5 ms ± 0.894 ms             | in 8 ms ± 1.549 ms                        |
| 4.096 kB   | in 5.8 ms ± 2.227 ms    | in 5.4 ms ± 1.625 ms       | in 5.4 ms ± 0.8 ms      | in 7.2 ms ± 0.98 ms               | in 8.4 ms ± 2.653 ms           | in 9.6 ms ± 1.625 ms                      | in 8.4 ms ± 2.577 ms           | in 10.8 ms ± 1.47 ms                      |
| 8.192 kB   | in 9.6 ms ± 4.8 ms      | in 6.4 ms ± 1.356 ms       | in 9.4 ms ± 3.072 ms    | in 11.2 ms ± 2.4 ms               | in 10.8 ms ± 0.98 ms           | in 16.2 ms ± 2.04 ms                      | in 10.4 ms ± 1.855 ms          | in 18.6 ms ± 3.262 ms                     |
| 16.384 kB  | in 11 ms ± 1.414 ms     | in 9.6 ms ± 1.02 ms        | in 9.8 ms ± 1.47 ms     | in 16.8 ms ± 2.482 ms             | in 17.8 ms ± 0.748 ms          | in 25 ms ± 0.632 ms                       | in 18.6 ms ± 1.356 ms          | in 27 ms ± 1.789 ms                       |
| 32.768 kB  | in 16 ms ± 1.095 ms     | in 17.4 ms ± 2.059 ms      | in 18.8 ms ± 4.4 ms     | in 30.8 ms ± 1.47 ms              | in 33.6 ms ± 2.245 ms          | in 48.2 ms ± 0.98 ms                      | in 33.6 ms ± 1.625 ms          | in 49.4 ms ± 1.625 ms                     |
| 65.536 kB  | in 31 ms ± 1.673 ms     | in 32.8 ms ± 2.786 ms      | in 32.6 ms ± 0.8 ms     | in 59.4 ms ± 3.929 ms             | in 60.4 ms ± 2.653 ms          | in 97.4 ms ± 7.144 ms                     | in 63.6 ms ± 1.497 ms          | in 95.2 ms ± 1.47 ms                      |
| 131.072 kB | in 65.8 ms ± 4.02 ms    | in 74.2 ms ± 2.926 ms      | in 66.8 ms ± 4.02 ms    | in 123.6 ms ± 14.207 ms           | in 127.8 ms ± 1.72 ms          | in 183.2 ms ± 1.939 ms                    | in 130 ms ± 4.817 ms           | in 190.2 ms ± 3.816 ms                    |
| 262.144 kB | in 147.2 ms ± 9.02 ms   | in 158.8 ms ± 7.859 ms     | in 151.4 ms ± 10.947 ms | in 234.2 ms ± 4.996 ms            | in 257.4 ms ± 3.611 ms         | in 374.8 ms ± 10.87 ms                    | in 260.8 ms ± 2.4 ms           | in 384.8 ms ± 6.177 ms                    |
| 524.288 kB | in 281.6 ms ± 14.881 ms | in 311.6 ms ± 22.966 ms    | in 285 ms ± 18.921 ms   | in 454.6 ms ± 18.874 ms           | in 528.2 ms ± 15.816 ms        | in 774.4 ms ± 26.166 ms                   | in 552.2 ms ± 10.907 ms        | in 825.6 ms ± 10.249 ms                   |
| 1.049 MB   | in 525.6 ms ± 11.412 ms | in 552 ms ± 32.686 ms      | in 508.6 ms ± 26.553 ms | in 925.8 ms ± 45.841 ms           | in 992.6 ms ± 28.703 ms        | in 1,479.8 ms ± 47.131 ms                 | in 1,028.4 ms ± 7.658 ms       | in 1,540 ms ± 19.514 ms                   |

## Worker (browser)

|            | hasTransferables        | postMessage (no transfers) | postMessage (manually)  | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ----------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 17.6 ms ± 5.314 ms   | in 2.6 ms ± 1.02 ms        | in 2.2 ms ± 1.327 ms    | in 4 ms ± 1.897 ms                | in 7.4 ms ± 1.02 ms            | in 7.4 ms ± 3.72 ms                       | in 6 ms ± 0.632 ms             | in 5 ms ± 4.05 ms                         |
| 2 B        | in 2.4 ms ± 1.02 ms     | in 2.2 ms ± 0.748 ms       | in 1.8 ms ± 1.166 ms    | in 1.4 ms ± 1.02 ms               | in 3.2 ms ± 2.482 ms           | in 4.6 ms ± 4.317 ms                      | in 2.8 ms ± 1.166 ms           | in 4 ms ± 1.789 ms                        |
| 4 B        | in 1.8 ms ± 0.4 ms      | in 1.8 ms ± 1.166 ms       | in 1.8 ms ± 1.327 ms    | in 1.8 ms ± 1.6 ms                | in 2.2 ms ± 1.166 ms           | in 3.8 ms ± 2.04 ms                       | in 1.8 ms ± 0.4 ms             | in 3.2 ms ± 1.939 ms                      |
| 8 B        | in 2.6 ms ± 1.02 ms     | in 2.4 ms ± 3.382 ms       | in 1.6 ms ± 1.96 ms     | in 1.8 ms ± 1.6 ms                | in 3.4 ms ± 1.356 ms           | in 3.8 ms ± 2.04 ms                       | in 1.8 ms ± 0.4 ms             | in 2.6 ms ± 2.059 ms                      |
| 16 B       | in 2 ms ± 1.095 ms      | in 1.6 ms ± 1.356 ms       | in 2.2 ms ± 1.939 ms    | in 1 second ± 0.632 ms            | in 2.8 ms ± 1.72 ms            | in 3.4 ms ± 1.855 ms                      | in 2 ms ± 0.632 ms             | in 1 second ± now                         |
| 32 B       | in 1.2 ms ± 0.748 ms    | in 1.6 ms ± 1.356 ms       | in 1.6 ms ± 1.356 ms    | in 1.2 ms ± 0.4 ms                | in 2.8 ms ± 1.833 ms           | in 3 ms ± 1.673 ms                        | in 1.8 ms ± 0.748 ms           | in 1.4 ms ± 0.49 ms                       |
| 64 B       | in 1.6 ms ± 0.8 ms      | in 1.8 ms ± 1.47 ms        | in 1.2 ms ± 0.4 ms      | in 1.2 ms ± 0.4 ms                | in 2.6 ms ± 1.02 ms            | in 6.6 ms ± 6.406 ms                      | in 4 ms ± 3.162 ms             | in 3.2 ms ± 3.919 ms                      |
| 128 B      | in 1.6 ms ± 0.49 ms     | in 2.4 ms ± 1.96 ms        | in 1 second ± now       | in 1.2 ms ± 0.4 ms                | in 3.6 ms ± 1.2 ms             | in 3.2 ms ± 1.939 ms                      | in 4.2 ms ± 1.47 ms            | in 1.4 ms ± 0.49 ms                       |
| 256 B      | in 2 ms ± 1.549 ms      | in 1.2 ms ± 0.748 ms       | in 1 second ± now       | in 1.6 ms ± 0.49 ms               | in 3.2 ms ± 0.4 ms             | in 4 ms ± 2.098 ms                        | in 3.8 ms ± 1.72 ms            | in 1.4 ms ± 0.49 ms                       |
| 512 B      | in 1.8 ms ± 1.47 ms     | in 1.2 ms ± 0.4 ms         | in 1 second ± now       | in 1.6 ms ± 0.49 ms               | in 6 ms ± 2.608 ms             | in 3.6 ms ± 1.356 ms                      | in 4.8 ms ± 3.37 ms            | in 2.8 ms ± 0.4 ms                        |
| 1.024 kB   | in 6 ms ± 4.195 ms      | in 4.8 ms ± 6.615 ms       | in 1.8 ms ± 0.748 ms    | in 6.4 ms ± 6.468 ms              | in 4.8 ms ± 0.4 ms             | in 4.6 ms ± 1.855 ms                      | in 6.4 ms ± 2.577 ms           | in 2.8 ms ± 0.4 ms                        |
| 2.048 kB   | in 3.6 ms ± 0.8 ms      | in 3.2 ms ± 1.6 ms         | in 2.4 ms ± 0.49 ms     | in 4.2 ms ± 1.47 ms               | in 6.4 ms ± 3.007 ms           | in 7.4 ms ± 1.02 ms                       | in 7.2 ms ± 4.02 ms            | in 5.2 ms ± 0.748 ms                      |
| 4.096 kB   | in 4.4 ms ± 0.49 ms     | in 5.8 ms ± 0.748 ms       | in 4 ms ± 1.095 ms      | in 7 ms ± 1.414 ms                | in 6.8 ms ± 0.748 ms           | in 9.8 ms ± 1.47 ms                       | in 6.4 ms ± 0.49 ms            | in 9 ms ± 1.265 ms                        |
| 8.192 kB   | in 7.4 ms ± 0.49 ms     | in 7 ms ± 1.673 ms         | in 6.4 ms ± 1.02 ms     | in 11.8 ms ± 0.98 ms              | in 11.4 ms ± 2.417 ms          | in 17 ms ± 2.191 ms                       | in 11.2 ms ± 2.135 ms          | in 20 ms ± 5.292 ms                       |
| 16.384 kB  | in 10.4 ms ± 1.356 ms   | in 10.4 ms ± 2.245 ms      | in 10.8 ms ± 3.187 ms   | in 18.4 ms ± 2.059 ms             | in 17.8 ms ± 1.166 ms          | in 26.6 ms ± 0.8 ms                       | in 18.2 ms ± 1.166 ms          | in 28 ms ± 2.28 ms                        |
| 32.768 kB  | in 16.2 ms ± 1.166 ms   | in 16.4 ms ± 0.8 ms        | in 18.4 ms ± 4.363 ms   | in 30.6 ms ± 1.02 ms              | in 32.6 ms ± 1.2 ms            | in 48.2 ms ± 1.6 ms                       | in 37 ms ± 9.55 ms             | in 50 ms ± 1.789 ms                       |
| 65.536 kB  | in 32.4 ms ± 2.245 ms   | in 34.8 ms ± 1.939 ms      | in 31 ms ± 1.549 ms     | in 70 ms ± 12.329 ms              | in 68.6 ms ± 4.317 ms          | in 93.8 ms ± 0.748 ms                     | in 72.6 ms ± 19.21 ms          | in 95.4 ms ± 3.262 ms                     |
| 131.072 kB | in 61.6 ms ± 2.154 ms   | in 69.2 ms ± 2.561 ms      | in 62.6 ms ± 2.8 ms     | in 117.2 ms ± 2.227 ms            | in 124 ms ± 2 ms               | in 180.4 ms ± 6.711 ms                    | in 146.4 ms ± 39.631 ms        | in 181.4 ms ± 6.711 ms                    |
| 262.144 kB | in 141.8 ms ± 1.6 ms    | in 146.6 ms ± 7.338 ms     | in 134.8 ms ± 2.227 ms  | in 234.6 ms ± 6.28 ms             | in 249.6 ms ± 4.176 ms         | in 359.8 ms ± 7.277 ms                    | in 292.8 ms ± 74.655 ms        | in 366.8 ms ± 4.02 ms                     |
| 524.288 kB | in 257.4 ms ± 6.375 ms  | in 274 ms ± 10.621 ms      | in 251.2 ms ± 11.839 ms | in 445.6 ms ± 6.53 ms             | in 510.4 ms ± 5.535 ms         | in 750.4 ms ± 7.06 ms                     | in 581.4 ms ± 155.921 ms       | in 754 ms ± 11.225 ms                     |
| 1.049 MB   | in 503.4 ms ± 15.055 ms | in 503.6 ms ± 11.534 ms    | in 468.2 ms ± 12.156 ms | in 907 ms ± 22.334 ms             | in 970.6 ms ± 34.459 ms        | in 1,420 ms ± 31.981 ms                   | in 955.8 ms ± 9.02 ms          | in 1,417.8 ms ± 17.394 ms                 |

## structuredClone (browser)

|            | hasTransferables   | structuredClone (no transfer) | structuredClone (manually) | structuredClone (manually) (transfer) | structuredClone (getTransferables) | structuredClone (getTransferables) (transfer) | structuredClone (getTransferable*) | structuredClone (getTransferable*) (transfer) |
| ---------- | ------------------ | ----------------------------- | -------------------------- | ------------------------------------- | ---------------------------------- | --------------------------------------------- | ---------------------------------- | --------------------------------------------- |
| 1 B        | in 0.2 ms ± 0.4 ms | null                          | now ± now                  | in 1 second ± 1.095 ms                | in 0.8 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           | in 0.4 ms ± 0.49 ms                | in 0.8 ms ± 0.4 ms                            |
| 2 B        | in 0.2 ms ± 0.4 ms | null                          | now ± now                  | in 0.4 ms ± 0.49 ms                   | now ± now                          | in 0.4 ms ± 0.49 ms                           | now ± now                          | now ± now                                     |
| 4 B        | now ± now          | null                          | now ± now                  | now ± now                             | now ± now                          | in 0.8 ms ± 0.4 ms                            | now ± now                          | in 0.2 ms ± 0.4 ms                            |
| 8 B        | now ± now          | null                          | now ± now                  | in 0.4 ms ± 0.49 ms                   | in 0.4 ms ± 0.49 ms                | in 0.4 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 16 B       | now ± now          | null                          | now ± now                  | in 0.2 ms ± 0.4 ms                    | now ± now                          | in 0.2 ms ± 0.4 ms                            | in 0.2 ms ± 0.4 ms                 | in 0.4 ms ± 0.49 ms                           |
| 32 B       | now ± now          | null                          | now ± now                  | in 0.8 ms ± 0.4 ms                    | in 0.4 ms ± 0.49 ms                | in 0.6 ms ± 0.49 ms                           | in 0.2 ms ± 0.4 ms                 | in 0.6 ms ± 0.49 ms                           |
| 64 B       | now ± now          | null                          | now ± now                  | in 0.2 ms ± 0.4 ms                    | now ± now                          | now ± now                                     | now ± now                          | in 0.8 ms ± 0.4 ms                            |
| 128 B      | now ± now          | null                          | now ± now                  | in 0.6 ms ± 0.49 ms                   | in 0.2 ms ± 0.4 ms                 | in 0.2 ms ± 0.4 ms                            | now ± now                          | in 0.4 ms ± 0.49 ms                           |
| 256 B      | now ± now          | null                          | now ± now                  | in 1 second ± 1.095 ms                | in 0.4 ms ± 0.49 ms                | in 1.2 ms ± 0.98 ms                           | in 0.4 ms ± 0.49 ms                | in 1.4 ms ± 0.8 ms                            |
| 512 B      | now ± now          | null                          | now ± now                  | in 1.4 ms ± 1.02 ms                   | in 0.4 ms ± 0.49 ms                | in 1 second ± 1.095 ms                        | in 0.4 ms ± 0.49 ms                | in 1.4 ms ± 0.8 ms                            |
| 1.024 kB   | now ± now          | null                          | now ± now                  | in 1.4 ms ± 0.8 ms                    | in 1 second ± now                  | in 2.2 ms ± 1.166 ms                          | in 1.2 ms ± 0.4 ms                 | in 2.4 ms ± 1.356 ms                          |
| 2.048 kB   | now ± now          | null                          | now ± now                  | in 2.2 ms ± 0.4 ms                    | in 2.6 ms ± 2.245 ms               | in 2.8 ms ± 0.4 ms                            | in 1.4 ms ± 0.49 ms                | in 3.2 ms ± 0.4 ms                            |
| 4.096 kB   | now ± now          | null                          | in 0.4 ms ± 0.49 ms        | in 3.8 ms ± 1.166 ms                  | in 2.8 ms ± 0.4 ms                 | in 5.2 ms ± 1.166 ms                          | in 2.8 ms ± 0.4 ms                 | in 6 ms ± 2 ms                                |
| 8.192 kB   | now ± now          | null                          | now ± now                  | in 5.2 ms ± 0.748 ms                  | in 5.2 ms ± 0.4 ms                 | in 10 ms ± 1.549 ms                           | in 6 ms ± 1.549 ms                 | in 10.6 ms ± 1.356 ms                         |
| 16.384 kB  | in 0.2 ms ± 0.4 ms | null                          | now ± now                  | in 9.8 ms ± 0.4 ms                    | in 9.6 ms ± 0.49 ms                | in 18.4 ms ± 0.49 ms                          | in 10 ms ± now                     | in 18.6 ms ± 0.49 ms                          |
| 32.768 kB  | now ± now          | null                          | now ± now                  | in 17.4 ms ± 1.02 ms                  | in 19 ms ± now                     | in 35 ms ± 1.414 ms                           | in 20.2 ms ± 0.4 ms                | in 37 ms ± 1.265 ms                           |
| 65.536 kB  | now ± now          | null                          | in 0.2 ms ± 0.4 ms         | in 35.6 ms ± 1.744 ms                 | in 37.8 ms ± 0.748 ms              | in 69.4 ms ± 1.855 ms                         | in 40.4 ms ± 0.49 ms               | in 73.8 ms ± 3.25 ms                          |
| 131.072 kB | now ± now          | null                          | now ± now                  | in 72.2 ms ± 1.166 ms                 | in 74.8 ms ± 0.4 ms                | in 151.4 ms ± 3.441 ms                        | in 80.4 ms ± 0.8 ms                | in 159.6 ms ± 8.429 ms                        |
| 262.144 kB | now ± now          | null                          | now ± now                  | in 147.6 ms ± 6.375 ms                | in 149.4 ms ± 0.49 ms              | in 296.6 ms ± 2.417 ms                        | in 161 ms ± 1.095 ms               | in 308.8 ms ± 3.763 ms                        |
| 524.288 kB | now ± now          | null                          | now ± now                  | in 294.4 ms ± 7.605 ms                | in 298.2 ms ± 0.98 ms              | in 594 ms ± 8.602 ms                          | in 304.8 ms ± 17.475 ms            | in 620.6 ms ± 23.114 ms                       |
| 1.049 MB   | in 0.2 ms ± 0.4 ms | null                          | now ± now                  | in 576.6 ms ± 3.441 ms                | in 595.6 ms ± 0.49 ms              | in 1,160.4 ms ± 6.053 ms                      | in 591.4 ms ± 25.843 ms            | in 1,181.4 ms ± 9.851 ms                      |

## MessageChannel (browser)

|            | hasTransferables       | postMessage (no transfers) | postMessage (manually)  | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ---------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 8 ms ± 9.612 ms     | in 2.8 ms ± 0.4 ms         | in 1.8 ms ± 1.166 ms    | in 2.2 ms ± 0.748 ms              | in 5.2 ms ± 1.47 ms            | in 5.6 ms ± 2.728 ms                      | in 4 ms ± 0.632 ms             | in 4.4 ms ± 1.02 ms                       |
| 2 B        | in 1.8 ms ± 1.166 ms   | in 1.8 ms ± 0.748 ms       | in 1.6 ms ± 0.49 ms     | in 2.8 ms ± 1.166 ms              | in 3.8 ms ± 2.638 ms           | in 2.6 ms ± 1.02 ms                       | in 2.6 ms ± 0.8 ms             | in 3.6 ms ± 1.356 ms                      |
| 4 B        | in 2 ms ± 0.632 ms     | in 1 second ± now          | in 2.6 ms ± 1.356 ms    | in 2.2 ms ± 1.166 ms              | in 2 ms ± 0.894 ms             | in 2.8 ms ± 1.166 ms                      | in 2.6 ms ± 0.8 ms             | in 4 ms ± 1.095 ms                        |
| 8 B        | in 2 ms ± 0.632 ms     | in 1.8 ms ± 1.166 ms       | in 2.2 ms ± 1.6 ms      | in 2.6 ms ± 1.356 ms              | in 3.2 ms ± 2.315 ms           | in 2.6 ms ± 1.356 ms                      | in 2.2 ms ± 1.166 ms           | in 4 ms ± 2.28 ms                         |
| 16 B       | in 2.2 ms ± 0.748 ms   | in 1.2 ms ± 0.4 ms         | in 1.8 ms ± 0.98 ms     | in 2.6 ms ± 1.96 ms               | in 1.8 ms ± 1.166 ms           | in 3.4 ms ± 1.497 ms                      | in 2.6 ms ± 1.356 ms           | in 3.6 ms ± 1.02 ms                       |
| 32 B       | in 3.6 ms ± 3.382 ms   | in 1.2 ms ± 0.4 ms         | in 1.6 ms ± 0.49 ms     | in 3 ms ± 1.414 ms                | in 2 ms ± 0.632 ms             | in 3.6 ms ± 3.2 ms                        | in 3.4 ms ± 1.96 ms            | in 2.4 ms ± 0.8 ms                        |
| 64 B       | in 3.4 ms ± 1.855 ms   | in 2.6 ms ± 1.2 ms         | in 2.2 ms ± 1.939 ms    | in 2.8 ms ± 1.72 ms               | in 2 ms ± 0.894 ms             | in 5 ms ± 2.757 ms                        | in 5.8 ms ± 1.327 ms           | in 3.4 ms ± 2.245 ms                      |
| 128 B      | in 3.4 ms ± 1.625 ms   | in 2 ms ± 0.894 ms         | in 2 ms ± 1.549 ms      | in 2.8 ms ± 1.6 ms                | in 2.2 ms ± 0.4 ms             | in 3.4 ms ± 1.356 ms                      | in 2.8 ms ± 0.748 ms           | in 5 ms ± 2.757 ms                        |
| 256 B      | in 3 ms ± 1.897 ms     | in 2.2 ms ± 0.98 ms        | in 2.2 ms ± 0.98 ms     | in 3.6 ms ± 1.625 ms              | in 3.2 ms ± 1.72 ms            | in 2.8 ms ± 1.166 ms                      | in 2.2 ms ± 1.166 ms           | in 4.6 ms ± 1.855 ms                      |
| 512 B      | in 4.8 ms ± 3.311 ms   | in 2.6 ms ± 1.625 ms       | in 2.2 ms ± 1.47 ms     | in 3.4 ms ± 1.497 ms              | in 3 ms ± 1.673 ms             | in 4.2 ms ± 1.47 ms                       | in 3.2 ms ± 1.166 ms           | in 4.4 ms ± 1.744 ms                      |
| 1.024 kB   | in 3.2 ms ± 0.748 ms   | in 2.8 ms ± 0.98 ms        | in 2.4 ms ± 0.49 ms     | in 4.2 ms ± 1.166 ms              | in 4.2 ms ± 1.166 ms           | in 5.6 ms ± 1.855 ms                      | in 4.4 ms ± 1.625 ms           | in 6.2 ms ± 1.327 ms                      |
| 2.048 kB   | in 5 ms ± 1.414 ms     | in 3.6 ms ± 0.49 ms        | in 3 ms ± 0.632 ms      | in 6 ms ± 1.265 ms                | in 4.8 ms ± 1.47 ms            | in 7.8 ms ± 1.939 ms                      | in 5.4 ms ± 0.8 ms             | in 7.2 ms ± 1.833 ms                      |
| 4.096 kB   | in 5 ms ± 0.894 ms     | in 5.6 ms ± 1.497 ms       | in 4.8 ms ± 0.98 ms     | in 9.2 ms ± 1.72 ms               | in 7.2 ms ± 1.327 ms           | in 10.6 ms ± 2.059 ms                     | in 8 ms ± 0.632 ms             | in 10 ms ± 1.673 ms                       |
| 8.192 kB   | in 8 ms ± 1.789 ms     | in 7.2 ms ± 1.327 ms       | in 7.4 ms ± 2.417 ms    | in 12.6 ms ± 3.382 ms             | in 11.2 ms ± 0.748 ms          | in 19.2 ms ± 1.939 ms                     | in 13 ms ± 1.549 ms            | in 19.4 ms ± 2.871 ms                     |
| 16.384 kB  | in 10.8 ms ± 1.166 ms  | in 10.4 ms ± 1.02 ms       | in 15 ms ± 8.025 ms     | in 19.6 ms ± 1.96 ms              | in 21.8 ms ± 2.926 ms          | in 29.2 ms ± 0.748 ms                     | in 23.6 ms ± 4.499 ms          | in 30 ms ± 1.549 ms                       |
| 32.768 kB  | in 18.6 ms ± 1.2 ms    | in 21 ms ± 4.336 ms        | in 21.2 ms ± 1.939 ms   | in 34.2 ms ± 1.166 ms             | in 37.4 ms ± 0.8 ms            | in 55.6 ms ± 0.49 ms                      | in 38.2 ms ± 1.166 ms          | in 55.4 ms ± 0.8 ms                       |
| 65.536 kB  | in 37.4 ms ± 4.128 ms  | in 39.6 ms ± 5.004 ms      | in 40.2 ms ± 8.998 ms   | in 66.6 ms ± 2.059 ms             | in 74 ms ± 2.608 ms            | in 108.8 ms ± 1.939 ms                    | in 74 ms ± 1.897 ms            | in 111.4 ms ± 1.497 ms                    |
| 131.072 kB | in 72.6 ms ± 3.072 ms  | in 92 ms ± 14.711 ms       | in 88.6 ms ± 11.074 ms  | in 135 ms ± 2.28 ms               | in 145 ms ± 2.098 ms           | in 211.2 ms ± 2.135 ms                    | in 149 ms ± 1.789 ms           | in 213.8 ms ± 4.578 ms                    |
| 262.144 kB | in 168.2 ms ± 13.06 ms | in 183.8 ms ± 9.683 ms     | in 169.4 ms ± 8.261 ms  | in 272.2 ms ± 9.495 ms            | in 297 ms ± 2.898 ms           | in 429.8 ms ± 6.853 ms                    | in 308.4 ms ± 7.144 ms         | in 455.4 ms ± 20.402 ms                   |
| 524.288 kB | in 325.6 ms ± 14.61 ms | in 353.6 ms ± 18.64 ms     | in 328.6 ms ± 16.848 ms | in 557.2 ms ± 15.171 ms           | in 633.6 ms ± 27.089 ms        | in 943.4 ms ± 16.268 ms                   | in 642.8 ms ± 15.065 ms        | in 972.2 ms ± 8.931 ms                    |
| 1.049 MB   | in 638.8 ms ± 5.845 ms | in 670.6 ms ± 58.15 ms     | in 587 ms ± 20.562 ms   | in 1,132.2 ms ± 43.333 ms         | in 1,209 ms ± 63.906 ms        | in 1,752.8 ms ± 23.404 ms                 | in 1,232.2 ms ± 23.276 ms      | in 1,822 ms ± 24.042 ms                   |

## Worker (browser)

|            | hasTransferables       | postMessage (no transfers) | postMessage (manually)  | postMessage (manually) (transfer) | postMessage (getTransferables) | postMessage (getTransferables) (transfer) | postMessage (getTransferable*) | postMessage (getTransferable*) (transfer) |
| ---------- | ---------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------ | ----------------------------------------- |
| 1 B        | in 18.6 ms ± 5.713 ms  | in 2.6 ms ± 2.577 ms       | in 2.8 ms ± 1.166 ms    | in 5.2 ms ± 1.166 ms              | in 6.6 ms ± 1.855 ms           | in 4.4 ms ± 1.356 ms                      | in 6.2 ms ± 0.748 ms           | in 7.8 ms ± 3.187 ms                      |
| 2 B        | in 2.4 ms ± 0.8 ms     | in 1.6 ms ± 1.02 ms        | in 1.4 ms ± 1.356 ms    | in 4 ms ± 2 ms                    | in 3.4 ms ± 0.8 ms             | in 3.6 ms ± 1.744 ms                      | in 3 ms ± 0.632 ms             | in 4.4 ms ± 1.02 ms                       |
| 4 B        | in 2.2 ms ± 1.47 ms    | in 1.8 ms ± 0.748 ms       | in 2.4 ms ± 3.382 ms    | in 3.8 ms ± 2.04 ms               | in 3 ms ± 1.414 ms             | in 2.6 ms ± 1.02 ms                       | in 2 ms ± 0.894 ms             | in 3.2 ms ± 2.04 ms                       |
| 8 B        | in 1.8 ms ± 0.748 ms   | in 2.2 ms ± 1.166 ms       | in 1.4 ms ± 1.356 ms    | in 2.6 ms ± 1.497 ms              | in 2 ms ± 0.894 ms             | in 3.4 ms ± 1.855 ms                      | in 2.4 ms ± 0.8 ms             | in 2.4 ms ± 1.744 ms                      |
| 16 B       | in 2.2 ms ± 0.98 ms    | in 1 second ± 0.894 ms     | in 1 second ± 0.632 ms  | in 2.6 ms ± 1.625 ms              | in 1.8 ms ± 0.748 ms           | in 3.6 ms ± 1.744 ms                      | in 1.8 ms ± 0.748 ms           | in 3.6 ms ± 2.871 ms                      |
| 32 B       | in 2 ms ± 0.632 ms     | in 1.6 ms ± 1.02 ms        | in 1.4 ms ± 0.8 ms      | in 2 ms ± 1.095 ms                | in 2 ms ± 0.894 ms             | in 2.8 ms ± 1.327 ms                      | in 2.4 ms ± 1.2 ms             | in 2.4 ms ± 1.96 ms                       |
| 64 B       | in 2.2 ms ± 0.98 ms    | in 1.6 ms ± 0.49 ms        | in 1 second ± 1.095 ms  | in 2.8 ms ± 1.939 ms              | in 1.8 ms ± 0.748 ms           | in 3 ms ± 1.673 ms                        | in 3.2 ms ± 2.4 ms             | in 3.4 ms ± 2.245 ms                      |
| 128 B      | in 2 ms ± 1.095 ms     | in 1.6 ms ± 0.8 ms         | in 1.4 ms ± 0.8 ms      | in 1.8 ms ± 1.166 ms              | in 2.6 ms ± 1.02 ms            | in 2.8 ms ± 2.227 ms                      | in 4.6 ms ± 2.417 ms           | in 3 ms ± 2.098 ms                        |
| 256 B      | in 2.2 ms ± 1.166 ms   | in 3 ms ± 1.095 ms         | in 1.4 ms ± 0.8 ms      | in 2 ms ± 0.894 ms                | in 3 ms ± 1.095 ms             | in 3 ms ± 1.673 ms                        | in 3.6 ms ± 1.96 ms            | in 2.6 ms ± 1.2 ms                        |
| 512 B      | in 2.2 ms ± 0.98 ms    | in 1.8 ms ± 0.748 ms       | in 1.6 ms ± 0.8 ms      | in 2.8 ms ± 1.6 ms                | in 4.8 ms ± 1.72 ms            | in 4.8 ms ± 1.833 ms                      | in 4.2 ms ± 3.544 ms           | in 3.6 ms ± 2.245 ms                      |
| 1.024 kB   | in 7.8 ms ± 3.919 ms   | in 2.4 ms ± 1.02 ms        | in 2.2 ms ± 1.166 ms    | in 3.4 ms ± 1.744 ms              | in 6 ms ± 2.53 ms              | in 4.8 ms ± 1.6 ms                        | in 3.8 ms ± 0.748 ms           | in 3.6 ms ± 0.49 ms                       |
| 2.048 kB   | in 4 ms ± 0.894 ms     | in 2.8 ms ± 0.4 ms         | in 3.2 ms ± 1.166 ms    | in 5 ms ± 1.673 ms                | in 5.6 ms ± 2.245 ms           | in 8 ms ± 3.633 ms                        | in 4.4 ms ± 1.356 ms           | in 6.6 ms ± 1.625 ms                      |
| 4.096 kB   | in 5 ms ± 0.894 ms     | in 5.4 ms ± 1.2 ms         | in 4.4 ms ± 1.2 ms      | in 8.8 ms ± 3.187 ms              | in 7.4 ms ± 1.497 ms           | in 12.2 ms ± 2.04 ms                      | in 7.8 ms ± 1.72 ms            | in 9.4 ms ± 0.8 ms                        |
| 8.192 kB   | in 8 ms ± 1.414 ms     | in 8.2 ms ± 0.98 ms        | in 6.4 ms ± 1.497 ms    | in 10.6 ms ± 0.8 ms               | in 12.6 ms ± 2.154 ms          | in 21 ms ± 2.098 ms                       | in 11.2 ms ± 0.98 ms           | in 18.6 ms ± 1.855 ms                     |
| 16.384 kB  | in 12.4 ms ± 1.02 ms   | in 13.2 ms ± 4.4 ms        | in 9.6 ms ± 1.2 ms      | in 20 ms ± 1.789 ms               | in 20.2 ms ± 0.748 ms          | in 31.2 ms ± 1.939 ms                     | in 23.4 ms ± 5.389 ms          | in 30.6 ms ± 1.356 ms                     |
| 32.768 kB  | in 19.2 ms ± 1.166 ms  | in 19.4 ms ± 0.49 ms       | in 17.8 ms ± 0.748 ms   | in 33.6 ms ± 0.49 ms              | in 42.6 ms ± 4.271 ms          | in 59 ms ± 2 ms                           | in 37.6 ms ± 0.8 ms            | in 59.6 ms ± 1.744 ms                     |
| 65.536 kB  | in 35.2 ms ± 2.227 ms  | in 43.8 ms ± 1.72 ms       | in 36.8 ms ± 3.124 ms   | in 73.8 ms ± 9.704 ms             | in 78.4 ms ± 5.004 ms          | in 108.6 ms ± 2.417 ms                    | in 73.4 ms ± 3.2 ms            | in 110.6 ms ± 2.871 ms                    |
| 131.072 kB | in 70 ms ± 2.683 ms    | in 80 ms ± 2.28 ms         | in 72.6 ms ± 1.2 ms     | in 133.4 ms ± 5.083 ms            | in 143.6 ms ± 4.454 ms         | in 214.4 ms ± 3.007 ms                    | in 146.2 ms ± 4.792 ms         | in 210.2 ms ± 7.652 ms                    |
| 262.144 kB | in 165.6 ms ± 6.053 ms | in 165.2 ms ± 7.305 ms     | in 157.8 ms ± 5.455 ms  | in 263 ms ± 5.329 ms              | in 294.8 ms ± 3.868 ms         | in 423.2 ms ± 5.776 ms                    | in 300.8 ms ± 3.544 ms         | in 442.8 ms ± 14.838 ms                   |
| 524.288 kB | in 301 ms ± 7.563 ms   | in 331.2 ms ± 13.437 ms    | in 296 ms ± 8.222 ms    | in 539.2 ms ± 14.414 ms           | in 599.8 ms ± 6.431 ms         | in 894.4 ms ± 16.895 ms                   | in 613.2 ms ± 5.154 ms         | in 899.8 ms ± 12.254 ms                   |
| 1.049 MB   | in 606.6 ms ± 8.616 ms | in 617.6 ms ± 12.192 ms    | in 562.2 ms ± 11.444 ms | in 1,093.8 ms ± 17.337 ms         | in 1,151 ms ± 12.977 ms        | in 1,694.4 ms ± 14.221 ms                 | in 1,166 ms ± 7.797 ms         | in 1,720.8 ms ± 25.561 ms                 |