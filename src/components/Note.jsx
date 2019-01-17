import React from 'react'
import PropTypes from 'prop-types';
import {Input} from "semantic-ui-react";
import './Note.css'
import {FiTrash2} from "react-icons/fi";

const Note = ({note, index, onSubmit, onDelete, className}) => {
    return (
        <div key={index}
             className={note ? 'noteItem' : className +' noteItem'}>
            {note ? <Input
                className='noteText'
                disabled={!!note}
                value={note}
            /> :
            <Input
                className='noteText  newNoteItem'
                placeholder='Enter Note here'
                onKeyDown={(e) => e.key === 'Enter' &&
                    onSubmit &&
                    (onSubmit(e.target.value),
                    e.target.value='')}
            />}
            {note && <FiTrash2
                className='deleteNote'
                onClick={() => {onDelete && onDelete(index)}}
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