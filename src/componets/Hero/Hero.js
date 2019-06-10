import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="rbp-img">
          <img src="https://media.discordapp.net/attachments/477927083809439786/587123895597793311/RBPBIGNEO75.png" alt="retro block party"/>
        </div>
        <div className="rbp-img2">
          <h2><span>B</span>RINGING <span>R</span>ETRO <span>T</span>OGETHER<br/><span>F</span>OR <span>C</span>HARITY</h2>

        </div>
        <div className="vid-wrapper">
        <iframe className="vid" frameborder="0" height="100%" width="100%"
  src="https://youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&autohide=1">
</iframe>
</div>
      </div>
    </section>
  );
}

export default Hero;
