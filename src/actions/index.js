export const addNote = (note) => ({
    type: 'NEW_NOTE',
    note: note
})

export const deleteNote = (index) => ({
    type: 'DELETE_NOTE',
    index: index
})