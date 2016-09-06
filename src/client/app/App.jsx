import React            from 'react';
import ReactDOM         from 'react-dom';
import Sonos            from './components/Sonos.jsx';


export default class App extends React.Component {

  render() {
    return (
      <Sonos />
    )
  };
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'));