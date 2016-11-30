import React, { Component } from 'react';
import styles from './MusicControls.css';
import playButton from '../../../img/play.svg';
import stopButton from '../../../img/stop.svg';
import nextButton from '../../../img/next.svg';
import prevButton from '../../../img/previous.svg';
import volumeIcon from '../../../img/volume.svg';

export default class MusicControls extends Component {

  constructor() {
    super();

    this.state = {
      playState: 'playing',
      volume: '50',
      volumeTimer: undefined,
      playStateTimer: undefined,
    };
  }

  componentDidMount() {
    const volumeTimer    = setInterval(this.getVolume.bind(this),    15000);
    const playStateTimer = setInterval(this.getPlayState.bind(this), 5000);
    this.setState({ volumeTimer, playStateTimer });
  }

  componentWillUnmount() {
    clearInterval(this.state.volumeTimer);
    clearInterval(this.state.playStateTimer);
  }

  getVolume() {
    fetch('/music/volume')
    .then(response => response.json())
    .then(result => this.setState({ volume: result.volume }))
    .catch(err => console.log('Fetch error: ', err));
  }

  getPlayState() {
    fetch('/music/state')
    .then(response => response.json())
    .then((result) => this.setState({ playState: result.state }))
    .catch(err => console.log('Fetch Error: ', err));
  }

  setVolume(volume) {
    console.log(`set at ${volume}`);
    fetch(`/music/volume/${volume}`, {
      method: 'PUT',
    })
    .then(() => this.setState({ volume }))
    .catch(err => console.log('Fetch Error: ', err));
  }

  play() {
    fetch('/music/play')
    .then(() => this.setState({ playState: 'playing' }))
    .catch(err => console.log('Fetch Error: ', err));
  }

  stop() {
    fetch('/music/stop')
    .then(() => this.setState({ playState: 'stopped' }))
    .catch(err => console.log('Fetch Error: ', err));
  }

  playNext() {
    fetch('/music/next')
    .catch(err => console.log('Fetch error: ', err));
  }

  playPrevious() {
    fetch('/music/previous')
    .catch(err => console.log('Fetch error: ', err));
  }

  playState() {
    if (this.state.playState === 'paused' || this.state.playState === 'stopped') {
      return (
        <img
          src={playButton}
          alt="Play"
          className={styles.button}
          onClick={() => this.play()}
        />
      );
    } else {
      return (
        <img
          src={stopButton}
          alt="Stop"
          className={styles.button}
          onClick={() => this.stop()}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div className={styles['button-container']}>
          <img
            src={prevButton}
            alt="Previous"
            className={styles.button}
            onClick={() => this.playPrevious()}
          />
          {this.playState()}
          <img
            src={nextButton}
            alt="Next"
            className={styles.button}
            onClick={() => this.playNext()}
          />
        </div>
        <div className={styles['volume-control-container']}>
          <img
            src={volumeIcon}
            alt="Volume"
            className={styles['volume-icon']}
          />
          <input
            className={styles.volume}
            type="range"
            value={this.state.volume}
            style={{ marginTop: '40px' }}
            onChange={event => this.setState({ volume: event.target.value })}
            onMouseUp={event => this.setVolume(event.target.value)}
          />
        </div>
      </div>
    );
  }
}
