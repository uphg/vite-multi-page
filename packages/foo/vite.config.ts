import { resolve } from 'path'
import { defineConfig } from 'vite'

const dir = resolve(__dirname)

export default defineConfig({
  root: dir,
  envDir: dir,
  publicDir: resolve(__dirname, 'public')
})