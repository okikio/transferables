# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1 second ± 1.095 ms | null                          | in 5.8 ms ± 1.166 ms       | in 6.8 ms ± 1.72 ms                | in 5.4 ms ± 0.49 ms                |
| 2 B        | in 0.2 ms ± 0.4 ms     | null                          | in 5 ms ± 1.095 ms         | in 6.2 ms ± 2.04 ms                | in 6.6 ms ± 2.417 ms               |
| 4 B        | in 0.4 ms ± 0.49 ms    | null                          | in 5.2 ms ± 1.47 ms        | in 5.6 ms ± 2.245 ms               | in 8.6 ms ± 5.238 ms               |
| 8 B        | in 1 second ± 0.632 ms | null                          | in 5 ms ± 1.095 ms         | in 5.8 ms ± 1.166 ms               | in 10 ms ± 4.858 ms                |
| 16 B       | in 0.4 ms ± 0.49 ms    | null                          | in 7.8 ms ± 3.487 ms       | in 7 ms ± 2.28 ms                  | in 9 ms ± 2.966 ms                 |
| 32 B       | in 0.2 ms ± 0.4 ms     | null                          | in 7.4 ms ± 4.079 ms       | in 11.2 ms ± 5.269 ms              | in 11 ms ± 3.347 ms                |
| 64 B       | in 0.4 ms ± 0.49 ms    | null                          | in 8.6 ms ± 3.137 ms       | in 9.4 ms ± 2.8 ms                 | in 11.4 ms ± 3.007 ms              |
| 128 B      | in 0.6 ms ± 0.49 ms    | null                          | in 9.6 ms ± 4.964 ms       | in 10 ms ± 3.225 ms                | in 13.8 ms ± 7.679 ms              |
| 256 B      | in 0.2 ms ± 0.4 ms     | null                          | in 8.2 ms ± 2.315 ms       | in 11 ms ± 2 ms                    | in 11 ms ± 2.098 ms                |
| 512 B      | in 0.4 ms ± 0.49 ms    | null                          | in 6 ms ± 1.095 ms         | in 20.6 ms ± 2.871 ms              | in 15.6 ms ± 1.2 ms                |
| 1.024 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 9 ms ± 1.789 ms         | in 24.6 ms ± 2.577 ms              | in 22.8 ms ± 2.135 ms              |
| 2.048 kB   | in 0.8 ms ± 0.4 ms     | null                          | in 10.6 ms ± 1.497 ms      | in 39.6 ms ± 2.577 ms              | in 40.4 ms ± 5.463 ms              |
| 4.096 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 20 ms ± 4.195 ms        | in 71.6 ms ± 7.338 ms              | in 68.8 ms ± 2.227 ms              |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 23.2 ms ± 1.939 ms      | in 131 ms ± 5.692 ms               | in 131.4 ms ± 2.577 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 41.2 ms ± 1.72 ms       | in 251.2 ms ± 2.993 ms             | in 254.6 ms ± 2.728 ms             |
| 32.768 kB  | in 0.6 ms ± 0.49 ms    | null                          | in 83.4 ms ± 2.577 ms      | in 495.8 ms ± 2.638 ms             | in 503 ms ± 2.608 ms               |
| 65.536 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 146.2 ms ± 6.997 ms     | in 991.6 ms ± 4.409 ms             | in 1,004.6 ms ± 13.749 ms          |
| 131.072 kB | in 0.6 ms ± 0.49 ms    | null                          | in 281.8 ms ± 2.857 ms     | in 1,965.8 ms ± 2.926 ms           | in 1,990 ms ± 5.657 ms             |
| 262.144 kB | in 0.6 ms ± 0.49 ms    | null                          | in 568.2 ms ± 17.949 ms    | in 3,929 ms ± 18.044 ms            | in 3,976.2 ms ± 9.516 ms           |
| 524.288 kB | in 0.6 ms ± 0.49 ms    | null                          | in 1,107.4 ms ± 5.783 ms   | in 7,849 ms ± 51.233 ms            | in 7,911.8 ms ± 13.659 ms          |
| 1.049 MB   | in 0.6 ms ± 0.8 ms     | null                          | in 2,300.6 ms ± 64.005 ms  | in 15,731 ms ± 67.016 ms           | in 15,791.6 ms ± 14.527 ms         |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 205.8 ms ± 91.646 ms    | in 11.6 ms ± 3.382 ms      | in 16.2 ms ± 2.315 ms     | in 272 ms ± 11.045 ms          | in 267.6 ms ± 7.003 ms         |
| 2 B        | in 14.6 ms ± 5.314 ms      | in 8 ms ± 2.366 ms         | in 20.2 ms ± 5.564 ms     | in 24 ms ± 3.033 ms            | in 29.4 ms ± 9.478 ms          |
| 4 B        | in 12.4 ms ± 2.245 ms      | in 11.2 ms ± 3.868 ms      | in 22.2 ms ± 7.44 ms      | in 24 ms ± 3.162 ms            | in 31.6 ms ± 6.344 ms          |
| 8 B        | in 11.6 ms ± 2.728 ms      | in 10.8 ms ± 3.187 ms      | in 21.6 ms ± 2.871 ms     | in 21.4 ms ± 4.409 ms          | in 28.4 ms ± 5.535 ms          |
| 16 B       | in 12.4 ms ± 2.498 ms      | in 9 ms ± 2.966 ms         | in 22.6 ms ± 4.03 ms      | in 26 ms ± 5.727 ms            | in 26.8 ms ± 3.544 ms          |
| 32 B       | in 13.8 ms ± 3.655 ms      | in 12 ms ± 4.147 ms        | in 21.2 ms ± 5.671 ms     | in 24.8 ms ± 5.706 ms          | in 24.2 ms ± 2.315 ms          |
| 64 B       | in 11.2 ms ± 2.993 ms      | in 13.4 ms ± 5.083 ms      | in 25 ms ± 6.573 ms       | in 25 ms ± 5.831 ms            | in 23.4 ms ± 2.245 ms          |
| 128 B      | in 12.6 ms ± 5.238 ms      | in 14 ms ± 3.406 ms        | in 27.2 ms ± 10.591 ms    | in 23.2 ms ± 1.166 ms          | in 27 ms ± 4.733 ms            |
| 256 B      | in 13.8 ms ± 0.98 ms       | in 11.6 ms ± 2.728 ms      | in 27.8 ms ± 9.368 ms     | in 35.6 ms ± 10.288 ms         | in 30.4 ms ± 4.841 ms          |
| 512 B      | in 15 ms ± 2.608 ms        | in 12.8 ms ± 3.187 ms      | in 62.8 ms ± 58.697 ms    | in 36 ms ± 9.839 ms            | in 48.6 ms ± 15.705 ms         |
| 1.024 kB   | in 15.8 ms ± 1.72 ms       | in 16.8 ms ± 3.868 ms      | in 56.4 ms ± 47.238 ms    | in 44 ms ± 5.099 ms            | in 46.8 ms ± 4.118 ms          |
| 2.048 kB   | in 18.6 ms ± 4.271 ms      | in 23.2 ms ± 6.013 ms      | in 41.6 ms ± 4.673 ms     | in 64.8 ms ± 3.059 ms          | in 74 ms ± 14.381 ms           |
| 4.096 kB   | in 25 ms ± 3.033 ms        | in 23.4 ms ± 1.497 ms      | in 47.6 ms ± 5.953 ms     | in 105.6 ms ± 9.81 ms          | in 117 ms ± 7.127 ms           |
| 8.192 kB   | in 41.2 ms ± 11.973 ms     | in 46 ms ± 12.166 ms       | in 69.4 ms ± 3.2 ms       | in 185.6 ms ± 8.845 ms         | in 187.8 ms ± 9.411 ms         |
| 16.384 kB  | in 98.8 ms ± 73.208 ms     | in 70.8 ms ± 15.406 ms     | in 129.2 ms ± 21.6 ms     | in 353.6 ms ± 41.601 ms        | in 336.8 ms ± 3.311 ms         |
| 32.768 kB  | in 109.8 ms ± 9.745 ms     | in 137.4 ms ± 30.236 ms    | in 227 ms ± 24.827 ms     | in 649 ms ± 26.743 ms          | in 646.6 ms ± 12.208 ms        |
| 65.536 kB  | in 211.8 ms ± 12.303 ms    | in 231 ms ± 20.484 ms      | in 431.6 ms ± 54.975 ms   | in 1,280.2 ms ± 61.144 ms      | in 1,373.4 ms ± 171.097 ms     |
| 131.072 kB | in 386.8 ms ± 12.432 ms    | in 403.8 ms ± 9.196 ms     | in 760.2 ms ± 12.968 ms   | in 2,502.4 ms ± 85.287 ms      | in 2,461.8 ms ± 23.198 ms      |
| 262.144 kB | in 799.8 ms ± 97.177 ms    | in 822.2 ms ± 101.582 ms   | in 1,451.8 ms ± 20.084 ms | in 4,856.4 ms ± 43.761 ms      | in 4,885.6 ms ± 28.09 ms       |
| 524.288 kB | in 1,440.4 ms ± 16.954 ms  | in 1,496.8 ms ± 9.389 ms   | in 2,877.2 ms ± 98.512 ms | in 9,771.8 ms ± 215.206 ms     | in 9,727.4 ms ± 138.301 ms     |
| 1.049 MB   | in 2,992.2 ms ± 178.024 ms | in 2,952 ms ± 54.358 ms    | in 5,631 ms ± 158.84 ms   | in 19,200.8 ms ± 231.824 ms    | in 19,336.8 ms ± 195.266 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 117.6 ms ± 50.094 ms   | in 15.4 ms ± 3.382 ms      | in 27.8 ms ± 11.285 ms    | in 23.4 ms ± 4.224 ms          | in 23.2 ms ± 2.04 ms           |
| 2 B        | in 13.2 ms ± 5.564 ms     | in 14.4 ms ± 4.176 ms      | in 20 ms ± 5.099 ms       | in 23.4 ms ± 3.137 ms          | in 33.2 ms ± 12.921 ms         |
| 4 B        | in 20.8 ms ± 6.306 ms     | in 14.6 ms ± 3.2 ms        | in 33.6 ms ± 17.67 ms     | in 24.8 ms ± 3.655 ms          | in 41 ms ± 25.322 ms           |
| 8 B        | in 16.4 ms ± 1.02 ms      | in 13.8 ms ± 4.445 ms      | in 35.4 ms ± 15.564 ms    | in 22.6 ms ± 2.728 ms          | in 25.6 ms ± 6.02 ms           |
| 16 B       | in 17.8 ms ± 3.25 ms      | in 10.2 ms ± 2.315 ms      | in 43.4 ms ± 24.848 ms    | in 23.8 ms ± 2.561 ms          | in 22.4 ms ± 6.621 ms          |
| 32 B       | in 14.8 ms ± 1.939 ms     | in 10 ms ± 1.414 ms        | in 37 ms ± 25.456 ms      | in 20.2 ms ± 4.833 ms          | in 28.6 ms ± 6.216 ms          |
| 64 B       | in 22.2 ms ± 7.25 ms      | in 12.2 ms ± 2.04 ms       | in 29.6 ms ± 20.723 ms    | in 26.8 ms ± 2.638 ms          | in 24.8 ms ± 4.833 ms          |
| 128 B      | in 17 ms ± 2.098 ms       | in 12 ms ± 1.414 ms        | in 42.6 ms ± 24.614 ms    | in 27.2 ms ± 3.655 ms          | in 21.6 ms ± 3.666 ms          |
| 256 B      | in 18.8 ms ± 3.816 ms     | in 11.8 ms ± 4.445 ms      | in 41.4 ms ± 25.429 ms    | in 30.4 ms ± 3.929 ms          | in 30.8 ms ± 5.269 ms          |
| 512 B      | in 21.6 ms ± 8.333 ms     | in 12.8 ms ± 3.429 ms      | in 47 ms ± 20.386 ms      | in 31.2 ms ± 4.069 ms          | in 32.8 ms ± 4.118 ms          |
| 1.024 kB   | in 20.4 ms ± 3.382 ms     | in 16.6 ms ± 3.323 ms      | in 38.8 ms ± 15.549 ms    | in 41 ms ± 3.633 ms            | in 41.6 ms ± 4.63 ms           |
| 2.048 kB   | in 20.8 ms ± 1.72 ms      | in 17.2 ms ± 3.709 ms      | in 42 ms ± 19.026 ms      | in 62.2 ms ± 7.222 ms          | in 63.6 ms ± 5.426 ms          |
| 4.096 kB   | in 28.8 ms ± 7.44 ms      | in 22.4 ms ± 1.625 ms      | in 50.4 ms ± 13.529 ms    | in 96.2 ms ± 4.261 ms          | in 98.6 ms ± 4.716 ms          |
| 8.192 kB   | in 33.4 ms ± 5.161 ms     | in 31.2 ms ± 4.665 ms      | in 68 ms ± 12.57 ms       | in 168.8 ms ± 10.572 ms        | in 165 ms ± 7.239 ms           |
| 16.384 kB  | in 73.6 ms ± 38.949 ms    | in 53.8 ms ± 3.37 ms       | in 105.8 ms ± 14.552 ms   | in 299.4 ms ± 11.825 ms        | in 324.4 ms ± 16.194 ms        |
| 32.768 kB  | in 102.4 ms ± 17.327 ms   | in 92.4 ms ± 4.317 ms      | in 175.6 ms ± 17.048 ms   | in 582 ms ± 29.873 ms          | in 567.8 ms ± 20.213 ms        |
| 65.536 kB  | in 171.4 ms ± 24.047 ms   | in 165.2 ms ± 2.786 ms     | in 312.4 ms ± 10.21 ms    | in 1,110.4 ms ± 27.558 ms      | in 1,094.6 ms ± 25.16 ms       |
| 131.072 kB | in 326.8 ms ± 16.726 ms   | in 311.8 ms ± 7.194 ms     | in 627 ms ± 17.833 ms     | in 2,200.6 ms ± 12.452 ms      | in 2,149.4 ms ± 38.578 ms      |
| 262.144 kB | in 620.8 ms ± 26.149 ms   | in 609 ms ± 16.444 ms      | in 1,154.8 ms ± 27.411 ms | in 4,262.6 ms ± 56.923 ms      | in 4,247 ms ± 66.801 ms        |
| 524.288 kB | in 1,133 ms ± 34.722 ms   | in 1,186.6 ms ± 25.874 ms  | in 2,219 ms ± 11.153 ms   | in 8,494.4 ms ± 156.281 ms     | in 8,430.2 ms ± 117.649 ms     |
| 1.049 MB   | in 2,307.8 ms ± 33.379 ms | in 2,485 ms ± 39.441 ms    | in 4,566.8 ms ± 48.441 ms | in 17,081.8 ms ± 249.84 ms     | in 16,589.2 ms ± 244.566 ms    |