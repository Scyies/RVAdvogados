import React from 'react';
import './info.scss';
import dtoImg from '../../assets/Cards/dto-civil-card.jpg';

const Info = () => {
  return (
    <>
      <div className="areas-text">
        <h2>ÁREAS DE ATUAÇÃO</h2>
      </div>
      <div className="cards-wrapper">
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações cíveis.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica em questões de direito administrativo.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações de direito do consumidor.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações de direito de família.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações previdenciárias.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações trabalhistas.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações sucessórias.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info