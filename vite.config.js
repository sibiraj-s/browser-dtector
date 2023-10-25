import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'docs/dist',
  },
  test: {
    environment: 'happy-dom',
  },
});
