import './box.css';
import React, { useState }  from 'react';

export interface BoxProps {
    on: boolean;
}

export function Box(props: BoxProps) {
    const [isOn, setIsOn] = useState(props.on);
    return <div className={`square ${isOn ? "yellow" : "grey"}`} onClick={() => setIsOn(prevValue => !prevValue)}></div>
}
