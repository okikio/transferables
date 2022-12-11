# Deno

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.11 ms ± 0.158 ms   | null                          | in 0.618 ms ± 0.21 ms        | in 0.738 ms ± 0.243 ms             | in 0.682 ms ± 0.217 ms             |
| 2 B        | in 0.031 ms ± 0.018 ms  | null                          | in 0.499 ms ± 0.035 ms       | in 0.647 ms ± 0.11 ms              | in 0.639 ms ± 0.136 ms             |
| 4 B        | in 0.029 ms ± 0.015 ms  | null                          | in 0.494 ms ± 0.029 ms       | in 0.644 ms ± 0.103 ms             | in 0.64 ms ± 0.096 ms              |
| 8 B        | in 0.027 ms ± 0.011 ms  | null                          | in 0.529 ms ± 0.069 ms       | in 0.728 ms ± 0.127 ms             | in 0.697 ms ± 0.13 ms              |
| 16 B       | in 0.028 ms ± 0.014 ms  | null                          | in 0.585 ms ± 0.058 ms       | in 0.788 ms ± 0.156 ms             | in 0.728 ms ± 0.121 ms             |
| 32 B       | in 0.026 ms ± 0.011 ms  | null                          | in 0.611 ms ± 0.053 ms       | in 0.865 ms ± 0.162 ms             | in 0.792 ms ± 0.128 ms             |
| 64 B       | in 0.027 ms ± 0.012 ms  | null                          | in 0.696 ms ± 0.037 ms       | in 0.954 ms ± 0.174 ms             | in 0.903 ms ± 0.155 ms             |
| 128 B      | in 0.028 ms ± 0.013 ms  | null                          | in 0.83 ms ± 0.053 ms        | in 1.938 ms ± 1.369 ms             | in 1.151 ms ± 0.253 ms             |
| 256 B      | in 0.031 ms ± 0.016 ms  | null                          | in 1.091 ms ± 0.073 ms       | in 1.636 ms ± 0.097 ms             | in 1.561 ms ± 0.309 ms             |
| 512 B      | in 0.034 ms ± 0.019 ms  | null                          | in 1.605 ms ± 0.074 ms       | in 2.573 ms ± 0.089 ms             | in 2.472 ms ± 0.469 ms             |
| 1.024 kB   | in 0.059 ms ± 0.061 ms  | null                          | in 2.734 ms ± 0.12 ms        | in 4.583 ms ± 0.274 ms             | in 3.939 ms ± 0.134 ms             |
| 2.048 kB   | in 0.062 ms ± 0.05 ms   | null                          | in 4.994 ms ± 0.469 ms       | in 8.608 ms ± 0.174 ms             | in 7.371 ms ± 0.093 ms             |
| 4.096 kB   | in 0.094 ms ± 0.089 ms  | null                          | in 9.112 ms ± 0.106 ms       | in 16.415 ms ± 0.597 ms            | in 14.061 ms ± 0.058 ms            |
| 8.192 kB   | in 0.161 ms ± 0.161 ms  | null                          | in 17.83 ms ± 0.397 ms       | in 31.859 ms ± 0.088 ms            | in 27.822 ms ± 0.189 ms            |
| 16.384 kB  | in 0.142 ms ± now       | null                          | in 36.189 ms ± 0.194 ms      | in 64.729 ms ± 0.153 ms            | in 55.542 ms ± 0.494 ms            |
| 32.768 kB  | in 0.325 ms ± 0.005 ms  | null                          | in 72.967 ms ± 2.508 ms      | in 128.729 ms ± 1.771 ms           | in 112.303 ms ± 1.663 ms           |
| 65.536 kB  | in 0.813 ms ± 0.029 ms  | null                          | in 143.975 ms ± 0.983 ms     | in 258.346 ms ± 0.695 ms           | in 224.405 ms ± 1.018 ms           |
| 131.072 kB | in 1.829 ms ± 0.007 ms  | null                          | in 339.751 ms ± 33.42 ms     | in 517.878 ms ± 2.588 ms           | in 458.896 ms ± 20.827 ms          |
| 262.144 kB | in 4.088 ms ± 0.138 ms  | null                          | in 668.019 ms ± 74.818 ms    | in 1,121.713 ms ± 70.801 ms        | in 981.537 ms ± 68.577 ms          |
| 524.288 kB | in 6.613 ms ± 0.028 ms  | null                          | in 1,345.653 ms ± 128.639 ms | in 2,267.891 ms ± 125.149 ms       | in 2,003.464 ms ± 124.302 ms       |
| 1.049 MB   | in 15.072 ms ± 1.302 ms | null                          | in 2,802.411 ms ± 231.766 ms | in 4,655.312 ms ± 240.204 ms       | in 4,084.228 ms ± 204.637 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.63 ms ± 0.937 ms       | null                       | in 1.771 ms ± 0.086 ms       | in 1.954 ms ± 0.204 ms         | in 1.861 ms ± 0.169 ms         |
| 2 B        | in 0.908 ms ± 0.071 ms      | null                       | in 2.133 ms ± 0.969 ms       | in 1.75 ms ± 0.091 ms          | in 1.673 ms ± 0.055 ms         |
| 4 B        | in 0.887 ms ± 0.08 ms       | null                       | in 1.694 ms ± 0.138 ms       | in 1.731 ms ± 0.051 ms         | in 1.705 ms ± 0.063 ms         |
| 8 B        | in 0.918 ms ± 0.11 ms       | null                       | in 1.86 ms ± 0.272 ms        | in 1.747 ms ± 0.049 ms         | in 1.699 ms ± 0.066 ms         |
| 16 B       | in 0.954 ms ± 0.154 ms      | null                       | in 1.838 ms ± 0.209 ms       | in 1.796 ms ± 0.067 ms         | in 1.784 ms ± 0.187 ms         |
| 32 B       | in 0.998 ms ± 0.202 ms      | null                       | in 1.878 ms ± 0.295 ms       | in 1.909 ms ± 0.135 ms         | in 1.838 ms ± 0.081 ms         |
| 64 B       | in 1.042 ms ± 0.132 ms      | null                       | in 1.842 ms ± 0.041 ms       | in 2.112 ms ± 0.209 ms         | in 1.997 ms ± 0.102 ms         |
| 128 B      | in 1.182 ms ± 0.093 ms      | null                       | in 2.127 ms ± 0.104 ms       | in 2.567 ms ± 0.341 ms         | in 2.349 ms ± 0.115 ms         |
| 256 B      | in 1.453 ms ± 0.078 ms      | null                       | in 2.779 ms ± 0.243 ms       | in 3.482 ms ± 0.64 ms          | in 3.126 ms ± 0.335 ms         |
| 512 B      | in 2.008 ms ± 0.169 ms      | null                       | in 3.725 ms ± 0.033 ms       | in 4.865 ms ± 0.345 ms         | in 4.431 ms ± 0.15 ms          |
| 1.024 kB   | in 3.102 ms ± 0.184 ms      | null                       | in 5.883 ms ± 0.038 ms       | in 7.87 ms ± 0.281 ms          | in 7.175 ms ± 0.132 ms         |
| 2.048 kB   | in 5.27 ms ± 0.192 ms       | null                       | in 10.139 ms ± 0.038 ms      | in 13.8 ms ± 0.082 ms          | in 12.734 ms ± 0.188 ms        |
| 4.096 kB   | in 9.62 ms ± 0.382 ms       | null                       | in 18.772 ms ± 0.098 ms      | in 25.957 ms ± 0.172 ms        | in 23.657 ms ± 0.166 ms        |
| 8.192 kB   | in 18.279 ms ± 0.559 ms     | null                       | in 38.094 ms ± 0.415 ms      | in 51.104 ms ± 0.651 ms        | in 48.001 ms ± 0.432 ms        |
| 16.384 kB  | in 35.903 ms ± 0.874 ms     | null                       | in 73.567 ms ± 0.394 ms      | in 99.451 ms ± 0.293 ms        | in 93.11 ms ± 0.318 ms         |
| 32.768 kB  | in 72.573 ms ± 0.924 ms     | null                       | in 144.948 ms ± 0.922 ms     | in 200.533 ms ± 0.525 ms       | in 182.35 ms ± 0.356 ms        |
| 65.536 kB  | in 144.394 ms ± 1.957 ms    | null                       | in 289.302 ms ± 2.69 ms      | in 403.988 ms ± 5.814 ms       | in 390.494 ms ± 6.712 ms       |
| 131.072 kB | in 293.556 ms ± 7.697 ms    | null                       | in 592.292 ms ± 13.139 ms    | in 810.487 ms ± 10.113 ms      | in 746.611 ms ± 1.88 ms        |
| 262.144 kB | in 621.552 ms ± 44.28 ms    | null                       | in 1,267.164 ms ± 51.568 ms  | in 1,695.734 ms ± 49.098 ms    | in 1,539.279 ms ± 6.732 ms     |
| 524.288 kB | in 1,234.011 ms ± 47.426 ms | null                       | in 2,502.829 ms ± 128.175 ms | in 3,296.731 ms ± 34.128 ms    | in 3,165.434 ms ± 13.879 ms    |
| 1.049 MB   | in 2,384.997 ms ± 15.421 ms | null                       | in 4,768.582 ms ± 99.108 ms  | in 6,722.119 ms ± 93.994 ms    | in 6,198.227 ms ± 159.236 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)   | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | ---------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.822 ms ± 1.648 ms      | in 3.136 ms ± 0.049 ms       | in 7.12 ms ± 4.036 ms       | in 2.77 ms ± 0.119 ms          | in 24.493 ms ± 27.268 ms       |
| 2 B        | in 1.428 ms ± 0.268 ms      | in 1.318 ms ± 0.17 ms        | in 2.12 ms ± 0.2 ms         | in 2.628 ms ± 0.72 ms          | in 1.951 ms ± 0.086 ms         |
| 4 B        | in 1.174 ms ± 0.102 ms      | in 1.432 ms ± 0.166 ms       | in 2.036 ms ± 0.216 ms      | in 2.24 ms ± 0.274 ms          | in 1.891 ms ± 0.051 ms         |
| 8 B        | in 1.147 ms ± 0.087 ms      | in 1.729 ms ± 0.104 ms       | in 1.834 ms ± 0.153 ms      | in 2.008 ms ± 0.036 ms         | in 1.933 ms ± 0.073 ms         |
| 16 B       | in 1.297 ms ± 0.096 ms      | in 1.457 ms ± 0.122 ms       | in 1.971 ms ± 0.377 ms      | in 2.071 ms ± 0.038 ms         | in 1.99 ms ± 0.061 ms          |
| 32 B       | in 1.215 ms ± 0.119 ms      | in 1.502 ms ± 0.137 ms       | in 1.917 ms ± 0.126 ms      | in 4.275 ms ± 3.594 ms         | in 2.126 ms ± 0.104 ms         |
| 64 B       | in 1.253 ms ± 0.103 ms      | in 1.504 ms ± 0.18 ms        | in 2.067 ms ± 0.122 ms      | in 2.686 ms ± 0.048 ms         | in 2.344 ms ± 0.055 ms         |
| 128 B      | in 1.406 ms ± 0.128 ms      | in 1.634 ms ± 0.129 ms       | in 2.324 ms ± 0.099 ms      | in 3.414 ms ± now              | in 2.727 ms ± 0.04 ms          |
| 256 B      | in 1.829 ms ± 0.109 ms      | in 1.933 ms ± 0.151 ms       | in 3.023 ms ± 0.056 ms      | in 4.606 ms ± 0.493 ms         | in 3.63 ms ± 0.055 ms          |
| 512 B      | in 2.347 ms ± 0.08 ms       | in 2.529 ms ± 0.11 ms        | in 4.118 ms ± 0.109 ms      | in 5.291 ms ± 0.291 ms         | in 4.809 ms ± 0.123 ms         |
| 1.024 kB   | in 3.479 ms ± 0.116 ms      | in 3.644 ms ± 0.107 ms       | in 6.235 ms ± 0.056 ms      | in 8.09 ms ± 0.194 ms          | in 7.474 ms ± 0.122 ms         |
| 2.048 kB   | in 5.726 ms ± 0.09 ms       | in 5.924 ms ± 0.116 ms       | in 10.664 ms ± 0.242 ms     | in 14.343 ms ± 0.243 ms        | in 13.153 ms ± 0.305 ms        |
| 4.096 kB   | in 10.504 ms ± 0.244 ms     | in 10.496 ms ± 0.167 ms      | in 19.329 ms ± 0.208 ms     | in 27.215 ms ± 0.532 ms        | in 34.415 ms ± 20.508 ms       |
| 8.192 kB   | in 21.51 ms ± 1.616 ms      | in 20.36 ms ± 0.449 ms       | in 37.972 ms ± 1.19 ms      | in 53.793 ms ± 0.265 ms        | in 47.508 ms ± 0.462 ms        |
| 16.384 kB  | in 48.589 ms ± 5.434 ms     | in 38.505 ms ± 0.352 ms      | in 73.983 ms ± 0.317 ms     | in 115.965 ms ± 14.112 ms      | in 104.443 ms ± 13.286 ms      |
| 32.768 kB  | in 78.49 ms ± 1.042 ms      | in 80.754 ms ± 0.711 ms      | in 147.056 ms ± 0.996 ms    | in 217.201 ms ± 9.064 ms       | in 186.086 ms ± 0.592 ms       |
| 65.536 kB  | in 148.67 ms ± 0.849 ms     | in 182.742 ms ± 12.862 ms    | in 289.628 ms ± 1.007 ms    | in 405.834 ms ± 0.626 ms       | in 380.273 ms ± 10.265 ms      |
| 131.072 kB | in 299.404 ms ± 1.917 ms    | in 304.22 ms ± 4.272 ms      | in 596.927 ms ± 20.101 ms   | in 832.788 ms ± 7.937 ms       | in 781.728 ms ± 34.025 ms      |
| 262.144 kB | in 618.909 ms ± 32.868 ms   | in 640.74 ms ± 52.593 ms     | in 1,321.986 ms ± 63.845 ms | in 1,788.618 ms ± 80.749 ms    | in 1,688.3 ms ± 56.771 ms      |
| 524.288 kB | in 1,372.093 ms ± 62.663 ms | in 1,521.38 ms ± 24.462 ms   | in 2,632.339 ms ± 52.078 ms | in 3,599.463 ms ± 78.645 ms    | in 3,329.098 ms ± 151.985 ms   |
| 1.049 MB   | in 2,663.919 ms ± 90.602 ms | in 2,704.171 ms ± 118.414 ms | in 5,086.315 ms ± 140.86 ms | in 6,881.928 ms ± 11.822 ms    | in 6,669.185 ms ± 18.365 ms    |