import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pacman.less';

class Pacman extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (<div className="pacman"
                 style={{top:`${this.props.y}rem`, left:`${this.props.x}rem`}}
                 onAnimationEnd={this.props.animationEnd.bind(this)}>
      <div className="top">&bull;</div>
      <div className="bottom"></div>
    </div>);
  }
}

Pacman.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  animationEnd: PropTypes.func.isRequired
};

export default Pacman;