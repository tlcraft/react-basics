import './header.css';
import logo from '../../logo.svg';
import React from 'react';

function Header() {
    const helloElement = <h1>Hello world!</h1>;
    return (
        <header className="App-header">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
            </nav>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            { helloElement }
            <a  className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
            </a>
        </header>
    )
}

export default Header;
