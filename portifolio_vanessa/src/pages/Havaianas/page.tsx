import './page.css';
import Header from '../../components/header/Header';

const HavaianasPage = () => {
    return (
      <div className="context">
        <Header />
        <div className="container">
          <div className='alpha'>
            <div className='alphaText'>
                <h2 className='alphaTitle'>Alpargatas</h2>
                <p className='pAlpha'>A <b>Alpargatas</b> é uma empresa global, fundada e sediada no Brasil há mais de 115 anos. Se compromete a encantar o mundo com marcas incríveis, que transmitem leveza e alegria para o dia a dia dos seus consumidores. São os donos da <b>marca Havaianas</b>.</p>
                <p className='pAlpha'>Na <b>Alpa</b>, atuei com o desenho e melhoria de <b>processos de AMS</b>, para otimização das etapas de solução de problemas envolvendo os sistemas de logística da empresa.</p>
                <p className='pAlpha'>Além disso, redesenhei o <b>BPA (book padrão de atendimento)</b> da área, apoeiei com o <b>desenvolvimento de treinamentos</b> e com o desenho de <b>novos fluxos</b> dentro do sistema de controle de chamados (Service Now).</p>
                <p className='pAlpha'>Participei da <b>divulgação e criação de campanhas de talentos</b> e acompanhei <b>campanhas de social media</b>!</p>
            </div>
            <img src="./images/vanessaAlpha.svg" alt="Vanessa" />
          </div>
          <div className="containerCards">
            <img className="cardProfile" src="./images/ficha1.png" alt="Ficha 1" />
            <img className="cardProfile" src="./images/ficha2.png" alt="Ficha 2" />
            <img className="cardProfile" src="./images/ficha1.png" alt="Ficha 1" />
            <img className="cardProfile" src="./images/ficha2.png" alt="Ficha 2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default HavaianasPage;