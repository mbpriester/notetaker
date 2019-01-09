import React from 'react'
import PropTypes from 'prop-types';
import {Checkbox, Input} from "semantic-ui-react";
import './Note.css'

const Note = (note, indexKey, onSubmit) => {
    console.log(onSubmit)
    return (
        <div key={indexKey} className='noteItem'>
            {note && <Checkbox className='deleteNote' />}
            <Input
                className='noteText'
                placeholder='Enter Note here'
                value={note}
                onKeyPress={(e) => e.key === 'Enter' && onSubmit && onSubmit(e.target.value)}
            />
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.string,
    indexKey: PropTypes.number
}

export default Note