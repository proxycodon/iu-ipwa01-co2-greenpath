import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert the file URL to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    https: {
      key: fs.readFileSync('./key-unencrypted.pem'),
      cert: fs.readFileSync('./cert.pem')
    },
    port: 8080
  }
})
