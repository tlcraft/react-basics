import './header.css';
import logo from '../../logo.svg';
import React from 'react';

interface HeaderProps {
    navigateToStaticPage: () => void;
    navigateToBody: () => void;
    navigateToCard: () => void;
}

function Header(props: HeaderProps) {
    const helloElement = <h1>Hello world!</h1>;
    const nav = (
        <nav className='main-nav'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React Facts</h3>
            <ul className="nav-items">
                <li onClick={props.navigateToStaticPage}>Static Page</li>
                <li onClick={props.navigateToBody}>Body</li>
                <li onClick={props.navigateToCard}>Business Card</li>
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
