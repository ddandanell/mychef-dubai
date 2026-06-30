import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'plugin-inspect-react-code'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: mode === 'production' ? [react()] : [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router'],
          'vendor-ui': ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
}));
