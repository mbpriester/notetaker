export const addNote = (note) => {
return    {
    type: 'NEW_NOTE',
    note: note
}}


export const deleteNote = (index) => {
    return {
        type: 'DELETE_NOTE',
        index: index
    }
}