import React from 'react';

const card = (props) => {
  return (
    <div className="card-dto" >
      <div className="card-img" onClick={props.popUpClick} data-id={props.id}>
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <p>{props.descricao}</p>
      </div>
    </div>
  )
}

export default card