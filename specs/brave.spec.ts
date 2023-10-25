import { beforeAll, afterAll, it, vi } from 'vitest';

import assert from './assert';
import { NavigatorExtended, Brave } from '../lib/types';

beforeAll(() => {
  const brave: Brave = {
    isBrave: vi.fn(),
  };

  (navigator as NavigatorExtended).brave = brave;
});

afterAll(() => {
  delete (navigator as NavigatorExtended).brave;
});

it('should detect `Brave` `v83` running in `Mac Os`', () => {
  const testData = {
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko)
                Chrome/83.0.4103.116 Safari/537.36`,
    browserName: 'Brave',
    version: '83.0.4103.116',
    shortVersion: '83',
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
