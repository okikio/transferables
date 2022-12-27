# Node

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.207 ms ± 0.268 ms | null                          | in 8.208 ms ± 3.642 ms       | in 7.773 ms ± 2.305 ms             | in 7.105 ms ± 2.058 ms             |
| 2 B        | in 0.075 ms ± 0.019 ms | null                          | in 6.171 ms ± 0.764 ms       | in 6.671 ms ± 1.123 ms             | in 6.66 ms ± 1.762 ms              |
| 4 B        | in 0.066 ms ± 0.01 ms  | null                          | in 5.873 ms ± 0.622 ms       | in 6.139 ms ± 1.107 ms             | in 6.155 ms ± 0.495 ms             |
| 8 B        | in 0.075 ms ± 0.016 ms | null                          | in 6.28 ms ± 0.407 ms        | in 6.106 ms ± 0.703 ms             | in 14.207 ms ± 6.085 ms            |
| 16 B       | in 0.062 ms ± 0.008 ms | null                          | in 5.843 ms ± 0.648 ms       | in 6.099 ms ± 1.182 ms             | in 6.036 ms ± 0.452 ms             |
| 32 B       | in 0.064 ms ± 0.006 ms | null                          | in 12.077 ms ± 11.045 ms     | in 22.2 ms ± 8.549 ms              | in 5.602 ms ± 0.252 ms             |
| 64 B       | in 0.056 ms ± 0.009 ms | null                          | in 5.56 ms ± 0.508 ms        | in 5.618 ms ± 0.312 ms             | in 6.595 ms ± 2.03 ms              |
| 128 B      | in 0.052 ms ± 0.007 ms | null                          | in 5.528 ms ± 0.391 ms       | in 5.702 ms ± 0.374 ms             | in 8.767 ms ± 6.297 ms             |
| 256 B      | in 0.055 ms ± 0.009 ms | null                          | in 5.924 ms ± 0.446 ms       | in 5.961 ms ± 0.393 ms             | in 5.967 ms ± 0.572 ms             |
| 512 B      | in 0.066 ms ± 0.02 ms  | null                          | in 7.007 ms ± 1.846 ms       | in 6.972 ms ± 0.479 ms             | in 15.237 ms ± 7.241 ms            |
| 1.024 kB   | in 0.081 ms ± 0.051 ms | null                          | in 7.477 ms ± 0.463 ms       | in 8.487 ms ± 0.713 ms             | in 9.73 ms ± 3.147 ms              |
| 2.048 kB   | in 0.071 ms ± 0.024 ms | null                          | in 9.713 ms ± 0.487 ms       | in 13.315 ms ± 4.127 ms            | in 16.01 ms ± 2.705 ms             |
| 4.096 kB   | in 0.057 ms ± 0.006 ms | null                          | in 17.806 ms ± 0.926 ms      | in 18.671 ms ± 2.846 ms            | in 16.142 ms ± 0.691 ms            |
| 8.192 kB   | in 0.057 ms ± now      | null                          | in 22.703 ms ± 3.023 ms      | in 34.879 ms ± 6.096 ms            | in 30.426 ms ± 2.586 ms            |
| 16.384 kB  | in 0.069 ms ± 0.012 ms | null                          | in 43.685 ms ± 1.087 ms      | in 60.437 ms ± 4.292 ms            | in 51.507 ms ± 1.689 ms            |
| 32.768 kB  | in 0.076 ms ± 0.024 ms | null                          | in 77.268 ms ± 2.417 ms      | in 113.776 ms ± 11.266 ms          | in 103.81 ms ± 7.409 ms            |
| 65.536 kB  | in 0.07 ms ± 0.007 ms  | null                          | in 231.359 ms ± 53.721 ms    | in 211.296 ms ± 7.732 ms           | in 194.562 ms ± 7.207 ms           |
| 131.072 kB | in 0.088 ms ± 0.008 ms | null                          | in 302.988 ms ± 10.972 ms    | in 412.957 ms ± 2.733 ms           | in 385.628 ms ± 8.605 ms           |
| 262.144 kB | in 0.112 ms ± 0.009 ms | null                          | in 826.634 ms ± 72.754 ms    | in 1,209.197 ms ± 74.818 ms        | in 1,099.316 ms ± 106.475 ms       |
| 524.288 kB | in 0.142 ms ± 0.068 ms | null                          | in 1,627.63 ms ± 53.235 ms   | in 2,098.052 ms ± 65.979 ms        | in 1,989.42 ms ± 105.433 ms        |
| 1.049 MB   | in 0.126 ms ± 0.016 ms | null                          | in 3,210.079 ms ± 123.667 ms | in 4,132.293 ms ± 124.074 ms       | in 3,796.704 ms ± 149.169 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 17.104 ms ± 5.632 ms      | null                       | in 20.183 ms ± 4.149 ms      | in 21.033 ms ± 4.738 ms        | in 27.24 ms ± 9.286 ms         |
| 2 B        | in 14.584 ms ± 4.993 ms      | null                       | in 16.566 ms ± 1.453 ms      | in 19.934 ms ± 3.329 ms        | in 26.752 ms ± 7.407 ms        |
| 4 B        | in 13.298 ms ± 3.957 ms      | null                       | in 16.362 ms ± 3.342 ms      | in 22.294 ms ± 9.547 ms        | in 28.994 ms ± 10.294 ms       |
| 8 B        | in 12.142 ms ± 6.314 ms      | null                       | in 15.493 ms ± 2.829 ms      | in 28.072 ms ± 14.226 ms       | in 20.877 ms ± 2.765 ms        |
| 16 B       | in 15.698 ms ± 9.126 ms      | null                       | in 14.109 ms ± 1.26 ms       | in 25.958 ms ± 9.446 ms        | in 27.696 ms ± 14.326 ms       |
| 32 B       | in 13.235 ms ± 9.497 ms      | null                       | in 14.905 ms ± 1.418 ms      | in 19.955 ms ± 4.818 ms        | in 22.445 ms ± 12.94 ms        |
| 64 B       | in 11.379 ms ± 6.36 ms       | null                       | in 28.42 ms ± 2.515 ms       | in 31.243 ms ± 5.655 ms        | in 30.572 ms ± 3.878 ms        |
| 128 B      | in 10.509 ms ± 2.476 ms      | null                       | in 17.143 ms ± 1.166 ms      | in 18.74 ms ± 3.368 ms         | in 20.103 ms ± 3.056 ms        |
| 256 B      | in 11.071 ms ± 4.193 ms      | null                       | in 16.068 ms ± 1.164 ms      | in 17.025 ms ± 2.131 ms        | in 18.165 ms ± 3.812 ms        |
| 512 B      | in 19.244 ms ± 5.217 ms      | null                       | in 36.234 ms ± 1.519 ms      | in 38.067 ms ± 2.427 ms        | in 36.5 ms ± 2.362 ms          |
| 1.024 kB   | in 13.096 ms ± 2.336 ms      | null                       | in 20.454 ms ± 1.439 ms      | in 20.574 ms ± 1.628 ms        | in 22.296 ms ± 3.154 ms        |
| 2.048 kB   | in 17.146 ms ± 6.412 ms      | null                       | in 24.964 ms ± 4.026 ms      | in 26.161 ms ± 1.442 ms        | in 26.189 ms ± 3.127 ms        |
| 4.096 kB   | in 20.502 ms ± 2.221 ms      | null                       | in 37.624 ms ± 4.95 ms       | in 40.714 ms ± 3.416 ms        | in 39.038 ms ± 5.937 ms        |
| 8.192 kB   | in 33.695 ms ± 5.095 ms      | null                       | in 54.188 ms ± 3.846 ms      | in 58.191 ms ± 3.887 ms        | in 58.048 ms ± 4.513 ms        |
| 16.384 kB  | in 56.939 ms ± 6.814 ms      | null                       | in 102.455 ms ± 5.773 ms     | in 115.023 ms ± 3.705 ms       | in 112.728 ms ± 4.288 ms       |
| 32.768 kB  | in 81.798 ms ± 2.911 ms      | null                       | in 166.031 ms ± 4.697 ms     | in 198.87 ms ± 4.963 ms        | in 191.107 ms ± 10.441 ms      |
| 65.536 kB  | in 165.844 ms ± 18.745 ms    | null                       | in 327.818 ms ± 14.719 ms    | in 373.254 ms ± 15.499 ms      | in 351.19 ms ± 2.142 ms        |
| 131.072 kB | in 330.823 ms ± 37.66 ms     | null                       | in 908.647 ms ± 209.409 ms   | in 1,082.94 ms ± 231.85 ms     | in 1,075.772 ms ± 230.202 ms   |
| 262.144 kB | in 1,137.745 ms ± 261.107 ms | null                       | in 2,016.181 ms ± 434.181 ms | in 2,318.449 ms ± 462.172 ms   | in 2,358.714 ms ± 447.597 ms   |
| 524.288 kB | in 1,713.382 ms ± 201.38 ms  | null                       | in 3,399.829 ms ± 238.274 ms | in 4,031.541 ms ± 383.703 ms   | in 3,940.416 ms ± 393.828 ms   |
| 1.049 MB   | in 3,208.576 ms ± 132.602 ms | null                       | in 6,496.485 ms ± 240.155 ms | in 7,419.729 ms ± 352.299 ms   | in 7,372.402 ms ± 438.798 ms   |