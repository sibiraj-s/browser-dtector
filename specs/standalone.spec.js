const browserDetectionTest = require('./detect');
const { prepareTestData } = require('./utils');

const BrowserDtector = require('../dist/lib/browser-dtector');

test('it should detect default useragent running in `jest`', () => {
  const browserDtect = new BrowserDtector();
  const browserInfo = browserDtect.parseUserAgent();

  expect(typeof (browserInfo)).toBe('object');
  expect(browserInfo).toBeTruthy();
  expect(browserInfo.name).not.toBe('Unknown');
});

test('it should detect default useragent running in `jest` while invoked via `parseUserAgent`', () => {
  const ua = 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0';
  const browserDtect = new BrowserDtector();
  const browserInfo = browserDtect.parseUserAgent(ua);

  expect(typeof (browserInfo)).toBe('object');
  expect(browserInfo).toBeTruthy();
  expect(browserInfo.name).toBe('JsDOM');
});

test('it should detect `JsDOM` `v71` running in `JsDOM`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0',
    browserName: 'JsDOM',
    version: '11.12.0',
    shortVersion: '11.12',
    platform: 'JsDOM',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  browserDetectionTest(...prepareTestData(testData));
});
