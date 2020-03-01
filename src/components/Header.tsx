import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => {
  return (
    <header>
      <h1>
        P
        <span aria-label='o' role='img'>
          🥔
        </span>
        MEL
        <span aria-label='o' role='img'>
          🥔
        </span>
      </h1>
      <hr />
      <nav>
        <Link to='/'>
          {' '}
          <p>Home</p>
        </Link>
        <Link to='/add'>
          {' '}
          <p>Add a restaurant</p>
        </Link>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
