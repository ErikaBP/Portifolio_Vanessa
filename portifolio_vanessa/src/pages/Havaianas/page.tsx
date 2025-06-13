import './page.css';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';

const HavaianasPage = () => {
    return (
      <div className="context">
        <Header />
        <div className="container">
          <div className='alpha'>
            <div className='alphaText'>
                <h2 className='alphaTitle'>Alpargatas🩴</h2>
                <p className='pAlpha'>A <b>Alpargatas</b> é uma empresa global, fundada e sediada no Brasil há mais de 115 anos. Se compromete a encantar o mundo com marcas incríveis, que transmitem leveza e alegria para o dia a dia dos seus consumidores. São os donos da <b>marca Havaianas</b>.</p>
                <p className='pAlpha'>Na <b>Alpa</b>, atuei com o desenho e melhoria de <b>processos de AMS</b>, para otimização das etapas de solução de problemas envolvendo os sistemas de logística da empresa.</p>
                <p className='pAlpha'>Além disso, redesenhei o <b>BPA (book padrão de atendimento)</b> da área, apoeiei com o <b>desenvolvimento de treinamentos</b> e com o desenho de <b>novos fluxos</b> dentro do sistema de controle de chamados (Service Now).</p>
                <p className='pAlpha'>Participei da <b>divulgação e criação de campanhas de talentos</b> e acompanhei <b>campanhas de social media</b>!</p>
            </div>
            <img src="./images/vanessaAlpha.svg" alt="Vanessa" />
          </div>
          <div className='contextFotosAlpa'>
            <img src="./images/foto1Alpa.svg" alt="Foto 1 Alpa" className='imagensSinestesia'/>
            <img src="./images/foto2Alpa.svg" alt="Foto 2 Alpa" className='imagensSinestesia'/>
            <img src="./images/foto3Alpa.svg" alt="Foto 3 Alpa" className='imagensSinestesia'/>
            <img src="./images/foto4Alpa.svg" alt="Foto 4 Alpa" className='imagensSinestesia'/>
          </div>
          <div className='bpaConteiner'>
            <div className="bpaItem">
                <video className="images" controls><source src="./videos/videoEstags.mp4" type="video/mp4" /></video>
                <div className="ativo">
                    <img width="280" src="./images/Ativo 4.png" alt="cartela" />
                    <img width="280" src="./images/Ativo 5.png" alt="cartela" />
                </div>
            </div>
            <div className="bpaItem">
                <img src="./images/cartela.png" alt="cartela" className="images"/>
                <video className="images" controls ><source src="./videos/bpa.mp4" type="video/mp4" /></video>
            </div>
          </div>
          <div className='sinestesia'>
            <img src="./images/havaianas.svg" alt="Scrreen" />
          </div>
          <div className='footerHavaianas'>
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
  
  export default HavaianasPage;