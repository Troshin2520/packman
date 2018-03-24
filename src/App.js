import React, {Component} from 'react';
import Pacman from './components/pacman/Pacman';
import Breaks from './components/breaks/Breaks';
import Spider from './components/spider/Spider';
import Way from './components/way/Way';
import Gates from './components/gates/Gates';
import {connect} from 'react-redux';
import {ACTION_CHANGE_ZONE} from './constants';
import './App.less';


class App extends Component {

  constructor(props) {
    super(props);
    this.spiders = [];
  }

  spiderAnimationEnd() {
    //console.log(this);
  }

  pacmanAnimationEnd() {

  }

  componentWillReceiveProps(nextProps) {
   // console.log(nextProps);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    if(typeof this.props.next != 'undefined') {
      setTimeout(() => {
        this.props.onChangeState(ACTION_CHANGE_ZONE, this.props.next);
      }, 3000);
    }
  }

  componentDidUpdate() {
    if(typeof this.props.next != 'undefined') {
      setTimeout(() => {
        this.props.onChangeState(ACTION_CHANGE_ZONE, this.props.next);
      }, 3000);
    }
  }

  render() {
    return (<div className="App">
        <Pacman {...this.props.pacman} animationEnd={this.pacmanAnimationEnd}/>
        {this.props.spiders.map((spider, i) => {
          return <Spider key={`s${i}`} {...spider} animationEnd={this.spiderAnimationEnd}/>;
        })}
        <div className="field">
          {this.props.field.map((line, i) => {
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

export default connect(
  state => state.zone,
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(App);
