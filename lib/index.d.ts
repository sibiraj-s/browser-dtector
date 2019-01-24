interface IBrowserInfo {
  name: string;
  version: string;
  shortVersion?: string;
  platform: string;
  isAndroid?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
  isDesktop?: boolean;
  isIE?: boolean;
  isWebkit?: boolean;
  userAgent: string;
}
