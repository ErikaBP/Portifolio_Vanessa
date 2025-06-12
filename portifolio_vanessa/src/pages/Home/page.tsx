import React from 'react';
import ReactDOM from 'react-dom/client';
import './page.css';
import Header from '../../components/header/Header';
const HomePage = () => {
    return (
      <div className="context">
        <Header />
        <div className="container">
          <div className='sobreMim'>
            <div className='sobreText'>
                <h2 className='sobreMimTitle'>Sobre mim</h2>
                <p className='pSobre'>Sou a <b>Vanessa Piaui</b>! 🤟</p>
                <p className='pSobre'>Graduanda em <b> Design Digital </b>, técnica em TI e, antes de tudo, alguém apaixonada por <b> pesquisar </b> , <b> comunicar </b> e <b> inventar </b> novas formas e funções.</p>
                <p className='pSobre'> <b> Curiosidade </b> , <b> adaptabilidade </b> e <b> energia </b> me definem e nos itens abaixo é possível explorar um pouco dos meus projetos favoritos. </p>
                <p className='pSobre'> Para me conhecer melhor ou navegar pela minha jornada profissional, que passa por startups como o <b> Girafa </b> e Multinacionais como a <b> Havaianas </b> , consulte os itens do menu. </p>
                <p className='pSobre'> <b> Bem-vindo(a)! </b> 🙃</p>
            </div>
            <img src="./images/vanessaSobre.svg" alt="Vanessa" />
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;