import EventEmitter from "events"
import dispatcher from './person_dispatcher'


class PersonStore extends EventEmitter{

    constructor()
    {
        super()
        this.people = [
                {name: "rock", age: 11},
                {name: "mary", age: 21},
                {name: "daisy", age: 11}
            ] 
        
    }


    getPeople(){
        return this.people;
    }

    addPerson(name, age){
        this.people.push(
            {
                name:name,
                age:age
            }
        )
        this.emit("change");
    }

    handleActions(action){
        console.log("received an action", action)
        switch(action.type){
            case 'ADD' :
                this.addPerson(action.person.name, action.person.age);
                
         
           
            
        }
    }
} 

const personStore = new PersonStore();
dispatcher.register(personStore.handleActions.bind(personStore))
export default personStore;
// window.personStore = personStore;