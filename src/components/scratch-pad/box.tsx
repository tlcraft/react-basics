import './box.css';
import React from 'react';

export interface BoxProps {
    id: number;
    on: boolean;
    toggle: (id: number) => void;
}

export function Box(props: BoxProps) {
    return <div className={`square ${props.on ? "yellow" : "grey"}`} onClick={() => props.toggle(props.id)}></div>
}
