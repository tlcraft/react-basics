import './static-page.css';
import React from 'react';

interface StaticPageProps {
    darkMode: boolean;
}

function StaticPage(props: StaticPageProps) {
    const helloElement = <h1>Hello world!</h1>;
    return (
        <div className={props.darkMode ? "dark-mode" : "" }>  
            <div className="App-banner">
                { helloElement }
                <p>
                    This is a little sample project for learning more about React.
                </p>
                <p> 
                    Check out&nbsp;
                    <a className="App-link" 
                        href="https://scrimba.com/learn/learnreact" 
                        target="_blank"
                        rel="external noopener noreferrer">Bob Ziroll's free React tutorial</a>&nbsp; 
                    to learn more!
                </p>
                <a  className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="external noopener noreferrer"
                    >
                    Learn React
                </a>
            </div>
            <h2>Reasons why I'm excited to learn React:</h2>
            <ol>
                <li>React is popular</li>
                <li>Components are great</li>
            </ol>
        </div>
    )
}

export default StaticPage;
