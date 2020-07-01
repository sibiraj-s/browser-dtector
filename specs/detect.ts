import BrowserDtector from '../lib/browser-dtector';

interface TestData {
  userAgent: string;
  browserName: string,
  version: string,
  shortVersion: string,
  platform: string,
  isDesktop: boolean,
  isWebkit: boolean,
  isAndroid: boolean,
  isTablet: boolean,
  isMobile: boolean,
  isIE: boolean,
}

const browserDetectionTest = (testData: TestData):void => {
  const {
    userAgent,
    browserName,
    version,
    shortVersion,
    platform,
    isDesktop,
    isWebkit,
    isAndroid,
    isTablet,
    isMobile,
    isIE
  } = testData;

  const browserDtect = new BrowserDtector(userAgent);
  const browserInfo = browserDtect.parseUserAgent();

  expect(browserDtect.userAgent).toBe(userAgent);

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
};

export default browserDetectionTest;
