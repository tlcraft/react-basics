import './scratch-pad.css';
import React, { useState } from 'react';
import { Box } from './box';
import { boxes } from './boxes';

function ScratchPad() {
    const [isShown, setIsShown] = useState(false);

    const [squares, setSquares] = useState(boxes);
    const toggleSquareOn = (squareId: number) => { 
        setSquares(currentSquares => {
            return currentSquares.map(square => {
                return square.id === squareId ? { ...square, on: !square.on } : square;
            });
        });
    };
    const squareElements = squares.map(square => <Box key={square.id} on={square.on} toggleOn={() => toggleSquareOn(square.id)} />);

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
            <div>
                <button onClick={() => setIsShown(prevValue => { console.log("Toggle!", prevValue); return !prevValue})} type="button">Toggle Display</button>
                {isShown && <p>Placeholder Section</p>}
            </div>
        </>

    )
}

export default ScratchPad;
