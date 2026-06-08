import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuration pour GitHub Pages
// Remplace par ton nom d'utilisateur GitHub et le nom de ton repo
const GITHUB_USERNAME = 'gabri-barreda'
const REPO_NAME = 'portfolio'

// Base path : / pour user/org site, /{REPO_NAME}/ pour project site
const BASE = process.env.NODE_ENV === 'production'
  ? `/${REPO_NAME}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    port: 3000,
    open: true,
  },
})
