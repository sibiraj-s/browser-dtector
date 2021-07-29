import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BrowserDetector from './BrowserDetector';
import UserAgentParser from './UserAgentParser';
import Nav from './Nav';

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Nav />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={BrowserDetector} />
          <Route path='/ua-parser' component={UserAgentParser} />
          <Route component={BrowserDetector} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
