import React from 'react';
import styles from './MusicInfo_style.js';

const MusicInfo = props => {
  return (
    <div style={styles.trackInfo}>
      <div style={styles.albumContainer}>
        <img
          style={styles.albumArt}
          src={props.albumCoverURL}
          alt="Album Cover"
        />
      </div>
      <p style={styles.p}>
        <span style={styles.artist}>
          {props.artist}
        </span><br/>
        <span style={styles.trackAndAlbum}>
          {props.track}
        </span><br/>
        <span style={styles.trackAndAlbum}>
          {props.album}
        </span><br/>
      </p>
    </div>
  );
};

export default MusicInfo;
