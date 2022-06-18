import React from 'react'
import './hero.scss';
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/Layer 1.png'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <Parallax bgImage={bgImage} 
      strength={200}>
        <div
        style={{
          height: '100vh',
          objectFit: 'none',
        }}>
          <div className="hero-wrapper">
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
      </Parallax>
    </div>
  )
}

export default Hero