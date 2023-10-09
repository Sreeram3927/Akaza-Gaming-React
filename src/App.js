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
        <h3 className='subtitle'>My Logo</h3>
        <img src={logo} alt="My Logo"/>
      </div>

      <div className="bottom-bar">
        <button className='socials'>
          <a href='https://www.instagram.com/demon__530/' target='_blank'><img src={ig} alt="Instagram" /></a>
        </button>
        <button className='socials'>
          <a href='https://akaza-gaming.web.app/' target='_blank'><img src={fb} alt="Facebook" /></a>
        </button>
        <button className='socials'>
          <a href='https://discord.gg/YVYrrHRmZE' target='_blank'><img src={ds} alt="Discord" /></a>
        </button>
        <button className='socials'>
          <a href='https://www.youtube.com/channel/UCdhCNdxPjm3o2nIkyU2du_g' target='_blank'><img src={yt} alt="Youtube" /></a>
        </button>
      </div>

    </div>
  );
}

export default App;
