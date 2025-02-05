import React, { useState } from 'react';

import BrowserDetector from '../lib/browser-dtector';

const currentUserAgent = window.navigator.userAgent;
const browser = new BrowserDetector(currentUserAgent);

interface DisplayTable {
  name: string;
  key: keyof ReturnType<typeof browser.parseUserAgent>;
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ua = event.target.value || '';
    setParsedUA(browser.parseUserAgent(ua));
  };

  return (
    <div className='max-w-2xl m-auto'>
      <p className='text-center text-4xl mb-4'><span className='text-red-600'>{'{'}UserAgent{'}'}</span> Parser</p>
      <input type='text' className='w-full bg-transparent outline-hidden px-2 py-3 border-b border-gray-500' placeholder='Enter useragent string' onChange={handleChange} />
      <div className='bg-white p-2 rounded-md w-full mt-8 text-sm'>
        {isKnownBrowser
          && <div>
            <b>Current UserAgent:</b> {parsedUA.userAgent}
            <div className='mt-6'>
              <p className='font-medium underline mb-2'>Parsed Results:</p>
              <table>
                <tbody>
                  {uaDisplayTable.map(({ key, name }: DisplayTable) => <tr key={`uaKey__${key}`}><td>{name}</td><td>: {parsedUA[key]?.toString()}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        }
        {!isKnownBrowser
          && <div>
            <span className='text-red-600'>Error: Unknown browser or Invalid UserAgent</span>
          </div>
        }
      </div>
    </div>
  );
};

export default UserAgentParserComponent;
