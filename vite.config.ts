import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'devserver-main--shimmering-scone-21fa8c.netlify.app', // Specific Netlify domain from error
      '*.netlify.app', // Allow all Netlify subdomains for future deployments
      'localhost'
    ]
  }
})
