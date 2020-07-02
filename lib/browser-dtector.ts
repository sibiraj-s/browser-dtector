import { KnownBrowsers, KnownPlatforms } from './constants';
import utils from './utils';

import { version as pkgVersion } from '../package.json';

import { BrowserInfoFull, BrowserMatches, KnownBrowsersKeys, KnownPlatformsKeys, BrowserInfo } from './types';

class BrowserDtector {
  userAgent: string | null

  constructor(inputUA?: string) {
    this.userAgent = inputUA || (typeof window !== 'undefined' ? window.navigator.userAgent : null);
  }

  static get VERSION() {
    return pkgVersion;
  }

  parseUserAgent(userAgent?: string): BrowserInfoFull {
    const browserMatches: BrowserMatches = {};

    const uaFresh = userAgent || this.userAgent || '';

    // convert to lower case and treat tabs and multiple sapces as single space
    const ua = uaFresh.toLowerCase().replace(/\s\s+/g, ' ');

    const browserMatch = /(edge)\/([\w.]+)/.exec(ua)
      || /(edg)[/]([\w.]+)/.exec(ua)
      || /(opr)[/]([\w.]+)/.exec(ua)
      || /(jsdom)[/]([\w.]+)/.exec(ua)
      || /(samsungbrowser)[/]([\w.]+)/.exec(ua)
      || /(chrome)[/]([\w.]+)/.exec(ua)
      || /(crios)[/]([\w.]+)/.exec(ua)
      || /(opios)[/]([\w.]+)/.exec(ua)
      || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(ua)
      || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(ua)
      || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(ua)
      || /(webkit)[/]([\w.]+)/.exec(ua)
      || /(opera)(?:.*version|)[/]([\w.]+)/.exec(ua)
      || /(msie) ([\w.]+)/.exec(ua)
      || /(fennec)[/]([\w.]+)/.exec(ua)
      || (ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua))
      || (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua))
      || [];

    const platformMatch = /(ipad)/.exec(ua)
      || /(ipod)/.exec(ua)
      || /(iphone)/.exec(ua)
      || /(jsdom)/.exec(ua)
      || /(windows phone)/.exec(ua)
      || /(xbox)/.exec(ua)
      || /(win)/.exec(ua)
      || /(tablet)/.exec(ua)
      || ((/(android)/.test(ua) && /(mobile)/.test(ua) === false) && ['androidTablet'])
      || /(android)/.exec(ua)
      || /(mac)/.exec(ua)
      || /(linux)/.exec(ua)
      || /(cros)/.exec(ua)
      || [];

    const name = browserMatch[5] || browserMatch[3] || browserMatch[1] || null;
    const platform = platformMatch[0] || null;
    const version = browserMatch[4] || browserMatch[2] || null;

    if (name) {
      browserMatches[name] = true;
    }
    if (platform) {
      browserMatches[platform] = true;
    }

    const isAndroid = !!(
      browserMatches.tablet
      || browserMatches.android
      || browserMatches.androidTablet
    );

    const isTablet = !!(
      browserMatches.ipad
      || browserMatches.tablet
      || browserMatches.androidTablet
    );

    const isMobile = !!(
      browserMatches.android
      || browserMatches.androidTablet
      || browserMatches.tablet
      || browserMatches.ipad
      || browserMatches.ipod
      || browserMatches.iphone
      || browserMatches['windows phone']
    );

    const isDesktop = !!(
      browserMatches.cros
      || browserMatches.mac
      || browserMatches.linux
      || browserMatches.win
    );

    const isWebkit = !!(
      browserMatches.chrome
      || browserMatches.crios
      || browserMatches.opr
      || browserMatches.safari
      || browserMatches.edg
    );

    const isIE = !!(
      browserMatches.msie
      || browserMatches.rv
    );

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
      isIE
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

export default BrowserDtector;
