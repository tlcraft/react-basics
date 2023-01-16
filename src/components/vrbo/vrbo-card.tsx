import './vrbo-card.css';
import React from 'react';
import { CardProps } from './vrbo-card-props';

function VrboCard(props: CardProps) {
    const badgeText = getBadgeText(props);
    return (
        <div className="vrbo-card">
            { badgeText && <div className="badge">{badgeText}</div> }
            <img className="card-photo" src={props.imageSource} alt={props.alternateText} />
            <div className="card-stats">
                <img className="card-star" src="../../star.png" alt="star icon" />
                <span>{props.rating}</span>
                <span className="gray">({props.ratingCount}) · </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span><span> / person</span></p>
        </div>
    )
}

function getBadgeText(props: CardProps): string {
    if (props.openSpots === 0) {
        return "SOLD OUT";
    } else if (props.location === "Online") {
        return "ONLINE";
    }

    return "";
}

export default VrboCard;
