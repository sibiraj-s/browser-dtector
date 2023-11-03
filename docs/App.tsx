import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import BrowserDetector from './BrowserDetector';
import UserAgentParser from './UserAgentParser';
import Nav from './Nav';

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Nav />
      <div className='relative h-screen p-4 flex flex-col'>
        <Routes>
          <Route path='/' element={<BrowserDetector />} />
          <Route path='/ua-parser' element={<UserAgentParser />} />
          <Route element={<BrowserDetector />} />
        </Routes>
      </div>
    </HashRouter >
  );
};

export default App;
