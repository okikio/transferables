# Node

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.234 ms ± 0.303 ms | null                          | in 8.072 ms ± 2.925 ms       | in 7.191 ms ± 0.96 ms              | in 7.254 ms ± 1.399 ms             |
| 2 B        | in 0.081 ms ± 0.018 ms | null                          | in 5.965 ms ± 0.522 ms       | in 6.644 ms ± 1.168 ms             | in 6.927 ms ± 1.751 ms             |
| 4 B        | in 0.08 ms ± 0.017 ms  | null                          | in 6.615 ms ± 1.017 ms       | in 6.829 ms ± 1.064 ms             | in 7.387 ms ± 1.99 ms              |
| 8 B        | in 0.09 ms ± 0.021 ms  | null                          | in 6.71 ms ± 0.895 ms        | in 20.611 ms ± 5.823 ms            | in 7.035 ms ± 0.59 ms              |
| 16 B       | in 0.077 ms ± 0.031 ms | null                          | in 7.382 ms ± 0.898 ms       | in 7.336 ms ± 1.232 ms             | in 10.427 ms ± 8.138 ms            |
| 32 B       | in 0.071 ms ± 0.01 ms  | null                          | in 24.047 ms ± 8.596 ms      | in 5.99 ms ± 0.324 ms              | in 6.126 ms ± 0.574 ms             |
| 64 B       | in 0.059 ms ± 0.01 ms  | null                          | in 6.277 ms ± 0.265 ms       | in 6.169 ms ± 0.702 ms             | in 6.209 ms ± 1.101 ms             |
| 128 B      | in 0.067 ms ± 0.012 ms | null                          | in 10.461 ms ± 9.513 ms      | in 6.662 ms ± 1.028 ms             | in 11.805 ms ± 6.637 ms            |
| 256 B      | in 0.06 ms ± 0.006 ms  | null                          | in 6.74 ms ± 0.951 ms        | in 7.325 ms ± 1.746 ms             | in 7.672 ms ± 2.043 ms             |
| 512 B      | in 0.329 ms ± 0.517 ms | null                          | in 20.113 ms ± 6.7 ms        | in 7.553 ms ± 0.467 ms             | in 7.508 ms ± 0.293 ms             |
| 1.024 kB   | in 0.104 ms ± 0.076 ms | null                          | in 10.338 ms ± 4.851 ms      | in 8.916 ms ± 0.483 ms             | in 10.292 ms ± 1.011 ms            |
| 2.048 kB   | in 0.078 ms ± 0.031 ms | null                          | in 12.731 ms ± 4.189 ms      | in 20.071 ms ± 4.128 ms            | in 13.538 ms ± 1.088 ms            |
| 4.096 kB   | in 0.077 ms ± 0.005 ms | null                          | in 16.616 ms ± 0.942 ms      | in 18.819 ms ± 0.687 ms            | in 21.302 ms ± 1.053 ms            |
| 8.192 kB   | in 0.092 ms ± 0.031 ms | null                          | in 29.087 ms ± 2.62 ms       | in 35.325 ms ± 2.665 ms            | in 35.8 ms ± 0.781 ms              |
| 16.384 kB  | in 0.109 ms ± 0.033 ms | null                          | in 51.857 ms ± 1.034 ms      | in 64.997 ms ± 4.406 ms            | in 66.386 ms ± 1.447 ms            |
| 32.768 kB  | in 0.085 ms ± 0.007 ms | null                          | in 91.846 ms ± 6.524 ms      | in 125.103 ms ± 11.483 ms          | in 128.5 ms ± 1.326 ms             |
| 65.536 kB  | in 0.084 ms ± now      | null                          | in 245.999 ms ± 56.777 ms    | in 230.328 ms ± 4.21 ms            | in 253.699 ms ± 4.85 ms            |
| 131.072 kB | in 0.114 ms ± 0.011 ms | null                          | in 362.004 ms ± 11.855 ms    | in 459.922 ms ± 7.374 ms           | in 492.903 ms ± 4.081 ms           |
| 262.144 kB | in 0.13 ms ± 0.01 ms   | null                          | in 1,040.85 ms ± 102.61 ms   | in 1,314.734 ms ± 148.121 ms       | in 1,414.915 ms ± 219.162 ms       |
| 524.288 kB | in 0.145 ms ± 0.043 ms | null                          | in 2,062.962 ms ± 134.596 ms | in 2,378.531 ms ± 71.954 ms        | in 2,674.353 ms ± 177.591 ms       |
| 1.049 MB   | in 0.203 ms ± 0.084 ms | null                          | in 3,710.785 ms ± 112.373 ms | in 4,538.864 ms ± 217.376 ms       | in 4,805.373 ms ± 170.508 ms       |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 13.24 ms ± 2.399 ms       | null                       | in 16.818 ms ± 2.361 ms      | in 28.761 ms ± 14.877 ms       | in 33.222 ms ± 16.369 ms       |
| 2 B        | in 9.165 ms ± 2.829 ms       | null                       | in 16.124 ms ± 2.442 ms      | in 26.57 ms ± 13.558 ms        | in 33.128 ms ± 11.682 ms       |
| 4 B        | in 9.275 ms ± 2.805 ms       | null                       | in 15.73 ms ± 1.925 ms       | in 23.531 ms ± 11.718 ms       | in 25.373 ms ± 10.677 ms       |
| 8 B        | in 8.84 ms ± 3.2 ms          | null                       | in 20.482 ms ± 10.042 ms     | in 17.283 ms ± 3.319 ms        | in 23.494 ms ± 12.055 ms       |
| 16 B       | in 8.938 ms ± 3.195 ms       | null                       | in 16.011 ms ± 1.887 ms      | in 20.669 ms ± 7.536 ms        | in 21.72 ms ± 7.96 ms          |
| 32 B       | in 15.123 ms ± 8.94 ms       | null                       | in 15.537 ms ± 1.815 ms      | in 17.621 ms ± 2.986 ms        | in 18.341 ms ± 4.724 ms        |
| 64 B       | in 15.871 ms ± 10.845 ms     | null                       | in 29.418 ms ± 1.513 ms      | in 32.585 ms ± 5.615 ms        | in 32.774 ms ± 3.257 ms        |
| 128 B      | in 11.798 ms ± 7.028 ms      | null                       | in 16.593 ms ± 1.742 ms      | in 18.636 ms ± 4.215 ms        | in 18.746 ms ± 3.097 ms        |
| 256 B      | in 11.195 ms ± 4.036 ms      | null                       | in 16.772 ms ± 1.89 ms       | in 17.904 ms ± 3.164 ms        | in 18.674 ms ± 3.252 ms        |
| 512 B      | in 19.208 ms ± 6.455 ms      | null                       | in 41.207 ms ± 5.508 ms      | in 41.013 ms ± 4.41 ms         | in 41.046 ms ± 2.311 ms        |
| 1.024 kB   | in 10.536 ms ± 2.806 ms      | null                       | in 21.608 ms ± 4.944 ms      | in 20.397 ms ± 2.856 ms        | in 21.91 ms ± 3.128 ms         |
| 2.048 kB   | in 15.049 ms ± 6.217 ms      | null                       | in 23.734 ms ± 2.602 ms      | in 26.034 ms ± 2.771 ms        | in 27.453 ms ± 3.634 ms        |
| 4.096 kB   | in 15.2 ms ± 3.527 ms        | null                       | in 33.154 ms ± 4.173 ms      | in 34.878 ms ± 1.615 ms        | in 44.992 ms ± 4.859 ms        |
| 8.192 kB   | in 25.184 ms ± 4.815 ms      | null                       | in 49.104 ms ± 1.662 ms      | in 55.315 ms ± 2.578 ms        | in 60.123 ms ± 4.013 ms        |
| 16.384 kB  | in 34.769 ms ± 5.663 ms      | null                       | in 87.565 ms ± 7.419 ms      | in 99.485 ms ± 5.803 ms        | in 111.008 ms ± 5.338 ms       |
| 32.768 kB  | in 56.611 ms ± 4.753 ms      | null                       | in 158.577 ms ± 4.561 ms     | in 185.805 ms ± 11.604 ms      | in 199.79 ms ± 5.608 ms        |
| 65.536 kB  | in 117.318 ms ± 19.612 ms    | null                       | in 343.89 ms ± 39.457 ms     | in 339.469 ms ± 8.825 ms       | in 376.995 ms ± 18.719 ms      |
| 131.072 kB | in 229.331 ms ± 46.896 ms    | null                       | in 761.693 ms ± 162.559 ms   | in 919.692 ms ± 215.354 ms     | in 982.851 ms ± 230.455 ms     |
| 262.144 kB | in 851.844 ms ± 175.842 ms   | null                       | in 1,956.723 ms ± 401.778 ms | in 2,219.883 ms ± 437.351 ms   | in 2,398.484 ms ± 439.644 ms   |
| 524.288 kB | in 1,366.935 ms ± 70.565 ms  | null                       | in 3,458.635 ms ± 319.082 ms | in 3,863.142 ms ± 246.783 ms   | in 4,047.934 ms ± 207.649 ms   |
| 1.049 MB   | in 2,596.858 ms ± 212.632 ms | null                       | in 6,490.667 ms ± 258.086 ms | in 7,214.219 ms ± 371.247 ms   | in 7,903.906 ms ± 399.625 ms   |