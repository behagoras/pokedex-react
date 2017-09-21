import React, { Component } from 'react';

import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Home">
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
    );
  }
}

export default Home;
