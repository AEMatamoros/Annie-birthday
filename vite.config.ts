import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://aematamoros.github.io/Annie-birthday/
export default defineConfig({
  base: '/Annie-birthday/',
  plugins: [react()],
  build: {
    // GitHub Pages can serve the main branch's /docs folder directly from Settings > Pages.
    outDir: 'docs',
    emptyOutDir: true,
  },
});
