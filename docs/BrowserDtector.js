import React from 'react';

import BrowserDtector from '../lib/browser-dtector';

const BrowserDtectorComponent = () => {
  const browser = new BrowserDtector(window.navigator.userAgent);
  const parsedUA = browser.parseUserAgent();
  const isKnownBrowser = parsedUA.name !== 'Unknown' && parsedUA.name !== null;

  return (
    <React.Fragment>
      <div className="content justify-center browser-dtector">
        {isKnownBrowser && (
          <React.Fragment>
            <p className="text">
              You are viewing this page in -
              <span className="browser-name">{'{'}{parsedUA.name}{'}'}</span>
            </p>
            <p className="sub-text">{parsedUA.platform}, v{parsedUA.version}</p>
          </React.Fragment>
        )}
        {!isKnownBrowser && (
          <p className="text"><span className="browser-name">{'{ Unknown Browser }'}</span></p>
        )}
      </div>
      <footer className="footer">BrowserDtector: v{browser.__VERSION__}</footer>
    </React.Fragment>
  );
};

export default BrowserDtectorComponent;
