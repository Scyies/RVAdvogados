import React from 'react';
import './atuacao.scss';
import InfoPop from './InfoPop';
import { useState } from 'react';
import data from '../../data/data.json';
import Card from './Card';

const Info = () => {
  const [popUpBtn, setPopUp] = useState(false);
  const popUp = (event) => {
    const eventId = event.currentTarget.getAttribute('data-id');
    console.log(eventId);
    setPopUp(true)
  }
  const closePopUp = () => {
    setPopUp(false)
  }
  const dataDB = data.data

  return (
    <section className="atuacao-wrapper" id='atuacao'>
      <InfoPop open={popUpBtn} close={closePopUp} titulo={dataDB[0].popUpTittle} texto={dataDB[0].popUpTxt}/>
      <div className="areas-text">
        <h2>ÁREAS DE ATUAÇÃO</h2>
      </div>
      <div className="cards-wrapper">
        {dataDB.map((cardTemplate, index) => (
          <Card key={index} id={index} image={cardTemplate.img} descricao={cardTemplate.descricao} popUpTxt={cardTemplate.popUpTxt} popUpClick={popUp}/>
        ))}
      </div>
    </section>
  )
}

export default Info