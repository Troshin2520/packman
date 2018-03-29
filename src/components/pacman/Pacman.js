import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Pacman.less';
import {ACTION_MOVE_PACMAN, BLOCK_SIZE} from '../../constants';

class Pacman extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  onAnimationEnd() {

  }

  render() {
    return (<div className="pacman"
                 style={{top:`${this.props.y * BLOCK_SIZE}rem`, left:`${this.props.x * BLOCK_SIZE}rem`}}
                 onAnimationEnd={this.onAnimationEnd}>
              <div className="top">&bull;</div>
              <div className="bottom"></div>
            </div>);
  }
}

Pacman.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

Pacman.defaultProps = {
  x: 0,
  y: 0
};

export default connect(
  state => state.pacman,
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Pacman);