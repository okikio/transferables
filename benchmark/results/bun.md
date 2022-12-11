# Bun

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.184 ms ± 0.268 ms   | null                          | in 6.431 ms ± 5.228 ms       | in 8.679 ms ± 4.567 ms             | in 4.264 ms ± 0.771 ms             |
| 2 B        | in 0.067 ms ± 0.024 ms   | null                          | in 6.262 ms ± 3.147 ms       | in 6.968 ms ± 3.014 ms             | in 4.045 ms ± 0.549 ms             |
| 4 B        | in 0.061 ms ± 0.021 ms   | null                          | in 3.849 ms ± 0.517 ms       | in 4.015 ms ± 0.611 ms             | in 4.03 ms ± 0.583 ms              |
| 8 B        | in 0.06 ms ± 0.021 ms    | null                          | in 3.728 ms ± 0.369 ms       | in 5.422 ms ± 3.349 ms             | in 10.574 ms ± 3.195 ms            |
| 16 B       | in 0.06 ms ± 0.018 ms    | null                          | in 3.832 ms ± 0.284 ms       | in 3.956 ms ± 0.495 ms             | in 4.794 ms ± 2.081 ms             |
| 32 B       | in 0.064 ms ± 0.016 ms   | null                          | in 4.531 ms ± 1.854 ms       | in 11.598 ms ± 9.716 ms            | in 4.2 ms ± 0.993 ms               |
| 64 B       | in 0.053 ms ± 0.016 ms   | null                          | in 3.577 ms ± 0.389 ms       | in 4.067 ms ± 0.531 ms             | in 4.026 ms ± 0.718 ms             |
| 128 B      | in 0.051 ms ± 0.013 ms   | null                          | in 3.556 ms ± 0.209 ms       | in 3.907 ms ± 0.156 ms             | in 6.284 ms ± 5.119 ms             |
| 256 B      | in 0.056 ms ± 0.018 ms   | null                          | in 5.708 ms ± 3.595 ms       | in 4.449 ms ± 0.113 ms             | in 4.261 ms ± 0.166 ms             |
| 512 B      | in 0.058 ms ± 0.02 ms    | null                          | in 4.374 ms ± 0.53 ms        | in 7.642 ms ± 4.357 ms             | in 13.444 ms ± 4.432 ms            |
| 1.024 kB   | in 0.088 ms ± 0.065 ms   | null                          | in 5.065 ms ± 0.129 ms       | in 7.143 ms ± 0.135 ms             | in 8.022 ms ± 3.019 ms             |
| 2.048 kB   | in 0.096 ms ± 0.06 ms    | null                          | in 6.853 ms ± 0.109 ms       | in 12.464 ms ± 2.44 ms             | in 10.025 ms ± 0.122 ms            |
| 4.096 kB   | in 0.121 ms ± 0.085 ms   | null                          | in 10.805 ms ± 0.766 ms      | in 19.313 ms ± 1.176 ms            | in 16.762 ms ± 0.424 ms            |
| 8.192 kB   | in 0.107 ms ± 0.014 ms   | null                          | in 17.872 ms ± 1.022 ms      | in 37.137 ms ± 3.196 ms            | in 29.731 ms ± 0.223 ms            |
| 16.384 kB  | in 0.272 ms ± 0.007 ms   | null                          | in 33.567 ms ± 1.122 ms      | in 69.761 ms ± 2.916 ms            | in 61.185 ms ± 0.613 ms            |
| 32.768 kB  | in 0.486 ms ± 0.012 ms   | null                          | in 63.646 ms ± 1.495 ms      | in 133.304 ms ± 6.569 ms           | in 112.777 ms ± 0.584 ms           |
| 65.536 kB  | in 1.196 ms ± 0.019 ms   | null                          | in 159.71 ms ± 33.644 ms     | in 256.81 ms ± 0.677 ms            | in 224.499 ms ± 0.549 ms           |
| 131.072 kB | in 2.761 ms ± 0.032 ms   | null                          | in 258.427 ms ± 24.61 ms     | in 515.147 ms ± 1.611 ms           | in 441.465 ms ± 2.62 ms            |
| 262.144 kB | in 19.434 ms ± 14.549 ms | null                          | in 676.196 ms ± 48.959 ms    | in 1,300.461 ms ± 69.248 ms        | in 1,102.166 ms ± 106.86 ms        |
| 524.288 kB | in 10.971 ms ± 1.218 ms  | null                          | in 1,299.055 ms ± 52.823 ms  | in 2,335.266 ms ± 63.927 ms        | in 2,006.639 ms ± 110.118 ms       |
| 1.049 MB   | in 21.215 ms ± 4.705 ms  | null                          | in 2,545.103 ms ± 139.746 ms | in 4,609.38 ms ± 90.024 ms         | in 3,960.874 ms ± 152.793 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 19.079 ms ± 8.662 ms      | null                       | in 16.536 ms ± 6.549 ms      | in 18.416 ms ± 9.236 ms        | in 16.602 ms ± 4.927 ms        |
| 2 B        | in 13.013 ms ± 8.129 ms      | null                       | in 16.754 ms ± 8.046 ms      | in 17.515 ms ± 8.146 ms        | in 17.596 ms ± 4.128 ms        |
| 4 B        | in 15.675 ms ± 8.73 ms       | null                       | in 12.467 ms ± 2.846 ms      | in 16.959 ms ± 8.378 ms        | in 14.187 ms ± 3.854 ms        |
| 8 B        | in 15.2 ms ± 8.14 ms         | null                       | in 11.023 ms ± 1.423 ms      | in 15.042 ms ± 5.157 ms        | in 11.451 ms ± 1.375 ms        |
| 16 B       | in 13.445 ms ± 7.428 ms      | null                       | in 10.259 ms ± 0.841 ms      | in 14.782 ms ± 5.361 ms        | in 10.678 ms ± 1.203 ms        |
| 32 B       | in 8.327 ms ± 3.55 ms        | null                       | in 10.214 ms ± 0.723 ms      | in 16.071 ms ± 7.621 ms        | in 10.555 ms ± 1.12 ms         |
| 64 B       | in 7.88 ms ± 3.39 ms         | null                       | in 19.68 ms ± 1.718 ms       | in 27.273 ms ± 11.787 ms       | in 19.913 ms ± 1.282 ms        |
| 128 B      | in 6.673 ms ± 1.613 ms       | null                       | in 12.167 ms ± 2.694 ms      | in 14.103 ms ± 3.189 ms        | in 11.746 ms ± 1.583 ms        |
| 256 B      | in 7.706 ms ± 2.041 ms       | null                       | in 11.942 ms ± 0.961 ms      | in 15.917 ms ± 4.169 ms        | in 11.949 ms ± 1.403 ms        |
| 512 B      | in 12.848 ms ± 3.963 ms      | null                       | in 26.005 ms ± 2.221 ms      | in 30.3 ms ± 5.069 ms          | in 27.613 ms ± 2.354 ms        |
| 1.024 kB   | in 9.173 ms ± 1.938 ms       | null                       | in 15.015 ms ± 2.263 ms      | in 18.819 ms ± 3.839 ms        | in 15.371 ms ± 1.524 ms        |
| 2.048 kB   | in 13.152 ms ± 3.711 ms      | null                       | in 17.22 ms ± 1.262 ms       | in 31.796 ms ± 3.665 ms        | in 20.14 ms ± 1.265 ms         |
| 4.096 kB   | in 14.461 ms ± 1.797 ms      | null                       | in 25.057 ms ± 1.12 ms       | in 39.737 ms ± 2.41 ms         | in 30.667 ms ± 1.463 ms        |
| 8.192 kB   | in 25.89 ms ± 2.14 ms        | null                       | in 39.763 ms ± 1.234 ms      | in 61.455 ms ± 2.385 ms        | in 51.528 ms ± 1.268 ms        |
| 16.384 kB  | in 43.014 ms ± 2.929 ms      | null                       | in 77.712 ms ± 3.753 ms      | in 109.817 ms ± 1.94 ms        | in 99.923 ms ± 3.378 ms        |
| 32.768 kB  | in 68.357 ms ± 1.473 ms      | null                       | in 135.548 ms ± 2.811 ms     | in 210.818 ms ± 5.71 ms        | in 192.736 ms ± 8.681 ms       |
| 65.536 kB  | in 131.662 ms ± 2.109 ms     | null                       | in 288.431 ms ± 14.67 ms     | in 392.011 ms ± 5.27 ms        | in 354.352 ms ± 2.376 ms       |
| 131.072 kB | in 270.146 ms ± 22.367 ms    | null                       | in 749.445 ms ± 185.243 ms   | in 1,031.407 ms ± 156.421 ms   | in 981.144 ms ± 149.438 ms     |
| 262.144 kB | in 819.619 ms ± 136.983 ms   | null                       | in 1,605.653 ms ± 334.705 ms | in 2,152.596 ms ± 355.842 ms   | in 1,989.032 ms ± 267.13 ms    |
| 524.288 kB | in 1,340.483 ms ± 49.133 ms  | null                       | in 2,686.965 ms ± 206.594 ms | in 3,837.957 ms ± 202.212 ms   | in 3,572.606 ms ± 254.353 ms   |
| 1.049 MB   | in 2,627.048 ms ± 165.081 ms | null                       | in 5,095.319 ms ± 168.53 ms  | in 7,319.382 ms ± 250.11 ms    | in 7,088.668 ms ± 429.482 ms   |