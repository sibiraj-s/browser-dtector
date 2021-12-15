/**
 * @jest-environment node
 */
import { it } from '@jest/globals';
import assert, { assertPasreUserAgent } from './assert';

it('should work in node environmnet', () => {
  const testData = {
    userAgent: null,
    browserName: null,
    version: null,
    shortVersion: null,
    platform: null,
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should work correctly with no userAgent', () => {
  const testData = {
    userAgent: null,
    browserName: null,
    version: null,
    shortVersion: null,
    platform: null,
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assertPasreUserAgent(testData);
});

it('should parse userAgent correctly', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/71.0.3578.98 Safari/537.36`,
    browserName: 'Google Chrome',
    version: '71.0.3578.98',
    shortVersion: '71',
    platform: 'Macintosh',
    isDesktop: true,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assertPasreUserAgent(testData);
});
