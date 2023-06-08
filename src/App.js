import { useState } from 'react';
import './App.css'
import './styles/index.css';

import RouterWrapper from './routes';
import { LeftTabs } from './components/atoms/left-tab/LeftTabs';
import { Header } from './components/atoms/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="viewframe-container">
        <LeftTabs />
        <RouterWrapper />
      </div>
    </div>
  );
}

export default App;
