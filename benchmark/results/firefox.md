# Firefox

## structuredClone (browser)

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually) | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ---------------------- | ----------------------------- | -------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.6 ms ± 1.2 ms     | null                          | in 3.6 ms ± 0.8 ms         | in 5.2 ms ± 0.4 ms                 | in 4.6 ms ± 0.8 ms                 |
| 2 B        | in 0.2 ms ± 0.4 ms     | null                          | in 3.6 ms ± 0.49 ms        | in 5.6 ms ± 1.2 ms                 | in 7 ms ± 2.53 ms                  |
| 4 B        | in 0.2 ms ± 0.4 ms     | null                          | in 3.4 ms ± 0.8 ms         | in 5 ms ± 0.894 ms                 | in 5.2 ms ± 1.166 ms               |
| 8 B        | in 0.2 ms ± 0.4 ms     | null                          | in 3.8 ms ± 0.748 ms       | in 5.4 ms ± 0.49 ms                | in 7 ms ± 3.633 ms                 |
| 16 B       | in 0.2 ms ± 0.4 ms     | null                          | in 6.6 ms ± 3.382 ms       | in 5 ms ± 0.894 ms                 | in 5.4 ms ± 0.49 ms                |
| 32 B       | in 0.2 ms ± 0.4 ms     | null                          | in 3.6 ms ± 0.49 ms        | in 6.2 ms ± 0.748 ms               | in 6.2 ms ± 0.748 ms               |
| 64 B       | in 0.6 ms ± 0.8 ms     | null                          | in 4 ms ± 0.894 ms         | in 7.2 ms ± 0.98 ms                | in 7 ms ± 0.894 ms                 |
| 128 B      | in 0.6 ms ± 0.49 ms    | null                          | in 3.4 ms ± 1.02 ms        | in 10.8 ms ± 0.98 ms               | in 13 ms ± 4.69 ms                 |
| 256 B      | in 0.6 ms ± 0.49 ms    | null                          | in 4.4 ms ± 0.8 ms         | in 16.2 ms ± 0.98 ms               | in 15.2 ms ± 0.748 ms              |
| 512 B      | in 0.2 ms ± 0.4 ms     | null                          | in 4.4 ms ± 0.49 ms        | in 26.6 ms ± 0.49 ms               | in 26.4 ms ± 0.8 ms                |
| 1.024 kB   | in 0.2 ms ± 0.4 ms     | null                          | in 5.4 ms ± 0.49 ms        | in 50.2 ms ± 1.833 ms              | in 47.6 ms ± 1.855 ms              |
| 2.048 kB   | in 0.4 ms ± 0.49 ms    | null                          | in 7.6 ms ± 2.245 ms       | in 93.8 ms ± 0.748 ms              | in 90.2 ms ± 0.4 ms                |
| 4.096 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 10 ms ± 0.632 ms        | in 188.4 ms ± 3.262 ms             | in 177 ms ± 2.53 ms                |
| 8.192 kB   | in 0.6 ms ± 0.49 ms    | null                          | in 17 ms ± 1.095 ms        | in 367.4 ms ± 6.151 ms             | in 348.8 ms ± 2.786 ms             |
| 16.384 kB  | in 0.4 ms ± 0.49 ms    | null                          | in 31.4 ms ± 2.417 ms      | in 725 ms ± 1.789 ms               | in 691.8 ms ± 6.337 ms             |
| 32.768 kB  | in 1 second ± 0.632 ms | null                          | in 56.8 ms ± 0.4 ms        | in 1,436.6 ms ± 2.871 ms           | in 1,371.8 ms ± 4.4 ms             |
| 65.536 kB  | in 1.2 ms ± 0.4 ms     | null                          | in 116.8 ms ± 3.919 ms     | in 2,867.8 ms ± 9.867 ms           | in 2,738.2 ms ± 10.284 ms          |
| 131.072 kB | in 2.8 ms ± 0.4 ms     | null                          | in 222.2 ms ± 2.638 ms     | in 5,730.6 ms ± 22.992 ms          | in 5,543.4 ms ± 79.258 ms          |
| 262.144 kB | in 4.8 ms ± 0.748 ms   | null                          | in 432.2 ms ± 2.857 ms     | in 11,498.8 ms ± 117.569 ms        | in 10,985.2 ms ± 88.139 ms         |
| 524.288 kB | in 8.2 ms ± 0.748 ms   | null                          | in 868.6 ms ± 8.065 ms     | in 23,018.8 ms ± 268.107 ms        | in 21,831.6 ms ± 43.334 ms         |
| 1.049 MB   | in 15.4 ms ± 1.497 ms  | null                          | in 1,714.8 ms ± 16.987 ms  | in 45,752.4 ms ± 118.694 ms        | in 43,866.6 ms ± 183.685 ms        |

## MessageChannel (browser)

|            | hasTransferables           | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | -------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 159 ms ± 80.456 ms      | in 7.4 ms ± 1.744 ms       | in 14 ms ± 2.757 ms       | in 188 ms ± 8.295 ms           | in 186.2 ms ± 5.946 ms         |
| 2 B        | in 12.6 ms ± 4.271 ms      | in 5.6 ms ± 1.2 ms         | in 16.2 ms ± 3.487 ms     | in 21.4 ms ± 2.728 ms          | in 25.6 ms ± 8.499 ms          |
| 4 B        | in 10.6 ms ± 3.499 ms      | in 6.8 ms ± 1.166 ms       | in 17 ms ± 2.53 ms        | in 23 ms ± 8.27 ms             | in 22.2 ms ± 5.706 ms          |
| 8 B        | in 10.4 ms ± 2.577 ms      | in 9.4 ms ± 2.871 ms       | in 38.8 ms ± 36.821 ms    | in 20.2 ms ± 2.713 ms          | in 21.2 ms ± 5.192 ms          |
| 16 B       | in 9.4 ms ± 2.653 ms       | in 8.6 ms ± 1.625 ms       | in 23.4 ms ± 6.651 ms     | in 25.8 ms ± 3.37 ms           | in 33.8 ms ± 20.41 ms          |
| 32 B       | in 10 ms ± 2.28 ms         | in 8 ms ± 2.449 ms         | in 23 ms ± 6.066 ms       | in 23.8 ms ± 5.946 ms          | in 32 ms ± 20.948 ms           |
| 64 B       | in 11.8 ms ± 5.269 ms      | in 10.6 ms ± 2.332 ms      | in 19.2 ms ± 3.6 ms       | in 25 ms ± 5.177 ms            | in 32.6 ms ± 17.142 ms         |
| 128 B      | in 11 ms ± 5.215 ms        | in 8 ms ± 3.633 ms         | in 20 ms ± 3.742 ms       | in 28.8 ms ± 7.44 ms           | in 37 ms ± 12.377 ms           |
| 256 B      | in 10.2 ms ± 2.482 ms      | in 10.2 ms ± 4.4 ms        | in 22.6 ms ± 3.262 ms     | in 33.4 ms ± 5.607 ms          | in 37.2 ms ± 9.325 ms          |
| 512 B      | in 11 ms ± 4.147 ms        | in 10 ms ± 3.406 ms        | in 24.6 ms ± 4.758 ms     | in 46 ms ± 2.683 ms            | in 48.6 ms ± 8.913 ms          |
| 1.024 kB   | in 10.6 ms ± 0.8 ms        | in 10.6 ms ± 2.154 ms      | in 25.2 ms ± 5.344 ms     | in 72.6 ms ± 3.382 ms          | in 72 ms ± 8.649 ms            |
| 2.048 kB   | in 13.8 ms ± 3.059 ms      | in 14.6 ms ± 3.72 ms       | in 30.8 ms ± 2.993 ms     | in 118.4 ms ± 5.276 ms         | in 115.2 ms ± 7.521 ms         |
| 4.096 kB   | in 17.4 ms ± 2.8 ms        | in 18.2 ms ± 3.37 ms       | in 50 ms ± 25.992 ms      | in 218 ms ± 4.775 ms           | in 203.8 ms ± 8.863 ms         |
| 8.192 kB   | in 26 ms ± 2.608 ms        | in 36.6 ms ± 14.854 ms     | in 57.2 ms ± 5.706 ms     | in 409.8 ms ± 6.013 ms         | in 386.8 ms ± 19.446 ms        |
| 16.384 kB  | in 47.6 ms ± 6.888 ms      | in 59.8 ms ± 14.02 ms      | in 90 ms ± 5.831 ms       | in 801 ms ± 7.95 ms            | in 750.8 ms ± 29.199 ms        |
| 32.768 kB  | in 83.4 ms ± 5.987 ms      | in 109.4 ms ± 44.401 ms    | in 169 ms ± 3.578 ms      | in 1,570.8 ms ± 9.867 ms       | in 1,516.8 ms ± 83.765 ms      |
| 65.536 kB  | in 166.2 ms ± 13.197 ms    | in 158 ms ± 3.286 ms       | in 312.4 ms ± 12.595 ms   | in 3,121 ms ± 13.266 ms        | in 2,817.2 ms ± 24.375 ms      |
| 131.072 kB | in 315.6 ms ± 20.944 ms    | in 310 ms ± 12.28 ms       | in 590.8 ms ± 8.565 ms    | in 6,233.8 ms ± 72.667 ms      | in 5,575.4 ms ± 28.366 ms      |
| 262.144 kB | in 604 ms ± 34.733 ms      | in 621.8 ms ± 44.061 ms    | in 1,124.2 ms ± 13.212 ms | in 12,596 ms ± 331.196 ms      | in 11,239.4 ms ± 131.802 ms    |
| 524.288 kB | in 1,168.6 ms ± 140.953 ms | in 1,215 ms ± 115.244 ms   | in 2,161.4 ms ± 50.349 ms | in 25,066.2 ms ± 294.725 ms    | in 22,344 ms ± 170.349 ms      |
| 1.049 MB   | in 2,313.6 ms ± 174.573 ms | in 2,267.8 ms ± 71.264 ms  | in 4,329.8 ms ± 80.678 ms | in 49,396.2 ms ± 232.705 ms    | in 44,911.4 ms ± 517.907 ms    |

## Worker (browser)

|            | hasTransferables          | postMessage (no transfers) | postMessage (manually)    | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ------------------------- | -------------------------- | ------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 104.8 ms ± 74.96 ms    | in 15.6 ms ± 6.741 ms      | in 28.6 ms ± 21.266 ms    | in 21.6 ms ± 3.2 ms            | in 28.2 ms ± 14.675 ms         |
| 2 B        | in 10 ms ± 2.28 ms        | in 11.2 ms ± 4.996 ms      | in 16.4 ms ± 3.98 ms      | in 17.4 ms ± 3.137 ms          | in 19.2 ms ± 4.956 ms          |
| 4 B        | in 13.6 ms ± 5.535 ms     | in 9 ms ± 1.414 ms         | in 18.2 ms ± 3.487 ms     | in 15.8 ms ± 2.482 ms          | in 24.2 ms ± 7.332 ms          |
| 8 B        | in 11 ms ± 3.406 ms       | in 9.4 ms ± 2.154 ms       | in 17.4 ms ± 3.878 ms     | in 17.8 ms ± 4.578 ms          | in 22 ms ± 4.195 ms            |
| 16 B       | in 16 ms ± 7.127 ms       | in 8.8 ms ± 1.166 ms       | in 17 ms ± 2 ms           | in 19 ms ± 4.775 ms            | in 19.8 ms ± 3.868 ms          |
| 32 B       | in 12.2 ms ± 5.6 ms       | in 9.4 ms ± 0.8 ms         | in 18.6 ms ± 3.262 ms     | in 19.2 ms ± 2.482 ms          | in 21.2 ms ± 4.874 ms          |
| 64 B       | in 20 ms ± 9.466 ms       | in 9.6 ms ± 1.855 ms       | in 26.6 ms ± 18.337 ms    | in 17.6 ms ± 3.382 ms          | in 22.2 ms ± 2.227 ms          |
| 128 B      | in 15 ms ± 7.43 ms        | in 9.2 ms ± 1.166 ms       | in 19.6 ms ± 3.382 ms     | in 16.6 ms ± 1.855 ms          | in 21.6 ms ± 1.625 ms          |
| 256 B      | in 15.2 ms ± 5.636 ms     | in 9.2 ms ± 1.939 ms       | in 18.4 ms ± 3.262 ms     | in 21 ms ± 2.449 ms            | in 21 ms ± 2.366 ms            |
| 512 B      | in 11.2 ms ± 3.6 ms       | in 9.6 ms ± 1.497 ms       | in 19.2 ms ± 1.166 ms     | in 25 ms ± 2.191 ms            | in 27.8 ms ± 2.638 ms          |
| 1.024 kB   | in 14 ms ± 2.966 ms       | in 12.2 ms ± 2.786 ms      | in 21.6 ms ± 2.245 ms     | in 33.6 ms ± 2.8 ms            | in 40.8 ms ± 13.151 ms         |
| 2.048 kB   | in 23 ms ± 8.367 ms       | in 13.8 ms ± 1.166 ms      | in 25.2 ms ± 4.02 ms      | in 53.2 ms ± 1.72 ms           | in 49.4 ms ± 8.163 ms          |
| 4.096 kB   | in 24.6 ms ± 9.287 ms     | in 19.8 ms ± 5.636 ms      | in 30.6 ms ± 3.382 ms     | in 85.2 ms ± 3.868 ms          | in 75.2 ms ± 4.956 ms          |
| 8.192 kB   | in 36.6 ms ± 8.754 ms     | in 23 ms ± 3.347 ms        | in 45.4 ms ± 1.02 ms      | in 156.6 ms ± 3.382 ms         | in 135.8 ms ± 6.554 ms         |
| 16.384 kB  | in 54.8 ms ± 26.324 ms    | in 40 ms ± 3.95 ms         | in 71 ms ± 3.347 ms       | in 293.6 ms ± 3.262 ms         | in 255.6 ms ± 5.851 ms         |
| 32.768 kB  | in 68.4 ms ± 5.083 ms     | in 68.2 ms ± 3.97 ms       | in 125.2 ms ± 3.763 ms    | in 569.4 ms ± 7.94 ms          | in 499.6 ms ± 9.541 ms         |
| 65.536 kB  | in 121 ms ± 3.795 ms      | in 126.6 ms ± 1.96 ms      | in 231.8 ms ± 3.655 ms    | in 1,128.6 ms ± 23.771 ms      | in 971.2 ms ± 9.411 ms         |
| 131.072 kB | in 245 ms ± 4.05 ms       | in 237.2 ms ± 3.709 ms     | in 460.6 ms ± 7.003 ms    | in 2,210 ms ± 23.723 ms        | in 1,911 ms ± 22.565 ms        |
| 262.144 kB | in 480 ms ± 21.232 ms     | in 459.2 ms ± 2.993 ms     | in 894.8 ms ± 23.455 ms   | in 4,399 ms ± 55.281 ms        | in 3,782.8 ms ± 43.143 ms      |
| 524.288 kB | in 867 ms ± 3.406 ms      | in 900.4 ms ± 7.172 ms     | in 1,725.6 ms ± 20.225 ms | in 8,786.4 ms ± 92.692 ms      | in 7,544.6 ms ± 78.792 ms      |
| 1.049 MB   | in 1,811.2 ms ± 25.055 ms | in 1,923.6 ms ± 57.51 ms   | in 3,522.2 ms ± 13.556 ms | in 17,411.6 ms ± 167.909 ms    | in 15,411.4 ms ± 171.248 ms    |