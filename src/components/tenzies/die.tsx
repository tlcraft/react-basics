import './die.css'
import React from 'react';
import { Dice } from './tenzies';

export interface DieProps {
    die: Dice;
    save: () => void;
}

function Die(props: DieProps) {
    const { die } = props;

    const getDieStyle = () => {
        switch(props.die.value) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5: 
                return 'five';
            case 6:
                return 'six';
            default:
                throw new Error("Value not defined.");
        }
    };

    return (
        <div className={die.hold ? `hold die ${getDieStyle()}` : `die ${getDieStyle()}`} onClick={() => props.save()}>{die.value}</div>
    )
}

export default Die;
