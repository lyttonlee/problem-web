import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'element-plus',
    //     esModule: true,
    //     ensureStyleFile: true,
    //     resolveStyle: (name) => {
    //       name = name.slice(3)
    //       return `element-plus/packages/theme-chalk/src/${name}.scss`
    //     },
    //     resolveComponent: (name) => {
    //       return `element-plus/lib/${name}`
    //     },
    //   }]
    // })
  ],
  resolve: {
    alias: {
      '@': 'src/'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${('src/style/global/config.less')}";`,
        },
        javascriptEnabled: true,
      },
    }
  },
  server: {
    hmr: true,
    port: 9201,
    proxy: {
      '/api': {
        target: 'http://localhost:9200',
        changeOrigin: true
      }
    }
  }
})
