import React from 'react';
import './atuacao.scss';
import dtoCivilImg from '../../assets/Cards/dto-civil-card.jpg';
import dtoAdmImg from '../../assets/Cards/dto-adm-card.jpg';
import dtoConsumidorCard from '../../assets/Cards/dto-consumidor-card.jpg';
import dtoFamiliaImg from '../../assets/Cards/dto-familia-card.jpg';
import dtoPrevidenciarioImg from '../../assets/Cards/dto-prev-card.jpg';
import dtoTrabalhoImg from '../../assets/Cards/dto-trab-card.jpg';
import dtoSucessoesImg from '../../assets/Cards/dto-succ-card.jpg';
import InfoPop from './InfoPop';
import { useState } from 'react';

const Info = () => {
  const [popUpBtn, setPopUp] = useState(false);
  const popUp = () => {
    setPopUp(true)
  }

  return (
    <section className="atuacao-wrapper" id='atuacao'>
      <InfoPop  trigger={popUpBtn} setTrigger={setPopUp}/>
      <div className="areas-text">
        <h2>ÁREAS DE ATUAÇÃO</h2>
      </div>
      <div className="cards-wrapper">
        <div className="card-dto">
          <div className="card-img" onClick={popUp}>
            <img src={dtoCivilImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações cíveis.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoAdmImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica em questões de direito administrativo.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoConsumidorCard} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações de direito do consumidor.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoFamiliaImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações de direito de família.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoPrevidenciarioImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações previdenciárias.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoTrabalhoImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações trabalhistas.</p>
          </div>
        </div>
        <div className="card-dto">
          <div className="card-img">
            <img src={dtoSucessoesImg} alt="" />
          </div>
          <div className="card-content">
            <p>Assessoria jurídica nas relações sucessórias.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info