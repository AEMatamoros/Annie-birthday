import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://aematamoros.github.io/annie-cumple/
export default defineConfig({
  base: '/annie-cumple/',
  plugins: [react()],
});
