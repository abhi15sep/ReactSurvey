import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            "The time has come," the walrus said, "to talk of many things."
          </p>
          <a
            className="App-link"
            href="/auth/google"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in with Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
