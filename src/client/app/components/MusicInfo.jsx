import React from 'react';

const MusicInfo = props => {
  console.log(props);
  return (
    <div className="track-info">
      <div className="album-container">
        <img 
          src={props.albumCoverURL}
          alt="Album Cover" />
      </div>
      <div className="info-container">
        <p>
          <span className="artist">
            {props.artist}
          </span><br/>
          <span className="track">
            {props.track}
          </span><br/>
          <span className="album">
            {props.album}
          </span><br/>
        </p>
      </div>
    </div>
  )
}

export default MusicInfo;