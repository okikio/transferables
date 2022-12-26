# Deno

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.095 ms ± 0.139 ms  | null                          | in 0.609 ms ± 0.204 ms       | in 0.7 ms ± 0.244 ms               | in 0.642 ms ± 0.217 ms             |
| 2 B        | in 0.026 ms ± 0.016 ms  | null                          | in 0.491 ms ± 0.041 ms       | in 0.611 ms ± 0.106 ms             | in 0.578 ms ± 0.109 ms             |
| 4 B        | in 0.024 ms ± 0.012 ms  | null                          | in 0.518 ms ± 0.053 ms       | in 0.635 ms ± 0.12 ms              | in 0.613 ms ± 0.13 ms              |
| 8 B        | in 0.022 ms ± 0.01 ms   | null                          | in 0.551 ms ± 0.064 ms       | in 0.671 ms ± 0.101 ms             | in 0.659 ms ± 0.105 ms             |
| 16 B       | in 0.023 ms ± 0.012 ms  | null                          | in 0.571 ms ± 0.052 ms       | in 0.715 ms ± 0.139 ms             | in 0.673 ms ± 0.119 ms             |
| 32 B       | in 0.023 ms ± 0.01 ms   | null                          | in 0.603 ms ± 0.06 ms        | in 0.761 ms ± 0.183 ms             | in 0.688 ms ± 0.116 ms             |
| 64 B       | in 0.022 ms ± 0.01 ms   | null                          | in 0.666 ms ± 0.057 ms       | in 0.84 ms ± 0.163 ms              | in 0.771 ms ± 0.145 ms             |
| 128 B      | in 0.025 ms ± 0.013 ms  | null                          | in 0.81 ms ± 0.038 ms        | in 1.064 ms ± 0.221 ms             | in 0.936 ms ± 0.198 ms             |
| 256 B      | in 0.026 ms ± 0.014 ms  | null                          | in 1.033 ms ± 0.082 ms       | in 1.466 ms ± 0.383 ms             | in 1.243 ms ± 0.281 ms             |
| 512 B      | in 0.03 ms ± 0.018 ms   | null                          | in 1.547 ms ± 0.154 ms       | in 1.994 ms ± 0.089 ms             | in 1.861 ms ± 0.423 ms             |
| 1.024 kB   | in 0.053 ms ± 0.057 ms  | null                          | in 2.449 ms ± 0.07 ms        | in 3.598 ms ± 0.651 ms             | in 2.795 ms ± 0.176 ms             |
| 2.048 kB   | in 0.055 ms ± 0.043 ms  | null                          | in 4.404 ms ± 0.102 ms       | in 6.479 ms ± 0.439 ms             | in 4.932 ms ± 0.083 ms             |
| 4.096 kB   | in 0.075 ms ± 0.057 ms  | null                          | in 8.23 ms ± 0.068 ms        | in 11.783 ms ± 0.401 ms            | in 10.512 ms ± 0.764 ms            |
| 8.192 kB   | in 0.131 ms ± 0.122 ms  | null                          | in 15.938 ms ± 0.249 ms      | in 22.856 ms ± 0.235 ms            | in 17.901 ms ± 0.167 ms            |
| 16.384 kB  | in 0.131 ms ± now       | null                          | in 31.91 ms ± 0.454 ms       | in 46.048 ms ± 0.31 ms             | in 35.957 ms ± 0.615 ms            |
| 32.768 kB  | in 1.013 ms ± 0.893 ms  | null                          | in 64.412 ms ± 0.712 ms      | in 91.314 ms ± 1.277 ms            | in 72.056 ms ± 0.489 ms            |
| 65.536 kB  | in 0.712 ms ± 0.049 ms  | null                          | in 128.904 ms ± 1.155 ms     | in 185.275 ms ± 2.114 ms           | in 143.781 ms ± 0.867 ms           |
| 131.072 kB | in 1.562 ms ± 0.009 ms  | null                          | in 306.59 ms ± 28.642 ms     | in 372.188 ms ± 6.348 ms           | in 286.652 ms ± 2.625 ms           |
| 262.144 kB | in 3.527 ms ± 0.063 ms  | null                          | in 592.509 ms ± 58.164 ms    | in 807.593 ms ± 57.105 ms          | in 656.108 ms ± 55.483 ms          |
| 524.288 kB | in 5.824 ms ± 0.018 ms  | null                          | in 1,154.463 ms ± 113.669 ms | in 1,613.557 ms ± 105.266 ms       | in 1,380.394 ms ± 100.272 ms       |
| 1.049 MB   | in 13.379 ms ± 1.064 ms | null                          | in 2,384.528 ms ± 246.964 ms | in 3,415.902 ms ± 228.23 ms        | in 2,627.712 ms ± 214.381 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.612 ms ± 0.949 ms      | null                       | in 1.69 ms ± 0.05 ms         | in 2.68 ms ± 0.88 ms           | in 1.821 ms ± 0.123 ms         |
| 2 B        | in 0.901 ms ± 0.075 ms      | null                       | in 1.969 ms ± 0.582 ms       | in 1.678 ms ± 0.056 ms         | in 1.657 ms ± 0.094 ms         |
| 4 B        | in 0.873 ms ± 0.065 ms      | null                       | in 1.802 ms ± 0.465 ms       | in 1.642 ms ± 0.052 ms         | in 1.596 ms ± 0.054 ms         |
| 8 B        | in 0.884 ms ± 0.11 ms       | null                       | in 1.615 ms ± 0.122 ms       | in 1.683 ms ± 0.069 ms         | in 1.603 ms ± 0.023 ms         |
| 16 B       | in 0.923 ms ± 0.175 ms      | null                       | in 1.64 ms ± 0.071 ms        | in 1.772 ms ± 0.102 ms         | in 1.729 ms ± 0.188 ms         |
| 32 B       | in 0.969 ms ± 0.192 ms      | null                       | in 1.777 ms ± 0.196 ms       | in 1.843 ms ± 0.158 ms         | in 1.754 ms ± 0.125 ms         |
| 64 B       | in 0.977 ms ± 0.114 ms      | null                       | in 1.84 ms ± 0.11 ms         | in 1.992 ms ± 0.277 ms         | in 1.971 ms ± 0.145 ms         |
| 128 B      | in 1.098 ms ± 0.054 ms      | null                       | in 2.065 ms ± 0.101 ms       | in 2.388 ms ± 0.43 ms          | in 2.183 ms ± 0.123 ms         |
| 256 B      | in 1.322 ms ± 0.058 ms      | null                       | in 2.633 ms ± 0.234 ms       | in 3.195 ms ± 0.807 ms         | in 2.764 ms ± 0.164 ms         |
| 512 B      | in 1.876 ms ± 0.125 ms      | null                       | in 3.536 ms ± 0.08 ms        | in 4.097 ms ± 0.269 ms         | in 3.885 ms ± 0.293 ms         |
| 1.024 kB   | in 2.885 ms ± 0.149 ms      | null                       | in 5.497 ms ± 0.091 ms       | in 6.518 ms ± 0.28 ms          | in 5.852 ms ± 0.126 ms         |
| 2.048 kB   | in 4.868 ms ± 0.16 ms       | null                       | in 9.468 ms ± 0.032 ms       | in 11.082 ms ± 0.052 ms        | in 10.04 ms ± 0.129 ms         |
| 4.096 kB   | in 8.91 ms ± 0.273 ms       | null                       | in 17.338 ms ± 0.084 ms      | in 20.689 ms ± 0.231 ms        | in 18.229 ms ± 0.108 ms        |
| 8.192 kB   | in 16.733 ms ± 0.5 ms       | null                       | in 34.518 ms ± 0.115 ms      | in 40.425 ms ± 0.593 ms        | in 36.262 ms ± 0.329 ms        |
| 16.384 kB  | in 32.608 ms ± 0.627 ms     | null                       | in 66.665 ms ± 0.526 ms      | in 78.618 ms ± 0.407 ms        | in 70.12 ms ± 0.388 ms         |
| 32.768 kB  | in 65.961 ms ± 0.982 ms     | null                       | in 131.862 ms ± 0.344 ms     | in 158.397 ms ± 0.476 ms       | in 138.259 ms ± 0.374 ms       |
| 65.536 kB  | in 131.126 ms ± 0.658 ms    | null                       | in 262.595 ms ± 1.097 ms     | in 320.58 ms ± 6.943 ms        | in 301.234 ms ± 12.505 ms      |
| 131.072 kB | in 266.649 ms ± 7.574 ms    | null                       | in 557.842 ms ± 24.736 ms    | in 640.907 ms ± 10.41 ms       | in 565.13 ms ± 4.245 ms        |
| 262.144 kB | in 573.617 ms ± 54.276 ms   | null                       | in 1,171.621 ms ± 34.411 ms  | in 1,340.27 ms ± 27.092 ms     | in 1,154.54 ms ± 31.76 ms      |
| 524.288 kB | in 1,134.674 ms ± 64.038 ms | null                       | in 2,250.367 ms ± 149.679 ms | in 2,638.337 ms ± 105.102 ms   | in 2,335.968 ms ± 83.669 ms    |
| 1.049 MB   | in 2,175.104 ms ± 41.592 ms | null                       | in 4,259.567 ms ± 74.365 ms  | in 5,322.531 ms ± 135.867 ms   | in 4,614.575 ms ± 136.117 ms   |

## Worker

|            | hasTransferables           | postMessage (no transfers)   | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | ---------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.807 ms ± 1.441 ms     | in 3.016 ms ± 0.045 ms       | in 2.075 ms ± 0.033 ms      | in 2.521 ms ± 0.018 ms         | in 2.217 ms ± 0.051 ms         |
| 2 B        | in 1.218 ms ± 0.04 ms      | in 1.201 ms ± 0.015 ms       | in 1.856 ms ± 0.141 ms      | in 1.968 ms ± 0.086 ms         | in 1.933 ms ± 0.03 ms          |
| 4 B        | in 1.161 ms ± 0.052 ms     | in 1.367 ms ± 0.16 ms        | in 1.955 ms ± 0.093 ms      | in 1.996 ms ± 0.076 ms         | in 1.807 ms ± 0.052 ms         |
| 8 B        | in 1.053 ms ± 0.038 ms     | in 1.465 ms ± 0.113 ms       | in 1.86 ms ± 0.017 ms       | in 2.003 ms ± 0.038 ms         | in 1.793 ms ± 0.03 ms          |
| 16 B       | in 1.182 ms ± 0.049 ms     | in 1.395 ms ± 0.13 ms        | in 1.878 ms ± 0.028 ms      | in 2.015 ms ± 0.056 ms         | in 1.825 ms ± 0.043 ms         |
| 32 B       | in 1.054 ms ± 0.032 ms     | in 1.407 ms ± 0.126 ms       | in 1.973 ms ± 0.043 ms      | in 2.235 ms ± 0.027 ms         | in 1.965 ms ± 0.08 ms          |
| 64 B       | in 1.108 ms ± 0.05 ms      | in 1.392 ms ± 0.127 ms       | in 2.083 ms ± 0.053 ms      | in 2.429 ms ± 0.01 ms          | in 2.546 ms ± 0.75 ms          |
| 128 B      | in 1.216 ms ± 0.033 ms     | in 1.52 ms ± 0.145 ms        | in 2.326 ms ± 0.025 ms      | in 3.003 ms ± 0.043 ms         | in 2.385 ms ± 0.048 ms         |
| 256 B      | in 1.629 ms ± 0.078 ms     | in 1.756 ms ± 0.119 ms       | in 2.793 ms ± 0.034 ms      | in 4.164 ms ± 0.073 ms         | in 3.006 ms ± 0.061 ms         |
| 512 B      | in 2.029 ms ± 0.054 ms     | in 2.243 ms ± 0.09 ms        | in 3.814 ms ± 0.083 ms      | in 4.813 ms ± 0.597 ms         | in 3.884 ms ± 0.095 ms         |
| 1.024 kB   | in 3.161 ms ± 0.103 ms     | in 3.288 ms ± 0.135 ms       | in 5.829 ms ± 0.16 ms       | in 6.447 ms ± 0.126 ms         | in 5.851 ms ± 0.094 ms         |
| 2.048 kB   | in 5.123 ms ± 0.146 ms     | in 5.365 ms ± 0.218 ms       | in 9.734 ms ± 0.031 ms      | in 11.356 ms ± 0.154 ms        | in 10.042 ms ± 0.181 ms        |
| 4.096 kB   | in 9.558 ms ± 0.315 ms     | in 9.499 ms ± 0.139 ms       | in 17.614 ms ± 0.063 ms     | in 20.766 ms ± 0.22 ms         | in 18.219 ms ± 0.122 ms        |
| 8.192 kB   | in 19.624 ms ± 1.467 ms    | in 17.793 ms ± 0.229 ms      | in 33.191 ms ± 0.305 ms     | in 41.097 ms ± 0.392 ms        | in 34.77 ms ± 0.156 ms         |
| 16.384 kB  | in 34.341 ms ± 0.605 ms    | in 34.394 ms ± 0.566 ms      | in 65.35 ms ± 0.27 ms       | in 95.345 ms ± 12.377 ms       | in 68.018 ms ± 0.456 ms        |
| 32.768 kB  | in 69.958 ms ± 1.738 ms    | in 72.408 ms ± 1.17 ms       | in 132.19 ms ± 0.963 ms     | in 170.636 ms ± 11.463 ms      | in 162.147 ms ± 26.168 ms      |
| 65.536 kB  | in 133.513 ms ± 2.623 ms   | in 163.734 ms ± 8.81 ms      | in 269.251 ms ± 9.677 ms    | in 320.06 ms ± 5.643 ms        | in 283.842 ms ± 9.418 ms       |
| 131.072 kB | in 274.22 ms ± 6.174 ms    | in 274.718 ms ± 3.521 ms     | in 530.578 ms ± 16.886 ms   | in 655.85 ms ± 10.573 ms       | in 572.85 ms ± 28.607 ms       |
| 262.144 kB | in 547.277 ms ± 27.485 ms  | in 572.245 ms ± 42.905 ms    | in 1,205.865 ms ± 75.917 ms | in 1,395.703 ms ± 46.621 ms    | in 1,227.598 ms ± 67.462 ms    |
| 524.288 kB | in 1,167.788 ms ± 7.729 ms | in 1,354.474 ms ± 15.749 ms  | in 2,264.933 ms ± 48.374 ms | in 2,821.021 ms ± 29.552 ms    | in 2,408.694 ms ± 78.857 ms    |
| 1.049 MB   | in 2,285.668 ms ± 32.35 ms | in 2,411.297 ms ± 126.293 ms | in 4,517.17 ms ± 159.258 ms | in 5,434.162 ms ± 33.185 ms    | in 5,011.21 ms ± 23.749 ms     |