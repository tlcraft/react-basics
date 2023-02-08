import './meme-input.css';
import React from 'react';

function MemeInput() {
    return (
        <form className="meme-input-form">
            <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" />
            <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" />
            <button type="button">Get a new image</button>
        </form>
    )
}

export default MemeInput;
