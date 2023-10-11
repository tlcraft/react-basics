import './die.css'
import React from 'react';

export interface DieProps {
    roll: () => number;
}

function Die(props: DieProps) {
    const [value, setValue] = React.useState(props.roll());

    const rollDie = () => {
        setValue(() => props.roll());
    }

    return (
        <div className='die' onClick={rollDie}>{value}</div>
    )
}

export default Die;
