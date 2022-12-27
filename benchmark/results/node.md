# Node

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.199 ms ± 0.26 ms  | null                          | in 8.312 ms ± 2.549 ms      | in 7.931 ms ± 1.279 ms             | in 9.172 ms ± 5.025 ms             |
| 2 B        | in 0.082 ms ± 0.02 ms  | null                          | in 6.474 ms ± 0.613 ms      | in 7.335 ms ± 2.843 ms             | in 6.631 ms ± 1.273 ms             |
| 4 B        | in 0.076 ms ± 0.009 ms | null                          | in 6.299 ms ± 0.928 ms      | in 6.972 ms ± 1.898 ms             | in 9.193 ms ± 3.702 ms             |
| 8 B        | in 0.084 ms ± 0.023 ms | null                          | in 6.996 ms ± 1.805 ms      | in 11.933 ms ± 6.67 ms             | in 6.856 ms ± 1.349 ms             |
| 16 B       | in 0.065 ms ± 0.008 ms | null                          | in 7.696 ms ± 3.089 ms      | in 6.375 ms ± 0.77 ms              | in 17.798 ms ± 23.68 ms            |
| 32 B       | in 0.063 ms ± 0.007 ms | null                          | in 6.316 ms ± 0.715 ms      | in 20.043 ms ± 9.972 ms            | in 6.991 ms ± 3.03 ms              |
| 64 B       | in 0.055 ms ± 0.006 ms | null                          | in 5.339 ms ± 0.33 ms       | in 5.52 ms ± 0.61 ms               | in 6.52 ms ± 2.352 ms              |
| 128 B      | in 0.054 ms ± 0.007 ms | null                          | in 9.173 ms ± 7.31 ms       | in 7.796 ms ± 4.55 ms              | in 5.729 ms ± 0.438 ms             |
| 256 B      | in 0.058 ms ± 0.008 ms | null                          | in 9.672 ms ± 7.484 ms      | in 6.055 ms ± 0.392 ms             | in 6.317 ms ± 0.383 ms             |
| 512 B      | in 0.064 ms ± 0.022 ms | null                          | in 6.587 ms ± 0.348 ms      | in 10.083 ms ± 6.454 ms            | in 8.585 ms ± 2.849 ms             |
| 1.024 kB   | in 0.093 ms ± 0.079 ms | null                          | in 7.837 ms ± 0.917 ms      | in 11.445 ms ± 6.404 ms            | in 8.634 ms ± 0.368 ms             |
| 2.048 kB   | in 0.084 ms ± 0.031 ms | null                          | in 10.044 ms ± 0.489 ms     | in 11.842 ms ± 1.563 ms            | in 13.187 ms ± 2.211 ms            |
| 4.096 kB   | in 0.061 ms ± 0.008 ms | null                          | in 15.683 ms ± 2.696 ms     | in 18.812 ms ± 2.052 ms            | in 22.873 ms ± 1.741 ms            |
| 8.192 kB   | in 0.085 ms ± 0.022 ms | null                          | in 25.332 ms ± 1.488 ms     | in 32.236 ms ± 3.504 ms            | in 35.234 ms ± 4.116 ms            |
| 16.384 kB  | in 0.118 ms ± 0.068 ms | null                          | in 48.92 ms ± 3.88 ms       | in 59.722 ms ± 8.07 ms             | in 61.136 ms ± 0.925 ms            |
| 32.768 kB  | in 0.082 ms ± 0.008 ms | null                          | in 85.008 ms ± 2.279 ms     | in 117.102 ms ± 9.288 ms           | in 119.369 ms ± 0.846 ms           |
| 65.536 kB  | in 0.083 ms ± 0.007 ms | null                          | in 236.936 ms ± 66.464 ms   | in 212.877 ms ± 4.145 ms           | in 235.852 ms ± 3.178 ms           |
| 131.072 kB | in 0.101 ms ± 0.007 ms | null                          | in 329.117 ms ± 5.485 ms    | in 421.42 ms ± 4.837 ms            | in 458.907 ms ± 12.734 ms          |
| 262.144 kB | in 0.119 ms ± 0.005 ms | null                          | in 919.48 ms ± 38.417 ms    | in 1,202.079 ms ± 107.94 ms        | in 1,312.489 ms ± 72.453 ms        |
| 524.288 kB | in 0.138 ms ± 0.039 ms | null                          | in 1,711.692 ms ± 87.78 ms  | in 2,121.247 ms ± 52.663 ms        | in 2,288.989 ms ± 85.13 ms         |
| 1.049 MB   | in 0.162 ms ± 0.079 ms | null                          | in 3,443.016 ms ± 158.93 ms | in 4,069.653 ms ± 189.276 ms       | in 4,387.166 ms ± 134.545 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 31.307 ms ± 9.903 ms      | null                       | in 25.419 ms ± 10.908 ms     | in 31.865 ms ± 11.647 ms       | in 37.516 ms ± 22.393 ms       |
| 2 B        | in 28.486 ms ± 16.277 ms     | null                       | in 20.479 ms ± 3.588 ms      | in 38.013 ms ± 21.197 ms       | in 35.278 ms ± 14.538 ms       |
| 4 B        | in 21.727 ms ± 9.232 ms      | null                       | in 20.503 ms ± 3.378 ms      | in 35.325 ms ± 14.996 ms       | in 31.242 ms ± 14.122 ms       |
| 8 B        | in 16.292 ms ± 7.435 ms      | null                       | in 18.689 ms ± 2.588 ms      | in 23.894 ms ± 3.614 ms        | in 23.377 ms ± 4.486 ms        |
| 16 B       | in 18.515 ms ± 9.245 ms      | null                       | in 18.82 ms ± 2.246 ms       | in 22.542 ms ± 5.694 ms        | in 26.809 ms ± 6.984 ms        |
| 32 B       | in 12.66 ms ± 2.851 ms       | null                       | in 19.105 ms ± 2.696 ms      | in 21.922 ms ± 4.964 ms        | in 23.203 ms ± 6.034 ms        |
| 64 B       | in 11.317 ms ± 2.086 ms      | null                       | in 34.161 ms ± 3.616 ms      | in 36.957 ms ± 6.589 ms        | in 33.425 ms ± 2.336 ms        |
| 128 B      | in 12.797 ms ± 1.757 ms      | null                       | in 20.136 ms ± 2.741 ms      | in 21.327 ms ± 3.534 ms        | in 21.855 ms ± 4.059 ms        |
| 256 B      | in 12.299 ms ± 2.569 ms      | null                       | in 20.015 ms ± 2.546 ms      | in 20.582 ms ± 2.608 ms        | in 22.073 ms ± 3.662 ms        |
| 512 B      | in 26.276 ms ± 3.595 ms      | null                       | in 42.046 ms ± 6.503 ms      | in 42.262 ms ± 4.627 ms        | in 43.401 ms ± 3.954 ms        |
| 1.024 kB   | in 16.164 ms ± 3.351 ms      | null                       | in 25.131 ms ± 4.014 ms      | in 25.626 ms ± 3.818 ms        | in 25.473 ms ± 4.346 ms        |
| 2.048 kB   | in 16.848 ms ± 2.939 ms      | null                       | in 28.476 ms ± 4.591 ms      | in 29.817 ms ± 2.658 ms        | in 32.302 ms ± 5.589 ms        |
| 4.096 kB   | in 22.496 ms ± 3.32 ms       | null                       | in 39.408 ms ± 3.674 ms      | in 40.183 ms ± 2.504 ms        | in 42.288 ms ± 4.013 ms        |
| 8.192 kB   | in 35.738 ms ± 3.272 ms      | null                       | in 56.259 ms ± 2.335 ms      | in 62.705 ms ± 3.748 ms        | in 66.887 ms ± 3.263 ms        |
| 16.384 kB  | in 58.67 ms ± 2.829 ms       | null                       | in 130.486 ms ± 34.574 ms    | in 121.976 ms ± 4.188 ms       | in 125.502 ms ± 2.528 ms       |
| 32.768 kB  | in 94.348 ms ± 5.258 ms      | null                       | in 182.559 ms ± 5.696 ms     | in 223.897 ms ± 17.509 ms      | in 213.869 ms ± 4.878 ms       |
| 65.536 kB  | in 178.27 ms ± 3.321 ms      | null                       | in 370.246 ms ± 39.232 ms    | in 400.586 ms ± 23.626 ms      | in 408.196 ms ± 4.028 ms       |
| 131.072 kB | in 358.382 ms ± 37.531 ms    | null                       | in 1,049.421 ms ± 228.946 ms | in 1,130.064 ms ± 234.425 ms   | in 1,216.442 ms ± 274.647 ms   |
| 262.144 kB | in 1,346.428 ms ± 325.276 ms | null                       | in 2,285.717 ms ± 545.23 ms  | in 2,531.336 ms ± 485.739 ms   | in 2,715.209 ms ± 517.249 ms   |
| 524.288 kB | in 1,864.843 ms ± 97.525 ms  | null                       | in 3,810.127 ms ± 253.92 ms  | in 4,189.32 ms ± 257.738 ms    | in 4,329.586 ms ± 264.819 ms   |
| 1.049 MB   | in 3,626.753 ms ± 233.949 ms | null                       | in 7,135.734 ms ± 235.486 ms | in 7,888.239 ms ± 307.662 ms   | in 8,578.206 ms ± 328.177 ms   |