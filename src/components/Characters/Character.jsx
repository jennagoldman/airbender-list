import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, imageUrl }) => (
  <div className={styles.characterDiv}>
    <p className={styles.characterName}>{name}</p>
    <img src={imageUrl} alt={name} />
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};


export default Character;
