import './sidebar.css';
import React from "react";
import { Note } from "./note-interfaces";

export interface SideBarProps {
    notes: any[];
    currentNote: Note;
    setCurrentNoteId: (id: string) => void;
    newNote: () => void;
}

export default function Sidebar(props: SideBarProps) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">Note {index + 1} - {note.body.split('\n')[0].substring(0, 10)}</h4>
                <button 
                    className="delete-btn"
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    );
}
