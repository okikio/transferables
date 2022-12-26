# Deno

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.095 ms ± 0.136 ms | null                          | in 0.614 ms ± 0.196 ms       | in 0.74 ms ± 0.243 ms              | in 0.66 ms ± 0.212 ms              |
| 2 B        | in 0.028 ms ± 0.016 ms | null                          | in 0.51 ms ± 0.052 ms        | in 0.62 ms ± 0.1 ms                | in 0.62 ms ± 0.106 ms              |
| 4 B        | in 0.03 ms ± 0.012 ms  | null                          | in 0.517 ms ± 0.041 ms       | in 0.65 ms ± 0.124 ms              | in 0.637 ms ± 0.13 ms              |
| 8 B        | in 0.024 ms ± 0.011 ms | null                          | in 0.587 ms ± 0.04 ms        | in 0.694 ms ± 0.102 ms             | in 0.667 ms ± 0.129 ms             |
| 16 B       | in 0.025 ms ± 0.012 ms | null                          | in 0.571 ms ± 0.058 ms       | in 0.751 ms ± 0.137 ms             | in 0.7 ms ± 0.102 ms               |
| 32 B       | in 0.024 ms ± 0.011 ms | null                          | in 0.631 ms ± 0.047 ms       | in 0.809 ms ± 0.169 ms             | in 0.718 ms ± 0.103 ms             |
| 64 B       | in 0.024 ms ± 0.011 ms | null                          | in 0.701 ms ± 0.032 ms       | in 0.88 ms ± 0.159 ms              | in 0.807 ms ± 0.134 ms             |
| 128 B      | in 0.026 ms ± 0.013 ms | null                          | in 0.825 ms ± 0.046 ms       | in 1.101 ms ± 0.238 ms             | in 0.974 ms ± 0.231 ms             |
| 256 B      | in 0.028 ms ± 0.016 ms | null                          | in 1.125 ms ± 0.19 ms        | in 1.386 ms ± 0.096 ms             | in 1.294 ms ± 0.307 ms             |
| 512 B      | in 0.033 ms ± 0.021 ms | null                          | in 1.582 ms ± 0.078 ms       | in 2.121 ms ± 0.096 ms             | in 1.999 ms ± 0.456 ms             |
| 1.024 kB   | in 0.055 ms ± 0.061 ms | null                          | in 2.657 ms ± 0.056 ms       | in 3.915 ms ± 0.752 ms             | in 2.987 ms ± 0.108 ms             |
| 2.048 kB   | in 0.059 ms ± 0.052 ms | null                          | in 4.757 ms ± 0.091 ms       | in 7.468 ms ± 0.346 ms             | in 5.396 ms ± 0.019 ms             |
| 4.096 kB   | in 0.081 ms ± 0.075 ms | null                          | in 9.022 ms ± 0.027 ms       | in 12.889 ms ± 0.437 ms            | in 12.598 ms ± 0.474 ms            |
| 8.192 kB   | in 0.15 ms ± 0.156 ms  | null                          | in 17.686 ms ± 0.344 ms      | in 25.094 ms ± 0.119 ms            | in 20.066 ms ± 0.268 ms            |
| 16.384 kB  | in 0.134 ms ± 0.017 ms | null                          | in 35.124 ms ± 0.644 ms      | in 50.72 ms ± 0.239 ms             | in 39.614 ms ± 0.55 ms             |
| 32.768 kB  | in 0.288 ms ± now      | null                          | in 71.895 ms ± 1.136 ms      | in 101.765 ms ± 1.682 ms           | in 80.824 ms ± 0.512 ms            |
| 65.536 kB  | in 0.736 ms ± 0.009 ms | null                          | in 143.698 ms ± 1.291 ms     | in 205.495 ms ± 1.629 ms           | in 169.667 ms ± 18.02 ms           |
| 131.072 kB | in 1.714 ms ± 0.021 ms | null                          | in 319.283 ms ± 28.246 ms    | in 411.714 ms ± 2.24 ms            | in 321.654 ms ± 2.636 ms           |
| 262.144 kB | in 3.812 ms ± 0.063 ms | null                          | in 665.99 ms ± 63.493 ms     | in 906.212 ms ± 71.915 ms          | in 731.844 ms ± 69.006 ms          |
| 524.288 kB | in 6.118 ms ± 0.047 ms | null                          | in 1,340.098 ms ± 125.208 ms | in 1,832.854 ms ± 119.934 ms       | in 1,488.655 ms ± 114.856 ms       |
| 1.049 MB   | in 14.712 ms ± 1.57 ms | null                          | in 2,770.163 ms ± 220.387 ms | in 3,785.486 ms ± 243.419 ms       | in 3,053.258 ms ± 204.518 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 5.1 ms ± 2.987 ms        | null                       | in 1.718 ms ± 0.024 ms       | in 1.932 ms ± 0.215 ms         | in 1.821 ms ± 0.123 ms         |
| 2 B        | in 0.908 ms ± 0.074 ms      | null                       | in 1.89 ms ± 0.615 ms        | in 1.724 ms ± 0.047 ms         | in 1.634 ms ± 0.08 ms          |
| 4 B        | in 0.873 ms ± 0.069 ms      | null                       | in 1.702 ms ± 0.124 ms       | in 1.685 ms ± 0.07 ms          | in 1.599 ms ± 0.04 ms          |
| 8 B        | in 0.902 ms ± 0.111 ms      | null                       | in 1.762 ms ± 0.156 ms       | in 1.711 ms ± 0.082 ms         | in 1.617 ms ± 0.028 ms         |
| 16 B       | in 0.943 ms ± 0.163 ms      | null                       | in 1.84 ms ± 0.209 ms        | in 1.753 ms ± 0.106 ms         | in 1.756 ms ± 0.207 ms         |
| 32 B       | in 1.008 ms ± 0.196 ms      | null                       | in 1.857 ms ± 0.179 ms       | in 1.871 ms ± 0.206 ms         | in 1.86 ms ± 0.135 ms          |
| 64 B       | in 1.049 ms ± 0.11 ms       | null                       | in 2.27 ms ± 0.8 ms          | in 2.081 ms ± 0.285 ms         | in 1.982 ms ± 0.133 ms         |
| 128 B      | in 1.139 ms ± 0.056 ms      | null                       | in 2.089 ms ± 0.062 ms       | in 2.511 ms ± 0.466 ms         | in 2.287 ms ± 0.232 ms         |
| 256 B      | in 1.396 ms ± 0.061 ms      | null                       | in 2.701 ms ± 0.123 ms       | in 3.439 ms ± 0.873 ms         | in 2.905 ms ± 0.285 ms         |
| 512 B      | in 1.967 ms ± 0.137 ms      | null                       | in 3.695 ms ± 0.025 ms       | in 4.387 ms ± 0.22 ms          | in 4.118 ms ± 0.266 ms         |
| 1.024 kB   | in 3.09 ms ± 0.138 ms       | null                       | in 5.859 ms ± 0.026 ms       | in 7.068 ms ± 0.306 ms         | in 6.26 ms ± 0.145 ms          |
| 2.048 kB   | in 5.217 ms ± 0.2 ms        | null                       | in 10.158 ms ± 0.053 ms      | in 12.155 ms ± 0.183 ms        | in 10.748 ms ± 0.1 ms          |
| 4.096 kB   | in 9.591 ms ± 0.326 ms      | null                       | in 18.806 ms ± 0.097 ms      | in 22.407 ms ± 0.145 ms        | in 19.815 ms ± 0.145 ms        |
| 8.192 kB   | in 18.24 ms ± 0.588 ms      | null                       | in 37.828 ms ± 0.123 ms      | in 45.061 ms ± 0.959 ms        | in 39.787 ms ± 0.1 ms          |
| 16.384 kB  | in 35.971 ms ± 0.868 ms     | null                       | in 73.607 ms ± 0.701 ms      | in 85.711 ms ± 0.201 ms        | in 77 ms ± 0.18 ms             |
| 32.768 kB  | in 72.626 ms ± 1.063 ms     | null                       | in 145.755 ms ± 1.492 ms     | in 173.057 ms ± 0.606 ms       | in 151.68 ms ± 0.515 ms        |
| 65.536 kB  | in 144.578 ms ± 1.69 ms     | null                       | in 292.163 ms ± 8.802 ms     | in 351.822 ms ± 6.771 ms       | in 325.332 ms ± 7.75 ms        |
| 131.072 kB | in 291.905 ms ± 2.758 ms    | null                       | in 597.818 ms ± 27.593 ms    | in 726.265 ms ± 49.363 ms      | in 619.684 ms ± 4.148 ms       |
| 262.144 kB | in 619.725 ms ± 3.409 ms    | null                       | in 1,232.669 ms ± 44.49 ms   | in 1,488.242 ms ± 60.892 ms    | in 1,292.191 ms ± 34.448 ms    |
| 524.288 kB | in 1,222.31 ms ± 53.45 ms   | null                       | in 2,446.921 ms ± 133.902 ms | in 2,890.784 ms ± 67.994 ms    | in 2,495.085 ms ± 19.757 ms    |
| 1.049 MB   | in 2,387.716 ms ± 16.038 ms | null                       | in 4,697.841 ms ± 70.226 ms  | in 5,880.758 ms ± 168.471 ms   | in 5,006.705 ms ± 29.18 ms     |

## Worker

|            | hasTransferables             | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 6.363 ms ± 6.586 ms       | in 3.108 ms ± 0.073 ms      | in 2.211 ms ± 0.055 ms       | in 2.724 ms ± 0.129 ms         | in 10.892 ms ± 17.311 ms       |
| 2 B        | in 1.16 ms ± 0.082 ms        | in 2.925 ms ± 2.07 ms       | in 2.024 ms ± 0.213 ms       | in 2 ms ± 0.039 ms             | in 1.97 ms ± 0.084 ms          |
| 4 B        | in 1.167 ms ± 0.033 ms       | in 1.343 ms ± 0.16 ms       | in 1.898 ms ± 0.159 ms       | in 2.085 ms ± 0.072 ms         | in 1.815 ms ± 0.025 ms         |
| 8 B        | in 1.115 ms ± 0.088 ms       | in 1.847 ms ± 0.384 ms      | in 1.982 ms ± 0.271 ms       | in 2.314 ms ± 0.289 ms         | in 1.84 ms ± 0.046 ms          |
| 16 B       | in 1.207 ms ± 0.02 ms        | in 1.315 ms ± 0.169 ms      | in 2.233 ms ± 0.689 ms       | in 2.22 ms ± 0.187 ms          | in 1.885 ms ± 0.066 ms         |
| 32 B       | in 1.077 ms ± 0.025 ms       | in 1.409 ms ± 0.164 ms      | in 1.967 ms ± 0.097 ms       | in 2.239 ms ± 0.053 ms         | in 1.945 ms ± 0.081 ms         |
| 64 B       | in 1.111 ms ± 0.041 ms       | in 1.325 ms ± 0.126 ms      | in 2.855 ms ± 1.634 ms       | in 2.543 ms ± 0.072 ms         | in 3.958 ms ± 3.557 ms         |
| 128 B      | in 1.239 ms ± 0.032 ms       | in 1.889 ms ± 0.949 ms      | in 2.513 ms ± 0.196 ms       | in 3.162 ms ± 0.081 ms         | in 2.478 ms ± 0.032 ms         |
| 256 B      | in 1.683 ms ± 0.084 ms       | in 2.035 ms ± 0.666 ms      | in 3.093 ms ± 0.139 ms       | in 4.494 ms ± 0.128 ms         | in 3.271 ms ± 0.116 ms         |
| 512 B      | in 2.265 ms ± 0.201 ms       | in 2.523 ms ± 0.251 ms      | in 4.177 ms ± 0.318 ms       | in 4.687 ms ± 0.125 ms         | in 4.52 ms ± 0.195 ms          |
| 1.024 kB   | in 3.433 ms ± 0.124 ms       | in 3.546 ms ± 0.121 ms      | in 6.536 ms ± 0.36 ms        | in 7.13 ms ± 0.162 ms          | in 6.441 ms ± 0.098 ms         |
| 2.048 kB   | in 5.657 ms ± 0.148 ms       | in 5.908 ms ± 0.139 ms      | in 11.005 ms ± 0.798 ms      | in 12.472 ms ± 0.25 ms         | in 11.006 ms ± 0.198 ms        |
| 4.096 kB   | in 10.874 ms ± 0.701 ms      | in 10.505 ms ± 0.22 ms      | in 19.649 ms ± 0.515 ms      | in 23.879 ms ± 0.576 ms        | in 20.501 ms ± 0.679 ms        |
| 8.192 kB   | in 20.666 ms ± 1.524 ms      | in 20.027 ms ± 0.699 ms     | in 41.53 ms ± 2.637 ms       | in 48.568 ms ± 1.596 ms        | in 40.408 ms ± 1.771 ms        |
| 16.384 kB  | in 38.009 ms ± 0.768 ms      | in 38.385 ms ± 0.337 ms     | in 74.701 ms ± 2.546 ms      | in 97.568 ms ± 11.489 ms       | in 87.36 ms ± 12.76 ms         |
| 32.768 kB  | in 77.066 ms ± 1.9 ms        | in 81.497 ms ± 1.242 ms     | in 149.627 ms ± 2.211 ms     | in 192.891 ms ± 7.385 ms       | in 160.347 ms ± 8.147 ms       |
| 65.536 kB  | in 148.443 ms ± 4.664 ms     | in 174.728 ms ± 20.729 ms   | in 292.809 ms ± 4.723 ms     | in 352.751 ms ± 1.477 ms       | in 310.771 ms ± 7.228 ms       |
| 131.072 kB | in 316.344 ms ± 15.116 ms    | in 331.806 ms ± 18.528 ms   | in 611.043 ms ± 17.654 ms    | in 727.599 ms ± 2.763 ms       | in 653.976 ms ± 31.707 ms      |
| 262.144 kB | in 648.372 ms ± 28.572 ms    | in 617.401 ms ± 8.389 ms    | in 1,332.718 ms ± 78.647 ms  | in 1,599.215 ms ± 63.859 ms    | in 1,361.441 ms ± 40.133 ms    |
| 524.288 kB | in 1,347.912 ms ± 53.846 ms  | in 1,503.561 ms ± 65.119 ms | in 2,623.765 ms ± 93.107 ms  | in 3,185.092 ms ± 45.175 ms    | in 2,648.295 ms ± 142.351 ms   |
| 1.049 MB   | in 2,592.253 ms ± 140.548 ms | in 2,635.636 ms ± 42.744 ms | in 5,080.019 ms ± 132.386 ms | in 6,039.501 ms ± 29.759 ms    | in 5,165.989 ms ± 291.041 ms   |