import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            Rodermel & Valério Advogados
          </div>
          <ul className='nav-items'>
            <li>Home</li>
            <li>Áreas de atuação</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
