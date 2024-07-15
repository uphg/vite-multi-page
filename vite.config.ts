// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

const barDir = resolve(__dirname, 'src/pages/bar')

console.log('barDir')
console.log(barDir)

export default defineConfig({
  root: barDir,
  build: {
    rollupOptions: {
      input: {
        foo: resolve(__dirname, 'src/pages/foo'),
        bar: barDir,
        // nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})