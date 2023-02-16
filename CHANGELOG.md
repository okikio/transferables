## [1.0.3](https://github.com/okikio/transferables/compare/v1.0.2...v1.0.3) (2023-02-16)


### Performance Improvements

* optimize streams check ([c5c0091](https://github.com/okikio/transferables/commit/c5c00910314eb25ee008a47fe5970df86f6bf1c1))
* use `ArrayBuffer.isView(..)` for `isTypedArray(...)` ([d9ec09c](https://github.com/okikio/transferables/commit/d9ec09c03542a9959fdff5db7bb4fb3f026b4f3b))

## [1.0.2](https://github.com/okikio/transferables/compare/v1.0.1...v1.0.2) (2022-12-27)


### Bug Fixes

* remove `structuredClone` not supported errors in Bun ([7668b8e](https://github.com/okikio/transferables/commit/7668b8e84a7c2ce603bcecd15c6f37e8b99c685c))


### Performance Improvements

* faster checks in `hasTransferable` ([51d0d2a](https://github.com/okikio/transferables/commit/51d0d2accaed7723a88e3bfc44c83da8e14014dc))
* reduce array coping + switch to for loops ([f518510](https://github.com/okikio/transferables/commit/f51851032473b909e215433f54e2282289795478))

## [1.0.1](https://github.com/okikio/transferables/compare/v1.0.0...v1.0.1) (2022-12-25)


### Performance Improvements

* use consts for testing browser support ([e8f783a](https://github.com/okikio/transferables/commit/e8f783aaf6c1a242c3605f3350c2ad0e4ec7aaae))

# 1.0.0 (2022-12-20)


### Bug Fixes

* **benchmark:** fix firefox benchmark ([7498cc8](https://github.com/okikio/transferables/commit/7498cc81dae26e253baac9f217856ad25e5a525a))
* broken tests ([ad0dbe2](https://github.com/okikio/transferables/commit/ad0dbe22946382352b20201d37367f785d19ace2))
* browser benchmark ([0ee45db](https://github.com/okikio/transferables/commit/0ee45dbad87f284e5cea99f7823e1d85f6c012d2))
* browser benchmark import ([a200f98](https://github.com/okikio/transferables/commit/a200f98146417d3e60f0bfa7f87e40bc33320299))
* oops wrong units ([71a70a1](https://github.com/okikio/transferables/commit/71a70a1310c541d1fb8ab0bdd20b575099a0754d))


### Features

* add browser benchmarks via playwright ([8649746](https://github.com/okikio/transferables/commit/8649746d0fab36ea2ed2d0353571d8de9e7b21d0))


### Performance Improvements

* benchmark messagechannel ([48d1273](https://github.com/okikio/transferables/commit/48d1273fd5ec812168a8394a8e98f9997c76a962))
* improve perfs + test transfer support ([a30fe86](https://github.com/okikio/transferables/commit/a30fe86f3bf9ff823db5430d9708cf568a70e42c))
* optimize hasTransferables, getTransferables, and getTransferable ([af9be28](https://github.com/okikio/transferables/commit/af9be28071c43d05d188719eadac3f884c0d945d))
