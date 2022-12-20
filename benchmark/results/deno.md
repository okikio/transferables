# Deno

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.107 ms ± 0.15 ms   | null                          | in 0.622 ms ± 0.205 ms       | in 0.776 ms ± 0.238 ms             | in 0.684 ms ± 0.228 ms             |
| 2 B        | in 0.031 ms ± 0.018 ms  | null                          | in 0.52 ms ± 0.031 ms        | in 0.67 ms ± 0.117 ms              | in 0.666 ms ± 0.142 ms             |
| 4 B        | in 0.03 ms ± 0.015 ms   | null                          | in 0.535 ms ± 0.057 ms       | in 0.709 ms ± 0.11 ms              | in 0.668 ms ± 0.108 ms             |
| 8 B        | in 0.028 ms ± 0.013 ms  | null                          | in 0.574 ms ± 0.047 ms       | in 0.721 ms ± 0.108 ms             | in 0.684 ms ± 0.13 ms              |
| 16 B       | in 0.028 ms ± 0.013 ms  | null                          | in 0.586 ms ± 0.057 ms       | in 0.767 ms ± 0.165 ms             | in 0.704 ms ± 0.129 ms             |
| 32 B       | in 0.026 ms ± 0.012 ms  | null                          | in 0.636 ms ± 0.028 ms       | in 0.865 ms ± 0.169 ms             | in 0.779 ms ± 0.121 ms             |
| 64 B       | in 0.029 ms ± 0.012 ms  | null                          | in 0.687 ms ± 0.047 ms       | in 0.96 ms ± 0.175 ms              | in 0.895 ms ± 0.165 ms             |
| 128 B      | in 0.028 ms ± 0.013 ms  | null                          | in 0.803 ms ± 0.06 ms        | in 1.229 ms ± 0.249 ms             | in 1.148 ms ± 0.272 ms             |
| 256 B      | in 0.03 ms ± 0.016 ms   | null                          | in 1.071 ms ± 0.081 ms       | in 1.766 ms ± 0.396 ms             | in 1.545 ms ± 0.322 ms             |
| 512 B      | in 0.036 ms ± 0.02 ms   | null                          | in 1.594 ms ± 0.09 ms        | in 2.595 ms ± 0.099 ms             | in 2.459 ms ± 0.5 ms               |
| 1.024 kB   | in 0.06 ms ± 0.061 ms   | null                          | in 2.658 ms ± 0.053 ms       | in 4.843 ms ± 0.838 ms             | in 3.965 ms ± 0.19 ms              |
| 2.048 kB   | in 0.063 ms ± 0.049 ms  | null                          | in 4.794 ms ± 0.099 ms       | in 8.404 ms ± 0.028 ms             | in 7.288 ms ± 0.038 ms             |
| 4.096 kB   | in 0.087 ms ± 0.074 ms  | null                          | in 9.004 ms ± 0.074 ms       | in 16.349 ms ± 0.568 ms            | in 13.965 ms ± 0.033 ms            |
| 8.192 kB   | in 0.163 ms ± 0.153 ms  | null                          | in 17.621 ms ± 0.226 ms      | in 31.984 ms ± 0.372 ms            | in 27.678 ms ± 0.043 ms            |
| 16.384 kB  | in 0.148 ms ± now       | null                          | in 35.857 ms ± 0.742 ms      | in 64.534 ms ± 0.292 ms            | in 55.335 ms ± 0.568 ms            |
| 32.768 kB  | in 0.338 ms ± 0.009 ms  | null                          | in 71.844 ms ± 0.81 ms       | in 128.941 ms ± 1.883 ms           | in 111.79 ms ± 1.919 ms            |
| 65.536 kB  | in 0.819 ms ± 0.009 ms  | null                          | in 143.311 ms ± 1.526 ms     | in 260.172 ms ± 1.385 ms           | in 223.378 ms ± 1.384 ms           |
| 131.072 kB | in 1.838 ms ± 0.008 ms  | null                          | in 333.739 ms ± 26.924 ms    | in 520.604 ms ± 3.119 ms           | in 464.998 ms ± 36.654 ms          |
| 262.144 kB | in 4.03 ms ± 0.254 ms   | null                          | in 670.049 ms ± 70.799 ms    | in 1,124.826 ms ± 63.45 ms         | in 979.939 ms ± 69.402 ms          |
| 524.288 kB | in 6.673 ms ± 0.06 ms   | null                          | in 1,344.658 ms ± 126.388 ms | in 2,271.417 ms ± 122.616 ms       | in 1,997.891 ms ± 120.994 ms       |
| 1.049 MB   | in 15.244 ms ± 1.225 ms | null                          | in 2,914.093 ms ± 9.844 ms   | in 4,686.165 ms ± 250.471 ms       | in 4,082.133 ms ± 208.201 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 4.763 ms ± 7.227 ms      | null                       | in 1.797 ms ± 0.07 ms       | in 1.997 ms ± 0.232 ms         | in 1.967 ms ± 0.177 ms         |
| 2 B        | in 0.929 ms ± 0.084 ms      | null                       | in 2.104 ms ± 0.854 ms      | in 1.775 ms ± 0.082 ms         | in 1.657 ms ± 0.043 ms         |
| 4 B        | in 0.892 ms ± 0.067 ms      | null                       | in 1.69 ms ± 0.135 ms       | in 1.743 ms ± 0.085 ms         | in 1.661 ms ± 0.038 ms         |
| 8 B        | in 0.913 ms ± 0.124 ms      | null                       | in 2.282 ms ± 0.61 ms       | in 1.788 ms ± 0.052 ms         | in 1.664 ms ± 0.031 ms         |
| 16 B       | in 0.944 ms ± 0.161 ms      | null                       | in 1.78 ms ± 0.122 ms       | in 1.778 ms ± 0.085 ms         | in 1.798 ms ± 0.188 ms         |
| 32 B       | in 1.045 ms ± 0.187 ms      | null                       | in 1.767 ms ± 0.068 ms      | in 1.928 ms ± 0.17 ms          | in 1.911 ms ± 0.102 ms         |
| 64 B       | in 1.02 ms ± 0.109 ms       | null                       | in 1.851 ms ± 0.085 ms      | in 2.108 ms ± 0.196 ms         | in 2.278 ms ± 0.072 ms         |
| 128 B      | in 1.13 ms ± 0.054 ms       | null                       | in 2.107 ms ± 0.044 ms      | in 2.565 ms ± 0.323 ms         | in 2.605 ms ± 0.133 ms         |
| 256 B      | in 1.409 ms ± 0.054 ms      | null                       | in 2.678 ms ± 0.091 ms      | in 3.474 ms ± 0.629 ms         | in 3.236 ms ± 0.205 ms         |
| 512 B      | in 2.007 ms ± 0.136 ms      | null                       | in 3.745 ms ± 0.021 ms      | in 4.797 ms ± 0.267 ms         | in 4.498 ms ± 0.08 ms          |
| 1.024 kB   | in 3.051 ms ± 0.141 ms      | null                       | in 5.92 ms ± 0.06 ms        | in 7.822 ms ± 0.318 ms         | in 7.259 ms ± 0.116 ms         |
| 2.048 kB   | in 5.238 ms ± 0.194 ms      | null                       | in 10.181 ms ± 0.027 ms     | in 13.744 ms ± 0.054 ms        | in 12.759 ms ± 0.117 ms        |
| 4.096 kB   | in 9.546 ms ± 0.338 ms      | null                       | in 18.708 ms ± 0.056 ms     | in 25.782 ms ± 0.116 ms        | in 23.671 ms ± 0.098 ms        |
| 8.192 kB   | in 18.156 ms ± 0.658 ms     | null                       | in 38.164 ms ± 1.12 ms      | in 50.636 ms ± 0.635 ms        | in 47.716 ms ± 0.277 ms        |
| 16.384 kB  | in 35.719 ms ± 0.916 ms     | null                       | in 73.037 ms ± 0.368 ms     | in 99.054 ms ± 0.329 ms        | in 93.062 ms ± 0.299 ms        |
| 32.768 kB  | in 72.57 ms ± 1.006 ms      | null                       | in 144.634 ms ± 0.657 ms    | in 200.515 ms ± 0.764 ms       | in 182.761 ms ± 0.231 ms       |
| 65.536 kB  | in 144.311 ms ± 1.704 ms    | null                       | in 287.075 ms ± 0.99 ms     | in 400.81 ms ± 0.696 ms        | in 379.718 ms ± 15.55 ms       |
| 131.072 kB | in 290.244 ms ± 2.836 ms    | null                       | in 594.637 ms ± 9.588 ms    | in 816.992 ms ± 13.585 ms      | in 746.344 ms ± 11.608 ms      |
| 262.144 kB | in 603.235 ms ± 9.327 ms    | null                       | in 1,277.323 ms ± 37.188 ms | in 1,712.003 ms ± 66.553 ms    | in 1,540.838 ms ± 41.793 ms    |
| 524.288 kB | in 1,240.942 ms ± 36.358 ms | null                       | in 2,488.17 ms ± 175.298 ms | in 3,346.711 ms ± 120.261 ms   | in 3,197.463 ms ± 17.05 ms     |
| 1.049 MB   | in 2,416.675 ms ± 33.477 ms | null                       | in 4,719.283 ms ± 63.249 ms | in 6,650.742 ms ± 59.87 ms     | in 6,398.748 ms ± 199.546 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)   | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | ---------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.484 ms ± 1.178 ms      | in 3.174 ms ± 0.041 ms       | in 2.255 ms ± 0.11 ms        | in 2.816 ms ± 0.071 ms         | in 37.576 ms ± 29.142 ms       |
| 2 B        | in 1.374 ms ± 0.279 ms      | in 1.439 ms ± 0.208 ms       | in 1.987 ms ± 0.165 ms       | in 2.423 ms ± 0.398 ms         | in 2.027 ms ± 0.047 ms         |
| 4 B        | in 1.129 ms ± 0.113 ms      | in 2.025 ms ± 1.306 ms       | in 1.849 ms ± 0.12 ms        | in 2.172 ms ± 0.152 ms         | in 2.179 ms ± 0.353 ms         |
| 8 B        | in 1.137 ms ± 0.117 ms      | in 1.903 ms ± 0.145 ms       | in 1.839 ms ± 0.15 ms        | in 2.12 ms ± 0.101 ms          | in 2.021 ms ± 0.233 ms         |
| 16 B       | in 1.299 ms ± 0.142 ms      | in 1.453 ms ± 0.133 ms       | in 1.84 ms ± 0.073 ms        | in 2.206 ms ± 0.049 ms         | in 1.974 ms ± 0.054 ms         |
| 32 B       | in 1.18 ms ± 0.08 ms        | in 1.495 ms ± 0.126 ms       | in 1.936 ms ± 0.102 ms       | in 4.512 ms ± 3.003 ms         | in 2.128 ms ± 0.096 ms         |
| 64 B       | in 1.241 ms ± 0.112 ms      | in 1.476 ms ± 0.13 ms        | in 2.068 ms ± 0.118 ms       | in 2.715 ms ± 0.078 ms         | in 4.476 ms ± 3.219 ms         |
| 128 B      | in 1.33 ms ± 0.087 ms       | in 1.637 ms ± 0.143 ms       | in 2.358 ms ± 0.147 ms       | in 3.454 ms ± 0.07 ms          | in 2.787 ms ± 0.094 ms         |
| 256 B      | in 1.746 ms ± 0.085 ms      | in 1.914 ms ± 0.15 ms        | in 2.957 ms ± 0.088 ms       | in 4.599 ms ± 0.533 ms         | in 3.596 ms ± 0.128 ms         |
| 512 B      | in 2.218 ms ± 0.084 ms      | in 2.541 ms ± 0.163 ms       | in 3.998 ms ± 0.071 ms       | in 5.099 ms ± 0.304 ms         | in 4.782 ms ± 0.174 ms         |
| 1.024 kB   | in 3.513 ms ± 0.096 ms      | in 3.577 ms ± 0.127 ms       | in 6.143 ms ± 0.081 ms       | in 7.877 ms ± 0.126 ms         | in 7.322 ms ± 0.056 ms         |
| 2.048 kB   | in 5.688 ms ± 0.142 ms      | in 6.918 ms ± 2.102 ms       | in 10.467 ms ± 0.094 ms      | in 14.116 ms ± 0.054 ms        | in 13.039 ms ± 0.115 ms        |
| 4.096 kB   | in 10.51 ms ± 0.357 ms      | in 10.348 ms ± 0.175 ms      | in 19.088 ms ± 0.181 ms      | in 26.975 ms ± 0.792 ms        | in 23.949 ms ± 0.111 ms        |
| 8.192 kB   | in 20.528 ms ± 1.502 ms     | in 19.95 ms ± 0.74 ms        | in 37.368 ms ± 0.796 ms      | in 53.736 ms ± 0.328 ms        | in 48.182 ms ± 0.415 ms        |
| 16.384 kB  | in 49.778 ms ± 6.359 ms     | in 38.452 ms ± 0.698 ms      | in 73.982 ms ± 0.625 ms      | in 114.684 ms ± 12.99 ms       | in 97.118 ms ± 6.52 ms         |
| 32.768 kB  | in 78.909 ms ± 1.026 ms     | in 80.505 ms ± 1.65 ms       | in 146.755 ms ± 0.586 ms     | in 210.516 ms ± 6.724 ms       | in 184.683 ms ± 0.622 ms       |
| 65.536 kB  | in 148.675 ms ± 2.076 ms    | in 182.972 ms ± 10.719 ms    | in 289.213 ms ± 1.263 ms     | in 405.835 ms ± 2.161 ms       | in 379.358 ms ± 7.03 ms        |
| 131.072 kB | in 298.43 ms ± 1.383 ms     | in 310.71 ms ± 7.828 ms      | in 602.612 ms ± 20.792 ms    | in 833.566 ms ± 4.504 ms       | in 796.442 ms ± 28.534 ms      |
| 262.144 kB | in 617.741 ms ± 32.016 ms   | in 608.234 ms ± 2.813 ms     | in 1,324.798 ms ± 85.948 ms  | in 1,798.057 ms ± 80.791 ms    | in 1,620.33 ms ± 72.231 ms     |
| 524.288 kB | in 1,335.933 ms ± 52.147 ms | in 1,514.266 ms ± 31.896 ms  | in 2,617.43 ms ± 89.806 ms   | in 3,593.145 ms ± 53.351 ms    | in 3,276.592 ms ± 133.717 ms   |
| 1.049 MB   | in 2,655.705 ms ± 81.622 ms | in 2,742.456 ms ± 144.777 ms | in 5,091.861 ms ± 175.741 ms | in 6,880.448 ms ± 31.305 ms    | in 6,650.976 ms ± 26.202 ms    |