/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config)
import { defineConfig } from "vitest/config";
import { umd as name } from "./package.json";
import dts from 'vite-plugin-dts';

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
  },
  plugins: [
    dts({
      outputDir: "@types"
    })
  ],
  worker: {
    format: "iife"
  },
  build: {
    outDir: "lib",
    lib: {
      entry: "src/index.ts",
      name,
      formats: ["es", "cjs", "umd"],
      fileName(format) {
        switch (format) {
          case "es":
            return "index.mjs";
          case "cjs":
            return "index.cjs";
          default:
            return "index.js";
        }
      }
    },
  },
});
