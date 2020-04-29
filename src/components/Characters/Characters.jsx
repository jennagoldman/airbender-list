import React from 'react';
import Character from './Character.jsx';

const Characters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character.id}>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    enemies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }))
};


export default Characters;
