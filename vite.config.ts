import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'node:child_process': 'data:text/javascript,export const spawnSync = () => ({});',
      'node:v8': 'data:text/javascript,export const setFlagsFromString = () => {};',
      'node:vm': 'data:text/javascript,export const runInNewContext = () => {};'
    }
  },
  build: {
    target: "esnext",
  },
  server: {
    allowedHosts: true
  }
})

