# Bun

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.198 ms ± 0.255 ms  | null                          | in 5.034 ms ± 1.62 ms       | in 4.699 ms ± 0.7 ms               | in 5.042 ms ± 1.706 ms             |
| 2 B        | in 0.073 ms ± 0.028 ms  | null                          | in 4.254 ms ± 0.438 ms      | in 4.557 ms ± 0.627 ms             | in 4.294 ms ± 0.267 ms             |
| 4 B        | in 0.071 ms ± 0.025 ms  | null                          | in 4.131 ms ± 0.206 ms      | in 4.333 ms ± 0.28 ms              | in 4.273 ms ± 0.292 ms             |
| 8 B        | in 0.069 ms ± 0.022 ms  | null                          | in 4.137 ms ± 0.141 ms      | in 15.986 ms ± 6.229 ms            | in 4.441 ms ± 0.374 ms             |
| 16 B       | in 0.07 ms ± 0.02 ms    | null                          | in 4.466 ms ± 0.69 ms       | in 4.433 ms ± 0.388 ms             | in 8.084 ms ± 7.984 ms             |
| 32 B       | in 0.066 ms ± 0.017 ms  | null                          | in 4.839 ms ± 1.637 ms      | in 3.991 ms ± 0.199 ms             | in 3.894 ms ± 0.35 ms              |
| 64 B       | in 0.411 ms ± 0.689 ms  | null                          | in 4.201 ms ± 0.745 ms      | in 4.193 ms ± 0.499 ms             | in 3.919 ms ± 0.346 ms             |
| 128 B      | in 0.07 ms ± 0.019 ms   | null                          | in 3.787 ms ± 0.235 ms      | in 4.738 ms ± 1.514 ms             | in 12.773 ms ± 4.777 ms            |
| 256 B      | in 0.077 ms ± 0.023 ms  | null                          | in 5.306 ms ± 2.339 ms      | in 4.515 ms ± 0.178 ms             | in 4.277 ms ± 0.19 ms              |
| 512 B      | in 0.083 ms ± 0.035 ms  | null                          | in 4.688 ms ± 0.423 ms      | in 15.791 ms ± 5.256 ms            | in 4.967 ms ± 0.09 ms              |
| 1.024 kB   | in 0.112 ms ± 0.077 ms  | null                          | in 8.166 ms ± 5.497 ms      | in 7.104 ms ± 0.209 ms             | in 14.438 ms ± 4.475 ms            |
| 2.048 kB   | in 0.125 ms ± 0.078 ms  | null                          | in 8.718 ms ± 2.7 ms        | in 16.658 ms ± 3.122 ms            | in 8.756 ms ± 0.097 ms             |
| 4.096 kB   | in 0.152 ms ± 0.102 ms  | null                          | in 11.884 ms ± 0.592 ms     | in 16.95 ms ± 0.134 ms             | in 13.959 ms ± 0.201 ms            |
| 8.192 kB   | in 0.141 ms ± 0.032 ms  | null                          | in 19.666 ms ± 1.261 ms     | in 32.157 ms ± 1.623 ms            | in 24.944 ms ± 1.437 ms            |
| 16.384 kB  | in 0.336 ms ± 0.013 ms  | null                          | in 39.372 ms ± 0.813 ms     | in 61.228 ms ± 3.552 ms            | in 45.849 ms ± 0.233 ms            |
| 32.768 kB  | in 0.583 ms ± 0.008 ms  | null                          | in 71.518 ms ± 0.841 ms     | in 117.162 ms ± 5.304 ms           | in 87.814 ms ± 1.349 ms            |
| 65.536 kB  | in 1.817 ms ± 0.898 ms  | null                          | in 204.225 ms ± 46.042 ms   | in 227.037 ms ± 1.824 ms           | in 173.804 ms ± 0.619 ms           |
| 131.072 kB | in 3.107 ms ± 0.016 ms  | null                          | in 266.829 ms ± 3.114 ms    | in 456.297 ms ± 5.528 ms           | in 344.506 ms ± 2.2 ms             |
| 262.144 kB | in 14.186 ms ± 3.358 ms | null                          | in 749.805 ms ± 61.748 ms   | in 1,282.29 ms ± 141.907 ms        | in 1,011.527 ms ± 125.038 ms       |
| 524.288 kB | in 13.102 ms ± 0.913 ms | null                          | in 1,438.98 ms ± 81.608 ms  | in 2,186.745 ms ± 59.583 ms        | in 1,727.127 ms ± 58.6 ms          |
| 1.049 MB   | in 34.493 ms ± 15.05 ms | null                          | in 2,706.592 ms ± 66.437 ms | in 4,327.046 ms ± 140.459 ms       | in 3,354.644 ms ± 158.895 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 21.991 ms ± 12.693 ms     | null                       | in 20.148 ms ± 8.726 ms      | in 27.908 ms ± 7.057 ms        | in 23.73 ms ± 9.142 ms         |
| 2 B        | in 16.654 ms ± 9.185 ms      | null                       | in 15.74 ms ± 3.202 ms       | in 27.379 ms ± 11.697 ms       | in 19.004 ms ± 4.125 ms        |
| 4 B        | in 13.537 ms ± 6.112 ms      | null                       | in 15.832 ms ± 4.854 ms      | in 24.562 ms ± 12.831 ms       | in 18.163 ms ± 3.016 ms        |
| 8 B        | in 12.779 ms ± 6.47 ms       | null                       | in 14.296 ms ± 3.071 ms      | in 21.108 ms ± 12.007 ms       | in 15.207 ms ± 2.437 ms        |
| 16 B       | in 15.067 ms ± 7.157 ms      | null                       | in 13.696 ms ± 2.88 ms       | in 15.769 ms ± 3.272 ms        | in 13.813 ms ± 1.984 ms        |
| 32 B       | in 9.161 ms ± 2.662 ms       | null                       | in 13.649 ms ± 2.92 ms       | in 19.096 ms ± 7.774 ms        | in 13.564 ms ± 1.792 ms        |
| 64 B       | in 8.324 ms ± 2.354 ms       | null                       | in 26.563 ms ± 3.123 ms      | in 32.604 ms ± 11.028 ms       | in 26.163 ms ± 2.751 ms        |
| 128 B      | in 8.181 ms ± 1.76 ms        | null                       | in 14.868 ms ± 3.094 ms      | in 17.268 ms ± 1.749 ms        | in 15.846 ms ± 2.312 ms        |
| 256 B      | in 9.762 ms ± 2.268 ms       | null                       | in 14.991 ms ± 2.882 ms      | in 16.698 ms ± 1.921 ms        | in 15.484 ms ± 2.477 ms        |
| 512 B      | in 16.987 ms ± 5.347 ms      | null                       | in 36.899 ms ± 3.219 ms      | in 36.868 ms ± 3.089 ms        | in 37.039 ms ± 3.433 ms        |
| 1.024 kB   | in 10.387 ms ± 2.223 ms      | null                       | in 17.413 ms ± 3.149 ms      | in 21.202 ms ± 3.815 ms        | in 18.009 ms ± 2.457 ms        |
| 2.048 kB   | in 15.279 ms ± 4.343 ms      | null                       | in 21.326 ms ± 2.827 ms      | in 34.783 ms ± 3.136 ms        | in 22.123 ms ± 2.344 ms        |
| 4.096 kB   | in 16.708 ms ± 2.631 ms      | null                       | in 30.984 ms ± 3.487 ms      | in 42.519 ms ± 3.304 ms        | in 32.781 ms ± 2.454 ms        |
| 8.192 kB   | in 28.835 ms ± 4.638 ms      | null                       | in 45.697 ms ± 2.289 ms      | in 62.876 ms ± 2.3 ms          | in 51.756 ms ± 3.412 ms        |
| 16.384 kB  | in 48.081 ms ± 2.816 ms      | null                       | in 87.432 ms ± 3.299 ms      | in 104.454 ms ± 2.002 ms       | in 103.8 ms ± 6.928 ms         |
| 32.768 kB  | in 75.4 ms ± 2.214 ms        | null                       | in 150.026 ms ± 3.915 ms     | in 203.72 ms ± 4.437 ms        | in 173.49 ms ± 5.548 ms        |
| 65.536 kB  | in 151.296 ms ± 10.615 ms    | null                       | in 314.852 ms ± 17.067 ms    | in 373.115 ms ± 4.012 ms       | in 324.19 ms ± 7.728 ms        |
| 131.072 kB | in 298.376 ms ± 28.812 ms    | null                       | in 871.643 ms ± 227.209 ms   | in 1,105.275 ms ± 207.642 ms   | in 997.79 ms ± 182.457 ms      |
| 262.144 kB | in 1,039.521 ms ± 213.359 ms | null                       | in 1,874.282 ms ± 437 ms     | in 2,242.786 ms ± 420.327 ms   | in 2,173.774 ms ± 463.942 ms   |
| 524.288 kB | in 1,525.559 ms ± 99.697 ms  | null                       | in 3,088.501 ms ± 227.16 ms  | in 3,808.836 ms ± 245.359 ms   | in 3,463.425 ms ± 298.269 ms   |
| 1.049 MB   | in 2,939.676 ms ± 157.189 ms | null                       | in 5,761.813 ms ± 231.319 ms | in 7,486.942 ms ± 382.516 ms   | in 6,684.445 ms ± 398.346 ms   |