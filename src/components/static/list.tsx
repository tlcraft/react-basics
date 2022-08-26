import React from 'react';

interface ListProps {
    items: string[];
}

function List(props: ListProps) {
    const { items } = props;
    const listItems = items.map((item) => <li>{item}</li>);
    return <ul>{listItems}</ul>;
}

export default List;
