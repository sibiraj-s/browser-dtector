import { KnownBrowsers, KnownPlatforms } from './helper';

import { version as pkgVersion } from '../package.json';

const toFixed = (num: any, fixed: number) => {
  const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
};

class BrowserDtector {
  private static KnownBrowsers = KnownBrowsers;
  private static KnownPlatforms = KnownPlatforms;

  public userAgent: string;
  public __VERSION__: string = pkgVersion;

  constructor(userAgent: string) {
    this.userAgent = userAgent || window.navigator.userAgent;
  }

  public parseUserAgent = (userAgent?: string): IBrowserInfo => {
    const browserMatches: any = {};

    const uaFresh = userAgent || this.userAgent;

    // convert to lower case and treat tabs and multiple sapces as single space
    const ua = uaFresh.toLowerCase().replace(/\s\s+/g, ' ');

    const browserMatch: any = /(edge)\/([\w.]+)/.exec(ua)
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

    const platformMatch: any = /(ipad)/.exec(ua)
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

    const browserInfo: IBrowserInfo = {
      name: browserMatch[5] || browserMatch[3] || browserMatch[1] || undefined,
      platform: platformMatch[0] || undefined,
      userAgent: uaFresh,
      version: browserMatch[4] || browserMatch[2] || undefined,
    };

    if (!browserInfo.name) {
      Object.keys(browserInfo).forEach(key => browserInfo[key] = 'Unknown');
      return browserInfo;
    }

    if (browserInfo.name) {
      browserMatches[browserInfo.name] = true;
      browserInfo.name = BrowserDtector.KnownBrowsers[browserInfo.name] || 'Unknown';
    }

    if (browserInfo.platform) {
      browserMatches[browserInfo.platform] = true;
      browserInfo.platform = BrowserDtector.KnownPlatforms[browserInfo.platform] || 'Unknown';
    }

    if (browserInfo.version) {
      browserInfo.shortVersion = toFixed(parseFloat(browserInfo.version), 2);
    }

    browserInfo.isAndroid = !!(
      browserMatches.tablet ||
      browserMatches.android ||
      browserMatches.androidTablet
    );

    browserInfo.isTablet = !!(
      browserMatches.ipad ||
      browserMatches.tablet ||
      browserMatches.androidTablet
    );

    browserInfo.isMobile = !!(
      browserMatches.android ||
      browserMatches.androidTablet ||
      browserMatches.tablet ||
      browserMatches.ipad ||
      browserMatches.ipod ||
      browserMatches.iphone ||
      browserMatches['windows phone']
    );

    browserInfo.isDesktop = !!(
      browserMatches.cros ||
      browserMatches.mac ||
      browserMatches.linux ||
      browserMatches.win
    );

    browserInfo.isWebkit = !!(
      browserMatches.chrome ||
      browserMatches.crios ||
      browserMatches.opr ||
      browserMatches.safari
    );

    browserInfo.isIE = !!(
      browserMatches.msie ||
      browserMatches.rv
    );

    return browserInfo;
  }

  public getBrowserInfo = () => {
    const browserInfo = this.parseUserAgent();
    delete browserInfo.isAndroid;
    delete browserInfo.isMobile;
    delete browserInfo.isTablet;
    delete browserInfo.isWebkit;
    delete browserInfo.isDesktop;
    delete browserInfo.isIE;
    return browserInfo;
  }

  public getBrowserName = (): string => this.parseUserAgent().name;
  public getBrowserVersion = (): string => this.parseUserAgent().version;
  public getBrowserShortVersion = (): string => this.parseUserAgent().shortVersion || 'Unknown';
  public getPlatformName = (): string => this.parseUserAgent().platform;

  public isAndroid = (): boolean => this.parseUserAgent().isAndroid;
  public isTablet = (): boolean => this.parseUserAgent().isTablet;
  public isMobile = (): boolean => this.parseUserAgent().isMobile;
  public isWebkit = (): boolean => this.parseUserAgent().isWebkit;
  public isDesktop = (): boolean => this.parseUserAgent().isDesktop;
  public isIE = (): boolean => this.parseUserAgent().isIE;
}

export default BrowserDtector;
