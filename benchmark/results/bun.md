# Bun

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.176 ms ± 0.222 ms | null                          | in 4.957 ms ± 1.5 ms        | in 4.466 ms ± 0.609 ms             | in 5.099 ms ± 1.972 ms             |
| 2 B        | in 0.067 ms ± 0.017 ms | null                          | in 4.1 ms ± 0.313 ms        | in 4.209 ms ± 0.226 ms             | in 4.214 ms ± 0.238 ms             |
| 4 B        | in 0.065 ms ± 0.015 ms | null                          | in 4.059 ms ± 0.107 ms      | in 4.238 ms ± 0.241 ms             | in 4.202 ms ± 0.252 ms             |
| 8 B        | in 0.069 ms ± 0.015 ms | null                          | in 4.031 ms ± 0.082 ms      | in 6.531 ms ± 4.63 ms              | in 4.315 ms ± 0.283 ms             |
| 16 B       | in 0.062 ms ± 0.014 ms | null                          | in 4.304 ms ± 0.407 ms      | in 4.31 ms ± 0.364 ms              | in 7.847 ms ± 7.545 ms             |
| 32 B       | in 0.06 ms ± 0.008 ms  | null                          | in 4.162 ms ± 0.166 ms      | in 16.326 ms ± 10.595 ms           | in 3.801 ms ± 0.308 ms             |
| 64 B       | in 0.062 ms ± 0.011 ms | null                          | in 3.593 ms ± 0.171 ms      | in 3.848 ms ± 0.259 ms             | in 3.837 ms ± 0.358 ms             |
| 128 B      | in 0.056 ms ± now      | null                          | in 6.484 ms ± 5.759 ms      | in 3.97 ms ± 0.216 ms              | in 6.158 ms ± 4.769 ms             |
| 256 B      | in 0.06 ms ± 0.008 ms  | null                          | in 6.712 ms ± 5.239 ms      | in 4.364 ms ± 0.209 ms             | in 4.202 ms ± 0.175 ms             |
| 512 B      | in 0.067 ms ± 0.016 ms | null                          | in 4.577 ms ± 0.321 ms      | in 7.402 ms ± 4.611 ms             | in 4.911 ms ± 0.046 ms             |
| 1.024 kB   | in 0.089 ms ± 0.055 ms | null                          | in 5.431 ms ± 0.225 ms      | in 8.072 ms ± 3.421 ms             | in 6.058 ms ± 0.121 ms             |
| 2.048 kB   | in 0.073 ms ± 0.021 ms | null                          | in 7.388 ms ± 0.113 ms      | in 9.621 ms ± 0.51 ms              | in 12.69 ms ± 3.24 ms              |
| 4.096 kB   | in 0.064 ms ± now      | null                          | in 11.644 ms ± 0.901 ms     | in 14.967 ms ± 0.184 ms            | in 14.656 ms ± 1.289 ms            |
| 8.192 kB   | in 0.07 ms ± 0.009 ms  | null                          | in 19.515 ms ± 1.298 ms     | in 26.997 ms ± 1.61 ms             | in 25.193 ms ± 1.298 ms            |
| 16.384 kB  | in 0.073 ms ± now      | null                          | in 38.653 ms ± 0.955 ms     | in 52.428 ms ± 3.483 ms            | in 45.361 ms ± 0.132 ms            |
| 32.768 kB  | in 0.064 ms ± now      | null                          | in 69.954 ms ± 4.984 ms     | in 102.326 ms ± 6.372 ms           | in 89.779 ms ± 0.366 ms            |
| 65.536 kB  | in 0.072 ms ± 0.008 ms | null                          | in 219.335 ms ± 49.138 ms   | in 193.485 ms ± 0.589 ms           | in 173.714 ms ± 1.036 ms           |
| 131.072 kB | in 0.086 ms ± 0.007 ms | null                          | in 267.034 ms ± 2.518 ms    | in 382.086 ms ± 2.435 ms           | in 342.829 ms ± 2.977 ms           |
| 262.144 kB | in 0.104 ms ± 0.008 ms | null                          | in 745.865 ms ± 43.026 ms   | in 1,042.471 ms ± 121.823 ms       | in 985.002 ms ± 140.211 ms         |
| 524.288 kB | in 0.122 ms ± 0.042 ms | null                          | in 1,426.124 ms ± 84.139 ms | in 1,867.765 ms ± 31.96 ms         | in 1,739.312 ms ± 53.492 ms        |
| 1.049 MB   | in 0.119 ms ± 0.04 ms  | null                          | in 2,764.184 ms ± 120.09 ms | in 3,643.119 ms ± 139.715 ms       | in 3,336.89 ms ± 142.22 ms         |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 15.668 ms ± 7.199 ms      | null                       | in 20.579 ms ± 10.21 ms      | in 16.215 ms ± 2.416 ms        | in 25.345 ms ± 13.013 ms       |
| 2 B        | in 12.309 ms ± 5.147 ms      | null                       | in 20.075 ms ± 11.611 ms     | in 16.081 ms ± 2.337 ms        | in 22.616 ms ± 9.59 ms         |
| 4 B        | in 11.36 ms ± 4.716 ms       | null                       | in 15.769 ms ± 5.878 ms      | in 15.899 ms ± 2.546 ms        | in 17.423 ms ± 5.794 ms        |
| 8 B        | in 15.013 ms ± 4.649 ms      | null                       | in 15.359 ms ± 2.897 ms      | in 15.432 ms ± 2.43 ms         | in 14.991 ms ± 2.872 ms        |
| 16 B       | in 15.627 ms ± 6.794 ms      | null                       | in 13.137 ms ± 2.188 ms      | in 18.507 ms ± 7.367 ms        | in 17.938 ms ± 6.671 ms        |
| 32 B       | in 12.498 ms ± 8.186 ms      | null                       | in 13.12 ms ± 2.048 ms       | in 20.796 ms ± 7.029 ms        | in 22.682 ms ± 13.351 ms       |
| 64 B       | in 10.58 ms ± 5.322 ms       | null                       | in 25.679 ms ± 2.222 ms      | in 38.271 ms ± 14.574 ms       | in 34.551 ms ± 13.976 ms       |
| 128 B      | in 10.789 ms ± 5.437 ms      | null                       | in 14.572 ms ± 1.971 ms      | in 20.825 ms ± 11.837 ms       | in 16.732 ms ± 2.796 ms        |
| 256 B      | in 11.831 ms ± 3.794 ms      | null                       | in 14.261 ms ± 2.227 ms      | in 16.228 ms ± 4.284 ms        | in 15.308 ms ± 2.481 ms        |
| 512 B      | in 17.353 ms ± 6.232 ms      | null                       | in 34.328 ms ± 3.758 ms      | in 34.702 ms ± 3.881 ms        | in 33.77 ms ± 3.039 ms         |
| 1.024 kB   | in 9.944 ms ± 2.201 ms       | null                       | in 17.225 ms ± 2.636 ms      | in 18.395 ms ± 2.207 ms        | in 18.289 ms ± 3.735 ms        |
| 2.048 kB   | in 14.752 ms ± 5.257 ms      | null                       | in 21.777 ms ± 2.492 ms      | in 22.627 ms ± 1.942 ms        | in 21.975 ms ± 2.67 ms         |
| 4.096 kB   | in 15.314 ms ± 1.995 ms      | null                       | in 31.085 ms ± 2.981 ms      | in 33.491 ms ± 3.786 ms        | in 31.51 ms ± 2.685 ms         |
| 8.192 kB   | in 27.306 ms ± 3.546 ms      | null                       | in 43.888 ms ± 3.063 ms      | in 52.268 ms ± 2.044 ms        | in 50.055 ms ± 2.986 ms        |
| 16.384 kB  | in 45.882 ms ± 2.298 ms      | null                       | in 87.287 ms ± 3.05 ms       | in 102.193 ms ± 1.656 ms       | in 97.69 ms ± 1.598 ms         |
| 32.768 kB  | in 73.235 ms ± 2.032 ms      | null                       | in 150.533 ms ± 7.477 ms     | in 181.122 ms ± 3.068 ms       | in 166.673 ms ± 2.154 ms       |
| 65.536 kB  | in 149.452 ms ± 13.861 ms    | null                       | in 299.962 ms ± 23.033 ms    | in 337.899 ms ± 3.646 ms       | in 316.41 ms ± 2.711 ms        |
| 131.072 kB | in 289.085 ms ± 27.384 ms    | null                       | in 819.777 ms ± 202.901 ms   | in 970.575 ms ± 150.005 ms     | in 933.243 ms ± 181.935 ms     |
| 262.144 kB | in 995.024 ms ± 281.945 ms   | null                       | in 1,753.941 ms ± 385.774 ms | in 2,193.392 ms ± 436.881 ms   | in 2,110.579 ms ± 441.204 ms   |
| 524.288 kB | in 1,495.694 ms ± 70.249 ms  | null                       | in 2,996.311 ms ± 234.302 ms | in 3,536.846 ms ± 130.553 ms   | in 3,408.367 ms ± 259.004 ms   |
| 1.049 MB   | in 2,935.821 ms ± 236.196 ms | null                       | in 5,719.527 ms ± 273.608 ms | in 6,550.282 ms ± 272.968 ms   | in 6,475.271 ms ± 245.7 ms     |