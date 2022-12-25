# Firefox

## structuredClone (browser)

|            | hasTransferables      | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | --------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1.2 ms ± 1.47 ms   | null                          | in 9.6 ms ± 2.728 ms       | in 8 ms ± 0.632 ms                 | in 8.6 ms ± 3.441 ms               |
| 2 B        | in 0.6 ms ± 0.49 ms   | null                          | in 7.2 ms ± 2.638 ms       | in 9 ms ± 3.633 ms                 | in 9.4 ms ± 2.332 ms               |
| 4 B        | in 0.4 ms ± 0.49 ms   | null                          | in 8.4 ms ± 3.382 ms       | in 9.2 ms ± 2.482 ms               | in 8.8 ms ± 2.638 ms               |
| 8 B        | in 0.2 ms ± 0.4 ms    | null                          | in 6.4 ms ± 1.497 ms       | in 8.2 ms ± 2.482 ms               | in 10.4 ms ± 5.463 ms              |
| 16 B       | in 0.4 ms ± 0.49 ms   | null                          | in 7 ms ± 2.28 ms          | in 8 ms ± 2.098 ms                 | in 9.2 ms ± 2.04 ms                |
| 32 B       | in 0.4 ms ± 0.49 ms   | null                          | in 6.4 ms ± 1.02 ms        | in 7.6 ms ± 1.02 ms                | in 8 ms ± 0.894 ms                 |
| 64 B       | in 0.8 ms ± 0.748 ms  | null                          | in 9.2 ms ± 3.868 ms       | in 11.2 ms ± 1.939 ms              | in 9.4 ms ± 1.356 ms               |
| 128 B      | in 0.4 ms ± 0.49 ms   | null                          | in 9 ms ± 2.757 ms         | in 14.2 ms ± 5.98 ms               | in 16 ms ± 6.325 ms                |
| 256 B      | in 0.6 ms ± 0.49 ms   | null                          | in 9.6 ms ± 3.323 ms       | in 13.8 ms ± 2.04 ms               | in 12.4 ms ± 1.744 ms              |
| 512 B      | in 0.2 ms ± 0.4 ms    | null                          | in 12.2 ms ± 4.261 ms      | in 19.2 ms ± 2.482 ms              | in 18 ms ± 2.966 ms                |
| 1.024 kB   | in 0.4 ms ± 0.49 ms   | null                          | in 12.6 ms ± 3.072 ms      | in 28.8 ms ± 3.655 ms              | in 26.2 ms ± 5.845 ms              |
| 2.048 kB   | in 0.4 ms ± 0.49 ms   | null                          | in 14.4 ms ± 3.666 ms      | in 48.2 ms ± 2.857 ms              | in 39.8 ms ± 1.6 ms                |
| 4.096 kB   | in 0.4 ms ± 0.49 ms   | null                          | in 15.6 ms ± 1.855 ms      | in 88 ms ± 7.043 ms                | in 71 ms ± 3.899 ms                |
| 8.192 kB   | in 0.4 ms ± 0.49 ms   | null                          | in 21.8 ms ± 1.166 ms      | in 161.6 ms ± 3.441 ms             | in 133.2 ms ± 5.776 ms             |
| 16.384 kB  | in 1.2 ms ± 0.748 ms  | null                          | in 37.4 ms ± 1.625 ms      | in 311.8 ms ± 18.203 ms            | in 261.6 ms ± 6.468 ms             |
| 32.768 kB  | in 1 second ± now     | null                          | in 71 ms ± 4.69 ms         | in 638.2 ms ± 22.613 ms            | in 526 ms ± 26.405 ms              |
| 65.536 kB  | in 1.4 ms ± 0.49 ms   | null                          | in 137.8 ms ± 3.868 ms     | in 1,205 ms ± 36.894 ms            | in 1,045.6 ms ± 47.559 ms          |
| 131.072 kB | in 3 ms ± 0.632 ms    | null                          | in 278.8 ms ± 12.983 ms    | in 2,404.2 ms ± 69.058 ms          | in 2,061.6 ms ± 20.48 ms           |
| 262.144 kB | in 5.8 ms ± 0.4 ms    | null                          | in 598.6 ms ± 72.583 ms    | in 4,874.8 ms ± 93.393 ms          | in 4,044.4 ms ± 65.607 ms          |
| 524.288 kB | in 9.2 ms ± 0.4 ms    | null                          | in 1,121.4 ms ± 51.247 ms  | in 9,894 ms ± 292.845 ms           | in 8,208.6 ms ± 186.046 ms         |
| 1.049 MB   | in 17.4 ms ± 3.007 ms | null                          | in 2,171.6 ms ± 80.343 ms  | in 19,707 ms ± 344.416 ms          | in 16,606.8 ms ± 265.836 ms        |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 274.4 ms ± 134.507 ms   | in 13.4 ms ± 1.497 ms      | in 26 ms ± 5.177 ms        | in 300.6 ms ± 12.175 ms        | in 304.4 ms ± 16.007 ms        |
| 2 B        | in 14.6 ms ± 1.855 ms      | in 11 ms ± 1.549 ms        | in 35.8 ms ± 13.497 ms     | in 30.6 ms ± 3.007 ms          | in 35 ms ± 5.657 ms            |
| 4 B        | in 17.4 ms ± 5.987 ms      | in 20.4 ms ± 10.575 ms     | in 35.2 ms ± 10.666 ms     | in 37.4 ms ± 5.389 ms          | in 35.4 ms ± 6.184 ms          |
| 8 B        | in 20 ms ± 5.55 ms         | in 20.2 ms ± 7.167 ms      | in 34.6 ms ± 4.758 ms      | in 37 ms ± 4.69 ms             | in 46.2 ms ± 12.106 ms         |
| 16 B       | in 17 ms ± 5.831 ms        | in 23.8 ms ± 16.774 ms     | in 32.4 ms ± 8.98 ms       | in 37.2 ms ± 7.194 ms          | in 43.2 ms ± 7.222 ms          |
| 32 B       | in 15.8 ms ± 2.135 ms      | in 19 ms ± 7.874 ms        | in 35.2 ms ± 8.035 ms      | in 39.4 ms ± 11.482 ms         | in 44.4 ms ± 9.069 ms          |
| 64 B       | in 43 ms ± 40.66 ms        | in 15.8 ms ± 4.261 ms      | in 35.8 ms ± 12.968 ms     | in 35.8 ms ± 3.429 ms          | in 49.8 ms ± 14.372 ms         |
| 128 B      | in 19.8 ms ± 8.75 ms       | in 14.4 ms ± 1.497 ms      | in 52.6 ms ± 12.532 ms     | in 39.6 ms ± 4.317 ms          | in 44.6 ms ± 14.403 ms         |
| 256 B      | in 16 ms ± 3.033 ms        | in 15.6 ms ± 2.8 ms        | in 47.8 ms ± 12.352 ms     | in 39.6 ms ± 3.2 ms            | in 47.2 ms ± 19.994 ms         |
| 512 B      | in 20 ms ± 6.986 ms        | in 16.6 ms ± 3.382 ms      | in 53 ms ± 20.327 ms       | in 46.6 ms ± 3.499 ms          | in 53.6 ms ± 10.538 ms         |
| 1.024 kB   | in 17.8 ms ± 1.327 ms      | in 20.2 ms ± 4.622 ms      | in 48 ms ± 16.912 ms       | in 58.8 ms ± 6.306 ms          | in 57.4 ms ± 9.831 ms          |
| 2.048 kB   | in 26.6 ms ± 9.457 ms      | in 40.4 ms ± 35.274 ms     | in 60.8 ms ± 20.498 ms     | in 113.8 ms ± 54.58 ms         | in 87.4 ms ± 7.915 ms          |
| 4.096 kB   | in 38.4 ms ± 19.886 ms     | in 63 ms ± 59.151 ms       | in 65.2 ms ± 16.424 ms     | in 134.4 ms ± 15.028 ms        | in 132 ms ± 7.642 ms           |
| 8.192 kB   | in 48.4 ms ± 8.452 ms      | in 65.8 ms ± 50.764 ms     | in 96.2 ms ± 18.038 ms     | in 244 ms ± 31.578 ms          | in 212.2 ms ± 4.534 ms         |
| 16.384 kB  | in 66.4 ms ± 6.711 ms      | in 68.2 ms ± 2.926 ms      | in 138.6 ms ± 17.716 ms    | in 463 ms ± 81.031 ms          | in 394.8 ms ± 21.591 ms        |
| 32.768 kB  | in 118.4 ms ± 12.225 ms    | in 128.4 ms ± 10.855 ms    | in 234 ms ± 21.457 ms      | in 832 ms ± 87.116 ms          | in 761.8 ms ± 56.581 ms        |
| 65.536 kB  | in 209.2 ms ± 4.915 ms     | in 232.4 ms ± 19.012 ms    | in 425.8 ms ± 36.13 ms     | in 1,649.8 ms ± 241.324 ms     | in 1,445.2 ms ± 90.87 ms       |
| 131.072 kB | in 396.2 ms ± 27.095 ms    | in 433.6 ms ± 21.001 ms    | in 814.4 ms ± 67.42 ms     | in 3,045.6 ms ± 33.98 ms       | in 2,768.4 ms ± 56.408 ms      |
| 262.144 kB | in 827.6 ms ± 91.576 ms    | in 1,098 ms ± 248.645 ms   | in 1,454.4 ms ± 40.825 ms  | in 6,158.8 ms ± 400.831 ms     | in 5,642.2 ms ± 356.503 ms     |
| 524.288 kB | in 1,435.4 ms ± 46.932 ms  | in 1,559.4 ms ± 45.495 ms  | in 2,874.2 ms ± 102.689 ms | in 11,760.2 ms ± 241.096 ms    | in 10,606.2 ms ± 281.853 ms    |
| 1.049 MB   | in 2,917.6 ms ± 150.512 ms | in 3,220.8 ms ± 363.154 ms | in 5,718 ms ± 206.127 ms   | in 23,524 ms ± 699.52 ms       | in 21,396.2 ms ± 1,010.678 ms  |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)     | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | -------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 147.4 ms ± 44.202 ms   | in 19 ms ± 3.347 ms        | in 29 ms ± 4.858 ms        | in 32 ms ± 3.098 ms            | in 36.8 ms ± 16.774 ms         |
| 2 B        | in 18.2 ms ± 3.763 ms     | in 18 ms ± 6.693 ms        | in 31.8 ms ± 8.352 ms      | in 34.6 ms ± 4.454 ms          | in 30.8 ms ± 4.118 ms          |
| 4 B        | in 21 ms ± 6.033 ms       | in 18.6 ms ± 2.653 ms      | in 36 ms ± 2.28 ms         | in 27.2 ms ± 4.308 ms          | in 57.6 ms ± 56.123 ms         |
| 8 B        | in 22.6 ms ± 6.829 ms     | in 14.6 ms ± 2.332 ms      | in 35.6 ms ± 5.276 ms      | in 33.4 ms ± 4.128 ms          | in 34.6 ms ± 2.577 ms          |
| 16 B       | in 26.4 ms ± 10.131 ms    | in 22.2 ms ± 16.534 ms     | in 33 ms ± 3.742 ms        | in 31.8 ms ± 2.786 ms          | in 29.2 ms ± 6.911 ms          |
| 32 B       | in 19.8 ms ± 4.956 ms     | in 16 ms ± 4.099 ms        | in 32.4 ms ± 6.621 ms      | in 29.4 ms ± 4.317 ms          | in 34.4 ms ± 6.151 ms          |
| 64 B       | in 18.8 ms ± 4.622 ms     | in 20.4 ms ± 4.363 ms      | in 36 ms ± 5.367 ms        | in 31.8 ms ± 8.01 ms           | in 33.2 ms ± 2.135 ms          |
| 128 B      | in 26.8 ms ± 10.361 ms    | in 14.8 ms ± 3.487 ms      | in 38 ms ± 5.177 ms        | in 33 ms ± 9.295 ms            | in 36 ms ± 4.336 ms            |
| 256 B      | in 25.4 ms ± 7.144 ms     | in 17.2 ms ± 3.37 ms       | in 37.2 ms ± 7.782 ms      | in 40.2 ms ± 5.036 ms          | in 37.4 ms ± 2.653 ms          |
| 512 B      | in 24.2 ms ± 7.73 ms      | in 24.2 ms ± 21.17 ms      | in 35.6 ms ± 6.119 ms      | in 46 ms ± 4.98 ms             | in 43.6 ms ± 3.499 ms          |
| 1.024 kB   | in 28.6 ms ± 5.886 ms     | in 28 ms ± 23.143 ms       | in 38.2 ms ± 5.6 ms        | in 54.4 ms ± 6.591 ms          | in 49 ms ± 4.195 ms            |
| 2.048 kB   | in 22 ms ± 5.06 ms        | in 42 ms ± 38.058 ms       | in 42.2 ms ± 6.431 ms      | in 77.8 ms ± 7.386 ms          | in 67.6 ms ± 3.826 ms          |
| 4.096 kB   | in 26.8 ms ± 5.381 ms     | in 35.2 ms ± 20.469 ms     | in 52.2 ms ± 3.97 ms       | in 119 ms ± 5.06 ms            | in 101.6 ms ± 10.131 ms        |
| 8.192 kB   | in 40.2 ms ± 5.231 ms     | in 57.4 ms ± 25.742 ms     | in 70.4 ms ± 3.878 ms      | in 203.8 ms ± 12.303 ms        | in 180.2 ms ± 7.277 ms         |
| 16.384 kB  | in 57 ms ± 6.899 ms       | in 69.6 ms ± 16.836 ms     | in 102.6 ms ± 5.535 ms     | in 370.2 ms ± 16.69 ms         | in 309.6 ms ± 6.888 ms         |
| 32.768 kB  | in 97.6 ms ± 8.593 ms     | in 96 ms ± 6.723 ms        | in 174.2 ms ± 7.626 ms     | in 710.6 ms ± 42.093 ms        | in 611.4 ms ± 22.177 ms        |
| 65.536 kB  | in 169.4 ms ± 15.081 ms   | in 161.8 ms ± 10.186 ms    | in 309.6 ms ± 13.078 ms    | in 1,377.2 ms ± 49.483 ms      | in 1,183.8 ms ± 33.961 ms      |
| 131.072 kB | in 400.6 ms ± 167.382 ms  | in 301.6 ms ± 9.992 ms     | in 615.2 ms ± 23.112 ms    | in 2,659.4 ms ± 92.718 ms      | in 2,274.8 ms ± 82.101 ms      |
| 262.144 kB | in 619.6 ms ± 34.115 ms   | in 600.8 ms ± 22.569 ms    | in 1,190.8 ms ± 60.819 ms  | in 5,301 ms ± 160.973 ms       | in 4,488.4 ms ± 79.575 ms      |
| 524.288 kB | in 1,128.8 ms ± 37.429 ms | in 1,219.2 ms ± 47.174 ms  | in 2,280.4 ms ± 52.248 ms  | in 10,339.4 ms ± 106.95 ms     | in 9,043.4 ms ± 317.903 ms     |
| 1.049 MB   | in 2,341.2 ms ± 64.409 ms | in 2,449.2 ms ± 47.814 ms  | in 4,685.8 ms ± 108.748 ms | in 21,162.4 ms ± 571.095 ms    | in 18,687.2 ms ± 550.385 ms    |