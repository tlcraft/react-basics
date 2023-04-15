import './static-page.css';
import React from 'react';

function StaticPage() {
    const helloElement = <h1>Hello world!</h1>;
    return (
        <>  
            <div className="App-banner">
                <p>
                    This is a little sample project for learning more about React.
                </p>
                <p> 
                    Check out <a className="App-link" href="https://scrimba.com/learn/learnreact">Bob Ziroll's free React tutorial</a> to learn more!
                </p>
                { helloElement }
                <a  className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                </a>
            </div>
            <h2>Reasons why I'm excited to learn React:</h2>
            <ol>
                <li>React is popular</li>
                <li>Components are great</li>
            </ol>
        </>
    )
}

export default StaticPage;
