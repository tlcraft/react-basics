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
            { id: 2, hold: false, value: random() }
        ] as Dice[]
    );

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
            <button className="roll" onClick={roll}>Roll</button>
        </div>
    )
}

export default Tenzies;
