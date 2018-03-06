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
            <Spider color="blue" dirX="left" dirY="top" />
            <Spider color="red" dirX="right" dirY="middle"  />
            <Spider color="yellow" dirX="left" dirY="center"  />
            <Spider color="green" dirX="right" dirY="bottom"  />
            <Spider color="drugged" />
        </div>
      </div>
    );
  }
}

export default App;
