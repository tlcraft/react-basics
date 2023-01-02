import './vrbo-card.css';
import React from 'react';
import { CardProps } from './vrbo-card-props';

function VrboCard(props: CardProps) {
    return (
        <div className="vrbo-card">
            <img className="card-photo" src={props.imageSource} alt={props.alternateText} />
            <div className="card-stats">
                <img className="card-star" src="../../star.png" alt="star icon" />
                <span>{props.rating}</span>
                <span className="gray">({props.ratingCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span><span> / person</span></p>
        </div>
    )
}

export default VrboCard;
