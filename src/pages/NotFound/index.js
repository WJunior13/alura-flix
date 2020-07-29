
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import './notFound.css';

function NotFound() {
  return (
    <PageDefault>
      <div className='NotFound'>Página não encontrada  :(</div>
      
      

      <div className="return">
     
      <Link  to="/">
         Voltar para home
  
      </Link>
      </div>
    </PageDefault>
  )
}

export default NotFound;