import React, {Component} from 'react';
import Pacman from './components/pacman/Pacman';
import Breaks from './components/breaks/Breaks';
import Spider from './components/spider/Spider';
import Way from './components/way/Way';
import Gates from './components/gates/Gates';
import './App.less';

const initialState = {
    field: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 4, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 2],
      [2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2],
      [2, 1, 2, 0, 2, 8, 8, 8, 2, 0, 2, 1, 2],
      [0, 1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 1, 0],
      [2, 1, 2, 0, 2, 2, 2, 2, 2, 0, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2],
      [2, 4, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    speed:4,
    pacman: {x:6, y:8, dir: 'left'},
    spiders: [
      {color: 'red', x:6 * 4, y:6 * 4, dirY:'top', dirX:'center', move:'top'},
      {color: 'green', x:6 * 4, y:6 * 4, dirY:'top', dirX:'center', move:'top'},
      {color: 'orange', x:5 * 4, y:6 * 4, dirY:'middle', dirX:'right', move:'left'},
      {color: 'blue', x:7 * 4, y:6 * 4, dirY:'middle', dirX:'left', move:'right'}
    ]
  };


class App extends Component {

  constructor(props) {
    super(props);
    this.spiders = [];
  }

  spiderAnimationEnd() {
    console.log(this);
  }

  render() {
    return (<div className="App">
        <Pacman/>
        {initialState.spiders.map((spider, i) => {
            return <Spider key={`s${i}`} {...spider} animationEnd={this.spiderAnimationEnd} />;
          })}
        <div className="field">
          {initialState.field.map((line, i) => {
            return (<div key={i} className="row">
              {line.map((cell, j) => {
                let key = `w${i}.${j}`;
                switch (cell) {
                  case 0:
                    return <Way key={key}/>
                  case 1:
                    return <Way key={key} has="feed"/>
                  case 2:
                    return <Breaks key={key}/>
                  case 4:
                    return <Way key={key} has="pill"/>
                  case 8:
                    return <Gates key={key}/>
                  default:
                }
                return '';
              })}
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default App;
