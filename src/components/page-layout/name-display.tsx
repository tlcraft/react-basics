import React from 'react';

interface NameDisplayProps {
    name: string;
}

function NameDisplay(props: NameDisplayProps) {
    const { name } = props;
    return <p>{name}</p>;
}

export default NameDisplay;
