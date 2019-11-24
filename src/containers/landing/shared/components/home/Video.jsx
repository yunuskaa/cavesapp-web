import React from 'react';

import VideoView from 'shared/assets/img/video-view.png';
import PlayIcon from 'shared/assets/img/icon-white-play.svg';

function Video() {
  return (
    <div className="landing-video">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="landing-video-image">
            <img src={VideoView} alt="landing-video" />
          </div>
          <div className="landing-video-button">
            <img src={PlayIcon} alt="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
