import React from 'react';
import Character from './Character.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character._id}>
      <Link to={`character/${character._id}`}>
        <Character {...character} />
      </Link>
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
    photoUrl: PropTypes.string,
    allies: PropTypes.array.isRequired,
    enemies: PropTypes.array.isRequired,
    affiliation: PropTypes.string
  }))
};


export default Characters;
