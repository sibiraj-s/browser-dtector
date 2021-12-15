import { it } from '@jest/globals';

import assert from './assert';

// user agents string reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox

it('should detect `Mozilla Firefox` `v10` running in `Mac OS X on Intel x86 or x86_64`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Macintosh',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Mac OS X on PowerPC`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Macintosh; PPC Mac OS X x.y; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Macintosh',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Linux desktop, i686`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Linux',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Linux desktop, x86_64`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Linux',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Nokia N900 Linux mobile, on the Fennec browser`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Linux',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Linux desktop, i686 running on x86_64`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Linux',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Windows NT on x86`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Windows NT x.y; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v10` running in `Windows NT, WOW64`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Windows NT x.y; WOW64; rv:10.0) Gecko/20100101 Firefox/10.0',
    browserName: 'Mozilla Firefox',
    version: '10.0',
    shortVersion: '10',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v40` running in `Android Phone <=40`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0',
    browserName: 'Mozilla Firefox',
    version: '40.0',
    shortVersion: '40',
    platform: 'Android',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v40` running in `Android Tablet <=40`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0',
    browserName: 'Mozilla Firefox',
    version: '40.0',
    shortVersion: '40',
    platform: 'Android Tablet',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v41` running in `Android Phone <=41`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0',
    browserName: 'Mozilla Firefox',
    version: '41.0',
    shortVersion: '41',
    platform: 'Android',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Mozilla Firefox` `v41` running in `Android Tablet <=41`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0',
    browserName: 'Mozilla Firefox',
    version: '41.0',
    shortVersion: '41',
    platform: 'Android Tablet',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});
