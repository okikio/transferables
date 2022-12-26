# Node

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.237 ms ± 0.353 ms   | null                          | in 7.31 ms ± 1.761 ms        | in 6.816 ms ± 1.038 ms             | in 6.561 ms ± 1.662 ms             |
| 2 B        | in 0.109 ms ± 0.068 ms   | null                          | in 6.117 ms ± 1.211 ms       | in 6.555 ms ± 1.339 ms             | in 6.042 ms ± 0.685 ms             |
| 4 B        | in 0.082 ms ± 0.047 ms   | null                          | in 6.132 ms ± 0.664 ms       | in 6.188 ms ± 1.661 ms             | in 6.936 ms ± 3.035 ms             |
| 8 B        | in 0.131 ms ± 0.09 ms    | null                          | in 8.206 ms ± 5.79 ms        | in 9.556 ms ± 5.24 ms              | in 6.041 ms ± 1.254 ms             |
| 16 B       | in 0.065 ms ± 0.024 ms   | null                          | in 5.946 ms ± 0.802 ms       | in 5.95 ms ± 1.185 ms              | in 5.938 ms ± 0.712 ms             |
| 32 B       | in 0.065 ms ± 0.022 ms   | null                          | in 6.093 ms ± 0.756 ms       | in 23.988 ms ± 10.045 ms           | in 5.62 ms ± 0.309 ms              |
| 64 B       | in 0.099 ms ± 0.038 ms   | null                          | in 5.447 ms ± 1.062 ms       | in 5.556 ms ± 0.923 ms             | in 5.725 ms ± 0.653 ms             |
| 128 B      | in 0.213 ms ± 0.296 ms   | null                          | in 5.563 ms ± 0.561 ms       | in 8.768 ms ± 6.354 ms             | in 5.771 ms ± 0.963 ms             |
| 256 B      | in 2.699 ms ± 5.271 ms   | null                          | in 7.367 ms ± 2.182 ms       | in 6.644 ms ± 1.307 ms             | in 6.097 ms ± 0.889 ms             |
| 512 B      | in 0.078 ms ± 0.036 ms   | null                          | in 8.853 ms ± 5.131 ms       | in 19.694 ms ± 6.943 ms            | in 7.901 ms ± 1.184 ms             |
| 1.024 kB   | in 0.129 ms ± 0.111 ms   | null                          | in 8.311 ms ± 1.496 ms       | in 11.895 ms ± 4.069 ms            | in 18.262 ms ± 5.957 ms            |
| 2.048 kB   | in 0.466 ms ± 0.77 ms    | null                          | in 10.212 ms ± 0.71 ms       | in 21.535 ms ± 4.602 ms            | in 12.248 ms ± 2.058 ms            |
| 4.096 kB   | in 0.134 ms ± 0.1 ms     | null                          | in 15.133 ms ± 0.953 ms      | in 23.08 ms ± 2.442 ms             | in 17.885 ms ± 0.903 ms            |
| 8.192 kB   | in 0.136 ms ± 0.028 ms   | null                          | in 27.566 ms ± 3.342 ms      | in 41.874 ms ± 4.173 ms            | in 29.613 ms ± 0.919 ms            |
| 16.384 kB  | in 0.345 ms ± 0.068 ms   | null                          | in 47.335 ms ± 3.355 ms      | in 72.558 ms ± 5.931 ms            | in 54.029 ms ± 1.973 ms            |
| 32.768 kB  | in 0.665 ms ± 0.061 ms   | null                          | in 86.693 ms ± 3.516 ms      | in 132.964 ms ± 7.713 ms           | in 100.646 ms ± 4.188 ms           |
| 65.536 kB  | in 1.466 ms ± 0.131 ms   | null                          | in 273.75 ms ± 83.611 ms     | in 251.429 ms ± 12.509 ms          | in 197.235 ms ± 10.208 ms          |
| 131.072 kB | in 3.655 ms ± 0.585 ms   | null                          | in 313.486 ms ± 12.222 ms    | in 511.035 ms ± 21.302 ms          | in 427.39 ms ± 24.467 ms           |
| 262.144 kB | in 20.699 ms ± 5.535 ms  | null                          | in 938.853 ms ± 34.961 ms    | in 1,459.791 ms ± 178.041 ms       | in 1,206.267 ms ± 124.499 ms       |
| 524.288 kB | in 14.028 ms ± 1.739 ms  | null                          | in 1,945.532 ms ± 146.755 ms | in 2,554.616 ms ± 104.176 ms       | in 2,198.129 ms ± 161.787 ms       |
| 1.049 MB   | in 35.384 ms ± 21.719 ms | null                          | in 3,521.041 ms ± 205.518 ms | in 5,120.728 ms ± 204.418 ms       | in 4,168.653 ms ± 254.915 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 16.745 ms ± 4.75 ms       | null                       | in 27.223 ms ± 13.605 ms     | in 21.635 ms ± 3.443 ms        | in 27.942 ms ± 10.163 ms       |
| 2 B        | in 14.228 ms ± 3.101 ms      | null                       | in 19.552 ms ± 4.766 ms      | in 20.814 ms ± 3.696 ms        | in 24.074 ms ± 8.324 ms        |
| 4 B        | in 11.997 ms ± 2.045 ms      | null                       | in 18.236 ms ± 3.399 ms      | in 20.079 ms ± 3.318 ms        | in 23.324 ms ± 11.495 ms       |
| 8 B        | in 14.567 ms ± 4.707 ms      | null                       | in 17.981 ms ± 4.625 ms      | in 20.78 ms ± 4.503 ms         | in 22.49 ms ± 4.047 ms         |
| 16 B       | in 14.064 ms ± 6.468 ms      | null                       | in 17.042 ms ± 3.299 ms      | in 25.269 ms ± 13.59 ms        | in 18.638 ms ± 2.423 ms        |
| 32 B       | in 16.025 ms ± 4.645 ms      | null                       | in 17.354 ms ± 2.972 ms      | in 33.362 ms ± 16.681 ms       | in 17.15 ms ± 2.384 ms         |
| 64 B       | in 16.559 ms ± 10.194 ms     | null                       | in 31.991 ms ± 3.476 ms      | in 40.803 ms ± 9.649 ms        | in 33.595 ms ± 3.595 ms        |
| 128 B      | in 17.27 ms ± 10.719 ms      | null                       | in 19.131 ms ± 3.885 ms      | in 20.831 ms ± 4.063 ms        | in 20.509 ms ± 3.435 ms        |
| 256 B      | in 15.956 ms ± 7.93 ms       | null                       | in 18.212 ms ± 4.221 ms      | in 23.614 ms ± 10.459 ms       | in 17.857 ms ± 3.545 ms        |
| 512 B      | in 22.064 ms ± 6.731 ms      | null                       | in 44.471 ms ± 4.807 ms      | in 49.045 ms ± 7.069 ms        | in 39.104 ms ± 3.213 ms        |
| 1.024 kB   | in 15.067 ms ± 3.622 ms      | null                       | in 23.546 ms ± 2.595 ms      | in 26.468 ms ± 4.372 ms        | in 22.211 ms ± 2.891 ms        |
| 2.048 kB   | in 15.089 ms ± 2.287 ms      | null                       | in 28.23 ms ± 3.186 ms       | in 44.078 ms ± 6.415 ms        | in 25.967 ms ± 4.045 ms        |
| 4.096 kB   | in 25.631 ms ± 6.427 ms      | null                       | in 39.708 ms ± 3.854 ms      | in 52.566 ms ± 7.363 ms        | in 39.982 ms ± 4.216 ms        |
| 8.192 kB   | in 36.454 ms ± 5.061 ms      | null                       | in 56.478 ms ± 5.951 ms      | in 77.471 ms ± 7.494 ms        | in 60.17 ms ± 2.036 ms         |
| 16.384 kB  | in 57.457 ms ± 6.921 ms      | null                       | in 104.383 ms ± 7.116 ms     | in 138.663 ms ± 17.384 ms      | in 114.478 ms ± 4.087 ms       |
| 32.768 kB  | in 89.731 ms ± 5.106 ms      | null                       | in 185.176 ms ± 6.719 ms     | in 246.114 ms ± 12.821 ms      | in 196.962 ms ± 10.055 ms      |
| 65.536 kB  | in 182.61 ms ± 23.664 ms     | null                       | in 366.318 ms ± 40.238 ms    | in 469.8 ms ± 40.165 ms        | in 367.584 ms ± 5.232 ms       |
| 131.072 kB | in 343.202 ms ± 36.451 ms    | null                       | in 1,026.921 ms ± 208.411 ms | in 1,319.931 ms ± 281.052 ms   | in 1,228.487 ms ± 286.139 ms   |
| 262.144 kB | in 1,407.737 ms ± 424.304 ms | null                       | in 2,239.304 ms ± 515.813 ms | in 2,693.27 ms ± 439.438 ms    | in 2,486.748 ms ± 475.392 ms   |
| 524.288 kB | in 1,929.664 ms ± 144.018 ms | null                       | in 3,892.395 ms ± 405.058 ms | in 4,791.025 ms ± 443.576 ms   | in 4,193.053 ms ± 312.215 ms   |
| 1.049 MB   | in 3,647.469 ms ± 130.87 ms  | null                       | in 7,301.246 ms ± 282.413 ms | in 8,991.163 ms ± 650.499 ms   | in 7,808.772 ms ± 324.544 ms   |