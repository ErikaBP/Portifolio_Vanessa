import './page.css';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import foto1 from './images/foto1Girafa.svg';
import foto2 from './images/foto2Girafa.svg';
import foto3 from './images/foto3Girafa.svg';
import vector from './images/vector.svg';

const HavaianasPage = () => {
    return (
      <div className="context">
        <Header />
        <div className="container">
          <div className='alpha'>
            <div className='alphaText'>
                <h2 className='alphaTitle'>Girafa 🦒</h2>
                <p className='pAlpha'>O <b>Girafa</b> é uma consultoria digital, que promete auxiliar os usuários na escolha ideal para suas tecnologias. Revendedora de marcas internacionais e renomadas como <b>cuisinart</b> , o girafa leva os melhores produtos aos lares dos brasileiros.</p>
                <p className='pAlpha'>No <b>Girafa</b>, atuei no desdobramento de peças para campanhas, <b>criação de KVs</b>, edição de imagens, criação de posts para redes sociais, <b>UI Design</b> e estampas para campanhas internas (placement print e photo print - Repeat).</p>
                <p className='pAlpha'>Durante meu período na empresa, realizei a construção do <b>Design System</b> e protótipos de LPs e homes da empresa no FIGMA e auxiliei na construção dos templates fixos para <b>e-mail marketing</b>, auxiliando a equipe comercial. Também participei do <b>desenvolvimento e conceituação de campanhas</b> como da Black Friday 2022.</p>
            </div>
            <img src="./images/GirafaMain.png" alt="Vanessa" />
          </div>
          <div className='contextFotosAlpa'>
            <img src="./images/Foto1Girafa.svg" alt="Foto 1 Girafa" className='imagensSinestesia' />
            <img src="./images/Foto2Girafa.svg" alt="Foto 2 Girafa" className='imagensSinestesia' />
            <img src="./images/Foto3Girafa.svg" alt="Foto 3 Girafa" className='imagensSinestesia' />
            <img src="./images/Vector.svg" alt="Foto 4 Girafa" className='imagensSinestesia' />
          </div>
          <div className='bpaConteiner'>
            <div className="bpaItem">
                <video className="images" controls><source src="./videos/blackfridayUI.mp4" type="video/mp4" /></video>
                <div className="ativo">
                    <img width="600" src="./images/grupoGirafa.png" alt="cartela" />
                </div>
            </div>
            <div className="bpaItem">
                <img src="./images/cartelaGirafa.svg" alt="cartela" className="images"/>
                <video className="images" controls ><source src="./videos/cuisinart.mp4" type="video/mp4" /></video>
            </div>
          </div>
          <div className='sinestesia'>
            <img src="./images/GiraFoot.svg" alt="Scrreen" />
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