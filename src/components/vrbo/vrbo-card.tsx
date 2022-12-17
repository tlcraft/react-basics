import './vrbo-card.css';
import React from 'react';

function VrboCard() {
    return (
        <div className="vrbo-card">
            <img className="card-photo" src="../../katie-zaferes.png" alt='Katie Zaferes'/>
            <div className="card-stats">
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p className="card-description">Life lessons with Katie Zaferes</p>
            <p className="card-price"><span className="price">From $136</span><span>/ person</span></p>
        </div>
    )
}

export default VrboCard;
