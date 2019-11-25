const fs = require('fs');

fs.readFile('dist/lib/package.json', 'utf8', (readErr, data) => {
  if (readErr) throw readErr;

  const pkg = JSON.parse(data);
  pkg.main = 'browser-dtector.js';
  pkg.module = 'browser-dtector.esm.js';
  pkg.browser = 'browser-dtector.umd.min.js';
  delete pkg.scripts;
  delete pkg.dependencies;
  delete pkg.devDependencies;
  delete pkg.private;

  fs.writeFile('dist/lib/package.json', JSON.stringify((pkg), null, 2), 'utf8', (writeErr) => {
    if (writeErr) throw writeErr;
    console.log('postbuild: package.json written');
  });
});
