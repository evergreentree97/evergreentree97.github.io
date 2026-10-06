import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [preact({ prerender: { enabled: true, renderTarget: '#root', prerenderScript: fileURLToPath(new URL('./src/prerender.tsx', import.meta.url)) } })],
  base: '/',
  build: { target: 'es2022', cssCodeSplit: true },
})
