import typescript from 'rollup-plugin-typescript';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const banner = `/*!
 * @module ${pkg.name}
 * @description ${pkg.description}
 * @version ${pkg.version}
 * @link ${pkg.repository}
 * @licence MIT License, https://opensource.org/licenses/MIT
 */
`;
export default {
  input: 'lib/browser-dtector.ts',
  output: {
    name: 'BrowserDtector',
    file: 'dist/lib/browser-dtector.js',
    format: 'umd',
    banner,
    sourcemap: true,
  },
  plugins: [
    typescript(),
    json(),
  ],
};
