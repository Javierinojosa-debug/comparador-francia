import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'aviso-legal': resolve(__dirname, 'aviso-legal.html'),
        'politica-privacidad': resolve(__dirname, 'politica-privacidad.html'),
        'politica-cookies': resolve(__dirname, 'politica-cookies.html'),
      }
    }
  }
})
