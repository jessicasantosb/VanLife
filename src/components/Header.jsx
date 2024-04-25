import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className='site-logo' to={'/'}>
        #VanLife
      </Link>

      <nav>
        <Link to={'/about'}>About</Link>
        <Link to={'/vans'}>Vans</Link>
        <Link to={'/host'}>Host</Link>
      </nav>
    </header>
  );
}

export default Header;
