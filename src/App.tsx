import './App.css';
import React, { useState } from 'react';
import increment from './services/counter';
import Footer from './components/static/footer';
import Header from './components/static/header';
import List from './components/static/list';
import NameDisplay from './components/name-display';
import StaticPage from './static-page';

function App() {
  const [count, setCount] = useState(0);
  const list = ["Released in 2013", "Maintained by Meta (Facebook)", "Created by Jordan Walke"];

  const nav = (
    <nav>
        <h1>website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
  
  return (
    <div className="App">
      <Header />
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
      <StaticPage />
      <Footer />
    </div>
  );
}

export default App;
