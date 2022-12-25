# Bun

## structuredClone

|            | hasTransferables         | structuredClone (no transfer) | structuredClone (manually)  | structuredClone (getTransferable*) | structuredClone (getTransferables) |
| ---------- | ------------------------ | ----------------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.166 ms ± 0.241 ms   | null                          | in 4.576 ms ± 1.545 ms      | in 9.079 ms ± 4.624 ms             | in 4.988 ms ± 1.851 ms             |
| 2 B        | in 0.063 ms ± 0.019 ms   | null                          | in 3.89 ms ± 0.338 ms       | in 4.063 ms ± 0.324 ms             | in 3.976 ms ± 0.253 ms             |
| 4 B        | in 0.059 ms ± 0.016 ms   | null                          | in 3.829 ms ± 0.171 ms      | in 3.993 ms ± 0.266 ms             | in 3.886 ms ± 0.306 ms             |
| 8 B        | in 0.057 ms ± 0.014 ms   | null                          | in 4.22 ms ± 0.804 ms       | in 10.218 ms ± 2.872 ms            | in 3.939 ms ± 0.313 ms             |
| 16 B       | in 0.056 ms ± 0.014 ms   | null                          | in 3.871 ms ± 0.229 ms      | in 5.368 ms ± 2.673 ms             | in 7.411 ms ± 7.164 ms             |
| 32 B       | in 0.054 ms ± 0.012 ms   | null                          | in 13.078 ms ± 7.032 ms     | in 3.496 ms ± 0.28 ms              | in 5.03 ms ± 3.557 ms              |
| 64 B       | in 0.045 ms ± 0.013 ms   | null                          | in 3.42 ms ± 0.398 ms       | in 3.662 ms ± 0.448 ms             | in 3.496 ms ± 0.241 ms             |
| 128 B      | in 0.059 ms ± 0.042 ms   | null                          | in 3.424 ms ± 0.167 ms      | in 9.917 ms ± 3.095 ms             | in 3.735 ms ± 0.136 ms             |
| 256 B      | in 0.05 ms ± 0.016 ms    | null                          | in 5.398 ms ± 2.647 ms      | in 4.02 ms ± 0.155 ms              | in 5.372 ms ± 3.144 ms             |
| 512 B      | in 0.053 ms ± 0.019 ms   | null                          | in 4.359 ms ± 0.364 ms      | in 4.766 ms ± 0.11 ms              | in 4.434 ms ± 0.127 ms             |
| 1.024 kB   | in 0.083 ms ± 0.072 ms   | null                          | in 4.891 ms ± 0.124 ms      | in 11.678 ms ± 2.792 ms            | in 5.551 ms ± 0.084 ms             |
| 2.048 kB   | in 0.089 ms ± 0.067 ms   | null                          | in 6.603 ms ± 0.126 ms      | in 9.18 ms ± 0.084 ms              | in 8.149 ms ± 0.163 ms             |
| 4.096 kB   | in 0.111 ms ± 0.083 ms   | null                          | in 11.176 ms ± 2.294 ms     | in 14.99 ms ± 0.096 ms             | in 13.651 ms ± 1.152 ms            |
| 8.192 kB   | in 0.109 ms ± 0.024 ms   | null                          | in 17.642 ms ± 1.124 ms     | in 28.914 ms ± 1.733 ms            | in 24.308 ms ± 0.734 ms            |
| 16.384 kB  | in 0.268 ms ± 0.01 ms    | null                          | in 33.382 ms ± 0.759 ms     | in 54.619 ms ± 3.251 ms            | in 48.181 ms ± 2.004 ms            |
| 32.768 kB  | in 0.508 ms ± 0.072 ms   | null                          | in 62.395 ms ± 1 second     | in 104.973 ms ± 5.325 ms           | in 85.585 ms ± 0.461 ms            |
| 65.536 kB  | in 1.184 ms ± 0.009 ms   | null                          | in 143.959 ms ± 22.759 ms   | in 201.519 ms ± 1.078 ms           | in 170.433 ms ± 0.5 ms             |
| 131.072 kB | in 2.749 ms ± 0.032 ms   | null                          | in 244.489 ms ± 2.35 ms     | in 401.752 ms ± 1.948 ms           | in 333.53 ms ± 0.608 ms            |
| 262.144 kB | in 11.464 ms ± 4.689 ms  | null                          | in 673.599 ms ± 57.178 ms   | in 1,055.31 ms ± 111.003 ms        | in 935.462 ms ± 122.829 ms         |
| 524.288 kB | in 12.822 ms ± 3.689 ms  | null                          | in 1,289.555 ms ± 97.139 ms | in 1,861.274 ms ± 54.887 ms        | in 1,501.589 ms ± 113.024 ms       |
| 1.049 MB   | in 37.066 ms ± 21.567 ms | null                          | in 2,462.85 ms ± 113.828 ms | in 3,682.904 ms ± 123.243 ms       | in 3,177.187 ms ± 96.377 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferable*) | postMessage (getTransferables) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 18.607 ms ± 15.437 ms     | null                       | in 14.941 ms ± 4.174 ms      | in 14.321 ms ± 2.166 ms        | in 16.34 ms ± 4.379 ms         |
| 2 B        | in 14.129 ms ± 7.354 ms      | null                       | in 12.802 ms ± 2.49 ms       | in 14.169 ms ± 1.728 ms        | in 17.725 ms ± 5.724 ms        |
| 4 B        | in 11.362 ms ± 6.544 ms      | null                       | in 13.485 ms ± 5.004 ms      | in 13.184 ms ± 2.031 ms        | in 16.429 ms ± 3.57 ms         |
| 8 B        | in 10.645 ms ± 3.025 ms      | null                       | in 12.443 ms ± 4.156 ms      | in 12.789 ms ± 2.214 ms        | in 12.44 ms ± 1.179 ms         |
| 16 B       | in 12.775 ms ± 4.222 ms      | null                       | in 10.664 ms ± 1.459 ms      | in 12.485 ms ± 2.246 ms        | in 10.608 ms ± 1.234 ms        |
| 32 B       | in 8.123 ms ± 2.829 ms       | null                       | in 10.377 ms ± 0.95 ms       | in 12.588 ms ± 2.341 ms        | in 10.321 ms ± 1.11 ms         |
| 64 B       | in 7.293 ms ± 2.06 ms        | null                       | in 19.21 ms ± 1.104 ms       | in 28.005 ms ± 10.046 ms       | in 18.971 ms ± 1.977 ms        |
| 128 B      | in 8.887 ms ± 3.885 ms       | null                       | in 11.906 ms ± 2.645 ms      | in 21.62 ms ± 11.943 ms        | in 11.421 ms ± 1.663 ms        |
| 256 B      | in 8.256 ms ± 3.81 ms        | null                       | in 11.099 ms ± 0.929 ms      | in 15.696 ms ± 4.162 ms        | in 11.539 ms ± 1.469 ms        |
| 512 B      | in 13.322 ms ± 3.382 ms      | null                       | in 26.769 ms ± 2.625 ms      | in 27.567 ms ± 2.966 ms        | in 26.676 ms ± 1.983 ms        |
| 1.024 kB   | in 11.557 ms ± 4.174 ms      | null                       | in 14.361 ms ± 1.991 ms      | in 16.032 ms ± 1.461 ms        | in 17.183 ms ± 1.181 ms        |
| 2.048 kB   | in 10.683 ms ± 2.506 ms      | null                       | in 16.64 ms ± 0.985 ms       | in 27.016 ms ± 2.193 ms        | in 19.383 ms ± 1.083 ms        |
| 4.096 kB   | in 15.818 ms ± 3.996 ms      | null                       | in 24.239 ms ± 0.868 ms      | in 33.309 ms ± 1.865 ms        | in 28.192 ms ± 2.464 ms        |
| 8.192 kB   | in 24.211 ms ± 1.147 ms      | null                       | in 37.705 ms ± 1.281 ms      | in 52.169 ms ± 2.296 ms        | in 46.102 ms ± 1.891 ms        |
| 16.384 kB  | in 40.318 ms ± 1.81 ms       | null                       | in 77.318 ms ± 4.112 ms      | in 93.183 ms ± 2.948 ms        | in 87.198 ms ± 3.243 ms        |
| 32.768 kB  | in 67.653 ms ± 1.822 ms      | null                       | in 133.7 ms ± 2.423 ms       | in 178.268 ms ± 3.287 ms       | in 165.29 ms ± 7.323 ms        |
| 65.536 kB  | in 137.221 ms ± 9.887 ms     | null                       | in 289.521 ms ± 18.938 ms    | in 331.142 ms ± 2.951 ms       | in 302.033 ms ± 1.989 ms       |
| 131.072 kB | in 269.848 ms ± 21.562 ms    | null                       | in 741.471 ms ± 142.424 ms   | in 911.22 ms ± 139.284 ms      | in 878.338 ms ± 141.567 ms     |
| 262.144 kB | in 953.599 ms ± 236.48 ms    | null                       | in 1,553.365 ms ± 324.512 ms | in 1,953.538 ms ± 344.735 ms   | in 1,765.412 ms ± 281.419 ms   |
| 524.288 kB | in 1,333.449 ms ± 123.267 ms | null                       | in 2,649.809 ms ± 231.13 ms  | in 3,361.171 ms ± 215.906 ms   | in 3,119.227 ms ± 235.517 ms   |
| 1.049 MB   | in 2,726.938 ms ± 273.655 ms | null                       | in 5,105.747 ms ± 127.947 ms | in 6,255.647 ms ± 181.936 ms   | in 6,209.978 ms ± 423.367 ms   |