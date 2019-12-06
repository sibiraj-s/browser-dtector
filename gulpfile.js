const path = require('path');
const fs = require('fs');

const gulp = require('gulp');
const rollup = require('rollup');
const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');
const terser = require('gulp-plugin-terser');
const sourcemap = require('gulp-sourcemaps');
const through2 = require('through2');
const ParcelBundler = require('parcel-bundler');

const pkg = require('./package.json');

const outDir = path.resolve(__dirname, 'dist');
const libDir = path.resolve(outDir, 'lib');
const docsDir = path.resolve(outDir, 'docs');

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
    input: 'lib/browser-dtector.js',
    plugins: [
      json(),
      babel(),
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

async function minify() {
  gulp.src('dist/lib/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(libDir));
}

function updatePackageJSON() {
  const transform = through2.obj((file, _, callback) => {
    const modifiedFile = file.clone();
    const pkgJson = JSON.parse(file.contents.toString());

    pkgJson.main = 'browser-dtector.js';
    pkgJson.module = 'browser-dtector.esm.js';
    pkgJson.browser = 'browser-dtector.umd.min.js';

    delete pkgJson.scripts;
    delete pkgJson.dependencies;
    delete pkgJson.devDependencies;
    delete pkgJson.private;
    delete pkgJson.engines;

    modifiedFile.contents = Buffer.from(JSON.stringify((pkgJson), null, 2));
    callback(null, modifiedFile);
  });

  return transform;
}

async function copyFiles() {
  gulp.src('README.md').pipe(gulp.dest(libDir));
  gulp.src('CHANGELOG.md').pipe(gulp.dest(libDir));
  gulp.src('LICENSE').pipe(gulp.dest(libDir));
  gulp.src('package.json')
    .pipe(updatePackageJSON())
    .pipe(gulp.dest(libDir));
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
const build = gulp.series(cleanOutDir, compile, minify, copyFiles, buildDocs);

exports.build = build;
exports.buildDocs = buildDocs;
exports.default = build;
