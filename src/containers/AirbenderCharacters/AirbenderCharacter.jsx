import React, { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList.jsx';

const AirbenderCharacters = () => {
  const [characters, setCharacters] = useState([]);

  //create a function that uses setCharacters to set characters into state after grabbing from API

  return (
    <>
      <CharacterList characters={characters} />
    </>
  );
};

export default AirbenderCharacters;
