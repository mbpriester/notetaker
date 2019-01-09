import React from 'react'
import {shallow} from 'enzyme'
import NoteList from './NoteList'

describe("NoteList", function () {
    it("should render NoteList", function () {
        const wrapper = shallow(<NoteList />)

        expect(wrapper.find('.addNoteButton').length).toEqual(1)

        expect(wrapper.find('.noteListContainer').length).toEqual(1)
    });
    it('displays a Note component when button is clicked', () => {
        const wrapper = shallow(<NoteList/>)
        wrapper.find('.addNoteButton').simulate('click')
    });

});