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

    const itemNoun = formattedItems.length == 1 ? "item" : "items";

    const [name, setName] = useState("");
    const handleChange = (event: any) => { 
        console.log("Event: ", event);
        const newName = event.target.value;
        setName(newName);
        console.log("New Name: ", newName);
    }

    return (
        <>
            <h1>Scratch Pad for React Concepts</h1>
            <button className="counter-button" onClick={addToList} type="button" disabled={isAddDisabled()}>Add To List</button>
            <button className="counter-button" onClick={removeFromList} type="button" disabled={isRemoveDisabled()}>Remove From List</button>
            <ul className='item-list'>
                {formattedItems}
            </ul>
            {
                formattedItems.length > 0
                ? <p>You have {formattedItems.length} {itemNoun} in your list.</p>
                : <p>You have no items in your list.</p>
            }
            <div className="squares-container">
                {squareElements}
            </div>
            <div>
                <button onClick={() => setIsShown(prevShown => { console.log("Toggle!", prevShown); return !prevShown})} type="button" className="toggle-button">Toggle Display</button>
                {isShown && <p>Placeholder Section</p>}
            </div>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange} />
                <p>{name}</p>
            </form>
        </>
    )
}

export default ScratchPad;
