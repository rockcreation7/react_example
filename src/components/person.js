import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Person extends Component {

    // why props here
  constructor(props){
    super(props);
 
 
    this.onDel = this.onDel.bind(this);
  }

  onDel(event){
    //this.setState({ageInput:event.target.value})
     
    this.props.onDel(this.props.name)
  }

  render() {
    return (
      <div>
        <h2 onClick={this.onDel}> {this.props.name} {this.props.qty} {this.props.price} </h2>
        <li><Link to="/angularjs/?id=123">AngularJS</Link></li>
      </div>
    );
  }
}