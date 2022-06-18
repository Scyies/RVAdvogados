import React from 'react';

const card = (props) => {
  const mudar = () => {
    props.popUpClick(props)
  }
  return (
    <div className="card-dto" onClick={mudar}>
      <div className="card-img"  data-id={props.id}>
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <p>Saiba mais</p>
      </div>
    </div>
  )
}

export default card