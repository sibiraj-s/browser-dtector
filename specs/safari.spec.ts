import { it } from 'vitest';

import assert from './assert';

it('should detect `Safari` `v12` running in `Macintosh`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2)
                AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.2 Safari/605.1.15`,
    browserName: 'Safari',
    version: '12.0.2',
    shortVersion: '12',
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

it('should detect `Safari` `v11` running in `IPhone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X)
                AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604`,
    browserName: 'Safari',
    version: '11.0',
    shortVersion: '11',
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

it('should detect `Safari` `v11` running in `IPad`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko)
                Version/11.0 Mobile/15A5341f Safari/604.1`,
    browserName: 'Safari',
    version: '11.0',
    shortVersion: '11',
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

it('should detect `Safari` `v1` running in `Windows`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Windows; chromeframe/2.0.0.0) AppleWebKit/1.0 (KHTML, like Gecko) Bromium Safari/1.0',
    browserName: 'Safari',
    version: '1.0',
    shortVersion: '1',
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
