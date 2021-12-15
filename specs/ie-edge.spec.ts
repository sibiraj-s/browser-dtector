import { it } from '@jest/globals';

import assert from './assert';

it('should detect `Microsoft Internet Explorer` `v7` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; SLCC2; .NET CLR 2.0.50727;
                .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.2)`,
    browserName: 'Microsoft Internet Explorer',
    version: '7.0',
    shortVersion: '7',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: true,
  };

  assert(testData);
});

it('should detect `Microsoft Internet Explorer` `v8` running in `Windows`', () => {
  const testData = {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    browserName: 'Microsoft Internet Explorer',
    version: '8.0',
    shortVersion: '8',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: true,
  };

  assert(testData);
});

it('should detect `Microsoft Internet Explorer` `v9` running in `Windows`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; BOIE9;ENCA)',
    browserName: 'Microsoft Internet Explorer',
    version: '9.0',
    shortVersion: '9',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: true,
  };

  assert(testData);
});

it('should detect `Microsoft Internet Explorer` `v10` running in `Windows`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    browserName: 'Microsoft Internet Explorer',
    version: '10.0',
    shortVersion: '10',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: true,
  };

  assert(testData);
});

it('should detect `Microsoft Internet Explorer` `v11` running in `Windows`', () => {
  const testData = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    browserName: 'Microsoft Internet Explorer',
    version: '11.0',
    shortVersion: '11',
    platform: 'Windows',
    isDesktop: true,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: true,
  };

  assert(testData);
});

it('should detect `Microsoft Edge` `v14` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/48.0.2564.82 Safari/537.36 Edge/14.14332`,
    browserName: 'Microsoft Edge',
    version: '14.14332',
    shortVersion: '14.14',
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

it('should detect `Microsoft Edge` `v15` running in `Windows Phone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950)
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.14977`,
    browserName: 'Microsoft Edge',
    version: '15.14977',
    shortVersion: '15.14',
    platform: 'Windows Phone',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Microsoft Edge` `v16` running in `Windows Phone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36
                (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299`,
    browserName: 'Microsoft Edge',
    version: '16.16299',
    shortVersion: '16.16',
    platform: 'Windows Phone',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: true,
    isIE: false,
  };

  assert(testData);
});

it('should detect `Microsoft Edge` `v14` running in `Windows Phone`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; ARM; Lumia 1520) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/48.0.2564.82 Safari/537.36 Edge/14.14332`,
    browserName: 'Microsoft Edge',
    version: '14.14332',
    shortVersion: '14.14',
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

it('should detect `Microsoft Edge` `v15` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.5 (Windows NT 10.5; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/52.5.2743.116 Safari/537.36 Edge/15.15063`,
    browserName: 'Microsoft Edge',
    version: '15.15063',
    shortVersion: '15.15',
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

it('should detect `Microsoft Edge` `v16` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299,gzip(gfe)`,
    browserName: 'Microsoft Edge',
    version: '16.16299',
    shortVersion: '16.16',
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

it('should detect `Microsoft Edge` `v17` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 6.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134`,
    browserName: 'Microsoft Edge',
    version: '17.17134',
    shortVersion: '17.17',
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

it('should detect `Microsoft Edge` `v18` running in `Windows`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/64.0.3282.140 Safari/537.36 Edge/18.17704`,
    browserName: 'Microsoft Edge',
    version: '18.17704',
    shortVersion: '18.17',
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

it('should detect `Microsoft Edge` `v18` running in `Xbox`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36
                (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17704`,
    browserName: 'Microsoft Edge',
    version: '18.17704',
    shortVersion: '18.17',
    platform: 'Microsoft Xbox',
    isDesktop: false,
    isWebkit: false,
    isAndroid: false,
    isTablet: false,
    isMobile: false,
    isIE: false,
  };

  assert(testData);
});

it('should detect chromium based edge running in Mac', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/79.0.3945.88 Safari/537.36 Edg/79.0.309.54`,
    browserName: 'Microsoft Edge',
    version: '79.0.309.54',
    shortVersion: '79',
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

it('should detect chromium based edge running in Windows', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/75.0.3763.0 Safari/537.36 Edg/75.0.131.0`,
    browserName: 'Microsoft Edge',
    version: '75.0.131.0',
    shortVersion: '75',
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
