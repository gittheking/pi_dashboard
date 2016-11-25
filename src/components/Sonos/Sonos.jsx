import React            from 'react';
import MusicInfo        from './MusicInfo/MusicInfo.jsx';
import MusicControls    from './MusicControls/MusicControls.jsx';
import styles           from './Sonos.css';

export default class Sonos extends React.Component {

  constructor() {
    super();

    this.state = {
      artist: 'Artist',
      track: 'Track',
      album: 'Album',
      albumCoverURL: '',
      trackInfoInterval: undefined,
    };
  }

  componentWillMount() {
    const trackInfoInterval = setInterval(() => {
      this.getTrackInfo();
    }, 5000);
    this.setState({ trackInfoInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.trackInfoInterval);
  }

  getTrackInfo() {
    fetch('/music/track')
    .then(response => response.json())
    .then((result) => {
      this.setState({
        artist: result.trackInfo.artist,
        track: result.trackInfo.title,
        album: result.trackInfo.album,
        albumCoverURL: result.trackInfo.albumArtURL,
        volume: '50',
      });
    })
    .catch(err => console.log('Fetch error: ', err));
  }

  render() {
    return (
      <div>
        <MusicInfo
          artist={this.state.artist}
          track={this.state.track}
          album={this.state.album}
          albumCoverURL={this.state.albumCoverURL}
        />
        <MusicControls
          playState={this.state.playState}
          volume={this.state.volume}
        />
      </div>
    );
  }
}
