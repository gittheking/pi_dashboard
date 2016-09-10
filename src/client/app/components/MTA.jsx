import React from 'react';


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
    .then(result => {
      let trains = [];
      result.status.forEach(train => trains.push(train.name[0]))
      this.setState({trains: trains});
    })
  }

  displayTrains() {
    return this.state.trains.map(line => {
      return (
        <li key={line}>
          <div className="subway-list-item">
            {line}
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Trains</h1>
        <h2>Current Line</h2>
        <h2>{this.state.currentLine}</h2>
        <h3>All Lines</h3>
        <ul className="subway-list">
          {this.displayTrains()}
        </ul>
      </div>
    )
  };
}