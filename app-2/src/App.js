import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [
        'United States', 'Germany', 'Australia', 'Brazil', 'Lebanon'
      ]
    }
  }
  render() {
    let countriesToDisplay = this.state.countries.map((elem, index) => {
      return (
        <h2 key={index}>{elem}</h2>

      )
    })
    return (
      <div className="App">
        {countriesToDisplay}
      </div>
    );
  }
}

export default App;
