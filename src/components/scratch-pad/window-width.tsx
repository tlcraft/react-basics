import React, { useState } from 'react';

export function WindowWidth() {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(prevValue => !prevValue);
    }

    return (
        <>
            <button onClick={() => handleToggle()}>Toggle</button>
            {show && <div>Width: {window.innerWidth}</div>}
        </>
    )
}
