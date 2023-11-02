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
    const random = () => Math.floor(Math.random() * 6) + 1;
    const [hasWon, setHasWon] = React.useState(false);
    const [dice, setDice] = React.useState(
        [
            { id: 1, hold: false, value: random() },
            { id: 2, hold: false, value: random() },
            { id: 3, hold: false, value: random() },
            { id: 4, hold: false, value: random() },
            { id: 5, hold: false, value: random() },
            { id: 6, hold: false, value: random() },
            { id: 7, hold: false, value: random() },
            { id: 8, hold: false, value: random() },
            { id: 9, hold: false, value: random() },
            { id: 10, hold: false, value: random() }
        ] as Dice[]
    );

    const [target, setTarget] = React.useState(random());

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
                id: die.id,
                value: random(),
                hold: die.hold
            };
        });
        
        setDice(rolledDice);
    };

    const reset = () => {
        setDice(currentDice => {
           return currentDice.map(die => { return { ...die, hold: false, value: random() } }); 
        });
        setTarget(random());
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
        </div>
    )
}

export default Tenzies;
