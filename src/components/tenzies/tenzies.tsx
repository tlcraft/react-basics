import './tenzies.css'
import Die from './die';
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

export interface Dice {
    id: number;
    hold: boolean;
    value: number;
}

function Tenzies() {
    const randomRoll = () => Math.floor(Math.random() * 6) + 1;
    const [hasWon, setHasWon] = React.useState(false);
    const [rollCount, setRollCount] = React.useState(0);
    const [dice, setDice] = React.useState(
        [
            { id: 1, hold: false, value: randomRoll() },
            { id: 2, hold: false, value: randomRoll() },
            { id: 3, hold: false, value: randomRoll() },
            { id: 4, hold: false, value: randomRoll() },
            { id: 5, hold: false, value: randomRoll() },
            { id: 6, hold: false, value: randomRoll() },
            { id: 7, hold: false, value: randomRoll() },
            { id: 8, hold: false, value: randomRoll() },
            { id: 9, hold: false, value: randomRoll() },
            { id: 10, hold: false, value: randomRoll() }
        ] as Dice[]
    );

    const [target, setTarget] = React.useState(randomRoll());

    const dieElements = dice.map((die, index) => {
        const dieProps = {
            die,
            save: () => {
                setDice(currentDice => {
                    return currentDice.map(currentDie => {
                        if (currentDie.id === die.id) {
                            return { ...currentDie, hold: !currentDie.hold };
                        }

                        return currentDie;
                    })
                })
            },
        };

        return <Die key={index} {...dieProps} />
    });

    const roll = () => {
        const rolledDice = dice.map(die => {
            if (die.hold) {
                return die;
            }

            return {
                ...die,
                value: randomRoll(),
            };
        });
        
        setDice(rolledDice);
        setRollCount(currentCount => ++currentCount);
    };

    const reset = () => {
        setDice(currentDice => {
           return currentDice.map(die => { return { ...die, hold: false, value: randomRoll() } }); 
        });
        setTarget(randomRoll());
        setRollCount(0);
    };

    useEffect(() => {
        const hasWon = dice.every(die => die.value === target);
        setHasWon(hasWon);
    }, [dice]);

    return (
        <div className='board'>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dice'>
                {dieElements}
            </div>
            { !hasWon && <div><p className='message'>Roll a {target}!</p><button className="roll-btn" onClick={roll}>Roll</button></div> }
            { hasWon && <div><Confetti /><p className="message">You won!</p><button className="reset-btn" onClick={reset}>Reset</button></div> }
            <p className="roll-count">Number of rolls: { rollCount }</p>
        </div>
    )
}

export default Tenzies;
