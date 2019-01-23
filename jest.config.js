module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'dist/lib/**/*.js',
    '!dist/**/*.min.js',
    'specs/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  modulePathIgnorePatterns: ['dist/lib/package.json'],
};
