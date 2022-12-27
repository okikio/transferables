# Deno

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.078 ms ± 0.079 ms | null                          | in 0.612 ms ± 0.207 ms       | in 0.65 ms ± 0.202 ms              | in 0.658 ms ± 0.206 ms             |
| 2 B        | in 0.027 ms ± 0.009 ms | null                          | in 0.492 ms ± 0.038 ms       | in 0.566 ms ± 0.083 ms             | in 0.581 ms ± 0.098 ms             |
| 4 B        | in 0.025 ms ± 0.005 ms | null                          | in 0.516 ms ± 0.062 ms       | in 0.607 ms ± 0.133 ms             | in 0.633 ms ± 0.136 ms             |
| 8 B        | in 0.023 ms ± now      | null                          | in 0.576 ms ± 0.061 ms       | in 0.634 ms ± 0.082 ms             | in 0.675 ms ± 0.104 ms             |
| 16 B       | in 0.041 ms ± 0.035 ms | null                          | in 0.562 ms ± 0.063 ms       | in 0.67 ms ± 0.116 ms              | in 0.699 ms ± 0.13 ms              |
| 32 B       | in 0.023 ms ± now      | null                          | in 0.605 ms ± 0.051 ms       | in 0.762 ms ± 0.154 ms             | in 0.71 ms ± 0.121 ms              |
| 64 B       | in 0.021 ms ± now      | null                          | in 0.658 ms ± 0.061 ms       | in 0.763 ms ± 0.143 ms             | in 0.795 ms ± 0.134 ms             |
| 128 B      | in 0.022 ms ± now      | null                          | in 0.805 ms ± 0.096 ms       | in 1.018 ms ± 0.275 ms             | in 1.019 ms ± 0.22 ms              |
| 256 B      | in 0.022 ms ± now      | null                          | in 1.086 ms ± 0.095 ms       | in 1.192 ms ± 0.096 ms             | in 1.378 ms ± 0.278 ms             |
| 512 B      | in 0.041 ms ± 0.04 ms  | null                          | in 1.551 ms ± 0.103 ms       | in 1.71 ms ± 0.115 ms              | in 2.064 ms ± 0.426 ms             |
| 1.024 kB   | in 0.04 ms ± 0.035 ms  | null                          | in 3.963 ms ± 3.002 ms       | in 2.825 ms ± 0.207 ms             | in 3.129 ms ± 0.119 ms             |
| 2.048 kB   | in 0.023 ms ± now      | null                          | in 4.38 ms ± 0.086 ms        | in 4.861 ms ± 0.086 ms             | in 6.069 ms ± 0.359 ms             |
| 4.096 kB   | in 0.024 ms ± now      | null                          | in 8.323 ms ± 0.192 ms       | in 9.276 ms ± 0.153 ms             | in 10.72 ms ± 0.181 ms             |
| 8.192 kB   | in 0.026 ms ± now      | null                          | in 15.986 ms ± 0.033 ms      | in 18.421 ms ± 0.414 ms            | in 21.007 ms ± 0.182 ms            |
| 16.384 kB  | in 0.03 ms ± now       | null                          | in 31.905 ms ± 0.452 ms      | in 35.331 ms ± 0.138 ms            | in 41.268 ms ± 0.123 ms            |
| 32.768 kB  | in 0.03 ms ± now       | null                          | in 64.939 ms ± 0.246 ms      | in 74.784 ms ± 0.882 ms            | in 84.465 ms ± 1.359 ms            |
| 65.536 kB  | in 0.031 ms ± now      | null                          | in 140.423 ms ± 21.002 ms    | in 143.749 ms ± 0.705 ms           | in 167.453 ms ± 0.142 ms           |
| 131.072 kB | in 0.032 ms ± now      | null                          | in 313.142 ms ± 22.414 ms    | in 289.003 ms ± 1.079 ms           | in 337.243 ms ± 1.049 ms           |
| 262.144 kB | in 0.033 ms ± now      | null                          | in 603.089 ms ± 66.379 ms    | in 659.8 ms ± 65.636 ms            | in 757.103 ms ± 70.037 ms          |
| 524.288 kB | in 0.034 ms ± now      | null                          | in 1,218.875 ms ± 113.299 ms | in 1,291.279 ms ± 101.332 ms       | in 1,478.662 ms ± 106.577 ms       |
| 1.049 MB   | in 0.042 ms ± 0.006 ms | null                          | in 2,593.674 ms ± 25.91 ms   | in 2,716.134 ms ± 170.757 ms       | in 3,094.478 ms ± 170.474 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.587 ms ± 0.947 ms      | null                       | in 1.723 ms ± 0.098 ms      | in 1.877 ms ± 0.168 ms         | in 1.79 ms ± 0.096 ms          |
| 2 B        | in 0.878 ms ± 0.086 ms      | null                       | in 1.957 ms ± 0.715 ms      | in 1.633 ms ± 0.058 ms         | in 1.606 ms ± 0.07 ms          |
| 4 B        | in 0.852 ms ± 0.072 ms      | null                       | in 1.564 ms ± 0.049 ms      | in 1.641 ms ± 0.071 ms         | in 1.567 ms ± 0.022 ms         |
| 8 B        | in 0.879 ms ± 0.106 ms      | null                       | in 1.579 ms ± 0.023 ms      | in 1.642 ms ± 0.059 ms         | in 1.581 ms ± 0.029 ms         |
| 16 B       | in 0.917 ms ± 0.155 ms      | null                       | in 1.645 ms ± 0.119 ms      | in 1.674 ms ± 0.059 ms         | in 1.717 ms ± 0.201 ms         |
| 32 B       | in 0.967 ms ± 0.201 ms      | null                       | in 1.675 ms ± 0.047 ms      | in 1.761 ms ± 0.087 ms         | in 1.706 ms ± 0.043 ms         |
| 64 B       | in 0.977 ms ± 0.119 ms      | null                       | in 1.811 ms ± 0.139 ms      | in 1.939 ms ± 0.195 ms         | in 1.96 ms ± 0.194 ms          |
| 128 B      | in 1.098 ms ± 0.072 ms      | null                       | in 2.08 ms ± 0.114 ms       | in 2.325 ms ± 0.287 ms         | in 2.197 ms ± 0.172 ms         |
| 256 B      | in 1.333 ms ± 0.054 ms      | null                       | in 2.608 ms ± 0.204 ms      | in 3.05 ms ± 0.527 ms          | in 2.762 ms ± 0.191 ms         |
| 512 B      | in 1.859 ms ± 0.115 ms      | null                       | in 3.53 ms ± 0.089 ms       | in 4.127 ms ± 0.28 ms          | in 3.685 ms ± 0.101 ms         |
| 1.024 kB   | in 2.819 ms ± 0.091 ms      | null                       | in 5.484 ms ± 0.078 ms      | in 6.393 ms ± 0.399 ms         | in 5.837 ms ± 0.116 ms         |
| 2.048 kB   | in 4.786 ms ± 0.147 ms      | null                       | in 9.373 ms ± 0.041 ms      | in 10.687 ms ± 0.114 ms        | in 10.064 ms ± 0.197 ms        |
| 4.096 kB   | in 8.801 ms ± 0.296 ms      | null                       | in 17.172 ms ± 0.051 ms     | in 19.692 ms ± 0.084 ms        | in 18.245 ms ± 0.222 ms        |
| 8.192 kB   | in 16.569 ms ± 0.426 ms     | null                       | in 34.694 ms ± 0.352 ms     | in 40.85 ms ± 0.296 ms         | in 38.032 ms ± 0.226 ms        |
| 16.384 kB  | in 32.737 ms ± 0.923 ms     | null                       | in 66.927 ms ± 0.475 ms     | in 76.326 ms ± 0.415 ms        | in 70.071 ms ± 0.452 ms        |
| 32.768 kB  | in 65.802 ms ± 0.634 ms     | null                       | in 131.601 ms ± 0.714 ms    | in 151.691 ms ± 0.941 ms       | in 138.298 ms ± 0.578 ms       |
| 65.536 kB  | in 130.385 ms ± 1.734 ms    | null                       | in 262.172 ms ± 1.209 ms    | in 300.529 ms ± 1.726 ms       | in 277.386 ms ± 2.304 ms       |
| 131.072 kB | in 272.349 ms ± 9.516 ms    | null                       | in 548.448 ms ± 12.604 ms   | in 607.269 ms ± 8.51 ms        | in 557.488 ms ± 5.524 ms       |
| 262.144 kB | in 577.968 ms ± 23.749 ms   | null                       | in 1,193.784 ms ± 52.341 ms | in 1,255.594 ms ± 34.059 ms    | in 1,203.907 ms ± 55.149 ms    |
| 524.288 kB | in 1,243.325 ms ± 84.626 ms | null                       | in 2,408.206 ms ± 8.236 ms  | in 2,723.22 ms ± 50.879 ms     | in 2,510.581 ms ± 28.938 ms    |
| 1.049 MB   | in 2,186.402 ms ± 16.202 ms | null                       | in 4,401.487 ms ± 40.007 ms | in 5,015.665 ms ± 27.505 ms    | in 4,940 ms ± 155.443 ms       |

## Worker

|            | hasTransferables             | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.942 ms ± 1.294 ms       | in 3.228 ms ± 0.346 ms      | in 2.454 ms ± 0.722 ms       | in 2.503 ms ± 0.054 ms         | in 2.211 ms ± 0.038 ms         |
| 2 B        | in 1.418 ms ± 0.211 ms       | in 1.288 ms ± 0.148 ms      | in 1.903 ms ± 0.139 ms       | in 1.98 ms ± 0.098 ms          | in 1.915 ms ± 0.048 ms         |
| 4 B        | in 1.103 ms ± 0.027 ms       | in 2.014 ms ± 1.455 ms      | in 1.873 ms ± 0.11 ms        | in 1.969 ms ± 0.086 ms         | in 1.848 ms ± 0.096 ms         |
| 8 B        | in 1.09 ms ± 0.042 ms        | in 1.662 ms ± 0.189 ms      | in 1.865 ms ± 0.115 ms       | in 2.275 ms ± 0.059 ms         | in 1.815 ms ± 0.074 ms         |
| 16 B       | in 1.356 ms ± 0.251 ms       | in 1.391 ms ± 0.158 ms      | in 1.91 ms ± 0.124 ms        | in 2.03 ms ± 0.052 ms          | in 1.821 ms ± 0.066 ms         |
| 32 B       | in 1.073 ms ± 0.031 ms       | in 1.473 ms ± 0.113 ms      | in 1.982 ms ± 0.115 ms       | in 2.134 ms ± 0.058 ms         | in 1.937 ms ± 0.071 ms         |
| 64 B       | in 1.076 ms ± 0.04 ms        | in 1.458 ms ± 0.113 ms      | in 2.134 ms ± 0.107 ms       | in 2.556 ms ± 0.083 ms         | in 3.352 ms ± 2.352 ms         |
| 128 B      | in 1.205 ms ± 0.03 ms        | in 1.523 ms ± 0.114 ms      | in 2.412 ms ± 0.152 ms       | in 3.049 ms ± 0.097 ms         | in 2.448 ms ± 0.078 ms         |
| 256 B      | in 1.624 ms ± 0.069 ms       | in 1.805 ms ± 0.112 ms      | in 2.847 ms ± 0.141 ms       | in 4.164 ms ± 0.138 ms         | in 2.983 ms ± 0.045 ms         |
| 512 B      | in 2.04 ms ± 0.043 ms        | in 2.404 ms ± 0.112 ms      | in 3.826 ms ± 0.116 ms       | in 4.668 ms ± 0.117 ms         | in 3.876 ms ± 0.1 ms           |
| 1.024 kB   | in 3.165 ms ± 0.097 ms       | in 3.409 ms ± 0.048 ms      | in 5.881 ms ± 0.262 ms       | in 6.338 ms ± 0.036 ms         | in 6.095 ms ± 0.232 ms         |
| 2.048 kB   | in 5.152 ms ± 0.152 ms       | in 6.684 ms ± 2.309 ms      | in 9.937 ms ± 0.189 ms       | in 10.956 ms ± 0.139 ms        | in 10.242 ms ± 0.215 ms        |
| 4.096 kB   | in 9.48 ms ± 0.286 ms        | in 9.83 ms ± 0.228 ms       | in 17.871 ms ± 0.125 ms      | in 20.02 ms ± 0.276 ms         | in 18.469 ms ± 0.284 ms        |
| 8.192 kB   | in 17.941 ms ± 0.169 ms      | in 18.07 ms ± 0.273 ms      | in 33.717 ms ± 0.175 ms      | in 38.155 ms ± 0.325 ms        | in 35.231 ms ± 0.191 ms        |
| 16.384 kB  | in 34.266 ms ± 0.405 ms      | in 35.407 ms ± 0.388 ms     | in 66.132 ms ± 0.527 ms      | in 82.009 ms ± 8.569 ms        | in 68.994 ms ± 0.521 ms        |
| 32.768 kB  | in 70.334 ms ± 1.234 ms      | in 80.653 ms ± 6.77 ms      | in 132.676 ms ± 0.34 ms      | in 158.268 ms ± 7.176 ms       | in 163.848 ms ± 4.535 ms       |
| 65.536 kB  | in 135.697 ms ± 3.548 ms     | in 151.296 ms ± 10.849 ms   | in 263.124 ms ± 1.451 ms     | in 301.626 ms ± 3.683 ms       | in 277.019 ms ± 2.005 ms       |
| 131.072 kB | in 285.375 ms ± 11.871 ms    | in 280.054 ms ± 11.438 ms   | in 536.636 ms ± 14.032 ms    | in 603.506 ms ± 4.202 ms       | in 562.787 ms ± 6.691 ms       |
| 262.144 kB | in 572.647 ms ± 27.041 ms    | in 623.23 ms ± 52.424 ms    | in 1,130.494 ms ± 66.394 ms  | in 1,323.496 ms ± 46.101 ms    | in 1,227.6 ms ± 34.035 ms      |
| 524.288 kB | in 1,255.972 ms ± 28.115 ms  | in 1,286.505 ms ± 95.098 ms | in 2,328.817 ms ± 75.295 ms  | in 2,670.759 ms ± 74.584 ms    | in 2,427.311 ms ± 41.634 ms    |
| 1.049 MB   | in 2,361.312 ms ± 109.688 ms | in 2,435.693 ms ± 99.661 ms | in 4,539.663 ms ± 188.691 ms | in 5,153.3 ms ± 108.241 ms     | in 4,707.58 ms ± 68.666 ms     |