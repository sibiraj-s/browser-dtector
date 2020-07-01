import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BrowserDtector from './BrowserDtector';
import UserAgentParser from './UserAgentParser';
import Nav from './Nav';

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={BrowserDtector} />
          <Route path="/ua-parser" component={UserAgentParser} />
          <Route component={BrowserDtector} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
