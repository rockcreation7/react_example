import React, { Component } from 'react';

export default class Person extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.name} {this.props.price} </h2>
 
      </div>
    );
  }
}