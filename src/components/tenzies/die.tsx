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

    const getDieDots = () => {
        switch(props.die.value) {
            case 1:
                return <span className="dot"></span>;
            case 2:
                return (
                    <>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </>
                );
            case 3:
                return (
                    <>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </>
                );
            case 5: 
                return (
                    <>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        
                        <div className="column">
                            <span className="dot"></span>
                        </div>
                        
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </>
                );
            case 6:
                return (
                    <>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </>
                );
            default:
                throw new Error("Value not defined.");
        }
    };

    const dieStyle = getDieStyle();
    const dots = getDieDots();

    return (
        <div className={die.hold ? `hold ${dieStyle}` : `${dieStyle}`} onClick={() => props.save()}>{dots}</div>
    )
}

export default Die;
