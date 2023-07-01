import React from 'react';

import BrowserDetector from '../lib/browser-dtector';

const BrowserDetectorComponent = (): JSX.Element => {
  const browser = new BrowserDetector(window.navigator.userAgent);
  const parsedUA = browser.parseUserAgent();
  const isKnownBrowser = parsedUA.name !== null;

  return (
    <React.Fragment>
      <div className='content justify-center browser-detector'>
        {isKnownBrowser
          && <React.Fragment>
            <p className='text'>
              You are viewing this page in -
              <span className='browser-name'>{'{'}{parsedUA.name as string}{'}'}</span>
            </p>
            <p className='sub-text'>{parsedUA.platform as string}, v{parsedUA.version}</p>
          </React.Fragment>
        }
        {!isKnownBrowser
          && <p className='text'><span className='browser-name'>{'{ Unknown Browser }'}</span></p>
        }
      </div>
      <footer className='footer'>BrowserDetector: v{BrowserDetector.VERSION}</footer>
    </React.Fragment>
  );
};

export default BrowserDetectorComponent;
