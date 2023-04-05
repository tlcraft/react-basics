import './scratch-pad.css';
import React, { useState } from 'react';

function ScratchPad() {
    const [items, setItems] = useState([] as number[]);
    const formattedItems = items.map(item => <li>{item}</li>);
    const addToList = () => {
        setItems(previousList => [...previousList, previousList.length + 1]);
    };

    const isDisabled = () => { return items.length >= 10; }

    return (
        <>
            <h1>Scratch Pad for React Concepts</h1>
            <button onClick={addToList} type="button" disabled={isDisabled()}>Add To List</button>
            <ul className='item-list'>
                {formattedItems}
            </ul>
        </>

    )
}

export default ScratchPad;
