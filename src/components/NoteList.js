import React from 'react'
import Note from "./Note";
import {Button} from "semantic-ui-react";
import {FiPlus} from "react-icons/fi";

export default class NoteList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            noteIndex: 0,
            isHidden: true
        }
    }

    componentDidUpdate(){
        console.log("isHidden has updated: "+this.state.isHidden)
    }

    addNewNote() {
        if(this.state.isHidden === true){
            this.setState({
                isHidden: false
            })
        }

        // let temp = ''
        //
        // this.setState(prevState => ({
        //     notes: [...prevState.notes, temp],
        //     noteIndex: prevState.noteIndex + 1
        // }))
    }

    render() {
        const {
            notes,
            isHidden,
        } =this.state
        return (
            <div>
                <h2>Create a New Note</h2>
                <Button
                    className='addNoteButton'
                    onClick={() => this.addNewNote()}>
                    <FiPlus/>
                </Button>
                <div className='noteListContainer'>
                    {!isHidden && <Note />}
                    {notes.length > 0 && <Note />}
                </div>
            </div>
        )
    }
}