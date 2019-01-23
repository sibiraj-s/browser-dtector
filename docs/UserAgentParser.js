import React from 'react';

import BrowserDtector from '../dist/lib/browser-dtector';

const currentUserAgent = window.navigator.userAgent;
const browser = new BrowserDtector(currentUserAgent);

const toLowerCase = str => str.toLowerCase().replace(/\s\s+/g, ' ');

class UserAgentParserComponent extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      parsedUA: browser.parseUserAgent(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getFormattedParsedUserAgentForHTML(parsedUserAgent) {
    return [
      { key: 'Browser Name', value: parsedUserAgent.name },
      { key: 'Version', value: parsedUserAgent.version },
      { key: 'Short Verison', value: parsedUserAgent.shortVersion },
      { key: 'Platform', value: parsedUserAgent.platform },
      { key: 'isDesktop', value: parsedUserAgent.isDesktop },
      { key: 'isWebkit', value: parsedUserAgent.isWebkit },
      { key: 'isTablet', value: parsedUserAgent.isTablet },
      { key: 'isAndroid', value: parsedUserAgent.isAndroid },
      { key: 'isMobile', value: parsedUserAgent.isMobile },
      { key: 'isIE', value: parsedUserAgent.isIE },
    ];
  }

  handleChange(event) {
    const ua = event.target.value;
    const parsedUA = browser.parseUserAgent(ua || '');
    this.setState({ parsedUA });
  }

  render() {
    const { parsedUA } = this.state;
    const isKnownBrowser = parsedUA.name !== 'Unknown';
    const parsedUAForHTML = this.getFormattedParsedUserAgentForHTML(parsedUA);

    return (
      <div className="content useragent-parser">
        <p className="ua-text"><span className="text-crimson">{'{'}UserAgent{'}'}</span> Parser</p>
        <input type="text" className="ua-input" placeholder="Enter useragent string" onChange={this.handleChange} />
        <div className="parsed-ua">
          {isKnownBrowser && (
            <div className="current-ua">
              <b>Current UserAgent:</b> {parsedUA.userAgent}
              <div className="parsed-results">
                <p className="parsed-results__title">Parsed Results:</p>
                <table>
                  <tbody>
                    {parsedUAForHTML.map(item => (
                      <tr key={toLowerCase(item.key)}><td>{item.key}</td><td>: {item.value.toString()}</td></tr>
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
  }
}

export default UserAgentParserComponent;
