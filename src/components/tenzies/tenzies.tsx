import './tenzies.css'
import Die from './die';
import React from 'react';

export interface Dice {
    id: number;
    hold: boolean;
    value: number;
}

function Tenzies() {
    const random = () => Math.floor(Math.random() * 6) + 1;
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
            save: (id: number) => {
                setDice(dice => {
                    return dice.map(die => {
                        if (die.id === id) {
                            return { ...die, hold: !die.hold };
                        }

                        return die;
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

    return (
        <div className='board'>
            {dieElements}
            <p className='target'>Roll a {target}!</p>
            <button className="roll" onClick={roll}>Roll</button>
        </div>
    )
}

export default Tenzies;
