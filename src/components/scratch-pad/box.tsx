import './box.css';
import React from 'react';

export interface BoxProps {
    on: boolean;
}

export function Box(props: BoxProps) {
    return <div className={`square ${props.on ? "yellow" : "grey"}`}></div>
}
