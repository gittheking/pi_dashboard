import React from 'react';
import MTACurrentLine from './MTACurrentLine.jsx';
import MTALineList from './MTALineList.jsx';

export default class MTA extends React.Component {

  constructor() {
    super();

    this.state = {
      trains: [],
      currentLine: '456'
    };

    this.getTrains();
  }

  getTrains() {
    fetch('/train')
    .then(response => response.json())
    .then((result) => {
      console.log('train response',result);
      const trains = [];
      result.status.forEach(train => trains.push(train.name[0]));
      this.setState({ trains });
    });
  }

  render() {
    return (
      <div>
        <h1>Trains</h1>
        <MTACurrentLine
        currentLine={this.state.currentLine} />
        <MTALineList
        trains={this.state.trains}/>
      </div>
    );
  }
}
