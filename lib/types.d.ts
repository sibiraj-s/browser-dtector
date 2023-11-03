import { KnownBrowsers, KnownPlatforms } from './constants';

declare type ValueOf<T> = T[keyof T];
export type KnownBrowsersKeys = keyof typeof KnownBrowsers;
export type KnownPlatformsKeys = keyof typeof KnownPlatforms;

export type BrowserMatches = { [key in KnownBrowsersKeys | KnownPlatformsKeys]: boolean };

export interface Brave {
  isBrave(): Promise<boolean>;
}

export interface NavigatorExtended extends Navigator {
  brave?: Brave;
}
