import React, { useState } from 'react';

import BrowserDtector, { BrowserInfoFull } from '../lib/browser-dtector';

const currentUserAgent = window.navigator.userAgent;
const browser = new BrowserDtector(currentUserAgent);

interface DisplayTable {
  name: string;
  key: keyof BrowserInfoFull
}

const uaDisplayTable: DisplayTable[] = [
  { name: 'Browser Name', key: 'name' },
  { name: 'Version', key: 'version' },
  { name: 'Short Verison', key: 'shortVersion' },
  { name: 'Platform', key: 'platform' },
  { name: 'isDesktop', key: 'isDesktop' },
  { name: 'isWebkit', key: 'isWebkit' },
  { name: 'isTablet', key: 'isTablet' },
  { name: 'isAndroid', key: 'isAndroid' },
  { name: 'isMobile', key: 'isMobile' },
  { name: 'isIE', key: 'isIE' },
];

const UserAgentParserComponent = (): JSX.Element => {
  const [parsedUA, setParsedUA] = useState(browser.parseUserAgent());
  const isKnownBrowser = parsedUA.name !== null;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const ua = event.target.value || '';
    setParsedUA(browser.parseUserAgent(ua));
  }

  return (
    <div className="content useragent-parser">
      <p className="ua-text"><span className="text-crimson">{'{'}UserAgent{'}'}</span> Parser</p>
      <input type="text" className="ua-input" placeholder="Enter useragent string" onChange={handleChange} />
      <div className="parsed-ua">
        {isKnownBrowser && (
          <div className="current-ua">
            <b>Current UserAgent:</b> {parsedUA.userAgent}
            <div className="parsed-results">
              <p className="parsed-results__title">Parsed Results:</p>
              <table>
                <tbody>
                  {uaDisplayTable.map(({ key, name }: DisplayTable) => (
                    <tr key={`uaKey__${key}`}><td>{name}</td><td>: {parsedUA[key]?.toString()}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {!isKnownBrowser && (
          <div className="current-ua">
            <span className="text-crimson">Error: Unknown browser or Invalid UserAgent</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAgentParserComponent;
