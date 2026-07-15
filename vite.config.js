import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/boutique-landing-page/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})