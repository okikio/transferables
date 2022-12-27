# Deno

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.097 ms ± 0.104 ms | null                          | in 0.748 ms ± 0.252 ms       | in 0.848 ms ± 0.279 ms             | in 0.761 ms ± 0.233 ms             |
| 2 B        | in 0.032 ms ± 0.011 ms | null                          | in 0.599 ms ± 0.047 ms       | in 0.734 ms ± 0.093 ms             | in 0.689 ms ± 0.118 ms             |
| 4 B        | in 0.03 ms ± 0.005 ms  | null                          | in 0.557 ms ± 0.045 ms       | in 0.764 ms ± 0.136 ms             | in 0.741 ms ± 0.132 ms             |
| 8 B        | in 0.028 ms ± now      | null                          | in 0.645 ms ± 0.071 ms       | in 0.767 ms ± 0.09 ms              | in 0.751 ms ± 0.122 ms             |
| 16 B       | in 0.032 ms ± 0.007 ms | null                          | in 0.716 ms ± 0.105 ms       | in 0.851 ms ± 0.173 ms             | in 0.8 ms ± 0.14 ms                |
| 32 B       | in 0.026 ms ± now      | null                          | in 0.699 ms ± 0.082 ms       | in 0.863 ms ± 0.178 ms             | in 0.799 ms ± 0.127 ms             |
| 64 B       | in 0.025 ms ± now      | null                          | in 0.789 ms ± 0.061 ms       | in 0.985 ms ± 0.209 ms             | in 0.895 ms ± 0.168 ms             |
| 128 B      | in 0.025 ms ± now      | null                          | in 0.94 ms ± 0.075 ms        | in 1.222 ms ± 0.228 ms             | in 1.154 ms ± 0.191 ms             |
| 256 B      | in 0.025 ms ± now      | null                          | in 1.367 ms ± 0.184 ms       | in 1.556 ms ± 0.08 ms              | in 1.549 ms ± 0.3 ms               |
| 512 B      | in 0.027 ms ± now      | null                          | in 1.925 ms ± 0.087 ms       | in 2.476 ms ± 0.251 ms             | in 2.157 ms ± 0.111 ms             |
| 1.024 kB   | in 0.045 ms ± 0.04 ms  | null                          | in 3.206 ms ± 0.125 ms       | in 4.059 ms ± 0.19 ms              | in 3.577 ms ± 0.133 ms             |
| 2.048 kB   | in 0.027 ms ± now      | null                          | in 5.664 ms ± 0.044 ms       | in 7.205 ms ± 0.071 ms             | in 7.372 ms ± 0.426 ms             |
| 4.096 kB   | in 0.026 ms ± now      | null                          | in 10.666 ms ± 0.354 ms      | in 13.661 ms ± 0.327 ms            | in 12.136 ms ± 0.338 ms            |
| 8.192 kB   | in 0.028 ms ± now      | null                          | in 20.739 ms ± 0.335 ms      | in 27.76 ms ± 0.399 ms             | in 23.404 ms ± 0.47 ms             |
| 16.384 kB  | in 0.031 ms ± now      | null                          | in 41.439 ms ± 0.894 ms      | in 52.778 ms ± 0.446 ms            | in 46.15 ms ± 0.501 ms             |
| 32.768 kB  | in 0.034 ms ± now      | null                          | in 84.74 ms ± 0.786 ms       | in 112.197 ms ± 1.042 ms           | in 94.598 ms ± 0.742 ms            |
| 65.536 kB  | in 0.042 ms ± 0.007 ms | null                          | in 167.683 ms ± 2.336 ms     | in 215.477 ms ± 2.344 ms           | in 189.817 ms ± 2.351 ms           |
| 131.072 kB | in 0.037 ms ± now      | null                          | in 433.314 ms ± 14.453 ms    | in 438.164 ms ± 9.306 ms           | in 391.957 ms ± 8.573 ms           |
| 262.144 kB | in 0.041 ms ± now      | null                          | in 802.506 ms ± 105.279 ms   | in 985.235 ms ± 96.635 ms          | in 875.245 ms ± 111.578 ms         |
| 524.288 kB | in 0.048 ms ± 0.007 ms | null                          | in 1,544.941 ms ± 132.816 ms | in 1,929.04 ms ± 146.999 ms        | in 1,740.228 ms ± 130.349 ms       |
| 1.049 MB   | in 0.047 ms ± 0.006 ms | null                          | in 3,436.809 ms ± 22.737 ms  | in 3,968.141 ms ± 235.693 ms       | in 3,690.966 ms ± 50.304 ms        |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.812 ms ± 1.007 ms      | null                       | in 2.001 ms ± 0.048 ms       | in 2.227 ms ± 0.187 ms         | in 2.084 ms ± 0.115 ms         |
| 2 B        | in 1.045 ms ± 0.065 ms      | null                       | in 2.351 ms ± 0.648 ms       | in 1.981 ms ± 0.073 ms         | in 1.911 ms ± 0.08 ms          |
| 4 B        | in 1.021 ms ± 0.073 ms      | null                       | in 1.98 ms ± 0.177 ms        | in 1.987 ms ± 0.091 ms         | in 1.897 ms ± 0.027 ms         |
| 8 B        | in 1.053 ms ± 0.135 ms      | null                       | in 1.967 ms ± 0.15 ms        | in 1.963 ms ± 0.062 ms         | in 1.903 ms ± 0.027 ms         |
| 16 B       | in 1.111 ms ± 0.171 ms      | null                       | in 1.918 ms ± 0.066 ms       | in 2.013 ms ± 0.085 ms         | in 2.065 ms ± 0.222 ms         |
| 32 B       | in 1.178 ms ± 0.214 ms      | null                       | in 1.993 ms ± 0.029 ms       | in 2.154 ms ± 0.116 ms         | in 2.019 ms ± 0.057 ms         |
| 64 B       | in 1.21 ms ± 0.11 ms        | null                       | in 2.197 ms ± 0.103 ms       | in 2.353 ms ± 0.211 ms         | in 2.296 ms ± 0.147 ms         |
| 128 B      | in 1.336 ms ± 0.076 ms      | null                       | in 2.516 ms ± 0.148 ms       | in 2.793 ms ± 0.308 ms         | in 2.671 ms ± 0.155 ms         |
| 256 B      | in 1.628 ms ± 0.074 ms      | null                       | in 3.239 ms ± 0.27 ms        | in 3.809 ms ± 0.583 ms         | in 3.449 ms ± 0.281 ms         |
| 512 B      | in 2.344 ms ± 0.126 ms      | null                       | in 4.483 ms ± 0.132 ms       | in 5.1 ms ± 0.306 ms           | in 4.688 ms ± 0.084 ms         |
| 1.024 kB   | in 3.616 ms ± 0.092 ms      | null                       | in 7.045 ms ± 0.117 ms       | in 8.245 ms ± 0.599 ms         | in 7.448 ms ± 0.134 ms         |
| 2.048 kB   | in 6.559 ms ± 0.748 ms      | null                       | in 12.091 ms ± 0.084 ms      | in 13.738 ms ± 0.201 ms        | in 12.828 ms ± 0.18 ms         |
| 4.096 kB   | in 11.466 ms ± 0.299 ms     | null                       | in 22.355 ms ± 0.131 ms      | in 25.457 ms ± 0.536 ms        | in 23.711 ms ± 0.201 ms        |
| 8.192 kB   | in 21.73 ms ± 0.433 ms      | null                       | in 45.081 ms ± 0.159 ms      | in 52.229 ms ± 0.734 ms        | in 48.751 ms ± 0.642 ms        |
| 16.384 kB  | in 42.56 ms ± 1.085 ms      | null                       | in 87.089 ms ± 0.514 ms      | in 99.814 ms ± 3.275 ms        | in 91.923 ms ± 0.458 ms        |
| 32.768 kB  | in 86 ms ± 1.565 ms         | null                       | in 172.159 ms ± 1.084 ms     | in 195.723 ms ± 3.14 ms        | in 181.726 ms ± 1.906 ms       |
| 65.536 kB  | in 172.258 ms ± 2.29 ms     | null                       | in 349.764 ms ± 10.593 ms    | in 391.3 ms ± 6.119 ms         | in 371.437 ms ± 13.696 ms      |
| 131.072 kB | in 361.022 ms ± 16.768 ms   | null                       | in 716.835 ms ± 24.329 ms    | in 785.938 ms ± 19.436 ms      | in 744.567 ms ± 22.888 ms      |
| 262.144 kB | in 771.851 ms ± 29.706 ms   | null                       | in 1,590.475 ms ± 106.588 ms | in 1,687.927 ms ± 105.072 ms   | in 1,534.029 ms ± 71.335 ms    |
| 524.288 kB | in 1,632.861 ms ± 70.485 ms | null                       | in 3,229.113 ms ± 38.67 ms   | in 3,555.002 ms ± 55.033 ms    | in 3,353.267 ms ± 73.819 ms    |
| 1.049 MB   | in 2,916.726 ms ± 76.38 ms  | null                       | in 5,900.825 ms ± 92.494 ms  | in 6,510.369 ms ± 32.418 ms    | in 6,267.596 ms ± 154.265 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)   | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | ---------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 6.783 ms ± 6.998 ms      | in 3.836 ms ± 0.284 ms       | in 2.554 ms ± 0.08 ms        | in 3.072 ms ± 0.143 ms         | in 12.841 ms ± 20.416 ms       |
| 2 B        | in 1.445 ms ± 0.378 ms      | in 1.427 ms ± 0.048 ms       | in 2.429 ms ± 0.123 ms       | in 2.48 ms ± 0.119 ms          | in 2.492 ms ± 0.134 ms         |
| 4 B        | in 1.29 ms ± 0.062 ms       | in 1.432 ms ± 0.227 ms       | in 2.27 ms ± 0.117 ms        | in 3.048 ms ± 1.188 ms         | in 2.306 ms ± 0.187 ms         |
| 8 B        | in 1.311 ms ± 0.092 ms      | in 1.816 ms ± 0.309 ms       | in 2.36 ms ± 0.163 ms        | in 2.577 ms ± 0.173 ms         | in 2.158 ms ± 0.125 ms         |
| 16 B       | in 1.644 ms ± 0.31 ms       | in 1.437 ms ± 0.069 ms       | in 2.477 ms ± 0.25 ms        | in 2.371 ms ± 0.124 ms         | in 2.246 ms ± 0.124 ms         |
| 32 B       | in 1.31 ms ± 0.091 ms       | in 1.505 ms ± 0.132 ms       | in 2.882 ms ± 0.908 ms       | in 2.524 ms ± 0.096 ms         | in 2.332 ms ± 0.114 ms         |
| 64 B       | in 1.317 ms ± 0.062 ms      | in 1.526 ms ± 0.105 ms       | in 2.818 ms ± 0.362 ms       | in 3.014 ms ± 0.128 ms         | in 4.792 ms ± 2.775 ms         |
| 128 B      | in 1.489 ms ± 0.05 ms       | in 1.645 ms ± 0.112 ms       | in 2.971 ms ± 0.275 ms       | in 3.665 ms ± 0.148 ms         | in 3.064 ms ± 0.267 ms         |
| 256 B      | in 2.05 ms ± 0.045 ms       | in 2.062 ms ± 0.081 ms       | in 3.641 ms ± 0.115 ms       | in 5.089 ms ± 0.115 ms         | in 3.621 ms ± 0.138 ms         |
| 512 B      | in 2.584 ms ± 0.088 ms      | in 2.738 ms ± 0.083 ms       | in 5.023 ms ± 0.27 ms        | in 5.584 ms ± 0.238 ms         | in 4.96 ms ± 0.142 ms          |
| 1.024 kB   | in 4.33 ms ± 0.463 ms       | in 4.244 ms ± 0.096 ms       | in 11.266 ms ± 7.248 ms      | in 8.043 ms ± 0.2 ms           | in 7.832 ms ± 0.339 ms         |
| 2.048 kB   | in 6.747 ms ± 0.49 ms       | in 6.76 ms ± 0.197 ms        | in 12.744 ms ± 0.245 ms      | in 14.06 ms ± 0.302 ms         | in 13.055 ms ± 0.361 ms        |
| 4.096 kB   | in 12.016 ms ± 0.553 ms     | in 12.079 ms ± 0.261 ms      | in 23.433 ms ± 0.56 ms       | in 26.119 ms ± 0.847 ms        | in 24.221 ms ± 0.599 ms        |
| 8.192 kB   | in 23.295 ms ± 0.714 ms     | in 23.408 ms ± 0.761 ms      | in 46.452 ms ± 0.808 ms      | in 50.742 ms ± 0.733 ms        | in 48.321 ms ± 1.636 ms        |
| 16.384 kB  | in 45.061 ms ± 1.507 ms     | in 46.935 ms ± 1.114 ms      | in 90.665 ms ± 1.91 ms       | in 125.983 ms ± 6.575 ms       | in 114.916 ms ± 18.386 ms      |
| 32.768 kB  | in 90.462 ms ± 1.898 ms     | in 102.499 ms ± 10.25 ms     | in 179.258 ms ± 3.249 ms     | in 196.77 ms ± 1.456 ms        | in 184.614 ms ± 1.924 ms       |
| 65.536 kB  | in 176.104 ms ± 5.056 ms    | in 210.22 ms ± 14.433 ms     | in 353.289 ms ± 7.726 ms     | in 391.764 ms ± 2.608 ms       | in 372.142 ms ± 10.569 ms      |
| 131.072 kB | in 362.17 ms ± 8.217 ms     | in 375.578 ms ± 14.387 ms    | in 726.043 ms ± 22.976 ms    | in 791.034 ms ± 13.235 ms      | in 767.494 ms ± 28.71 ms       |
| 262.144 kB | in 785.25 ms ± 12.025 ms    | in 835.474 ms ± 84.659 ms    | in 1,526.686 ms ± 97.297 ms  | in 1,697.152 ms ± 42.619 ms    | in 1,605.755 ms ± 76.612 ms    |
| 524.288 kB | in 1,606.978 ms ± 92.466 ms | in 1,746.481 ms ± 66.787 ms  | in 3,121.651 ms ± 90.196 ms  | in 3,470.679 ms ± 129.1 ms     | in 3,288.524 ms ± 139.365 ms   |
| 1.049 MB   | in 3,095.183 ms ± 25.215 ms | in 3,273.622 ms ± 172.543 ms | in 6,035.633 ms ± 242.803 ms | in 6,667.187 ms ± 127.598 ms   | in 6,203.092 ms ± 93.271 ms    |