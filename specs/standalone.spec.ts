import BrowserDtector from '../lib/browser-dtector';

import assert from './assert';
import pkgJson from '../package.json';

it('should detect default useragent running in `jest`', () => {
  const browserDtect = new BrowserDtector();
  const browserInfo = browserDtect.parseUserAgent();

  expect(typeof browserInfo).toBe('object');
  expect(browserInfo).toBeTruthy();
  expect(browserInfo.name).not.toBe('Unknown');
});

it('should detect default useragent running in `jest` while invoked via `parseUserAgent`', () => {
  const ua = 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0';
  const browserDtect = new BrowserDtector();
  const browserInfo = browserDtect.parseUserAgent(ua);

  expect(typeof browserInfo).toBe('object');
  expect(browserInfo).toBeTruthy();
  expect(browserInfo.name).toBe('JsDOM');
});

it('should detect `JsDOM` `v71` running in `JsDOM`', () => {
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

  assert(testData);
});

it('should return null if `invalid useragent` is passed', () => {
  const ua = 'I am an invalid useragent';
  const browserDtect = new BrowserDtector(ua);
  const browserInfo = browserDtect.parseUserAgent();

  expect(browserInfo.name).toBe(null);
  expect(browserInfo.version).toBe(null);
  expect(browserInfo.platform).toBe(null);
});

it('should null for unknown browsers', () => {
  const ua = `Mozilla/5.0 (Kali; Intel Kal OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko)
     Godzilla/78.0.3904.108 Gorilla/537.36`;
  const browserDtect = new BrowserDtector();
  const browserInfo = browserDtect.parseUserAgent(ua);

  expect(browserInfo.name).toBe(null);
});

it('should return correct version number', () => {
  const version = BrowserDtector.VERSION;

  expect(version).toBe(pkgJson.version);
});
