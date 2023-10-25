import { KnownBrowsers, KnownPlatforms } from './constants';
import utils from './utils';

import { version as pkgVersion } from '../package.json';

import {
  BrowserInfoFull,
  BrowserMatches,
  KnownBrowsersKeys,
  KnownPlatformsKeys,
  BrowserInfo,
  NavigatorExtended,
} from './types';

const getNavigator = (): NavigatorExtended | null => {
  if (typeof window !== 'undefined') {
    return window.navigator as NavigatorExtended;
  }

  return null;
};

class BrowserDetector {
  userAgent: string | null;

  constructor(inputUA?: string) {
    this.userAgent = inputUA || getNavigator()?.userAgent || null;
  }

  static get VERSION(): string {
    return pkgVersion;
  }

  parseUserAgent(userAgent?: string): BrowserInfoFull {
    const browserMatches: BrowserMatches = {};

    const uaFresh = userAgent || this.userAgent || '';

    // convert to lower case and treat tabs and multiple sapces as single space
    const ua = uaFresh.toLowerCase().replace(/\s\s+/g, ' ');

    const browserMatch = (/(edge)\/([\w.]+)/).exec(ua)
      || (/(edg)[/]([\w.]+)/).exec(ua)
      || (/(opr)[/]([\w.]+)/).exec(ua)
      || (/(opt)[/]([\w.]+)/).exec(ua)
      || (/(fxios)[/]([\w.]+)/).exec(ua)
      || (/(edgios)[/]([\w.]+)/).exec(ua)
      || (/(jsdom)[/]([\w.]+)/).exec(ua)
      || (/(samsungbrowser)[/]([\w.]+)/).exec(ua)
      || (/(electron)[/]([\w.]+)/).exec(ua)
      || (/(chrome)[/]([\w.]+)/).exec(ua)
      || (/(crios)[/]([\w.]+)/).exec(ua)
      || (/(opios)[/]([\w.]+)/).exec(ua)
      || (/(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/).exec(ua)
      || (/(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/).exec(ua)
      || (/(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/).exec(ua)
      || (/(webkit)[/]([\w.]+)/).exec(ua)
      || (/(opera)(?:.*version|)[/]([\w.]+)/).exec(ua)
      || (/(msie) ([\w.]+)/).exec(ua)
      || (/(fennec)[/]([\w.]+)/).exec(ua)
      || (ua.indexOf('trident') >= 0 && (/(rv)(?::| )([\w.]+)/).exec(ua))
      || (ua.indexOf('compatible') < 0 && (/(mozilla)(?:.*? rv:([\w.]+)|)/).exec(ua))
      || [];

    const platformMatch = (/(ipad)/).exec(ua)
      || (/(ipod)/).exec(ua)
      || (/(iphone)/).exec(ua)
      || (/(jsdom)/).exec(ua)
      || (/(windows phone)/).exec(ua)
      || (/(xbox)/).exec(ua)
      || (/(win)/).exec(ua)
      || (/(tablet)/).exec(ua)
      || (((/(android)/).test(ua) && (/(mobile)/).test(ua) === false) && ['androidTablet'])
      || (/(android)/).exec(ua)
      || (/(mac)/).exec(ua)
      || (/(linux)/).exec(ua)
      || (/(cros)/).exec(ua)
      || [];

    let name = browserMatch[5] || browserMatch[3] || browserMatch[1] || null;
    const platform = platformMatch[0] || null;
    const version = browserMatch[4] || browserMatch[2] || null;

    // brave browser doesn't expose itslef via useragent
    // but as chrome browser
    const navigator = getNavigator();
    if (
      name === 'chrome'
      && typeof navigator?.brave?.isBrave === 'function'
    ) {
      name = 'brave';
    }

    if (name) {
      browserMatches[name] = true;
    }
    if (platform) {
      browserMatches[platform] = true;
    }

    const isAndroid = Boolean(browserMatches.tablet
      || browserMatches.android
      || browserMatches.androidTablet);

    const isTablet = Boolean(browserMatches.ipad
      || browserMatches.tablet
      || browserMatches.androidTablet);

    const isMobile = Boolean(browserMatches.android
      || browserMatches.androidTablet
      || browserMatches.tablet
      || browserMatches.ipad
      || browserMatches.ipod
      || browserMatches.iphone
      || browserMatches['windows phone']);

    const isDesktop = Boolean(browserMatches.cros
      || browserMatches.mac
      || browserMatches.linux
      || browserMatches.win);

    const isWebkit = Boolean(browserMatches.brave
      || browserMatches.chrome
      || browserMatches.crios
      || browserMatches.opr
      || browserMatches.safari
      || browserMatches.edg
      || browserMatches.electron);

    const isIE = Boolean(browserMatches.msie
      || browserMatches.rv);

    const browserInfo: BrowserInfoFull = {
      name: KnownBrowsers[name as KnownBrowsersKeys] ?? null,
      platform: KnownPlatforms[platform as KnownPlatformsKeys] ?? null,
      userAgent: uaFresh,
      version,
      shortVersion: version ? utils.toFixed(parseFloat(version), 2) : null,
      isAndroid,
      isTablet,
      isMobile,
      isDesktop,
      isWebkit,
      isIE,
    };

    return browserInfo;
  }

  getBrowserInfo(): BrowserInfo {
    const browserInfo = this.parseUserAgent();

    return {
      name: browserInfo.name,
      platform: browserInfo.platform,
      userAgent: browserInfo.userAgent,
      version: browserInfo.version,
      shortVersion: browserInfo.shortVersion,
    };
  }
}

export { KnownBrowsers, KnownPlatforms, BrowserDetector };
export default BrowserDetector;
