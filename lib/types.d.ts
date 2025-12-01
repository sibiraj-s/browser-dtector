import { KnownBrowsers, KnownPlatforms } from './constants';

declare type ValueOf<T> = T[keyof T];
export type KnownBrowsersKeys = keyof typeof KnownBrowsers;
export type KnownPlatformsKeys = keyof typeof KnownPlatforms;

export type KnownBrowsersValues = ValueOf<typeof KnownBrowsers>;
export type KnownPlatformsValues = ValueOf<typeof KnownPlatforms>;

export type BrowserMatches = { [key in KnownBrowsersKeys | KnownPlatformsKeys]: boolean };

export interface Brave {
  isBrave(): Promise<boolean>;
}

export interface NavigatorExtended extends Navigator {
  brave?: Brave;
}

export interface BrowserInfo {
  name: KnownBrowsersValues | null;
  platform: KnownPlatformsValues | null;
  userAgent: string;
  version: string | null;
  shortVersion: string | null;
  isAndroid: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isWebkit: boolean;
  isIE: boolean;
  isChrome: boolean;
  isFireFox: boolean;
  isSafari: boolean;
  isOpera: boolean;
  isEdge: boolean;
}