# Bun

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.181 ms ± 0.226 ms | null                          | in 4.884 ms ± 1.386 ms       | in 4.562 ms ± 0.559 ms             | in 4.911 ms ± 0.965 ms             |
| 2 B        | in 0.065 ms ± 0.015 ms | null                          | in 4.008 ms ± 0.183 ms       | in 4.58 ms ± 1.072 ms              | in 4.583 ms ± 1.045 ms             |
| 4 B        | in 0.063 ms ± 0.01 ms  | null                          | in 4.4 ms ± 0.794 ms         | in 4.743 ms ± 1.434 ms             | in 5.051 ms ± 1.971 ms             |
| 8 B        | in 0.072 ms ± 0.02 ms  | null                          | in 4.247 ms ± 0.505 ms       | in 4.51 ms ± 0.898 ms              | in 13.729 ms ± 3.998 ms            |
| 16 B       | in 0.061 ms ± 0.008 ms | null                          | in 5.908 ms ± 3.663 ms       | in 6.074 ms ± 3.598 ms             | in 6.328 ms ± 3.573 ms             |
| 32 B       | in 0.058 ms ± 0.007 ms | null                          | in 9.946 ms ± 7.439 ms       | in 22.293 ms ± 11.675 ms           | in 8.874 ms ± 10.365 ms            |
| 64 B       | in 0.057 ms ± 0.007 ms | null                          | in 4.675 ms ± 2.141 ms       | in 3.933 ms ± 0.557 ms             | in 4.11 ms ± 0.64 ms               |
| 128 B      | in 0.084 ms ± 0.057 ms | null                          | in 3.835 ms ± 0.263 ms       | in 4.001 ms ± 0.289 ms             | in 7.697 ms ± 7.432 ms             |
| 256 B      | in 0.067 ms ± 0.018 ms | null                          | in 4.151 ms ± 0.209 ms       | in 4.62 ms ± 0.885 ms              | in 4.324 ms ± 0.205 ms             |
| 512 B      | in 0.066 ms ± 0.015 ms | null                          | in 4.506 ms ± 0.184 ms       | in 4.885 ms ± 0.159 ms             | in 12.535 ms ± 5.955 ms            |
| 1.024 kB   | in 0.079 ms ± 0.045 ms | null                          | in 5.539 ms ± 0.503 ms       | in 6.051 ms ± 0.15 ms              | in 7.905 ms ± 3.167 ms             |
| 2.048 kB   | in 0.066 ms ± 0.027 ms | null                          | in 8.355 ms ± 1.986 ms       | in 8.806 ms ± 0.497 ms             | in 13.451 ms ± 3.441 ms            |
| 4.096 kB   | in 0.058 ms ± now      | null                          | in 13.719 ms ± 1.786 ms      | in 13.594 ms ± 0.126 ms            | in 15.062 ms ± 0.297 ms            |
| 8.192 kB   | in 0.06 ms ± now       | null                          | in 19.259 ms ± 1.324 ms      | in 25.717 ms ± 2.245 ms            | in 27.697 ms ± 1.15 ms             |
| 16.384 kB  | in 0.067 ms ± now      | null                          | in 37.628 ms ± 0.475 ms      | in 47.012 ms ± 3.416 ms            | in 50.658 ms ± 0.13 ms             |
| 32.768 kB  | in 0.062 ms ± 0.006 ms | null                          | in 67.523 ms ± 0.659 ms      | in 92.544 ms ± 6.435 ms            | in 99.548 ms ± 0.171 ms            |
| 65.536 kB  | in 0.063 ms ± now      | null                          | in 172.711 ms ± 34.743 ms    | in 172.874 ms ± 0.933 ms           | in 193.417 ms ± 1.475 ms           |
| 131.072 kB | in 0.083 ms ± 0.007 ms | null                          | in 263.978 ms ± 3.134 ms     | in 341.054 ms ± 2.388 ms           | in 381.458 ms ± 1.73 ms            |
| 262.144 kB | in 0.096 ms ± 0.005 ms | null                          | in 688.585 ms ± 48.956 ms    | in 954.015 ms ± 111.83 ms          | in 1,000.949 ms ± 93.177 ms        |
| 524.288 kB | in 0.112 ms ± 0.028 ms | null                          | in 1,399.617 ms ± 89.781 ms  | in 1,724.875 ms ± 44.439 ms        | in 1,980.76 ms ± 120.292 ms        |
| 1.049 MB   | in 0.101 ms ± 0.006 ms | null                          | in 2,760.171 ms ± 135.946 ms | in 3,288.198 ms ± 102.125 ms       | in 3,639.384 ms ± 160.811 ms       |

## MessageChannel

|            | hasTransferables            | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | --------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 9.903 ms ± 4.338 ms      | null                       | in 16.346 ms ± 9.844 ms      | in 13.163 ms ± 2.607 ms        | in 20.055 ms ± 10.019 ms       |
| 2 B        | in 8.417 ms ± 4.628 ms      | null                       | in 17.887 ms ± 9.728 ms      | in 12.619 ms ± 2.078 ms        | in 19.618 ms ± 10.411 ms       |
| 4 B        | in 7.834 ms ± 4.698 ms      | null                       | in 12.781 ms ± 5.104 ms      | in 12.418 ms ± 2.106 ms        | in 19.919 ms ± 11.219 ms       |
| 8 B        | in 6.822 ms ± 3.258 ms      | null                       | in 15.101 ms ± 10.485 ms     | in 14.135 ms ± 3.711 ms        | in 15.815 ms ± 8.289 ms        |
| 16 B       | in 5.878 ms ± 2.211 ms      | null                       | in 10.258 ms ± 2.34 ms       | in 12.046 ms ± 2.336 ms        | in 13.861 ms ± 3.829 ms        |
| 32 B       | in 7.361 ms ± 4.66 ms       | null                       | in 10.013 ms ± 1.753 ms      | in 12.123 ms ± 2.25 ms         | in 15.255 ms ± 6.504 ms        |
| 64 B       | in 7.982 ms ± 4.933 ms      | null                       | in 20.844 ms ± 2.629 ms      | in 26.278 ms ± 8.148 ms        | in 24.252 ms ± 3.963 ms        |
| 128 B      | in 6.974 ms ± 4.264 ms      | null                       | in 10.831 ms ± 1.925 ms      | in 16.356 ms ± 8.254 ms        | in 12.401 ms ± 1.685 ms        |
| 256 B      | in 8.397 ms ± 4.321 ms      | null                       | in 10.72 ms ± 1.768 ms       | in 15.691 ms ± 8.56 ms         | in 11.989 ms ± 1.421 ms        |
| 512 B      | in 16.412 ms ± 8.251 ms     | null                       | in 30.202 ms ± 2.838 ms      | in 30.264 ms ± 2.933 ms        | in 29.208 ms ± 2.327 ms        |
| 1.024 kB   | in 7.943 ms ± 3.029 ms      | null                       | in 12.576 ms ± 1.902 ms      | in 14.511 ms ± 2.57 ms         | in 15.287 ms ± 1.896 ms        |
| 2.048 kB   | in 9.655 ms ± 3.611 ms      | null                       | in 16.259 ms ± 2.021 ms      | in 17.535 ms ± 1.868 ms        | in 18.053 ms ± 1.405 ms        |
| 4.096 kB   | in 10.011 ms ± 2.34 ms      | null                       | in 23.185 ms ± 3.372 ms      | in 25.402 ms ± 1.996 ms        | in 27.186 ms ± 1.218 ms        |
| 8.192 kB   | in 17.941 ms ± 4.04 ms      | null                       | in 34.491 ms ± 2.134 ms      | in 41.91 ms ± 2.112 ms         | in 43.187 ms ± 2.114 ms        |
| 16.384 kB  | in 24.71 ms ± 2.541 ms      | null                       | in 65.186 ms ± 5.661 ms      | in 74.028 ms ± 2.147 ms        | in 82.256 ms ± 5.508 ms        |
| 32.768 kB  | in 42.908 ms ± 2.493 ms     | null                       | in 122.128 ms ± 9.117 ms     | in 147.361 ms ± 5.022 ms       | in 157.99 ms ± 8.405 ms        |
| 65.536 kB  | in 89.766 ms ± 14.377 ms    | null                       | in 270.438 ms ± 38.687 ms    | in 256.015 ms ± 2.182 ms       | in 277.438 ms ± 3.523 ms       |
| 131.072 kB | in 165.44 ms ± 27.155 ms    | null                       | in 572.64 ms ± 200.224 ms    | in 675.555 ms ± 145.738 ms     | in 810.124 ms ± 210.15 ms      |
| 262.144 kB | in 606.891 ms ± 145.414 ms  | null                       | in 1,462.798 ms ± 350.177 ms | in 1,622.883 ms ± 313 ms       | in 1,784.115 ms ± 291.208 ms   |
| 524.288 kB | in 933.667 ms ± 84.941 ms   | null                       | in 2,471.852 ms ± 199.6 ms   | in 2,778.752 ms ± 201.13 ms    | in 3,075.856 ms ± 328.869 ms   |
| 1.049 MB   | in 1,769.826 ms ± 98.586 ms | null                       | in 4,688.234 ms ± 164.546 ms | in 5,387.682 ms ± 312.998 ms   | in 5,814.042 ms ± 270.667 ms   |