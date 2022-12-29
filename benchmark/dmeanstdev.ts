// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
const BLOCKSIZE = 128;

/**
* Computes the sum of double-precision floating-point strided array elements using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var floor = require( '@stdlib/math-base-special-floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = Math.floor( x.length / 2 );
*
* var v = sum( N, x, 2, 1 );
* // returns 5.0
*/
function sum(N: number, x: Float64Array, stride: number, offset: number): number {
  let ix: number;
  let s0: number;
  let s1: number;
  let s2: number;
  let s3: number;
  let s4: number;
  let s5: number;
  let s6: number;
  let s7: number;
  let M: number;
  let s: number;
  let n: number;
  let i: number;

  if (N <= 0) return 0.0;
  if (N === 1 || stride === 0) 
    return x[offset];
  
  ix = offset;
  if (N < 8) {
    // Use simple summation...
    s = 0.0;
    for (i = 0; i < N; i++) {
      s += x[ix];
      ix += stride;
    }
    return s;
  }

  if (N <= BLOCKSIZE) {
    // Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
    s0 = x[ix];
    s1 = x[ix + stride];
    s2 = x[ix + (2 * stride)];
    s3 = x[ix + (3 * stride)];
    s4 = x[ix + (4 * stride)];
    s5 = x[ix + (5 * stride)];
    s6 = x[ix + (6 * stride)];
    s7 = x[ix + (7 * stride)];
    ix += 8 * stride;

    M = N % 8;
    for (i = 8; i < N - M; i += 8) {
      s0 += x[ix];
      s1 += x[ix + stride];
      s2 += x[ix + (2 * stride)];
      s3 += x[ix + (3 * stride)];
      s4 += x[ix + (4 * stride)];
      s5 += x[ix + (5 * stride)];
      s6 += x[ix + (6 * stride)];
      s7 += x[ix + (7 * stride)];
      ix += 8 * stride;
    }

    // Pairwise sum the accumulators:
    s = ((s0 + s1) + (s2 + s3)) + ((s4 + s5) + (s6 + s7));

    // Clean-up loop...
    for (i; i < N; i++) {
      s += x[ix];
      ix += stride;
    }

    return s;
  }

  // Recurse by dividing by two, but avoiding non-multiples of unroll factor...
  n = Math.floor(N / 2);
  n -= n % 8;

  return sum(n, x, stride, ix) + sum(N - n, x, stride, ix + (n * stride));
}

/**
* Computes the sum of double-precision floating-point strided array elements using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var N = x.length;
*
* var v = dsumpw( N, x, 1 );
* // returns 1.0
*/
function dsumpw(N: number, x: Float64Array, stride: number): number {
  let ix: number;
  let s: number;
  let i: number;

  if (N <= 0) return 0.0;
  if (N === 1 || stride === 0) return x[0];
  
  if (stride < 0) { ix = (1 - N) * stride; } 
  else { ix = 0; }

  if (N < 8) {
    // Use simple summation...
    s = 0.0;
    for (i = 0; i < N; i++) {
      s += x[ix];
      ix += stride;
    }

    return s;
  }

  return sum(N, x, stride, ix);
}

/**
* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvarpn( x.length, 1, x, 1, out, 1 );
* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
*/
function dmeanvarpn(N: number, correction: number, x: Float64Array, strideX: number, out: Float64Array, strideOut: number): Float64Array {
  let mu: number;
  let ix: number;
  let io: number;
  let M2: number;
  let M: number;
  let d: number;
  let c: number;
  let n: number;
  let i: number;

  if (strideX < 0) { ix = (1 - N) * strideX; } 
  else { ix = 0; }

  if (strideOut < 0) { io = -strideOut; } 
  else { io = 0; }

  if (N <= 0) {
    out[io] = NaN;
    out[io + strideOut] = NaN;
    return out;
  }

  n = N - correction;
  if (N === 1 || strideX === 0) {
    out[io] = x[ix];

    if (n <= 0.0) { out[io + strideOut] = NaN; } 
    else { out[io + strideOut] = 0.0; }

    return out;
  }

  // Compute an estimate for the mean:
  mu = dsumpw(N, x, strideX) / N;
  if (mu !== mu) {
    out[io] = NaN;
    out[io + strideOut] = NaN;
    return out;
  }

  // Compute the sum of squared differences from the mean...
  M2 = 0.0;
  M = 0.0;
  for (i = 0; i < N; i++) {
    d = x[ix] - mu;
    M2 += d * d;
    M += d;
    ix += strideX;
  }

  // Compute an error term for the mean:
  c = M / N;
  out[io] = mu + c;
  
  if (n <= 0.0) { out[io + strideOut] = NaN; } 
  else { out[io + strideOut] = (M2 / n) - (c * (M / n)); }

  return out;
}

/**
* Computes the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanstdevpn( x.length, 1, x, 1, out, 1 );
* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
*/
export function dmeanstdev(N: number, correction: number, x: Float64Array, strideX: number, out: Float64Array, strideOut: number): Float64Array {
  let io: number;

  dmeanvarpn(N, correction, x, strideX, out, strideOut);
  if (strideOut < 0) { io = 0; } 
  else { io = strideOut; }

  out[io] = Math.sqrt(out[io]);
  return out;
}

export default dmeanstdev;