import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.headerClass}>
    <Link to="/">
      <h1>Avatar: The Last Airbender Characters</h1>
    </Link>
  </header>
);

export default Header;
