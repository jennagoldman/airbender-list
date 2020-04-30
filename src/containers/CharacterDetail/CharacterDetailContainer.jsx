import React, { useState, useEffect } from 'react';
import { fetchCharacter } from '../../services/airbender-api.js';
import { useRouteMatch } from 'react-router-dom';
import CharacterDetail from '../../components/Characters/CharacterDetail.jsx';

const CharacterDetailContainer = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <CharacterDetail {...character} />
    </>
  );
};

export default CharacterDetailContainer;
