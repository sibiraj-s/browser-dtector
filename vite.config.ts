import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'docs',
  build: {
    outDir: 'dist',
  },
  test: {
    root: '.',
    environment: 'happy-dom',
  },
  plugins: [tailwindcss()],
});
