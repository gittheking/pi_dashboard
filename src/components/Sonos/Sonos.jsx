import React            from 'react';
import MusicInfo        from './MusicInfo/MusicInfo.jsx';
import MusicControls    from './MusicControls/MusicControls.jsx';
import styles           from './Sonos.css';
import musicNotes       from '../../img/music-notes.svg';

export default class Sonos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      trackInfoInterval: undefined,
    };
  }

  componentDidMount() {
    const trackInfoInterval = setInterval(() => {
      this.props.getTrackInfo();
    }, 5000);
    this.setState({ trackInfoInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.trackInfoInterval);
  }

  render() {
    return (
      <div>
        <MusicInfo
          artist={this.props.artist}
          title={this.props.title}
          album={this.props.album}
          albumArtURL={this.props.albumArtURL}
        />
        <MusicControls />
      </div>
    );
  }
}

Sonos.propTypes = {
  artist: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  album: React.PropTypes.string.isRequired,
  albumArtURL: React.PropTypes.string.isRequired,
  getTrackInfo: React.PropTypes.func.isRequired,
};
