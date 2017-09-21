import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonType extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <a href="/grass">
          <span className="label type type-grass">
            { this.props.name }
          </span>
        </a>
    );
  }
}

PokemonType.propTypes = {
  name: PropTypes.string.isRequired
}

export default PokemonType;
