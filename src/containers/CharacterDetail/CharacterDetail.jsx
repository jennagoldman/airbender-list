import React, { useState, useEffect } from 'react';
import { fetchCharacter } from '../../services/airbender-api.js';
import { useRouteMatch } from 'react-router-dom';
import styles from './CharacterDetail.css';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <div className={styles.characterDetail}>
      <p className={styles.characterName}>{character.name}</p>
      <img src={character.photoUrl} alt={character.name} />
      <p><i className="fas fa-users"></i> {character.affiliation} </p>
      <p>
        <span><i className="fas fa-hands-helping"></i> {character.allies} | </span>
        <span><i className="fas fa-fist-raised"></i> {character.enemies}</span>
      </p>
    </div>
  );
};

export default CharacterDetail;
