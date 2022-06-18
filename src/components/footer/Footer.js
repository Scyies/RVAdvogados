import React from 'react';
import './footer.scss';
import footerLogo from '../../assets/footer logo.png';
import footerLogoText from '../../assets/logo-header-Roboto.png';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='wrapper'>
    <div className='footer-wrapper'>
      <div className="footer-logo">
        <img src={footerLogoText} alt="" />
      </div>
      <div className="footer-menu">
        <h5>MENU</h5>
        <ul>
          <li><p className="menu-info">Home</p></li>
          <li><p className="menu-info">Áreas de Atuação</p></li>
          <li><p className="menu-info">Sobre</p></li>
          <li><p className="menu-info">Equipe</p></li>
          <li><p className="menu-info">Contato</p></li>
        </ul>
      </div>
      <div className="footer-contatos">
        <h5>CONTATOS</h5>
        <ul>
          <li>
            <div className="icon"><AiOutlineWhatsApp size={'2rem'} /></div>
            <p className="info">49 0000-0000</p>
          </li>
          <li>
            <div className="icon">
              <AiOutlinePhone size={'2rem'} /> 
            </div>
            <p className="info">
              49 9 0000-0000
            </p>
          </li>
          <li>
            <div className="icon">
              <AiOutlineMail size={'2rem'} /> 
            </div>
            <p className="info">
              email@email.com
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-atendimento">
        <h5>ATENDIMENTO</h5>
        <p>De segunda a sexta-feira, das 9h às 18h.</p>
      </div>
    </div>
    <footer className="footer">
      <span className='line-footer'></span>
      <img src={footerLogo} alt="" />
      <p>© Rodermel & Valério Advocacia. Todos os direitos reservados.</p>
    </footer>
    </div>
  )
}

export default Footer