import './die.css'
import React from 'react';
import { Dice } from './tenzies';

export interface DieProps {
    die: Dice;
    save: () => void;
}

function Die(props: DieProps) {
    const { die } = props;
    return (
        <div className={die.hold ? 'hold die' : 'die'} onClick={() => props.save()}>{die.value}</div>
    )
}

export default Die;
