import './body.css';
import React, { useState } from 'react';
import increment from '../../services/counter';
import List from './list';
import NameDisplay from '../../components/name-display';

function Body() {
    const [count, setCount] = useState(0);
    const list = ["Released in 2013", "Maintained by Meta (Facebook)", "Created by Jordan Walke"];
  
    const nav = (
      <nav>
          <h2>website</h2>
          <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
    )
    return (
        <>      
            <button onClick={
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
            <List items={list}></List>
            <p>Nav Example: </p>
            { nav }
        </>
    )
}

export default Body;
