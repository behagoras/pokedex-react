import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

class PokemonStore extends Reflux.Store {
    constructor() {
        super();

        this.listenables = Actions;

        this.state = {
            data: []
        }
    }

    getPokemons() {
        const self = this;
        HTTP.json().
            then((response) => {
                self.setState({ data: response });
            });

        /* Call poke api
        HTTP.get('http://pokeapi.co/api/v1/pokedex/1/').
            then((response) => {
                self.setState({ data: response.pokemon });
            });*/
    }
}

export default PokemonStore;
