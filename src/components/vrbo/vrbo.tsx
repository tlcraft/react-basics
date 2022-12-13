import React from 'react';
import VrboCard from './vrbo-card';
import VrboHero from './vrbo-hero';
import VrboNav from './vrbo-nav';

function Vrbo() {
    return (
        <>
            <VrboNav />
            <VrboHero />
            <VrboCard />
        </>
    )
}

export default Vrbo;
