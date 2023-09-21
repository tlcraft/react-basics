import './business-card.css'
import React from 'react';
import CardAbout from './card-about';
import CardFooter from './card-footer';
import CardInfo from './card-info';
import CardInterests from './card-interests';

function BusinessCard() {
    return (
        <div className='business-card'>
            <CardInfo />
            <CardAbout />
            <CardInterests />
            <CardFooter />
        </div>
    );
}

export default BusinessCard;
