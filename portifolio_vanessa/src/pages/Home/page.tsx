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
          <div className='contextFotosSinestesia'>
            <img src="./images/foto1Sinestesia.svg" alt="Foto 1 Sinestesia" className='imagensSinestesia'/>
            <img src="./images/foto2Sinestesia.svg" alt="Foto 2 Sinestesia" className='imagensSinestesia'/>
            <img src="./images/foto3Sinestesia.svg" alt="Foto 3 Sinestesia" className='imagensSinestesia'/>
            <img src="./images/foto4Sinestesia.svg" alt="Foto 4 Sinestesia" className='imagensSinestesia'/>
          </div>
          <div className='sinestesia'>
            <img src="./images/scrreen.svg" alt="Scrreen" />
          </div>
          <div className='contextSinestesia'>
            <div className='textSinestesia'>
                <p className='pSobreScreen'>Projeto de impressão e diagramação. <b> Screen </b> é um revista híbrida, impressa e digital, voltada ao universo audiovisual do <b> terror </b>, <b> Noir </b> e <b> Expressionista </b> . O veículo busca ser fonte de divulgação para novas produções, garndes e independentes, e novos conteúdos do universo.</p>
                <div className='estiloVerMaisScreen'>
                    <Link to='https://drive.google.com/drive/folders/1ft9ltT62rM2vMB8-4QxmzRyKTbk1yjRg' className='verMais'>Ver mais</Link>
                </div>
            </div>
            <video width="640" height="360" controls style={{ borderRadius: '15px' }}><source src="./videos/screen.mp4" type="video/mp4" /></video>
          </div>
          <div className='contextFotosSinestesia'>
            <img src="./images/foto1Screen.svg" alt="Foto 1 Screen" className='imagensSinestesia'/>
            <img src="./images/foto2Screen.svg" alt="Foto 2 Screen" className='imagensSinestesia'/>
            <img src="./images/foto3Screen.svg" alt="Foto 3 Screen" className='imagensSinestesia'/>
          </div>
          <div className='footer'>
            <Link to="https://www.instagram.com/vanskyfall?igshid=ZDdkNTZiNTM%3D" className='redes'>
                <img src="./images/insta.svg" alt="Instagram" />
            </Link>
            <Link to="https://www.linkedin.com/in/vanessa-piaui-51b43a229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='redes'>
                <img src="./images/linkedin.svg" alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;