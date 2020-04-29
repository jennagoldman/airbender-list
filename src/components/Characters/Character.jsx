import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => (
  <div>
    <p>{name}</p>
    <img src={photoUrl} alt={name} />
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
};


export default Character;
