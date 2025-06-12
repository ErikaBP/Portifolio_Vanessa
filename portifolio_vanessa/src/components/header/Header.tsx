import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
  
  function Header() {
    return (
      <div className="menu">
        <div className="menuItens">
          <h1 className='h1HeaderSobre'>Sobre</h1>
          <h1 className='h1Header'>Projetos</h1>
          <Link to="" className="linkHeader"> 
            <h1 className='h1Header'>Havaianas</h1>
          </Link>
          <Link to="" className="linkHeader"> 
            <h1 className='h1Header'>Girafa</h1>
          </Link>
        </div>
      </div>
    );
  };

export default Header;
