import './scratch-pad.css';
import React, { useEffect, useState } from 'react';
import { Box } from './box';
import { boxes } from './boxes';
import { StarWarsData } from './star-wars-data';

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

    const [signUpFormData, setSignUpFormData] = useState(
        { 
            email: "", 
            password: "", 
            confirmedPassword: "",
            okayToEmail: true, 
        }
    );

    const handleSignUpChange = (event: any) => { 
        const {name, value, type, checked } = event.target;
        setSignUpFormData(prevName => {
            return { ...prevName, [name]: type === "checkbox" ? checked : value };
        });
    }

    const handleSignUpSubmit = (event: any) => { 
        event.preventDefault(); 
        console.log("Sign Up Form Data: ", signUpFormData);
        let message;
        if (signUpFormData.password === signUpFormData.confirmedPassword) {
            message = "Successfully signed up.";
        } else {
            alert("Passwords do not match");
            return;
        }

        if (signUpFormData.okayToEmail) {
            message += "\nThanks for signing up for the newsletter!";
        }

        alert(message);
    };

    // useEffect runs after the page is painted
    // the second parameter lists dependencies to watch in order to rerun useEffect
    useEffect(() => {
        console.log("Use effect example!");
    }, []);

    const [starWarsFormData, setStarWarsFormData] = useState({ characterId: 1 });
    const [starWarsData, setStarWarsData] = useState({} as StarWarsData);
    const [loadingStarWarsData, setLoadingStarWarsData] = useState(false);
    useEffect(() => {
        setLoadingStarWarsData(true);
        fetch(`https://swapi.dev/api/people/${starWarsFormData.characterId}`)
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(data => setStarWarsData(data))
                    .then(() => setLoadingStarWarsData(false));
                }

                return Promise.reject(res);
            })
            .catch(error => console.log(error));
    }, [starWarsFormData.characterId]);

    const handleStarWarsFormChange = (event: any) => {
        const { name, value } = event.target;
        setStarWarsFormData(prevData => {
            return { ...prevData, [name]: value };
        });
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
            <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    value={signUpFormData.email}
                    onChange={handleSignUpChange}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={signUpFormData.password}
                    onChange={handleSignUpChange}
                />
                <input 
                    type="password" 
                    name="confirmedPassword"
                    placeholder="Confirm password"
                    value={signUpFormData.confirmedPassword}
                    onChange={handleSignUpChange}
                />                
                <div>
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        checked={signUpFormData.okayToEmail}
                        onChange={handleSignUpChange}                      
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button>Sign up</button>
            </form>
            <h2>Star Wars Data</h2>
            <input 
                type="number" 
                name="characterId"
                placeholder="Id"
                value={starWarsFormData.characterId}
                onChange={handleStarWarsFormChange}
            /> 
            { loadingStarWarsData && <p>Loading...</p> }
            { !loadingStarWarsData && <p>Name: {starWarsData.name}</p> }
            { !loadingStarWarsData && <p>Gender: {starWarsData.gender}</p> }
            { !loadingStarWarsData && <p>Birth Year: {starWarsData.birth_year}</p> }
            { !loadingStarWarsData && <p>Eye Color: {starWarsData.eye_color}</p> }
            { !loadingStarWarsData && <p>Hair Color: {starWarsData.hair_color}</p> }
            { !loadingStarWarsData && <p>Height: {starWarsData.height}</p> }
            { !loadingStarWarsData && <p>Mass: {starWarsData.mass}</p> }
        </>
    )
}

export default ScratchPad;
