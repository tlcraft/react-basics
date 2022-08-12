import { Component } from "react";

class NameDisplay extends Component {
    render() {
        const { name } = this.props;
        return <p>{name}</p>;
    }
}
