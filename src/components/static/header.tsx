import './header.css';
import logo from '../../logo.svg';
import React from 'react';

interface HeaderProps {
    navigateToStaticPage: () => void;
    navigateToBody: () => void;
    navigateToCard: () => void;
    navigateToVrbo: () => void;
    navigateToMeme: () => void;
    navigateToScratchPad: () => void;
    toggleDarkMode: () => void;
    darkMode: boolean;
}

function Header(props: HeaderProps) {
    return (
        <nav className={props.darkMode ? "dark main-nav": "main-nav"}>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React Sample App</h3>
            <ul className="nav-items">
                <li onClick={props.navigateToStaticPage}>Static Page</li>
                <li onClick={props.navigateToBody}>Body</li>
                <li onClick={props.navigateToCard}>Business Card</li>
                <li onClick={props.navigateToVrbo}>VRBO</li>
                <li onClick={props.navigateToMeme}>Meme</li>
                <li onClick={props.navigateToScratchPad}>Scratch Pad</li>
            </ul>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Header;
