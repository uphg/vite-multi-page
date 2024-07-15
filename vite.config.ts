// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'


const packages = {
  foo: resolve(__dirname, 'packages/foo'),
  bar: resolve(__dirname, 'packages/bar')
}

// 根据 npm 运行时的参数获取对应 root 目录
const barDir = packages.bar
const fooDir = packages.foo

    // console.log('fooDir', fooDir)
    // console.log('barDir', barDir)


function getRootDir() {
  // const rootDir = process.env.npm_config_root || barDir

  return 'foo'
}

export default defineConfig(({ command, mode }) => {
  console.log('command')
  console.log(command)
  console.log('mode')
  console.log(mode)
  return {
    // root: getRootDir(),
    build: {
      rollupOptions: {
        input: {
          foo: resolve(__dirname, 'packages/foo'),
          bar: barDir,
          // nested: resolve(__dirname, 'nested/index.html'),
        },
      },
    },
  }
})