import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: process.env.MODE !== 'production' ? 'classic' : 'automatic',
      babel: {
        plugins: ["@emotion/babel-plugin"],
        babelrc: true
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
  },
  server: {
    host: '0.0.0.0',
    open: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.com/api/v1',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
    //   }
    // }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
      }
    }
  }
})