import React from 'react';
import './StarWars.css';

export default function ButtonList({updateStarwarsChar}) {
    return (
        <div className="buttons">
            <button onClick={() => updateStarwarsChar("previous")}>Previous</button>
            <button onClick={() => updateStarwarsChar("next")}>Next</button>
        </div>
    )
}