import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['lib/browser-dtector.ts'],
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  minify: process.env.CI === 'true',
});
