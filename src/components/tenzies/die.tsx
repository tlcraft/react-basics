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
                return 'die one';
            case 2:
                return 'die two';
            case 3:
                return 'die three';
            case 4:
                return 'die four';
            case 5: 
                return 'die five';
            case 6:
                return 'die six';
            default:
                throw new Error("Value not defined.");
        }
    };

    const dieStyle = getDieStyle();
    
    return (
        <div className={die.hold ? `hold ${dieStyle}` : `${dieStyle}`} onClick={() => props.save()}>{die.value}</div>
    )
}

export default Die;
