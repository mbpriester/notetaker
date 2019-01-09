import React, {Component} from 'react';
import './App.css';
import NoteList from "./components/NoteList";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        My Note List
                    </h1>
                    <NoteList />
                </header>
            </div>
        );
    }
}

export default App;
