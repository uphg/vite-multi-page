// vite.config.js
// import { resolve } from 'path'
// import { defineConfig } from 'vite'

export default {
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue']
    }
  }
}