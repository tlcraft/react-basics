import './vrbo-card.css';
import React from 'react';

function VrboCard() {
    return (
        <div className="vrbo-card">
            <img className="card-photo" src="../../katie-zaferes.png" alt='Katie Zaferes'/>
            <div className="card-stats">
                <img className="card-star" src="../../star.png" alt="star icon" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="card-description">Life lessons with Katie Zaferes</p>
            <p className="card-price"><span className="price">From $136</span><span>/ person</span></p>
        </div>
    )
}

export default VrboCard;
