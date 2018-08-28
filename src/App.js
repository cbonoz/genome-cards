import React, { Component } from 'react';
import logo from './assets/genome_cards_invert.png';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Play to your Strengths.</p>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
