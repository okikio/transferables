# Bun

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.187 ms ± 0.248 ms   | null                          | in 4.311 ms ± 1.648 ms      | in 3.966 ms ± 0.834 ms             | in 4.073 ms ± 1.156 ms             |
| 2 B        | in 0.073 ms ± 0.044 ms   | null                          | in 4.287 ms ± 1.392 ms      | in 3.794 ms ± 0.423 ms             | in 3.762 ms ± 0.482 ms             |
| 4 B        | in 0.06 ms ± 0.02 ms     | null                          | in 3.77 ms ± 0.439 ms       | in 5.382 ms ± 3.173 ms             | in 3.829 ms ± 0.551 ms             |
| 8 B        | in 0.065 ms ± 0.025 ms   | null                          | in 5.713 ms ± 4.433 ms      | in 11.207 ms ± 4.525 ms            | in 3.838 ms ± 0.468 ms             |
| 16 B       | in 0.057 ms ± 0.021 ms   | null                          | in 3.504 ms ± 0.43 ms       | in 3.807 ms ± 0.56 ms              | in 6.061 ms ± 5.208 ms             |
| 32 B       | in 0.055 ms ± 0.016 ms   | null                          | in 14.041 ms ± 7.229 ms     | in 4.767 ms ± 2.301 ms             | in 4.117 ms ± 1.436 ms             |
| 64 B       | in 0.052 ms ± 0.015 ms   | null                          | in 3.38 ms ± 0.23 ms        | in 3.686 ms ± 0.163 ms             | in 4.095 ms ± 1.056 ms             |
| 128 B      | in 0.058 ms ± 0.015 ms   | null                          | in 3.422 ms ± 0.169 ms      | in 11.504 ms ± 3.638 ms            | in 3.986 ms ± 0.166 ms             |
| 256 B      | in 0.057 ms ± 0.017 ms   | null                          | in 4.66 ms ± 2.017 ms       | in 5.757 ms ± 2.385 ms             | in 6.564 ms ± 4.355 ms             |
| 512 B      | in 0.061 ms ± 0.024 ms   | null                          | in 4.171 ms ± 0.121 ms      | in 6.01 ms ± 0.155 ms              | in 5.523 ms ± 0.155 ms             |
| 1.024 kB   | in 0.093 ms ± 0.077 ms   | null                          | in 4.944 ms ± 0.151 ms      | in 14.519 ms ± 3.205 ms            | in 7.761 ms ± 0.052 ms             |
| 2.048 kB   | in 0.244 ms ± 0.358 ms   | null                          | in 8.027 ms ± 2.725 ms      | in 13.728 ms ± 0.092 ms            | in 12.401 ms ± 0.091 ms            |
| 4.096 kB   | in 0.119 ms ± 0.083 ms   | null                          | in 11.233 ms ± 2.135 ms     | in 23.931 ms ± 0.131 ms            | in 22.337 ms ± 1.019 ms            |
| 8.192 kB   | in 0.122 ms ± 0.019 ms   | null                          | in 17.688 ms ± 1.133 ms     | in 46.675 ms ± 1.775 ms            | in 41.192 ms ± 1.099 ms            |
| 16.384 kB  | in 0.277 ms ± now        | null                          | in 34.055 ms ± 0.925 ms     | in 90.321 ms ± 3.091 ms            | in 82.911 ms ± 1.652 ms            |
| 32.768 kB  | in 0.539 ms ± 0.108 ms   | null                          | in 62.971 ms ± 1.387 ms     | in 175.836 ms ± 5.473 ms           | in 153.443 ms ± 0.376 ms           |
| 65.536 kB  | in 1.202 ms ± 0.021 ms   | null                          | in 170.919 ms ± 43.983 ms   | in 343.862 ms ± 1.01 ms            | in 305.993 ms ± 1.59 ms            |
| 131.072 kB | in 2.791 ms ± 0.029 ms   | null                          | in 244.463 ms ± 1.804 ms    | in 685.814 ms ± 2.804 ms           | in 605.282 ms ± 4.71 ms            |
| 262.144 kB | in 8.988 ms ± 0.423 ms   | null                          | in 645.928 ms ± 48.576 ms   | in 1,591.848 ms ± 84.614 ms        | in 1,440.632 ms ± 133.763 ms       |
| 524.288 kB | in 12.337 ms ± 4.266 ms  | null                          | in 1,246.786 ms ± 45.74 ms  | in 3,061.298 ms ± 68.231 ms        | in 2,541.352 ms ± 134.379 ms       |
| 1.049 MB   | in 26.602 ms ± 13.392 ms | null                          | in 2,436.701 ms ± 57.385 ms | in 5,912.325 ms ± 102.268 ms       | in 5,245.748 ms ± 83.913 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 17.792 ms ± 6.934 ms      | null                       | in 14.884 ms ± 3.777 ms      | in 17.757 ms ± 5.403 ms        | in 17.438 ms ± 6.465 ms        |
| 2 B        | in 11.557 ms ± 3.571 ms      | null                       | in 18.786 ms ± 9.499 ms      | in 19.154 ms ± 10.915 ms       | in 14.025 ms ± 2.163 ms        |
| 4 B        | in 11.982 ms ± 7.406 ms      | null                       | in 17.939 ms ± 10.069 ms     | in 17.115 ms ± 7.035 ms        | in 12.123 ms ± 1.906 ms        |
| 8 B        | in 8.223 ms ± 2.341 ms       | null                       | in 13.911 ms ± 4.881 ms      | in 13.8 ms ± 3.015 ms          | in 11.976 ms ± 2.083 ms        |
| 16 B       | in 9.106 ms ± 3.771 ms       | null                       | in 11.598 ms ± 2.312 ms      | in 12.979 ms ± 2.331 ms        | in 11.431 ms ± 1.686 ms        |
| 32 B       | in 7.162 ms ± 2.638 ms       | null                       | in 11.386 ms ± 1.984 ms      | in 16.664 ms ± 5.382 ms        | in 12.097 ms ± 1.458 ms        |
| 64 B       | in 8.828 ms ± 4.131 ms       | null                       | in 21.774 ms ± 2.61 ms       | in 27.543 ms ± 12.847 ms       | in 21.005 ms ± 2.575 ms        |
| 128 B      | in 10.718 ms ± 7.47 ms       | null                       | in 13.474 ms ± 2.803 ms      | in 16.872 ms ± 8.505 ms        | in 13.085 ms ± 2.075 ms        |
| 256 B      | in 10.494 ms ± 4.463 ms      | null                       | in 12.339 ms ± 1.727 ms      | in 16.233 ms ± 5.088 ms        | in 13.238 ms ± 1.94 ms         |
| 512 B      | in 13.334 ms ± 4.142 ms      | null                       | in 29.696 ms ± 2.685 ms      | in 29.185 ms ± 3.187 ms        | in 31.187 ms ± 2.077 ms        |
| 1.024 kB   | in 9.666 ms ± 2.975 ms       | null                       | in 15.133 ms ± 2.489 ms      | in 18.153 ms ± 2.412 ms        | in 18.964 ms ± 2.158 ms        |
| 2.048 kB   | in 13.566 ms ± 4.573 ms      | null                       | in 17.791 ms ± 1.411 ms      | in 32.646 ms ± 3.078 ms        | in 24.097 ms ± 1.722 ms        |
| 4.096 kB   | in 14.583 ms ± 3.439 ms      | null                       | in 26.219 ms ± 1.744 ms      | in 44.647 ms ± 2.1 ms          | in 37.526 ms ± 1.64 ms         |
| 8.192 kB   | in 24.847 ms ± 2.965 ms      | null                       | in 39.238 ms ± 2.203 ms      | in 72.27 ms ± 1.726 ms         | in 63.322 ms ± 2.683 ms        |
| 16.384 kB  | in 40.943 ms ± 2.282 ms      | null                       | in 77.811 ms ± 3.998 ms      | in 130.039 ms ± 1.588 ms       | in 121.078 ms ± 2.357 ms       |
| 32.768 kB  | in 73.166 ms ± 7.188 ms      | null                       | in 137.717 ms ± 3.935 ms     | in 249.587 ms ± 6.121 ms       | in 227.67 ms ± 4.278 ms        |
| 65.536 kB  | in 202.934 ms ± 144.078 ms   | null                       | in 280.646 ms ± 8.858 ms     | in 475.942 ms ± 3.927 ms       | in 433.668 ms ± 2.126 ms       |
| 131.072 kB | in 269.011 ms ± 21.268 ms    | null                       | in 747.901 ms ± 166.088 ms   | in 1,198.437 ms ± 156.127 ms   | in 1,136.189 ms ± 152.842 ms   |
| 262.144 kB | in 946.986 ms ± 258.52 ms    | null                       | in 1,577.972 ms ± 313.209 ms | in 2,506.882 ms ± 340.421 ms   | in 2,327.859 ms ± 289.69 ms    |
| 524.288 kB | in 1,382.434 ms ± 89.397 ms  | null                       | in 2,633.239 ms ± 190.677 ms | in 4,410.193 ms ± 165.495 ms   | in 4,034.295 ms ± 278.115 ms   |
| 1.049 MB   | in 2,639.791 ms ± 174.649 ms | null                       | in 5,159.488 ms ± 229.251 ms | in 8,695.167 ms ± 242.486 ms   | in 8,207.747 ms ± 319.066 ms   |