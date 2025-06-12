import React from 'react';
import ReactDOM from 'react-dom/client';
import './page.css';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
      <div className="context">
        <Header />
        <div className="container">
          <div className='contextText'>       
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
          <div className='sinestesia'>
            <img src="./images/sinestesiaIcon.svg" alt="Sinestesia" />
          </div>
          <div className='contextSinestesia'>
            <video width="640" height="360" controls style={{ borderRadius: '15px' }}><source src="./videos/sinestesia.mp4" type="video/mp4" /></video>
            <div className='textSinestesia'>
                <p className='pSobreSinestesia'><b> SYNESTHESIA </b> é um projeto de experiência sinestésica que busca simular a condição por meio de uma <b> instalação </b> . O objetivo é capturar essa sinergia sensorial em uma <b> experiência visual </b> e <b> auditiva </b>. A instalação é projetada para receber <b> estímulos sonoros </b> do ambiente e convertê-los em <b> cores de luzes </b> , criando uma representação visual dos sons que são ouvidos, e proporcionando uma <b> experiência sensorial imersiva </b> .</p>
                <div className='estiloVerMais'>
                    <Link to='https://drive.google.com/drive/folders/1S2SxhbyLOrk2ccgRvW-0eErXNiwc-m8d' className='verMais'>Ver mais</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;