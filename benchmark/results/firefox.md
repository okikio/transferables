# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.8 ms ± 1.166 ms   | null                          | in 9.6 ms ± 3.774 ms       | in 9.8 ms ± 3.487 ms               | in 10.8 ms ± 3.919 ms              |
| 2 B        | in 1.6 ms ± 1.744 ms   | null                          | in 10.6 ms ± 4.224 ms      | in 11 ms ± 3.899 ms                | in 16.8 ms ± 7.521 ms              |
| 4 B        | now ± now              | null                          | in 10.4 ms ± 3.441 ms      | in 11.2 ms ± 4.214 ms              | in 11.8 ms ± 3.763 ms              |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 11.2 ms ± 4.167 ms      | in 11.8 ms ± 3.544 ms              | in 14 ms ± 4.147 ms                |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 9.4 ms ± 3.774 ms       | in 10 ms ± 2.898 ms                | in 10.2 ms ± 2.561 ms              |
| 32 B       | in 0.8 ms ± 0.748 ms   | null                          | in 11 ms ± 4.899 ms        | in 12.6 ms ± 4.224 ms              | in 10.4 ms ± 2.417 ms              |
| 64 B       | in 0.4 ms ± 0.49 ms    | null                          | in 8.8 ms ± 1.833 ms       | in 13.4 ms ± 5.426 ms              | in 9.8 ms ± 2.04 ms                |
| 128 B      | in 1.2 ms ± 0.98 ms    | null                          | in 11.6 ms ± 6.151 ms      | in 11.6 ms ± 1.855 ms              | in 15.6 ms ± 6.8 ms                |
| 256 B      | now ± now              | null                          | in 9.4 ms ± 2.577 ms       | in 19.6 ms ± 6.375 ms              | in 15 ms ± 3.521 ms                |
| 512 B      | in 0.2 ms ± 0.4 ms     | null                          | in 12.4 ms ± 4.587 ms      | in 21.6 ms ± 3.007 ms              | in 18.8 ms ± 3.6 ms                |
| 1.024 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 10.4 ms ± 4.499 ms      | in 30.6 ms ± 4.587 ms              | in 25.2 ms ± 3.187 ms              |
| 2.048 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 13.2 ms ± 3.709 ms      | in 49 ms ± 2.53 ms                 | in 39.4 ms ± 2.417 ms              |
| 4.096 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 15.4 ms ± 1.2 ms        | in 85.8 ms ± 4.75 ms               | in 72.4 ms ± 7.116 ms              |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 22.4 ms ± 1.855 ms      | in 157.4 ms ± 8.452 ms             | in 133.6 ms ± 11.182 ms            |
| 16.384 kB  | in 0.6 ms ± 0.49 ms    | null                          | in 39.8 ms ± 2.926 ms      | in 300 ms ± 11.781 ms              | in 250.2 ms ± 8.795 ms             |
| 32.768 kB  | in 1 second ± 0.632 ms | null                          | in 71.2 ms ± 5.528 ms      | in 584 ms ± 15.659 ms              | in 509.8 ms ± 33.961 ms            |
| 65.536 kB  | in 1.6 ms ± 0.49 ms    | null                          | in 140.8 ms ± 7.467 ms     | in 1,192.4 ms ± 49.273 ms          | in 993.6 ms ± 40.332 ms            |
| 131.072 kB | in 2.4 ms ± 0.49 ms    | null                          | in 272.8 ms ± 8.818 ms     | in 2,304.8 ms ± 60.38 ms           | in 1,976.6 ms ± 63.852 ms          |
| 262.144 kB | in 6 ms ± 2.098 ms     | null                          | in 529.6 ms ± 11.377 ms    | in 4,639.8 ms ± 127.797 ms         | in 3,897 ms ± 94.659 ms            |
| 524.288 kB | in 8.6 ms ± 0.49 ms    | null                          | in 1,055.2 ms ± 12.303 ms  | in 9,278.8 ms ± 159.988 ms         | in 7,743.4 ms ± 86.197 ms          |
| 1.049 MB   | in 17.4 ms ± 2.577 ms  | null                          | in 2,087.4 ms ± 36.159 ms  | in 18,600 ms ± 368.028 ms          | in 15,501.6 ms ± 141.702 ms        |

## MessageChannel (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 215.8 ms ± 102.572 ms  | in 12.6 ms ± 2.653 ms      | in 25.2 ms ± 4.445 ms      | in 298 ms ± 19.9 ms            | in 296.4 ms ± 15.474 ms        |
| 2 B        | in 13.2 ms ± 4.167 ms     | in 11 ms ± 3.033 ms        | in 32.8 ms ± 9.704 ms      | in 34.6 ms ± 6.651 ms          | in 35.6 ms ± 3.555 ms          |
| 4 B        | in 14.2 ms ± 4.308 ms     | in 13.4 ms ± 4.587 ms      | in 33.8 ms ± 10.225 ms     | in 32 ms ± 5.215 ms            | in 41.4 ms ± 7.446 ms          |
| 8 B        | in 12.6 ms ± 4.673 ms     | in 17.8 ms ± 4.833 ms      | in 33.2 ms ± 4.354 ms      | in 38.4 ms ± 9.851 ms          | in 36.4 ms ± 6.888 ms          |
| 16 B       | in 15 ms ± 3.633 ms       | in 14.4 ms ± 2.059 ms      | in 29.2 ms ± 3.544 ms      | in 36 ms ± 8.649 ms            | in 33.2 ms ± 4.445 ms          |
| 32 B       | in 19.4 ms ± 6.946 ms     | in 19.8 ms ± 7.139 ms      | in 27.2 ms ± 5.98 ms       | in 37.2 ms ± 5.307 ms          | in 34.2 ms ± 4.118 ms          |
| 64 B       | in 17.4 ms ± 4.317 ms     | in 25 ms ± 5.367 ms        | in 30.8 ms ± 6.242 ms      | in 40 ms ± 9.187 ms            | in 43.6 ms ± 13.544 ms         |
| 128 B      | in 17.8 ms ± 6.112 ms     | in 16.2 ms ± 5.075 ms      | in 33.4 ms ± 1.356 ms      | in 49 ms ± 21.457 ms           | in 40 ms ± 10.677 ms           |
| 256 B      | in 16.4 ms ± 2.577 ms     | in 15.6 ms ± 3.262 ms      | in 33 ms ± 5.02 ms         | in 37.8 ms ± 4.069 ms          | in 50.4 ms ± 22.606 ms         |
| 512 B      | in 15.4 ms ± 2.059 ms     | in 16 ms ± 1.414 ms        | in 37.4 ms ± 8.686 ms      | in 50.4 ms ± 8.405 ms          | in 49.2 ms ± 10.048 ms         |
| 1.024 kB   | in 15.6 ms ± 2.417 ms     | in 20.8 ms ± 3.124 ms      | in 41 ms ± 5.831 ms        | in 56.6 ms ± 9.583 ms          | in 60.2 ms ± 3.868 ms          |
| 2.048 kB   | in 22.6 ms ± 5.2 ms       | in 31 ms ± 11.225 ms       | in 43.2 ms ± 5.075 ms      | in 80.6 ms ± 8.015 ms          | in 79.2 ms ± 5.154 ms          |
| 4.096 kB   | in 58.4 ms ± 54.121 ms    | in 31.2 ms ± 8.085 ms      | in 53.4 ms ± 7.2 ms        | in 129.2 ms ± 17.325 ms        | in 117.6 ms ± 8.261 ms         |
| 8.192 kB   | in 101.2 ms ± 55.203 ms   | in 59.8 ms ± 38.804 ms     | in 78.8 ms ± 8.931 ms      | in 215.6 ms ± 20.373 ms        | in 185.8 ms ± 6.242 ms         |
| 16.384 kB  | in 61.2 ms ± 5.231 ms     | in 83.8 ms ± 18.027 ms     | in 117.6 ms ± 6.151 ms     | in 395.8 ms ± 28.812 ms        | in 344.4 ms ± 17.107 ms        |
| 32.768 kB  | in 109.2 ms ± 13.848 ms   | in 162.2 ms ± 67.541 ms    | in 216.6 ms ± 13.822 ms    | in 740.6 ms ± 30.051 ms        | in 669.8 ms ± 43.255 ms        |
| 65.536 kB  | in 390.4 ms ± 364.865 ms  | in 237.8 ms ± 52.845 ms    | in 391.6 ms ± 10.21 ms     | in 1,553 ms ± 163.003 ms       | in 1,455.4 ms ± 24.072 ms      |
| 131.072 kB | in 466.8 ms ± 165.384 ms  | in 389.6 ms ± 21.85 ms     | in 740.2 ms ± 30.169 ms    | in 2,912.8 ms ± 257.483 ms     | in 2,582.4 ms ± 46.539 ms      |
| 262.144 kB | in 756 ms ± 62.264 ms     | in 752.6 ms ± 24.426 ms    | in 1,423 ms ± 47.82 ms     | in 5,459.6 ms ± 184.296 ms     | in 5,029.2 ms ± 119.473 ms     |
| 524.288 kB | in 1,405 ms ± 60.342 ms   | in 1,444 ms ± 55.548 ms    | in 2,850 ms ± 85.727 ms    | in 10,718.6 ms ± 219.347 ms    | in 10,010.2 ms ± 140.188 ms    |
| 1.049 MB   | in 2,738.6 ms ± 63.364 ms | in 2,827.6 ms ± 129.906 ms | in 5,804.2 ms ± 363.905 ms | in 21,505 ms ± 368.513 ms      | in 19,671 ms ± 486.187 ms      |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 92.4 ms ± 45.916 ms    | in 19 ms ± 4.604 ms        | in 28.2 ms ± 9.368 ms     | in 30.8 ms ± 6.242 ms          | in 29.8 ms ± 3.655 ms          |
| 2 B        | in 18 ms ± 3.899 ms       | in 16.8 ms ± 3.37 ms       | in 24.2 ms ± 6.735 ms     | in 31.4 ms ± 9.002 ms          | in 31.6 ms ± 5.748 ms          |
| 4 B        | in 24.8 ms ± 7.859 ms     | in 20.4 ms ± 7.552 ms      | in 25.4 ms ± 6.974 ms     | in 31.8 ms ± 2.926 ms          | in 30.2 ms ± 6.969 ms          |
| 8 B        | in 24.2 ms ± 9.02 ms      | in 16 ms ± 2.449 ms        | in 25.4 ms ± 4.841 ms     | in 32.2 ms ± 5.344 ms          | in 30.2 ms ± 8.304 ms          |
| 16 B       | in 32 ms ± 7.294 ms       | in 15.8 ms ± 3.059 ms      | in 35.6 ms ± 12.986 ms    | in 31.8 ms ± 8.328 ms          | in 36.2 ms ± 14.006 ms         |
| 32 B       | in 22.4 ms ± 9.002 ms     | in 17.2 ms ± 6.013 ms      | in 28.6 ms ± 5.748 ms     | in 31.8 ms ± 4.792 ms          | in 30.4 ms ± 4.03 ms           |
| 64 B       | in 25.4 ms ± 11.482 ms    | in 17 ms ± 3.406 ms        | in 27.6 ms ± 4.63 ms      | in 31.4 ms ± 6.621 ms          | in 32.4 ms ± 5.987 ms          |
| 128 B      | in 27.4 ms ± 8.958 ms     | in 19.4 ms ± 8.639 ms      | in 32.6 ms ± 15.409 ms    | in 32.4 ms ± 6.151 ms          | in 38.8 ms ± 6.145 ms          |
| 256 B      | in 20.2 ms ± 4.707 ms     | in 20.4 ms ± 8.163 ms      | in 33.4 ms ± 9.972 ms     | in 38.4 ms ± 4.363 ms          | in 42.6 ms ± 4.964 ms          |
| 512 B      | in 19 ms ± 4.147 ms       | in 15.8 ms ± 3.868 ms      | in 37 ms ± 11.541 ms      | in 40.6 ms ± 3.441 ms          | in 41.4 ms ± 4.363 ms          |
| 1.024 kB   | in 21.2 ms ± 4.069 ms     | in 16 ms ± 4.147 ms        | in 36.4 ms ± 5.426 ms     | in 49.4 ms ± 5.748 ms          | in 49.2 ms ± 10.107 ms         |
| 2.048 kB   | in 24 ms ± 7.127 ms       | in 17.2 ms ± 2.135 ms      | in 38.4 ms ± 7.172 ms     | in 74.8 ms ± 5.269 ms          | in 78.2 ms ± 15.039 ms         |
| 4.096 kB   | in 28 ms ± 4.69 ms        | in 23 ms ± 1.789 ms        | in 48.6 ms ± 11.808 ms    | in 104.2 ms ± 7.305 ms         | in 104.4 ms ± 7.088 ms         |
| 8.192 kB   | in 37.6 ms ± 6.651 ms     | in 31.6 ms ± 4.841 ms      | in 63.2 ms ± 4.578 ms     | in 179.8 ms ± 9.368 ms         | in 170 ms ± 10.954 ms          |
| 16.384 kB  | in 62.4 ms ± 8.732 ms     | in 51.4 ms ± 2.332 ms      | in 97.8 ms ± 8.704 ms     | in 339.4 ms ± 8.732 ms         | in 309.2 ms ± 18.627 ms        |
| 32.768 kB  | in 92.6 ms ± 9.33 ms      | in 91 ms ± 9.381 ms        | in 164.4 ms ± 14.486 ms   | in 648.4 ms ± 14.291 ms        | in 587.4 ms ± 21.777 ms        |
| 65.536 kB  | in 164.4 ms ± 12.208 ms   | in 159.6 ms ± 5.463 ms     | in 283.8 ms ± 3.429 ms    | in 1,268.2 ms ± 41.658 ms      | in 1,107.6 ms ± 43.228 ms      |
| 131.072 kB | in 314.4 ms ± 13.094 ms   | in 302.8 ms ± 14.469 ms    | in 588 ms ± 30.653 ms     | in 2,497.8 ms ± 63.006 ms      | in 2,159.8 ms ± 69.049 ms      |
| 262.144 kB | in 573.8 ms ± 11.531 ms   | in 577.6 ms ± 25.943 ms    | in 1,094 ms ± 16.637 ms   | in 5,044 ms ± 83.575 ms        | in 4,346 ms ± 119.258 ms       |
| 524.288 kB | in 1,082 ms ± 41.526 ms   | in 1,164 ms ± 57.886 ms    | in 2,120.2 ms ± 40.355 ms | in 9,970.6 ms ± 332.525 ms     | in 8,580.6 ms ± 277.709 ms     |
| 1.049 MB   | in 2,284.8 ms ± 90.243 ms | in 2,317.4 ms ± 29.527 ms  | in 4,323.8 ms ± 34.609 ms | in 19,960.6 ms ± 533.576 ms    | in 16,952.6 ms ± 331.899 ms    |