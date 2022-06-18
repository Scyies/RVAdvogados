import React, { useRef } from 'react';
import './contact.scss';
import {useState, useEffect} from 'react';
import validate from './validadeInfo';

const Contact = () => {
  const [values, setValues] = useState({
    nome:'',
    email:'',
    tel:'',
    mensagem:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  const validate = (values) => {

  }

  console.log(values);
  return (
    <div className="contact">
    <div className='contact-wrapper' id='contato'>
      <span className='line-contact'></span>
      <form action="https://formspree.io/f/xpzbnjzj" method="POST">
          <legend>ENTRE EM CONTATO CONOSCO</legend>
          <div className='contact-form'>
            <label htmlFor="contact-nome">Nome</label>
            <input type="text" 
            id="contact-nome" 
            name="nome" 
            className="contact-input" 
            placeholder="Seu nome completo"
            onChange={onChange}
            required
            onBlur={handleFocus}
            focused={focused.toString()}
            />
            <span>É necessário informar um nome!</span>
          </div>
          <div className='contact-form'>
            <label htmlFor="contact-email">E-mail</label>
            <input type="email" 
            id="contact-email" 
            className="contact-input" 
            name="email" 
            placeholder="Seu e-mail" 
            onChange={onChange}
            required
            pattern='(\S+@\S+\.\S+)'
            onBlur={handleFocus}
            focused={focused.toString()}
            />
            <span>É necessário informar um e-mail!</span>
          </div>
          <div className='contact-form'>
            <label htmlFor="contact-tel">Telefone</label>
            <input type="tel" 
            id="contact-tel" 
            className="contact-input" 
            name="tel" 
            placeholder="Seu número de telefone"
            onChange={onChange}
            required
            pattern='(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})'
            onBlur={handleFocus}
            focused={focused.toString()}
            />
            <span>É necessário infomar um número de telefone!</span>
          </div>
          <textarea name="mensagem" id="contact-text" cols="20" rows="5"
          placeholder='Envie sua mensagem!' 
          onChange={onChange} 
          onBlur={handleFocus}
          focused={focused.toString()}
          pattern='\d'></textarea>
          <span>É necessário informar sua dúvida!</span>
          <div className="btn-wrapper">
            <button className='contact-btn' type='submit'>Enviar</button>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Contact