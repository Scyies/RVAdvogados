import React from 'react';
import Burger from './Burger';
import './header.scss';
import logo from '../../assets/logo-header-Roboto.png';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
            <Burger />
        </nav>
      </header>
    </div>
  )
}

export default Header
