# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.8 ms ± 1.6 ms     | null                          | in 9.8 ms ± 3.868 ms       | in 8.4 ms ± 1.497 ms               | in 7.8 ms ± 1.72 ms                |
| 2 B        | in 0.2 ms ± 0.4 ms     | null                          | in 6.8 ms ± 1.166 ms       | in 10.4 ms ± 4.758 ms              | in 9.2 ms ± 2.638 ms               |
| 4 B        | in 1 second ± 0.894 ms | null                          | in 8.4 ms ± 3.007 ms       | in 9 ms ± 2.757 ms                 | in 9.2 ms ± 2.638 ms               |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 12.6 ms ± 2.332 ms      | in 12.2 ms ± 4.02 ms               | in 16.2 ms ± 5.492 ms              |
| 16 B       | in 0.6 ms ± 0.49 ms    | null                          | in 12.8 ms ± 3.655 ms      | in 14.6 ms ± 1.02 ms               | in 11.6 ms ± 2.728 ms              |
| 32 B       | in 0.6 ms ± 0.8 ms     | null                          | in 9 ms ± 1.897 ms         | in 11.2 ms ± 1.72 ms               | in 10.6 ms ± 2.417 ms              |
| 64 B       | in 0.8 ms ± 1.166 ms   | null                          | in 8 ms ± 3.033 ms         | in 11.6 ms ± 2.871 ms              | in 11.6 ms ± 3.2 ms                |
| 128 B      | in 0.6 ms ± 0.49 ms    | null                          | in 14 ms ± 5.762 ms        | in 14.4 ms ± 4.587 ms              | in 21.4 ms ± 16.978 ms             |
| 256 B      | in 0.6 ms ± 0.49 ms    | null                          | in 11.6 ms ± 1.744 ms      | in 14.4 ms ± 4.224 ms              | in 15.4 ms ± 2.939 ms              |
| 512 B      | in 0.6 ms ± 0.49 ms    | null                          | in 8.6 ms ± 1.855 ms       | in 16.4 ms ± 3.555 ms              | in 16.6 ms ± 1.855 ms              |
| 1.024 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 10.4 ms ± 1.855 ms      | in 24 ms ± 2.608 ms                | in 25.2 ms ± 2.561 ms              |
| 2.048 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 14 ms ± 3.899 ms        | in 41.4 ms ± 1.2 ms                | in 40.8 ms ± 1.72 ms               |
| 4.096 kB   | in 0.8 ms ± 1.166 ms   | null                          | in 15.2 ms ± 1.327 ms      | in 77.6 ms ± 3.137 ms              | in 75 ms ± 0.632 ms                |
| 8.192 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 25.2 ms ± 2.04 ms       | in 144.6 ms ± 6.119 ms             | in 146.4 ms ± 5.919 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 47.4 ms ± 5.643 ms      | in 284.4 ms ± 7.658 ms             | in 280 ms ± 11.832 ms              |
| 32.768 kB  | in 1 second ± now      | null                          | in 87 ms ± 6.481 ms        | in 558.6 ms ± 19.438 ms            | in 566.6 ms ± 11.218 ms            |
| 65.536 kB  | in 0.6 ms ± 0.49 ms    | null                          | in 155.8 ms ± 4.578 ms     | in 1,076.6 ms ± 6.917 ms           | in 1,098.8 ms ± 6.675 ms           |
| 131.072 kB | in 0.8 ms ± 0.748 ms   | null                          | in 304 ms ± 13.342 ms      | in 2,185.2 ms ± 77.803 ms          | in 2,198.4 ms ± 25.35 ms           |
| 262.144 kB | in 0.6 ms ± 0.49 ms    | null                          | in 609 ms ± 6.293 ms       | in 4,368.4 ms ± 182.253 ms         | in 4,373 ms ± 80.541 ms            |
| 524.288 kB | in 0.2 ms ± 0.4 ms     | null                          | in 1,204.8 ms ± 21.711 ms  | in 8,692.8 ms ± 118.944 ms         | in 8,825 ms ± 267.509 ms           |
| 1.049 MB   | now ± now              | null                          | in 2,437.2 ms ± 57.08 ms   | in 17,243 ms ± 303.404 ms          | in 17,301.8 ms ± 292.807 ms        |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 240.2 ms ± 112.987 ms   | in 14.4 ms ± 2.498 ms      | in 27 ms ± 4.517 ms        | in 323.4 ms ± 18.051 ms        | in 415.8 ms ± 191.672 ms       |
| 2 B        | in 13 ms ± 3.633 ms        | in 17.2 ms ± 7.082 ms      | in 32 ms ± 3.521 ms        | in 31 ms ± 3.406 ms            | in 33.6 ms ± 7.255 ms          |
| 4 B        | in 14 ms ± 2.366 ms        | in 20.6 ms ± 5.643 ms      | in 31.8 ms ± 4.75 ms       | in 31 ms ± 1.414 ms            | in 35 ms ± 10.218 ms           |
| 8 B        | in 13.6 ms ± 4.079 ms      | in 18.6 ms ± 3.826 ms      | in 31.6 ms ± 2.871 ms      | in 33.6 ms ± 5.953 ms          | in 34 ms ± 1.897 ms            |
| 16 B       | in 12.6 ms ± 3.499 ms      | in 19.8 ms ± 4.167 ms      | in 41.2 ms ± 9.411 ms      | in 39.4 ms ± 8.777 ms          | in 41.8 ms ± 12.544 ms         |
| 32 B       | in 13.8 ms ± 4.261 ms      | in 17.2 ms ± 4.956 ms      | in 36.2 ms ± 5.115 ms      | in 42.8 ms ± 7.6 ms            | in 35.6 ms ± 3.826 ms          |
| 64 B       | in 15.6 ms ± 5.783 ms      | in 20.8 ms ± 4.069 ms      | in 39.8 ms ± 5.879 ms      | in 40.2 ms ± 9.064 ms          | in 37.6 ms ± 5.643 ms          |
| 128 B      | in 18.4 ms ± 5.161 ms      | in 19.2 ms ± 7.277 ms      | in 51.6 ms ± 22.879 ms     | in 39.6 ms ± 8.686 ms          | in 39 ms ± 7.155 ms            |
| 256 B      | in 19.4 ms ± 4.176 ms      | in 15.4 ms ± 1.855 ms      | in 41.4 ms ± 11.758 ms     | in 57.2 ms ± 23.112 ms         | in 39.8 ms ± 6.615 ms          |
| 512 B      | in 19.4 ms ± 3.774 ms      | in 19.4 ms ± 2.245 ms      | in 38.6 ms ± 5.919 ms      | in 48.8 ms ± 9.239 ms          | in 48.4 ms ± 5.004 ms          |
| 1.024 kB   | in 18.4 ms ± 2.059 ms      | in 20.2 ms ± 2.638 ms      | in 37.8 ms ± 4.707 ms      | in 58.6 ms ± 9.265 ms          | in 65.2 ms ± 9.261 ms          |
| 2.048 kB   | in 45.8 ms ± 42.827 ms     | in 28.2 ms ± 7.332 ms      | in 49.6 ms ± 13.396 ms     | in 76.8 ms ± 6.306 ms          | in 88.8 ms ± 7.73 ms           |
| 4.096 kB   | in 30.8 ms ± 2.786 ms      | in 43.4 ms ± 23.406 ms     | in 61.6 ms ± 8.913 ms      | in 119.6 ms ± 8.732 ms         | in 134.4 ms ± 11.465 ms        |
| 8.192 kB   | in 39.8 ms ± 3.187 ms      | in 46 ms ± 1.673 ms        | in 103.6 ms ± 17.246 ms    | in 197.8 ms ± 13.075 ms        | in 226.6 ms ± 14.009 ms        |
| 16.384 kB  | in 72.8 ms ± 13.167 ms     | in 79 ms ± 17.181 ms       | in 137.4 ms ± 7.392 ms     | in 380.6 ms ± 7.552 ms         | in 408.2 ms ± 25.903 ms        |
| 32.768 kB  | in 141.8 ms ± 31.77 ms     | in 133.6 ms ± 10.781 ms    | in 258.6 ms ± 18.938 ms    | in 718 ms ± 22.091 ms          | in 806.8 ms ± 49.813 ms        |
| 65.536 kB  | in 256 ms ± 51.935 ms      | in 260.8 ms ± 42.073 ms    | in 463.4 ms ± 26.043 ms    | in 1,389.6 ms ± 38.785 ms      | in 1,504 ms ± 88.073 ms        |
| 131.072 kB | in 423 ms ± 8.124 ms       | in 448 ms ± 20.288 ms      | in 1,006.4 ms ± 320.582 ms | in 2,860 ms ± 143.328 ms       | in 2,948 ms ± 135.039 ms       |
| 262.144 kB | in 810.4 ms ± 31.014 ms    | in 926.2 ms ± 58.41 ms     | in 1,632.4 ms ± 100.023 ms | in 5,632.8 ms ± 307.75 ms      | in 5,886.8 ms ± 323.406 ms     |
| 524.288 kB | in 1,640.8 ms ± 56.51 ms   | in 1,798.2 ms ± 188.89 ms  | in 3,236.6 ms ± 162.516 ms | in 10,840.4 ms ± 195.561 ms    | in 11,150.2 ms ± 477.62 ms     |
| 1.049 MB   | in 3,246.6 ms ± 178.466 ms | in 3,309.6 ms ± 111.186 ms | in 6,088 ms ± 159.472 ms   | in 21,674 ms ± 214.395 ms      | in 22,006.6 ms ± 291.625 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 147 ms ± 45.255 ms     | in 17.6 ms ± 5.463 ms      | in 26.8 ms ± 6.177 ms     | in 34.6 ms ± 10.651 ms         | in 31.8 ms ± 4.534 ms          |
| 2 B        | in 28.6 ms ± 9.156 ms     | in 21.8 ms ± 4.996 ms      | in 22.6 ms ± 3.98 ms      | in 36.2 ms ± 9.411 ms          | in 35.2 ms ± 8.28 ms           |
| 4 B        | in 23.2 ms ± 8.998 ms     | in 16 ms ± 4.604 ms        | in 27 ms ± 6.325 ms       | in 35.6 ms ± 9.178 ms          | in 32.2 ms ± 4.445 ms          |
| 8 B        | in 22 ms ± 8.198 ms       | in 18 ms ± 2.098 ms        | in 32 ms ± 7.925 ms       | in 46.4 ms ± 26.927 ms         | in 39.2 ms ± 4.622 ms          |
| 16 B       | in 25 ms ± 7.874 ms       | in 15.8 ms ± 3.97 ms       | in 27.8 ms ± 11.053 ms    | in 33.2 ms ± 5.706 ms          | in 33.4 ms ± 4.271 ms          |
| 32 B       | in 24.4 ms ± 9.135 ms     | in 20 ms ± 2.683 ms        | in 31.2 ms ± 9.282 ms     | in 35.8 ms ± 9.786 ms          | in 37.4 ms ± 7.003 ms          |
| 64 B       | in 24 ms ± 2.757 ms       | in 17 ms ± 3.95 ms         | in 30.4 ms ± 3.929 ms     | in 42.6 ms ± 26.477 ms         | in 35.6 ms ± 9.394 ms          |
| 128 B      | in 27.6 ms ± 3.878 ms     | in 15.6 ms ± 2.417 ms      | in 40 ms ± 10.315 ms      | in 41.4 ms ± 7.446 ms          | in 41 ms ± 8.877 ms            |
| 256 B      | in 22.8 ms ± 4.792 ms     | in 16 ms ± 4.775 ms        | in 36.6 ms ± 7.283 ms     | in 49.4 ms ± 5.953 ms          | in 49.6 ms ± 17.13 ms          |
| 512 B      | in 25.6 ms ± 7.144 ms     | in 21.8 ms ± 10.245 ms     | in 37.6 ms ± 8.777 ms     | in 48.2 ms ± 10.572 ms         | in 48.8 ms ± 8.134 ms          |
| 1.024 kB   | in 25.2 ms ± 6.882 ms     | in 28.6 ms ± 19.252 ms     | in 40.4 ms ± 4.224 ms     | in 50.8 ms ± 3.868 ms          | in 52.2 ms ± 5.564 ms          |
| 2.048 kB   | in 29 ms ± 5.254 ms       | in 36.2 ms ± 28.972 ms     | in 41.8 ms ± 7.167 ms     | in 73 ms ± 6.164 ms            | in 75.6 ms ± 2.577 ms          |
| 4.096 kB   | in 34.6 ms ± 6.086 ms     | in 37.6 ms ± 15.756 ms     | in 55.2 ms ± 5.636 ms     | in 121 ms ± 20.995 ms          | in 113.6 ms ± 6.917 ms         |
| 8.192 kB   | in 44 ms ± 11.933 ms      | in 53.2 ms ± 22.587 ms     | in 76.4 ms ± 6.312 ms     | in 187.2 ms ± 12.335 ms        | in 190.6 ms ± 12.878 ms        |
| 16.384 kB  | in 69.6 ms ± 14.988 ms    | in 64.2 ms ± 10.048 ms     | in 108.8 ms ± 3.709 ms    | in 339 ms ± 18.687 ms          | in 347.4 ms ± 13.396 ms        |
| 32.768 kB  | in 101.4 ms ± 2.653 ms    | in 104.2 ms ± 11.285 ms    | in 180.6 ms ± 13.17 ms    | in 652.6 ms ± 40.342 ms        | in 652 ms ± 15.697 ms          |
| 65.536 kB  | in 179.4 ms ± 9.243 ms    | in 203.4 ms ± 26.234 ms    | in 339.6 ms ± 10.012 ms   | in 1,262.2 ms ± 27.52 ms       | in 1,255.8 ms ± 30.734 ms      |
| 131.072 kB | in 358.8 ms ± 4.622 ms    | in 364 ms ± 28.51 ms       | in 678.4 ms ± 16.788 ms   | in 2,445 ms ± 77.193 ms        | in 2,504.2 ms ± 55.506 ms      |
| 262.144 kB | in 683.4 ms ± 18.173 ms   | in 679.4 ms ± 26.066 ms    | in 1,277.2 ms ± 33.018 ms | in 4,848 ms ± 66.453 ms        | in 4,919 ms ± 66.221 ms        |
| 524.288 kB | in 1,258.8 ms ± 19.146 ms | in 1,337.6 ms ± 38.661 ms  | in 2,475.4 ms ± 61.069 ms | in 9,666.6 ms ± 137.632 ms     | in 9,818.2 ms ± 46.499 ms      |
| 1.049 MB   | in 2,545.4 ms ± 57.611 ms | in 2,700.2 ms ± 41.935 ms  | in 5,062.8 ms ± 71.594 ms | in 19,518.4 ms ± 313.826 ms    | in 19,760.4 ms ± 318.059 ms    |