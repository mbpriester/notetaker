import * as reducers from '../reducers'
import * as actions from '../actions'

describe('noteReducer', () => {
    it('returns the initial state', () => {
        expect(reducers.default(undefined, {})).toEqual({notesReducer: {notes: []}})
    });
    it('handles NEW_NOTE', () => {
        expect(
            reducers.default({}, {
                type: 'NEW_NOTE',
                note: 'a new note'
            })
        ).toEqual({notesReducer: {notes: ['a new note']}})
    });
    describe('notesReducer with DELETE_NOTE action', function () {
        beforeEach(() => {
            reducers.default({}, {
                type: 'NEW_NOTE',
                note: 'testNote'
            })
        })

        expect(reducers.default({
            notesReducer: {
                notes: ['testNote']
            }
        }, {
            type: 'DELETE_NOTE',
            index: 0
        })).toEqual({notesReducer: {notes: []}})
    });
})