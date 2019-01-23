import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import BrowserDtectorComponent from './BrowserDtector';
import UserAgentParserComponent from './UserAgentParser';

import './index.scss';

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

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('__root'));
