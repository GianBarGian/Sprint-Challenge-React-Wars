import React from 'react';
import CharacterRender from './CharacterRender';

export default function CharacterList(props) {
    return (
        <ul className="character-list">
            {
                props.starwarsChars.map(char => (
                    <CharacterRender char={char}/>
                ))
            }
        </ul>
    )
} 