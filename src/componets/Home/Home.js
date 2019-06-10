import React from 'react';
import './Home.scss';
import WhatIsItSection from './Sections/WhatIsItSection'

function Home() {
  return (
    <section id="home">
      <WhatIsItSection />
      <section className="faq-section">
      <div className="container">
      <div className="faq-grid">
      <div className="faq-location">
        <div className="title">
          <h3>Can I come to the Party?</h3>
        </div>
        <div className="description">
          <p>Of course, The Retro Block Party is all about bringing the streaming community together for charity.</p>
        </div>
        </div>
        <div className="faq-location">
          <div className="title">
            <h3>So wheres the party at?</h3>
          </div>
          <div className="description">
            <p>The Retro Block Party takes place entirely on twitch.tv allowing you to show up
            no matter where you are.</p>
          </div>
          </div>
          <div className="faq-location">
            <div className="title">
              <h3>When is the party?</h3>
            </div>
            <div className="description">
              <p>The Retro Block Party takes place once month for whole weekend, so you can party all night long.
              For more details check out the current <a>Schedule Page</a></p>
            </div>
            </div>
          <div className="faq-location">
            <div className="title">
              <h3>How do I join?</h3>
            </div>
            <div className="description">
              <p>If you want to get off the lawn and on the dance floor check out the <a>Application Page</a> for more info.</p>
            </div>
            </div>
            </div>
      </div>
      </section>
    </section>
  );
}

export default Home;
