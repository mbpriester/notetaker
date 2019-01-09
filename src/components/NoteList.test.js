import React from 'react'
import {mount, shallow} from 'enzyme'
import NoteList from "./NoteList";

describe("NoteList", function () {
   let state = {
        notes: [],
        noteIndex: 0,
        isHidden: true
    }
    it("should render NoteList", function () {
        const wrapper = shallow(<NoteList />)

        expect(wrapper.find('.addNoteButton').length).toEqual(1)

        expect(wrapper.find('.newNoteContainer').length).toEqual(1)
        expect(wrapper.find('.allNotesContainer').length).toEqual(1)
    });
    it('displays a Note component when button is clicked', () => {
        const wrapper = shallow(<NoteList/>)
        wrapper.find('.addNoteButton').simulate('click')
        expect(wrapper.find('.newNoteContainer').length).toEqual(1)
    });

    it("renders all notes if any exist", () => {
        const wrapper = mount(<NoteList />)
        wrapper.setState({ notes: ['bah']})
        expect(wrapper.find('.allNotesContainer').children().length).toEqual(1)
    });
    it('allows for notes to be entered', () => {
        const wrapper = mount(<NoteList />)
        wrapper.find('.addNoteButton').first().simulate('click')
        wrapper.find('.noteText input').simulate('keypress', { target: { value: 'Howdy'}})
        wrapper.find('.noteText input').simulate('keypress', {key: 'Enter'})

        expect(wrapper.find('.allNotesContainer')).toContain('Howdy')

    });
});