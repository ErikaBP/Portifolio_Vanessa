import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProjetosClick = () => {
    navigate("/", { state: { scrollTo: "projetos" } });
    setMenuOpen(false);
  };

  return (
    <header className="menu">
      <div className="menuContainer">
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <nav className={`menuItens ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="linkHeader" onClick={() => setMenuOpen(false)}>
            <h1 className="h1Header">Sobre</h1>
          </Link>

          <h1 className="h1HeaderProjetos" onClick={handleProjetosClick}>
            Projetos
          </h1>

          <Link to="/havaianas" className="linkHeader" onClick={() => setMenuOpen(false)}>
            <h1 className="h1Header">Havaianas</h1>
          </Link>

          <Link to="/girafa" className="linkHeader" onClick={() => setMenuOpen(false)}>
            <h1 className="h1Header">Girafa</h1>
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
