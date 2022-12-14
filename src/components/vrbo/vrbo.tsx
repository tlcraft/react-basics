import './vrbo.css';
import React from 'react';
import VrboCard from './vrbo-card';
import VrboHero from './vrbo-hero';
import VrboNav from './vrbo-nav';
import { CardProps } from './vrbo-card-props';

function Vrbo() {
    const katieCardProps: CardProps = {
        imageSource: "../../katie-zaferes.png",
        alternateText: "Katie Zaferes",
        rating: "5.0",
        ratingCount: 6,
        country: "USA",
        title: "Life lessons with Katie Zaferes",
        price: "$136"
    };

    const weddingCardProps: CardProps = {
        imageSource: "../../wedding-photography.png",
        alternateText: "Woman in wedding gown",
        rating: "5.0",
        ratingCount: 30,
        country: "USA",
        title: "Learn wedding photography",
        price: "$125"
    };

    const mountainBikingCardProps: CardProps = {
        imageSource: "../../mountain-biking.png",
        alternateText: "A mountain bike",
        rating: "4.8",
        ratingCount: 2,
        country: "USA",
        title: "Group Mountain Biking",
        price: "$50"
    };

    const cardProps = [katieCardProps, weddingCardProps, mountainBikingCardProps];
    const cards = cardProps.map(props => <VrboCard {...props} />);

    return (
        <>
            <VrboNav />
            <VrboHero />
            <section className="cards">
                { cards }
            </section>
        </>
    )
}

export default Vrbo;
