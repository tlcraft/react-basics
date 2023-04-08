import './scratch-pad.css';
import React, { useState } from 'react';

function ScratchPad() {
    const [items, setItems] = useState([] as number[]);
    const formattedItems = items.map(item => <li>{item}</li>);
    const addToList = () => {
        setItems(previousList => [...previousList, previousList.length + 1]);
    };

    const removeFromList = () => {
        setItems(previousList => {
            if (previousList.length) {
                return previousList.slice(0, previousList.length - 1);
            }

            return [];
        });
    };

    const isAddDisabled = () => items.length >= 10;
    const isRemoveDisabled = () => items.length === 0;

    return (
        <>
            <h1>Scratch Pad for React Concepts</h1>
            <button onClick={addToList} type="button" disabled={isAddDisabled()}>Add To List</button>
            <button onClick={removeFromList} type="button" disabled={isRemoveDisabled()}>Remove From List</button>
            <ul className='item-list'>
                {formattedItems}
            </ul>
        </>

    )
}

export default ScratchPad;
