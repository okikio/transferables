# Node

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.165 ms ± 0.238 ms   | null                          | in 11.27 ms ± 9.527 ms      | in 4.32 ms ± 0.705 ms              | in 5.351 ms ± 1.955 ms             |
| 2 B        | in 0.056 ms ± 0.023 ms   | null                          | in 3.728 ms ± 0.387 ms      | in 3.974 ms ± 0.717 ms             | in 3.789 ms ± 0.393 ms             |
| 4 B        | in 0.055 ms ± 0.019 ms   | null                          | in 3.663 ms ± 0.295 ms      | in 4.915 ms ± 1.968 ms             | in 3.89 ms ± 0.619 ms              |
| 8 B        | in 0.052 ms ± 0.019 ms   | null                          | in 4.364 ms ± 0.748 ms      | in 9.541 ms ± 2.633 ms             | in 4.58 ms ± 1.392 ms              |
| 16 B       | in 0.065 ms ± 0.037 ms   | null                          | in 3.716 ms ± 0.322 ms      | in 3.801 ms ± 0.428 ms             | in 6.235 ms ± 5.335 ms             |
| 32 B       | in 0.051 ms ± 0.015 ms   | null                          | in 5.594 ms ± 4.013 ms      | in 3.696 ms ± 0.136 ms             | in 3.502 ms ± 0.305 ms             |
| 64 B       | in 0.045 ms ± 0.014 ms   | null                          | in 3.407 ms ± 0.23 ms       | in 3.899 ms ± 0.557 ms             | in 3.586 ms ± 0.199 ms             |
| 128 B      | in 0.058 ms ± 0.039 ms   | null                          | in 3.581 ms ± 0.331 ms      | in 3.701 ms ± 0.141 ms             | in 12.187 ms ± 3.061 ms            |
| 256 B      | in 0.052 ms ± 0.018 ms   | null                          | in 3.811 ms ± 0.192 ms      | in 4.935 ms ± 1.894 ms             | in 3.886 ms ± 0.143 ms             |
| 512 B      | in 0.056 ms ± 0.023 ms   | null                          | in 4.152 ms ± 0.135 ms      | in 11.811 ms ± 3.46 ms             | in 4.507 ms ± 0.185 ms             |
| 1.024 kB   | in 0.083 ms ± 0.072 ms   | null                          | in 6.705 ms ± 3.629 ms      | in 6.253 ms ± 0.246 ms             | in 5.759 ms ± 0.078 ms             |
| 2.048 kB   | in 0.091 ms ± 0.06 ms    | null                          | in 6.645 ms ± 0.122 ms      | in 13.592 ms ± 2.344 ms            | in 8.187 ms ± 0.12 ms              |
| 4.096 kB   | in 0.113 ms ± 0.087 ms   | null                          | in 10.343 ms ± 0.483 ms     | in 16.983 ms ± 0.958 ms            | in 13.106 ms ± 0.298 ms            |
| 8.192 kB   | in 0.104 ms ± 0.021 ms   | null                          | in 17.616 ms ± 1.223 ms     | in 28.872 ms ± 1.718 ms            | in 24.925 ms ± 1.317 ms            |
| 16.384 kB  | in 0.268 ms ± 0.009 ms   | null                          | in 34.013 ms ± 0.373 ms     | in 62.115 ms ± 17.283 ms           | in 47.086 ms ± 0.195 ms            |
| 32.768 kB  | in 0.481 ms ± 0.005 ms   | null                          | in 61.988 ms ± 0.542 ms     | in 105.561 ms ± 6.332 ms           | in 86.485 ms ± 0.443 ms            |
| 65.536 kB  | in 1.171 ms ± 0.014 ms   | null                          | in 188.766 ms ± 47.696 ms   | in 201.215 ms ± 1.028 ms           | in 170.77 ms ± 0.894 ms            |
| 131.072 kB | in 2.759 ms ± 0.028 ms   | null                          | in 243.222 ms ± 2.268 ms    | in 401.66 ms ± 3.057 ms            | in 335.232 ms ± 0.882 ms           |
| 262.144 kB | in 9.505 ms ± 0.714 ms   | null                          | in 704.523 ms ± 50.496 ms   | in 1,044.08 ms ± 107.025 ms        | in 952.9 ms ± 116.681 ms           |
| 524.288 kB | in 11.387 ms ± 1.17 ms   | null                          | in 1,263.884 ms ± 85.551 ms | in 1,873.594 ms ± 57.064 ms        | in 1,552.972 ms ± 112.602 ms       |
| 1.049 MB   | in 28.743 ms ± 13.928 ms | null                          | in 2,470.353 ms ± 88.244 ms | in 3,680.752 ms ± 76.807 ms        | in 3,095.072 ms ± 94.442 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 12.286 ms ± 2.745 ms      | null                       | in 13.536 ms ± 2.688 ms      | in 27.131 ms ± 14.781 ms       | in 14.424 ms ± 1.853 ms        |
| 2 B        | in 8.031 ms ± 1.567 ms       | null                       | in 19.629 ms ± 10.42 ms      | in 27.396 ms ± 12.424 ms       | in 13.639 ms ± 1.799 ms        |
| 4 B        | in 7.905 ms ± 1.495 ms       | null                       | in 17.539 ms ± 8.584 ms      | in 22.072 ms ± 12.81 ms        | in 15.656 ms ± 4.218 ms        |
| 8 B        | in 7.107 ms ± 1.355 ms       | null                       | in 13.009 ms ± 4.238 ms      | in 14.607 ms ± 4.329 ms        | in 11.82 ms ± 1.103 ms         |
| 16 B       | in 8.018 ms ± 3.249 ms       | null                       | in 11.116 ms ± 2.123 ms      | in 12.621 ms ± 2.367 ms        | in 11.628 ms ± 1.101 ms        |
| 32 B       | in 7.452 ms ± 2.521 ms       | null                       | in 10.659 ms ± 1.475 ms      | in 12.591 ms ± 2.499 ms        | in 11.18 ms ± 0.979 ms         |
| 64 B       | in 8.697 ms ± 3.987 ms       | null                       | in 19.202 ms ± 1.561 ms      | in 23.475 ms ± 5.581 ms        | in 20.822 ms ± 1.608 ms        |
| 128 B      | in 8.458 ms ± 3.524 ms       | null                       | in 12.235 ms ± 1.89 ms       | in 13.321 ms ± 2.818 ms        | in 12.861 ms ± 2.085 ms        |
| 256 B      | in 9.47 ms ± 3.961 ms        | null                       | in 12.233 ms ± 1.754 ms      | in 12.909 ms ± 1.671 ms        | in 13.122 ms ± 1.995 ms        |
| 512 B      | in 18.892 ms ± 12.98 ms      | null                       | in 27.49 ms ± 2.832 ms       | in 28.908 ms ± 3.6 ms          | in 28.104 ms ± 1.819 ms        |
| 1.024 kB   | in 12.467 ms ± 7.151 ms      | null                       | in 13.911 ms ± 2.232 ms      | in 17.027 ms ± 2.819 ms        | in 17.372 ms ± 2.678 ms        |
| 2.048 kB   | in 13.585 ms ± 4.031 ms      | null                       | in 17.133 ms ± 2.166 ms      | in 28.396 ms ± 3.188 ms        | in 20.337 ms ± 1.913 ms        |
| 4.096 kB   | in 16.093 ms ± 4.427 ms      | null                       | in 25.282 ms ± 2.146 ms      | in 35.691 ms ± 2.978 ms        | in 28.639 ms ± 2.4 ms          |
| 8.192 kB   | in 25.611 ms ± 4.422 ms      | null                       | in 38.786 ms ± 2.481 ms      | in 55.578 ms ± 3.357 ms        | in 46.7 ms ± 2.86 ms           |
| 16.384 kB  | in 41.682 ms ± 2.016 ms      | null                       | in 78.268 ms ± 3.692 ms      | in 94.889 ms ± 1.646 ms        | in 87.996 ms ± 3.138 ms        |
| 32.768 kB  | in 67.904 ms ± 1.745 ms      | null                       | in 136.755 ms ± 2.127 ms     | in 181.758 ms ± 7.525 ms       | in 163.62 ms ± 6.896 ms        |
| 65.536 kB  | in 137.868 ms ± 9.157 ms     | null                       | in 285.825 ms ± 26.319 ms    | in 332.942 ms ± 3.731 ms       | in 301.412 ms ± 2.737 ms       |
| 131.072 kB | in 269.957 ms ± 22.708 ms    | null                       | in 728.583 ms ± 172.54 ms    | in 916.397 ms ± 148.708 ms     | in 853.484 ms ± 166.811 ms     |
| 262.144 kB | in 948.009 ms ± 236.565 ms   | null                       | in 1,609.342 ms ± 337.811 ms | in 1,839.067 ms ± 328.999 ms   | in 1,802.196 ms ± 368.519 ms   |
| 524.288 kB | in 1,334.498 ms ± 133.526 ms | null                       | in 2,700.03 ms ± 196.061 ms  | in 3,328.309 ms ± 233.619 ms   | in 3,155.599 ms ± 254.499 ms   |
| 1.049 MB   | in 2,602.872 ms ± 175.228 ms | null                       | in 5,122.061 ms ± 145.447 ms | in 6,409.94 ms ± 235.523 ms    | in 6,147.426 ms ± 442.198 ms   |