import React from 'react';

export default class MusicControls extends React.Component {
  
  constructor() {
    super();

    this.state = {
      playState: 'playing',
      volume: '50'
    }

    this.getVolume();
    this.getPlayState();
  }

  getPlayState() {
    fetch('/music/state')
    .then(response => response.json())
    .then(result => this.setState({playState: result.state}))
    .catch(err => console.log('Fetch Error: ', err));
  }

  getVolume() {
    fetch('/music/volume')
    .then(response => response.json())
    .then(result => this.setState({volume: result.volume}))
    .catch(err => console.log('Fetch error: ',err));
  }

  setVolume(volume) {
    console.log('Volume set at: ',volume);
    fetch(`/music/volume/${volume}`, {
      method: 'PUT'
    })
    .then(response => console.log('Response: ',response))
    .catch(err => console.log('Fetch Error: ', err));
  }

  play() {
    fetch('/music/play')
    .then(response => response.json())
    .then(result => console.log(result));
  }

  stop() {
    fetch('/music/stop')
    .then(response => response.json())
    .then(result => console.log(result));
  }

  playState() {
    if(this.state.playState === 'paused' || this.state.playState === 'stopped') {
      return (
        <img 
          src="/img/play.svg"
          className="play"
          onClick={this.play} />
      )
    } else {
      return (
        <img
          src="/img/stop.svg"
          className="stop"
          onClick={this.stop} />
      )
    }
  }

  render() {
    return (
      <div className="track-controls">
        <div className="track-control-buttons">
          <img src="/img/previous.svg" className="previous"/>
          {this.playState()}
          <img src="/img/next.svg" className="next" />
        </div>
        <div className="volume-control">
          <img src="/img/volume.svg" className="volume-icon" />
          <input
            className="volume"
            type="range"
            value={this.state.volume}
            onChange={event => this.setState({volume: event.target.value})}
            onMouseUp={event => this.setVolume(event.target.value)} />
        </div>
      </div>
    )
  }
}
