import './business-card.css'
import React from 'react';
import CardAbout from './business-card/card-about';
import CardFooter from './business-card/card-footer';
import CardInfo from './business-card/card-info';
import CardInterests from './business-card/card-interests';

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
