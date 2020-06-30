import React from 'react';
import './App.css';

import LoginBox from './components/Authentication/login';

function App() {
  return (
    <div className="App">
      <div className="Back-img"></div>
      <div className="Auth-box">
        <LoginBox />
      </div>
    </div>
  );
}

export default App;
