import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container-fluid">
            <Header title="Pokedex" />

            <div className="row">
                <PokemonCard
                    name="abra"
                    number="55"
                    avatar="img/pokemons/abra.jpg"
                    types={['Mariconsito']}
                    />
                <PokemonCard
                    name="bulbasaur"
                    number="123"
                    avatar="img/pokemons/bulbasaur.jpg"
                    types={['Mariconsito']}
                    />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
