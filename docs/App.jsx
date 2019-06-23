import React from 'react';

import BrowserDtectorComponent from './BrowserDtector';
import UserAgentParserComponent from './UserAgentParser';

import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={BrowserDtectorComponent} />
            <Route path="/ua-parser" component={UserAgentParserComponent} />
            <Route component={BrowserDtectorComponent} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
