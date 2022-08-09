import logo from './logo.svg';
import './App.css';
import increment from './services/counter';
import React from 'react';

function App() {
  const helloElement = <h1>Hello world!</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { helloElement }
        <button onClick={incrementCount}>
          Increment Count
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function incrementCount() {
  const count = increment();
  console.log("Count: " + count);
}

export default App;
