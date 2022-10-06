import './header.css';
import logo from '../../logo.svg';
import React from 'react';

function Header() {
    const helloElement = <h1>Hello world!</h1>;
    const nav = (
        <nav className='main-nav'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React Facts</h3>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )

    return (
        <>
            { nav }
            <header className="App-header">
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
        </>
    )
}

export default Header;
