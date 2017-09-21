import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonType from './PokemonType';

class PokemonTabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let types = this.props.pokemon.types.map((currentValue, index, array) => {
      return (
        <PokemonType name={ currentValue.type.name } />
      );
    });
    return (
      <div className="col-md-6">
        <ul id="MyTabs" className="nav nav-tabs nav-justified" role="tablist">
          <li role="presentation"  className="active"><a href="#data" aria-controls="data" role="tab" data-toggle="tab">Data</a></li>
          <li role="presentation"><a href="#stats" aria-controls="stats" role="tab" data-toggle="tab">Stats</a></li>
          <li role="presentation"><a href="#evolution" aria-controls="evolution" role="tab" data-toggle="tab">Evolutions</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="data">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Type</strong>
                <span className="pull-right">
                  { types }
                </span>
              </li>
              <li className="list-group-item">
                <strong>Height</strong>
                <span className="pull-right">2′4″ (0.71m)</span>
              </li>
              <li className="list-group-item">
                <strong>Weight</strong>
                <span className="pull-right">15.2 lbs (6.9 kg)</span>
              </li>
              <li className="list-group-item">
                <strong>Abilities</strong>
                <ul>
                  <li>
                    Overgrow
                  </li>
                  <li>
                    Chlorophyll
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div role="tabpanel" className="tab-pane" id="stats">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>HP</strong>
                <span className="badge">45</span>
              </li>
              <li className="list-group-item">
                <strong>Attack</strong>
                <span className="badge">49</span>
              </li>
              <li className="list-group-item">
                <strong>Defense</strong>
                <span className="badge">49</span>
              </li>
              <li className="list-group-item">
                <strong>Special Attack</strong>
                <span className="badge">65</span>
              </li>
              <li className="list-group-item">
                <strong>Special Defense</strong>
                <span className="badge">65</span>
              </li>
              <li className="list-group-item">
                <strong>Speed</strong>
                <span className="badge">45</span>
              </li>
              <li className="list-group-item">
                <strong>Total</strong>
                <span className="badge">318</span>
              </li>
            </ul>
          </div>
          <div role="tabpanel" className="tab-pane" id="evolution">
            <div className="text-center">
              <a href="/pokemon/ivysaur">
                <img src="/img/pokemons/bulbasaur.jpg" width="160" />
                <p>
                  <strong>Bulbasaur</strong>
                </p>
              </a>
              <span className="glyphicon glyphicon-arrow-down"></span>
            </div>

            <div className="text-center">
              <a href="#">
                <img src="/img/pokemons/ivysaur.jpg" width="160" />
                <p>
                  <strong>Ivysaur</strong>
                </p>
              </a>
              <span className="glyphicon glyphicon-arrow-down"></span>
            </div>

            <div className="text-center">
              <a href="/pokemon/ivysaur">
                <img src="/img/pokemons/venusaur.jpg" width="160" />
                <p>
                  <strong>Venusaur</strong>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonTabs.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonTabs;
