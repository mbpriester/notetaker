import React from 'react'
import Note from "./Note";
import {connect} from "react-redux";
import {Button, Popup} from "semantic-ui-react";
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
        this.setState({
            isHidden: true
        })
        this.props.addNote(newNote)
    }

    onDelete(index) {
        this.props.deleteNote(index)
    }

    render() {
        const {notes} = this.props
        const {isHidden} = this.state
        return (
            <div className='noteListContainer'>
                <div className='newNoteContainer'>
                    {!isHidden &&
                    <Note
                        onSubmit={this.onSubmit}
                        className='newNote'/>}
                </div>
                <Popup className='hoverLabel' trigger={
                        <Button
                            className='addNoteButton'
                            onClick={() => this.addNewNote()}>
                            <FiPlus/>
                        </Button>}
                       content={'Create a New Note'}
                       style={styles}
                       />
                <div
                    className={notes && notes.length > 0 ? 'allNotesContainer' : 'hidden'}>
                    {notes && notes.length > 0 &&
                        <h3>Existing Notes</h3>}
                    {notes && notes.length > 0 &&
                        (notes.map((note, index) =>
                            <Note
                                key={index}
                                note={note}
                                index={index}
                                className={'existingNoteItem'}
                                onDelete={this.onDelete}
                            />))
                        }
                </div>
            </div>
        )
    }
}
const styles = {
    float: 'left',
    textAlign: 'left',
    marginBottom: '-30px',
    right: '0',
    paddingLeft: '60px'
}

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
})

const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch(addNote(note)),
    deleteNote: index => dispatch(deleteNote(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)