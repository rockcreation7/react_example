import {actionTypes} from '../actions/actionTypes'


export function people(state, action){

    switch(action.type){
        case actionTypes.ADD_PERSON:
            return [...state, action.person];
            // let newState = Object.assign({}, state)

                //newState.push(action.person)

            // return newState;
       case actionTypes.REMOVE_PERSON:
            return state;
            // let newState = Object.assign({}, state)

                //newState.push(action.person)

            // return newState;
            default:
                return state;
            

    }
}