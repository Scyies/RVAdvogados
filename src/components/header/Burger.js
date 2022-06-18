import React, { useState } from 'react';
import './burger.scss';

const Burger = () => {

  const [status, setStatus] = useState('close');
  const [isActive, setActive] = useState('false');

  function burgerClick() {
    setStatus(status === 'open' ? 'close' : 'open')
    setActive(!isActive)
  }

  return (
    <>
      <div className='burger' role="button" onClick={burgerClick}>
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>
      <ul className={`burger-items ${isActive ? '' : 'active'}`}>
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
    </>
  )
}

export default Burger
