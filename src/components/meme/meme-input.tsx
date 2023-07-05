import './meme-input.css';
import React, { useState } from 'react';
import { memeResponse, MemeResponse, MemeImage } from './meme-data';

interface Meme {
    image: MemeImage;
    upperText: string;
    lowerText: string;
}

function MemeInput() {
    const [memeList, setMemeList] = useState(memeResponse);
    const [meme, setMeme] = useState({ image: getNewImage(memeList), upperText: '', lowerText: '' } as Meme);
    
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setMeme(previousState => ({ ...previousState, [name]: value }));
    }

    const handleNewMemeClick = () => {
        setMeme(previousState => { 
            return { 
                ...previousState, 
                image: getNewImage(memeList) 
            } 
        });
    }

    return (
        <>
            <div className="meme-input-form">
                <input type="text" id="upper-text" placeholder="Upper text" name="upperText" onChange={handleChange}/>
                <input type="text" id="lower-text" placeholder="Lower text" name="lowerText" onChange={handleChange}/>
                <button type="button" onClick={handleNewMemeClick} className="new-image-btn">Get a new image</button>
            </div>
            <div className="meme-container">
                <img className="meme-image" src={meme.image.url} alt={meme.image.name} />
                <p className="meme-text upper-text">{meme.upperText}</p>
                <p className="meme-text lower-text">{meme.lowerText}</p>
            </div>
        </>
    )
}

function getNewImage(memeList: MemeResponse): MemeImage {
    const random = Math.floor(Math.random() * memeList.data.memes.length);
    return memeList.data.memes[random];
}

export default MemeInput;
