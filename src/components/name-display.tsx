import { Component } from "react";
import React from 'react';

class NameDisplay extends Component<any> {
    render() {
        const { name } = this.props;
        return <p>{name}</p>;
    }
}

export default NameDisplay;
