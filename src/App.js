import './index.css';
import logo from './assets/logo.jpg';
import ig from './assets/instagram.png';
import fb from './assets/facebook.png';
import ds from './assets/discord.png';
import yt from './assets/youtube.png';

function App() {
  return (
    <div className="container">

      <div className="top-bar">
        Akaza Gaming
      </div>

      <div className="content">
        <img src={logo} alt="My Logo"/>
        <div className="line"></div>
      </div>

      <div className="bottom-bar">
        <button className='socials'>
          <img src={ig} alt="Instagram" />
        </button>
        <button className='socials'>
          <img src={fb} alt="Facebook" />
        </button>
        <button className='socials'>
          <img src={ds} alt="Discord" />
        </button>
        <button className='socials'>
          <img src={yt} alt="Youtube" />
        </button>
      </div>

    </div>
  );
}

export default App;
