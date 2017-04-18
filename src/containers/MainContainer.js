import {connect} from 'react-redux'

import Main from '../components/main'
import { addPerson, deletePerson} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        people: state
   
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddPerson: (person) => {
            dispatch(addPerson(person)) 
        },
        onDeletePerson: (name) => {
            dispatch(deletePerson(name)) 
        }
    }

}

 

const MainContainer = connect (

    mapStateToProps,
    mapDispatchToProps
    

)(Main)

export default MainContainer