# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 1 second ± 1.095 ms | null                          | in 4.6 ms ± 1.02 ms        | in 4.2 ms ± 0.748 ms               | in 4.6 ms ± 1.356 ms               |
| 2 B        | in 0.2 ms ± 0.4 ms     | null                          | in 3.8 ms ± 0.748 ms       | in 6.8 ms ± 2.993 ms               | in 4.6 ms ± 0.49 ms                |
| 4 B        | in 0.2 ms ± 0.4 ms     | null                          | in 4 ms ± 0.632 ms         | in 4.8 ms ± 1.166 ms               | in 5 ms ± now                      |
| 8 B        | in 0.4 ms ± 0.49 ms    | null                          | in 5 ms ± 2.53 ms          | in 4.4 ms ± 0.49 ms                | in 6.8 ms ± 5.115 ms               |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 3.6 ms ± 0.49 ms        | in 4.8 ms ± 0.748 ms               | in 4.8 ms ± 0.748 ms               |
| 32 B       | in 0.2 ms ± 0.4 ms     | null                          | in 4.6 ms ± 0.8 ms         | in 5.6 ms ± 1.2 ms                 | in 6 ms ± 1.897 ms                 |
| 64 B       | in 0.6 ms ± 0.49 ms    | null                          | in 4.2 ms ± 0.748 ms       | in 5.2 ms ± 0.4 ms                 | in 6.2 ms ± 1.166 ms               |
| 128 B      | in 1 second ± 1.549 ms | null                          | in 5 ms ± 1.673 ms         | in 6.8 ms ± 1.47 ms                | in 8.8 ms ± 4.445 ms               |
| 256 B      | now ± now              | null                          | in 4.8 ms ± 1.72 ms        | in 12 ms ± 2.28 ms                 | in 9.2 ms ± 1.6 ms                 |
| 512 B      | in 0.6 ms ± 0.49 ms    | null                          | in 6.4 ms ± 3.323 ms       | in 12.4 ms ± 2.059 ms              | in 11.6 ms ± 1.855 ms              |
| 1.024 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 6.6 ms ± 1.96 ms        | in 21.6 ms ± 2.8 ms                | in 17.2 ms ± 1.47 ms               |
| 2.048 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 9.8 ms ± 3.655 ms       | in 35.6 ms ± 2.871 ms              | in 29.6 ms ± 1.356 ms              |
| 4.096 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 10.2 ms ± 0.748 ms      | in 66 ms ± 1.789 ms                | in 54.2 ms ± 0.4 ms                |
| 8.192 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 17.8 ms ± 1.6 ms        | in 123.6 ms ± 0.49 ms              | in 103.2 ms ± 0.98 ms              |
| 16.384 kB  | now ± now              | null                          | in 31.8 ms ± 2.227 ms      | in 240 ms ± 2.098 ms               | in 200 ms ± 0.894 ms               |
| 32.768 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 56.2 ms ± 0.748 ms      | in 474 ms ± 2.828 ms               | in 397 ms ± 1.549 ms               |
| 65.536 kB  | in 1.6 ms ± 0.49 ms    | null                          | in 113 ms ± 4.899 ms       | in 944.6 ms ± 9.178 ms             | in 791.8 ms ± 1.6 ms               |
| 131.072 kB | in 2.6 ms ± 0.49 ms    | null                          | in 219.4 ms ± 3.007 ms     | in 1,868.8 ms ± 4.622 ms           | in 1,579.6 ms ± 15.266 ms          |
| 262.144 kB | in 4.4 ms ± 1.02 ms    | null                          | in 424.8 ms ± 0.98 ms      | in 3,721.4 ms ± 11.447 ms          | in 3,190 ms ± 68.522 ms            |
| 524.288 kB | in 7.6 ms ± 1.02 ms    | null                          | in 850.4 ms ± 3.007 ms     | in 7,508.2 ms ± 45.543 ms          | in 6,309.6 ms ± 32.191 ms          |
| 1.049 MB   | in 14 ms ± 2.28 ms     | null                          | in 1,674 ms ± 11.679 ms    | in 15,053.2 ms ± 36.119 ms         | in 12,840.8 ms ± 132.002 ms        |

## MessageChannel (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)   | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------ | ------------------------------ | ------------------------------ |
| 1 B        | in 170 ms ± 85.332 ms     | in 7.4 ms ± 1.356 ms       | in 16.4 ms ± 2.8 ms      | in 175.2 ms ± 7.194 ms         | in 177.2 ms ± 7.082 ms         |
| 2 B        | in 12.4 ms ± 3.2 ms       | in 5.6 ms ± 0.49 ms        | in 17.4 ms ± 2.417 ms    | in 19 ms ± 2.366 ms            | in 19.2 ms ± 3.187 ms          |
| 4 B        | in 12.2 ms ± 2.227 ms     | in 7.6 ms ± 2.577 ms       | in 18.2 ms ± 1.939 ms    | in 17.4 ms ± 2.059 ms          | in 18.4 ms ± 1.744 ms          |
| 8 B        | in 8.8 ms ± 1.72 ms       | in 10 ms ± 5.762 ms        | in 21.2 ms ± 1.72 ms     | in 18.8 ms ± 2.04 ms           | in 18.8 ms ± 4.261 ms          |
| 16 B       | in 7.6 ms ± 2.577 ms      | in 14.4 ms ± 10.984 ms     | in 19.6 ms ± 4.587 ms    | in 21 ms ± 4.472 ms            | in 19.8 ms ± 3.6 ms            |
| 32 B       | in 8.8 ms ± 2.786 ms      | in 14 ms ± 10.752 ms       | in 20.6 ms ± 3.666 ms    | in 19.2 ms ± 4.354 ms          | in 27.2 ms ± 10.088 ms         |
| 64 B       | in 26.6 ms ± 38.229 ms    | in 13.2 ms ± 9.152 ms      | in 21.2 ms ± 5.636 ms    | in 19.6 ms ± 2.871 ms          | in 25 ms ± 7.72 ms             |
| 128 B      | in 7.6 ms ± 1.855 ms      | in 15 ms ± 10.06 ms        | in 20 ms ± 5.099 ms      | in 25.2 ms ± 6.145 ms          | in 25.2 ms ± 5.492 ms          |
| 256 B      | in 8.2 ms ± 1.939 ms      | in 33.8 ms ± 49.632 ms     | in 21 ms ± 3.633 ms      | in 27.2 ms ± 6.554 ms          | in 27.4 ms ± 5.678 ms          |
| 512 B      | in 9.8 ms ± 2.993 ms      | in 16.6 ms ± 7.31 ms       | in 23.2 ms ± 6.431 ms    | in 32.6 ms ± 7.579 ms          | in 31.4 ms ± 5.044 ms          |
| 1.024 kB   | in 12.2 ms ± 3.187 ms     | in 19 ms ± 5.967 ms        | in 25.8 ms ± 5.269 ms    | in 45.2 ms ± 7.985 ms          | in 41.6 ms ± 9.372 ms          |
| 2.048 kB   | in 12.4 ms ± 1.855 ms     | in 18 ms ± 5.586 ms        | in 29.8 ms ± 5.036 ms    | in 58.6 ms ± 6.741 ms          | in 52.6 ms ± 4.63 ms           |
| 4.096 kB   | in 18.2 ms ± 2.638 ms     | in 23.6 ms ± 5.161 ms      | in 38.8 ms ± 4.996 ms    | in 92.4 ms ± 5.314 ms          | in 105.6 ms ± 17.246 ms        |
| 8.192 kB   | in 25.6 ms ± 1.02 ms      | in 31.6 ms ± 5.2 ms        | in 56 ms ± 5.177 ms      | in 165.6 ms ± 6.28 ms          | in 163.6 ms ± 6.651 ms         |
| 16.384 kB  | in 44.4 ms ± 2.653 ms     | in 91.2 ms ± 59.657 ms     | in 92.8 ms ± 6.524 ms    | in 303.2 ms ± 6.794 ms         | in 275.2 ms ± 5.98 ms          |
| 32.768 kB  | in 85.4 ms ± 8.333 ms     | in 97.6 ms ± 7.499 ms      | in 175.6 ms ± 11.876 ms  | in 582.6 ms ± 5.535 ms         | in 528 ms ± 8.414 ms           |
| 65.536 kB  | in 159.4 ms ± 6.344 ms    | in 165 ms ± 10.658 ms      | in 307.2 ms ± 5.381 ms   | in 1,132 ms ± 5.099 ms         | in 1,130.6 ms ± 60.341 ms      |
| 131.072 kB | in 305 ms ± 13.221 ms     | in 332.4 ms ± 20.636 ms    | in 597.6 ms ± 9.932 ms   | in 2,218.4 ms ± 7.088 ms       | in 2,006.4 ms ± 31.424 ms      |
| 262.144 kB | in 585 ms ± 24 ms         | in 661.6 ms ± 52.397 ms    | in 1,126.2 ms ± 6.431 ms | in 4,459.4 ms ± 72.143 ms      | in 3,947.2 ms ± 37.997 ms      |
| 524.288 kB | in 1,116 ms ± 12.426 ms   | in 1,354 ms ± 177.791 ms   | in 2,175.8 ms ± 7.44 ms  | in 8,908 ms ± 193.311 ms       | in 7,824.8 ms ± 76.235 ms      |
| 1.049 MB   | in 2,216.8 ms ± 69.335 ms | in 2,258.2 ms ± 17.151 ms  | in 4,289 ms ± 100.763 ms | in 17,523.2 ms ± 124.007 ms    | in 16,034.8 ms ± 279.504 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 69.2 ms ± 49.918 ms    | in 9.6 ms ± 2.577 ms       | in 18.4 ms ± 2.417 ms     | in 16 ms ± 3.225 ms            | in 18 ms ± 1.414 ms            |
| 2 B        | in 9 ms ± 0.632 ms        | in 9.2 ms ± 5.455 ms       | in 16.4 ms ± 5.314 ms     | in 17.2 ms ± 3.429 ms          | in 21.6 ms ± 10.288 ms         |
| 4 B        | in 14.6 ms ± 4.758 ms     | in 11.2 ms ± 4.02 ms       | in 20.2 ms ± 4.622 ms     | in 15.6 ms ± 2.059 ms          | in 14.8 ms ± 2.713 ms          |
| 8 B        | in 11 ms ± 2.898 ms       | in 10.4 ms ± 2.417 ms      | in 20 ms ± 5.55 ms        | in 18.2 ms ± 4.261 ms          | in 26.4 ms ± 14.582 ms         |
| 16 B       | in 11.6 ms ± 3.555 ms     | in 10 ms ± 1.095 ms        | in 18.8 ms ± 2.857 ms     | in 17.2 ms ± 2.4 ms            | in 14.2 ms ± 2.786 ms          |
| 32 B       | in 11.2 ms ± 5.528 ms     | in 8.6 ms ± 2.332 ms       | in 18 ms ± 2.28 ms        | in 20 ms ± 4.899 ms            | in 24.2 ms ± 7.359 ms          |
| 64 B       | in 13 ms ± 6.663 ms       | in 9.6 ms ± 3.826 ms       | in 18.6 ms ± 3.262 ms     | in 17.6 ms ± 3.262 ms          | in 17 ms ± 2.098 ms            |
| 128 B      | in 13.4 ms ± 6.344 ms     | in 12.2 ms ± 3.311 ms      | in 18 ms ± 2.966 ms       | in 22.2 ms ± 4.707 ms          | in 22 ms ± 8.832 ms            |
| 256 B      | in 11.4 ms ± 3.72 ms      | in 9.6 ms ± 2.871 ms       | in 18.4 ms ± 2.059 ms     | in 22.6 ms ± 2.332 ms          | in 21.4 ms ± 3.611 ms          |
| 512 B      | in 15 ms ± 8.222 ms       | in 11 ms ± 2.28 ms         | in 20.2 ms ± 1.939 ms     | in 25.6 ms ± 3.441 ms          | in 23.8 ms ± 2.786 ms          |
| 1.024 kB   | in 14.4 ms ± 2.939 ms     | in 11 ms ± 2.608 ms        | in 20.8 ms ± 2.04 ms      | in 34 ms ± 3.098 ms            | in 31.8 ms ± 3.544 ms          |
| 2.048 kB   | in 16.6 ms ± 4.543 ms     | in 14.6 ms ± 2.417 ms      | in 27 ms ± 3.286 ms       | in 50.2 ms ± 4.622 ms          | in 45.6 ms ± 5.953 ms          |
| 4.096 kB   | in 20.4 ms ± 7.338 ms     | in 16.2 ms ± 2.135 ms      | in 31 ms ± 2.098 ms       | in 82.8 ms ± 2.638 ms          | in 75 ms ± 3.521 ms            |
| 8.192 kB   | in 28 ms ± 5.762 ms       | in 25.6 ms ± 4.409 ms      | in 45.4 ms ± 3.499 ms     | in 147.8 ms ± 2.227 ms         | in 129.8 ms ± 4.354 ms         |
| 16.384 kB  | in 51.6 ms ± 9.749 ms     | in 39.6 ms ± 3.499 ms      | in 76 ms ± 10.257 ms      | in 273.8 ms ± 3.059 ms         | in 236 ms ± 9.508 ms           |
| 32.768 kB  | in 105.8 ms ± 28.505 ms   | in 68 ms ± 2.608 ms        | in 126.8 ms ± 3.97 ms     | in 529.2 ms ± 8.424 ms         | in 450.8 ms ± 10.186 ms        |
| 65.536 kB  | in 126 ms ± 6.164 ms      | in 125.2 ms ± 1.6 ms       | in 233.4 ms ± 5.238 ms    | in 1,035.2 ms ± 22.525 ms      | in 880.6 ms ± 19.448 ms        |
| 131.072 kB | in 244.4 ms ± 5.122 ms    | in 238.8 ms ± 2.135 ms     | in 465.4 ms ± 6.468 ms    | in 2,047.6 ms ± 36.136 ms      | in 1,725.4 ms ± 18.991 ms      |
| 262.144 kB | in 458 ms ± 15.1 ms       | in 462.6 ms ± 8.237 ms     | in 881.4 ms ± 11.603 ms   | in 4,066.8 ms ± 68.797 ms      | in 3,421 ms ± 46.532 ms        |
| 524.288 kB | in 877 ms ± 15.139 ms     | in 902.4 ms ± 15.615 ms    | in 1,720.2 ms ± 16.798 ms | in 8,148.6 ms ± 149.56 ms      | in 6,829.2 ms ± 86.212 ms      |
| 1.049 MB   | in 1,840.4 ms ± 37.956 ms | in 1,894.6 ms ± 33.206 ms  | in 3,532.6 ms ± 27.875 ms | in 16,017.4 ms ± 153.218 ms    | in 13,942.4 ms ± 127.857 ms    |