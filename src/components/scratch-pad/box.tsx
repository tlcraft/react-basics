import './box.css';
import React, { useState }  from 'react';

export interface BoxProps {
    on: boolean;
    toggle: () => void;
}

export function Box(props: BoxProps) {
    const [isOn, setIsOn] = useState(props.on);

    const toggleOn = () => setIsOn(prevValue => !prevValue);

    return <div className={`square ${isOn ? "yellow" : "grey"}`} onClick={props.toggle}></div>
}
