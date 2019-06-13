import React from 'react';
import './Home.scss';
import WhatIsItSection from './Sections/WhatIsItSection'
import Hero from './Hero/Hero';
import FaqSection from './FaqSection/FaqSection';

function Home() {
  return (
    <section id="home">
      <Hero />
      <WhatIsItSection />
      <FaqSection />
      
    </section>
  );
}

export default Home;
