import React, { Component } from 'react';
import './App.css';
import Pacman from  './components/pacman/Pacman';
import Breaks from  './components/breaks/Breaks';
import Spider from  './components/spider/Spider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Pacman />
        </div>
        <div>
            <Breaks />
        </div>
        <div>
            <Spider color="blue" />
            <Spider color="red" />
            <Spider color="yellow" />
            <Spider color="green" />
            <Spider color="drugged" />
        </div>
      </div>
    );
  }
}

export default App;
