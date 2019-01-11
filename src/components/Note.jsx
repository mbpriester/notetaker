import React from 'react'
import PropTypes from 'prop-types';
import {Input} from "semantic-ui-react";
import './Note.css'
import {FiTrash2} from "react-icons/fi";

const Note = ({note, index, onSubmit, onDelete}) => {
    return (
        <div key={index} className='noteItem'>
            {note ? <Input
                className='noteText newNoteItem'
                placeholder='Enter Note here'
                disabled={!!note}
                value={note}
                onKeyDown={(e) => e.key === 'Enter' && onSubmit && onSubmit(e.target.value)}
            /> :
            <Input
                className='noteText'
                placeholder='Enter Note here'
                onKeyDown={(e) => e.key === 'Enter' && onSubmit && onSubmit(e.target.value)}
            />}
            {note && <FiTrash2
                className='deleteNote'
                onClick={onDelete && onDelete()}
            />}
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.string,
    indexKey: PropTypes.number,
    onSubmit: PropTypes.func
}

export default Note