# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.214 ms   | null                          | in 6.16 ms ± 6.435 ms      | in 4.64 ms ± 2.922 ms              | in 3.12 ms ± 0.523 ms              |
| 2 B        | in 0.1 ms ± now         | null                          | in 4.16 ms ± 2.627 ms      | in 3.74 ms ± 0.995 ms              | in 3.28 ms ± 0.397 ms              |
| 4 B        | in 0.06 ms ± 0.08 ms    | null                          | in 2.8 ms ± 0.341 ms       | in 3.06 ms ± 0.25 ms               | in 3.22 ms ± 0.223 ms              |
| 8 B        | in 0.08 ms ± 0.075 ms   | null                          | in 2.7 ms ± 0.2 ms         | in 3.38 ms ± 0.935 ms              | in 2.78 ms ± 0.264 ms              |
| 16 B       | in 0.12 ms ± 0.075 ms   | null                          | in 2.52 ms ± 0.16 ms       | in 2.82 ms ± 0.194 ms              | in 3 ms ± 0.415 ms                 |
| 32 B       | in 0.1 ms ± now         | null                          | in 2.64 ms ± 0.174 ms      | in 3.02 ms ± 0.147 ms              | in 3.26 ms ± 0.826 ms              |
| 64 B       | in 0.08 ms ± 0.04 ms    | null                          | in 2.56 ms ± 0.049 ms      | in 3.08 ms ± 0.183 ms              | in 4 ms ± 1.553 ms                 |
| 128 B      | in 0.12 ms ± 0.075 ms   | null                          | in 3.46 ms ± 1.622 ms      | in 3.82 ms ± 0.611 ms              | in 3.46 ms ± 0.162 ms              |
| 256 B      | in 0.12 ms ± 0.04 ms    | null                          | in 2.98 ms ± 0.133 ms      | in 4.48 ms ± 0.264 ms              | in 4.08 ms ± 0.04 ms               |
| 512 B      | in 0.12 ms ± 0.04 ms    | null                          | in 3.54 ms ± 0.049 ms      | in 13.24 ms ± 3.729 ms             | in 5.82 ms ± 0.214 ms              |
| 1.024 kB   | in 0.18 ms ± 0.075 ms   | null                          | in 4.72 ms ± 0.147 ms      | in 9.74 ms ± 0.418 ms              | in 9.02 ms ± 0.417 ms              |
| 2.048 kB   | in 0.1 ms ± 0.063 ms    | null                          | in 6.78 ms ± 0.172 ms      | in 16 ms ± 0.415 ms                | in 15.82 ms ± 1.308 ms             |
| 4.096 kB   | in 0.4 ms ± 0.452 ms    | null                          | in 11.32 ms ± 0.813 ms     | in 29.32 ms ± 0.917 ms             | in 26.52 ms ± 0.147 ms             |
| 8.192 kB   | in 0.12 ms ± 0.04 ms    | null                          | in 19.48 ms ± 0.194 ms     | in 55.72 ms ± 0.527 ms             | in 50.64 ms ± 0.383 ms             |
| 16.384 kB  | in 0.26 ms ± 0.049 ms   | null                          | in 36.94 ms ± 0.301 ms     | in 110.66 ms ± 0.615 ms            | in 99.48 ms ± 0.999 ms             |
| 32.768 kB  | in 1.08 ms ± 0.688 ms   | null                          | in 84.58 ms ± 7.79 ms      | in 225.8 ms ± 2.353 ms             | in 202.56 ms ± 0.634 ms            |
| 65.536 kB  | in 0.78 ms ± 0.04 ms    | null                          | in 159.62 ms ± 3.066 ms    | in 449.16 ms ± 3.745 ms            | in 416.12 ms ± 6.424 ms            |
| 131.072 kB | in 10.08 ms ± 5.505 ms  | null                          | in 350.34 ms ± 34.749 ms   | in 909.46 ms ± 22.165 ms           | in 824.04 ms ± 3.554 ms            |
| 262.144 kB | in 4.44 ms ± 0.422 ms   | null                          | in 710.62 ms ± 27.65 ms    | in 1,871.02 ms ± 14.029 ms         | in 1,715.34 ms ± 15.029 ms         |
| 524.288 kB | in 16.1 ms ± 7.19 ms    | null                          | in 1,378.68 ms ± 12.533 ms | in 3,714.34 ms ± 60.63 ms          | in 3,387.86 ms ± 32.359 ms         |
| 1.049 MB   | in 27.58 ms ± 16.558 ms | null                          | in 2,738.98 ms ± 37.079 ms | in 7,354.22 ms ± 45.468 ms         | in 6,733.62 ms ± 50.657 ms         |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 23.38 ms ± 21.426 ms     | in 11.66 ms ± 3.321 ms      | in 22.04 ms ± 12.047 ms     | in 23.74 ms ± 8.91 ms          | in 23.54 ms ± 31.331 ms        |
| 2 B        | in 4.5 ms ± 2.454 ms        | in 8.24 ms ± 3.435 ms       | in 21.22 ms ± 12.604 ms     | in 24.52 ms ± 15.81 ms         | in 9.26 ms ± 4.834 ms          |
| 4 B        | in 3.42 ms ± 0.515 ms       | in 15.3 ms ± 13.99 ms       | in 6.72 ms ± 0.248 ms       | in 11.82 ms ± 6.666 ms         | in 9.6 ms ± 5.351 ms           |
| 8 B        | in 9.24 ms ± 11.195 ms      | in 19.44 ms ± 19.367 ms     | in 7.38 ms ± 1.074 ms       | in 8.58 ms ± 2.953 ms          | in 6.66 ms ± 0.543 ms          |
| 16 B       | in 7.82 ms ± 8.608 ms       | in 4.24 ms ± 0.971 ms       | in 10 ms ± 3.247 ms         | in 9.22 ms ± 2.073 ms          | in 7.5 ms ± 1.58 ms            |
| 32 B       | in 7.12 ms ± 6.6 ms         | in 4.16 ms ± 0.668 ms       | in 10.08 ms ± 4.634 ms      | in 7.66 ms ± 0.745 ms          | in 6.98 ms ± 0.479 ms          |
| 64 B       | in 10.94 ms ± 9.348 ms      | in 3.94 ms ± 0.393 ms       | in 6.84 ms ± 0.361 ms       | in 9 ms ± 2.098 ms             | in 7.04 ms ± 0.372 ms          |
| 128 B      | in 12.4 ms ± 11.13 ms       | in 5.34 ms ± 2.649 ms       | in 6.82 ms ± 0.382 ms       | in 8.38 ms ± 0.662 ms          | in 8.98 ms ± 2.148 ms          |
| 256 B      | in 10.5 ms ± 7.983 ms       | in 4.4 ms ± 0.972 ms        | in 7.28 ms ± 0.331 ms       | in 9.28 ms ± 0.605 ms          | in 8.9 ms ± 0.623 ms           |
| 512 B      | in 9.72 ms ± 10.846 ms      | in 4.82 ms ± 0.676 ms       | in 8.64 ms ± 0.686 ms       | in 11.64 ms ± 0.723 ms         | in 10.98 ms ± 0.523 ms         |
| 1.024 kB   | in 8.98 ms ± 7.015 ms       | in 7.06 ms ± 1.524 ms       | in 12.44 ms ± 2.631 ms      | in 16.04 ms ± 0.592 ms         | in 15.08 ms ± 0.293 ms         |
| 2.048 kB   | in 7.72 ms ± 0.366 ms       | in 8.62 ms ± 1.458 ms       | in 14.82 ms ± 0.264 ms      | in 30.2 ms ± 0.807 ms          | in 23.72 ms ± 0.331 ms         |
| 4.096 kB   | in 17.4 ms ± 1.485 ms       | in 12.86 ms ± 0.838 ms      | in 29 ms ± 0.141 ms         | in 44.26 ms ± 2.733 ms         | in 39.84 ms ± 0.75 ms          |
| 8.192 kB   | in 25.6 ms ± 1.178 ms       | in 22.02 ms ± 0.549 ms      | in 45.5 ms ± 0.616 ms       | in 78.84 ms ± 0.695 ms         | in 71.08 ms ± 0.306 ms         |
| 16.384 kB  | in 39.26 ms ± 0.712 ms      | in 39.44 ms ± 0.504 ms      | in 75.88 ms ± 0.232 ms      | in 149.28 ms ± 1.044 ms        | in 140.12 ms ± 1.144 ms        |
| 32.768 kB  | in 80.26 ms ± 1.487 ms      | in 84.44 ms ± 0.32 ms       | in 157.9 ms ± 0.533 ms      | in 303.76 ms ± 1.191 ms        | in 282.82 ms ± 1.087 ms        |
| 65.536 kB  | in 159.36 ms ± 1.534 ms     | in 167.1 ms ± 0.593 ms      | in 316.08 ms ± 1.945 ms     | in 604.32 ms ± 2.533 ms        | in 571.78 ms ± 1.962 ms        |
| 131.072 kB | in 357.88 ms ± 17.843 ms    | in 363 ms ± 32.847 ms       | in 652.3 ms ± 13.276 ms     | in 1,268.32 ms ± 33.9 ms       | in 1,200.36 ms ± 28.721 ms     |
| 262.144 kB | in 718.24 ms ± 40.806 ms    | in 730.58 ms ± 28.781 ms    | in 1,378.04 ms ± 23.157 ms  | in 2,606.9 ms ± 70.81 ms       | in 2,444.96 ms ± 46.578 ms     |
| 524.288 kB | in 1,395.78 ms ± 44.886 ms  | in 1,473.86 ms ± 39.326 ms  | in 2,815.52 ms ± 143.747 ms | in 5,093.36 ms ± 80.221 ms     | in 4,915.34 ms ± 69.249 ms     |
| 1.049 MB   | in 2,812.64 ms ± 130.294 ms | in 2,887.64 ms ± 143.994 ms | in 5,604.8 ms ± 282.033 ms  | in 10,239.7 ms ± 173.23 ms     | in 9,750.94 ms ± 193.44 ms     |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 184.16 ms ± 121.366 ms  | in 6.76 ms ± 5.449 ms      | in 5.7 ms ± 0.642 ms       | in 13.82 ms ± 5.342 ms         | in 18.82 ms ± 9.619 ms         |
| 2 B        | in 50.82 ms ± 31.983 ms    | in 3.94 ms ± 0.361 ms      | in 5.54 ms ± 0.894 ms      | in 11.62 ms ± 6.244 ms         | in 18.68 ms ± 3.257 ms         |
| 4 B        | in 19.4 ms ± 14.024 ms     | in 4.68 ms ± 1.87 ms       | in 5.34 ms ± 0.589 ms      | in 10.4 ms ± 3.613 ms          | in 11.76 ms ± 3.147 ms         |
| 8 B        | in 15.6 ms ± 16.698 ms     | in 3.82 ms ± 0.679 ms      | in 5.96 ms ± 0.979 ms      | in 17.3 ms ± 12.731 ms         | in 18.68 ms ± 10.206 ms        |
| 16 B       | in 15.66 ms ± 20.575 ms    | in 3.96 ms ± 0.622 ms      | in 6.14 ms ± 1.115 ms      | in 11.64 ms ± 2.417 ms         | in 15.64 ms ± 3.98 ms          |
| 32 B       | in 9.82 ms ± 11.432 ms     | in 3.74 ms ± 0.422 ms      | in 7.2 ms ± 1.265 ms       | in 11.26 ms ± 3.761 ms         | in 18 ms ± 13.793 ms           |
| 64 B       | in 22.62 ms ± 17.836 ms    | in 5.96 ms ± 1.234 ms      | in 5.48 ms ± 0.264 ms      | in 12.54 ms ± 6.702 ms         | in 7.84 ms ± 1.402 ms          |
| 128 B      | in 17.9 ms ± 15.189 ms     | in 4.36 ms ± 0.96 ms       | in 8.74 ms ± 1.107 ms      | in 10.36 ms ± 4.03 ms          | in 7.74 ms ± 1.602 ms          |
| 256 B      | in 13.48 ms ± 5.78 ms      | in 5.06 ms ± 1.758 ms      | in 7.4 ms ± 0.917 ms       | in 12.76 ms ± 8.272 ms         | in 8.08 ms ± 1.009 ms          |
| 512 B      | in 11.88 ms ± 7.464 ms     | in 4.76 ms ± 0.981 ms      | in 8.72 ms ± 1.486 ms      | in 10.34 ms ± 0.924 ms         | in 9.64 ms ± 0.265 ms          |
| 1.024 kB   | in 11.66 ms ± 5.606 ms     | in 6.4 ms ± 0.775 ms       | in 9.8 ms ± 0.385 ms       | in 14.34 ms ± 1.05 ms          | in 13.52 ms ± 0.445 ms         |
| 2.048 kB   | in 15.58 ms ± 7.477 ms     | in 8.64 ms ± 0.991 ms      | in 13.94 ms ± 0.512 ms     | in 22.58 ms ± 0.458 ms         | in 22.48 ms ± 2.581 ms         |
| 4.096 kB   | in 19.92 ms ± 5.634 ms     | in 12.7 ms ± 0.626 ms      | in 22.46 ms ± 0.476 ms     | in 39.82 ms ± 0.673 ms         | in 36.64 ms ± 0.554 ms         |
| 8.192 kB   | in 29.28 ms ± 4.51 ms      | in 21 ms ± 1.231 ms        | in 40.04 ms ± 0.484 ms     | in 76.02 ms ± 2.655 ms         | in 67.64 ms ± 0.712 ms         |
| 16.384 kB  | in 42.74 ms ± 5.741 ms     | in 39.64 ms ± 0.954 ms     | in 75.96 ms ± 0.742 ms     | in 144.82 ms ± 2.606 ms        | in 135.8 ms ± 2.012 ms         |
| 32.768 kB  | in 80.46 ms ± 1.198 ms     | in 82.52 ms ± 0.947 ms     | in 198.4 ms ± 22.592 ms    | in 291.12 ms ± 5.306 ms        | in 279.82 ms ± 9.406 ms        |
| 65.536 kB  | in 161.16 ms ± 1.213 ms    | in 202.32 ms ± 23.688 ms   | in 328.48 ms ± 9.26 ms     | in 586.44 ms ± 10.833 ms       | in 560.48 ms ± 6.927 ms        |
| 131.072 kB | in 338.2 ms ± 3.153 ms     | in 364.76 ms ± 22.028 ms   | in 669.16 ms ± 27.661 ms   | in 1,188.62 ms ± 29.542 ms     | in 1,156.48 ms ± 38.533 ms     |
| 262.144 kB | in 694.14 ms ± 64.682 ms   | in 697.6 ms ± 16.511 ms    | in 1,388.68 ms ± 23.956 ms | in 2,437.06 ms ± 40.258 ms     | in 2,310.28 ms ± 76.545 ms     |
| 524.288 kB | in 1,354.5 ms ± 40.33 ms   | in 1,397.5 ms ± 20.92 ms   | in 2,742 ms ± 54.271 ms    | in 4,800.02 ms ± 100.152 ms    | in 4,517.78 ms ± 42.686 ms     |
| 1.049 MB   | in 2,680.42 ms ± 33.057 ms | in 2,782.56 ms ± 36.657 ms | in 5,454.66 ms ± 90.418 ms | in 9,584.38 ms ± 150.574 ms    | in 8,961.18 ms ± 84.267 ms     |