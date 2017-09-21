import React, { Component } from 'react';
import Header from '../components/Header';

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="Show">
        <Header title={ this.props.match.params.name } />
      </div>
    );
  }
}

export default Show;
