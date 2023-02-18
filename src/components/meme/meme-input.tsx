import './meme-input.css';
import React, { useState } from 'react';
import memeData from './meme-data';

function MemeInput() {
    const [imageUrl, setImageUrl] = useState(getNewImageUrl());
    const [upperText, setUpperText] = useState('');
    const [lowerText, setLowerText] = useState('');
    
    return (
        <>
            <div className="meme-input-form">
                <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" onChange={(e) => {setUpperText(e.target.value)}}/>
                <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" onChange={(e) => {setLowerText(e.target.value)}}/>
                <button type="button" onClick={() => setImageUrl(getNewImageUrl)} className="new-image-btn">Get a new image</button>
            </div>
            <img className="meme-image" src={imageUrl} alt="A random meme image" />
        </>
    )
}

function getNewImageUrl(): string {
    const random = Math.floor(Math.random() * memeData.data.memes.length);
    return memeData.data.memes[random].url;
}

export default MemeInput;
