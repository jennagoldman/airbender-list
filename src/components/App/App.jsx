import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import AirbenderCharacters from '../../containers/AirbenderCharacters/AirbenderCharacter.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={AirbenderCharacters} />
        </Switch>
      </Router>
    </>
  );
}
