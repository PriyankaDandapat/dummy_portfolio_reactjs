import React from 'react';
import Photo from './Photo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className='head'>
    <img src={Photo} alt='image here' style={{width:110,height:110}}></img>
      <h1>Priyanka Dandapat |</h1>
      <p className='header_para'> Student at VIT Chennai</p>
    </header>
  );
}

export default Header;