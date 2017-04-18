import React, { Component } from 'react';

class PersonForm extends Component {

  // why props here
  constructor(props){
    super(props);
    this.state ={
      nameInput: "Jane", priceInput: "12"
    }
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChanged(event){
    this.setState({nameInput:event.target.value})
    // console.log(event.target.value)
  }
  onPriceChanged(event){
     this.setState({PriceInput:event.target.value})
  }
  onSubmit(event){
    //this.setState({ageInput:event.target.value})
    //console.log(this.state);
    this.props.onSubmit(this.state.nameInput, this.state.priceInput)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Input Name" value={this.state.nameInput} onChange={this.onNameChanged}/>
        <input type="text" placeholder="Input Price" value={this.state.priceInput} onChange={this.onPriceChanged}/>
        
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default PersonForm;