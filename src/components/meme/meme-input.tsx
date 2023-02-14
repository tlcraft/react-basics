import './meme-input.css';
import React from 'react';
import memeData from './meme-data';

function MemeInput() {
    return (
        <div className="meme-input-form">
            <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" />
            <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" />
            <button type="button" onClick={getNewImage}>Get a new image</button>
            <img className="meme-image" src={getNewImage()} alt="A random meme image" />
        </div>
    )
}

function getNewImage(): string {
    const random = Math.floor(Math.random() * memeData.data.memes.length);
    return memeData.data.memes[random].url;
}

export default MemeInput;
