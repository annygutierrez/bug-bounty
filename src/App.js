import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
        <span className="App-B">B</span>ug<span className="App-B">B</span>ounty All Time Leader<span className="App-B">b</span>oard
        </p>
      </header>
      <main className="App-main">
        <div className="App-box">
        <p>Hello</p>
        </div>
        <div className="App-box">
        <p>Hello</p>
        </div>
      </main>
    </div>
  );
}

export default App;
