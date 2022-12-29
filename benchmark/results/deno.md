# Deno

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.077 ms ± 0.079 ms | null                          | in 0.621 ms ± 0.196 ms       | in 0.66 ms ± 0.206 ms              | in 0.664 ms ± 0.223 ms             |
| 2 B        | in 0.028 ms ± 0.009 ms | null                          | in 0.491 ms ± 0.038 ms       | in 0.562 ms ± 0.089 ms             | in 0.582 ms ± 0.087 ms             |
| 4 B        | in 0.027 ms ± 0.006 ms | null                          | in 0.519 ms ± 0.041 ms       | in 0.612 ms ± 0.13 ms              | in 0.653 ms ± 0.131 ms             |
| 8 B        | in 0.023 ms ± now      | null                          | in 0.565 ms ± 0.07 ms        | in 0.616 ms ± 0.09 ms              | in 0.649 ms ± 0.1 ms               |
| 16 B       | in 0.024 ms ± now      | null                          | in 0.582 ms ± 0.055 ms       | in 0.667 ms ± 0.125 ms             | in 0.672 ms ± 0.114 ms             |
| 32 B       | in 0.023 ms ± now      | null                          | in 0.604 ms ± 0.057 ms       | in 0.722 ms ± 0.17 ms              | in 0.728 ms ± 0.116 ms             |
| 64 B       | in 0.021 ms ± now      | null                          | in 0.65 ms ± 0.07 ms         | in 0.761 ms ± 0.168 ms             | in 0.771 ms ± 0.152 ms             |
| 128 B      | in 0.023 ms ± now      | null                          | in 0.762 ms ± 0.068 ms       | in 0.905 ms ± 0.19 ms              | in 0.995 ms ± 0.295 ms             |
| 256 B      | in 0.022 ms ± now      | null                          | in 1.03 ms ± 0.095 ms        | in 1.148 ms ± 0.08 ms              | in 1.379 ms ± 0.341 ms             |
| 512 B      | in 0.023 ms ± now      | null                          | in 1.518 ms ± 0.076 ms       | in 1.68 ms ± 0.036 ms              | in 2.02 ms ± 0.431 ms              |
| 1.024 kB   | in 0.04 ms ± 0.036 ms  | null                          | in 2.499 ms ± 0.06 ms        | in 3.017 ms ± 0.586 ms             | in 3.102 ms ± 0.084 ms             |
| 2.048 kB   | in 0.024 ms ± now      | null                          | in 4.446 ms ± 0.121 ms       | in 4.899 ms ± 0.091 ms             | in 6.233 ms ± 0.221 ms             |
| 4.096 kB   | in 0.026 ms ± now      | null                          | in 8.431 ms ± 0.121 ms       | in 9.304 ms ± 0.106 ms             | in 10.852 ms ± 0.098 ms            |
| 8.192 kB   | in 0.028 ms ± now      | null                          | in 16.24 ms ± 0.091 ms       | in 18.672 ms ± 0.268 ms            | in 21.063 ms ± 0.131 ms            |
| 16.384 kB  | in 0.031 ms ± now      | null                          | in 32.443 ms ± 0.814 ms      | in 35.716 ms ± 0.248 ms            | in 41.653 ms ± 0.153 ms            |
| 32.768 kB  | in 0.033 ms ± 0.006 ms | null                          | in 71.683 ms ± 12.78 ms      | in 76.048 ms ± 0.51 ms             | in 84.231 ms ± 0.201 ms            |
| 65.536 kB  | in 0.032 ms ± now      | null                          | in 141.431 ms ± 20.163 ms    | in 144.264 ms ± 0.263 ms           | in 168.318 ms ± 0.42 ms            |
| 131.072 kB | in 0.034 ms ± now      | null                          | in 328.165 ms ± 20.214 ms    | in 290.463 ms ± 1.142 ms           | in 339.136 ms ± 0.415 ms           |
| 262.144 kB | in 0.035 ms ± now      | null                          | in 613.268 ms ± 70.85 ms     | in 673.56 ms ± 75.074 ms           | in 803.718 ms ± 115.082 ms         |
| 524.288 kB | in 0.035 ms ± now      | null                          | in 1,239.811 ms ± 115.433 ms | in 1,353.214 ms ± 120.938 ms       | in 1,620.581 ms ± 181.392 ms       |
| 1.049 MB   | in 0.042 ms ± now      | null                          | in 2,669.553 ms ± 16.977 ms  | in 2,760.476 ms ± 184.769 ms       | in 3,391.519 ms ± 257.307 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 2.464 ms ± 3.321 ms      | null                       | in 1.398 ms ± 0.052 ms      | in 1.475 ms ± 0.138 ms         | in 1.537 ms ± 0.176 ms         |
| 2 B        | in 0.582 ms ± 0.068 ms      | null                       | in 1.602 ms ± 0.628 ms      | in 1.358 ms ± 0.115 ms         | in 1.311 ms ± 0.036 ms         |
| 4 B        | in 0.564 ms ± 0.046 ms      | null                       | in 1.382 ms ± 0.145 ms      | in 1.313 ms ± 0.061 ms         | in 1.33 ms ± 0.037 ms          |
| 8 B        | in 0.588 ms ± 0.084 ms      | null                       | in 1.419 ms ± 0.161 ms      | in 1.348 ms ± 0.079 ms         | in 1.322 ms ± 0.037 ms         |
| 16 B       | in 0.617 ms ± 0.129 ms      | null                       | in 1.396 ms ± 0.147 ms      | in 1.376 ms ± 0.088 ms         | in 1.496 ms ± 0.264 ms         |
| 32 B       | in 0.657 ms ± 0.153 ms      | null                       | in 1.368 ms ± 0.059 ms      | in 1.488 ms ± 0.191 ms         | in 1.412 ms ± 0.055 ms         |
| 64 B       | in 0.647 ms ± 0.091 ms      | null                       | in 1.5 ms ± 0.114 ms        | in 1.61 ms ± 0.238 ms          | in 1.561 ms ± 0.088 ms         |
| 128 B      | in 0.706 ms ± 0.052 ms      | null                       | in 1.723 ms ± 0.143 ms      | in 1.764 ms ± 0.105 ms         | in 1.795 ms ± 0.13 ms          |
| 256 B      | in 0.867 ms ± 0.058 ms      | null                       | in 2.129 ms ± 0.251 ms      | in 2.265 ms ± 0.244 ms         | in 2.349 ms ± 0.29 ms          |
| 512 B      | in 1.153 ms ± 0.075 ms      | null                       | in 2.838 ms ± 0.086 ms      | in 3.068 ms ± 0.129 ms         | in 3.461 ms ± 0.377 ms         |
| 1.024 kB   | in 1.744 ms ± 0.129 ms      | null                       | in 4.45 ms ± 0.162 ms       | in 4.925 ms ± 0.429 ms         | in 5.126 ms ± 0.172 ms         |
| 2.048 kB   | in 2.871 ms ± 0.056 ms      | null                       | in 7.538 ms ± 0.043 ms      | in 8.103 ms ± 0.142 ms         | in 8.995 ms ± 0.113 ms         |
| 4.096 kB   | in 5.196 ms ± 0.125 ms      | null                       | in 13.793 ms ± 0.06 ms      | in 14.888 ms ± 0.055 ms        | in 16.444 ms ± 0.182 ms        |
| 8.192 kB   | in 9.768 ms ± 0.118 ms      | null                       | in 28.15 ms ± 0.131 ms      | in 31.637 ms ± 0.243 ms        | in 34.461 ms ± 0.196 ms        |
| 16.384 kB  | in 19.322 ms ± 0.213 ms     | null                       | in 53.885 ms ± 0.151 ms     | in 57.695 ms ± 0.305 ms        | in 63.769 ms ± 0.5 ms          |
| 32.768 kB  | in 41.077 ms ± 4.962 ms     | null                       | in 104.942 ms ± 0.26 ms     | in 112.462 ms ± 0.537 ms       | in 124.081 ms ± 0.571 ms       |
| 65.536 kB  | in 76.485 ms ± 0.428 ms     | null                       | in 209.349 ms ± 0.48 ms     | in 224.336 ms ± 0.904 ms       | in 248.602 ms ± 1.431 ms       |
| 131.072 kB | in 155.119 ms ± 1.654 ms    | null                       | in 433.075 ms ± 16.503 ms   | in 479.347 ms ± 33.048 ms      | in 498.372 ms ± 5.343 ms       |
| 262.144 kB | in 339.816 ms ± 25.24 ms    | null                       | in 950.741 ms ± 48.627 ms   | in 949.361 ms ± 65.265 ms      | in 1,095.888 ms ± 75.722 ms    |
| 524.288 kB | in 814.486 ms ± 39.568 ms   | null                       | in 2,011.343 ms ± 25.19 ms  | in 2,075.56 ms ± 11.958 ms     | in 2,266.486 ms ± 28.146 ms    |
| 1.049 MB   | in 1,302.935 ms ± 19.268 ms | null                       | in 3,533.856 ms ± 28.458 ms | in 3,783.199 ms ± 33.638 ms    | in 4,357.716 ms ± 180.951 ms   |

## Worker

|            | hasTransferables           | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | -------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.676 ms ± 0.88 ms      | in 2.79 ms ± 0.078 ms       | in 1.748 ms ± 0.016 ms       | in 1.7 ms ± 0.558 ms           | in 0.902 ms ± 0.589 ms         |
| 2 B        | in 1.057 ms ± 0.224 ms     | in 0.92 ms ± 0.021 ms       | in 1.491 ms ± 0.033 ms       | in 1.54 ms ± 0.423 ms          | in 1.158 ms ± 0.517 ms         |
| 4 B        | in 0.744 ms ± 0.034 ms     | in 0.872 ms ± 0.07 ms       | in 1.485 ms ± 0.102 ms       | in 1.876 ms ± 0.415 ms         | in 0.748 ms ± 0.414 ms         |
| 8 B        | in 0.792 ms ± 0.113 ms     | in 1.129 ms ± 0.085 ms      | in 1.447 ms ± 0.056 ms       | in 1.398 ms ± 0.701 ms         | in 0.933 ms ± 0.453 ms         |
| 16 B       | in 0.992 ms ± 0.261 ms     | in 0.944 ms ± 0.065 ms      | in 1.45 ms ± 0.046 ms        | in 1.199 ms ± 0.515 ms         | in 1.192 ms ± 0.469 ms         |
| 32 B       | in 0.734 ms ± 0.009 ms     | in 0.931 ms ± 0.024 ms      | in 1.516 ms ± 0.055 ms       | in 1.303 ms ± 0.622 ms         | in 1.466 ms ± 0.464 ms         |
| 64 B       | in 0.717 ms ± 0.017 ms     | in 0.891 ms ± 0.042 ms      | in 1.677 ms ± 0.073 ms       | in 1.404 ms ± 1.053 ms         | in 5.104 ms ± 4.528 ms         |
| 128 B      | in 0.798 ms ± 0.021 ms     | in 0.955 ms ± 0.01 ms       | in 1.869 ms ± 0.1 ms         | in 1.29 ms ± 0.759 ms          | in 1.263 ms ± 0.735 ms         |
| 256 B      | in 1.107 ms ± 0.05 ms      | in 1.134 ms ± 0.05 ms       | in 2.214 ms ± 0.042 ms       | in 1.645 ms ± 0.99 ms          | in 1.873 ms ± 0.881 ms         |
| 512 B      | in 1.255 ms ± 0.055 ms     | in 1.428 ms ± 0.045 ms      | in 2.977 ms ± 0.034 ms       | in 1.521 ms ± 0.797 ms         | in 2.763 ms ± 0.897 ms         |
| 1.024 kB   | in 1.982 ms ± 0.051 ms     | in 2.063 ms ± 0.055 ms      | in 4.501 ms ± 0.035 ms       | in 3.605 ms ± 1.553 ms         | in 5.159 ms ± 0.081 ms         |
| 2.048 kB   | in 3.205 ms ± 0.126 ms     | in 3.393 ms ± 0.117 ms      | in 7.764 ms ± 0.088 ms       | in 7.166 ms ± 1.209 ms         | in 8.981 ms ± 0.119 ms         |
| 4.096 kB   | in 4.626 ms ± 2.281 ms     | in 6.016 ms ± 0.121 ms      | in 14.057 ms ± 0.147 ms      | in 14.777 ms ± 0.094 ms        | in 16.393 ms ± 0.143 ms        |
| 8.192 kB   | in 9.57 ms ± 2.613 ms      | in 11.068 ms ± 0.049 ms     | in 26.519 ms ± 0.117 ms      | in 28.09 ms ± 0.104 ms         | in 31.299 ms ± 0.33 ms         |
| 16.384 kB  | in 18.818 ms ± 3.46 ms     | in 21.441 ms ± 0.191 ms     | in 52.334 ms ± 0.262 ms      | in 58.27 ms ± 7.045 ms         | in 61.785 ms ± 0.687 ms        |
| 32.768 kB  | in 39.232 ms ± 0.109 ms    | in 47.775 ms ± 7.745 ms     | in 104.705 ms ± 0.796 ms     | in 125.822 ms ± 14.369 ms      | in 133.43 ms ± 7.984 ms        |
| 65.536 kB  | in 78.545 ms ± 0.613 ms    | in 101.691 ms ± 10.577 ms   | in 206.434 ms ± 0.296 ms     | in 222.154 ms ± 1.854 ms       | in 248.847 ms ± 3.484 ms       |
| 131.072 kB | in 159.923 ms ± 0.829 ms   | in 167.478 ms ± 5.47 ms     | in 448.232 ms ± 16.339 ms    | in 446.207 ms ± 4.333 ms       | in 507.823 ms ± 28.283 ms      |
| 262.144 kB | in 359.04 ms ± 22.142 ms   | in 381.069 ms ± 57.174 ms   | in 934.313 ms ± 101.783 ms   | in 994.101 ms ± 62.919 ms      | in 1,070.688 ms ± 61.299 ms    |
| 524.288 kB | in 773.691 ms ± 47.322 ms  | in 876.458 ms ± 56.708 ms   | in 1,900.827 ms ± 41.73 ms   | in 2,010.187 ms ± 67.35 ms     | in 2,194.671 ms ± 54.909 ms    |
| 1.049 MB   | in 1,477.953 ms ± 87.49 ms | in 1,491.094 ms ± 83.721 ms | in 3,618.401 ms ± 166.721 ms | in 3,775.213 ms ± 48.381 ms    | in 4,270.976 ms ± 113.91 ms    |