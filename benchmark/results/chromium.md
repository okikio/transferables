# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.16 ms    | null                          | in 4.36 ms ± 1.139 ms       | in 7.22 ms ± 7.027 ms              | in 4.14 ms ± 0.905 ms              |
| 2 B        | in 1.76 ms ± 3.27 ms    | null                          | in 3.54 ms ± 0.637 ms       | in 6.08 ms ± 5.024 ms              | in 10.06 ms ± 10.274 ms            |
| 4 B        | in 0.1 ms ± now         | null                          | in 3.08 ms ± 0.407 ms       | in 3.64 ms ± 0.838 ms              | in 4.4 ms ± 1.677 ms               |
| 8 B        | in 0.84 ms ± 1.481 ms   | null                          | in 3.16 ms ± 0.463 ms       | in 4.32 ms ± 2.191 ms              | in 3.62 ms ± 0.397 ms              |
| 16 B       | in 0.16 ms ± 0.08 ms    | null                          | in 4.38 ms ± 1.781 ms       | in 3.86 ms ± 0.941 ms              | in 3.64 ms ± 0.512 ms              |
| 32 B       | in 0.34 ms ± 0.383 ms   | null                          | in 5.08 ms ± 2.34 ms        | in 3.98 ms ± 0.556 ms              | in 3.58 ms ± 0.571 ms              |
| 64 B       | in 0.54 ms ± 0.981 ms   | null                          | in 5.24 ms ± 2.835 ms       | in 3.98 ms ± 0.56 ms               | in 5.74 ms ± 3.356 ms              |
| 128 B      | in 0.08 ms ± 0.075 ms   | null                          | in 3.64 ms ± 0.492 ms       | in 4.12 ms ± 0.471 ms              | in 3.92 ms ± 0.591 ms              |
| 256 B      | in 0.26 ms ± 0.372 ms   | null                          | in 6.28 ms ± 2.647 ms       | in 4.96 ms ± 1.271 ms              | in 4.48 ms ± 1.112 ms              |
| 512 B      | in 0.12 ms ± 0.04 ms    | null                          | in 5.76 ms ± 1.691 ms       | in 7.4 ms ± 3.823 ms               | in 5.3 ms ± 0.607 ms               |
| 1.024 kB   | in 0.06 ms ± 0.12 ms    | null                          | in 5.52 ms ± 0.618 ms       | in 8.46 ms ± 0.766 ms              | in 7.28 ms ± 0.515 ms              |
| 2.048 kB   | in 0.36 ms ± 0.427 ms   | null                          | in 7.68 ms ± 0.487 ms       | in 13.14 ms ± 0.907 ms             | in 12.28 ms ± 1.389 ms             |
| 4.096 kB   | in 0.14 ms ± 0.136 ms   | null                          | in 12.38 ms ± 0.788 ms      | in 22.66 ms ± 0.811 ms             | in 21.78 ms ± 3.188 ms             |
| 8.192 kB   | in 13.24 ms ± 23.718 ms | null                          | in 23.58 ms ± 1.99 ms       | in 48.94 ms ± 6.867 ms             | in 38.92 ms ± 2.677 ms             |
| 16.384 kB  | in 0.56 ms ± 0.671 ms   | null                          | in 41.9 ms ± 1.956 ms       | in 84.18 ms ± 0.898 ms             | in 75.92 ms ± 4.49 ms              |
| 32.768 kB  | in 0.46 ms ± 0.049 ms   | null                          | in 126.08 ms ± 33.392 ms    | in 181.8 ms ± 18.984 ms            | in 153.36 ms ± 1.266 ms            |
| 65.536 kB  | in 1.32 ms ± 0.591 ms   | null                          | in 180.18 ms ± 4.287 ms     | in 352.42 ms ± 20.508 ms           | in 306.96 ms ± 6.228 ms            |
| 131.072 kB | in 6.14 ms ± 3.372 ms   | null                          | in 404.94 ms ± 38.66 ms     | in 707.24 ms ± 15.584 ms           | in 618.08 ms ± 4.924 ms            |
| 262.144 kB | in 5.86 ms ± 0.665 ms   | null                          | in 845.56 ms ± 33.846 ms    | in 1,538.84 ms ± 59.629 ms         | in 1,331.98 ms ± 36.62 ms          |
| 524.288 kB | in 24.88 ms ± 17.738 ms | null                          | in 1,727.32 ms ± 169.207 ms | in 3,010.7 ms ± 74.772 ms          | in 2,654.18 ms ± 42.987 ms         |
| 1.049 MB   | in 19.62 ms ± 4.528 ms  | null                          | in 3,253.64 ms ± 104.072 ms | in 5,881.24 ms ± 73.109 ms         | in 5,140 ms ± 28.824 ms            |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 23.16 ms ± 27.965 ms     | in 11.42 ms ± 6.043 ms      | in 27 ms ± 15.447 ms        | in 27.28 ms ± 15.501 ms        | in 44.34 ms ± 41.188 ms        |
| 2 B        | in 6.72 ms ± 5.793 ms       | in 5.88 ms ± 1.481 ms       | in 29.24 ms ± 26.227 ms     | in 47.7 ms ± 37.761 ms         | in 17.3 ms ± 9.856 ms          |
| 4 B        | in 6.72 ms ± 4.594 ms       | in 7.3 ms ± 4.555 ms        | in 12.52 ms ± 3.961 ms      | in 31.6 ms ± 42.183 ms         | in 9.16 ms ± 1.343 ms          |
| 8 B        | in 9.2 ms ± 9.913 ms        | in 7.32 ms ± 4.622 ms       | in 9.72 ms ± 1.592 ms       | in 10.16 ms ± 1.878 ms         | in 8.48 ms ± 0.624 ms          |
| 16 B       | in 8.14 ms ± 7.12 ms        | in 17.48 ms ± 24.151 ms     | in 9.4 ms ± 0.86 ms         | in 10.4 ms ± 4.118 ms          | in 8.82 ms ± 1.112 ms          |
| 32 B       | in 8.94 ms ± 8.771 ms       | in 5.08 ms ± 1.067 ms       | in 8.32 ms ± 1.098 ms       | in 8.54 ms ± 0.504 ms          | in 8.88 ms ± 1.441 ms          |
| 64 B       | in 8.5 ms ± 8.856 ms        | in 6.94 ms ± 3.123 ms       | in 8.28 ms ± 1.182 ms       | in 9.46 ms ± 1.597 ms          | in 8.46 ms ± 0.408 ms          |
| 128 B      | in 9.52 ms ± 10.848 ms      | in 5.84 ms ± 1.508 ms       | in 7.96 ms ± 0.589 ms       | in 9.36 ms ± 0.326 ms          | in 10.06 ms ± 1.34 ms          |
| 256 B      | in 7.62 ms ± 5.439 ms       | in 5.6 ms ± 1.212 ms        | in 8.32 ms ± 0.445 ms       | in 9.8 ms ± 0.482 ms           | in 10.02 ms ± 0.271 ms         |
| 512 B      | in 6.66 ms ± 3.479 ms       | in 18.52 ms ± 25.205 ms     | in 10.02 ms ± 0.679 ms      | in 11.98 ms ± 0.744 ms         | in 13.26 ms ± 2.997 ms         |
| 1.024 kB   | in 6.72 ms ± 1.348 ms       | in 13.52 ms ± 4.345 ms      | in 15.44 ms ± 5.822 ms      | in 16.04 ms ± 1.291 ms         | in 16.78 ms ± 3.832 ms         |
| 2.048 kB   | in 11.26 ms ± 4.592 ms      | in 12.4 ms ± 5.876 ms       | in 16.62 ms ± 0.637 ms      | in 31.56 ms ± 1.312 ms         | in 20.84 ms ± 0.488 ms         |
| 4.096 kB   | in 22.76 ms ± 3.494 ms      | in 23.3 ms ± 7.983 ms       | in 35.28 ms ± 1.007 ms      | in 39.42 ms ± 0.531 ms         | in 46.92 ms ± 7.973 ms         |
| 8.192 kB   | in 30.14 ms ± 0.578 ms      | in 38.5 ms ± 15.581 ms      | in 54.22 ms ± 1.858 ms      | in 70 ms ± 0.955 ms            | in 84.12 ms ± 27.169 ms        |
| 16.384 kB  | in 44.42 ms ± 2.389 ms      | in 53.1 ms ± 15.473 ms      | in 109.94 ms ± 46.29 ms     | in 130.74 ms ± 1.359 ms        | in 118.68 ms ± 0.453 ms        |
| 32.768 kB  | in 93.04 ms ± 1.174 ms      | in 96.52 ms ± 2.529 ms      | in 245.68 ms ± 132.325 ms   | in 265.6 ms ± 2.436 ms         | in 238.78 ms ± 1.015 ms        |
| 65.536 kB  | in 179.64 ms ± 1.704 ms     | in 190.14 ms ± 4.994 ms     | in 492.7 ms ± 269.608 ms    | in 529.72 ms ± 5.769 ms        | in 486.44 ms ± 8.383 ms        |
| 131.072 kB | in 538.46 ms ± 297.246 ms   | in 420.98 ms ± 55.39 ms     | in 825.86 ms ± 57.035 ms    | in 1,146.18 ms ± 35.039 ms     | in 1,078.4 ms ± 54.24 ms       |
| 262.144 kB | in 897.8 ms ± 93.494 ms     | in 909.12 ms ± 64.637 ms    | in 1,673.54 ms ± 110.079 ms | in 2,513.98 ms ± 209.74 ms     | in 2,238.28 ms ± 123.747 ms    |
| 524.288 kB | in 1,682.94 ms ± 108.799 ms | in 1,820.3 ms ± 206.902 ms  | in 3,845.98 ms ± 883.116 ms | in 4,696 ms ± 145.914 ms       | in 4,474.88 ms ± 249.163 ms    |
| 1.049 MB   | in 3,406.5 ms ± 266.592 ms  | in 3,534.56 ms ± 239.549 ms | in 6,823.52 ms ± 514.62 ms  | in 9,197.82 ms ± 159.82 ms     | in 8,638.4 ms ± 154.822 ms     |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 125.18 ms ± 66.384 ms  | in 5.22 ms ± 0.608 ms      | in 10.9 ms ± 7.66 ms        | in 19.96 ms ± 2.113 ms         | in 18.74 ms ± 6.875 ms         |
| 2 B        | in 61.5 ms ± 47.602 ms    | in 5.44 ms ± 1.795 ms      | in 7.16 ms ± 0.709 ms       | in 23.16 ms ± 6.118 ms         | in 22.8 ms ± 8.961 ms          |
| 4 B        | in 73.62 ms ± 61.688 ms   | in 5.18 ms ± 0.676 ms      | in 6.56 ms ± 0.388 ms       | in 24.4 ms ± 13.136 ms         | in 15.42 ms ± 4.59 ms          |
| 8 B        | in 65.56 ms ± 36.812 ms   | in 4.54 ms ± 0.796 ms      | in 8.04 ms ± 1.947 ms       | in 13.68 ms ± 4.868 ms         | in 15.6 ms ± 10.247 ms         |
| 16 B       | in 63.68 ms ± 37.159 ms   | in 4.82 ms ± 0.911 ms      | in 9.82 ms ± 1.883 ms       | in 19.36 ms ± 16.317 ms        | in 9.04 ms ± 2.795 ms          |
| 32 B       | in 36.02 ms ± 27.726 ms   | in 4.58 ms ± 0.728 ms      | in 7.96 ms ± 1.942 ms       | in 12.58 ms ± 2.987 ms         | in 18.58 ms ± 19.3 ms          |
| 64 B       | in 19.56 ms ± 18.248 ms   | in 7.82 ms ± 0.584 ms      | in 7.56 ms ± 1.171 ms       | in 10.86 ms ± 2.626 ms         | in 11.76 ms ± 3.878 ms         |
| 128 B      | in 16.5 ms ± 16.573 ms    | in 5.12 ms ± 0.605 ms      | in 9.72 ms ± 1.132 ms       | in 9.44 ms ± 0.975 ms          | in 9.26 ms ± 1.337 ms          |
| 256 B      | in 22.6 ms ± 22.87 ms     | in 6.12 ms ± 1.042 ms      | in 7.8 ms ± 0.358 ms        | in 9.32 ms ± 1.356 ms          | in 16.56 ms ± 10.133 ms        |
| 512 B      | in 14.38 ms ± 8.704 ms    | in 6 ms ± 1.257 ms         | in 10.36 ms ± 1.774 ms      | in 15.56 ms ± 9.309 ms         | in 11.76 ms ± 3.11 ms          |
| 1.024 kB   | in 13.68 ms ± 6.558 ms    | in 7.84 ms ± 1.25 ms       | in 11.42 ms ± 0.736 ms      | in 15.58 ms ± 3.211 ms         | in 13.36 ms ± 0.609 ms         |
| 2.048 kB   | in 16.76 ms ± 7.755 ms    | in 10.78 ms ± 4.312 ms     | in 15.22 ms ± 0.376 ms      | in 21.38 ms ± 0.676 ms         | in 21.48 ms ± 3.93 ms          |
| 4.096 kB   | in 21.06 ms ± 2.658 ms    | in 14.56 ms ± 1.263 ms     | in 25.34 ms ± 0.916 ms      | in 36.64 ms ± 1.086 ms         | in 31.84 ms ± 0.656 ms         |
| 8.192 kB   | in 31.18 ms ± 5.388 ms    | in 23.92 ms ± 0.293 ms     | in 45.72 ms ± 1.201 ms      | in 68.6 ms ± 1.203 ms          | in 57.84 ms ± 1.803 ms         |
| 16.384 kB  | in 46.74 ms ± 0.445 ms    | in 46.08 ms ± 1.103 ms     | in 86.6 ms ± 1.356 ms       | in 128.52 ms ± 0.504 ms        | in 112.24 ms ± 2.98 ms         |
| 32.768 kB  | in 93.54 ms ± 1.524 ms    | in 97.1 ms ± 2.01 ms       | in 237.12 ms ± 25.937 ms    | in 249.8 ms ± 2.091 ms         | in 227.22 ms ± 2.271 ms        |
| 65.536 kB  | in 185.38 ms ± 3.532 ms   | in 236.96 ms ± 11.964 ms   | in 365.16 ms ± 2.666 ms     | in 497.98 ms ± 2.9 ms          | in 463.32 ms ± 21.085 ms       |
| 131.072 kB | in 425.66 ms ± 31.758 ms  | in 399.54 ms ± 11.286 ms   | in 770.72 ms ± 34.779 ms    | in 1,039.52 ms ± 34.275 ms     | in 1,022.26 ms ± 111.345 ms    |
| 262.144 kB | in 812.34 ms ± 44.334 ms  | in 824.04 ms ± 21.727 ms   | in 1,635.42 ms ± 43.725 ms  | in 2,226.4 ms ± 89.207 ms      | in 2,057.36 ms ± 68.123 ms     |
| 524.288 kB | in 1,602.3 ms ± 51.115 ms | in 1,640.26 ms ± 29.367 ms | in 3,196.38 ms ± 76.746 ms  | in 4,328.84 ms ± 47.234 ms     | in 3,957.96 ms ± 19.554 ms     |
| 1.049 MB   | in 3,229.7 ms ± 31.161 ms | in 3,304.6 ms ± 77.387 ms  | in 6,440.82 ms ± 156.268 ms | in 8,654.84 ms ± 139.14 ms     | in 7,889.58 ms ± 101.2 ms      |