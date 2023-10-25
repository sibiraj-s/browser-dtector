import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: 'docs',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'happy-dom',
  },
});
