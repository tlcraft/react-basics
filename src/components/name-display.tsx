import { Component } from "react";
import React from 'react';

interface NameDisplayProps {
    name: string;
}

class NameDisplay extends Component<NameDisplayProps> {
    render() {
        const { name } = this.props;
        return <p>{name}</p>;
    }
}

export default NameDisplay;
