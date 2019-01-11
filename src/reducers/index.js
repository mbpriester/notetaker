import { combineReducers } from 'redux'

const notesReducer = (state = { notes: []}, action) => {
    switch (action.type){
        case 'NEW_NOTE':
            return {
                notes: [...state.notes, action.note]
            }
        case 'DELETE_NOTE':
            return {

                notes: [...state.notes].slice(0,action.index).concat([...state.notes].slice(action.index+1,state.notes.length))
                    //state.notes.filter( note=> note !== state.notes[action.index]  )
                // notes:  [
                //     ...state.notes.slice(0, action.index),
                //     ...state.notes.slice(action.index + 1)
                // ]
            }
        default:
            return state
    }
}

export default combineReducers({
   notesReducer
}) 