# Bun

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.177 ms ± 0.256 ms   | null                          | in 4.474 ms ± 1.664 ms       | in 6.431 ms ± 4.857 ms             | in 4.167 ms ± 0.946 ms             |
| 2 B        | in 0.058 ms ± 0.025 ms   | null                          | in 4.999 ms ± 1.508 ms       | in 4.123 ms ± 0.694 ms             | in 3.971 ms ± 0.65 ms              |
| 4 B        | in 0.056 ms ± 0.02 ms    | null                          | in 3.566 ms ± 0.405 ms       | in 3.766 ms ± 0.482 ms             | in 5.409 ms ± 3.399 ms             |
| 8 B        | in 0.056 ms ± 0.022 ms   | null                          | in 5.417 ms ± 3.793 ms       | in 10.732 ms ± 4.079 ms            | in 3.715 ms ± 0.355 ms             |
| 16 B       | in 0.054 ms ± 0.019 ms   | null                          | in 3.689 ms ± 0.448 ms       | in 3.81 ms ± 0.585 ms              | in 6.583 ms ± 6.244 ms             |
| 32 B       | in 0.267 ms ± 0.427 ms   | null                          | in 14.127 ms ± 7.91 ms       | in 3.595 ms ± 0.275 ms             | in 3.516 ms ± 0.348 ms             |
| 64 B       | in 0.051 ms ± 0.013 ms   | null                          | in 3.521 ms ± 0.435 ms       | in 3.956 ms ± 0.537 ms             | in 3.592 ms ± 0.253 ms             |
| 128 B      | in 0.051 ms ± 0.014 ms   | null                          | in 3.491 ms ± 0.194 ms       | in 10.398 ms ± 3.264 ms            | in 3.93 ms ± 0.206 ms              |
| 256 B      | in 0.069 ms ± 0.031 ms   | null                          | in 4.514 ms ± 0.683 ms       | in 5.254 ms ± 1.958 ms             | in 8.311 ms ± 8.497 ms             |
| 512 B      | in 0.058 ms ± 0.022 ms   | null                          | in 4.21 ms ± 0.063 ms        | in 5.263 ms ± 0.13 ms              | in 4.902 ms ± 0.142 ms             |
| 1.024 kB   | in 0.089 ms ± 0.071 ms   | null                          | in 5.004 ms ± 0.178 ms       | in 12.345 ms ± 2.75 ms             | in 6.473 ms ± 0.071 ms             |
| 2.048 kB   | in 0.094 ms ± 0.063 ms   | null                          | in 7.586 ms ± 1.835 ms       | in 11.068 ms ± 0.094 ms            | in 9.953 ms ± 0.151 ms             |
| 4.096 kB   | in 0.118 ms ± 0.085 ms   | null                          | in 11.285 ms ± 2.19 ms       | in 18.541 ms ± 0.104 ms            | in 17.191 ms ± 0.816 ms            |
| 8.192 kB   | in 0.116 ms ± 0.018 ms   | null                          | in 17.772 ms ± 1.092 ms      | in 36.308 ms ± 1.691 ms            | in 31.089 ms ± 1.114 ms            |
| 16.384 kB  | in 0.272 ms ± now        | null                          | in 33.85 ms ± 0.943 ms       | in 68.931 ms ± 2.858 ms            | in 62.489 ms ± 1.348 ms            |
| 32.768 kB  | in 0.524 ms ± 0.091 ms   | null                          | in 62.785 ms ± 0.584 ms      | in 134.008 ms ± 5.689 ms           | in 113.783 ms ± 0.507 ms           |
| 65.536 kB  | in 1.192 ms ± 0.008 ms   | null                          | in 165.713 ms ± 35.231 ms    | in 262.851 ms ± 9.246 ms           | in 225.407 ms ± 1.888 ms           |
| 131.072 kB | in 2.771 ms ± 0.017 ms   | null                          | in 246.233 ms ± 1.809 ms     | in 516.761 ms ± 1.101 ms           | in 444.992 ms ± 2.726 ms           |
| 262.144 kB | in 10.422 ms ± 3.094 ms  | null                          | in 651.551 ms ± 37.15 ms     | in 1,289.206 ms ± 98.974 ms        | in 1,169.753 ms ± 108.72 ms        |
| 524.288 kB | in 10.901 ms ± 1.475 ms  | null                          | in 1,323.841 ms ± 110.877 ms | in 2,304.94 ms ± 23.575 ms         | in 2,092.37 ms ± 39.366 ms         |
| 1.049 MB   | in 34.647 ms ± 25.633 ms | null                          | in 2,446.232 ms ± 61.092 ms  | in 4,600.473 ms ± 109.226 ms       | in 3,975.287 ms ± 45.417 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 15.758 ms ± 8.919 ms      | null                       | in 19.242 ms ± 8.058 ms      | in 14.902 ms ± 3.033 ms        | in 17.011 ms ± 6.341 ms        |
| 2 B        | in 12.352 ms ± 5.157 ms      | null                       | in 18.994 ms ± 9.648 ms      | in 18.988 ms ± 10.967 ms       | in 18.01 ms ± 8.609 ms         |
| 4 B        | in 15.934 ms ± 11.972 ms     | null                       | in 18.157 ms ± 11.804 ms     | in 18.257 ms ± 7.566 ms        | in 14.856 ms ± 3.927 ms        |
| 8 B        | in 12.427 ms ± 8.45 ms       | null                       | in 12.735 ms ± 3.448 ms      | in 16.55 ms ± 7.495 ms         | in 12.445 ms ± 2.372 ms        |
| 16 B       | in 16.458 ms ± 8.146 ms      | null                       | in 11.939 ms ± 2.494 ms      | in 13.262 ms ± 2.283 ms        | in 11.409 ms ± 1.981 ms        |
| 32 B       | in 8.013 ms ± 3.151 ms       | null                       | in 11.895 ms ± 2.371 ms      | in 14.801 ms ± 3.812 ms        | in 10.927 ms ± 1.747 ms        |
| 64 B       | in 7.014 ms ± 2.108 ms       | null                       | in 21.292 ms ± 2.591 ms      | in 27.886 ms ± 8.706 ms        | in 19.71 ms ± 2.483 ms         |
| 128 B      | in 6.144 ms ± 1.002 ms       | null                       | in 13.472 ms ± 3.631 ms      | in 19.097 ms ± 7.563 ms        | in 12.271 ms ± 2.544 ms        |
| 256 B      | in 7.261 ms ± 2.031 ms       | null                       | in 12.93 ms ± 2.394 ms       | in 14.105 ms ± 2.58 ms         | in 12.386 ms ± 2.193 ms        |
| 512 B      | in 12.957 ms ± 3.313 ms      | null                       | in 27.5 ms ± 4.529 ms        | in 28.265 ms ± 3.245 ms        | in 28.644 ms ± 2.697 ms        |
| 1.024 kB   | in 8.86 ms ± 2.178 ms        | null                       | in 14.776 ms ± 2.619 ms      | in 17.811 ms ± 3.57 ms         | in 16.956 ms ± 1.864 ms        |
| 2.048 kB   | in 12.418 ms ± 5.662 ms      | null                       | in 17.97 ms ± 2.55 ms        | in 30.314 ms ± 2.752 ms        | in 21.052 ms ± 1.658 ms        |
| 4.096 kB   | in 13.703 ms ± 1.343 ms      | null                       | in 26.074 ms ± 2.576 ms      | in 39.479 ms ± 2.869 ms        | in 32.457 ms ± 1.419 ms        |
| 8.192 kB   | in 24.562 ms ± 2.157 ms      | null                       | in 41.242 ms ± 1.947 ms      | in 60.961 ms ± 2.4 ms          | in 53.028 ms ± 2.228 ms        |
| 16.384 kB  | in 41.447 ms ± 1.541 ms      | null                       | in 80.206 ms ± 5.153 ms      | in 109.473 ms ± 1.636 ms       | in 99.103 ms ± 1.179 ms        |
| 32.768 kB  | in 71.027 ms ± 5.351 ms      | null                       | in 138.521 ms ± 3.921 ms     | in 212.839 ms ± 12.002 ms      | in 189.672 ms ± 5.756 ms       |
| 65.536 kB  | in 132.742 ms ± 2.382 ms     | null                       | in 277.859 ms ± 14.229 ms    | in 391.851 ms ± 3.983 ms       | in 354.239 ms ± 2.476 ms       |
| 131.072 kB | in 269.58 ms ± 21.254 ms     | null                       | in 749.369 ms ± 184.223 ms   | in 1,032.2 ms ± 144.572 ms     | in 992.255 ms ± 143.5 ms       |
| 262.144 kB | in 973.833 ms ± 222.668 ms   | null                       | in 1,596.741 ms ± 321.543 ms | in 2,168.389 ms ± 357.933 ms   | in 2,010.485 ms ± 347.772 ms   |
| 524.288 kB | in 1,329.57 ms ± 87.062 ms   | null                       | in 2,648.137 ms ± 174.584 ms | in 3,846.245 ms ± 251.357 ms   | in 3,524.629 ms ± 215.502 ms   |
| 1.049 MB   | in 2,640.504 ms ± 158.919 ms | null                       | in 5,308.753 ms ± 245.842 ms | in 7,428.577 ms ± 315.325 ms   | in 7,126.365 ms ± 538.12 ms    |