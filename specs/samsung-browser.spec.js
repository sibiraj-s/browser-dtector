const browserDetectionTest = require('./detect');
const { prepareTestData } = require('./utils');

it('should detect `Samsung Browser` `v2.1` running in `Android`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) 
                SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36`,
    browserName: 'Samsung Browser',
    version: '2.1',
    shortVersion: '2.1',
    platform: 'Android',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  browserDetectionTest(...prepareTestData(testData));
});

it('should detect `Samsung Browser` `v7.4` running in `Android Tablet`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Linux; Android 7.1.1; SAMSUNG SM-T350 Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) 
                SamsungBrowser/7.4 Chrome/59.0.3071.125 Safari/537.36`,
    browserName: 'Samsung Browser',
    version: '7.4',
    shortVersion: '7.4',
    platform: 'Android Tablet',
    isDesktop: false,
    isWebkit: false,
    isAndroid: true,
    isTablet: true,
    isMobile: true,
    isIE: false,
  };

  browserDetectionTest(...prepareTestData(testData));
});
