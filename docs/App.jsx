import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BrowserDtectorComponent from './BrowserDtector';
import UserAgentParserComponent from './UserAgentParser';
import Nav from './Nav';

const App = () => (
  <HashRouter>
    <Nav />
    <div className="container">
      <Switch>
        <Route path="/" exact component={BrowserDtectorComponent} />
        <Route path="/ua-parser" component={UserAgentParserComponent} />
        <Route component={BrowserDtectorComponent} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
