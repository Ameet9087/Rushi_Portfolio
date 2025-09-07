// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // listen on all network interfaces
    port: 3000,       // optional, default is 5173
    strictPort: false, // allows fallback if port is busy
  },
})
