import React from 'react';

import Partner from 'shared/assets/img/google.png';
import Video from 'shared/assets/img/video-view.png';
import PlayIcon from 'shared/assets/img/icon-white-play.svg';
import LandingHero from '../shared/components/home/Hero';

function Landing() {
  return (
    <div className="container">
      <LandingHero />

      <div className="landing-partners">
        <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-2">
          <div className="row">
            {[0, 1, 2, 3].map(i => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="landing-partner">
                  <a href="https://www.google.com.tr/" target="_blank" rel="noopener noreferrer">
                    <img src={Partner} alt="Google" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="landing-video">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="landing-video-image">
              <img src={Video} alt="landing-video" />
            </div>
            <div className="landing-video-button">
              <img src={PlayIcon} alt="button" />
            </div>
          </div>
        </div>
      </div>
      <h1>Dom</h1>
    </div>
  );
}
export default Landing;
