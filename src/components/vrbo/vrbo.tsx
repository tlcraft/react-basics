import React from 'react';
import VrboCard from './vrbo-card';
import VrboHero from './vrbo-hero';
import VrboNav from './vrbo-nav';
import { CardProps } from './vrbo-card-props';

function Vrbo() {
    const cardProps: CardProps = {
        imageSource: "../../katie-zaferes.png",
        alternateText: "Katie Zaferes",
        rating: "5.0",
        ratingCount: 6,
        country: "USA",
        title: "Life lessons with Katie Zaferes",
        price: "$136"
    };

    return (
        <>
            <VrboNav />
            <VrboHero />
            <VrboCard {...cardProps } />
        </>
    )
}

export default Vrbo;
