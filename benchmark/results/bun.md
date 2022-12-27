# Bun

## structuredClone

|            | hasTransferables       | structuredClone (no transfer) | structuredClone (manually)   | structuredClone (getTransferables) | structuredClone (getTransferable*) |
| ---------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------- |
| 1 B        | in 0.183 ms ± 0.233 ms | null                          | in 5.844 ms ± 2.683 ms       | in 4.83 ms ± 0.626 ms              | in 4.647 ms ± 0.57 ms              |
| 2 B        | in 0.069 ms ± 0.016 ms | null                          | in 4.955 ms ± 1.908 ms       | in 4.344 ms ± 0.454 ms             | in 4.621 ms ± 0.568 ms             |
| 4 B        | in 0.065 ms ± 0.015 ms | null                          | in 4.215 ms ± 0.409 ms       | in 4.497 ms ± 0.783 ms             | in 4.5 ms ± 0.414 ms               |
| 8 B        | in 0.07 ms ± 0.019 ms  | null                          | in 4.088 ms ± 0.184 ms       | in 4.33 ms ± 0.383 ms              | in 17.075 ms ± 1.248 ms            |
| 16 B       | in 0.064 ms ± 0.015 ms | null                          | in 4.124 ms ± 0.204 ms       | in 4.242 ms ± 0.231 ms             | in 4.436 ms ± 0.343 ms             |
| 32 B       | in 0.067 ms ± 0.014 ms | null                          | in 4.172 ms ± 0.261 ms       | in 10.499 ms ± 12.756 ms           | in 12.12 ms ± 9.618 ms             |
| 64 B       | in 0.057 ms ± now      | null                          | in 3.71 ms ± 0.221 ms        | in 3.822 ms ± 0.219 ms             | in 3.839 ms ± 0.154 ms             |
| 128 B      | in 0.059 ms ± 0.007 ms | null                          | in 3.83 ms ± 0.214 ms        | in 3.954 ms ± 0.234 ms             | in 3.988 ms ± 0.242 ms             |
| 256 B      | in 0.069 ms ± 0.016 ms | null                          | in 13.127 ms ± 4.405 ms      | in 4.335 ms ± 0.105 ms             | in 4.403 ms ± 0.197 ms             |
| 512 B      | in 0.058 ms ± 0.005 ms | null                          | in 4.627 ms ± 0.38 ms        | in 4.989 ms ± 0.198 ms             | in 7.518 ms ± 5.191 ms             |
| 1.024 kB   | in 0.08 ms ± 0.049 ms  | null                          | in 5.489 ms ± 0.107 ms       | in 6.067 ms ± 0.153 ms             | in 6.415 ms ± 0.142 ms             |
| 2.048 kB   | in 0.067 ms ± 0.017 ms | null                          | in 7.396 ms ± 0.146 ms       | in 8.635 ms ± 0.152 ms             | in 10.759 ms ± 3.252 ms            |
| 4.096 kB   | in 0.057 ms ± now      | null                          | in 12.432 ms ± 2.557 ms      | in 13.653 ms ± 0.102 ms            | in 15.206 ms ± 0.465 ms            |
| 8.192 kB   | in 0.061 ms ± now      | null                          | in 20.791 ms ± 1.578 ms      | in 27.239 ms ± 3.584 ms            | in 26.885 ms ± 1.44 ms             |
| 16.384 kB  | in 0.067 ms ± now      | null                          | in 37.942 ms ± 0.796 ms      | in 47.886 ms ± 3.356 ms            | in 50.33 ms ± 0.188 ms             |
| 32.768 kB  | in 0.061 ms ± now      | null                          | in 68.056 ms ± 1.688 ms      | in 92.34 ms ± 6.578 ms             | in 99.827 ms ± 0.49 ms             |
| 65.536 kB  | in 0.064 ms ± now      | null                          | in 214.072 ms ± 57.404 ms    | in 172.559 ms ± 0.363 ms           | in 192.653 ms ± 1.418 ms           |
| 131.072 kB | in 0.083 ms ± now      | null                          | in 269.12 ms ± 5.418 ms      | in 342.139 ms ± 4.019 ms           | in 380.81 ms ± 0.817 ms            |
| 262.144 kB | in 0.1 ms ± 0.007 ms   | null                          | in 751.852 ms ± 50.799 ms    | in 991.602 ms ± 139.609 ms         | in 1,101.891 ms ± 144.6 ms         |
| 524.288 kB | in 0.106 ms ± 0.018 ms | null                          | in 1,485.886 ms ± 148.703 ms | in 1,722.024 ms ± 29.052 ms        | in 1,922.751 ms ± 30.769 ms        |
| 1.049 MB   | in 0.105 ms ± 0.006 ms | null                          | in 2,769.471 ms ± 136.404 ms | in 3,295.247 ms ± 134.417 ms       | in 3,680.42 ms ± 111.839 ms        |

## MessageChannel

|            | hasTransferables             | postMessage (no transfers) | postMessage (manually)       | postMessage (getTransferables) | postMessage (getTransferable*) |
| ---------- | ---------------------------- | -------------------------- | ---------------------------- | ------------------------------ | ------------------------------ |
| 1 B        | in 15.145 ms ± 10.155 ms     | null                       | in 19.133 ms ± 6.605 ms      | in 16.482 ms ± 2.879 ms        | in 24.593 ms ± 6.688 ms        |
| 2 B        | in 16.809 ms ± 8.846 ms      | null                       | in 19.258 ms ± 8.104 ms      | in 16.44 ms ± 3.528 ms         | in 15.95 ms ± 2.93 ms          |
| 4 B        | in 15.1 ms ± 9.809 ms        | null                       | in 18.982 ms ± 9.533 ms      | in 15.098 ms ± 2.227 ms        | in 15.522 ms ± 3.106 ms        |
| 8 B        | in 11.447 ms ± 5.552 ms      | null                       | in 14.217 ms ± 2.649 ms      | in 20.935 ms ± 13.53 ms        | in 15.243 ms ± 3.391 ms        |
| 16 B       | in 12.65 ms ± 6.349 ms       | null                       | in 13.046 ms ± 2.487 ms      | in 22.764 ms ± 12.282 ms       | in 15.179 ms ± 3.517 ms        |
| 32 B       | in 8.052 ms ± 2.159 ms       | null                       | in 13.467 ms ± 2.473 ms      | in 20.276 ms ± 6.628 ms        | in 18.705 ms ± 7.825 ms        |
| 64 B       | in 9.543 ms ± 4.923 ms       | null                       | in 23.32 ms ± 2.59 ms        | in 32.1 ms ± 8.685 ms          | in 32.11 ms ± 10.549 ms        |
| 128 B      | in 7.81 ms ± 2.348 ms        | null                       | in 14.133 ms ± 2.341 ms      | in 20.664 ms ± 7.937 ms        | in 20.858 ms ± 8.983 ms        |
| 256 B      | in 10.62 ms ± 3.535 ms       | null                       | in 14.296 ms ± 2.158 ms      | in 15.649 ms ± 2.456 ms        | in 17.906 ms ± 5.844 ms        |
| 512 B      | in 15.544 ms ± 4.512 ms      | null                       | in 32.039 ms ± 2.06 ms       | in 33.316 ms ± 4.625 ms        | in 33.884 ms ± 3.992 ms        |
| 1.024 kB   | in 10.484 ms ± 3.017 ms      | null                       | in 16.963 ms ± 2.276 ms      | in 17.873 ms ± 2.937 ms        | in 17.638 ms ± 2.615 ms        |
| 2.048 kB   | in 15.474 ms ± 7.053 ms      | null                       | in 20.092 ms ± 2.086 ms      | in 21.359 ms ± 2.144 ms        | in 21.999 ms ± 2.511 ms        |
| 4.096 kB   | in 17.553 ms ± 1.054 ms      | null                       | in 29.556 ms ± 3.046 ms      | in 31.034 ms ± 2.325 ms        | in 33.739 ms ± 2.727 ms        |
| 8.192 kB   | in 28.047 ms ± 2.943 ms      | null                       | in 45.816 ms ± 3.297 ms      | in 48.961 ms ± 2.584 ms        | in 52.751 ms ± 4.175 ms        |
| 16.384 kB  | in 46.641 ms ± 2.352 ms      | null                       | in 86.935 ms ± 5.027 ms      | in 98.599 ms ± 1.889 ms        | in 102.12 ms ± 2.428 ms        |
| 32.768 kB  | in 73.515 ms ± 2.052 ms      | null                       | in 147.392 ms ± 3.823 ms     | in 168.472 ms ± 4.076 ms       | in 185.394 ms ± 9.634 ms       |
| 65.536 kB  | in 148.583 ms ± 10.629 ms    | null                       | in 298.881 ms ± 16.763 ms    | in 316.136 ms ± 2.06 ms        | in 340.047 ms ± 1.823 ms       |
| 131.072 kB | in 285.936 ms ± 26.041 ms    | null                       | in 814.697 ms ± 194.821 ms   | in 936.037 ms ± 193.435 ms     | in 1,007.646 ms ± 173.272 ms   |
| 262.144 kB | in 984.3 ms ± 241.857 ms     | null                       | in 1,810.892 ms ± 395.223 ms | in 2,058.438 ms ± 450.863 ms   | in 2,120.593 ms ± 377.42 ms    |
| 524.288 kB | in 1,512.569 ms ± 97.886 ms  | null                       | in 3,002.403 ms ± 202.296 ms | in 3,323.949 ms ± 286.203 ms   | in 3,605.257 ms ± 290.493 ms   |
| 1.049 MB   | in 2,807.027 ms ± 135.645 ms | null                       | in 5,694.271 ms ± 212.226 ms | in 6,176.813 ms ± 273.996 ms   | in 6,916.032 ms ± 330.077 ms   |