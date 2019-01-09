import React from "react";
import { shallow } from 'enzyme'
import Note from "./Note"
import {Checkbox, Input} from "semantic-ui-react";

describe("Note", function () {
    it('should create a blank note',  () => {
        const wrapper = shallow(<Note />)

        expect(wrapper.find('.noteItem')).toExist()
    });

    it("contains a textfield", () => {
        let props = {
            note: 'blah',
            key: 1
        }

        const wrapper = shallow(<Note {...props} />)

        expect(wrapper.children().containsMatchingElement(<Input />)).toEqual(true)
        expect(wrapper.children().containsMatchingElement(<Checkbox />)).toEqual(true)
    });

});