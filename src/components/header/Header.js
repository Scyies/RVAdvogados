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
          <ul className='nav-items'>
            <a href='#home'>
              <li>HOME</li>
            </a>
            <a href="#atuacao">
              <li>ÁREAS DE ATUAÇÃO</li>
            </a>
            <a href="#sobre">
              <li>SOBRE</li>
            </a>
            <a href="#equipe">
              <li>EQUIPE</li>
            </a>
            <a href="#contato">
              <li>CONTATO</li>
            </a>
          </ul>
        </nav>
      </header>
      <Burger />
    </div>
  )
}

export default Header
