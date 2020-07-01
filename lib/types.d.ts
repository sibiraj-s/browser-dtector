declare const KnownBrowsers: {
  chrome: string;
  crios: string;
  edge: string;
  edg: string;
  fennec: string;
  jsdom: string;
  mozilla: string;
  msie: string;
  opera: string;
  opios: string;
  opr: string;
  rv: string;
  safari: string;
  samsungbrowser: string;
};

declare const KnownPlatforms: {
  android: string;
  androidTablet: string;
  cros: string;
  fennec: string;
  ipad: string;
  iphone: string;
  jsdom: string;
  linux: string;
  mac: string;
  tablet: string;
  win: string;
  'windows phone': string;
  xbox: string;
};

declare type ValueOf<T> = T[keyof T];
export type KnownBrowsersKeys = keyof typeof KnownBrowsers;
export type KnownPlatformsKeys = keyof typeof KnownPlatforms;

export interface BrowserInfo {
  name: ValueOf<KnownBrowsersKeys> | null;
  platform: ValueOf<KnownPlatformsKeys> | null;
  userAgent: string;
  version: string | null;
  shortVersion: string | null;
}

export interface BrowserInfoFull extends BrowserInfo {
  isAndroid: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isWebkit: boolean;
  isIE: boolean;
}

export type BrowserMatches = { [key: string]: boolean }

export class BrowserDtector {
  userAgent: string;
  VERSION: string;
  constructor(inputUA?: string);
  parseUserAgent(userAgent?: string): BrowserInfoFull;
  getBrowserInfo(): BrowserInfo;
}

export default BrowserDtector;
