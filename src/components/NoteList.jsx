import React from 'react'
import Note from "./Note";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import {FiPlus} from "react-icons/fi";
import {addNote, deleteNote} from "../actions";
import './NoteList.css';

export class NoteList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
        this.addNewNote = this.addNewNote.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    addNewNote() {
        if (this.state.isHidden) {
            this.setState({
                isHidden: false
            })
        }
    }

    onSubmit(newNote) {
        this.props.addNote(newNote)
    }

    onDelete(index) {
        this.props.deleteNote(index)
    }

    render() {
        const {notes} = this.props
        const {isHidden} = this.state
        return (
            <div>
                <h2 className='newNoteTitle'>Create a New Note</h2>
                <Button
                    className='addNoteButton'
                    onClick={() => this.addNewNote()}>
                    <FiPlus/>
                </Button>
                <div className='newNoteContainer'>
                    {!isHidden &&
                    <Note
                        onSubmit={this.onSubmit}
                        className={'newNoteItem'}/>}
                </div>
                <div className='allNotesContainer'>
                    <h2>Existing Notes</h2>
                    {notes && notes.length > 0 &&
                    (notes.map((note, index) =>
                        <Note
                            key={index}
                            note={note}
                            index={index}
                            className={'existingNoteItem'}
                            onDelete={this.onDelete}
                        />))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
})

const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch(addNote(note)),
    deleteNote: index => dispatch(deleteNote(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)