# browser-dtector [![Tests](https://github.com/sibiraj-s/browser-dtector/workflows/Tests/badge.svg)](https://github.com/sibiraj-s/browser-dtector/actions)

> A Javascript library to detect browser, version and platform

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install browser-dtector --save
# or
yarn add browser-dtector
```

or use cdn

```bash
//cdn.jsdelivr.net/npm/browser-dtector@latest/dist/browser-dtector.js
```

### Usage

This library exports both ESM and CJS formats, you should be able to use it in both `Node.js` and `browser`.

```js
import BrowserDetector from 'browser-dtector';

const browser = new BrowserDetector(window.navigator.userAgent);
browser.parseUserAgent();
```

**Usage in Node.js:**

_Note_: while using in nodejs, it is mandatory to input `useragent`.

```js
const http = require('http');
const { BrowserDetector } = require('browser-dtector');

const browser = new BrowserDetector();

http
  .createServer((req, res) => {
    // get user-agent header
    const ua = browser.parseUserAgent(req.headers['user-agent']);
    // write the result as response
    res.end(JSON.stringify(ua, null, 4));
  })
  .listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
```

**Usage in HTML:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>BrowserDetector</title>
  </head>

  <body>
    Hello World!
    <script type="module">
      import BrowserDetector from 'https://cdn.jsdelivr.net/npm/browser-dtector/dist/browser-dtector.js';

      const detector = new BrowserDetector(window.navigator.userAgent);
      console.log(detector.parseUserAgent());
    </script>
  </body>
</html>
```

### Supported Browsers

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Brave
- Microsoft Internet Explorer
- Opera
- Samsung Browser
- Electron

### Supported Platforms

- Macintosh
- Microsoft Windows
- Linux
- Windows Phone
- Android
- Android Tablet
- IPad
- IPhone
- Chrome OS
- Microsoft Xbox

### Demo

- Browser Detector: <https://sibiraj-s.github.io/browser-dtector/#/>
- UserAgent Parser: <https://sibiraj-s.github.io/browser-dtector/#/ua-parser/>

### API

Sample

```js
import BrowserDetector from 'browser-dtector';

const browser = new BrowserDetector(window.navigator.userAgent);
browser.parseUserAgent();
```

- **parseUserAgent()** [`object`]: Returns parsed useragent info

  ```json
  {
    "name": "Google Chrome",
    "platform": "Macintosh",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) ...",
    "version": "71.0.3578.98",
    "shortVersion": "71",
    "isAndroid": false,
    "isTablet": false,
    "isMobile": false,
    "isDesktop": true,
    "isWebkit": true,
    "isIE": false
  }
  ```

- **getBrowserInfo()** [`object`]: Returns a minimal and necessary browser info.

  ```json
  {
    "name": "Google Chrome",
    "platform": "Macintosh",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) ...",
    "version": "71.0.3578.98",
    "shortVersion": "71"
  }
  ```

- **userAgent** [`string | null`]: Useragent for current instance

**Miscellaneous:**

- **BrowserDetector.VERSION** [`string`]: Current version of the library.

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[umd]: https://github.com/umdjs/umd
