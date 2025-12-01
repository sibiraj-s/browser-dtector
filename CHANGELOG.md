# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Enhancements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal
> - Unreleased

## v4.1.1 (2025-12-01)

#### Bug Fixes

- fix return types for parseUserAgent ([08cab55](https://github.com/sibiraj-s/browser-dtector/commit/08cab55))

## v4.1.0 (2023-11-03)

#### Features

- add assertions for chrome, edge, firefox, safari and opera browsers ([5da4dcc](https://github.com/sibiraj-s/browser-dtector/commit/5da4dcc))

#### Bug Fixes

- cleanup usage of old definitions ([5da4dcc](https://github.com/sibiraj-s/browser-dtector/commit/5da4dcc))
- fix name and platfrom types returned from parseUserAgent ([2adf558](https://github.com/sibiraj-s/browser-dtector/commit/2adf558))

## v4.0.0 (2023-10-25)

#### Features

- export `KnownBrowsers` and `KnownPlatforms` constants ([bc6d65f](https://github.com/sibiraj-s/browser-dtector/commit/bc6d65f))

#### Bug Fixes

- fix exports configuration and type declaration for node environments ([bc6d65f](https://github.com/sibiraj-s/browser-dtector/commit/bc6d65f))

#### Breaking Changes

- removed umd build
- use named exports for cjs formats ([bc6d65f](https://github.com/sibiraj-s/browser-dtector/commit/bc6d65f))

Before

```js
const BrowserDetector = require('browser-dtector');
```

After

```js
const { BrowserDetector } = require('browser-dtector');
```

#### Internal

- replace rollup with tsup ([ed1fc34](https://github.com/sibiraj-s/browser-dtector/commit/ed1fc34))
- replace jest with vitest ([ed1fc34](https://github.com/sibiraj-s/browser-dtector/commit/ed1fc34))

## v3.4.0 (2023-07-12)

#### Features

- detect opera touch browser ([a5f8632](https://github.com/sibiraj-s/browser-dtector/commit/a5f8632))

## v3.3.1 (2023-07-01)

#### Features

- add npm package provenance ([58aabf0](https://github.com/sibiraj-s/browser-dtector/commit/58aabf0))

## v3.3.0 (2023-04-11)

#### Features

- detect firefox and edge ios ([98e938f](https://github.com/sibiraj-s/browser-dtector/commit/98e938f))

## v3.2.0 (2022-01-25)

#### Features

- detect electron browser ([77b5f0a](https://github.com/sibiraj-s/browser-dtector/commit/77b5f0a))

#### Bug Fixes

- fix brave browser detection for non chrome browsers ([b56c16c](https://github.com/sibiraj-s/browser-dtector/commit/b56c16c))

## v3.1.2 (2020-12-14)

#### Internal

- update LICENSE ([a8d404f](https://github.com/sibiraj-s/browser-dtector/commit/a8d404f))

## v3.1.1 (2020-07-05)

#### Bug Fixes

- update typings ([65956e7](https://github.com/sibiraj-s/browser-dtector/commit/65956e7))

## v3.1.0 (2020-07-04)

#### Features

- detect brave browser ([069d6ae](https://github.com/sibiraj-s/browser-dtector/commit/069d6ae))

## v3.0.2 (2020-07-02)

#### Internal

- update LICENSE ([cb66a2a](https://github.com/sibiraj-s/browser-dtector/commit/cb66a2a))

## v3.0.1 (2020-07-02)

#### Bug Fixes

- set correct UA defaults ([1dc9bbb](https://github.com/sibiraj-s/browser-dtector/commit/1dc9bbb))
- handle crash in nodejs environment ([36c77bf](https://github.com/sibiraj-s/browser-dtector/commit/36c77bf))

## v3.0.0 (2020-07-01)

#### Features

- add typings ([2974892](https://github.com/sibiraj-s/browser-dtector/commit/2974892))

#### Breaking Changes

- removed methods `getBrowserName`, `getBrowserVersion`, `getBrowserShortVersion` and `getPlatformName` ([3d686cc](https://github.com/sibiraj-s/browser-dtector/commit/3d686cc))
- removed `__VERSION__` property ([3d686cc](https://github.com/sibiraj-s/browser-dtector/commit/3d686cc))

#### Internal

- rewrite the project in typescript ([3d686cc](https://github.com/sibiraj-s/browser-dtector/commit/3d686cc))

## v2.1.0 (2019-12-23)

#### Features

- add support for chromium based edge ([fe4477f](https://github.com/sibiraj-s/browser-dtector/commit/fe4477f))

#### Dependency Updates

- bump devDependencies ([9aed8b4](https://github.com/sibiraj-s/browser-dtector/commit/9aed8b4))

## v2.0.0 (2019-11-25)

#### Enhancements

- generate multiple output formats ([8d0ec7e](https://github.com/sibiraj-s/browser-dtector/commit/8d0ec7e))

#### Internal

- rewrite library from typescript to javascript ([a3e1bd2](https://github.com/sibiraj-s/browser-dtector/commit/a3e1bd2))
- update node version to 12 ([f3c6cb8](https://github.com/sibiraj-s/browser-dtector/commit/f3c6cb8))
- bump devDependencies ([b5d2744](https://github.com/sibiraj-s/browser-dtector/commit/b5d2744))
- migrate from travis-ci to github actions ([3726d12](https://github.com/sibiraj-s/browser-dtector/commit/3726d12))

## v1.0.1 (2019-06-23)

#### Enhancements

- move react, react-dom, react-router-dom from dependencies to devDependencies ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))

#### Internal

- update @babel/core to v7.4.5 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update @babel/preset-env to v7.4.5 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update babel-jest to v24.8.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update eslint to v5.16.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update eslint-plugin-import to v2.17.3 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update eslint-plugin-jsx-a11y to v6.2.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update eslint-plugin-react to v7.13.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update husky to v2.4.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update inquirer to v6.4.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update jest to v24.8.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update nodemon to v1.19.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update parcel-bundler to v1.12.3 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update react to v16.8.6 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update react-dom to v16.8.6 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update react-test-renderer to v16.8.6 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update react-router-dom to v5.0.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update rollup to v1.16.2 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update rollup-plugin-babel to v4.3.3 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update rollup-plugin-json to v4.0.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update rollup-plugin-typescript to v1.0.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update sass to v1.21.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update terser to v4.0.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update tslib to v1.10.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update tslint to v5.18.0 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update typescript to v3.5.2 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- update yargs-parser to v13.1.1 ([bdabe02](https://github.com/sibiraj-s/browser-dtector/commit/bdabe02))
- setup husky to run test before git-push ([70c79d5](https://github.com/sibiraj-s/browser-dtector/commit/70c79d5))
- remove babel-core ([b7fb002](https://github.com/sibiraj-s/browser-dtector/commit/b7fb002))

## v1.0.0 (2019-01-24)

#### Features

- **Initial Release**: A Javascript library to detect browser, version and platform
