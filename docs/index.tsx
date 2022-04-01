import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.scss';

const container = document.getElementById('__root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
