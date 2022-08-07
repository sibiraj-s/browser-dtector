const path = require('node:path');
const fs = require('node:fs/promises');
const gulp = require('gulp');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const babel = require('@rollup/plugin-babel').default;
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const terser = require('gulp-plugin-terser');

const pkg = require('./package.json');

const outDir = path.resolve(__dirname, 'dist');
const libDir = path.resolve(outDir, 'lib');

const supportedFileExtension = ['.js', '.ts'];

const banner = `/*!
 * @module ${pkg.name}
 * @description ${pkg.description}
 * @version ${pkg.version}
 * @link ${pkg.repository}
 * @licence MIT License, https://opensource.org/licenses/MIT
 */
`;

const cleanOutDir = async function () {
  await fs.rm(outDir, { recursive: true, force: true });
};

const compile = async function () {
  const bundle = await rollup.rollup({
    input: 'lib/browser-dtector.ts',
    plugins: [
      nodeResolve({
        extensions: supportedFileExtension,
      }),
      json(),
      babel({
        babelHelpers: 'bundled',
        extensions: supportedFileExtension,
      }),
    ],
  });

  await bundle.write({
    file: 'dist/lib/browser-dtector.js',
    format: 'cjs',
    sourcemap: true,
    banner,
    exports: 'default',
  });

  await bundle.write({
    file: 'dist/lib/browser-dtector.esm.js',
    format: 'esm',
    sourcemap: true,
    banner,
  });

  await bundle.write({
    name: 'BrowserDetector',
    file: 'dist/lib/browser-dtector.umd.js',
    format: 'umd',
    sourcemap: true,
    banner,
  });

  await bundle.close();
};

const minify = function () {
  return gulp.src('dist/lib/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(gulp.dest(libDir, { sourcemaps: '.' }));
};

const updatePackageJSON = async function () {
  const targetPkgJsonPath = path.resolve(libDir, 'package.json');
  const jsonStr = await fs.readFile(targetPkgJsonPath, 'utf-8');

  const pkgJson = JSON.parse(jsonStr);

  pkgJson.main = 'browser-dtector.js';
  pkgJson.module = 'browser-dtector.esm.js';
  pkgJson.browser = 'browser-dtector.umd.min.js';
  pkgJson.types = 'types.d.ts';

  delete pkgJson.scripts;
  delete pkgJson.dependencies;
  delete pkgJson.devDependencies;
  delete pkgJson.private;
  delete pkgJson.engines;

  await fs.writeFile(targetPkgJsonPath, JSON.stringify(pkgJson, null, 2));
};

const copyFiles = function () {
  return gulp.src([
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
    'package.json',
    'lib/types.d.ts',
  ]).pipe(gulp.dest(libDir));
};

const build = gulp.series(cleanOutDir, compile, minify, copyFiles, updatePackageJSON);

exports.build = build;
exports.default = build;
