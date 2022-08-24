import logo from './logo.svg';
import './App.css';
import increment from './services/counter';
import React, { useState } from 'react';
import NameDisplay from './components/name-display';
import List from './components/static/list';

function App() {
  const helloElement = <h1>Hello world!</h1>;
  const [count, setCount] = useState(0);
  const list = ["One", "Two"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <List items={list}></List>
    </div>
  );
}

export default App;
