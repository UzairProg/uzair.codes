import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
  extend: {
    colors: {
      bg: '#000000',
      fg: '#ffffff',
      muted: '#9ca3af',
      accent: '#22c55e'
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    }
  }
}
})
