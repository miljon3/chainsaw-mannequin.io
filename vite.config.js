import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/chainsaw-mannequin.io/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
