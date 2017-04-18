import { actionTypes } from './actionTypes'

export function addPerson(person){

   return {
        type:actionTypes.ADD_PERSON,
        person: person
        
    }
}

export function deletePerson(person){

    return {
        type:actionTypes.REMOVE_PERSON,
        person: person
    }
}