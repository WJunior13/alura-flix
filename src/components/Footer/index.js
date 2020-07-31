import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        <img className="Logo" src="https://fontmeme.com/permalink/200729/d7981625e6f42a856918a1577c4afadf.png" alt="Logo Alura" />
      </p>
      <p>
        Criado por <a href="https://www.linkedin.com/in/junior-carrer/">Junior Tavares Carrer</a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
