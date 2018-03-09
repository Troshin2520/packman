import React, { Component } from 'react';
import './App.less';
import Pacman from  './components/pacman/Pacman';
import Breaks from  './components/breaks/Breaks';
import Spider from  './components/spider/Spider';
import Way from  './components/way/Way';
import Gates from  './components/gates/Gates';


const empty = 0;
const food  = 1;
const wall  = 2;
const drug  = 4;
const gates = 8;

const initialState = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,4,1,1,1,1,2,1,1,1,1,4,2],
    [2,1,2,2,2,1,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,2,1,1,1,1,1,2],
    [2,1,2,0,0,0,0,0,0,0,2,1,2],
    [2,1,2,0,2,8,8,8,2,0,2,1,2],
    [0,1,2,0,2,0,0,0,2,0,2,1,0],
    [2,1,2,0,2,2,2,2,2,0,2,1,2],
    [2,1,2,1,1,1,0,1,1,1,2,1,2],
    [2,1,1,1,1,1,2,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,1,2,2,2,1,2],
    [2,4,1,1,1,1,2,1,1,1,1,4,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2]
];

class App extends Component {
  render() {
    return ( <div className="App">
        <div>
            <Pacman />
        </div>
        <div className="field">
            {initialState.map((line, i) => {
                return (<div key={i} className="row">
                    {line.map((cell, j) => {
                        let key = `${i}.${j}`;
                        switch (cell) {
                            case 0:
                                return <Way key={key} type="empty" />
                            case 1:
                                return <Way key={key} type="feed" />
                            case 2:
                                return <Breaks key={key} />
                            case 4:
                                return <Way key={key} type="tablet" />
                            case 8:
                                return <Gates key={key} />
                        }
                    })}
                </div>);
            })}
        </div>
        <div>
            <Spider color="blue" dirX="left" dirY="top" />
            <Spider color="red" dirX="right" dirY="middle"  />
            <Spider color="orange" dirX="left" dirY="center"  />
            <Spider color="green" dirX="right" dirY="bottom"  />
            <Spider color="drugged" />
        </div>
      </div>
    );
  }
}

export default App;
