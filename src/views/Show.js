import React from 'react';
import Reflux from 'reflux';

import PokemonStore from '../stores/PokemonStore';
import Actions from '../actions/Actions';

import Header from '../components/Header';
import PokemonImage from '../components/PokemonImage';
import PokemonTabs from '../components/PokemonTabs';

class Show extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = PokemonStore;
    this.storeKeys = ['dataPokemon'];
  }

  componentDidMount() {
    console.log(this.state.dataPokemon)
    Actions.getPokemon(this.props.match.params.name);
  }

  render() {
    console.log(this.state.dataPokemon)
    return (
      <div className="Show">
        <Header
          title={ this.props.match.params.name }
          isPokemon={ true }
          number={ this.state.dataPokemon.id }
          />

        <div className="row">
          <PokemonImage
            avatar={ "/img/pokemons/" +  this.props.match.params.name  +".jpg" }
            />

          <PokemonTabs
            pokemon={ this.state.dataPokemon }
            />
        </div>

      </div>
    );
  }
}

export default Show;
