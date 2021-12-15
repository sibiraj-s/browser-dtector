import { it } from '@jest/globals';

import assert from './assert';

it('should detect `Google Chrome` `v71` running in `Macintosh`', () => {
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

  assert(testData);
});

it('should detect `Google Chrome` `v60` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/60.0.3112.113 Safari/537.36`,
    browserName: 'Google Chrome',
    version: '60.0.3112.113',
    shortVersion: '60',
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

it('should detect `Google Chrome` `v56` running in `Linux`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/56.0.2924.87 Safari/537.36`,
    browserName: 'Google Chrome',
    version: '56.0.2924.87',
    shortVersion: '56',
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

it('should detect `Google Chrome` `v70` running in `Chrome OS`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (X11; CrOS x86_64 11021.56.0) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/70.0.3538.76 Safari/537.36`,
    browserName: 'Google Chrome',
    version: '70.0.3538.76',
    shortVersion: '70',
    platform: 'Chrome OS',
    isDesktop: true,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Google Chrome` `v60` running in `IPad`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko)
                CriOS/60.0.3112.72 Mobile/15A5327g Safari/602.1`,
    browserName: 'Google Chrome',
    version: '60.0.3112.72',
    shortVersion: '60',
    platform: 'IPad',
    isDesktop: false,
    isWebkit: true,
    isAndroid: false,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Google Chrome` `v56` running in `IPhone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko)
                CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1`,
    browserName: 'Google Chrome',
    version: '56.0.2924.75',
    shortVersion: '56',
    platform: 'IPhone',
    isDesktop: false,
    isWebkit: true,
    isAndroid: false,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Google Chrome` `v18` running in `Android`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko)
                Chrome/18.0.1025.133 Mobile Safari/535.19`,
    browserName: 'Google Chrome',
    version: '18.0.1025.133',
    shortVersion: '18',
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

it('should detect `Google Chrome` `v58` running in `Android Tablet`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Linux; Android 6.0.1; SM-T350 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/58.0.3029.83 Safari/537.36`,
    browserName: 'Google Chrome',
    version: '58.0.3029.83',
    shortVersion: '58',
    platform: 'Android Tablet',
    isDesktop: false,
    isWebkit: true,
    isAndroid: true,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});
