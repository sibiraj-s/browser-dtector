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

**Minified:**

```bash
//cdn.jsdelivr.net/npm/browser-dtector@latest/browser-dtector.umd.min.js
```

**Pretty Printed:**

```bash
//cdn.jsdelivr.net/npm/browser-dtector@latest/browser-dtector.umd.js
```

### Usage

This library is compiled to [UMD][umd] format, you should be able to use it in both `Node.js` and `browser`.

```js
import BrowserDtector from 'browser-dtector';

const browser = new BrowserDtector(window.navigator.userAgent);
browser.parseUserAgent();
```

**Usage in Node.js:**

_Note_: while using in nodejs, it is mandatory to input `useragent`.

```js
const http = require('http');
const BrowserDtector = require('browser-dtector');

const browser = new BrowserDtector();

http.createServer((req, res)=> {
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
<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BrowserDtector</title>
  </head>

  <body>
    Hello World!
    <script src="//cdn.jsdelivr.net/npm/browser-dtector@latest/browser-dtector.min.js"></script>
    <script>
      const browser = new window.BrowserDtector(window.navigator.userAgent); // or new BrowserDtector()
      console.log(browser.parseUserAgent())
    </script>
  </body>

</html>
```

### Supported Browsers

- Google Chrome
- Mozilla Firefox
- Microsoft Internet Explorer
- Microsoft Edge
- Safari
- Opera
- Samsung Browser

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
import BrowserDtector from 'browser-dtector';

const browser = new BrowserDtector(window.navigator.userAgent);
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

- **getBrowserName()** [`string`]: Returns name of the browser. e.g. `Google Chrome`
- **getBrowserVersion()** [`string`]: Returns complete browser version. e.g. `71.0.3578.98`
- **getBrowserShortVersion()** [`string`]: Returns shorter browser version. e.g. `71`
- **getPlatformName()** [`string`]: Returns name of the device e.g. `Macintosh`

**Miscellaneous:**

- **userAgent** [`string`]: Useragent for current instance
- **\_\_VERSION\_\_** [`string`]: Current version of `browser-detector` library.

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[umd]: https://github.com/umdjs/umd
