const path = require('path');
const util = require('util');
const fs = require('fs').promises;
const glob = require('glob');
const chalk = require('chalk');
const Terser = require('terser');

const globAsync = util.promisify(glob);

const outDir = path.resolve(__dirname, '..', 'dist/lib');

const globOptions = {
  cwd: outDir,
};

const terserOptions = {
  sourceMap: true,
  output: {
    comments: /^!/,
  },
};

async function minify() {
  try {
    const files = await globAsync('*.js', globOptions);

    let i = 0;
    while (i < files.length) {
      const filename = files[i];
      const outFilename = filename.replace(/.js$/, '.min.js');
      const outMapFilename = filename.replace(/.js$/, '.min.js.map');

      const srcFilePath = path.resolve(outDir, filename);
      const outFilePath = path.resolve(outDir, outFilename);
      const outMapFilePath = path.resolve(outDir, outMapFilename);

      const js = await fs.readFile(srcFilePath, 'utf-8');
      const minifiedJs = Terser.minify(js, terserOptions);
      await fs.writeFile(outFilePath, minifiedJs.code, 'utf-8');
      await fs.writeFile(outMapFilePath, minifiedJs.map, 'utf-8');
      console.log(chalk.green('Minified:'), `${filename} --> ${outFilename}`);
      i += 1;
    }
  } catch (err) {
    console.error(chalk.red('Unable to minify files'));
    console.error(err);
  }
}

minify();
