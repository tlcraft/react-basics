import './tenzies.css'
import Die from './die';
import React from 'react';

function Tenzies() {
    const random = () => Math.floor(Math.random() * 6) + 1;

    const dieProps = {
        roll: random,
    };

    return (
        <div className='board'>
            <Die {...dieProps} />
        </div>
    )
}

export default Tenzies;
