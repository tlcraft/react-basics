import React, { useEffect, useState } from 'react';

export function WindowWidth() {
    const [show, setShow] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleToggle = () => {
        setShow(prevValue => !prevValue);
    }

    useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener("resize", watchWidth);
        
        return () => {
            window.removeEventListener("resize", watchWidth);
        };
    }, []);

    return (
        <>
            <button onClick={() => handleToggle()}>Toggle</button>
            {show && <div>Width: {windowWidth}</div>}
        </>
    )
}
