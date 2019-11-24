import { KnownBrowsers, KnownPlatforms } from './constants';
import { version as pkgVersion } from '../package.json';
import utils from './utils';

function BrowserDtector(userAgent) {
  this.userAgent = userAgent || window.navigator.userAgent;
  this.__VERSION__ = pkgVersion;

  this.parseUserAgent = (userAgent) => {
    const browserMatches = {};

    const uaFresh = userAgent || this.userAgent;

    // convert to lower case and treat tabs and multiple sapces as single space
    const ua = uaFresh.toLowerCase().replace(/\s\s+/g, ' ');

    const browserMatch = /(edge)\/([\w.]+)/.exec(ua)
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

    const browserInfo = {
      name: browserMatch[5] || browserMatch[3] || browserMatch[1] || undefined,
      platform: platformMatch[0] || undefined,
      userAgent: uaFresh,
      version: browserMatch[4] || browserMatch[2] || undefined,
    };

    if (!browserInfo.name) {
      Object.keys(browserInfo).forEach((key) => { browserInfo[key] = 'Unknown'; });
      return browserInfo;
    }

    if (browserInfo.name) {
      browserMatches[browserInfo.name] = true;
      browserInfo.name = KnownBrowsers[browserInfo.name] || 'Unknown';
    }

    if (browserInfo.platform) {
      browserMatches[browserInfo.platform] = true;
      browserInfo.platform = KnownPlatforms[browserInfo.platform] || 'Unknown';
    }

    if (browserInfo.version) {
      browserInfo.shortVersion = utils.toFixed(parseFloat(browserInfo.version), 2);
    }

    browserInfo.isAndroid = !!(
      browserMatches.tablet
      || browserMatches.android
      || browserMatches.androidTablet
    );

    browserInfo.isTablet = !!(
      browserMatches.ipad
      || browserMatches.tablet
      || browserMatches.androidTablet
    );

    browserInfo.isMobile = !!(
      browserMatches.android
      || browserMatches.androidTablet
      || browserMatches.tablet
      || browserMatches.ipad
      || browserMatches.ipod
      || browserMatches.iphone
      || browserMatches['windows phone']
    );

    browserInfo.isDesktop = !!(
      browserMatches.cros
      || browserMatches.mac
      || browserMatches.linux
      || browserMatches.win
    );

    browserInfo.isWebkit = !!(
      browserMatches.chrome
      || browserMatches.crios
      || browserMatches.opr
      || browserMatches.safari
    );

    browserInfo.isIE = !!(
      browserMatches.msie
      || browserMatches.rv
    );

    return browserInfo;
  };

  this.getBrowserInfo = () => {
    const browserInfo = this.parseUserAgent();
    delete browserInfo.isAndroid;
    delete browserInfo.isMobile;
    delete browserInfo.isTablet;
    delete browserInfo.isWebkit;
    delete browserInfo.isDesktop;
    delete browserInfo.isIE;
    return browserInfo;
  };

  this.getBrowserName = () => this.parseUserAgent().name;
  this.getBrowserVersion = () => this.parseUserAgent().version;
  this.getBrowserShortVersion = () => this.parseUserAgent().shortVersion || 'Unknown';
  this.getPlatformName = () => this.parseUserAgent().platform;

  this.isAndroid = () => this.parseUserAgent().isAndroid;
  this.isTablet = () => this.parseUserAgent().isTablet;
  this.isMobile = () => this.parseUserAgent().isMobile;
  this.isWebkit = () => this.parseUserAgent().isWebkit;
  this.isDesktop = () => this.parseUserAgent().isDesktop;
  this.isIE = () => this.parseUserAgent().isIE;

  Object.freeze(this);
}

export default BrowserDtector;
