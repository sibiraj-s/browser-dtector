import { it } from 'vitest';

import assert from './assert';

it('should detect `Electron` `16` running in `Mac Os`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML%2C like Gecko)
      Chrome/96.0.4664.110 Electron/16.0.7 Safari/537.36`,
    browserName: 'Electron',
    version: '16.0.7',
    shortVersion: '16',
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
