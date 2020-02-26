import React from 'react';
import logo from './carlosdiaz.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Name is Carlos Diaz
        </p>
        <a
          className="App-link"
          href="https://github.com/carlosmdiaz/carlosmdiaz.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
