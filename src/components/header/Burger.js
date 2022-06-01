import React, { useState } from 'react';
import './burger.scss';
import RightNav from './RightNav';

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
      <ul className={`nav-items${isActive ? '' : 'active'}`}>
        <li>Home</li>
        <li>Áreas de atuação</li>
        <li>Sobre</li>
        <li>Contato</li>
    </ul>
    </>
  )
}

export default Burger
