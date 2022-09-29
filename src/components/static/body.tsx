import './body.css';
import React, { useState } from 'react';
import increment from '../../services/counter';
import UnorderedList from './unordered-list';
import NameDisplay from '../../components/name-display';

function Body() {
    const [count, setCount] = useState(0);
    const list = ["Released in 2013", "Maintained by Meta (Facebook)", "Created by Jordan Walke"];
  
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
            <p>{count}</p>
            <NameDisplay name="John Doe"></NameDisplay>
            <h2>Fun Facts About React</h2>
            <UnorderedList items={list}></UnorderedList>
        </main>
    )
}

export default Body;
