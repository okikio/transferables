# Bun

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.209 ms ± 0.304 ms   | null                          | in 16.089 ms ± 5.645 ms      | in 10.07 ms ± 3.367 ms             | in 10.312 ms ± 3.04 ms             |
| 2 B        | in 0.097 ms ± 0.025 ms   | null                          | in 7.275 ms ± 0.697 ms       | in 7.695 ms ± 0.963 ms             | in 7.475 ms ± 1.678 ms             |
| 4 B        | in 0.09 ms ± 0.031 ms    | null                          | in 7.255 ms ± 0.987 ms       | in 7.742 ms ± 0.823 ms             | in 8.213 ms ± 2.39 ms              |
| 8 B        | in 0.078 ms ± 0.018 ms   | null                          | in 8.162 ms ± 1.715 ms       | in 20.156 ms ± 6.547 ms            | in 7.953 ms ± 0.947 ms             |
| 16 B       | in 0.139 ms ± 0.118 ms   | null                          | in 7.412 ms ± 1.401 ms       | in 7.13 ms ± 0.961 ms              | in 14.549 ms ± 15.974 ms           |
| 32 B       | in 0.077 ms ± 0.013 ms   | null                          | in 6.705 ms ± 0.552 ms       | in 6.978 ms ± 0.927 ms             | in 7.924 ms ± 3.59 ms              |
| 64 B       | in 0.089 ms ± 0.02 ms    | null                          | in 6.199 ms ± 0.646 ms       | in 6.939 ms ± 0.99 ms              | in 7.148 ms ± 1.218 ms             |
| 128 B      | in 0.064 ms ± 0.022 ms   | null                          | in 7.036 ms ± 2.37 ms        | in 6.744 ms ± 0.483 ms             | in 18.877 ms ± 6.671 ms            |
| 256 B      | in 0.072 ms ± 0.026 ms   | null                          | in 9.043 ms ± 5.331 ms       | in 7.658 ms ± 0.867 ms             | in 7.04 ms ± 0.891 ms              |
| 512 B      | in 0.076 ms ± 0.031 ms   | null                          | in 9.289 ms ± 2.298 ms       | in 19.739 ms ± 5.907 ms            | in 8.873 ms ± 1.33 ms              |
| 1.024 kB   | in 0.122 ms ± 0.115 ms   | null                          | in 12.253 ms ± 7.599 ms      | in 11.654 ms ± 2.161 ms            | in 10.185 ms ± 1.212 ms            |
| 2.048 kB   | in 0.136 ms ± 0.094 ms   | null                          | in 11.561 ms ± 0.964 ms      | in 22.154 ms ± 5.041 ms            | in 13.24 ms ± 0.298 ms             |
| 4.096 kB   | in 0.147 ms ± 0.12 ms    | null                          | in 18.049 ms ± 2.441 ms      | in 29.274 ms ± 4.636 ms            | in 21.217 ms ± 0.545 ms            |
| 8.192 kB   | in 0.168 ms ± 0.049 ms   | null                          | in 28.052 ms ± 2.047 ms      | in 46.246 ms ± 3.76 ms             | in 38.526 ms ± 1.578 ms            |
| 16.384 kB  | in 0.367 ms ± 0.018 ms   | null                          | in 55.96 ms ± 2.832 ms       | in 97.085 ms ± 39.097 ms           | in 72.628 ms ± 1.646 ms            |
| 32.768 kB  | in 0.657 ms ± 0.016 ms   | null                          | in 93.953 ms ± 4 ms          | in 159.67 ms ± 10.485 ms           | in 131.775 ms ± 3.477 ms           |
| 65.536 kB  | in 1.563 ms ± 0.171 ms   | null                          | in 315.785 ms ± 95.905 ms    | in 301.796 ms ± 7.018 ms           | in 263.543 ms ± 8.537 ms           |
| 131.072 kB | in 3.733 ms ± 0.258 ms   | null                          | in 380.46 ms ± 11.697 ms     | in 618.821 ms ± 15.78 ms           | in 530.046 ms ± 11.484 ms          |
| 262.144 kB | in 18.908 ms ± 12.89 ms  | null                          | in 1,146.098 ms ± 66.98 ms   | in 1,755.583 ms ± 188.97 ms        | in 1,527.242 ms ± 224.012 ms       |
| 524.288 kB | in 19.008 ms ± 6.569 ms  | null                          | in 2,133.001 ms ± 218.963 ms | in 3,053.101 ms ± 85.568 ms        | in 2,570.426 ms ± 152.209 ms       |
| 1.049 MB   | in 44.092 ms ± 32.577 ms | null                          | in 4,061.344 ms ± 173.681 ms | in 5,812.971 ms ± 255.147 ms       | in 5,206.217 ms ± 264.165 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 29.743 ms ± 14.246 ms     | null                       | in 22.95 ms ± 4.28 ms        | in 36.21 ms ± 17.297 ms        | in 29.199 ms ± 9.461 ms        |
| 2 B        | in 21.499 ms ± 12.995 ms     | null                       | in 20.13 ms ± 3.146 ms       | in 32.746 ms ± 15.142 ms       | in 26.117 ms ± 6.926 ms        |
| 4 B        | in 20.185 ms ± 9.866 ms      | null                       | in 20.333 ms ± 2.963 ms      | in 33.971 ms ± 10.108 ms       | in 22.082 ms ± 3.457 ms        |
| 8 B        | in 20.502 ms ± 11.415 ms     | null                       | in 22.704 ms ± 3.4 ms        | in 25.55 ms ± 11.407 ms        | in 23.483 ms ± 4.155 ms        |
| 16 B       | in 18.967 ms ± 9.929 ms      | null                       | in 19.447 ms ± 3.451 ms      | in 29.364 ms ± 18.105 ms       | in 21.66 ms ± 3.423 ms         |
| 32 B       | in 14.688 ms ± 5.414 ms      | null                       | in 20.863 ms ± 4.881 ms      | in 28.567 ms ± 17.595 ms       | in 22.823 ms ± 5.487 ms        |
| 64 B       | in 13.02 ms ± 4.879 ms       | null                       | in 37.795 ms ± 2.347 ms      | in 38.903 ms ± 3.279 ms        | in 40.026 ms ± 8.237 ms        |
| 128 B      | in 10.331 ms ± 1.396 ms      | null                       | in 23.391 ms ± 4.742 ms      | in 23.317 ms ± 3.495 ms        | in 22.068 ms ± 3.828 ms        |
| 256 B      | in 13.414 ms ± 3.804 ms      | null                       | in 22.259 ms ± 2.276 ms      | in 22.934 ms ± 3.32 ms         | in 22.484 ms ± 3.615 ms        |
| 512 B      | in 24.447 ms ± 6.401 ms      | null                       | in 48.039 ms ± 6.413 ms      | in 50.711 ms ± 3.779 ms        | in 48.469 ms ± 3.456 ms        |
| 1.024 kB   | in 16.21 ms ± 4.499 ms       | null                       | in 27.091 ms ± 3.73 ms       | in 28.848 ms ± 5.105 ms        | in 26.393 ms ± 1.976 ms        |
| 2.048 kB   | in 24.724 ms ± 10.084 ms     | null                       | in 30.974 ms ± 2.726 ms      | in 49.706 ms ± 6.017 ms        | in 34.352 ms ± 2.428 ms        |
| 4.096 kB   | in 24.605 ms ± 3.64 ms       | null                       | in 48.768 ms ± 6.02 ms       | in 61.356 ms ± 4.518 ms        | in 46.71 ms ± 3.76 ms          |
| 8.192 kB   | in 40.413 ms ± 4.302 ms      | null                       | in 64.075 ms ± 4.551 ms      | in 82.36 ms ± 5.665 ms         | in 71.542 ms ± 2.245 ms        |
| 16.384 kB  | in 65.299 ms ± 3.721 ms      | null                       | in 121.287 ms ± 6.81 ms      | in 147.244 ms ± 8.408 ms       | in 129.964 ms ± 6.132 ms       |
| 32.768 kB  | in 106.072 ms ± 5.395 ms     | null                       | in 213.36 ms ± 9.177 ms      | in 264.599 ms ± 15.38 ms       | in 249.98 ms ± 12.707 ms       |
| 65.536 kB  | in 214.18 ms ± 24.361 ms     | null                       | in 425.689 ms ± 58.054 ms    | in 499.126 ms ± 8.176 ms       | in 454.18 ms ± 6.599 ms        |
| 131.072 kB | in 414.19 ms ± 48.841 ms     | null                       | in 1,106.86 ms ± 233.481 ms  | in 1,435.948 ms ± 232.091 ms   | in 1,370.847 ms ± 318.579 ms   |
| 262.144 kB | in 1,392.551 ms ± 253.903 ms | null                       | in 2,545.466 ms ± 541.992 ms | in 3,022.006 ms ± 480.591 ms   | in 2,941.709 ms ± 543.116 ms   |
| 524.288 kB | in 2,169.191 ms ± 142.487 ms | null                       | in 4,425.788 ms ± 283.369 ms | in 5,372.332 ms ± 293.814 ms   | in 4,951.682 ms ± 552.991 ms   |
| 1.049 MB   | in 4,328.016 ms ± 349.373 ms | null                       | in 8,208.075 ms ± 368.788 ms | in 10,009.509 ms ± 310.813 ms  | in 9,718.436 ms ± 581.493 ms   |