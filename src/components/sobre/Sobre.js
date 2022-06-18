import React from 'react';
import './sobre.scss';
import wall from '../../assets/footer logo.png'

const Sobre = () => {
  return (
    <div className='sobre-wrapper' id='sobre'>
      <div className="sobre">
        <div className="sobre-text">
          <h3>SOBRE NÓS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto quos! Distinctio quisquam aliquid error id magni officiis, tempora soluta dolorum odio impedit dolor rerum sapiente dolorem quia, at sequi.</p>
        </div>
        <div className="sobre-img">
          <img src={wall} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sobre