const path = require('path');
const fs = require('fs');

const gulp = require('gulp');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const terser = require('gulp-plugin-terser');
const sourcemap = require('gulp-sourcemaps');
const ParcelBundler = require('parcel-bundler');

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

async function cleanOutDir() {
  await fs.promises.rmdir(outDir, { recursive: true });
}

async function cleanDocsDir() {
  await fs.promises.rmdir(docsDir, { recursive: true });
}

async function compile() {
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
  });

  await bundle.write({
    file: 'dist/lib/browser-dtector.esm.js',
    format: 'esm',
    sourcemap: true,
    banner,
  });

  await bundle.write({
    name: 'BrowserDtector',
    file: 'dist/lib/browser-dtector.umd.js',
    format: 'umd',
    sourcemap: true,
    banner,
  });
}

function minify() {
  return gulp.src('dist/lib/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(libDir));
}

async function updatePackageJSON() {
  const targetPkgJsonPath = path.resolve(libDir, 'package.json');
  const jsonStr = await fs.promises.readFile(targetPkgJsonPath, 'utf-8');

  const pkgJson = JSON.parse(jsonStr);

  pkgJson.main = 'browser-dtector.js';
  pkgJson.module = 'browser-dtector.esm.js';
  pkgJson.browser = 'browser-dtector.umd.min.js';

  delete pkgJson.scripts;
  delete pkgJson.dependencies;
  delete pkgJson.devDependencies;
  delete pkgJson.private;
  delete pkgJson.engines;

  await fs.promises.writeFile(targetPkgJsonPath, JSON.stringify((pkgJson), null, 2));
}

function copyFiles() {
  return gulp.src([
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
    'package.json',
  ]).pipe(gulp.dest(libDir));
}

async function parcel() {
  const entryFile = path.join(__dirname, 'docs/index.html');

  const options = {
    outDir: path.join(__dirname, 'dist/docs'),
    publicUrl: '/browser-dtector/',
    watch: false,
    minify: true,
  };

  const bundler = new ParcelBundler(entryFile, options);
  await bundler.bundle();
}

const buildDocs = gulp.series(cleanDocsDir, parcel);
const build = gulp.series(cleanOutDir, compile, minify, copyFiles, updatePackageJSON, buildDocs);

exports.build = build;
exports.buildDocs = buildDocs;
exports.default = build;
