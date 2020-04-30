import React from 'react';
import Character from './Character.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character.id} className={styles.characterItem}>
      <Link to={`/character/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul className={styles.characterList}>
      {characterItems}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }))
};


export default Characters;
