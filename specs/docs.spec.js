import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

import BrowserDtectoApp from '../docs/App';

test('it should render `demopage` correctly', () => {
  renderer.create(<HashRouter><BrowserDtectoApp /></HashRouter>);
});
