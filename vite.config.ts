import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
    port: 9201,
    proxy: {
      '/api': {
        target: 'http://localhost:9200',
        changeOrigin: true
      }
    }
  }
})
