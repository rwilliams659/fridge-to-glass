import React from 'react';
import f2glogo from '../../assets/f2glogo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header-component'>
      <h1 className='header-title'>Fridge to Glass</h1>
      <Link to='/'>
        <img src={f2glogo} alt='Three neon glasses logo for Fridge to Glass' className='logo' />
      </Link>
    </header>
  );
};

export default Header;
