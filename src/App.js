import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter } from 'react-router-dom'

import BottomNav from './BottomNav/bottomNav';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <BottomNav />
      </HashRouter>
    </div>
  );
}

export default App;
