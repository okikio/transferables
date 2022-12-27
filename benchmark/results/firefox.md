# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1 second ± 1.095 ms | null                          | in 6.2 ms ± 1.327 ms       | in 7.6 ms ± 0.8 ms                 | in 7.4 ms ± 2.417 ms               |
| 2 B        | now ± now              | null                          | in 5.6 ms ± 0.8 ms         | in 6.2 ms ± 1.327 ms               | in 6.6 ms ± 0.8 ms                 |
| 4 B        | in 0.4 ms ± 0.49 ms    | null                          | in 6.6 ms ± 1.497 ms       | in 6.6 ms ± 0.8 ms                 | in 10.4 ms ± 4.587 ms              |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 7.4 ms ± 3.262 ms       | in 7.2 ms ± 2.561 ms               | in 10.6 ms ± 4.587 ms              |
| 16 B       | in 0.8 ms ± 0.4 ms     | null                          | in 9 ms ± 4.775 ms         | in 8 ms ± 2.28 ms                  | in 8 ms ± 2.449 ms                 |
| 32 B       | in 0.2 ms ± 0.4 ms     | null                          | in 7.4 ms ± 2.154 ms       | in 8.2 ms ± 2.638 ms               | in 7.6 ms ± 2.577 ms               |
| 64 B       | in 0.4 ms ± 0.49 ms    | null                          | in 8 ms ± 3.162 ms         | in 8.4 ms ± 3.441 ms               | in 9.6 ms ± 1.855 ms               |
| 128 B      | in 0.4 ms ± 0.49 ms    | null                          | in 8 ms ± 2.28 ms          | in 11.8 ms ± 4.167 ms              | in 17.2 ms ± 14.497 ms             |
| 256 B      | in 0.6 ms ± 0.49 ms    | null                          | in 7.6 ms ± 3.007 ms       | in 11.4 ms ± 2.417 ms              | in 11.2 ms ± 2.482 ms              |
| 512 B      | in 0.4 ms ± 0.49 ms    | null                          | in 7.6 ms ± 1.02 ms        | in 17.4 ms ± 4.03 ms               | in 15 ms ± 2.608 ms                |
| 1.024 kB   | in 0.8 ms ± 0.4 ms     | null                          | in 10 ms ± 3.033 ms        | in 22.8 ms ± 1.6 ms                | in 23.6 ms ± 3.382 ms              |
| 2.048 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 10.4 ms ± 2.245 ms      | in 42.8 ms ± 8.841 ms              | in 39.2 ms ± 3.37 ms               |
| 4.096 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 18.4 ms ± 4.63 ms       | in 70.8 ms ± 4.534 ms              | in 68.8 ms ± 2.482 ms              |
| 8.192 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 22.6 ms ± 2.059 ms      | in 135.6 ms ± 6.56 ms              | in 130.6 ms ± 8.089 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 39.6 ms ± 3.611 ms      | in 270.4 ms ± 12.909 ms            | in 255 ms ± 14.738 ms              |
| 32.768 kB  | in 0.2 ms ± 0.4 ms     | null                          | in 74.2 ms ± 5.231 ms      | in 509.6 ms ± 15.081 ms            | in 491 ms ± 16.31 ms               |
| 65.536 kB  | in 0.8 ms ± 0.4 ms     | null                          | in 136.6 ms ± 5.953 ms     | in 1,022.2 ms ± 22.516 ms          | in 972.8 ms ± 22.754 ms            |
| 131.072 kB | in 0.8 ms ± 0.4 ms     | null                          | in 267.4 ms ± 7.419 ms     | in 2,038.4 ms ± 60.089 ms          | in 1,927.8 ms ± 37.69 ms           |
| 262.144 kB | now ± now              | null                          | in 569 ms ± 76.063 ms      | in 4,002.6 ms ± 79.477 ms          | in 3,875.4 ms ± 73.56 ms           |
| 524.288 kB | in 0.2 ms ± 0.4 ms     | null                          | in 1,038 ms ± 18.45 ms     | in 7,946.8 ms ± 165.263 ms         | in 7,713.2 ms ± 111.021 ms         |
| 1.049 MB   | in 0.4 ms ± 0.49 ms    | null                          | in 2,073.2 ms ± 45.128 ms  | in 16,037.4 ms ± 301.747 ms        | in 15,440.8 ms ± 211.648 ms        |

## MessageChannel (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 256.2 ms ± 124.731 ms  | in 16.2 ms ± 5.269 ms      | in 25 ms ± 4.817 ms        | in 289 ms ± 13.342 ms          | in 288.6 ms ± 14.786 ms        |
| 2 B        | in 16.6 ms ± 5.314 ms     | in 16.6 ms ± 6.468 ms      | in 30 ms ± 9.381 ms        | in 31.4 ms ± 3.382 ms          | in 38.8 ms ± 13.761 ms         |
| 4 B        | in 17.2 ms ± 4.214 ms     | in 16.6 ms ± 6.248 ms      | in 31.2 ms ± 8.795 ms      | in 35 ms ± 12.442 ms           | in 34.8 ms ± 9.683 ms          |
| 8 B        | in 11.6 ms ± 3.072 ms     | in 19.2 ms ± 10.225 ms     | in 38.2 ms ± 11.788 ms     | in 35.2 ms ± 9.495 ms          | in 38.2 ms ± 6.794 ms          |
| 16 B       | in 13.8 ms ± 4.578 ms     | in 14.8 ms ± 4.02 ms       | in 33.4 ms ± 8.381 ms      | in 36.2 ms ± 9.152 ms          | in 37 ms ± 10.139 ms           |
| 32 B       | in 12.8 ms ± 4.956 ms     | in 15.8 ms ± 3.816 ms      | in 34.4 ms ± 10.781 ms     | in 43.6 ms ± 18.007 ms         | in 37.4 ms ± 6.888 ms          |
| 64 B       | in 13 ms ± 3.742 ms       | in 17.2 ms ± 8.06 ms       | in 32.8 ms ± 8.976 ms      | in 37.4 ms ± 8.089 ms          | in 35.4 ms ± 3.98 ms           |
| 128 B      | in 13.4 ms ± 3.382 ms     | in 21.6 ms ± 14.444 ms     | in 39.2 ms ± 11.652 ms     | in 40.4 ms ± 13.662 ms         | in 35.8 ms ± 6.794 ms          |
| 256 B      | in 15.4 ms ± 4.224 ms     | in 21 ms ± 5.621 ms        | in 35.2 ms ± 9.621 ms      | in 38.2 ms ± 7.44 ms           | in 36 ms ± 3.578 ms            |
| 512 B      | in 16.6 ms ± 3.441 ms     | in 21.8 ms ± 6.794 ms      | in 37 ms ± 10.198 ms       | in 46 ms ± 9.592 ms            | in 45.6 ms ± 3.774 ms          |
| 1.024 kB   | in 16.2 ms ± 2.638 ms     | in 22 ms ± 5.762 ms        | in 57.6 ms ± 28.821 ms     | in 53.6 ms ± 4.454 ms          | in 53.8 ms ± 4.792 ms          |
| 2.048 kB   | in 18.2 ms ± 3.544 ms     | in 22.8 ms ± 4.445 ms      | in 71.2 ms ± 29.116 ms     | in 75.4 ms ± 11.289 ms         | in 78 ms ± 7.043 ms            |
| 4.096 kB   | in 27.6 ms ± 4.454 ms     | in 29.6 ms ± 6.406 ms      | in 60.4 ms ± 12.371 ms     | in 112.4 ms ± 10.947 ms        | in 108.8 ms ± 9.086 ms         |
| 8.192 kB   | in 34.6 ms ± 3.929 ms     | in 46.4 ms ± 11.395 ms     | in 78.8 ms ± 9.432 ms      | in 187.2 ms ± 18.148 ms        | in 183.8 ms ± 5.418 ms         |
| 16.384 kB  | in 65.8 ms ± 8.256 ms     | in 68.6 ms ± 7.787 ms      | in 129 ms ± 6.132 ms       | in 356.2 ms ± 14.634 ms        | in 340.8 ms ± 8.232 ms         |
| 32.768 kB  | in 103.8 ms ± 11.161 ms   | in 114.6 ms ± 10.461 ms    | in 254.2 ms ± 56.005 ms    | in 659.4 ms ± 37.987 ms        | in 632 ms ± 20.347 ms          |
| 65.536 kB  | in 212.4 ms ± 17.806 ms   | in 219.6 ms ± 22.339 ms    | in 415.8 ms ± 36.405 ms    | in 1,304.8 ms ± 82.664 ms      | in 1,287 ms ± 76.082 ms        |
| 131.072 kB | in 388.4 ms ± 20.752 ms   | in 415.4 ms ± 39.067 ms    | in 766.8 ms ± 54.426 ms    | in 2,489.2 ms ± 109.678 ms     | in 2,413.4 ms ± 39.55 ms       |
| 262.144 kB | in 706.2 ms ± 16.928 ms   | in 758.6 ms ± 39.026 ms    | in 1,455 ms ± 127.945 ms   | in 5,246.2 ms ± 336.95 ms      | in 4,899 ms ± 160.367 ms       |
| 524.288 kB | in 1,429.2 ms ± 95.698 ms | in 1,476.2 ms ± 61.248 ms  | in 2,851.2 ms ± 381.163 ms | in 9,821.2 ms ± 271.175 ms     | in 9,771.8 ms ± 568.011 ms     |
| 1.049 MB   | in 2,933.6 ms ± 460.83 ms | in 2,913.8 ms ± 124.853 ms | in 5,339.6 ms ± 78.413 ms  | in 19,122.4 ms ± 455.1 ms      | in 18,858.8 ms ± 508.864 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 121.4 ms ± 38.04 ms    | in 16.2 ms ± 4.707 ms      | in 34.2 ms ± 8.773 ms     | in 29.2 ms ± 4.534 ms          | in 24.2 ms ± 3.37 ms           |
| 2 B        | in 12.4 ms ± 2.332 ms     | in 14.2 ms ± 4.707 ms      | in 27.4 ms ± 13.124 ms    | in 31.6 ms ± 2.871 ms          | in 36 ms ± 21.936 ms           |
| 4 B        | in 16.6 ms ± 1.625 ms     | in 13.2 ms ± 4.996 ms      | in 27 ms ± 6.356 ms       | in 26.4 ms ± 5.535 ms          | in 27.6 ms ± 6.437 ms          |
| 8 B        | in 16 ms ± 4.427 ms       | in 12.4 ms ± 3.72 ms       | in 26 ms ± 5.477 ms       | in 28.4 ms ± 6.621 ms          | in 30 ms ± 6.164 ms            |
| 16 B       | in 19.4 ms ± 2.939 ms     | in 11.4 ms ± 3.2 ms        | in 27.6 ms ± 5.851 ms     | in 27 ms ± 4.858 ms            | in 29 ms ± 4.05 ms             |
| 32 B       | in 17.6 ms ± 1.744 ms     | in 13.8 ms ± 2.04 ms       | in 29 ms ± 7.925 ms       | in 36.2 ms ± 11.268 ms         | in 33.4 ms ± 9.351 ms          |
| 64 B       | in 21.2 ms ± 6.969 ms     | in 13.2 ms ± 3.709 ms      | in 27.4 ms ± 3.499 ms     | in 30.4 ms ± 7.499 ms          | in 25.4 ms ± 5.748 ms          |
| 128 B      | in 17 ms ± 4.243 ms       | in 15 ms ± 4.899 ms        | in 35.8 ms ± 19.671 ms    | in 31.4 ms ± 5.004 ms          | in 27.8 ms ± 4.707 ms          |
| 256 B      | in 15.2 ms ± 3.124 ms     | in 12.4 ms ± 3.382 ms      | in 26.2 ms ± 4.261 ms     | in 36.2 ms ± 4.665 ms          | in 32.8 ms ± 6.94 ms           |
| 512 B      | in 17.6 ms ± 3.007 ms     | in 15.4 ms ± 5.499 ms      | in 37.6 ms ± 24.41 ms     | in 40.4 ms ± 3.072 ms          | in 38.8 ms ± 11.161 ms         |
| 1.024 kB   | in 18.8 ms ± 5.381 ms     | in 17 ms ± 4.05 ms         | in 39.8 ms ± 19.291 ms    | in 46.8 ms ± 3.311 ms          | in 58.4 ms ± 19.428 ms         |
| 2.048 kB   | in 18.8 ms ± 4.118 ms     | in 19.8 ms ± 2.857 ms      | in 36.2 ms ± 4.665 ms     | in 66.8 ms ± 5.845 ms          | in 68.4 ms ± 11.842 ms         |
| 4.096 kB   | in 27.6 ms ± 5.748 ms     | in 23.8 ms ± 2.926 ms      | in 51 ms ± 7.616 ms       | in 97.8 ms ± 4.118 ms          | in 101.6 ms ± 4.758 ms         |
| 8.192 kB   | in 36.6 ms ± 6.151 ms     | in 31.4 ms ± 4.587 ms      | in 73.2 ms ± 18.104 ms    | in 166.2 ms ± 8.681 ms         | in 160.2 ms ± 2.786 ms         |
| 16.384 kB  | in 66.2 ms ± 16.798 ms    | in 50 ms ± 5.831 ms        | in 123.6 ms ± 62.895 ms   | in 307.2 ms ± 12.734 ms        | in 297.6 ms ± 16.824 ms        |
| 32.768 kB  | in 98.4 ms ± 13.396 ms    | in 84.4 ms ± 1.855 ms      | in 157.2 ms ± 5.115 ms    | in 592 ms ± 16.346 ms          | in 548.8 ms ± 8.841 ms         |
| 65.536 kB  | in 147.8 ms ± 6.675 ms    | in 154.4 ms ± 4.409 ms     | in 289 ms ± 9.402 ms      | in 1,122.4 ms ± 22.205 ms      | in 1,091.8 ms ± 28.23 ms       |
| 131.072 kB | in 295.2 ms ± 13.556 ms   | in 283.8 ms ± 8.207 ms     | in 577.8 ms ± 24.078 ms   | in 2,174.8 ms ± 42.864 ms      | in 2,104 ms ± 56.558 ms        |
| 262.144 kB | in 561.4 ms ± 19.775 ms   | in 566.8 ms ± 14.824 ms    | in 1,108.8 ms ± 49.061 ms | in 4,284.4 ms ± 57.667 ms      | in 4,184.4 ms ± 62.771 ms      |
| 524.288 kB | in 1,062.8 ms ± 31.505 ms | in 1,118 ms ± 15.684 ms    | in 2,121 ms ± 72.075 ms   | in 8,523.8 ms ± 48.396 ms      | in 8,419.6 ms ± 83.323 ms      |
| 1.049 MB   | in 2,156.2 ms ± 27.213 ms | in 2,360.6 ms ± 118.958 ms | in 4,250 ms ± 33.365 ms   | in 17,250.2 ms ± 197.113 ms    | in 16,480.8 ms ± 189.595 ms    |