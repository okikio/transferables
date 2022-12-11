# Chromium

## structuredClone (browser)

|            | hasTransferables        | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ----------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.28 ms ± 0.223 ms   | null                          | in 15.74 ms ± 10.987 ms    | in 5.92 ms ± 2.861 ms              | in 3.52 ms ± 0.194 ms              |
| 2 B        | in 0.08 ms ± 0.075 ms   | null                          | in 3.42 ms ± 0.312 ms      | in 4.42 ms ± 1.102 ms              | in 3.66 ms ± 0.233 ms              |
| 4 B        | in 0.1 ms ± now         | null                          | in 3.2 ms ± 0.179 ms       | in 3.5 ms ± 0.141 ms               | in 3.88 ms ± 0.172 ms              |
| 8 B        | in 0.14 ms ± 0.049 ms   | null                          | in 3.22 ms ± 0.133 ms      | in 4.08 ms ± 1.112 ms              | in 3.84 ms ± 0.677 ms              |
| 16 B       | in 0.18 ms ± 0.117 ms   | null                          | in 3.08 ms ± 0.098 ms      | in 4.68 ms ± 2.316 ms              | in 3.48 ms ± 0.133 ms              |
| 32 B       | in 0.06 ms ± 0.049 ms   | null                          | in 3.16 ms ± 0.102 ms      | in 3.72 ms ± 0.117 ms              | in 3.56 ms ± 0.15 ms               |
| 64 B       | in 0.1 ms ± 0.063 ms    | null                          | in 3.46 ms ± 0.575 ms      | in 3.88 ms ± 0.232 ms              | in 4.74 ms ± 2.037 ms              |
| 128 B      | in 0.1 ms ± 0.063 ms    | null                          | in 3.34 ms ± 0.12 ms       | in 4.9 ms ± 0.762 ms               | in 4.22 ms ± 0.147 ms              |
| 256 B      | in 0.04 ms ± 0.049 ms   | null                          | in 3.84 ms ± 0.372 ms      | in 5.46 ms ± 0.102 ms              | in 5.44 ms ± 0.48 ms               |
| 512 B      | in 0.06 ms ± 0.049 ms   | null                          | in 4.3 ms ± 0.268 ms       | in 9.9 ms ± 4.001 ms               | in 7.48 ms ± 0.147 ms              |
| 1.024 kB   | in 0.14 ms ± 0.102 ms   | null                          | in 6.12 ms ± 0.5 ms        | in 13.66 ms ± 1.176 ms             | in 12.64 ms ± 1.381 ms             |
| 2.048 kB   | in 0.16 ms ± 0.08 ms    | null                          | in 8.36 ms ± 0.546 ms      | in 21.54 ms ± 1.1 ms               | in 21.12 ms ± 1.638 ms             |
| 4.096 kB   | in 0.22 ms ± 0.147 ms   | null                          | in 13.56 ms ± 0.531 ms     | in 38.9 ms ± 0.704 ms              | in 36.86 ms ± 0.939 ms             |
| 8.192 kB   | in 0.18 ms ± 0.04 ms    | null                          | in 24.78 ms ± 0.331 ms     | in 78.46 ms ± 2.873 ms             | in 72.86 ms ± 2.05 ms              |
| 16.384 kB  | in 0.2 ms ± 0.063 ms    | null                          | in 46.54 ms ± 0.393 ms     | in 153.88 ms ± 4.963 ms            | in 141.26 ms ± 2.244 ms            |
| 32.768 kB  | in 1.12 ms ± 0.808 ms   | null                          | in 98.34 ms ± 2.678 ms     | in 306.74 ms ± 3.447 ms            | in 291.42 ms ± 9.793 ms            |
| 65.536 kB  | in 1 second ± 0.063 ms  | null                          | in 205 ms ± 10.169 ms      | in 648.14 ms ± 51.837 ms           | in 590.36 ms ± 20.915 ms           |
| 131.072 kB | in 14.66 ms ± 12.276 ms | null                          | in 437.26 ms ± 31.856 ms   | in 1,258.26 ms ± 25.449 ms         | in 1,190.62 ms ± 33.991 ms         |
| 262.144 kB | in 5.72 ms ± 1.127 ms   | null                          | in 937.78 ms ± 53.707 ms   | in 2,626.06 ms ± 72.277 ms         | in 2,424.76 ms ± 70.113 ms         |
| 524.288 kB | in 20.82 ms ± 12.466 ms | null                          | in 1,762.9 ms ± 37.698 ms  | in 5,110.2 ms ± 34.158 ms          | in 4,751.38 ms ± 41.527 ms         |
| 1.049 MB   | in 25.36 ms ± 10.374 ms | null                          | in 3,508.68 ms ± 84.148 ms | in 10,144.6 ms ± 176.155 ms        | in 9,475.98 ms ± 109.069 ms        |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 34.12 ms ± 28.291 ms    | in 13.26 ms ± 5.445 ms      | in 24.74 ms ± 6.301 ms      | in 64.84 ms ± 46.993 ms        | in 39.74 ms ± 30.941 ms        |
| 2 B        | in 9.16 ms ± 4.345 ms      | in 8.02 ms ± 4.222 ms       | in 37.48 ms ± 21.303 ms     | in 20.02 ms ± 12.838 ms        | in 13 ms ± 6.006 ms            |
| 4 B        | in 8.28 ms ± 4.991 ms      | in 19.06 ms ± 27.042 ms     | in 16.98 ms ± 12.528 ms     | in 12.44 ms ± 3.603 ms         | in 9.44 ms ± 1.074 ms          |
| 8 B        | in 6.16 ms ± 1.811 ms      | in 11.66 ms ± 12.656 ms     | in 9.86 ms ± 1.388 ms       | in 13.22 ms ± 9.554 ms         | in 8.4 ms ± 0.562 ms           |
| 16 B       | in 9.46 ms ± 7.826 ms      | in 12.56 ms ± 15.285 ms     | in 9.12 ms ± 0.662 ms       | in 10.64 ms ± 2.963 ms         | in 9.14 ms ± 1.83 ms           |
| 32 B       | in 13.34 ms ± 17.201 ms    | in 7.92 ms ± 7.471 ms       | in 10.6 ms ± 2.834 ms       | in 9.04 ms ± 0.935 ms          | in 8.8 ms ± 0.61 ms            |
| 64 B       | in 9.98 ms ± 8.741 ms      | in 6.22 ms ± 2.965 ms       | in 9.2 ms ± 1.018 ms        | in 10.12 ms ± 1.656 ms         | in 9.24 ms ± 0.398 ms          |
| 128 B      | in 8.82 ms ± 8.449 ms      | in 6.14 ms ± 3.297 ms       | in 9.44 ms ± 0.543 ms       | in 10.06 ms ± 0.731 ms         | in 10 ms ± 0.228 ms            |
| 256 B      | in 7.14 ms ± 4.593 ms      | in 5.94 ms ± 2.092 ms       | in 10.72 ms ± 1.314 ms      | in 11.88 ms ± 0.214 ms         | in 11.7 ms ± 0.607 ms          |
| 512 B      | in 5.3 ms ± 0.456 ms       | in 7.5 ms ± 2.422 ms        | in 10.88 ms ± 1.04 ms       | in 14.12 ms ± 0.306 ms         | in 14.3 ms ± 1.099 ms          |
| 1.024 kB   | in 7.5 ms ± 1.325 ms       | in 7.92 ms ± 1.867 ms       | in 16.3 ms ± 3.829 ms       | in 20.52 ms ± 0.306 ms         | in 20.24 ms ± 0.831 ms         |
| 2.048 kB   | in 10.08 ms ± 1.242 ms     | in 10.08 ms ± 0.591 ms      | in 19.06 ms ± 0.723 ms      | in 39.54 ms ± 3.322 ms         | in 32.16 ms ± 0.662 ms         |
| 4.096 kB   | in 21.34 ms ± 0.761 ms     | in 17.16 ms ± 2.333 ms      | in 38.68 ms ± 0.571 ms      | in 63.58 ms ± 3.848 ms         | in 55.1 ms ± 1.855 ms          |
| 8.192 kB   | in 34.8 ms ± 2.351 ms      | in 29.78 ms ± 1.663 ms      | in 60.42 ms ± 1.694 ms      | in 104.54 ms ± 1.758 ms        | in 96.94 ms ± 1.444 ms         |
| 16.384 kB  | in 52.06 ms ± 2.583 ms     | in 50.32 ms ± 0.534 ms      | in 98.38 ms ± 2.061 ms      | in 204.96 ms ± 7.529 ms        | in 192.24 ms ± 7.128 ms        |
| 32.768 kB  | in 103.9 ms ± 3.889 ms     | in 106.82 ms ± 2.122 ms     | in 211.84 ms ± 6.877 ms     | in 408.98 ms ± 3.173 ms        | in 385.06 ms ± 7.852 ms        |
| 65.536 kB  | in 213.84 ms ± 9.541 ms    | in 216.34 ms ± 4.568 ms     | in 414.7 ms ± 13.696 ms     | in 818.64 ms ± 8.693 ms        | in 808.32 ms ± 46.456 ms       |
| 131.072 kB | in 462.58 ms ± 28.194 ms   | in 462.4 ms ± 39.089 ms     | in 881.42 ms ± 54.229 ms    | in 1,706.1 ms ± 24.626 ms      | in 1,674.9 ms ± 51.104 ms      |
| 262.144 kB | in 957.32 ms ± 44.659 ms   | in 977.48 ms ± 26.611 ms    | in 1,793.06 ms ± 50.644 ms  | in 3,621.24 ms ± 137.169 ms    | in 3,315.58 ms ± 57.544 ms     |
| 524.288 kB | in 1,859.14 ms ± 98.79 ms  | in 1,936.56 ms ± 106.841 ms | in 3,706.62 ms ± 268.949 ms | in 6,976.94 ms ± 172.199 ms    | in 6,672.62 ms ± 215.234 ms    |
| 1.049 MB   | in 3,608.7 ms ± 170.038 ms | in 3,808.02 ms ± 244.161 ms | in 7,118.6 ms ± 272.525 ms  | in 13,793.22 ms ± 131.441 ms   | in 13,261.98 ms ± 306.932 ms   |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 75.42 ms ± 39.582 ms    | in 5.72 ms ± 0.9 ms        | in 7.4 ms ± 0.657 ms        | in 20.54 ms ± 6.582 ms         | in 24.52 ms ± 8.663 ms         |
| 2 B        | in 36.86 ms ± 34.187 ms    | in 5.24 ms ± 1.017 ms      | in 7 ms ± 1.565 ms          | in 22.64 ms ± 18.347 ms        | in 12.76 ms ± 3.008 ms         |
| 4 B        | in 32.28 ms ± 23.106 ms    | in 5.98 ms ± 1.946 ms      | in 6.96 ms ± 1.009 ms       | in 25.16 ms ± 11.305 ms        | in 13.86 ms ± 4.41 ms          |
| 8 B        | in 50.06 ms ± 26.552 ms    | in 4.12 ms ± 0.711 ms      | in 8.2 ms ± 2.558 ms        | in 17.82 ms ± 11.428 ms        | in 11.56 ms ± 3.194 ms         |
| 16 B       | in 57.2 ms ± 29.427 ms     | in 3.98 ms ± 0.471 ms      | in 9.32 ms ± 0.44 ms        | in 11.48 ms ± 2.951 ms         | in 15.56 ms ± 12.916 ms        |
| 32 B       | in 60.1 ms ± 47.356 ms     | in 4.24 ms ± 1.013 ms      | in 7.36 ms ± 1.972 ms       | in 9.86 ms ± 0.869 ms          | in 20.22 ms ± 11.894 ms        |
| 64 B       | in 52.02 ms ± 46.357 ms    | in 8.06 ms ± 1.687 ms      | in 7.42 ms ± 0.989 ms       | in 11.08 ms ± 1.267 ms         | in 14.86 ms ± 5.5 ms           |
| 128 B      | in 14.98 ms ± 8.423 ms     | in 5.18 ms ± 0.778 ms      | in 9.98 ms ± 1.395 ms       | in 11.52 ms ± 2.969 ms         | in 23.72 ms ± 17.232 ms        |
| 256 B      | in 15.24 ms ± 8.065 ms     | in 8.28 ms ± 1.361 ms      | in 9.14 ms ± 1.098 ms       | in 11.98 ms ± 2.121 ms         | in 11.78 ms ± 3.082 ms         |
| 512 B      | in 19.4 ms ± 13.237 ms     | in 5.32 ms ± 0.397 ms      | in 11.92 ms ± 1.614 ms      | in 14.12 ms ± 2.428 ms         | in 13.2 ms ± 1.933 ms          |
| 1.024 kB   | in 11.28 ms ± 5.98 ms      | in 7.1 ms ± 0.405 ms       | in 13.84 ms ± 2.253 ms      | in 19.24 ms ± 1.196 ms         | in 17.98 ms ± 1.462 ms         |
| 2.048 kB   | in 13.62 ms ± 4.842 ms     | in 9.82 ms ± 0.567 ms      | in 17.4 ms ± 1.352 ms       | in 31.66 ms ± 1.881 ms         | in 30.66 ms ± 2.914 ms         |
| 4.096 kB   | in 27.68 ms ± 9.098 ms     | in 16.16 ms ± 0.508 ms     | in 29.88 ms ± 1.806 ms      | in 56.3 ms ± 1.896 ms          | in 52.02 ms ± 2.387 ms         |
| 8.192 kB   | in 33.3 ms ± 1.828 ms      | in 26.98 ms ± 0.893 ms     | in 54.26 ms ± 2.6 ms        | in 106.62 ms ± 5.135 ms        | in 97.18 ms ± 3.384 ms         |
| 16.384 kB  | in 52.26 ms ± 1.235 ms     | in 51.4 ms ± 0.921 ms      | in 101.58 ms ± 2.291 ms     | in 205.58 ms ± 6.18 ms         | in 190.2 ms ± 6.799 ms         |
| 32.768 kB  | in 138.58 ms ± 62.056 ms   | in 110.4 ms ± 2.874 ms     | in 234.68 ms ± 19.732 ms    | in 397.92 ms ± 8.903 ms        | in 389.28 ms ± 13.72 ms        |
| 65.536 kB  | in 223.92 ms ± 18.558 ms   | in 267.88 ms ± 48.544 ms   | in 421.24 ms ± 8.175 ms     | in 804.26 ms ± 15.205 ms       | in 770.26 ms ± 5.641 ms        |
| 131.072 kB | in 462.72 ms ± 34.948 ms   | in 467 ms ± 29.627 ms      | in 868.94 ms ± 23.182 ms    | in 1,649.54 ms ± 37.568 ms     | in 1,547.08 ms ± 46.865 ms     |
| 262.144 kB | in 867.74 ms ± 27.876 ms   | in 895.64 ms ± 24.82 ms    | in 1,863.4 ms ± 54.167 ms   | in 3,268.8 ms ± 37.408 ms      | in 3,153.26 ms ± 44.055 ms     |
| 524.288 kB | in 1,737.4 ms ± 63.018 ms  | in 1,831.9 ms ± 55.387 ms  | in 3,585.86 ms ± 111.304 ms | in 6,546.04 ms ± 169.281 ms    | in 6,125.76 ms ± 52.054 ms     |
| 1.049 MB   | in 3,525.04 ms ± 69.712 ms | in 3,646.3 ms ± 78.811 ms  | in 7,033.68 ms ± 227.805 ms | in 12,979.7 ms ± 243.497 ms    | in 12,357.2 ms ± 343.691 ms    |