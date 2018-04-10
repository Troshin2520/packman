import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Pacman.less';
import {ACTION_CHECK_POSITION, ACTION_MOVE_PACMAN, ACTION_PACMAN_EAT, BLOCK_SIZE, directions} from '../../constants';
import ReactDOM from "react-dom";

class Pacman extends Component {

  constructor(props) {
    super(props);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.x === nextProps.x &&
      this.props.y === nextProps.y &&
      this.props.move === nextProps.move) {
      return false;
    }
    return true;
  }

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      node.style.animation = 'none';
      node.offsetHeight;
      node.style.animation = '';
    }
  }

  componentDidMount() {
    this.updatePosition();
  }

  onAnimationEnd() {
    this.updatePosition();
  }

  updatePosition() {
    const {onChangeState, ...params} = this.props;
    this.props.onChangeState(ACTION_PACMAN_EAT, params);
    this.props.onChangeState(ACTION_MOVE_PACMAN, params);
    this.props.onChangeState(ACTION_CHECK_POSITION, {});
  }

  render() {
    return (<div className={`pacman  move-${this.props.move}`}
                 style={{top: `${this.props.y * BLOCK_SIZE}rem`, left: `${this.props.x * BLOCK_SIZE}rem`}}
                 onAnimationEnd={this.onAnimationEnd}>
      <div className={`turn-${this.props.move}`}>
        <div className="top">&bull;</div>
        <div className="bottom"></div>
      </div>
    </div>);
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