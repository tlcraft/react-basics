import './notes.css';
import React from 'react';
import Editor from './editor';
import Split from "react-split"
import Sidebar from './sidebar';
import {nanoid} from "nanoid"
import { Note } from './note-interfaces';

interface NotesProps {
    darkMode: boolean;
}

function Notes(props: NotesProps) {
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes") || "[]") as Note[]);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    
    function updateNote(text: string) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }));
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0];
    }
    
    const editorProps = {
        currentNote: findCurrentNote(),
        updateNote: updateNote
    };          

    return (
        <div className={props.darkMode ? "dark-mode" : "" }>
            {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor { ...editorProps } /> 
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }       
        </div>
    )
}

export default Notes;
