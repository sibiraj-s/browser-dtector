import { it } from '@jest/globals';

import assert from './assert';

it('should detect `Opera` `v35` running in `Android`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Linux; Android 5.1.1; H60-L04 Build/HDH60-L04) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/48.0.2564.99 Mobile Safari/537.36 OPR/35.0.2070.100283`,
    browserName: 'Opera',
    version: '35.0.2070.100283',
    shortVersion: '35',
    platform: 'Android',
    isDesktop: false,
    isWebkit: true,
    isAndroid: true,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera` `v12` running in `Android Tablet`', () => {
  const testData = {
    userAgent: 'Opera/9.80 (Android 1.0.3; Linux; Opera Tablet/ADR-1309251104) Presto/2.11.355 Version/12.10',
    browserName: 'Opera',
    version: '12.10',
    shortVersion: '12.1',
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

it('should detect `Opera` `v11` running in `IPad`', () => {
  const testData = {
    userAgent: 'Opera/9.80 (iPad; Opera Mini/9.1.0/35.6998; U; nb) Presto/2.8.119 Version/11.10',
    browserName: 'Opera',
    version: '11.10',
    shortVersion: '11.1',
    platform: 'IPad',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera` `v14` running in `IPhone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X)
                AppleWebKit/604.1.38 (KHTML, like Gecko) OPiOS/14.0.0.104835 Mobile/15A5368a Safari/9537.53`,
    browserName: 'Opera',
    version: '14.0.0.104835',
    shortVersion: '14',
    platform: 'IPhone',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera` `v48` running in `Macintosh`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/61.0.3153.0 Safari/537.36 OPR/48.0.2664.0`,
    browserName: 'Opera',
    version: '48.0.2664.0',
    shortVersion: '48',
    platform: 'Macintosh',
    isDesktop: true,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera` `v38` running in `Linux`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41`,
    browserName: 'Opera',
    version: '38.0.2220.41',
    shortVersion: '38',
    platform: 'Linux',
    isDesktop: true,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera` `v12` running in `Windows`', () => {
  const testData = {
    userAgent: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18',
    browserName: 'Opera',
    version: '12.18',
    shortVersion: '12.18',
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

it('should detect `Opera` `v43` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991`,
    browserName: 'Opera',
    version: '43.0.2442.991',
    shortVersion: '43',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera Touch` `v4` running in `Ipad`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPad; CPU OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)
                Version/15.5 Mobile/15E148 Safari/604.1 OPT/4.0.1`,
    browserName: 'Opera',
    version: '4.0.1',
    shortVersion: '4',
    platform: 'IPad',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera Touch` `v4` running in `IPhone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)
                Version/16.5 Mobile/15E148 Safari/604.1 OPT/4.0.1`,
    browserName: 'Opera',
    version: '4.0.1',
    shortVersion: '4',
    platform: 'IPhone',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Opera Touch` `v4` running in `Android`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SM-A115F Build/RP1A.200720.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.129 Mobile Safari/537.36 OPT/2.9',
    browserName: 'Opera',
    version: '2.9',
    shortVersion: '2.9',
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
