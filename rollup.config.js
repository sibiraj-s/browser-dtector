import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

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
  input: 'lib/browser-dtector.js',
  output: [
    {
      name: 'BrowserDtector',
      file: 'dist/lib/browser-dtector.umd.js',
      format: 'umd',
      banner,
      sourcemap: true,
    }, {
      file: 'dist/lib/browser-dtector.js',
      format: 'cjs',
      banner,
      sourcemap: true,
    }, {
      file: 'dist/lib/browser-dtector.esm.js',
      format: 'esm',
      banner,
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    babel(),
  ],
};
