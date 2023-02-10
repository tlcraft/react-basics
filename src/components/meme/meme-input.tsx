import './meme-input.css';
import React from 'react';

function MemeInput() {
    return (
        <div className="meme-input-form">
            <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" />
            <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" />
            <button type="button" onClick={getNewImage}>Get a new image</button>
        </div>
    )
}

function getNewImage(): void {
    console.log("Clicked button.");
}

export default MemeInput;
