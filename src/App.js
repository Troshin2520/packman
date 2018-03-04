import React, { Component } from 'react';
import './App.css';
import Pacman from  './components/pacman/Pacman';
import Breaks from  './components/breaks/Breaks';

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
      </div>
    );
  }
}

export default App;
