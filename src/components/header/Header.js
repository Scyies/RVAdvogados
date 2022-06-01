import React from 'react';
import Burger from './Burger';
import './header.scss';
import RightNav from './RightNav';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            Rodermel & Valério Advogados
          </div>
            <Burger />
        </nav>
      </header>
    </div>
  )
}

export default Header
