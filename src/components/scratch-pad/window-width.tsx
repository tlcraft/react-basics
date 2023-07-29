import React, { useEffect, useState } from 'react';

export function WindowWidth() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener("resize", watchWidth);
        
        return () => {
            window.removeEventListener("resize", watchWidth);
        };
    }, []);

    return <div>Width: {windowWidth}</div>;
}
