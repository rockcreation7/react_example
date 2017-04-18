import {connect} from 'react-redux'

import Main from '../components/main'
import { addPerson} from '../actions/actions'
import { deletePerson} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        people: state
   
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddPerson: (person) => {
            dispatch(addPerson(person)) 
        }
    }

}

const mapDispatchToProps22 = (dispatch) => {

    return {
        onDeletePerson: (person) => {
            dispatch(deletePerson(person)) 
        }
    }

}

const MainContainer = connect (

    mapStateToProps,
    mapDispatchToProps
    

)(Main)

export default MainContainer