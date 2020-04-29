import React, { useState } from 'react';
import Characters from '../../components/Characters/Characters.jsx';
import { fetchCharacters } from '../../services/airbender-api.js';

const AirbenderCharacters = () => {
  const [characters, setCharacters] = useState([]);

  //create a function that uses setCharacters to set characters into state after grabbing from API

  return (
    <>
      <Characters characters={characters} />
    </>
  );
};

export default AirbenderCharacters;
