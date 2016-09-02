// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';
import MusicInfo        from './components/MusicInfo.jsx';
import MusicControls    from './components/MusicControls.jsx';

// create a React Component called _App_
export default class App extends React.Component{

  constructor() {
    super();

    this.state = {
      artist: 'Artist',
      track: 'Track',
      album: 'Album',
      albumCoverURL: '/img/missing_album.png',
      playState: 'playing'
    }
  }

  render() {
    return (
      <div>
        <h1>SONOS</h1>
        <MusicInfo 
          artist={this.state.artist}
          track={this.state.track}
          album={this.state.album}
          albumCoverURL={this.state.albumCoverURL} />
        <MusicControls />
      </div>
    )
  };
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'));