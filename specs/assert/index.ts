import { expect } from '@jest/globals';

import BrowserDetector from '../../lib/browser-dtector';

export interface TestData {
  userAgent: string | null;
  browserName: string | null;
  version: string | null;
  shortVersion: string | null;
  platform: string | null;
  isDesktop: boolean;
  isWebkit: boolean;
  isAndroid: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isIE: boolean;
}

const assert = (testData: TestData): void => {
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
    isIE,
  } = testData;

  const browserDetect = new BrowserDetector(userAgent ?? '');
  const browserInfo = browserDetect.parseUserAgent();

  expect(browserDetect.userAgent).toBe(userAgent);

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

  expect(browserDetect.getBrowserInfo()).toBeTruthy();
  expect(typeof browserDetect.getBrowserInfo()).toBe('object');
};

export const assertPasreUserAgent = (testData: TestData):void => {
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
    isIE,
  } = testData;

  const browserDetect = new BrowserDetector();
  const browserInfo = browserDetect.parseUserAgent(userAgent ?? '');

  expect(browserDetect.userAgent).toBeNull();

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
};

export default assert;
