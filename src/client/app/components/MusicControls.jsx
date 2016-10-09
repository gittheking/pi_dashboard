import React from 'react';
import styles from './MusicControls_style.js';

export default class MusicControls extends React.Component {

  constructor() {
    super();

    this.state = {
      playState: 'playing',
      volume: '50',
    };

    this.getVolume();
    this.getPlayState();
  }

  getPlayState() {
    fetch('/music/state')
    .then(response => response.json())
    .then(result => this.setState({ playState: result.state }))
    .catch(err => console.log('Fetch Error: ', err));
  }

  getVolume() {
    fetch('/music/volume')
    .then(response => response.json())
    .then(result => this.setState({ volume: result.volume }))
    .catch(err => console.log('Fetch error: ',err));
  }

  setVolume(volume) {
    console.log('Volume set at: ',volume);
    fetch(`/music/volume/${volume}`, {
      method: 'PUT',
    })
    .then(response => console.log('Response: ', response))
    .catch(err => console.log('Fetch Error: ', err));
  }

  play() {
    fetch('/music/play')
    .then(response => response.json())
    .then((result) => {
      this.setState({ playState: 'playing' });
    })
    .catch(err => console.log('Fetch Error: ', err));
  }

  stop() {
    fetch('/music/stop')
    .then(response => response.json())
    .then((result) => {
      this.setState({ playState: 'stopped' });
    })
    .catch(err => console.log('Fetch Error: ', err));
  }

  playNext() {
    fetch('/music/next')
    .then(response => response.json())
    .catch(err => console.log('Fetch error: ', err));
  }

  playPrevious() {
    fetch('/music/previous')
    .then(response => response.json())
    .catch(err => console.log('Fetch error: ', err));
  }

  playState() {
    if (this.state.playState === 'paused' || this.state.playState === 'stopped') {
      return (
        <img
          src="/img/play.svg"
          alt="Play"
          style={styles.controlButtons}
          onClick={this.play.bind(this)}
        />
      );
    } else {
      return (
        <img
          src="/img/stop.svg"
          alt="Stop"
          style={styles.controlButtons}
          onClick={this.stop.bind(this)}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div style={styles.controlButtonsContainer}>
          <img
            src="/img/previous.svg"
            alt="Previous"
            style={styles.controlButtons}
            onClick={this.playPrevious.bind(this)}
          />
          {this.playState()}
          <img
            src="/img/next.svg"
            alt="Next"
            style={styles.controlButtons}
            onClick={this.playNext.bind(this)}
          />
        </div>
        <div style={styles.volumeControlContainer}>
          <img
            src="/img/volume.svg"
            alt="Volume"
            style={styles.volumeIcon}
          />
          <input
            className="volume"
            style={styles.input}
            type="range"
            value={this.state.volume}
            onChange={event => this.setState({ volume: event.target.value })}
            onMouseUp={event => this.setVolume(event.target.value)}
          />
        </div>
      </div>
    );
  }
}
