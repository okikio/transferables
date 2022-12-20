# Node

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.203 ms ± 0.26 ms   | null                          | in 5.114 ms ± 1.603 ms       | in 6.832 ms ± 3.208 ms             | in 4.829 ms ± 0.905 ms             |
| 2 B        | in 0.087 ms ± 0.026 ms  | null                          | in 4.229 ms ± 0.27 ms        | in 4.372 ms ± 0.269 ms             | in 6.299 ms ± 3.443 ms             |
| 4 B        | in 0.083 ms ± 0.023 ms  | null                          | in 4.032 ms ± 0.274 ms       | in 4.434 ms ± 0.606 ms             | in 4.223 ms ± 0.319 ms             |
| 8 B        | in 0.075 ms ± 0.024 ms  | null                          | in 5.094 ms ± 2.28 ms        | in 14.848 ms ± 5.205 ms            | in 4.381 ms ± 0.425 ms             |
| 16 B       | in 0.074 ms ± 0.021 ms  | null                          | in 4.23 ms ± 0.618 ms        | in 6.589 ms ± 4.804 ms             | in 7.483 ms ± 6.731 ms             |
| 32 B       | in 0.086 ms ± 0.023 ms  | null                          | in 17.645 ms ± 8.406 ms      | in 3.906 ms ± 0.136 ms             | in 5.514 ms ± 3.59 ms              |
| 64 B       | in 0.074 ms ± 0.014 ms  | null                          | in 3.634 ms ± 0.17 ms        | in 4.107 ms ± 0.182 ms             | in 4.805 ms ± 1.808 ms             |
| 128 B      | in 0.073 ms ± 0.017 ms  | null                          | in 3.76 ms ± 0.246 ms        | in 14.391 ms ± 5.005 ms            | in 4.357 ms ± 0.175 ms             |
| 256 B      | in 0.084 ms ± 0.028 ms  | null                          | in 4.21 ms ± 0.24 ms         | in 5.068 ms ± 0.18 ms              | in 8.75 ms ± 7.906 ms              |
| 512 B      | in 0.085 ms ± 0.018 ms  | null                          | in 4.68 ms ± 0.212 ms        | in 6.425 ms ± 0.132 ms             | in 6.051 ms ± 0.073 ms             |
| 1.024 kB   | in 0.118 ms ± 0.073 ms  | null                          | in 5.497 ms ± 0.286 ms       | in 16.959 ms ± 4.03 ms             | in 8.556 ms ± 0.081 ms             |
| 2.048 kB   | in 0.123 ms ± 0.071 ms  | null                          | in 8.731 ms ± 2.669 ms       | in 14.975 ms ± 0.176 ms            | in 13.82 ms ± 0.111 ms             |
| 4.096 kB   | in 0.152 ms ± 0.093 ms  | null                          | in 12.665 ms ± 2.628 ms      | in 26.242 ms ± 0.156 ms            | in 24.807 ms ± 1.193 ms            |
| 8.192 kB   | in 0.15 ms ± 0.022 ms   | null                          | in 19.558 ms ± 1.454 ms      | in 51.795 ms ± 2.17 ms             | in 47.487 ms ± 2.852 ms            |
| 16.384 kB  | in 0.364 ms ± 0.032 ms  | null                          | in 38.064 ms ± 1.395 ms      | in 97.68 ms ± 3.245 ms             | in 93.947 ms ± 2.617 ms            |
| 32.768 kB  | in 0.923 ms ± 0.578 ms  | null                          | in 68.317 ms ± 0.453 ms      | in 191.152 ms ± 6.834 ms           | in 171.644 ms ± 0.796 ms           |
| 65.536 kB  | in 1.421 ms ± 0.067 ms  | null                          | in 190.213 ms ± 36.414 ms    | in 372.223 ms ± 1.459 ms           | in 341.533 ms ± 1.888 ms           |
| 131.072 kB | in 3.242 ms ± 0.09 ms   | null                          | in 269.729 ms ± 3.297 ms     | in 749.307 ms ± 2.044 ms           | in 681.035 ms ± 4.611 ms           |
| 262.144 kB | in 12.894 ms ± 2.98 ms  | null                          | in 717.432 ms ± 50.469 ms    | in 1,834.97 ms ± 105.585 ms        | in 1,691.321 ms ± 173.699 ms       |
| 524.288 kB | in 27.95 ms ± 21.934 ms | null                          | in 1,526.374 ms ± 184.355 ms | in 3,324.191 ms ± 32.256 ms        | in 3,200.539 ms ± 138.452 ms       |
| 1.049 MB   | in 31.327 ms ± 9.741 ms | null                          | in 2,833.452 ms ± 126.026 ms | in 6,703.189 ms ± 145.228 ms       | in 6,112.84 ms ± 99.754 ms         |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19.042 ms ± 11.867 ms     | null                       | in 18.426 ms ± 4.223 ms      | in 24.403 ms ± 15.065 ms       | in 18.891 ms ± 3.285 ms        |
| 2 B        | in 16.636 ms ± 11.208 ms     | null                       | in 15.685 ms ± 2.928 ms      | in 22.232 ms ± 12.063 ms       | in 17.302 ms ± 3.014 ms        |
| 4 B        | in 15.834 ms ± 7.815 ms      | null                       | in 14.626 ms ± 2.375 ms      | in 20.471 ms ± 9.323 ms        | in 15.982 ms ± 2.86 ms         |
| 8 B        | in 15.993 ms ± 6.524 ms      | null                       | in 13.622 ms ± 2.197 ms      | in 19.831 ms ± 9.339 ms        | in 15.884 ms ± 2.779 ms        |
| 16 B       | in 16.023 ms ± 8.955 ms      | null                       | in 12.749 ms ± 1.85 ms       | in 21.284 ms ± 12.604 ms       | in 15.232 ms ± 2.375 ms        |
| 32 B       | in 11.994 ms ± 6.274 ms      | null                       | in 13.19 ms ± 2.223 ms       | in 23.364 ms ± 12.542 ms       | in 16.759 ms ± 3.434 ms        |
| 64 B       | in 12.086 ms ± 6.337 ms      | null                       | in 26.695 ms ± 3.22 ms       | in 36.447 ms ± 10.574 ms       | in 30.32 ms ± 2.919 ms         |
| 128 B      | in 12.159 ms ± 6.698 ms      | null                       | in 16.319 ms ± 4.249 ms      | in 17.2 ms ± 3.503 ms          | in 16.623 ms ± 3.077 ms        |
| 256 B      | in 13.811 ms ± 6.159 ms      | null                       | in 15.027 ms ± 2.542 ms      | in 17.575 ms ± 3.36 ms         | in 17.091 ms ± 3.497 ms        |
| 512 B      | in 20.4 ms ± 7.87 ms         | null                       | in 37.349 ms ± 3.816 ms      | in 37.409 ms ± 4.521 ms        | in 39.551 ms ± 5.933 ms        |
| 1.024 kB   | in 12.211 ms ± 3.461 ms      | null                       | in 17.874 ms ± 3.176 ms      | in 24.129 ms ± 3.869 ms        | in 22.448 ms ± 3.539 ms        |
| 2.048 kB   | in 17.836 ms ± 6.808 ms      | null                       | in 21.356 ms ± 3.454 ms      | in 40.715 ms ± 3.983 ms        | in 29.396 ms ± 3.938 ms        |
| 4.096 kB   | in 18.839 ms ± 3.805 ms      | null                       | in 30.74 ms ± 3.001 ms       | in 55.17 ms ± 5.018 ms         | in 44.466 ms ± 2.846 ms        |
| 8.192 kB   | in 30.17 ms ± 4.746 ms       | null                       | in 46.704 ms ± 2.473 ms      | in 86.963 ms ± 6.949 ms        | in 73.34 ms ± 4.775 ms         |
| 16.384 kB  | in 49.145 ms ± 3.387 ms      | null                       | in 89.507 ms ± 4.37 ms       | in 145.205 ms ± 2.716 ms       | in 134.763 ms ± 2.582 ms       |
| 32.768 kB  | in 79.91 ms ± 5.934 ms       | null                       | in 151.5 ms ± 4.722 ms       | in 275.275 ms ± 5.164 ms       | in 259.736 ms ± 8.885 ms       |
| 65.536 kB  | in 146.753 ms ± 2.945 ms     | null                       | in 300.473 ms ± 12.475 ms    | in 526.077 ms ± 2.357 ms       | in 493.299 ms ± 4.75 ms        |
| 131.072 kB | in 299.672 ms ± 26.784 ms    | null                       | in 871.024 ms ± 198.606 ms   | in 1,378.963 ms ± 218.442 ms   | in 1,369.684 ms ± 206.399 ms   |
| 262.144 kB | in 1,068.76 ms ± 245.023 ms  | null                       | in 1,895.992 ms ± 422.553 ms | in 2,872.007 ms ± 507.292 ms   | in 2,664.164 ms ± 299.396 ms   |
| 524.288 kB | in 1,531.793 ms ± 61.594 ms  | null                       | in 3,066.595 ms ± 227.132 ms | in 5,047.54 ms ± 191.542 ms    | in 4,782.361 ms ± 348.911 ms   |
| 1.049 MB   | in 2,964.495 ms ± 188.452 ms | null                       | in 5,880.311 ms ± 316.215 ms | in 9,806.665 ms ± 302.205 ms   | in 9,591.13 ms ± 532.482 ms    |