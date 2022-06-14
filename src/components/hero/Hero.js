import React from 'react'
import './hero.scss';

const Hero = () => {
  return (
    <>
      <div className="hero" id='home'>
        <div className="main-image">
          <picture>
            {/* <source media="(min-width: 767px)" srcset="" /> */}
            <img src="https://www.direitoprofissional.com/wp-content/uploads/2019/07/288957-fernanda-entregar-ate-dia-2904-futuro-da-advocacia-saiba-o-que-esperar-e-como-se-preparar.jpg" alt="" />
          </picture>
        </div>
        <div className="hero-wrapper container">
          <div className="hero-content">
            <h1 className="title1">
              Resolvemos seus problemas.
            </h1>
            <p className="hero-text">
              Trabalhamos para garantir a você o seu direito.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero