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

interface Meme {
    image: MemeImage;
    upperText: string;
    lowerText: string;
}

function MemeInput() {
    const [meme, setMeme] = useState({ image: getNewImage(), upperText: '', lowerText: '' } as Meme);

    return (
        <>
            <div className="meme-input-form">
                <input type="text" id="upper-text" placeholder="Upper text" name="upper-text" onChange={(e) => {setMeme(previousState => { return { ...previousState, upperText: e.target.value } } )}}/>
                <input type="text" id="lower-text" placeholder="Lower text" name="lower-text" onChange={(e) => {setMeme(previousState => { return { ...previousState, lowerText: e.target.value } } )}}/>
                <button type="button" onClick={() => setMeme(previousState => { return { ...previousState, image: getNewImage() } } ) } className="new-image-btn">Get a new image</button>
            </div>
            <div className="meme-container">
                <img className="meme-image" src={meme.image.url} alt={meme.image.name} />
                <p className="meme-text upper-text">{meme.upperText}</p>
                <p className="meme-text lower-text">{meme.lowerText}</p>
            </div>
        </>
    )
}

function getNewImage(): MemeImage {
    const random = Math.floor(Math.random() * memeData.data.memes.length);
    return memeData.data.memes[random];
}

export default MemeInput;
