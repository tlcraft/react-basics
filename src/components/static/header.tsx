import './header.css';
import logo from '../../logo.svg';
import React from 'react';

interface HeaderProps {
    navigateToStaticPage: () => void;
    navigateToBody: () => void;
    navigateToCard: () => void;
    navigateToVrbo: () => void;
}

function Header(props: HeaderProps) {
    return (
        <nav className='main-nav'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React Sample App</h3>
            <ul className="nav-items">
                <li onClick={props.navigateToStaticPage}>Static Page</li>
                <li onClick={props.navigateToBody}>Body</li>
                <li onClick={props.navigateToCard}>Business Card</li>
                <li onClick={props.navigateToVrbo}>VRBO</li>
            </ul>
        </nav>
    )
}

export default Header;
