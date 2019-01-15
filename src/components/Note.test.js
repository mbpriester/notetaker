import React from "react";
import { shallow } from 'enzyme'
import Note from "./Note"
import {Checkbox, Input} from "semantic-ui-react";

describe("Note", function () {

    it('should create a blank note',  () => {
        const wrapper = shallow(<Note />)

        expect(wrapper.find('.newNoteItem')).toExist()
    });

    it("contains a textfield", () => {
        let props = {
            note: 'blah',
            indexKey: 1
        }

        const wrapper = shallow(<Note {...props} />)

        expect(wrapper.children().containsMatchingElement(<Input />)).toEqual(true)
    });
    it('should clear the textfield after entering text', () => {
        let props = {
            note: null,
            onSubmit: jest.fn()
        }
        const wrapper = shallow(<Note {...props} />)
        const inputField = wrapper.find('.newNoteItem input')
        inputField.simulate('change', {target: { value: 'Howdy'}})

        wrapper.find('.newNoteItem input').simulate('keydown', {key: 'Enter'})
        expect(wrapper.find('.newNoteItem input').val()).toEqual('')
    });

});