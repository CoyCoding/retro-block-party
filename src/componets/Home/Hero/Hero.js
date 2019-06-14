import React from 'react';
import './Hero.scss';
const imgUrl = require ('../../.././img/RBP.png');

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="rbp-img">
          <img src={imgUrl} alt="retro block party"/>
        </div>
        <div className="rbp-img2">
          <h2><span>B</span>RINGING <span>R</span>ETRO <span>T</span>OGETHER<br/><span>F</span>OR <span>C</span>HARITY</h2>

        </div>
      </div>
    </section>
  );
}

export default Hero;
