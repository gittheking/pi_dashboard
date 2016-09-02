import React from 'react';

const MusicControls = props => {
  return (
    <div className="track-controls">
      <div className="track-control-buttons">
        <img src="/img/previous.svg" className="previous"/>
        <img src="/img/play.svg" className="play" />
        <img src="/img/stop.svg" className="stop" />
        <img src="/img/next.svg" className="next" />
      </div>
      <div className="volume-control">
        <img src="/img/volume.svg" className="volume-icon" />
        <input className="volume" type="range" />
      </div>
    </div>
  )
}

export default MusicControls;
