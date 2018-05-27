import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Pacman.less';
import {ACTION_CHECK_POSITION, ACTION_MOVE_PACMAN, ACTION_PACMAN_EAT, BLOCK_SIZE, directions} from '../../constants';
import ReactDOM from "react-dom";

class Pacman extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      this.props.x === nextProps.x &&
      this.props.y === nextProps.y &&
      this.props.move === nextProps.move
    );
  }

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      node.style.animation = 'none';
      node.offsetHeight;
      node.style.animation = '';
    }
  }

  componentDidMount = () => {
    this.updatePosition();
  }

  onAnimationEnd = () => {
    this.updatePosition();
  }

  updatePosition() {
    const {onChangeState, ...params} = this.props;
    this.props.onChangeState(ACTION_PACMAN_EAT, params);
    this.props.onChangeState(ACTION_MOVE_PACMAN, params);
  }

  render() {
    const {move, x, y} = this.props;
    return (
      <div className={`pacman  move-${move}`}
           style={{top: `${y * BLOCK_SIZE}rem`, left: `${x * BLOCK_SIZE}rem`}}
           onAnimationEnd={this.onAnimationEnd}>
        <div className={`turn-${move}`}>
          <div className="top">&bull;</div>
          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}

Pacman.propTypes = {
  next: PropTypes.oneOf(Object.values(directions)).isRequired,
  move: PropTypes.oneOf(Object.values(directions)).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};


export default connect(
  state => state.pacman,
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Pacman);
