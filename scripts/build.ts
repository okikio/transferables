// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./dist");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./dist",
  shims: {
    // see JS docs for overview and more options
    deno: false,
  },
  typeCheck: "both",
  test: false,
  skipSourceOutput: false,
  packageManager: "pnpm",
  package: {
    // package.json properties
    "name": "transferables",
    "type": "module",
    "sideEffects": false,
    "access": "public", 
    "umd": "Transferables",
    "version": Deno.args[0]?.replace(/^v/, "") ?? "0.0.0",
    "description": "Utility library that lists out all transferable objects that can be transfered between Workers and the main thread.",
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://github.com/okikio/transferables.git"
    },
    "unpkg": "./esm/mod.js",
    "browser": "./esm/mod.js",
    "directories": {
      "esm": "./esm",
      "script": "./script",
      "types": "./types",
      "src": "./src"
    },
    "files": [
      "esm",
      "script",
      "types",
      "src"
    ],
    "engines": {
      "node": ">=18"
    },
    "keywords": [
      "transferable-objects",
      "transferable",
      "typescript",
      "webworker",
      "worker",
      "structuredClone",
      "uint8array",
      "int8array",
      "uint8clampedarray",
      "int16array",
      "uint16array",
      "int32array",
      "uint32array",
      "float32array",
      "float64array",
      "arraybuffer",
      "messageport",
      "messagechannel",
      "readablestream",
      "writablestream",
      "transformstream",
      "streams"
    ],
    "author": {
      "name": "Okiki Ojo",
      "email": "hey@okikio.dev",
      "url": "https://okikio.dev"
    },
    "bugs": {
      "url": "https://github.com/okikio/transferables/issues"
    },
    "homepage": "https://github.com/okikio/transferables",
  },
  compilerOptions: {
    lib: ["DOM", "DOM.Iterable", "ES2023"]
  },
  async postBuild() {
    // steps to run after building and before running the tests
    await Promise.all([
      Deno.copyFile("LICENSE", "dist/LICENSE"),
      Deno.copyFile("README.md", "dist/README.md"),
    ])
  },
});