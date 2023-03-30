import React, { useState } from 'react';

function ScratchPad() {
    const [items, setItems] = useState(["One", "Two"]);
    const formattedItems = items.map(item => <li>{item}</li>);
    return (
        <>
            <h1>Scratch Pad for React Concepts</h1>
            <ul>
                {formattedItems}
            </ul>
        </>

    )
}

export default ScratchPad;
