import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'mentions-legales': resolve(__dirname, 'mentions-legales.html'),
        'politique-de-confidentialite': resolve(__dirname, 'politique-de-confidentialite.html'),
        'politique-cookies': resolve(__dirname, 'politique-cookies.html'),
      }
    }
  }
})
