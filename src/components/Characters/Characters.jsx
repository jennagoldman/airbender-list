import React from 'react';
import Character from './Character.jsx';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterItems}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    enemies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }))
};


export default Characters;
