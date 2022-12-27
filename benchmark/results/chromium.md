# Chromium

## structuredClone (browser)

|            | hasTransferables      | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | --------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.2 ms ± 0.155 ms  | null                          | in 5.52 ms ± 1.486 ms      | in 6.14 ms ± 1.44 ms               | in 4.66 ms ± 1.169 ms              |
| 2 B        | in 0.38 ms ± 0.462 ms | null                          | in 4.8 ms ± 0.959 ms       | in 5.56 ms ± 1.372 ms              | in 4.36 ms ± 0.671 ms              |
| 4 B        | in 0.32 ms ± 0.445 ms | null                          | in 4.44 ms ± 0.662 ms      | in 4.18 ms ± 0.306 ms              | in 4.18 ms ± 0.16 ms               |
| 8 B        | in 0.32 ms ± 0.496 ms | null                          | in 4.6 ms ± 1.255 ms       | in 8.62 ms ± 6.262 ms              | in 4.54 ms ± 1.263 ms              |
| 16 B       | in 0.36 ms ± 0.422 ms | null                          | in 4.12 ms ± 0.708 ms      | in 4.06 ms ± 0.242 ms              | in 6.2 ms ± 4.216 ms               |
| 32 B       | in 0.1 ms ± 0.063 ms  | null                          | in 3.84 ms ± 0.48 ms       | in 4.38 ms ± 0.87 ms               | in 4.4 ms ± 0.607 ms               |
| 64 B       | in 0.38 ms ± 0.462 ms | null                          | in 4.1 ms ± 0.593 ms       | in 3.86 ms ± 0.233 ms              | in 5.58 ms ± 2.807 ms              |
| 128 B      | in 0.16 ms ± 0.08 ms  | null                          | in 4.18 ms ± 0.611 ms      | in 5.76 ms ± 3.335 ms              | in 4.42 ms ± 0.402 ms              |
| 256 B      | in 0.06 ms ± 0.049 ms | null                          | in 4.08 ms ± 0.466 ms      | in 5.62 ms ± 1.513 ms              | in 6.98 ms ± 4.183 ms              |
| 512 B      | in 0.28 ms ± 0.412 ms | null                          | in 5.62 ms ± 1.388 ms      | in 6.1 ms ± 0.506 ms               | in 6.56 ms ± 0.811 ms              |
| 1.024 kB   | in 0.34 ms ± 0.383 ms | null                          | in 6.32 ms ± 0.624 ms      | in 9.66 ms ± 2.331 ms              | in 9.06 ms ± 0.531 ms              |
| 2.048 kB   | in 0.1 ms ± 0.063 ms  | null                          | in 8.86 ms ± 0.356 ms      | in 14.02 ms ± 0.92 ms              | in 14.48 ms ± 0.847 ms             |
| 4.096 kB   | in 0.08 ms ± 0.075 ms | null                          | in 14.3 ms ± 0.616 ms      | in 23.28 ms ± 0.44 ms              | in 26.08 ms ± 2.15 ms              |
| 8.192 kB   | in 0.16 ms ± 0.136 ms | null                          | in 26.06 ms ± 1.513 ms     | in 44.22 ms ± 2.517 ms             | in 47.02 ms ± 1.646 ms             |
| 16.384 kB  | in 0.12 ms ± 0.04 ms  | null                          | in 47.54 ms ± 0.821 ms     | in 84.26 ms ± 0.857 ms             | in 90.04 ms ± 1.462 ms             |
| 32.768 kB  | in 0.08 ms ± 0.04 ms  | null                          | in 107.86 ms ± 12.394 ms   | in 176.48 ms ± 0.823 ms            | in 189.3 ms ± 6.007 ms             |
| 65.536 kB  | in 0.1 ms ± now       | null                          | in 210.2 ms ± 6.649 ms     | in 361.22 ms ± 12.105 ms           | in 391.28 ms ± 14.614 ms           |
| 131.072 kB | in 0.72 ms ± 0.73 ms  | null                          | in 463.8 ms ± 37.28 ms     | in 705.78 ms ± 4.309 ms            | in 764.18 ms ± 34.323 ms           |
| 262.144 kB | in 0.42 ms ± 0.542 ms | null                          | in 928.54 ms ± 42.679 ms   | in 1,491.1 ms ± 30.811 ms          | in 1,596.02 ms ± 38.235 ms         |
| 524.288 kB | in 0.14 ms ± 0.049 ms | null                          | in 1,792.22 ms ± 12.971 ms | in 2,984.5 ms ± 76.224 ms          | in 3,149.8 ms ± 84.659 ms          |
| 1.049 MB   | in 0.18 ms ± 0.04 ms  | null                          | in 3,529.8 ms ± 38.795 ms  | in 5,822.96 ms ± 52.022 ms         | in 6,235.64 ms ± 75.552 ms         |

## MessageChannel (browser)

|            | hasTransferables            | postMessage (no transfers)  | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | --------------------------- | --------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 39.26 ms ± 39.771 ms     | in 17.08 ms ± 8.537 ms      | in 29.8 ms ± 14.824 ms      | in 39.8 ms ± 14.154 ms         | in 60.42 ms ± 29.669 ms        |
| 2 B        | in 12.2 ms ± 6.616 ms       | in 16.54 ms ± 7.886 ms      | in 29.76 ms ± 16.465 ms     | in 42 ms ± 37.557 ms           | in 25.38 ms ± 19.056 ms        |
| 4 B        | in 15.14 ms ± 9.012 ms      | in 19.86 ms ± 15.657 ms     | in 9.24 ms ± 0.824 ms       | in 13.98 ms ± 8.293 ms         | in 17.1 ms ± 5.744 ms          |
| 8 B        | in 21.14 ms ± 24.389 ms     | in 5.32 ms ± 1.151 ms       | in 10.16 ms ± 1.115 ms      | in 9.9 ms ± 1.452 ms           | in 16.06 ms ± 6.56 ms          |
| 16 B       | in 9.9 ms ± 5.286 ms        | in 15.34 ms ± 18.336 ms     | in 9.02 ms ± 0.818 ms       | in 11.58 ms ± 3.533 ms         | in 9.04 ms ± 0.671 ms          |
| 32 B       | in 14.98 ms ± 12.301 ms     | in 5.26 ms ± 0.136 ms       | in 10.1 ms ± 2.291 ms       | in 8.88 ms ± 0.271 ms          | in 9.48 ms ± 0.911 ms          |
| 64 B       | in 14.34 ms ± 11.768 ms     | in 4.86 ms ± 0.585 ms       | in 9.34 ms ± 0.7 ms         | in 9.78 ms ± 1.148 ms          | in 9.56 ms ± 0.909 ms          |
| 128 B      | in 16.78 ms ± 10.872 ms     | in 7.3 ms ± 5.118 ms        | in 9.78 ms ± 1.551 ms       | in 9.64 ms ± 0.504 ms          | in 10.76 ms ± 1.138 ms         |
| 256 B      | in 31.64 ms ± 36.676 ms     | in 5.64 ms ± 0.543 ms       | in 10.7 ms ± 1.022 ms       | in 10.98 ms ± 0.913 ms         | in 11.84 ms ± 1.758 ms         |
| 512 B      | in 14.72 ms ± 7.56 ms       | in 5.94 ms ± 0.55 ms        | in 11.88 ms ± 1.102 ms      | in 13.28 ms ± 0.833 ms         | in 13.18 ms ± 0.553 ms         |
| 1.024 kB   | in 14.62 ms ± 8.312 ms      | in 9.7 ms ± 2.642 ms        | in 17.08 ms ± 4.036 ms      | in 18 ms ± 1.521 ms            | in 17.9 ms ± 1.503 ms          |
| 2.048 kB   | in 17 ms ± 12.436 ms        | in 10.64 ms ± 0.488 ms      | in 20.64 ms ± 2.106 ms      | in 26.44 ms ± 1.702 ms         | in 26.28 ms ± 0.991 ms         |
| 4.096 kB   | in 18.68 ms ± 3.183 ms      | in 16.4 ms ± 0.559 ms       | in 38.98 ms ± 2.004 ms      | in 49.94 ms ± 2.176 ms         | in 49.38 ms ± 1.103 ms         |
| 8.192 kB   | in 29.74 ms ± 2.21 ms       | in 28.94 ms ± 1.331 ms      | in 62.28 ms ± 2.76 ms       | in 83.98 ms ± 2.876 ms         | in 80.12 ms ± 1.687 ms         |
| 16.384 kB  | in 52.88 ms ± 1.692 ms      | in 53.2 ms ± 1.523 ms       | in 101.22 ms ± 1.639 ms     | in 151.24 ms ± 7.964 ms        | in 141.28 ms ± 5.902 ms        |
| 32.768 kB  | in 114.88 ms ± 10.274 ms    | in 111.68 ms ± 5.021 ms     | in 207.64 ms ± 0.845 ms     | in 295.72 ms ± 12.701 ms       | in 279.88 ms ± 0.763 ms        |
| 65.536 kB  | in 210.72 ms ± 5.686 ms     | in 216.34 ms ± 0.948 ms     | in 425.04 ms ± 11.475 ms    | in 587.96 ms ± 9.965 ms        | in 562.42 ms ± 2.271 ms        |
| 131.072 kB | in 504.02 ms ± 43.878 ms    | in 474.78 ms ± 47.857 ms    | in 921.1 ms ± 29.044 ms     | in 1,221.54 ms ± 28.4 ms       | in 1,216.64 ms ± 57.563 ms     |
| 262.144 kB | in 968.14 ms ± 70.888 ms    | in 1,002.08 ms ± 58.328 ms  | in 1,884.1 ms ± 79.102 ms   | in 2,597.16 ms ± 80.129 ms     | in 2,535.46 ms ± 98.496 ms     |
| 524.288 kB | in 1,881.28 ms ± 142.04 ms  | in 1,983.5 ms ± 123.154 ms  | in 3,772.08 ms ± 187.397 ms | in 5,016 ms ± 115.608 ms       | in 5,033.7 ms ± 98.248 ms      |
| 1.049 MB   | in 3,671.64 ms ± 183.411 ms | in 3,883.28 ms ± 221.657 ms | in 7,594.3 ms ± 484.41 ms   | in 9,998.18 ms ± 224.372 ms    | in 9,826.96 ms ± 240.502 ms    |

## Worker (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)      | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | --------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 115.52 ms ± 52.867 ms   | in 6.88 ms ± 1.046 ms      | in 7.26 ms ± 0.92 ms        | in 17.8 ms ± 5.658 ms          | in 17.9 ms ± 2.26 ms           |
| 2 B        | in 49.18 ms ± 25.983 ms    | in 5.18 ms ± 1.75 ms       | in 8 ms ± 1.313 ms          | in 11.34 ms ± 1.067 ms         | in 16.72 ms ± 3.223 ms         |
| 4 B        | in 54.04 ms ± 29.884 ms    | in 5.28 ms ± 1.243 ms      | in 7.32 ms ± 0.719 ms       | in 14.86 ms ± 9.131 ms         | in 20.54 ms ± 8.055 ms         |
| 8 B        | in 65.98 ms ± 34.035 ms    | in 4.98 ms ± 0.821 ms      | in 7.8 ms ± 0.921 ms        | in 8.98 ms ± 1.804 ms          | in 12.06 ms ± 3.096 ms         |
| 16 B       | in 61.2 ms ± 42.406 ms     | in 4.28 ms ± 0.783 ms      | in 9.2 ms ± 1.591 ms        | in 14.4 ms ± 3.954 ms          | in 14.48 ms ± 6.335 ms         |
| 32 B       | in 18.94 ms ± 14.089 ms    | in 4.76 ms ± 1.318 ms      | in 7.72 ms ± 0.915 ms       | in 10.74 ms ± 1.839 ms         | in 9.38 ms ± 0.906 ms          |
| 64 B       | in 8.88 ms ± 6.286 ms      | in 6.58 ms ± 0.749 ms      | in 8.1 ms ± 0.97 ms         | in 11.08 ms ± 1.83 ms          | in 11.68 ms ± 1.585 ms         |
| 128 B      | in 15.36 ms ± 12.084 ms    | in 4.88 ms ± 0.778 ms      | in 10.22 ms ± 1.629 ms      | in 9 ms ± 1.421 ms             | in 10.72 ms ± 2.59 ms          |
| 256 B      | in 10.04 ms ± 5.479 ms     | in 5.82 ms ± 0.956 ms      | in 9 ms ± 1 second          | in 10.08 ms ± 1.873 ms         | in 11.24 ms ± 3.34 ms          |
| 512 B      | in 29.6 ms ± 23.18 ms      | in 5.92 ms ± 0.574 ms      | in 11.16 ms ± 1.426 ms      | in 11.18 ms ± 0.747 ms         | in 11.78 ms ± 0.736 ms         |
| 1.024 kB   | in 11.7 ms ± 3.824 ms      | in 7.28 ms ± 0.556 ms      | in 13.76 ms ± 1.868 ms      | in 15.92 ms ± 1.651 ms         | in 15.88 ms ± 1.661 ms         |
| 2.048 kB   | in 13.9 ms ± 4.858 ms      | in 10.56 ms ± 1.337 ms     | in 18.06 ms ± 0.761 ms      | in 23.18 ms ± 1.68 ms          | in 24.6 ms ± 2.882 ms          |
| 4.096 kB   | in 37.48 ms ± 18.199 ms    | in 16.74 ms ± 0.997 ms     | in 30.62 ms ± 1.532 ms      | in 38.7 ms ± 1.09 ms           | in 38.72 ms ± 1.317 ms         |
| 8.192 kB   | in 38.54 ms ± 10.651 ms    | in 28.02 ms ± 1.771 ms     | in 55.84 ms ± 2.896 ms      | in 71.46 ms ± 3.775 ms         | in 68.5 ms ± 1.51 ms           |
| 16.384 kB  | in 58.72 ms ± 9.894 ms     | in 53.96 ms ± 1.131 ms     | in 101.34 ms ± 1.362 ms     | in 135.58 ms ± 2.371 ms        | in 137.24 ms ± 12.401 ms       |
| 32.768 kB  | in 128.26 ms ± 41.174 ms   | in 110.94 ms ± 0.869 ms    | in 233.86 ms ± 21.677 ms    | in 281.08 ms ± 8.164 ms        | in 273.26 ms ± 7.305 ms        |
| 65.536 kB  | in 221.8 ms ± 11.593 ms    | in 269.34 ms ± 29.041 ms   | in 449.68 ms ± 17.27 ms     | in 586.26 ms ± 24.67 ms        | in 571.12 ms ± 6.914 ms        |
| 131.072 kB | in 450.16 ms ± 6.373 ms    | in 511.06 ms ± 33.917 ms   | in 897.74 ms ± 30.171 ms    | in 1,176.78 ms ± 19.617 ms     | in 1,155.56 ms ± 39.482 ms     |
| 262.144 kB | in 914.82 ms ± 28.067 ms   | in 939.56 ms ± 29.617 ms   | in 1,862.36 ms ± 69.182 ms  | in 2,430.3 ms ± 49.714 ms      | in 2,309.36 ms ± 51.919 ms     |
| 524.288 kB | in 1,801.2 ms ± 76.305 ms  | in 1,861.02 ms ± 47.214 ms | in 3,654.02 ms ± 93.522 ms  | in 4,756 ms ± 96.034 ms        | in 4,532.96 ms ± 56.784 ms     |
| 1.049 MB   | in 3,514.88 ms ± 31.667 ms | in 3,702.84 ms ± 13.063 ms | in 7,562.92 ms ± 329.077 ms | in 9,694.32 ms ± 342.629 ms    | in 9,324.84 ms ± 250.339 ms    |