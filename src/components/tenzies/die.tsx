import './die.css'
import React from 'react';
import { Dice } from './tenzies';

export interface DieProps {
    die: Dice;
    save: (id: number) => void;
}

function Die(props: DieProps) {
    const { die } = props;
    return (
        <div className={die.hold ? 'hold die' : 'die'} onClick={() => props.save(die.id)}>{die.value}</div>
    )
}

export default Die;
