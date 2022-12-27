# Node

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.164 ms ± 0.21 ms  | null                          | in 4.977 ms ± 1.501 ms       | in 4.163 ms ± 0.647 ms             | in 7.078 ms ± 3.96 ms              |
| 2 B        | in 0.062 ms ± 0.012 ms | null                          | in 5.476 ms ± 3.254 ms       | in 3.909 ms ± 0.295 ms             | in 3.938 ms ± 0.293 ms             |
| 4 B        | in 0.058 ms ± 0.01 ms  | null                          | in 3.796 ms ± 0.207 ms       | in 3.898 ms ± 0.292 ms             | in 3.956 ms ± 0.382 ms             |
| 8 B        | in 1.351 ms ± 2.584 ms | null                          | in 4.23 ms ± 0.862 ms        | in 5.845 ms ± 3.911 ms             | in 4.069 ms ± 0.302 ms             |
| 16 B       | in 0.053 ms ± 0.006 ms | null                          | in 3.985 ms ± 0.467 ms       | in 3.903 ms ± 0.257 ms             | in 6.385 ms ± 5.202 ms             |
| 32 B       | in 0.059 ms ± 0.016 ms | null                          | in 3.869 ms ± 0.161 ms       | in 11.922 ms ± 6.684 ms            | in 3.554 ms ± 0.299 ms             |
| 64 B       | in 0.046 ms ± 0.013 ms | null                          | in 4.47 ms ± 2.399 ms        | in 3.802 ms ± 0.798 ms             | in 5.221 ms ± 3.316 ms             |
| 128 B      | in 0.046 ms ± 0.005 ms | null                          | in 5.332 ms ± 3.734 ms       | in 3.699 ms ± 0.252 ms             | in 3.732 ms ± 0.179 ms             |
| 256 B      | in 0.05 ms ± 0.006 ms  | null                          | in 4.573 ms ± 0.691 ms       | in 3.939 ms ± 0.173 ms             | in 4.205 ms ± 0.651 ms             |
| 512 B      | in 0.046 ms ± 0.006 ms | null                          | in 4.186 ms ± 0.256 ms       | in 5.951 ms ± 3.105 ms             | in 4.619 ms ± 0.043 ms             |
| 1.024 kB   | in 0.067 ms ± 0.046 ms | null                          | in 5.145 ms ± 0.5 ms         | in 5.548 ms ± 0.261 ms             | in 5.942 ms ± 0.196 ms             |
| 2.048 kB   | in 0.365 ms ± 0.637 ms | null                          | in 6.658 ms ± 0.122 ms       | in 7.722 ms ± 0.112 ms             | in 10.202 ms ± 2.118 ms            |
| 4.096 kB   | in 0.048 ms ± now      | null                          | in 10.267 ms ± 0.333 ms      | in 12.65 ms ± 1.102 ms             | in 15.199 ms ± 1.266 ms            |
| 8.192 kB   | in 0.05 ms ± 0.007 ms  | null                          | in 17.612 ms ± 1.083 ms      | in 21.655 ms ± 1.442 ms            | in 24.737 ms ± 1.068 ms            |
| 16.384 kB  | in 0.052 ms ± 0.007 ms | null                          | in 34.75 ms ± 0.614 ms       | in 42.071 ms ± 3.138 ms            | in 46.215 ms ± 0.307 ms            |
| 32.768 kB  | in 0.047 ms ± now      | null                          | in 66.645 ms ± 10.015 ms     | in 82.182 ms ± 5.855 ms            | in 90.881 ms ± 0.377 ms            |
| 65.536 kB  | in 0.056 ms ± 0.007 ms | null                          | in 184.67 ms ± 32.212 ms     | in 154.691 ms ± 0.433 ms           | in 177.151 ms ± 1.004 ms           |
| 131.072 kB | in 0.071 ms ± 0.006 ms | null                          | in 244.314 ms ± 2.769 ms     | in 305.404 ms ± 1.139 ms           | in 348.06 ms ± 1.732 ms            |
| 262.144 kB | in 0.08 ms ± 0.008 ms  | null                          | in 637.671 ms ± 23.922 ms    | in 822.145 ms ± 107.189 ms         | in 921.46 ms ± 72.801 ms           |
| 524.288 kB | in 0.089 ms ± 0.011 ms | null                          | in 1,301.524 ms ± 117.572 ms | in 1,496.782 ms ± 24.87 ms         | in 1,745.063 ms ± 91.469 ms        |
| 1.049 MB   | in 0.119 ms ± 0.045 ms | null                          | in 2,403.614 ms ± 69.115 ms  | in 2,936.535 ms ± 128.412 ms       | in 3,323.917 ms ± 163.355 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 16.542 ms ± 13.148 ms     | null                       | in 14.196 ms ± 3.097 ms      | in 14.333 ms ± 2.525 ms        | in 14.543 ms ± 2.426 ms        |
| 2 B        | in 10.139 ms ± 5.473 ms      | null                       | in 16.713 ms ± 9.402 ms      | in 13.623 ms ± 2.183 ms        | in 13.885 ms ± 2.032 ms        |
| 4 B        | in 12.56 ms ± 4.369 ms       | null                       | in 19.174 ms ± 11.142 ms     | in 13.072 ms ± 2.122 ms        | in 13.067 ms ± 2.147 ms        |
| 8 B        | in 18.393 ms ± 13.496 ms     | null                       | in 12.189 ms ± 3.301 ms      | in 12.481 ms ± 2.191 ms        | in 14.162 ms ± 3.671 ms        |
| 16 B       | in 12.793 ms ± 7.309 ms      | null                       | in 11.181 ms ± 2.067 ms      | in 12.122 ms ± 2.003 ms        | in 15.653 ms ± 6.643 ms        |
| 32 B       | in 8.864 ms ± 4.706 ms       | null                       | in 10.2 ms ± 0.711 ms        | in 16.94 ms ± 7.694 ms         | in 18.925 ms ± 7.482 ms        |
| 64 B       | in 6.321 ms ± 1.32 ms        | null                       | in 19.184 ms ± 0.73 ms       | in 24.278 ms ± 8.822 ms        | in 24.421 ms ± 2.299 ms        |
| 128 B      | in 5.979 ms ± 0.623 ms       | null                       | in 10.884 ms ± 0.829 ms      | in 14.422 ms ± 4.601 ms        | in 16.491 ms ± 7.467 ms        |
| 256 B      | in 7.369 ms ± 2.13 ms        | null                       | in 11.056 ms ± 0.801 ms      | in 19.05 ms ± 7.26 ms          | in 14.91 ms ± 5.236 ms         |
| 512 B      | in 12.588 ms ± 3.548 ms      | null                       | in 24.394 ms ± 1.921 ms      | in 28.197 ms ± 3.555 ms        | in 30.677 ms ± 9.367 ms        |
| 1.024 kB   | in 10.618 ms ± 4.73 ms       | null                       | in 12.928 ms ± 0.968 ms      | in 17.407 ms ± 2.086 ms        | in 16.407 ms ± 2.085 ms        |
| 2.048 kB   | in 11.523 ms ± 3.793 ms      | null                       | in 16.515 ms ± 0.59 ms       | in 18.733 ms ± 1.031 ms        | in 18.666 ms ± 2.089 ms        |
| 4.096 kB   | in 14.537 ms ± 2.358 ms      | null                       | in 24.059 ms ± 0.919 ms      | in 29.014 ms ± 3.533 ms        | in 27.05 ms ± 2.331 ms         |
| 8.192 kB   | in 23.9 ms ± 2.189 ms        | null                       | in 39.133 ms ± 1.43 ms       | in 46.196 ms ± 2.424 ms        | in 43.147 ms ± 2.091 ms        |
| 16.384 kB  | in 40.376 ms ± 1.362 ms      | null                       | in 78.419 ms ± 4.778 ms      | in 90.323 ms ± 2.626 ms        | in 86.019 ms ± 3.834 ms        |
| 32.768 kB  | in 67.478 ms ± 1.884 ms      | null                       | in 134.529 ms ± 3.192 ms     | in 169.522 ms ± 6.563 ms       | in 159.492 ms ± 8.101 ms       |
| 65.536 kB  | in 136.519 ms ± 9.772 ms     | null                       | in 276.721 ms ± 28.324 ms    | in 307.299 ms ± 5.645 ms       | in 287.103 ms ± 1.827 ms       |
| 131.072 kB | in 265.377 ms ± 23.483 ms    | null                       | in 726.546 ms ± 141.161 ms   | in 855.556 ms ± 159.5 ms       | in 816.354 ms ± 144.49 ms      |
| 262.144 kB | in 939.919 ms ± 237.625 ms   | null                       | in 1,544.172 ms ± 306.528 ms | in 1,865.429 ms ± 329.608 ms   | in 1,803.229 ms ± 357.96 ms    |
| 524.288 kB | in 1,313.907 ms ± 43.136 ms  | null                       | in 2,664.201 ms ± 229.282 ms | in 3,110.536 ms ± 258.46 ms    | in 3,039.003 ms ± 321.557 ms   |
| 1.049 MB   | in 2,577.469 ms ± 160.137 ms | null                       | in 5,153.193 ms ± 271.5 ms   | in 6,000.545 ms ± 203.819 ms   | in 5,785.675 ms ± 336.111 ms   |