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