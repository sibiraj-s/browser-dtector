import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource-variable/inconsolata';

import App from './App';

import './index.css';

const container = document.getElementById('__root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
