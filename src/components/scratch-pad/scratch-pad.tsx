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

    const [formData, setFormData] = useState(
        { 
            firstName: "", 
            lastName: "", 
            email: "", 
            comment: "", 
            isFriendly: true, 
            employment: "", 
            favColor: "" 
        }
    );
    const handleChange = (event: any) => { 
        const {name, value, type, checked } = event.target;
        setFormData(prevName => {
            return { ...prevName, [name]: type === "checkbox" ? checked : value };
        });
    }

    const handleSubmit = (event: any) => { 
        event.preventDefault(); 
        console.log("Form Data: ", formData);
    };

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
            <form className="name-form" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
                <input type="text" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                <textarea name="comment" placeholder="Comments..." onChange={handleChange} value={formData.comment}></textarea>
                <input type="checkbox" name="isFriendly" checked={formData.isFriendly} onChange={handleChange} />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleChange}
                        checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={handleChange}
                        checked={formData.employment === "part-time"}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={handleChange}
                        checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Select --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
            <div>
                <h1>Details</h1>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Comments: {formData.comment}</p>
                <p>Is Friendly: {formData.isFriendly.toString()}</p>
                <p>Employment Status: {formData.employment}</p>
                <p>Favorite Color: {formData.favColor}</p>
            </div>
        </>
    )
}

export default ScratchPad;
