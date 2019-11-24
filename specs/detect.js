import BrowserDtector from '../lib/browser-dtector';

const browserDetectionTest = (
  ua,
  browserName,
  version,
  shortVersion,
  platform,
  isDesktop,
  isWebkit,
  isAndroid,
  isTablet,
  isMobile,
  isIE,
) => {
  const browserDtect = new BrowserDtector(ua);
  const browserInfo = browserDtect.parseUserAgent();

  expect(browserDtect.userAgent).toBe(ua);

  expect(browserInfo.name).toBe(browserName);
  expect(browserInfo.version).toBe(version);
  expect(browserInfo.shortVersion).toBe(shortVersion);
  expect(browserInfo.platform).toBe(platform);
  expect(browserInfo.isDesktop).toBe(isDesktop);
  expect(browserInfo.isWebkit).toBe(isWebkit);
  expect(browserInfo.isTablet).toBe(isTablet);
  expect(browserInfo.isAndroid).toBe(isAndroid);
  expect(browserInfo.isMobile).toBe(isMobile);
  expect(browserInfo.isIE).toBe(isIE);

  expect(browserDtect.getBrowserInfo()).toBeTruthy();
  expect(typeof browserDtect.getBrowserInfo()).toBe('object');

  expect(browserDtect.getBrowserName()).toBe(browserName);
  expect(browserDtect.getBrowserVersion()).toBe(version);
  expect(browserDtect.getBrowserShortVersion()).toBe(shortVersion);
  expect(browserDtect.getPlatformName()).toBe(platform);

  expect(browserDtect.isDesktop()).toBe(isDesktop);
  expect(browserDtect.isWebkit()).toBe(isWebkit);
  expect(browserDtect.isAndroid()).toBe(isAndroid);
  expect(browserDtect.isTablet()).toBe(isTablet);
  expect(browserDtect.isMobile()).toBe(isMobile);
  expect(browserDtect.isIE()).toBe(isIE);
};

module.exports = browserDetectionTest;
