import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonType from './PokemonType';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-3">
        <div className="pokemon panel panel-primary">
          <div className="panel-heading">
            <h1>
              { this.props.name }
              <span className="label label-primary pull-right">#{ this.props.number }</span>
            </h1>
          </div>
          <div className="panel-body">
            <a href="/pokemon/{ this.props.name }">
              <img className="avatar center-block" src={ this.props.avatar } />
            </a>
          </div>
          <div className="panel-footer">
            <div className="text-center">
              <PokemonType name="Maricon" />
              <PokemonType name="Putisimo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
}

export default PokemonCard;
