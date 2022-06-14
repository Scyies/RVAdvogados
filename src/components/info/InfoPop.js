import React from 'react';
import './pop-up.scss';
import image from '../../assets/parede.jpeg'

const InfoPop = (props) => {
  return (props.trigger) ? (
    <section className="pop-up">
      <div className="pop-up-wrapper">
        <button onClick={() => props.setTrigger(false)}>X</button>
        <div className="pop-up-text">
          <h2>Título</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, ratione doloremque amet cumque, mollitia ullam quisquam beatae, fuga nostrum dolorum corporis est at. Quas quisquam fuga quis ex adipisci.</p>
        </div>
        <div className="pop-up-img">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  ) : "";
}

export default InfoPop