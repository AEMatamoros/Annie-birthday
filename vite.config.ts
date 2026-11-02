import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://aematamoros.github.io/annie-cumple/
export default defineConfig({
  base: '/annie-cumple/',
  plugins: [react()],
  build: {
    // GitHub Pages can serve the main branch's /docs folder directly from Settings > Pages.
    outDir: 'docs',
    emptyOutDir: true,
  },
});
