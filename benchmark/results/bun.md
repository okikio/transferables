# Bun

## structuredClone

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.18 ms ± 0.237 ms   | null                          | in 4.932 ms ± 1.533 ms       | in 4.671 ms ± 0.668 ms             | in 4.893 ms ± 1.509 ms             |
| 2 B        | in 0.073 ms ± 0.026 ms  | null                          | in 4.203 ms ± 0.372 ms       | in 4.382 ms ± 0.314 ms             | in 4.25 ms ± 0.262 ms              |
| 4 B        | in 0.068 ms ± 0.023 ms  | null                          | in 4.117 ms ± 0.208 ms       | in 4.313 ms ± 0.308 ms             | in 4.404 ms ± 0.6 ms               |
| 8 B        | in 0.068 ms ± 0.023 ms  | null                          | in 4.184 ms ± 0.279 ms       | in 14.285 ms ± 4.777 ms            | in 4.357 ms ± 0.301 ms             |
| 16 B       | in 0.067 ms ± 0.019 ms  | null                          | in 4.456 ms ± 0.616 ms       | in 4.472 ms ± 0.361 ms             | in 7.454 ms ± 6.808 ms             |
| 32 B       | in 0.065 ms ± 0.017 ms  | null                          | in 4.126 ms ± 0.237 ms       | in 4.102 ms ± 0.232 ms             | in 3.701 ms ± 0.206 ms             |
| 64 B       | in 0.064 ms ± 0.014 ms  | null                          | in 3.666 ms ± 0.147 ms       | in 4.023 ms ± 0.443 ms             | in 3.863 ms ± 0.35 ms              |
| 128 B      | in 0.38 ms ± 0.638 ms   | null                          | in 3.743 ms ± 0.257 ms       | in 4.115 ms ± 0.303 ms             | in 9.779 ms ± 5.472 ms             |
| 256 B      | in 0.068 ms ± 0.018 ms  | null                          | in 4.313 ms ± 0.314 ms       | in 4.42 ms ± 0.22 ms               | in 4.223 ms ± 0.193 ms             |
| 512 B      | in 0.068 ms ± 0.021 ms  | null                          | in 4.427 ms ± 0.091 ms       | in 13.987 ms ± 4.286 ms            | in 4.855 ms ± 0.131 ms             |
| 1.024 kB   | in 0.098 ms ± 0.072 ms  | null                          | in 7.167 ms ± 3.789 ms       | in 6.848 ms ± 0.298 ms             | in 12.646 ms ± 3.492 ms            |
| 2.048 kB   | in 0.394 ms ± 0.645 ms  | null                          | in 8.441 ms ± 2.483 ms       | in 16.372 ms ± 3.117 ms            | in 8.648 ms ± 0.105 ms             |
| 4.096 kB   | in 0.141 ms ± 0.1 ms    | null                          | in 11.529 ms ± 0.562 ms      | in 16.628 ms ± 0.166 ms            | in 13.825 ms ± 0.392 ms            |
| 8.192 kB   | in 0.125 ms ± 0.022 ms  | null                          | in 19.354 ms ± 1.314 ms      | in 31.679 ms ± 1.686 ms            | in 24.708 ms ± 1.329 ms            |
| 16.384 kB  | in 0.313 ms ± 0.012 ms  | null                          | in 38.769 ms ± 0.712 ms      | in 60.344 ms ± 3.307 ms            | in 45.329 ms ± 0.166 ms            |
| 32.768 kB  | in 0.547 ms ± 0.013 ms  | null                          | in 71.327 ms ± 1.727 ms      | in 115.481 ms ± 6.184 ms           | in 86.428 ms ± 0.085 ms            |
| 65.536 kB  | in 1.306 ms ± 0.015 ms  | null                          | in 204.223 ms ± 56.802 ms    | in 223.458 ms ± 1.862 ms           | in 172.745 ms ± 0.521 ms           |
| 131.072 kB | in 3.047 ms ± 0.048 ms  | null                          | in 265.935 ms ± 0.662 ms     | in 446.76 ms ± 1.454 ms            | in 341.582 ms ± 1.129 ms           |
| 262.144 kB | in 17.84 ms ± 6.285 ms  | null                          | in 783.795 ms ± 83.875 ms    | in 1,183.265 ms ± 93.918 ms        | in 971.157 ms ± 100.77 ms          |
| 524.288 kB | in 12.382 ms ± 0.773 ms | null                          | in 1,420.941 ms ± 121.308 ms | in 2,158.752 ms ± 71.531 ms        | in 1,748.53 ms ± 119.413 ms        |
| 1.049 MB   | in 36.38 ms ± 21.497 ms | null                          | in 2,776.199 ms ± 150.276 ms | in 4,134.542 ms ± 90.11 ms         | in 3,317.299 ms ± 146.327 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 10.678 ms ± 1.945 ms      | null                       | in 19.136 ms ± 6.847 ms      | in 21.134 ms ± 13.2 ms         | in 16.139 ms ± 2.628 ms        |
| 2 B        | in 9.232 ms ± 2.498 ms       | null                       | in 15.28 ms ± 3.104 ms       | in 19.911 ms ± 11.795 ms       | in 20.552 ms ± 9.607 ms        |
| 4 B        | in 8.584 ms ± 2.181 ms       | null                       | in 13.974 ms ± 2.441 ms      | in 19.88 ms ± 11.837 ms        | in 16.01 ms ± 2.725 ms         |
| 8 B        | in 8.482 ms ± 2.329 ms       | null                       | in 13.896 ms ± 2.283 ms      | in 17.293 ms ± 7.219 ms        | in 14.702 ms ± 2.528 ms        |
| 16 B       | in 10.516 ms ± 4.721 ms      | null                       | in 13.426 ms ± 2.284 ms      | in 14.611 ms ± 2.94 ms         | in 14.871 ms ± 2.387 ms        |
| 32 B       | in 8.403 ms ± 2.396 ms       | null                       | in 13.565 ms ± 2.138 ms      | in 15.366 ms ± 4.081 ms        | in 15.573 ms ± 2.737 ms        |
| 64 B       | in 9.993 ms ± 5.122 ms       | null                       | in 26.031 ms ± 2.016 ms      | in 29.518 ms ± 8.394 ms        | in 27.19 ms ± 3.51 ms          |
| 128 B      | in 12.791 ms ± 8.525 ms      | null                       | in 15.31 ms ± 2.384 ms       | in 18.405 ms ± 8.506 ms        | in 15.6 ms ± 2.61 ms           |
| 256 B      | in 15.437 ms ± 7.837 ms      | null                       | in 15.19 ms ± 2.431 ms       | in 17.443 ms ± 6.021 ms        | in 15.916 ms ± 2.625 ms        |
| 512 B      | in 20.836 ms ± 9.402 ms      | null                       | in 38.807 ms ± 8.884 ms      | in 33.857 ms ± 2.466 ms        | in 33.647 ms ± 5.572 ms        |
| 1.024 kB   | in 12.937 ms ± 6.289 ms      | null                       | in 19.418 ms ± 3.908 ms      | in 19.505 ms ± 3.684 ms        | in 18.306 ms ± 2.669 ms        |
| 2.048 kB   | in 15.306 ms ± 4.418 ms      | null                       | in 20.667 ms ± 2.444 ms      | in 33.503 ms ± 3.235 ms        | in 22.573 ms ± 2.574 ms        |
| 4.096 kB   | in 18.259 ms ± 4.697 ms      | null                       | in 32.114 ms ± 4.352 ms      | in 42.743 ms ± 3.683 ms        | in 34.238 ms ± 5.148 ms        |
| 8.192 kB   | in 28.55 ms ± 4.298 ms       | null                       | in 44.465 ms ± 3.093 ms      | in 61.593 ms ± 2.493 ms        | in 50.425 ms ± 3.244 ms        |
| 16.384 kB  | in 46.735 ms ± 2.92 ms       | null                       | in 86.326 ms ± 3.195 ms      | in 105.277 ms ± 2.366 ms       | in 98.644 ms ± 1.966 ms        |
| 32.768 kB  | in 74.47 ms ± 1.845 ms       | null                       | in 150.824 ms ± 6.045 ms     | in 202.886 ms ± 8.824 ms       | in 174.358 ms ± 9.445 ms       |
| 65.536 kB  | in 150.043 ms ± 10.849 ms    | null                       | in 307.32 ms ± 14.303 ms     | in 367.726 ms ± 2.897 ms       | in 318.624 ms ± 1.785 ms       |
| 131.072 kB | in 295.926 ms ± 27.41 ms     | null                       | in 836.463 ms ± 213.387 ms   | in 1,048.229 ms ± 196.419 ms   | in 958.037 ms ± 209.947 ms     |
| 262.144 kB | in 1,123.885 ms ± 318.491 ms | null                       | in 1,811.004 ms ± 300.216 ms | in 2,203.188 ms ± 389.592 ms   | in 2,120.459 ms ± 439.069 ms   |
| 524.288 kB | in 1,562.657 ms ± 161.047 ms | null                       | in 2,996.115 ms ± 194.086 ms | in 3,846.272 ms ± 216.859 ms   | in 3,408.527 ms ± 286.35 ms    |
| 1.049 MB   | in 2,929.47 ms ± 242.727 ms  | null                       | in 5,879.424 ms ± 340.77 ms  | in 7,229.648 ms ± 166.382 ms   | in 6,481.228 ms ± 220.605 ms   |