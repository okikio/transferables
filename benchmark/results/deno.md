# Deno

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.079 ms ± 0.077 ms | null                          | in 0.63 ms ± 0.189 ms       | in 0.677 ms ± 0.189 ms             | in 0.688 ms ± 0.2 ms               |
| 2 B        | in 0.029 ms ± 0.01 ms  | null                          | in 0.577 ms ± 0.138 ms      | in 0.64 ms ± 0.094 ms              | in 0.657 ms ± 0.1 ms               |
| 4 B        | in 0.061 ms ± 0.069 ms | null                          | in 0.548 ms ± 0.091 ms      | in 0.621 ms ± 0.13 ms              | in 0.664 ms ± 0.142 ms             |
| 8 B        | in 0.025 ms ± 0.005 ms | null                          | in 0.549 ms ± 0.086 ms      | in 0.612 ms ± 0.105 ms             | in 0.648 ms ± 0.124 ms             |
| 16 B       | in 0.024 ms ± now      | null                          | in 0.549 ms ± 0.06 ms       | in 0.652 ms ± 0.146 ms             | in 0.682 ms ± 0.112 ms             |
| 32 B       | in 0.023 ms ± now      | null                          | in 0.623 ms ± 0.058 ms      | in 0.746 ms ± 0.172 ms             | in 0.759 ms ± 0.09 ms              |
| 64 B       | in 0.022 ms ± now      | null                          | in 0.702 ms ± 0.028 ms      | in 0.846 ms ± 0.131 ms             | in 0.829 ms ± 0.147 ms             |
| 128 B      | in 0.022 ms ± now      | null                          | in 0.809 ms ± 0.065 ms      | in 0.958 ms ± 0.18 ms              | in 1.035 ms ± 0.208 ms             |
| 256 B      | in 0.022 ms ± now      | null                          | in 1.083 ms ± 0.087 ms      | in 1.243 ms ± 0.164 ms             | in 1.409 ms ± 0.282 ms             |
| 512 B      | in 0.023 ms ± now      | null                          | in 1.626 ms ± 0.062 ms      | in 1.863 ms ± 0.097 ms             | in 1.989 ms ± 0.053 ms             |
| 1.024 kB   | in 0.039 ms ± 0.034 ms | null                          | in 2.674 ms ± 0.054 ms      | in 2.999 ms ± 0.073 ms             | in 3.384 ms ± 0.091 ms             |
| 2.048 kB   | in 0.024 ms ± now      | null                          | in 4.816 ms ± 0.052 ms      | in 5.346 ms ± 0.066 ms             | in 6.904 ms ± 0.409 ms             |
| 4.096 kB   | in 0.027 ms ± 0.009 ms | null                          | in 9.065 ms ± 0.133 ms      | in 10.222 ms ± 0.146 ms            | in 11.625 ms ± 0.177 ms            |
| 8.192 kB   | in 0.024 ms ± now      | null                          | in 17.642 ms ± 0.234 ms     | in 20.378 ms ± 0.463 ms            | in 22.624 ms ± 0.141 ms            |
| 16.384 kB  | in 0.026 ms ± now      | null                          | in 35.098 ms ± 0.522 ms     | in 39.122 ms ± 0.109 ms            | in 44.7 ms ± 0.049 ms              |
| 32.768 kB  | in 0.033 ms ± 0.007 ms | null                          | in 71.593 ms ± 0.65 ms      | in 83.44 ms ± 0.737 ms             | in 91.18 ms ± 0.642 ms             |
| 65.536 kB  | in 0.032 ms ± now      | null                          | in 152.938 ms ± 20.145 ms   | in 159.177 ms ± 0.464 ms           | in 181.015 ms ± 0.393 ms           |
| 131.072 kB | in 0.033 ms ± now      | null                          | in 346.436 ms ± 32.67 ms    | in 321.677 ms ± 1.819 ms           | in 365.748 ms ± 2.745 ms           |
| 262.144 kB | in 0.034 ms ± now      | null                          | in 663.14 ms ± 79.847 ms    | in 734.97 ms ± 81.019 ms           | in 821.878 ms ± 82.227 ms          |
| 524.288 kB | in 0.036 ms ± now      | null                          | in 1,337.627 ms ± 117.55 ms | in 1,474.935 ms ± 122.498 ms       | in 1,713.078 ms ± 111.791 ms       |
| 1.049 MB   | in 0.043 ms ± now      | null                          | in 2,873.8 ms ± 23.345 ms   | in 3,007.547 ms ± 196.465 ms       | in 3,409.672 ms ± 79.769 ms        |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | --------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 1.562 ms ± 0.906 ms      | null                       | in 1.711 ms ± 0.033 ms      | in 1.825 ms ± 0.124 ms         | in 1.819 ms ± 0.154 ms         |
| 2 B        | in 0.858 ms ± 0.09 ms       | null                       | in 1.913 ms ± 0.586 ms      | in 1.648 ms ± 0.107 ms         | in 1.595 ms ± 0.021 ms         |
| 4 B        | in 0.845 ms ± 0.065 ms      | null                       | in 1.611 ms ± 0.128 ms      | in 1.616 ms ± 0.051 ms         | in 1.585 ms ± 0.034 ms         |
| 8 B        | in 0.881 ms ± 0.104 ms      | null                       | in 1.645 ms ± 0.135 ms      | in 1.624 ms ± 0.06 ms          | in 1.602 ms ± 0.013 ms         |
| 16 B       | in 0.917 ms ± 0.15 ms       | null                       | in 1.671 ms ± 0.119 ms      | in 1.69 ms ± 0.087 ms          | in 1.728 ms ± 0.203 ms         |
| 32 B       | in 0.968 ms ± 0.195 ms      | null                       | in 1.724 ms ± 0.099 ms      | in 1.798 ms ± 0.192 ms         | in 1.718 ms ± 0.024 ms         |
| 64 B       | in 0.998 ms ± 0.117 ms      | null                       | in 1.796 ms ± 0.052 ms      | in 1.959 ms ± 0.219 ms         | in 1.887 ms ± 0.092 ms         |
| 128 B      | in 1.096 ms ± 0.05 ms       | null                       | in 2.154 ms ± 0.142 ms      | in 2.198 ms ± 0.117 ms         | in 2.221 ms ± 0.114 ms         |
| 256 B      | in 1.381 ms ± 0.045 ms      | null                       | in 2.714 ms ± 0.191 ms      | in 2.843 ms ± 0.253 ms         | in 2.864 ms ± 0.159 ms         |
| 512 B      | in 1.956 ms ± 0.156 ms      | null                       | in 3.746 ms ± 0.113 ms      | in 3.928 ms ± 0.12 ms          | in 4.248 ms ± 0.317 ms         |
| 1.024 kB   | in 3.042 ms ± 0.172 ms      | null                       | in 5.892 ms ± 0.083 ms      | in 6.388 ms ± 0.284 ms         | in 6.562 ms ± 0.178 ms         |
| 2.048 kB   | in 5.187 ms ± 0.143 ms      | null                       | in 10.112 ms ± 0.037 ms     | in 10.707 ms ± 0.085 ms        | in 11.384 ms ± 0.181 ms        |
| 4.096 kB   | in 9.499 ms ± 0.231 ms      | null                       | in 18.651 ms ± 0.05 ms      | in 19.836 ms ± 0.137 ms        | in 21.028 ms ± 0.175 ms        |
| 8.192 kB   | in 18.113 ms ± 0.494 ms     | null                       | in 37.969 ms ± 0.318 ms     | in 41.329 ms ± 0.206 ms        | in 43.581 ms ± 0.201 ms        |
| 16.384 kB  | in 35.78 ms ± 1.16 ms       | null                       | in 72.678 ms ± 0.311 ms     | in 76.801 ms ± 0.308 ms        | in 81.867 ms ± 0.155 ms        |
| 32.768 kB  | in 71.892 ms ± 0.991 ms     | null                       | in 143.903 ms ± 0.323 ms    | in 151.676 ms ± 0.372 ms       | in 161.316 ms ± 0.368 ms       |
| 65.536 kB  | in 143.002 ms ± 1.756 ms    | null                       | in 287.489 ms ± 1.794 ms    | in 303.238 ms ± 0.488 ms       | in 324.029 ms ± 2.37 ms        |
| 131.072 kB | in 292.908 ms ± 6.129 ms    | null                       | in 598.815 ms ± 19.352 ms   | in 620.043 ms ± 17.295 ms      | in 654.326 ms ± 8.06 ms        |
| 262.144 kB | in 614.278 ms ± 18.005 ms   | null                       | in 1,313.601 ms ± 56.869 ms | in 1,311.18 ms ± 77.356 ms     | in 1,370.841 ms ± 28.665 ms    |
| 524.288 kB | in 1,375.604 ms ± 38.553 ms | null                       | in 2,730.128 ms ± 83.59 ms  | in 2,788.581 ms ± 54.394 ms    | in 2,940.791 ms ± 10.845 ms    |
| 1.049 MB   | in 2,406.746 ms ± 2.902 ms  | null                       | in 4,898.352 ms ± 51.087 ms | in 5,128.563 ms ± 47.461 ms    | in 5,618.702 ms ± 169.481 ms   |

## Worker

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | --------------------------- | --------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 3.681 ms ± 1.735 ms      | in 3.056 ms ± 0.035 ms      | in 2.136 ms ± 0.052 ms       | in 2.414 ms ± 0.06 ms          | in 2.401 ms ± 0.093 ms         |
| 2 B        | in 1.228 ms ± 0.251 ms      | in 1.208 ms ± 0.03 ms       | in 1.862 ms ± 0.114 ms       | in 2.257 ms ± 0.082 ms         | in 1.928 ms ± 0.143 ms         |
| 4 B        | in 1.03 ms ± 0.041 ms       | in 1.192 ms ± 0.095 ms      | in 1.848 ms ± 0.146 ms       | in 2.293 ms ± 0.424 ms         | in 1.928 ms ± 0.158 ms         |
| 8 B        | in 1.071 ms ± 0.076 ms      | in 1.62 ms ± 0.149 ms       | in 1.808 ms ± 0.086 ms       | in 2.213 ms ± 0.088 ms         | in 2.099 ms ± 0.345 ms         |
| 16 B       | in 1.384 ms ± 0.241 ms      | in 1.415 ms ± 0.164 ms      | in 1.846 ms ± 0.055 ms       | in 1.999 ms ± 0.147 ms         | in 1.947 ms ± 0.09 ms          |
| 32 B       | in 1.072 ms ± 0.076 ms      | in 1.488 ms ± 0.13 ms       | in 1.961 ms ± 0.068 ms       | in 2.128 ms ± 0.04 ms          | in 2.042 ms ± 0.034 ms         |
| 64 B       | in 1.108 ms ± 0.066 ms      | in 1.495 ms ± 0.157 ms      | in 2.101 ms ± 0.108 ms       | in 2.84 ms ± 0.791 ms          | in 5.402 ms ± 3.003 ms         |
| 128 B      | in 1.336 ms ± 0.142 ms      | in 1.629 ms ± 0.144 ms      | in 2.422 ms ± 0.148 ms       | in 2.727 ms ± 0.065 ms         | in 2.596 ms ± 0.06 ms          |
| 256 B      | in 1.687 ms ± 0.073 ms      | in 1.888 ms ± 0.116 ms      | in 3.014 ms ± 0.072 ms       | in 3.182 ms ± 0.168 ms         | in 3.282 ms ± 0.131 ms         |
| 512 B      | in 2.151 ms ± 0.087 ms      | in 2.488 ms ± 0.03 ms       | in 4.092 ms ± 0.139 ms       | in 4.139 ms ± 0.11 ms          | in 4.369 ms ± 0.168 ms         |
| 1.024 kB   | in 3.376 ms ± 0.106 ms      | in 3.643 ms ± 0.025 ms      | in 6.257 ms ± 0.054 ms       | in 6.454 ms ± 0.157 ms         | in 6.703 ms ± 0.093 ms         |
| 2.048 kB   | in 5.476 ms ± 0.162 ms      | in 5.908 ms ± 0.033 ms      | in 10.501 ms ± 0.065 ms      | in 11.072 ms ± 0.117 ms        | in 11.478 ms ± 0.079 ms        |
| 4.096 kB   | in 9.95 ms ± 0.402 ms       | in 10.449 ms ± 0.11 ms      | in 19.048 ms ± 0.113 ms      | in 20.118 ms ± 0.144 ms        | in 21.144 ms ± 0.073 ms        |
| 8.192 kB   | in 19.231 ms ± 0.416 ms     | in 19.385 ms ± 0.082 ms     | in 37.939 ms ± 0.826 ms      | in 39.871 ms ± 1.297 ms        | in 41.943 ms ± 0.663 ms        |
| 16.384 kB  | in 37.551 ms ± 0.194 ms     | in 38.634 ms ± 0.254 ms     | in 73.568 ms ± 1.128 ms      | in 89.865 ms ± 10.575 ms       | in 81.604 ms ± 0.994 ms        |
| 32.768 kB  | in 76.058 ms ± 1.128 ms     | in 81.539 ms ± 7.437 ms     | in 146.082 ms ± 0.535 ms     | in 157.759 ms ± 6.363 ms       | in 179.253 ms ± 13.954 ms      |
| 65.536 kB  | in 148.011 ms ± 3.348 ms    | in 175.718 ms ± 15.522 ms   | in 288.261 ms ± 1.118 ms     | in 304.109 ms ± 0.236 ms       | in 326.841 ms ± 3.678 ms       |
| 131.072 kB | in 303.431 ms ± 9.647 ms    | in 310.274 ms ± 10.167 ms   | in 610.89 ms ± 16.382 ms     | in 611.497 ms ± 3.362 ms       | in 697.93 ms ± 37.734 ms       |
| 262.144 kB | in 649.215 ms ± 3.974 ms    | in 631.738 ms ± 52.225 ms   | in 1,288.656 ms ± 73.529 ms  | in 1,380.16 ms ± 64.898 ms     | in 1,409.208 ms ± 36.356 ms    |
| 524.288 kB | in 1,276.538 ms ± 4.196 ms  | in 1,472.255 ms ± 80.945 ms | in 2,555.2 ms ± 56.531 ms    | in 2,711.432 ms ± 187.259 ms   | in 2,944.813 ms ± 84.093 ms    |
| 1.049 MB   | in 2,613.305 ms ± 79.799 ms | in 2,629.515 ms ± 91.724 ms | in 5,091.273 ms ± 190.418 ms | in 5,190.36 ms ± 141.839 ms    | in 5,552.586 ms ± 88.603 ms    |