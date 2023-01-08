import './vrbo-hero.css';
import React from 'react';

function VrboHero() {
    return (
        <section className="vrbo-hero">
            <img className="hero-photo" src="../../hero.png" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities all without leaving home.</p>
        </section>
    )
}

export default VrboHero;
