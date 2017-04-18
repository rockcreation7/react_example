import React, { Component } from 'react';
//import { render } from 'react-dom';
import Person from './person';
import PersonForm from './person_form';


class Main extends Component {

   constructor(){
    super();
 
    this.refresh = this.refresh.bind(this);
   // this.onPersonChanged = this.onPersonChanged.bind(this);
  }
 
 
  refresh(){

 

  }

  onSubmit(name, price, qty){
    this.props.onAddPerson({name: name, price: price, qty: qty})
    //console.log(this.props)
    //personAction.addPerson({name: name, age: age})
    //this.setState({people:this.state.people.concat({name: name, age: age})})
  }

  onDel(name){
    this.props.onDeletePerson({name: name});
    console.log(name);
    //personAction.addPerson({name: name, age: age})
    //this.setState({people:this.state.people.concat({name: name, age: age})})
  }

  render() {

    //console.log(this.props);
    const peopleList = this.props.people.map(
      x=>{
        return <Person onDel={this.onDel.bind(this)} key={x.name} {...x} />
      }
    )
 
    //setTimeout(() => {this.setState({name: "mary", age: 12})}, 3000);
    
    return (
      
      <div className="App">
       
       <h2>This is a React component</h2>
        {peopleList}
       <PersonForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }


}
 
export default Main;