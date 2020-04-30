import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacter } from '../../services/airbender-api.js';
import { useRouteMatch } from 'react-router-dom';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <div>
      <p>{character.name}</p>
      <img src={character.photoUrl} alt={character.name} />
      <p>{character.affiliation}</p>
      <p>
        <span><i className="fas fa-hands-helping"></i> {character.allies} | </span>
        <span><i className="fas fa-fist-raised"></i> {character.enemies}</span>
      </p>
    </div>
  );
};


CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  allies: PropTypes.array.isRequired,
  enemies: PropTypes.array.isRequired,
  affiliation: PropTypes.string
};


export default CharacterDetail;
