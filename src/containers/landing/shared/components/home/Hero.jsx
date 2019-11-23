import React from 'react';

// import Register from 'client/components/Register';
// import LandingImage from 'client/assets/img/landing.svg';

function Hero() {
  return (
    <div className="landing-hero">
      <div className="row">
        <div className="col-lg-5">
          Hero Image
          {/* <img src={LandingImage} alt="" className="landing-hero-image" /> */}
        </div>
        <div className="col-lg-6 ml-auto">
          <div className="landing-hero-title">
            <h1>ÜRETKENLİĞİNİZİ BİZİMLE BİRLİKTE ARTTIRIN!</h1>
          </div>
          <div className="landing-hero-description">
            <p>
              Size sağlamış olduğumuz: zaman yönetimi, görev yönetimi, proje yönetimi ve sesli
              toplantı odaları sayesinde tek bir arayüz üzerinden hepsini yönetebilir ve kendi
              işinize göre planlayabilirsiniz.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-10">{/* <Register showMessages block /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
