import './index.css';
import img from './assets/logo.jpg';

function App() {
  return (
    <div className="container">

      <div className="top-bar">
        Akaza Gaming
      </div>

      <div className="content">
        <img src={img} alt="My Logo"/>
      </div>

    </div>
  );
}

export default App;
