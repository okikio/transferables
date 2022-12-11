# Node

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.184 ms ± 0.244 ms   | null                          | in 4.578 ms ± 1.7 ms        | in 4.489 ms ± 0.808 ms             | in 4.634 ms ± 1.446 ms             |
| 2 B        | in 0.073 ms ± 0.032 ms   | null                          | in 4.182 ms ± 0.556 ms      | in 6.616 ms ± 4.939 ms             | in 6.744 ms ± 5.268 ms             |
| 4 B        | in 0.088 ms ± 0.038 ms   | null                          | in 3.863 ms ± 0.421 ms      | in 4.063 ms ± 0.443 ms             | in 3.989 ms ± 0.478 ms             |
| 8 B        | in 0.07 ms ± 0.023 ms    | null                          | in 3.853 ms ± 0.281 ms      | in 12.823 ms ± 4.5 ms              | in 4.261 ms ± 0.803 ms             |
| 16 B       | in 0.066 ms ± 0.02 ms    | null                          | in 3.84 ms ± 0.509 ms       | in 4.343 ms ± 1.015 ms             | in 7.868 ms ± 8.148 ms             |
| 32 B       | in 0.074 ms ± 0.024 ms   | null                          | in 13.973 ms ± 8.035 ms     | in 3.741 ms ± 0.216 ms             | in 4.712 ms ± 2.399 ms             |
| 64 B       | in 0.061 ms ± 0.018 ms   | null                          | in 3.535 ms ± 0.231 ms      | in 3.85 ms ± 0.186 ms              | in 3.788 ms ± 0.224 ms             |
| 128 B      | in 0.062 ms ± 0.016 ms   | null                          | in 3.66 ms ± 0.257 ms       | in 13.719 ms ± 5.256 ms            | in 4.349 ms ± 0.794 ms             |
| 256 B      | in 0.065 ms ± 0.02 ms    | null                          | in 3.966 ms ± 0.254 ms      | in 4.536 ms ± 0.144 ms             | in 7.515 ms ± 6.495 ms             |
| 512 B      | in 0.068 ms ± 0.022 ms   | null                          | in 4.464 ms ± 0.062 ms      | in 5.611 ms ± 0.123 ms             | in 5.244 ms ± 0.121 ms             |
| 1.024 kB   | in 0.101 ms ± 0.073 ms   | null                          | in 5.438 ms ± 0.48 ms       | in 14.388 ms ± 3.487 ms            | in 6.984 ms ± 0.071 ms             |
| 2.048 kB   | in 0.106 ms ± 0.073 ms   | null                          | in 8.351 ms ± 2.412 ms      | in 12.027 ms ± 0.079 ms            | in 10.789 ms ± 0.152 ms            |
| 4.096 kB   | in 0.137 ms ± 0.11 ms    | null                          | in 13.085 ms ± 4.089 ms     | in 20.343 ms ± 0.12 ms             | in 18.844 ms ± 1.174 ms            |
| 8.192 kB   | in 0.13 ms ± 0.026 ms    | null                          | in 19.243 ms ± 1.216 ms     | in 40.126 ms ± 2.17 ms             | in 34.438 ms ± 1.357 ms            |
| 16.384 kB  | in 0.298 ms ± 0.007 ms   | null                          | in 37.248 ms ± 1.102 ms     | in 75.016 ms ± 3.314 ms            | in 68.831 ms ± 1.534 ms            |
| 32.768 kB  | in 0.653 ms ± 0.243 ms   | null                          | in 67.678 ms ± 0.784 ms     | in 145.871 ms ± 6.511 ms           | in 124.911 ms ± 0.427 ms           |
| 65.536 kB  | in 1.235 ms ± 0.073 ms   | null                          | in 194.64 ms ± 36.969 ms    | in 281.784 ms ± 0.865 ms           | in 248.493 ms ± 0.499 ms           |
| 131.072 kB | in 2.976 ms ± 0.009 ms   | null                          | in 266.767 ms ± 1.603 ms    | in 564.95 ms ± 2.442 ms            | in 491.954 ms ± 1.844 ms           |
| 262.144 kB | in 13.196 ms ± 3.615 ms  | null                          | in 755.063 ms ± 70.931 ms   | in 1,412.963 ms ± 105.829 ms       | in 1,291.947 ms ± 147.53 ms        |
| 524.288 kB | in 19.969 ms ± 9.274 ms  | null                          | in 1,444.804 ms ± 51.491 ms | in 2,679.23 ms ± 65.091 ms         | in 2,265.772 ms ± 217.396 ms       |
| 1.049 MB   | in 33.504 ms ± 13.856 ms | null                          | in 2,812.324 ms ± 81.206 ms | in 5,107.071 ms ± 82.794 ms        | in 4,506.541 ms ± 74.385 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 16.345 ms ± 9.102 ms      | null                       | in 21.136 ms ± 9.489 ms      | in 20.327 ms ± 8.764 ms        | in 16.809 ms ± 2.295 ms        |
| 2 B        | in 13.715 ms ± 8.051 ms      | null                       | in 18.818 ms ± 8.723 ms      | in 19.482 ms ± 8.326 ms        | in 16.011 ms ± 2.367 ms        |
| 4 B        | in 13.006 ms ± 6.75 ms       | null                       | in 13.491 ms ± 2.399 ms      | in 18.948 ms ± 8.108 ms        | in 15.078 ms ± 2.392 ms        |
| 8 B        | in 12.327 ms ± 6.059 ms      | null                       | in 13.118 ms ± 2.423 ms      | in 16.98 ms ± 5.678 ms         | in 14.805 ms ± 2.599 ms        |
| 16 B       | in 14.187 ms ± 9.774 ms      | null                       | in 12.394 ms ± 2.081 ms      | in 15.263 ms ± 4.617 ms        | in 14.459 ms ± 2.628 ms        |
| 32 B       | in 7.715 ms ± 2.21 ms        | null                       | in 12.291 ms ± 1.802 ms      | in 18.59 ms ± 4.927 ms         | in 14.794 ms ± 2.312 ms        |
| 64 B       | in 9.046 ms ± 4.197 ms       | null                       | in 23.865 ms ± 1.805 ms      | in 30.003 ms ± 9.316 ms        | in 25.883 ms ± 2.181 ms        |
| 128 B      | in 8.789 ms ± 4.246 ms       | null                       | in 13.721 ms ± 1.829 ms      | in 19.903 ms ± 10.783 ms       | in 15.251 ms ± 2.443 ms        |
| 256 B      | in 10.277 ms ± 4.529 ms      | null                       | in 13.44 ms ± 2.144 ms       | in 16.032 ms ± 4.231 ms        | in 14.754 ms ± 2.077 ms        |
| 512 B      | in 17.277 ms ± 8.052 ms      | null                       | in 31.324 ms ± 4.09 ms       | in 32.19 ms ± 3.323 ms         | in 32.86 ms ± 2.669 ms         |
| 1.024 kB   | in 8.835 ms ± 1.255 ms       | null                       | in 15.866 ms ± 2.465 ms      | in 19.001 ms ± 3.084 ms        | in 18.322 ms ± 2.203 ms        |
| 2.048 kB   | in 13.396 ms ± 4.595 ms      | null                       | in 19.32 ms ± 2.42 ms        | in 33.341 ms ± 2.441 ms        | in 23.551 ms ± 2.06 ms         |
| 4.096 kB   | in 16.85 ms ± 2.639 ms       | null                       | in 33.476 ms ± 10.044 ms     | in 44.417 ms ± 2.678 ms        | in 36.207 ms ± 2.554 ms        |
| 8.192 kB   | in 28.112 ms ± 2.318 ms      | null                       | in 42.993 ms ± 2.693 ms      | in 68.009 ms ± 2.345 ms        | in 60.536 ms ± 1.476 ms        |
| 16.384 kB  | in 46.216 ms ± 2.457 ms      | null                       | in 89.027 ms ± 5.872 ms      | in 118.331 ms ± 3.518 ms       | in 111.586 ms ± 3.797 ms       |
| 32.768 kB  | in 74.037 ms ± 1.895 ms      | null                       | in 150.411 ms ± 4.501 ms     | in 230.325 ms ± 7.096 ms       | in 209.564 ms ± 7.014 ms       |
| 65.536 kB  | in 143.087 ms ± 1.666 ms     | null                       | in 323.169 ms ± 31.58 ms     | in 428.43 ms ± 2.575 ms        | in 392.541 ms ± 3.197 ms       |
| 131.072 kB | in 295.193 ms ± 24.79 ms     | null                       | in 825.003 ms ± 204.24 ms    | in 1,153.03 ms ± 188.467 ms    | in 1,139.447 ms ± 187.075 ms   |
| 262.144 kB | in 1,019.133 ms ± 291.899 ms | null                       | in 1,786.91 ms ± 391.706 ms  | in 2,383.906 ms ± 411.764 ms   | in 2,306.977 ms ± 340.482 ms   |
| 524.288 kB | in 1,493.946 ms ± 105.657 ms | null                       | in 2,986.17 ms ± 235.723 ms  | in 4,290.399 ms ± 307.198 ms   | in 3,910.943 ms ± 271.32 ms    |
| 1.049 MB   | in 2,982.962 ms ± 283.723 ms | null                       | in 5,667.734 ms ± 158.611 ms | in 8,127.735 ms ± 287.352 ms   | in 7,900.653 ms ± 457.253 ms   |