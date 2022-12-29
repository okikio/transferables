# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1 second ± 0.632 ms | null                          | in 4.6 ms ± 0.8 ms         | in 6.2 ms ± 2.04 ms                | in 4.8 ms ± 1.166 ms               |
| 2 B        | in 0.2 ms ± 0.4 ms     | null                          | in 4.6 ms ± 1.356 ms       | in 5.4 ms ± 1.625 ms               | in 7.4 ms ± 1.625 ms               |
| 4 B        | in 0.4 ms ± 0.49 ms    | null                          | in 4.8 ms ± 1.327 ms       | in 6.4 ms ± 1.2 ms                 | in 6 ms ± 1.673 ms                 |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 5.4 ms ± 0.49 ms        | in 6.2 ms ± 1.6 ms                 | in 9.8 ms ± 3.868 ms               |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 7.2 ms ± 1.47 ms        | in 6.8 ms ± 1.166 ms               | in 6.4 ms ± 1.625 ms               |
| 32 B       | in 0.4 ms ± 0.49 ms    | null                          | in 5.2 ms ± 0.748 ms       | in 6.8 ms ± 1.939 ms               | in 6.6 ms ± 1.356 ms               |
| 64 B       | in 0.2 ms ± 0.4 ms     | null                          | in 5.4 ms ± 1.2 ms         | in 7.2 ms ± 1.47 ms                | in 7.4 ms ± 1.96 ms                |
| 128 B      | in 0.6 ms ± 0.49 ms    | null                          | in 6.2 ms ± 2.713 ms       | in 9.4 ms ± 1.96 ms                | in 11.4 ms ± 3.826 ms              |
| 256 B      | now ± now              | null                          | in 7.4 ms ± 4.409 ms       | in 9.6 ms ± 1.744 ms               | in 9.4 ms ± 2.154 ms               |
| 512 B      | now ± now              | null                          | in 7.6 ms ± 1.96 ms        | in 13 ms ± 1.414 ms                | in 14.2 ms ± 0.98 ms               |
| 1.024 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 7.6 ms ± 1.2 ms         | in 19.6 ms ± 1.356 ms              | in 19.2 ms ± 1.166 ms              |
| 2.048 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 9.6 ms ± 1.02 ms        | in 31.2 ms ± 1.47 ms               | in 31.2 ms ± 1.166 ms              |
| 4.096 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 16.4 ms ± 3.878 ms      | in 56.6 ms ± 3.262 ms              | in 55.4 ms ± 0.49 ms               |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 18.4 ms ± 0.49 ms       | in 106.4 ms ± 3.262 ms             | in 106.6 ms ± 0.49 ms              |
| 16.384 kB  | in 0.2 ms ± 0.4 ms     | null                          | in 32.4 ms ± 0.49 ms       | in 205.6 ms ± 3.262 ms             | in 209.2 ms ± 1.166 ms             |
| 32.768 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 66.4 ms ± 3.262 ms      | in 404.6 ms ± 2.728 ms             | in 414.2 ms ± 1.72 ms              |
| 65.536 kB  | in 0.2 ms ± 0.4 ms     | null                          | in 117.8 ms ± 1.166 ms     | in 804.2 ms ± 3.816 ms             | in 823.6 ms ± 6.28 ms              |
| 131.072 kB | in 0.4 ms ± 0.8 ms     | null                          | in 236.4 ms ± 5.122 ms     | in 1,601.8 ms ± 3.97 ms            | in 1,641.8 ms ± 8.232 ms           |
| 262.144 kB | in 0.2 ms ± 0.4 ms     | null                          | in 461 ms ± 3.162 ms       | in 3,198 ms ± 9.757 ms             | in 3,274.6 ms ± 15.73 ms           |
| 524.288 kB | in 0.6 ms ± 0.49 ms    | null                          | in 917.2 ms ± 3.487 ms     | in 6,376 ms ± 3.742 ms             | in 6,544.6 ms ± 39.998 ms          |
| 1.049 MB   | in 0.4 ms ± 0.49 ms    | null                          | in 1,841 ms ± 26.691 ms    | in 12,777.8 ms ± 67.795 ms         | in 13,051.4 ms ± 37.248 ms         |

## MessageChannel (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 213.6 ms ± 123.224 ms  | in 7.2 ms ± 0.748 ms       | in 12.2 ms ± 1.166 ms      | in 235.4 ms ± 7.965 ms         | in 233.8 ms ± 6.969 ms         |
| 2 B        | in 6 ms ± 1.095 ms        | in 4.6 ms ± 1.02 ms        | in 16.4 ms ± 3.555 ms      | in 17.8 ms ± 1.72 ms           | in 18.8 ms ± 2.315 ms          |
| 4 B        | in 8.8 ms ± 1.6 ms        | in 4.8 ms ± 0.748 ms       | in 14.2 ms ± 4.665 ms      | in 17 ms ± 2.608 ms            | in 18.8 ms ± 2.638 ms          |
| 8 B        | in 6.8 ms ± 1.166 ms      | in 7.6 ms ± 2.417 ms       | in 15.2 ms ± 4.02 ms       | in 20 ms ± 2.366 ms            | in 22.2 ms ± 8.06 ms           |
| 16 B       | in 7.6 ms ± 1.2 ms        | in 8 ms ± 2.098 ms         | in 14.8 ms ± 4.354 ms      | in 17.2 ms ± 3.311 ms          | in 19 ms ± 4.69 ms             |
| 32 B       | in 6.8 ms ± 0.748 ms      | in 7.4 ms ± 1.356 ms       | in 15.8 ms ± 3.37 ms       | in 19.8 ms ± 3.37 ms           | in 18.2 ms ± 1.6 ms            |
| 64 B       | in 8 ms ± 2.757 ms        | in 11.8 ms ± 2.713 ms      | in 19.4 ms ± 5.886 ms      | in 18.4 ms ± 2.498 ms          | in 18.4 ms ± 1.96 ms           |
| 128 B      | in 5.8 ms ± 0.4 ms        | in 8.2 ms ± 3.187 ms       | in 17.6 ms ± 2.245 ms      | in 20.6 ms ± 2.577 ms          | in 22.6 ms ± 4.964 ms          |
| 256 B      | in 10.2 ms ± 5.075 ms     | in 13.2 ms ± 5.192 ms      | in 18.8 ms ± 2.482 ms      | in 22.2 ms ± 2.857 ms          | in 25.6 ms ± 5.004 ms          |
| 512 B      | in 7.8 ms ± 1.166 ms      | in 8.8 ms ± 1.939 ms       | in 21.6 ms ± 6.468 ms      | in 26 ms ± 3.521 ms            | in 31.2 ms ± 7.386 ms          |
| 1.024 kB   | in 8.4 ms ± 2.245 ms      | in 7.6 ms ± 0.49 ms        | in 23.4 ms ± 3.929 ms      | in 32.4 ms ± 3.137 ms          | in 37 ms ± 6.419 ms            |
| 2.048 kB   | in 9 ms ± 1.095 ms        | in 9 ms ± 1.095 ms         | in 26.8 ms ± 2.04 ms       | in 48 ms ± 1.414 ms            | in 52.4 ms ± 6.344 ms          |
| 4.096 kB   | in 13 ms ± 1.414 ms       | in 12.6 ms ± 1.02 ms       | in 36 ms ± 10.583 ms       | in 75.6 ms ± 2.871 ms          | in 76.2 ms ± 2.713 ms          |
| 8.192 kB   | in 22.6 ms ± 9.047 ms     | in 22.4 ms ± 9.33 ms       | in 49.2 ms ± 2.315 ms      | in 136.4 ms ± 2.653 ms         | in 150.4 ms ± 18.128 ms        |
| 16.384 kB  | in 36 ms ± 8.649 ms       | in 34.4 ms ± 2.871 ms      | in 80.8 ms ± 6.911 ms      | in 261.6 ms ± 12.371 ms        | in 259.6 ms ± 12.355 ms        |
| 32.768 kB  | in 54 ms ± 1.789 ms       | in 55.8 ms ± 0.748 ms      | in 148.2 ms ± 6.765 ms     | in 512.2 ms ± 43.956 ms        | in 547.2 ms ± 103.621 ms       |
| 65.536 kB  | in 112.2 ms ± 18.755 ms   | in 115.8 ms ± 10.722 ms    | in 271.8 ms ± 18.236 ms    | in 953.2 ms ± 24.194 ms        | in 972.2 ms ± 15.816 ms        |
| 131.072 kB | in 201.6 ms ± 19.765 ms   | in 208.2 ms ± 2.482 ms     | in 554.6 ms ± 63.358 ms    | in 1,924.2 ms ± 91.419 ms      | in 1,934 ms ± 32.261 ms        |
| 262.144 kB | in 476.4 ms ± 209.355 ms  | in 400.8 ms ± 7.521 ms     | in 1,015 ms ± 51.591 ms    | in 3,703.2 ms ± 77.117 ms      | in 3,890.6 ms ± 79.046 ms      |
| 524.288 kB | in 728 ms ± 30.133 ms     | in 797.6 ms ± 31.033 ms    | in 1,887 ms ± 19.829 ms    | in 7,485 ms ± 368.097 ms       | in 7,808.4 ms ± 312.019 ms     |
| 1.049 MB   | in 1,433.6 ms ± 63.086 ms | in 1,505.2 ms ± 21.958 ms  | in 3,816.4 ms ± 193.379 ms | in 14,575.4 ms ± 130.176 ms    | in 15,281.6 ms ± 154.297 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 115.8 ms ± 49.215 ms   | in 8.4 ms ± 1.96 ms        | in 15.8 ms ± 2.786 ms     | in 20.4 ms ± 6.888 ms          | in 14.6 ms ± 3.441 ms          |
| 2 B        | in 6.8 ms ± 4.534 ms      | in 13 ms ± 12.066 ms       | in 16.4 ms ± 3.774 ms     | in 17.8 ms ± 1.939 ms          | in 29.2 ms ± 18.605 ms         |
| 4 B        | in 3.8 ms ± 2.315 ms      | in 4 ms ± 1.414 ms         | in 18.6 ms ± 2.498 ms     | in 18.6 ms ± 1.855 ms          | in 24.2 ms ± 14.689 ms         |
| 8 B        | in 7.6 ms ± 3.323 ms      | in 4.6 ms ± 1.356 ms       | in 18.8 ms ± 2.638 ms     | in 16 ms ± 3.578 ms            | in 19.4 ms ± 1.744 ms          |
| 16 B       | in 8 ms ± 1.673 ms        | in 4.2 ms ± 0.98 ms        | in 21.4 ms ± 3.666 ms     | in 16.2 ms ± 1.47 ms           | in 20 ms ± 5.55 ms             |
| 32 B       | in 8.4 ms ± 3.72 ms       | in 4.6 ms ± 1.625 ms       | in 18.2 ms ± 2.857 ms     | in 14.4 ms ± 2.728 ms          | in 17.8 ms ± 5.192 ms          |
| 64 B       | in 8.6 ms ± 2.577 ms      | in 4.8 ms ± 1.47 ms        | in 14.8 ms ± 2.315 ms     | in 16.8 ms ± 2.315 ms          | in 16.8 ms ± 5.036 ms          |
| 128 B      | in 8 ms ± 5.621 ms        | in 4.8 ms ± 0.748 ms       | in 17.4 ms ± 1.744 ms     | in 16.2 ms ± 5.418 ms          | in 17 ms ± 1.265 ms            |
| 256 B      | in 18.4 ms ± 20.49 ms     | in 4.8 ms ± 1.47 ms        | in 16.4 ms ± 2.245 ms     | in 19 ms ± 2.28 ms             | in 18.4 ms ± 1.744 ms          |
| 512 B      | in 6 ms ± 1.414 ms        | in 4.8 ms ± 2.315 ms       | in 16 ms ± 3.899 ms       | in 20.4 ms ± 5.678 ms          | in 22.4 ms ± 2.8 ms            |
| 1.024 kB   | in 7.4 ms ± 3.007 ms      | in 5.6 ms ± 2.417 ms       | in 17.8 ms ± 1.833 ms     | in 27 ms ± 3.464 ms            | in 29.2 ms ± 1.47 ms           |
| 2.048 kB   | in 14.2 ms ± 21.461 ms    | in 6.8 ms ± 2.482 ms       | in 21 ms ± 1.897 ms       | in 42 ms ± 2.608 ms            | in 40.8 ms ± 3.816 ms          |
| 4.096 kB   | in 10 ms ± 3.406 ms       | in 10.4 ms ± 1.497 ms      | in 28 ms ± 1.789 ms       | in 63.8 ms ± 4.261 ms          | in 68.6 ms ± 3.611 ms          |
| 8.192 kB   | in 19.8 ms ± 19.692 ms    | in 14 ms ± 1.414 ms        | in 39 ms ± 3.347 ms       | in 115.6 ms ± 4.543 ms         | in 125.2 ms ± 17.058 ms        |
| 16.384 kB  | in 89.8 ms ± 122.138 ms   | in 24.8 ms ± 1.47 ms       | in 63.4 ms ± 3.878 ms     | in 218.8 ms ± 3.816 ms         | in 231 ms ± 17.239 ms          |
| 32.768 kB  | in 39.8 ms ± 2.993 ms     | in 48.6 ms ± 2.728 ms      | in 108.6 ms ± 3.137 ms    | in 427.8 ms ± 5.913 ms         | in 446.2 ms ± 11.531 ms        |
| 65.536 kB  | in 90 ms ± 20.11 ms       | in 91.2 ms ± 10.515 ms     | in 203.2 ms ± 6.615 ms    | in 845.2 ms ± 5.741 ms         | in 859.8 ms ± 8.447 ms         |
| 131.072 kB | in 161.6 ms ± 5.851 ms    | in 159.6 ms ± 3.929 ms     | in 402 ms ± 11.027 ms     | in 1,683 ms ± 17.193 ms        | in 1,683 ms ± 10.658 ms        |
| 262.144 kB | in 284.6 ms ± 10.837 ms   | in 322.2 ms ± 18.17 ms     | in 761.2 ms ± 8.424 ms    | in 3,303.8 ms ± 23.962 ms      | in 3,358.6 ms ± 33.945 ms      |
| 524.288 kB | in 558.6 ms ± 18.683 ms   | in 621 ms ± 22.786 ms      | in 1,490.2 ms ± 16.092 ms | in 6,556.8 ms ± 41.586 ms      | in 6,705.2 ms ± 92.014 ms      |
| 1.049 MB   | in 1,222.4 ms ± 45.977 ms | in 1,327.8 ms ± 54.238 ms  | in 3,100.8 ms ± 39.711 ms | in 13,323.2 ms ± 100.915 ms    | in 13,469.4 ms ± 196.389 ms    |