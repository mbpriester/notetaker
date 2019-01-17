import * as actions from '../actions'

describe('actions', () => {
    it('creates an action to add a new note', () => {
        const note = 'New note'
        const expectedAction = {
            type: 'NEW_NOTE',
            note: note
        }

        expect(actions.addNote(note)).toEqual(expectedAction)
    });
    it('creates an action to delete a note', () => {
        const index = 3
        const expectedAction = {
            type: 'DELETE_NOTE',
            index: index
        }

        expect(actions.deleteNote(index)).toEqual(expectedAction)
    });
})
