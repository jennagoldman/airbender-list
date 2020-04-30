export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=50')
    .then(res => res.json())
    .then(json => json.map(character => ({
      name: character.name,
      imageUrl: character.photoUrl,
      id: character._id
    })));
};

export const fetchCharacter = (id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
