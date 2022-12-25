# Deno

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.094 ms ± 0.135 ms   | null                          | in 0.624 ms ± 0.217 ms       | in 0.736 ms ± 0.234 ms             | in 0.675 ms ± 0.218 ms             |
| 2 B        | in 0.027 ms ± 0.016 ms   | null                          | in 0.506 ms ± 0.045 ms       | in 0.633 ms ± 0.099 ms             | in 0.635 ms ± 0.129 ms             |
| 4 B        | in 0.025 ms ± 0.013 ms   | null                          | in 0.565 ms ± 0.056 ms       | in 0.723 ms ± 0.097 ms             | in 0.681 ms ± 0.13 ms              |
| 8 B        | in 0.026 ms ± 0.012 ms   | null                          | in 0.611 ms ± 0.043 ms       | in 0.728 ms ± 0.085 ms             | in 0.693 ms ± 0.117 ms             |
| 16 B       | in 0.032 ms ± 0.016 ms   | null                          | in 0.595 ms ± 0.05 ms        | in 0.742 ms ± 0.145 ms             | in 0.695 ms ± 0.116 ms             |
| 32 B       | in 0.024 ms ± 0.012 ms   | null                          | in 0.619 ms ± 0.046 ms       | in 0.788 ms ± 0.189 ms             | in 0.742 ms ± 0.12 ms              |
| 64 B       | in 0.024 ms ± 0.012 ms   | null                          | in 0.669 ms ± 0.06 ms        | in 0.881 ms ± 0.168 ms             | in 0.818 ms ± 0.167 ms             |
| 128 B      | in 0.026 ms ± 0.013 ms   | null                          | in 0.801 ms ± 0.063 ms       | in 1.082 ms ± 0.252 ms             | in 0.98 ms ± 0.263 ms              |
| 256 B      | in 0.028 ms ± 0.017 ms   | null                          | in 1.111 ms ± 0.19 ms        | in 1.386 ms ± 0.109 ms             | in 1.335 ms ± 0.383 ms             |
| 512 B      | in 0.033 ms ± 0.023 ms   | null                          | in 1.569 ms ± 0.074 ms       | in 2.102 ms ± 0.104 ms             | in 2.18 ms ± 0.785 ms              |
| 1.024 kB   | in 0.057 ms ± 0.061 ms   | null                          | in 2.646 ms ± 0.051 ms       | in 3.93 ms ± 0.727 ms              | in 3.092 ms ± 0.137 ms             |
| 2.048 kB   | in 0.057 ms ± 0.05 ms    | null                          | in 4.78 ms ± 0.081 ms        | in 6.754 ms ± 0.063 ms             | in 5.636 ms ± 0.057 ms             |
| 4.096 kB   | in 0.082 ms ± 0.074 ms   | null                          | in 9.074 ms ± 0.068 ms       | in 12.944 ms ± 0.359 ms            | in 10.681 ms ± 0.09 ms             |
| 8.192 kB   | in 0.153 ms ± 0.161 ms   | null                          | in 17.652 ms ± 0.251 ms      | in 25.212 ms ± 0.103 ms            | in 21.13 ms ± 0.174 ms             |
| 16.384 kB  | in 0.126 ms ± now        | null                          | in 36.525 ms ± 0.673 ms      | in 51.322 ms ± 0.083 ms            | in 42.025 ms ± 0.569 ms            |
| 32.768 kB  | in 0.294 ms ± 0.009 ms   | null                          | in 72.157 ms ± 1.178 ms      | in 101.846 ms ± 2.019 ms           | in 85.006 ms ± 1.666 ms            |
| 65.536 kB  | in 0.739 ms ± 0.009 ms   | null                          | in 143.577 ms ± 1.408 ms     | in 205.118 ms ± 0.962 ms           | in 170.114 ms ± 1.752 ms           |
| 131.072 kB | in 1.693 ms ± 0.014 ms   | null                          | in 319.087 ms ± 30.004 ms    | in 412.969 ms ± 5.804 ms           | in 353.991 ms ± 27.071 ms          |
| 262.144 kB | in 3.905 ms ± 0.081 ms   | null                          | in 664.107 ms ± 64.779 ms    | in 900.712 ms ± 63.888 ms          | in 766.256 ms ± 68.778 ms          |
| 524.288 kB | in 6.154 ms ± 0.042 ms   | null                          | in 1,344.46 ms ± 127.912 ms  | in 1,851.893 ms ± 121.857 ms       | in 1,576.058 ms ± 118.504 ms       |
| 1.049 MB   | in 19.378 ms ± 11.504 ms | null                          | in 2,781.449 ms ± 229.535 ms | in 3,799.547 ms ± 247.705 ms       | in 3,214.007 ms ± 206.581 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.592 ms ± 0.922 ms      | null                       | in 1.728 ms ± 0.029 ms      | in 2.267 ms ± 0.684 ms         | in 1.857 ms ± 0.157 ms         |
| 2 B        | in 0.919 ms ± 0.09 ms       | null                       | in 1.999 ms ± 0.584 ms      | in 1.709 ms ± 0.061 ms         | in 1.639 ms ± 0.039 ms         |
| 4 B        | in 0.89 ms ± 0.06 ms        | null                       | in 1.669 ms ± 0.127 ms      | in 1.699 ms ± 0.068 ms         | in 1.664 ms ± 0.052 ms         |
| 8 B        | in 0.923 ms ± 0.104 ms      | null                       | in 2.095 ms ± 0.942 ms      | in 1.723 ms ± 0.066 ms         | in 1.709 ms ± 0.049 ms         |
| 16 B       | in 0.939 ms ± 0.156 ms      | null                       | in 1.711 ms ± 0.178 ms      | in 1.767 ms ± 0.117 ms         | in 1.757 ms ± 0.196 ms         |
| 32 B       | in 1.024 ms ± 0.179 ms      | null                       | in 2.124 ms ± 0.576 ms      | in 1.899 ms ± 0.201 ms         | in 1.748 ms ± 0.044 ms         |
| 64 B       | in 1.029 ms ± 0.126 ms      | null                       | in 1.834 ms ± 0.064 ms      | in 2.095 ms ± 0.279 ms         | in 1.916 ms ± 0.068 ms         |
| 128 B      | in 1.145 ms ± 0.074 ms      | null                       | in 2.134 ms ± 0.136 ms      | in 2.569 ms ± 0.592 ms         | in 2.282 ms ± 0.136 ms         |
| 256 B      | in 1.437 ms ± 0.084 ms      | null                       | in 2.736 ms ± 0.213 ms      | in 3.527 ms ± 1.19 ms          | in 2.917 ms ± 0.209 ms         |
| 512 B      | in 1.997 ms ± 0.129 ms      | null                       | in 3.761 ms ± 0.069 ms      | in 4.335 ms ± 0.162 ms         | in 4.065 ms ± 0.156 ms         |
| 1.024 kB   | in 3.059 ms ± 0.13 ms       | null                       | in 5.959 ms ± 0.123 ms      | in 7.038 ms ± 0.424 ms         | in 6.309 ms ± 0.124 ms         |
| 2.048 kB   | in 5.24 ms ± 0.174 ms       | null                       | in 10.195 ms ± 0.066 ms     | in 12.063 ms ± 0.06 ms         | in 11.088 ms ± 0.105 ms        |
| 4.096 kB   | in 9.623 ms ± 0.38 ms       | null                       | in 18.853 ms ± 0.027 ms     | in 22.489 ms ± 0.192 ms        | in 20.474 ms ± 0.182 ms        |
| 8.192 kB   | in 18.287 ms ± 0.639 ms     | null                       | in 38.17 ms ± 0.368 ms      | in 44.233 ms ± 0.908 ms        | in 41.358 ms ± 0.303 ms        |
| 16.384 kB  | in 36.006 ms ± 0.799 ms     | null                       | in 73.792 ms ± 0.291 ms     | in 86.202 ms ± 0.217 ms        | in 80.459 ms ± 0.414 ms        |
| 32.768 kB  | in 72.9 ms ± 0.77 ms        | null                       | in 145.194 ms ± 0.695 ms    | in 173.889 ms ± 0.442 ms       | in 156.859 ms ± 0.701 ms       |
| 65.536 kB  | in 144.768 ms ± 1.271 ms    | null                       | in 289.762 ms ± 2.114 ms    | in 352.912 ms ± 8.239 ms       | in 334.249 ms ± 11.383 ms      |
| 131.072 kB | in 292.98 ms ± 1.293 ms     | null                       | in 610.491 ms ± 20.855 ms   | in 704.126 ms ± 9.057 ms       | in 641.329 ms ± 3.563 ms       |
| 262.144 kB | in 605.083 ms ± 6.644 ms    | null                       | in 1,287.511 ms ± 65.142 ms | in 1,489.28 ms ± 38.73 ms      | in 1,330.218 ms ± 12.488 ms    |
| 524.288 kB | in 1,244.235 ms ± 46.648 ms | null                       | in 2,474.622 ms ± 96.334 ms | in 2,878.843 ms ± 30.575 ms    | in 2,768.54 ms ± 17.836 ms     |
| 1.049 MB   | in 2,416.179 ms ± 34.613 ms | null                       | in 4,837.987 ms ± 60.282 ms | in 5,849.795 ms ± 98.829 ms    | in 5,360.284 ms ± 132.289 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.629 ms ± 1.493 ms      | in 3.104 ms ± 0.06 ms       | in 2.166 ms ± 0.042 ms       | in 2.648 ms ± 0.074 ms         | in 2.492 ms ± 0.091 ms         |
| 2 B        | in 1.149 ms ± 0.038 ms      | in 1.244 ms ± 0.02 ms       | in 1.818 ms ± 0.067 ms       | in 2.034 ms ± 0.1 ms           | in 1.824 ms ± 0.077 ms         |
| 4 B        | in 1.223 ms ± 0.124 ms      | in 1.381 ms ± 0.129 ms      | in 1.99 ms ± 0.516 ms        | in 2.143 ms ± 0.168 ms         | in 1.872 ms ± 0.088 ms         |
| 8 B        | in 1.128 ms ± 0.119 ms      | in 1.679 ms ± 0.2 ms        | in 1.753 ms ± 0.086 ms       | in 2.235 ms ± 0.291 ms         | in 1.87 ms ± 0.059 ms          |
| 16 B       | in 1.299 ms ± 0.147 ms      | in 1.399 ms ± 0.148 ms      | in 1.727 ms ± 0.03 ms        | in 2.124 ms ± 0.095 ms         | in 1.884 ms ± 0.071 ms         |
| 32 B       | in 1.135 ms ± 0.073 ms      | in 1.409 ms ± 0.153 ms      | in 1.879 ms ± 0.194 ms       | in 2.297 ms ± 0.088 ms         | in 1.983 ms ± 0.073 ms         |
| 64 B       | in 1.174 ms ± 0.057 ms      | in 1.392 ms ± 0.137 ms      | in 1.977 ms ± 0.072 ms       | in 2.556 ms ± 0.057 ms         | in 4.101 ms ± 3.729 ms         |
| 128 B      | in 1.311 ms ± 0.061 ms      | in 1.539 ms ± 0.157 ms      | in 2.202 ms ± 0.025 ms       | in 3.213 ms ± 0.154 ms         | in 13.189 ms ± 21.255 ms       |
| 256 B      | in 1.749 ms ± 0.072 ms      | in 1.813 ms ± 0.159 ms      | in 2.841 ms ± 0.069 ms       | in 4.634 ms ± 0.418 ms         | in 3.248 ms ± 0.131 ms         |
| 512 B      | in 2.228 ms ± 0.094 ms      | in 2.394 ms ± 0.047 ms      | in 3.931 ms ± 0.049 ms       | in 4.791 ms ± 0.217 ms         | in 4.233 ms ± 0.071 ms         |
| 1.024 kB   | in 3.447 ms ± 0.099 ms      | in 3.53 ms ± 0.057 ms       | in 6.109 ms ± 0.077 ms       | in 7.041 ms ± 0.195 ms         | in 17.922 ms ± 22.931 ms       |
| 2.048 kB   | in 5.636 ms ± 0.13 ms       | in 5.788 ms ± 0.053 ms      | in 10.477 ms ± 0.087 ms      | in 12.463 ms ± 0.099 ms        | in 21.854 ms ± 20.852 ms       |
| 4.096 kB   | in 10.188 ms ± 0.115 ms     | in 10.448 ms ± 0.149 ms     | in 19.237 ms ± 0.136 ms      | in 24.232 ms ± 1.604 ms        | in 20.658 ms ± 0.129 ms        |
| 8.192 kB   | in 20.108 ms ± 0.932 ms     | in 20.446 ms ± 0.619 ms     | in 37.785 ms ± 1.29 ms       | in 46.532 ms ± 0.705 ms        | in 41.49 ms ± 0.492 ms         |
| 16.384 kB  | in 38.148 ms ± 0.782 ms     | in 38.617 ms ± 0.646 ms     | in 73.687 ms ± 0.443 ms      | in 100.454 ms ± 7.822 ms       | in 88.324 ms ± 10.923 ms       |
| 32.768 kB  | in 76.521 ms ± 0.957 ms     | in 79.905 ms ± 0.475 ms     | in 146.179 ms ± 0.545 ms     | in 187.206 ms ± 8.406 ms       | in 162.022 ms ± 3.724 ms       |
| 65.536 kB  | in 146.976 ms ± 2.034 ms    | in 172.941 ms ± 18.715 ms   | in 294.44 ms ± 7.212 ms      | in 357.494 ms ± 4.626 ms       | in 328.112 ms ± 0.83 ms        |
| 131.072 kB | in 302.149 ms ± 8.193 ms    | in 308.927 ms ± 8.058 ms    | in 601.889 ms ± 20.42 ms     | in 726.269 ms ± 3.339 ms       | in 686.274 ms ± 36.972 ms      |
| 262.144 kB | in 619.766 ms ± 31.569 ms   | in 615.308 ms ± 2.177 ms    | in 1,345.978 ms ± 79.558 ms  | in 1,581.045 ms ± 71.21 ms     | in 1,382.495 ms ± 17.232 ms    |
| 524.288 kB | in 1,334.993 ms ± 52.365 ms | in 1,497.901 ms ± 81.47 ms  | in 2,626.019 ms ± 24.924 ms  | in 3,191.622 ms ± 31.034 ms    | in 2,868.187 ms ± 96.293 ms    |
| 1.049 MB   | in 2,588.924 ms ± 76.708 ms | in 2,642.647 ms ± 79.629 ms | in 5,074.934 ms ± 240.999 ms | in 6,015.473 ms ± 47.16 ms     | in 5,717.116 ms ± 220.935 ms   |