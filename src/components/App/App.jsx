import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import AirbenderCharacters from '../../containers/AirbenderCharacters/AirbenderCharacter.jsx';
import CharacterDetail from '../../containers/CharacterDetail/CharacterDetail.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AirbenderCharacters} />
          <Route exact path="/character/:id" component={CharacterDetail} />
        </Switch>
      </Router>
    </>
  );
}
