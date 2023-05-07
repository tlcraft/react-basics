import './scratch-pad.css';
import React, { useState } from 'react';
import { Box } from './box';
import { boxes } from './boxes';

function ScratchPad() {
    const [squares, setSquares] = useState(boxes);
    const toggle = (boxId: number) => { 
        setSquares(currentSquares => {
            const index = currentSquares.findIndex(box => box.id === boxId);
            if (index >= 0) {
                const square = currentSquares[index];
                const priorItems = currentSquares.slice(0, index);
                const remainingItems = (index + 1) < currentSquares.length ? currentSquares.slice(index + 1, currentSquares.length) : [];
                const updatedList = [...priorItems, { ...square, on: !square.on }, ...remainingItems];
                return updatedList;
            }
            
            console.warn("Item not found!");
            return currentSquares;
        });
    };
    const squareElements = squares.map(square => <Box key={square.id} id={square.id} on={ square.on } toggle={toggle} />);

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
