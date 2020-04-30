import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterDetail.css';

const CharacterDetail = ({ name, affiliation, allies, enemies, photoUrl }) => (
  <div className={styles.characterDetail}>
    <p className={styles.characterName}>{name}</p>
    <img src={photoUrl} alt={name} />
    <p><i className="fas fa-users"></i> {affiliation} </p>
    <p>
      <span><i className="fas fa-hands-helping"></i> {allies} | </span>
      <span><i className="fas fa-fist-raised"></i> {enemies}</span>
    </p>
  </div>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  affiliation: PropTypes.string,
};


export default CharacterDetail;
