import React from 'react';
import './StarWars.css';

export default function CharacterRender ({ char }) {
    return (
        <li className="character-card" key={char.name}>
            <h2>{char.name}</h2>
            <div className="text-container">
                <p>Born:{char.birth_year}</p>
                <p>Weight: {char.mass}</p>
                <p>Height: {char.height}</p>
            </div>
        </li>
    )
}