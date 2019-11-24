import React from 'react';

import Partner from 'shared/assets/img/google.png';

function Partners() {
  return (
    <div className="landing-partners">
      <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
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
  );
}

export default Partners;
