import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,  // Set your desired port
  },
  resolve: {
    alias: {
      '@': '/src',  // If you're using any aliases, adjust as needed
    },
  },
})
