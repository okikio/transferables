# Bun

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.177 ms ± 0.213 ms | null                          | in 8.612 ms ± 8.797 ms       | in 4.567 ms ± 0.544 ms             | in 4.428 ms ± 0.641 ms             |
| 2 B        | in 0.067 ms ± 0.011 ms | null                          | in 3.926 ms ± 0.26 ms        | in 4.022 ms ± 0.217 ms             | in 4.171 ms ± 0.19 ms              |
| 4 B        | in 0.062 ms ± 0.01 ms  | null                          | in 3.896 ms ± 0.105 ms       | in 4.023 ms ± 0.243 ms             | in 4.276 ms ± 0.402 ms             |
| 8 B        | in 0.066 ms ± 0.017 ms | null                          | in 3.941 ms ± 0.229 ms       | in 4.123 ms ± 0.387 ms             | in 14.261 ms ± 1.622 ms            |
| 16 B       | in 0.057 ms ± 0.006 ms | null                          | in 5.705 ms ± 3.472 ms       | in 4.272 ms ± 0.52 ms              | in 4.136 ms ± 0.385 ms             |
| 32 B       | in 0.065 ms ± 0.022 ms | null                          | in 3.981 ms ± 0.283 ms       | in 9.255 ms ± 10.716 ms            | in 13.392 ms ± 7.702 ms            |
| 64 B       | in 0.049 ms ± 0.005 ms | null                          | in 3.599 ms ± 0.255 ms       | in 3.628 ms ± 0.218 ms             | in 3.625 ms ± 0.179 ms             |
| 128 B      | in 0.048 ms ± 0.009 ms | null                          | in 3.59 ms ± 0.245 ms        | in 3.783 ms ± 0.352 ms             | in 3.755 ms ± 0.237 ms             |
| 256 B      | in 0.048 ms ± 0.007 ms | null                          | in 11.329 ms ± 3.691 ms      | in 4.21 ms ± 0.191 ms              | in 4.141 ms ± 0.161 ms             |
| 512 B      | in 0.049 ms ± 0.007 ms | null                          | in 4.373 ms ± 0.292 ms       | in 4.653 ms ± 0.197 ms             | in 7.29 ms ± 5.313 ms              |
| 1.024 kB   | in 0.079 ms ± 0.053 ms | null                          | in 5.258 ms ± 0.244 ms       | in 5.7 ms ± 0.176 ms               | in 6.028 ms ± 0.152 ms             |
| 2.048 kB   | in 0.062 ms ± 0.023 ms | null                          | in 6.916 ms ± 0.152 ms       | in 7.942 ms ± 0.172 ms             | in 9.698 ms ± 2.327 ms             |
| 4.096 kB   | in 0.057 ms ± now      | null                          | in 11.298 ms ± 1.514 ms      | in 13.021 ms ± 0.921 ms            | in 14.122 ms ± 0.312 ms            |
| 8.192 kB   | in 0.064 ms ± 0.008 ms | null                          | in 19.244 ms ± 1.39 ms       | in 24.665 ms ± 3.069 ms            | in 24.707 ms ± 0.833 ms            |
| 16.384 kB  | in 0.066 ms ± now      | null                          | in 35.31 ms ± 0.8 ms         | in 43.893 ms ± 3.291 ms            | in 46.507 ms ± 0.356 ms            |
| 32.768 kB  | in 0.059 ms ± 0.005 ms | null                          | in 63.562 ms ± 1.98 ms       | in 84.435 ms ± 5.82 ms             | in 91.532 ms ± 0.579 ms            |
| 65.536 kB  | in 0.06 ms ± now       | null                          | in 178.933 ms ± 37.98 ms     | in 156.626 ms ± 1.677 ms           | in 177.455 ms ± 1.03 ms            |
| 131.072 kB | in 0.074 ms ± now      | null                          | in 246.524 ms ± 3.296 ms     | in 309.475 ms ± 2.238 ms           | in 348.541 ms ± 0.885 ms           |
| 262.144 kB | in 0.083 ms ± now      | null                          | in 664.597 ms ± 40.134 ms    | in 887.908 ms ± 97.48 ms           | in 978.459 ms ± 140.983 ms         |
| 524.288 kB | in 0.085 ms ± 0.006 ms | null                          | in 1,290.013 ms ± 109.311 ms | in 1,510.199 ms ± 34.733 ms        | in 1,762.628 ms ± 72.074 ms        |
| 1.049 MB   | in 0.089 ms ± now      | null                          | in 2,491.532 ms ± 103.609 ms | in 2,921.253 ms ± 74.954 ms        | in 3,288.253 ms ± 98.218 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 9.994 ms ± 1.838 ms       | null                       | in 17.972 ms ± 10.521 ms     | in 19.056 ms ± 8.858 ms        | in 14.907 ms ± 2.502 ms        |
| 2 B        | in 8.653 ms ± 2.368 ms       | null                       | in 17.999 ms ± 10.409 ms     | in 18.765 ms ± 7.812 ms        | in 19.405 ms ± 10.932 ms       |
| 4 B        | in 8.562 ms ± 1.947 ms       | null                       | in 17.799 ms ± 7.945 ms      | in 18.991 ms ± 9.322 ms        | in 17.48 ms ± 7.832 ms         |
| 8 B        | in 8.039 ms ± 2.133 ms       | null                       | in 12.97 ms ± 2.411 ms       | in 17.524 ms ± 9.282 ms        | in 18.246 ms ± 9.579 ms        |
| 16 B       | in 9.87 ms ± 3.926 ms        | null                       | in 12.503 ms ± 2.179 ms      | in 15.928 ms ± 3.544 ms        | in 14.83 ms ± 3.566 ms         |
| 32 B       | in 8.043 ms ± 2.168 ms       | null                       | in 12.658 ms ± 1.927 ms      | in 19.603 ms ± 4.824 ms        | in 18.856 ms ± 11.914 ms       |
| 64 B       | in 12.985 ms ± 8.635 ms      | null                       | in 22.236 ms ± 1.673 ms      | in 27.866 ms ± 9.267 ms        | in 26.66 ms ± 6.327 ms         |
| 128 B      | in 11.605 ms ± 6.262 ms      | null                       | in 14.287 ms ± 3.12 ms       | in 15.249 ms ± 3.007 ms        | in 20.189 ms ± 9.075 ms        |
| 256 B      | in 14.746 ms ± 7.734 ms      | null                       | in 13.66 ms ± 2.02 ms        | in 14.608 ms ± 2.455 ms        | in 15.445 ms ± 1.701 ms        |
| 512 B      | in 16.7 ms ± 7.243 ms        | null                       | in 30.003 ms ± 2.561 ms      | in 30.111 ms ± 1.998 ms        | in 30.748 ms ± 2.095 ms        |
| 1.024 kB   | in 10.447 ms ± 2.588 ms      | null                       | in 15.305 ms ± 2.189 ms      | in 17.655 ms ± 1.956 ms        | in 17.111 ms ± 3.009 ms        |
| 2.048 kB   | in 13.957 ms ± 3.567 ms      | null                       | in 18.816 ms ± 2.228 ms      | in 21.031 ms ± 2.252 ms        | in 20.531 ms ± 2.365 ms        |
| 4.096 kB   | in 16.039 ms ± 3.825 ms      | null                       | in 26.611 ms ± 1.9 ms        | in 30.065 ms ± 2.381 ms        | in 29.658 ms ± 3.332 ms        |
| 8.192 kB   | in 26.408 ms ± 4.246 ms      | null                       | in 41.008 ms ± 2.487 ms      | in 47.561 ms ± 2.653 ms        | in 45.878 ms ± 1.694 ms        |
| 16.384 kB  | in 43.147 ms ± 2.51 ms       | null                       | in 79.952 ms ± 4.213 ms      | in 91.47 ms ± 3.082 ms         | in 89.325 ms ± 1.554 ms        |
| 32.768 kB  | in 68.319 ms ± 2.382 ms      | null                       | in 136.011 ms ± 3.302 ms     | in 173.422 ms ± 5.049 ms       | in 155.039 ms ± 7.014 ms       |
| 65.536 kB  | in 137.5 ms ± 9.169 ms       | null                       | in 304.219 ms ± 30.496 ms    | in 308.449 ms ± 2.685 ms       | in 287.958 ms ± 2.377 ms       |
| 131.072 kB | in 266.985 ms ± 24.383 ms    | null                       | in 750.459 ms ± 162.398 ms   | in 863.898 ms ± 151.093 ms     | in 829.269 ms ± 165.644 ms     |
| 262.144 kB | in 961.18 ms ± 257.251 ms    | null                       | in 1,612.309 ms ± 346.533 ms | in 1,874.013 ms ± 381.601 ms   | in 1,867.291 ms ± 371.039 ms   |
| 524.288 kB | in 1,354.766 ms ± 125.713 ms | null                       | in 2,628.213 ms ± 186.362 ms | in 3,161.569 ms ± 120.116 ms   | in 3,087.306 ms ± 272.67 ms    |
| 1.049 MB   | in 2,661.062 ms ± 199.09 ms  | null                       | in 5,162.182 ms ± 158.65 ms  | in 6,027.331 ms ± 175.773 ms   | in 5,868.065 ms ± 130.056 ms   |