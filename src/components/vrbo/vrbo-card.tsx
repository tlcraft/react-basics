import React from 'react';

function VrboCard() {
    return (
        <section className="vrbo-card">
            <img className="card-photo" src="../../katie-zaferes.png" alt='Katie Zaferes'/>
            <div>Rating</div>
            <h1 className="card-description">Life lessons with Katie Zaferes</h1>
            <p className="card-price"><span className="price">From $136</span><span>/ person</span></p>
        </section>
    )
}

export default VrboCard;
