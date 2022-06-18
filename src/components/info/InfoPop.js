import React from 'react';
import './pop-up.scss';
import image from '../../assets/paredecut.png';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const InfoPop = (props) => {
  const [isClosed, setClosed] = useState(false);

  const toggleClosed = () => {
    setClosed(!isClosed);
  }

  const closeBtn = () => {
    toggleClosed();
    props.close();
  }

  return (
    <section className={isClosed ? 'pop-up closed': 'pop-up open'}>
      <div className="pop-up-wrapper">
        <button onClick={closeBtn}><AiOutlineClose size={'3rem'} /></button>
        <div className="pop-up-text">
          <h2>{props.titulo}</h2>
          <p>{props.texto}
          </p>
        </div>
        <div className="pop-up-img">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default InfoPop