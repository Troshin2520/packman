import React, {Component} from 'react';
import './Pacman.less';

class Pacman extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="pacman">
      <div className="top">&bull;</div>
      <div className="bottom"></div>
    </div>);
  }
}

export default Pacman;