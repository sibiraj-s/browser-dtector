const path = require('node:path');
const fs = require('node:fs');
const gulp = require('gulp');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const babel = require('@rollup/plugin-babel').default;
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const terser = require('gulp-plugin-terser');
const sourcemap = require('gulp-sourcemaps');
const Parcel = require('@parcel/core').default;

const pkg = require('./package.json');

const outDir = path.resolve(__dirname, 'dist');
const libDir = path.resolve(outDir, 'lib');
const docsDir = path.resolve(outDir, 'docs');

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
  await fs.promises.rm(outDir, { recursive: true, force: true });
};

const cleanDocsDir = async function () {
  await fs.promises.rm(docsDir, { recursive: true, force: true });
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
};

const minify = function () {
  return gulp.src('dist/lib/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(libDir));
};

const updatePackageJSON = async function () {
  const targetPkgJsonPath = path.resolve(libDir, 'package.json');
  const jsonStr = await fs.promises.readFile(targetPkgJsonPath, 'utf-8');

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

  await fs.promises.writeFile(targetPkgJsonPath, JSON.stringify(pkgJson, null, 2));
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

const compileDocs = async function () {
  const bundler = new Parcel({
    entries: path.join(__dirname, 'docs/index.html'),
    defaultConfig: '@parcel/config-default',
    mode: 'production',
    defaultTargetOptions: {
      distDir: path.join(__dirname, 'dist/docs/'),
      publicUrl: '/browser-dtector/',
    },
  });

  await bundler.run();
};

const serveDocs = async function () {
  const bundler = new Parcel({
    entries: path.join(__dirname, 'docs/index.html'),
    defaultConfig: '@parcel/config-default',
    serveOptions: {
      port: 5007,
    },
    hmrOptions: {
      port: 5007,
    },
  });

  await bundler.watch();
};

const server = gulp.series(cleanDocsDir, serveDocs);
const buildDocs = gulp.series(cleanDocsDir, compileDocs);
const build = gulp.series(cleanOutDir, compile, minify, copyFiles, updatePackageJSON, buildDocs);

exports.serve = server;
exports.build = build;
exports.buildDocs = buildDocs;
exports.default = build;
