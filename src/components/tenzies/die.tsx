import './die.css'
import React from 'react';

export interface DieProps {
    value: number;
    id: number;
    save: (id: number) => void;
}

function Die(props: DieProps) {
    return (
        <div className='die' onClick={() => props.save(props.id)}>{props.value}</div>
    )
}

export default Die;
