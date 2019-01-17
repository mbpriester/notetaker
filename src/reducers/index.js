import { combineReducers } from 'redux'

const notesReducer = (state = { notes: []}, action) => {
    switch (action.type){
        case 'NEW_NOTE':
            return {
                notes: [...state.notes, action.note]
            }
        case 'DELETE_NOTE':
            return {

                notes: state.notes.filter(note => note !== state.notes[action.index])
            }
        default:
            return state
    }
}

export default combineReducers({
   notesReducer
})