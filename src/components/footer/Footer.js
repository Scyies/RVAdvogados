import React from 'react';
import './footer.scss';
import footerLogo from '../../assets/footer logo.png';
import footerLogoText from '../../assets/logo-header-Roboto.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
          <li>Home</li>
          <li>Áreas de Atuação</li>
          <li>Sobre</li>
          <li>Equipe</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="footer-contatos">
        <h5>CONTATOS</h5>
        <ul>
          <li>
            49 0000-0000
          </li>
          <li>49 9 0000-0000</li>
          <li>email@email.com</li>
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
      <p>c Rodermel & Valério Advocacia. Todos os direitos reservados.</p>
    </footer>
    </div>
  )
}

export default Footer