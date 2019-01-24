import React from 'react';

import BrowserDtectorComponent from './BrowserDtector';
import UserAgentParserComponent from './UserAgentParser';

import { Route, Switch } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={BrowserDtectorComponent} />
          <Route path="/ua-parser" component={UserAgentParserComponent} />
          <Route component={BrowserDtectorComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
