import React, { Component } from 'react';

class PersonForm extends Component {

  // why props here
  constructor(props){
    super(props);
    this.state ={
      nameInput: "", priceInput: "", qtyInput: ""
    }
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onQtyChanged = this.onQtyChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChanged(event){
    this.setState({nameInput:event.target.value})
    // console.log(event.target.value)
  }
  onPriceChanged(event){
     this.setState({priceInput:event.target.value})
  }

  onQtyChanged(event){
     this.setState({qtyInput:event.target.value})
  }

  onSubmit(event){
    //this.setState({ageInput:event.target.value})
    //console.log(this.state);
    this.props.onSubmit(this.state.nameInput, this.state.priceInput, this.state.qtyInput)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Input Name" value={this.state.nameInput} onChange={this.onNameChanged}/>
        <input type="text" placeholder="Input Qty" value={this.state.qtyInput} onChange={this.onQtyChanged}/>
        <input type="text" placeholder="Input Price" value={this.state.priceInput} onChange={this.onPriceChanged}/>
        
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default PersonForm;