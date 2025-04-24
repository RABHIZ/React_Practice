import { useState } from "react"
import imgreact from "../assets/react.svg"
import ReactCardFlip from 'react-card-flip'

const Card =({name="Guest", photo = imgreact}) => {
    const [isFlipped, setIsFlipped] = useState(false);  
    function flipcard() {
        setIsFlipped(!isFlipped);
    }
    return(
        <div className="cards-wrapper">
            <div className="card-container">
        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <div className='card' onClick={flipcard}>
            <img className='card-img placeholder' src={photo} alt="There is no image" />
        </div>
        <div className='card' onClick={flipcard}>
            <h2 className='card-title'>{name}</h2>
            <p className='card-text'>I am computer science engineer, work on directional</p>
        </div>
        </ReactCardFlip>
            </div>
        </div>
    )
};

export default Card