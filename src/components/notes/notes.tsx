import './notes.css';
import React, { useEffect } from 'react';
import Editor from './editor';
import Split from "react-split"
import Sidebar from './sidebar';
import {nanoid} from "nanoid"
import { Note } from './note-interfaces';

interface NotesProps {
    darkMode: boolean;
}

function Notes(props: NotesProps) {
    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes") || "[]") as Note[]);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );
    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }
    
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function updateNote(text: string) {
        const noteList: Note[] = [];
        notes.forEach(oldNote => {
            if(oldNote.id === currentNoteId) {
                noteList.unshift({ ...oldNote, body: text });
            } else {
                noteList.push(oldNote);
            }
        });
        setNotes(() => noteList);
    }
    
    const editorProps = {
        currentNote: currentNote,
        updateNote: updateNote
    };
    
    const deleteNote = (event: any, noteId: string) => {
        event.stopPropagation();
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));  
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
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
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
