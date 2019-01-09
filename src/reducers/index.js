import { combineReducers } from 'redux'

const notesReducer = (state = { notes: ['dummyNote']}, action) => {
    switch (action){
        case 'NEW_NOTE':
            const notes = [...state.notes, action.note]
            return {
                notes: notes
            }
        default:
            return state
    }
}

export default combineReducers({
   notesReducer
})