import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default class Javascript extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>JS</h1>
          <p>JS is the most popular language</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
        </Jumbotron>
      </div>
    );
  }
}