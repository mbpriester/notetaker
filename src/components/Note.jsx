import React from 'react'
import PropTypes from 'prop-types';
import {Checkbox, Input} from "semantic-ui-react";

const Note = ({note, key}) => {
    return (
        <div key={key} className='noteItem'>
            {note && <Checkbox className='deleteNote' />}
            <Input className='noteText' placeholder='Enter Note here'/>
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.string,
    key: PropTypes.number
}

export default Note