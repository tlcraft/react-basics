import './body.css';
import React, { useState, useEffect } from 'react';
import increment from '../../services/counter';
import UnorderedList from './unordered-list';
import NameDisplay from './name-display';

function Body() {
    const [count, setCount] = useState(0);
    const list = ["Released in 2013", "Maintained by Meta (Facebook)", "Created by Jordan Walke"];

    const [display, setDisplay] = useState(false);
    
    // Runs once when component is loaded
    useEffect(() => {
        console.log("App Loaded"); // Hit API to load data for example
    },[]);

    // Runs everytime count changes
    useEffect(() => {
        console.log("Count Changed"); // Handle changes
        setDisplay(count > 5);
    },[count]);

    return (
        <main>      
            <button className="counterButton" onClick={
                    () => {
                    const count = increment(); 
                    setCount(count);
                    }
                }>
                Increment Count
            </button>
            { display && <p>Display Paragraph</p> }
            <p>{count}</p>
            <NameDisplay name="John Doe"></NameDisplay>
            <h2>Fun Facts About React</h2>
            <UnorderedList items={list}></UnorderedList>
        </main>
    )
}

export default Body;
