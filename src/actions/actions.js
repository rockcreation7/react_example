import { actionTypes } from './actionTypes'

export function addPerson(person){

   return {
        type:actionTypes.ADD_PERSON,
        person: person
        
    }
}

export function deletePerson(name){

    return {
        type: actionTypes.REMOVE_PERSON,
        person: name
    }
}