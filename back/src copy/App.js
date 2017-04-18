import React, { Component } from 'react';


import {createStore} from 'redux'
//import PersonForm from './components/person_form';
//import Person from './components/person';
import './App.css';
//import personStore from './person_store';
//import * as personAction from './person_action';
import {people} from './reducers/people'
import {Provider} from  'react-redux'
import MainContainer from './containers/MainContainer'


let store = createStore(people, [{name:"Hello", price:123}])

store.subscribe(() => {
    console.log(store.getState())
})




window.store = store


class App extends Component {

 
  

  render() {

    return (

      <Provider store={store}>
        <MainContainer />
      </Provider> 

    )
  }


}
 
export default App;





/* 


class App extends Component {

   constructor(){
    super();
    this.state = {
      people:  personStore.getPeople()
    }
    this.refresh = this.refresh.bind(this);
   // this.onPersonChanged = this.onPersonChanged.bind(this);
  }
 
  componentWillMount(){
    personStore.on("change", this.refresh)
  }
  
  componentWillUnMount(){
    personStore.removeListener("change", this.refresh)
  }

  refresh(){

    this.setState({
      people:personStore.getPeople()
    })

  }

  onSubmit(name, age){

    personAction.addPerson({name: name, age: age})
    //this.setState({people:this.state.people.concat({name: name, age: age})})
  }

  render() {

    const peopleList = this.state.people.map(
      x=>{
        return <Person key={x.name} {...x} />
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
 
export default App;


  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Javascript}/>
            <Route path="javascript" component={Javascript}/>
            <Route path="angularjs" component={AngularJS}/>
            <Route path="reactjs" component={ReactJS}/>
        </Route>
      </Router>  
      
    );
  } 
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Main from './main'
import Javascript from './javascript'
import AngularJS from './angularjs'
import ReactJS from './reactjs'
 // import logo from './logo.svg';
 constructor(){
    super();
    this.state ={
      name: "rock", age: 11
    }

    this.onPersonChanged = this.onPersonChanged.bind(this);
  }
  
  onPersonChanged(name, age){
    this.setState({name: name, age: age})
  }

  render() {

    //setTimeout(() => {this.setState({name: "mary", age: 12})}, 3000);
    
    return (
      <div className="App">
       <h2>This is a React component</h2>
       <Person name={this.state.name} age={this.state.age}/>
       <PersonForm onPersonChanged={this.onPersonChanged}/>
      </div>
    );
  }
  */

/*
class Person extends Component {
  render() {
    return (
      <div>
        <h2> Name: {this.props.name}</h2>
        <p> Age: {this.props.age}</p>
      </div>
    );
  }
}
 
class PersonForm extends Component {

  // why props here
  constructor(props){
    super(props);
    this.state ={
      nameInput: "Jane", ageInput: "12"
    }
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onAgeChanged = this.onAgeChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChanged(event){
    this.setState({nameInput:event.target.value})
    // console.log(event.target.value)
  }
  onAgeChanged(event){
     this.setState({ageInput:event.target.value})
  }
  onSubmit(event){
    //this.setState({ageInput:event.target.value})
    //console.log(this.state);
    this.props.onPersonChanged(this.state.nameInput, this.state.ageInput)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Input Name" value={this.state.nameInput} onChange={this.onNameChanged}/>
        <input type="text" placeholder="Input Name" value={this.state.ageInput} onChange={this.onAgeChanged}/>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
*/