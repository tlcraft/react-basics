import logo from './logo.svg';
import './App.css';
import increment from './services/counter';
import React, { useState } from 'react';
import NameDisplay from './components/name-display';
import List from './components/static/list';
import StaticPage from './static-page';
import Footer from './components/static/footer';

function App() {
  const helloElement = <h1>Hello world!</h1>;
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
      <header className="App-header">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { helloElement }
        <button onClick={
            () => {
              const count = increment(); 
              setCount(count);
            }
          }>
          Increment Count
        </button>
        <p>{count}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
