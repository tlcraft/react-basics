import React from 'react';

interface NotesProps {
    darkMode: boolean;
}

function Notes(props: NotesProps) {
    return (
        <div className={props.darkMode ? "dark-mode" : "" }> 
            <p>Notes</p>        
        </div>
    )
}

export default Notes;
