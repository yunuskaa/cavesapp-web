import React from 'react';

import LandingHero from '../shared/components/home/Hero';
import LandingPartners from '../shared/components/home/Partners';
import LandingVideo from '../shared/components/home/Video';

function Landing() {
  return (
    <div className="container">
      <LandingHero />

      <LandingPartners />

      <LandingVideo />

      <h1>Dom</h1>
    </div>
  );
}
export default Landing;
