import React from 'react'
import './team.scss'
import placeholder from '../../assets/parede.jpeg'

const Team = () => {
  return (
    <div className='team-wrapper'>
      <div className="team-card">
        <img src={placeholder} alt="" />
        <p className='team-nome'>Bianca Valério</p>
        <p className='team-info'>OAB/SC 45.867</p>
        <p className='team-info'>biancavalerio.bv@gmail.com</p>
      </div>
      <div className="team-card">
        <img src={placeholder} alt="" />
        <p className='team-nome'>Daiane Rodermel</p>
        <p className='team-info'>OAB/SC 00.000</p>
        <p className='team-info'>daiane@gmail.com</p>
      </div>
    </div>
  )
}

export default Team