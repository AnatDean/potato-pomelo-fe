import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../styles/CardImages';
import { Nav } from '../styles/styled.Nav';

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

      <Nav>
        <Link to='/'>
          {' '}
          <img alt={images.home.alt} src={images.home.img} />
        </Link>
      </Nav>
    </header>
  );
};

export default Header;
