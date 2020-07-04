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
