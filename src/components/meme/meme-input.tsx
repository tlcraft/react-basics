import React from 'react';

function MemeInput() {
    return (
        <div className="meme-input">
            <input type="text" id="upper-text" name="upper-text" />
            <input type="text" id="lower-text" name="lower-text" />
            <button type="button">Get a new image</button>
        </div>
    )
}

export default MemeInput;
