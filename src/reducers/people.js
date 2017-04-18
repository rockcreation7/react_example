import {actionTypes} from '../actions/actionTypes'


export function people(state, action){
    
    switch(action.type){
        case actionTypes.ADD_PERSON:

            return [...state, action.person];
            // let newState = Object.assign({}, state)

                //newState.push(action.person)

            // return newState;
       case actionTypes.REMOVE_PERSON:
            console.log(state[0].name);
             console.log(action.person);
           // console.log(people);
           //  return state; 
             
            return state.filter(
                person => person.name !== action.person.name
                // person on first two can be any thing, it just loop an array, named state
                // filter will autogen the new object
            );
             
            // let newState = Object.assign({}, state)

                //newState.push(action.person)

            // return newState;
            default:
                return state;
            

    }
}