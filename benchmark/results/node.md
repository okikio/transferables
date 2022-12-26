# Node

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.179 ms ± 0.239 ms   | null                          | in 4.749 ms ± 1.635 ms       | in 4.314 ms ± 0.738 ms             | in 5.264 ms ± 2.572 ms             |
| 2 B        | in 0.066 ms ± 0.023 ms   | null                          | in 4.018 ms ± 0.338 ms       | in 4.389 ms ± 0.694 ms             | in 4.1 ms ± 0.278 ms               |
| 4 B        | in 0.069 ms ± 0.02 ms    | null                          | in 3.977 ms ± 0.183 ms       | in 4.145 ms ± 0.312 ms             | in 4.095 ms ± 0.38 ms              |
| 8 B        | in 0.065 ms ± 0.019 ms   | null                          | in 3.979 ms ± 0.169 ms       | in 12.244 ms ± 3.791 ms            | in 4.177 ms ± 0.344 ms             |
| 16 B       | in 0.07 ms ± 0.018 ms    | null                          | in 4.355 ms ± 0.749 ms       | in 4.548 ms ± 1.084 ms             | in 7.516 ms ± 7.345 ms             |
| 32 B       | in 0.061 ms ± 0.013 ms   | null                          | in 5.025 ms ± 2.405 ms       | in 3.931 ms ± 0.194 ms             | in 3.694 ms ± 0.352 ms             |
| 64 B       | in 0.053 ms ± 0.013 ms   | null                          | in 3.55 ms ± 0.212 ms        | in 3.904 ms ± 0.521 ms             | in 4.005 ms ± 0.755 ms             |
| 128 B      | in 0.053 ms ± 0.02 ms    | null                          | in 3.635 ms ± 0.289 ms       | in 3.825 ms ± 0.207 ms             | in 7.495 ms ± 4.504 ms             |
| 256 B      | in 0.061 ms ± 0.019 ms   | null                          | in 5.486 ms ± 2.903 ms       | in 6.099 ms ± 3.928 ms             | in 3.975 ms ± 0.159 ms             |
| 512 B      | in 0.063 ms ± 0.023 ms   | null                          | in 4.474 ms ± 0.624 ms       | in 13.543 ms ± 4.197 ms            | in 4.71 ms ± 0.175 ms              |
| 1.024 kB   | in 0.098 ms ± 0.076 ms   | null                          | in 7.043 ms ± 4.024 ms       | in 6.31 ms ± 0.157 ms              | in 10.789 ms ± 2.515 ms            |
| 2.048 kB   | in 0.439 ms ± 0.736 ms   | null                          | in 7.961 ms ± 2.284 ms       | in 14.473 ms ± 2.766 ms            | in 7.995 ms ± 0.068 ms             |
| 4.096 kB   | in 0.132 ms ± 0.093 ms   | null                          | in 10.722 ms ± 0.436 ms      | in 15.405 ms ± 0.223 ms            | in 13.437 ms ± 1.279 ms            |
| 8.192 kB   | in 1.77 ms ± 3.304 ms    | null                          | in 18.621 ms ± 1.305 ms      | in 29.093 ms ± 1.403 ms            | in 21.975 ms ± 0.908 ms            |
| 16.384 kB  | in 0.303 ms ± now        | null                          | in 35.684 ms ± 0.83 ms       | in 55.162 ms ± 3.171 ms            | in 41.312 ms ± 0.203 ms            |
| 32.768 kB  | in 0.53 ms ± 0.011 ms    | null                          | in 65.481 ms ± 0.293 ms      | in 105.198 ms ± 5.191 ms           | in 78.784 ms ± 1.233 ms            |
| 65.536 kB  | in 1.243 ms ± 0.014 ms   | null                          | in 201.834 ms ± 39.345 ms    | in 203.169 ms ± 2.226 ms           | in 155.92 ms ± 0.593 ms            |
| 131.072 kB | in 2.871 ms ± 0.038 ms   | null                          | in 253.843 ms ± 13.906 ms    | in 405.89 ms ± 3.133 ms            | in 309.194 ms ± 0.944 ms           |
| 262.144 kB | in 10.177 ms ± 0.762 ms  | null                          | in 674.51 ms ± 35.444 ms     | in 1,058.397 ms ± 111.341 ms       | in 864.705 ms ± 108.876 ms         |
| 524.288 kB | in 12.133 ms ± 1.301 ms  | null                          | in 1,318.632 ms ± 86.487 ms  | in 1,914.699 ms ± 58.449 ms        | in 1,585.061 ms ± 87.52 ms         |
| 1.049 MB   | in 27.956 ms ± 12.139 ms | null                          | in 2,505.717 ms ± 120.585 ms | in 3,713.752 ms ± 36.337 ms        | in 2,974.612 ms ± 129.136 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 11.3 ms ± 1.212 ms        | null                       | in 15.772 ms ± 5.217 ms      | in 23.275 ms ± 10.937 ms       | in 14.753 ms ± 2.807 ms        |
| 2 B        | in 8.975 ms ± 2.137 ms       | null                       | in 20.741 ms ± 10.259 ms     | in 19.342 ms ± 7.653 ms        | in 16.723 ms ± 4.645 ms        |
| 4 B        | in 8.792 ms ± 2.08 ms        | null                       | in 18.013 ms ± 8.719 ms      | in 17.585 ms ± 7.808 ms        | in 20.087 ms ± 11.724 ms       |
| 8 B        | in 8.552 ms ± 2.139 ms       | null                       | in 14.726 ms ± 4.581 ms      | in 14.256 ms ± 2.296 ms        | in 14.126 ms ± 2.531 ms        |
| 16 B       | in 13.456 ms ± 6.037 ms      | null                       | in 13.49 ms ± 2.595 ms       | in 14.135 ms ± 2.331 ms        | in 13.614 ms ± 2.518 ms        |
| 32 B       | in 13.348 ms ± 8.958 ms      | null                       | in 13.433 ms ± 2.427 ms      | in 17.64 ms ± 8.393 ms         | in 13.621 ms ± 2.534 ms        |
| 64 B       | in 16.01 ms ± 9.687 ms       | null                       | in 23.719 ms ± 2.374 ms      | in 34.683 ms ± 15.23 ms        | in 23.916 ms ± 2.997 ms        |
| 128 B      | in 12.6 ms ± 7.741 ms        | null                       | in 13.823 ms ± 2.479 ms      | in 16.854 ms ± 5.658 ms        | in 14.156 ms ± 2.841 ms        |
| 256 B      | in 10.119 ms ± 2.3 ms        | null                       | in 14.242 ms ± 2.577 ms      | in 15.734 ms ± 2.544 ms        | in 14.549 ms ± 2.934 ms        |
| 512 B      | in 15.91 ms ± 5.08 ms        | null                       | in 32.615 ms ± 3.141 ms      | in 32.949 ms ± 3.619 ms        | in 32.012 ms ± 3.496 ms        |
| 1.024 kB   | in 11.817 ms ± 2.973 ms      | null                       | in 18.256 ms ± 2.631 ms      | in 18.016 ms ± 2.497 ms        | in 18.214 ms ± 2.286 ms        |
| 2.048 kB   | in 15.751 ms ± 3.906 ms      | null                       | in 19.658 ms ± 2.729 ms      | in 31.035 ms ± 3.844 ms        | in 21.251 ms ± 2.598 ms        |
| 4.096 kB   | in 15.634 ms ± 1.739 ms      | null                       | in 27.96 ms ± 2.266 ms       | in 39.242 ms ± 2.373 ms        | in 29.881 ms ± 2.184 ms        |
| 8.192 kB   | in 27.308 ms ± 4.367 ms      | null                       | in 45.995 ms ± 8.192 ms      | in 57.153 ms ± 1.954 ms        | in 47.02 ms ± 2.72 ms          |
| 16.384 kB  | in 43.721 ms ± 2.646 ms      | null                       | in 82.033 ms ± 4.11 ms       | in 96.066 ms ± 1.694 ms        | in 91.79 ms ± 1.904 ms         |
| 32.768 kB  | in 69.204 ms ± 1.897 ms      | null                       | in 137.277 ms ± 3.24 ms      | in 178.642 ms ± 3.191 ms       | in 158.922 ms ± 9.036 ms       |
| 65.536 kB  | in 140.594 ms ± 12.579 ms    | null                       | in 279.471 ms ± 16.862 ms    | in 337.192 ms ± 3.489 ms       | in 291.24 ms ± 2.154 ms        |
| 131.072 kB | in 274.016 ms ± 24.983 ms    | null                       | in 760.743 ms ± 152.671 ms   | in 946.386 ms ± 162.838 ms     | in 855.743 ms ± 148.038 ms     |
| 262.144 kB | in 992.582 ms ± 277.171 ms   | null                       | in 1,618.992 ms ± 352.714 ms | in 1,907.997 ms ± 345.751 ms   | in 1,900.689 ms ± 393.986 ms   |
| 524.288 kB | in 1,357.258 ms ± 31.429 ms  | null                       | in 2,703.744 ms ± 161.049 ms | in 3,469.519 ms ± 264.383 ms   | in 3,033.782 ms ± 168.393 ms   |
| 1.049 MB   | in 2,800.444 ms ± 204.299 ms | null                       | in 5,271.046 ms ± 208.929 ms | in 6,435.916 ms ± 279.453 ms   | in 5,779.501 ms ± 211.956 ms   |