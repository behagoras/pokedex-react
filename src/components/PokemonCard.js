import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom'

import PokemonType from './PokemonType';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let types = this.props.types.map((currentValue, index, array) => {
      return (
        <PokemonType name={ currentValue } />
      );
    });
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
            <Link to={"/pokemon/" + this.props.name.toLowerCase() } >
              <img className="avatar center-block" src={ this.props.avatar } />
            </Link>
          </div>
          <div className="panel-footer">
            <div className="text-center">
              { types }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
}

export default PokemonCard;
