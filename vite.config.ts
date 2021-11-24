import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      ignoreBrowserslistConfig: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    // host: '192.168.0.999'
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       // 前缀追加
  //       require('autoprefixer')({
  //         overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
  //         grid: true
  //       })
  //     ]
  //   }
  // }
})
