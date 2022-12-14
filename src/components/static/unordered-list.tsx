import './unordered-list.css';
import React from 'react';

interface ListProps {
    items: string[];
}

function UnorderedList(props: ListProps) {
    const { items } = props;
    const listItems = items.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{listItems}</ul>;
}

export default UnorderedList;
