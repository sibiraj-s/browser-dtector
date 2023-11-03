import React from 'react';

import BrowserDetector from '../lib/browser-dtector';

const BrowserDetectorComponent = (): JSX.Element => {
  const browser = new BrowserDetector(window.navigator.userAgent);
  const parsedUA = browser.parseUserAgent();
  const isKnownBrowser = parsedUA.name !== null;

  return (
    <React.Fragment>
      <div className='m-auto text-center'>
        {isKnownBrowser
          && <React.Fragment>
            <p className='text-4xl text-center mb-4'>
              You are viewing this page in -
              <span className='text-red-600'>{'{'}{parsedUA.name as string}{'}'}</span>
            </p>
            <p className='whitespace-nowrap text-red-700 text-lg'>{parsedUA.platform as string}, v{parsedUA.version}</p>
          </React.Fragment>
        }
        {!isKnownBrowser
          && <p className='text-4xl text-red-600'>{'{ Unknown Browser }'}</p>
        }
      </div>
      <footer className='absolute bottom-2 left-4 text-sm'>BrowserDetector: v{BrowserDetector.VERSION}</footer>
    </React.Fragment>
  );
};

export default BrowserDetectorComponent;
