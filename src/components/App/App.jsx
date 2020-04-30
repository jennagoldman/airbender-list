import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import AirbenderCharacters from '../../containers/AirbenderCharacters/AirbenderCharacter.jsx';
import CharacterDetailContainer from '../../containers/CharacterDetail/CharacterDetailContainer.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AirbenderCharacters} />
          <Route path="/character/:id" component={CharacterDetailContainer} />
        </Switch>
      </Router>
    </>
  );
}
