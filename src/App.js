import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container-fluid">
            <Header title="Pokedex" />
        </div>
      </div>
    );
  }
}

export default App;
