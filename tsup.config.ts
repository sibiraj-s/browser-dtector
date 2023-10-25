import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/browser-dtector.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  format: ['cjs', 'esm', 'iife'],
});
