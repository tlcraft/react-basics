import './scratch-pad.css';
import React, { useState } from 'react';
import { Box, BoxProps } from './box';
import boxes from './boxes';

function ScratchPad() {
    const [squares, setSquares] = useState(boxes);
    const toggle = () => console.log("Clicked!");
    const squareElements = squares.map(square => <Box key={square.id} on={ square.on } toggle={toggle} />);

    const [items, setItems] = useState([] as number[]);
    const formattedItems = items.map((item, index) => <li key={index}>{item}</li>);
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
            <button className="counter-button" onClick={addToList} type="button" disabled={isAddDisabled()}>Add To List</button>
            <button className="counter-button" onClick={removeFromList} type="button" disabled={isRemoveDisabled()}>Remove From List</button>
            <ul className='item-list'>
                {formattedItems}
            </ul>
            {squareElements}
        </>

    )
}

export default ScratchPad;
