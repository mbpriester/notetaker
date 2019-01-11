import React from 'react'
import {mount, shallow} from 'enzyme'
import ConnectedNoteList,{NoteList} from "./NoteList"
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux";
import Note from "./Note";

describe("NoteList", () => {
    let state, props, dispatch;

    beforeEach(() => {
        state = {
            isHidden: true
        }

        props = {
            state: {
                notesReducer: {
                    notes: [
                        'note1',
                        'note2'
                    ],
                }
            }
        }
        dispatch = {
            addNote: jest.fn()
        }
    })

    it("should render NoteList", () => {
        const wrapper = shallow(<NoteList {...props} />)

        expect(wrapper.find('.newNoteTitle').text()).toBe("Create a New Note")
        expect(wrapper.find('.addNoteButton').length).toEqual(1)

        expect(wrapper.find('.newNoteContainer').length).toEqual(1)
        expect(wrapper.find('.allNotesContainer').length).toEqual(1)
    });
    it('displays a Note component when button is clicked', () => {
        const wrapper = shallow(<NoteList {...props} />)
        wrapper.find('.addNoteButton').simulate('click')
        expect(wrapper.find('.newNoteContainer').length).toEqual(1)
    });

    describe("connected NoteList", () => {
        const initialState = {
            notesReducer: {
                notes:
                    ['bah', 'bah']
            }
        }
        const mockStore = configureStore()

        let store, wrapper;
        beforeEach(() =>{
            store = mockStore(initialState)

            wrapper = mount(<Provider store={store}><ConnectedNoteList /></Provider>)
        })

        // it('allows for notes to be entered', () => {
        //     wrapper.find('.addNoteButton').first().simulate('click')
        //     wrapper.find('.newNoteContainer .noteText input').simulate('keydown', {target: {value: 'Howdy'}})
        //     wrapper.find('.newNoteContainer .noteText input').simulate('keydown', {key: 'Enter'})
        //     wrapper.update()
        //
        //     console.log(wrapper.getElement(<Note />))
        //     expect(wrapper.find('.allNotesContainer ')).toContain('Howdy')
        // });
        it("renders all notes if any exist", () => {
            expect(wrapper.find('.allNotesContainer').children().length).toEqual(3)
        });
        it('deletes a note', () => {
            wrapper.find('.allNotesContainer .existingNoteItem .deleteNote').last().simulate('click')
            expect(wrapper.find('.allNotesContainer').children().length).toEqual(2)
        })
    })
});