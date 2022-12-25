# Deno

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.103 ms ± 0.145 ms  | null                          | in 0.619 ms ± 0.212 ms      | in 0.71 ms ± 0.23 ms               | in 0.65 ms ± 0.213 ms              |
| 2 B        | in 0.03 ms ± 0.016 ms   | null                          | in 0.493 ms ± 0.035 ms      | in 0.597 ms ± 0.095 ms             | in 0.607 ms ± 0.121 ms             |
| 4 B        | in 0.024 ms ± 0.013 ms  | null                          | in 0.522 ms ± 0.057 ms      | in 0.642 ms ± 0.139 ms             | in 0.611 ms ± 0.155 ms             |
| 8 B        | in 0.023 ms ± 0.012 ms  | null                          | in 0.558 ms ± 0.055 ms      | in 0.648 ms ± 0.11 ms              | in 0.636 ms ± 0.124 ms             |
| 16 B       | in 0.023 ms ± 0.012 ms  | null                          | in 0.568 ms ± 0.062 ms      | in 0.696 ms ± 0.147 ms             | in 0.656 ms ± 0.124 ms             |
| 32 B       | in 0.022 ms ± 0.011 ms  | null                          | in 0.597 ms ± 0.06 ms       | in 0.751 ms ± 0.167 ms             | in 0.7 ms ± 0.126 ms               |
| 64 B       | in 0.022 ms ± 0.011 ms  | null                          | in 0.658 ms ± 0.058 ms      | in 0.858 ms ± 0.157 ms             | in 0.799 ms ± 0.143 ms             |
| 128 B      | in 0.024 ms ± 0.011 ms  | null                          | in 0.793 ms ± 0.05 ms       | in 1.057 ms ± 0.245 ms             | in 0.952 ms ± 0.263 ms             |
| 256 B      | in 0.026 ms ± 0.014 ms  | null                          | in 1.019 ms ± 0.083 ms      | in 1.451 ms ± 0.408 ms             | in 1.275 ms ± 0.332 ms             |
| 512 B      | in 0.03 ms ± 0.018 ms   | null                          | in 1.502 ms ± 0.103 ms      | in 1.99 ms ± 0.096 ms              | in 1.916 ms ± 0.535 ms             |
| 1.024 kB   | in 0.057 ms ± 0.058 ms  | null                          | in 2.427 ms ± 0.061 ms      | in 3.363 ms ± 0.164 ms             | in 2.814 ms ± 0.136 ms             |
| 2.048 kB   | in 0.055 ms ± 0.043 ms  | null                          | in 4.558 ms ± 0.445 ms      | in 8.237 ms ± 3.869 ms             | in 5.188 ms ± 0.122 ms             |
| 4.096 kB   | in 0.079 ms ± 0.07 ms   | null                          | in 8.245 ms ± 0.189 ms      | in 11.84 ms ± 0.469 ms             | in 9.598 ms ± 0.053 ms             |
| 8.192 kB   | in 0.133 ms ± 0.124 ms  | null                          | in 16.263 ms ± 0.526 ms     | in 23.027 ms ± 0.247 ms            | in 18.886 ms ± 0.201 ms            |
| 16.384 kB  | in 0.129 ms ± now       | null                          | in 32.489 ms ± 0.642 ms     | in 46.611 ms ± 0.347 ms            | in 37.98 ms ± 0.483 ms             |
| 32.768 kB  | in 0.688 ms ± 0.815 ms  | null                          | in 64.964 ms ± 1.26 ms      | in 91.99 ms ± 1.134 ms             | in 76.483 ms ± 1.701 ms            |
| 65.536 kB  | in 0.694 ms ± 0.012 ms  | null                          | in 138.089 ms ± 19.542 ms   | in 185.493 ms ± 0.501 ms           | in 152.261 ms ± 0.674 ms           |
| 131.072 kB | in 1.591 ms ± 0.01 ms   | null                          | in 320.742 ms ± 20.085 ms   | in 371.394 ms ± 2.183 ms           | in 319.223 ms ± 29.588 ms          |
| 262.144 kB | in 3.582 ms ± 0.09 ms   | null                          | in 598.936 ms ± 62.743 ms   | in 816.733 ms ± 57.696 ms          | in 687.031 ms ± 61.46 ms           |
| 524.288 kB | in 5.89 ms ± 0.021 ms   | null                          | in 1,202.798 ms ± 113.74 ms | in 1,661.623 ms ± 105.554 ms       | in 1,406.395 ms ± 99.341 ms        |
| 1.049 MB   | in 12.858 ms ± 0.073 ms | null                          | in 2,582.375 ms ± 15.144 ms | in 3,452.408 ms ± 203.962 ms       | in 2,869.932 ms ± 181.488 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.601 ms ± 0.945 ms      | null                       | in 1.702 ms ± 0.012 ms      | in 1.911 ms ± 0.188 ms         | in 1.826 ms ± 0.176 ms         |
| 2 B        | in 0.893 ms ± 0.08 ms       | null                       | in 1.89 ms ± 0.616 ms       | in 1.683 ms ± 0.044 ms         | in 1.631 ms ± 0.065 ms         |
| 4 B        | in 0.866 ms ± 0.063 ms      | null                       | in 1.686 ms ± 0.125 ms      | in 1.682 ms ± 0.053 ms         | in 1.614 ms ± 0.033 ms         |
| 8 B        | in 0.913 ms ± 0.111 ms      | null                       | in 1.654 ms ± 0.136 ms      | in 1.694 ms ± 0.067 ms         | in 1.652 ms ± 0.035 ms         |
| 16 B       | in 0.964 ms ± 0.162 ms      | null                       | in 1.688 ms ± 0.138 ms      | in 1.726 ms ± 0.105 ms         | in 1.741 ms ± 0.193 ms         |
| 32 B       | in 0.997 ms ± 0.215 ms      | null                       | in 1.722 ms ± 0.143 ms      | in 1.858 ms ± 0.196 ms         | in 1.757 ms ± 0.079 ms         |
| 64 B       | in 1.014 ms ± 0.097 ms      | null                       | in 1.814 ms ± 0.123 ms      | in 2.013 ms ± 0.275 ms         | in 1.968 ms ± 0.21 ms          |
| 128 B      | in 1.099 ms ± 0.053 ms      | null                       | in 2.064 ms ± 0.124 ms      | in 2.392 ms ± 0.434 ms         | in 2.181 ms ± 0.135 ms         |
| 256 B      | in 1.326 ms ± 0.045 ms      | null                       | in 2.605 ms ± 0.211 ms      | in 3.197 ms ± 0.804 ms         | in 2.715 ms ± 0.17 ms          |
| 512 B      | in 1.88 ms ± 0.143 ms       | null                       | in 3.537 ms ± 0.112 ms      | in 4.066 ms ± 0.242 ms         | in 3.915 ms ± 0.352 ms         |
| 1.024 kB   | in 2.867 ms ± 0.161 ms      | null                       | in 5.461 ms ± 0.054 ms      | in 6.47 ms ± 0.305 ms          | in 5.919 ms ± 0.099 ms         |
| 2.048 kB   | in 4.828 ms ± 0.182 ms      | null                       | in 9.377 ms ± 0.046 ms      | in 11.108 ms ± 0.101 ms        | in 10.271 ms ± 0.125 ms        |
| 4.096 kB   | in 8.963 ms ± 0.427 ms      | null                       | in 17.22 ms ± 0.116 ms      | in 20.58 ms ± 0.219 ms         | in 18.575 ms ± 0.151 ms        |
| 8.192 kB   | in 16.661 ms ± 0.527 ms     | null                       | in 34.521 ms ± 0.361 ms     | in 40.068 ms ± 0.418 ms        | in 37.133 ms ± 0.271 ms        |
| 16.384 kB  | in 32.435 ms ± 0.642 ms     | null                       | in 66.542 ms ± 0.823 ms     | in 77.932 ms ± 0.645 ms        | in 72.276 ms ± 0.178 ms        |
| 32.768 kB  | in 65.754 ms ± 0.654 ms     | null                       | in 131.505 ms ± 0.889 ms    | in 158.331 ms ± 1.223 ms       | in 141.717 ms ± 0.476 ms       |
| 65.536 kB  | in 130.265 ms ± 1.038 ms    | null                       | in 261.186 ms ± 0.82 ms     | in 315.629 ms ± 2.41 ms        | in 310.878 ms ± 6.609 ms       |
| 131.072 kB | in 262.262 ms ± 1.758 ms    | null                       | in 549.556 ms ± 16.467 ms   | in 634.496 ms ± 3.689 ms       | in 581.726 ms ± 4.655 ms       |
| 262.144 kB | in 542.829 ms ± 10.837 ms   | null                       | in 1,147.983 ms ± 52.86 ms  | in 1,384.279 ms ± 55.389 ms    | in 1,196.31 ms ± 3.621 ms      |
| 524.288 kB | in 1,123.885 ms ± 80.219 ms | null                       | in 2,249.522 ms ± 94.422 ms | in 2,591.406 ms ± 66.408 ms    | in 2,477.067 ms ± 11.293 ms    |
| 1.049 MB   | in 2,146.827 ms ± 22.198 ms | null                       | in 4,270.791 ms ± 75.201 ms | in 5,241.372 ms ± 60.213 ms    | in 4,874.522 ms ± 142.898 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.751 ms ± 1.041 ms      | in 3.043 ms ± 0.018 ms      | in 2.102 ms ± 0.035 ms       | in 2.565 ms ± 0.056 ms         | in 2.358 ms ± 0.082 ms         |
| 2 B        | in 1.225 ms ± 0.111 ms      | in 1.215 ms ± 0.027 ms      | in 1.854 ms ± 0.134 ms       | in 2.035 ms ± 0.094 ms         | in 1.831 ms ± 0.052 ms         |
| 4 B        | in 1.228 ms ± 0.107 ms      | in 1.47 ms ± 0.147 ms       | in 1.866 ms ± 0.11 ms        | in 2.048 ms ± 0.094 ms         | in 1.869 ms ± 0.047 ms         |
| 8 B        | in 1.491 ms ± 0.494 ms      | in 1.662 ms ± 0.107 ms      | in 1.861 ms ± 0.081 ms       | in 2.048 ms ± 0.045 ms         | in 1.778 ms ± 0.019 ms         |
| 16 B       | in 1.298 ms ± 0.159 ms      | in 1.552 ms ± 0.075 ms      | in 1.906 ms ± 0.099 ms       | in 2.064 ms ± 0.018 ms         | in 1.799 ms ± 0.034 ms         |
| 32 B       | in 1.156 ms ± 0.107 ms      | in 1.545 ms ± 0.076 ms      | in 1.917 ms ± 0.081 ms       | in 2.229 ms ± 0.045 ms         | in 1.972 ms ± 0.043 ms         |
| 64 B       | in 1.192 ms ± 0.115 ms      | in 1.526 ms ± 0.077 ms      | in 2.064 ms ± 0.092 ms       | in 2.445 ms ± 0.014 ms         | in 2.192 ms ± 0.057 ms         |
| 128 B      | in 1.429 ms ± 0.313 ms      | in 1.657 ms ± 0.065 ms      | in 2.343 ms ± 0.083 ms       | in 3.012 ms ± 0.023 ms         | in 2.492 ms ± 0.061 ms         |
| 256 B      | in 1.715 ms ± 0.13 ms       | in 1.88 ms ± 0.05 ms        | in 2.829 ms ± 0.088 ms       | in 4.21 ms ± 0.04 ms           | in 3.194 ms ± 0.05 ms          |
| 512 B      | in 2.16 ms ± 0.209 ms       | in 2.31 ms ± 0.062 ms       | in 3.805 ms ± 0.078 ms       | in 4.698 ms ± 0.089 ms         | in 3.984 ms ± 0.073 ms         |
| 1.024 kB   | in 3.231 ms ± 0.11 ms       | in 3.308 ms ± 0.02 ms       | in 5.731 ms ± 0.06 ms        | in 6.624 ms ± 0.163 ms         | in 5.893 ms ± 0.031 ms         |
| 2.048 kB   | in 5.245 ms ± 0.175 ms      | in 5.348 ms ± 0.052 ms      | in 9.792 ms ± 0.09 ms        | in 11.501 ms ± 0.16 ms         | in 10.297 ms ± 0.105 ms        |
| 4.096 kB   | in 9.661 ms ± 0.35 ms       | in 9.569 ms ± 0.113 ms      | in 17.681 ms ± 0.159 ms      | in 21.21 ms ± 0.22 ms          | in 18.754 ms ± 0.224 ms        |
| 8.192 kB   | in 19.148 ms ± 2.721 ms     | in 17.791 ms ± 0.192 ms     | in 33.481 ms ± 0.408 ms      | in 41.554 ms ± 0.223 ms        | in 35.917 ms ± 0.248 ms        |
| 16.384 kB  | in 34.245 ms ± 0.573 ms     | in 34.321 ms ± 0.21 ms      | in 65.68 ms ± 0.441 ms       | in 97.546 ms ± 13.086 ms       | in 70.955 ms ± 0.559 ms        |
| 32.768 kB  | in 70.146 ms ± 1.981 ms     | in 72.369 ms ± 0.878 ms     | in 131.841 ms ± 0.645 ms     | in 183.335 ms ± 31.516 ms      | in 173.252 ms ± 3.806 ms       |
| 65.536 kB  | in 132.897 ms ± 1.763 ms    | in 161.804 ms ± 12.475 ms   | in 262.057 ms ± 2.215 ms     | in 323.881 ms ± 6.68 ms        | in 292.893 ms ± 5.322 ms       |
| 131.072 kB | in 291.52 ms ± 12.381 ms    | in 282.272 ms ± 10.484 ms   | in 536.193 ms ± 18.514 ms    | in 657.838 ms ± 3.516 ms       | in 605.857 ms ± 34.508 ms      |
| 262.144 kB | in 536.927 ms ± 2.407 ms    | in 555.282 ms ± 4.495 ms    | in 1,209.617 ms ± 69.95 ms   | in 1,419.629 ms ± 97.771 ms    | in 1,259.665 ms ± 41.258 ms    |
| 524.288 kB | in 1,182.726 ms ± 13.171 ms | in 1,327.959 ms ± 79.315 ms | in 2,313.475 ms ± 27 ms      | in 2,855.421 ms ± 27.915 ms    | in 2,554.04 ms ± 139.047 ms    |
| 1.049 MB   | in 2,340.89 ms ± 37.522 ms  | in 2,442.163 ms ± 82.796 ms | in 4,498.254 ms ± 203.393 ms | in 5,488.237 ms ± 50.299 ms    | in 5,233.866 ms ± 44.108 ms    |