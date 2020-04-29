import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, allies, enemies, affiliation, photoUrl }) => (
  <div>
    <p>{name}</p>
    <img src={photoUrl} alt={name} />
    <p>{affiliation}</p>
    <p>
      <span>{allies}</span>
      <span>{enemies}</span>
    </p>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};


export default Character;
