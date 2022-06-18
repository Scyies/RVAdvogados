import React from 'react';
import './atuacao.scss';
import InfoPop from './InfoPop';
import { useState } from 'react';
import data from '../../data/data.json';
import Card from './Card';

const Info = () => {
  const closePopUp = () => {
    document.body.style.overflow = 'unset';
    updatePopUp();
  }
  const dataDB = data.data

  const [popUpState, updatePopUp] = useState();

  const atualizaPopUp = (props) => {
    updatePopUp(<InfoPop close={closePopUp} 
      titulo={props.popUpTittle} 
      texto={props.popUpTxt}/>)
    document.body.style.overflow = 'hidden';
  }

  return (
    <section className="atuacao-wrapper" id='atuacao'>
      {popUpState}
      <div className="areas-text">
        <span className='line-atuacao'></span>
        <h2>ÁREAS DE ATUAÇÃO</h2>
        <span className='line-atuacao'></span>
      </div>
      <div className="cards-wrapper">
        {dataDB.map((cardTemplate, index) => (
          <Card key={index} id={index} 
          image={cardTemplate.img} 
          descricao={cardTemplate.descricao} 
          popUpTxt={cardTemplate.popUpTxt} 
          popUpClick={atualizaPopUp} 
          popUpTittle={cardTemplate.popUpTittle}/>
        ))}
      </div>
    </section>
  )
}

export default Info