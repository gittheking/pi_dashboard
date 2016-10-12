import React from 'react';
import styles from './MusicInfo.css';

const MusicInfo = props =>
  <div className={styles.trackInfo}>
    <div className={styles.albumContainer}>
      <img
        className={styles.albumArt}
        src={props.albumCoverURL}
        alt="Album Cover"
      />
    </div>
    <p className={styles.songInfo}>
      <span className={styles.artist}>
        {props.artist}
      </span><br/>
      <span className={styles.trackAndAlbum}>
        {props.track}
      </span><br/>
      <span className={styles.trackAndAlbum}>
        {props.album}
      </span><br/>
    </p>
  </div>;

export default MusicInfo;
