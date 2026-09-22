import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

await build({ configFile: false, plugins: [react()], resolve: { alias: { '@': path.resolve('src') } },
  ssr: { noExternal: ['gsap', '@gsap/react', 'react-helmet-async'] },
  build: { ssr: 'scripts/blog-ssr-audit.tsx', outDir: '.blog-audit/ssr', emptyOutDir: true, minify: false } })
