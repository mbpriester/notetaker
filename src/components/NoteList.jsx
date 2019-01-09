import React from 'react'
import Note from "./Note";
import {Button} from "semantic-ui-react";
import {FiPlus} from "react-icons/fi";
import './NoteList.css';
import {connect} from "react-redux";
import {addNote} from "../actions";

class NoteList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
        this.addNewNote = this.addNewNote.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidUpdate() {
        console.log("isHidden has updated: " + this.state.isHidden)
    }

    addNewNote() {
        if (this.state.isHidden) {
            this.setState({
                isHidden: false
            })
        }
    }

    onSubmit(newNote) {
        console.log('i submitted somethjng: ', newNote)
        this.props.addNote(newNote)
    }

    render() {
        const {notes} = this.props
        console.log(notes)
        const {isHidden} = this.state
        return (
            <div>
                <h2>Create a New Note</h2>
                <Button
                    className='addNoteButton'
                    onClick={() => this.addNewNote()}>
                    <FiPlus/>
                </Button>
                <div className='newNoteContainer'>
                    {!isHidden && <Note onSubmit={(newNote) => this.onSubmit(newNote)}/>}
                </div>
                <div className='allNotesContainer'>
                    {notes.length > 0 &&
                    (notes.map((note, index) =>
                        <Note note={note} key={index}
                              onSubmit={(newNote) => this.onSubmit(newNote)}/>))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
})

const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch(addNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)