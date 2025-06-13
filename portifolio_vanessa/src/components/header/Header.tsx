import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
  
  function Header() {
  const navigate = useNavigate();

  const handleProjetosClick = () => {
    navigate("/", { state: { scrollTo: "projetos" } });
  };

  return (
    <div className="menu">
      <div className="menuItens">
        <Link to="/" className="linkHeader">  
          <h1 className='h1Header'>Sobre</h1>
        </Link>
        <h1 className="h1HeaderProjetos" onClick={handleProjetosClick}>
          Projetos
        </h1>
        <Link to="/havaianas" className="linkHeader">  
          <h1 className='h1Header'>Havaianas</h1>
        </Link>
        <Link to="" className="linkHeader"> 
          <h1 className='h1Header'>Girafa</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
