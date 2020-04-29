import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, allies, enemies, affiliation, imageUrl }) => (
  <div>
    <p>{name}</p>
    <img src={imageUrl} alt={name} />
    <p>{affiliation}</p>
    <p>
      <span>{allies}</span>
      <span>{enemies}</span>
    </p>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};


export default Character;
