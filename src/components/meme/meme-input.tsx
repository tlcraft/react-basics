import './meme-input.css';
import React, { useState } from 'react';
import memeData from './meme-data';

interface MemeImage {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

function MemeInput() {
    const [image, setImage] = useState(getNewImage());
    const [upperText, setUpperText] = useState('');
    const [lowerText, setLowerText] = useState('');

    return (
        <>
            <div className="meme-input-form">
                <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" onChange={(e) => {setUpperText(e.target.value)}}/>
                <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" onChange={(e) => {setLowerText(e.target.value)}}/>
                <button type="button" onClick={() => setImage(getNewImage)} className="new-image-btn">Get a new image</button>
            </div>
            <div className="meme-container">
                <img className="meme-image" src={image.url} alt={image.name} />
                <p className="meme-text upper-text">{upperText}</p>
                <p className="meme-text lower-text">{lowerText}</p>
            </div>
        </>
    )
}

function getNewImage(): MemeImage {
    const random = Math.floor(Math.random() * memeData.data.memes.length);
    return memeData.data.memes[random];
}

export default MemeInput;
