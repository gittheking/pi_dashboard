import React  from 'react';
import styles from './MusicInfo.css';

const MusicInfo = props =>
  <div className={styles['track-info']}>
    <div className={styles['album-container']}>
      <img
        className={styles['album-art']}
        src={props.albumCoverURL}
        alt="Album Cover"
      />
    </div>
    <p className={styles['song-info']}>
      <span className={styles.artist}>
        {props.artist}
      </span><br />
      <span className={styles['track-and-album']}>
        {props.track}
      </span><br />
      <span className={styles['track-and-album']}>
        {props.album}
      </span><br />
    </p>
  </div>;

MusicInfo.propTypes = {
  albumCoverURL: React.PropTypes.string.isRequired,
  artist: React.PropTypes.string.isRequired,
  track: React.PropTypes.string.isRequired,
  album: React.PropTypes.string.isRequired,
};

export default MusicInfo;
