import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Results.less';
import {
  ACTION_CHANGE_ZONE, ACTION_CHECK_POSITION, ACTION_MOVE_PACMAN, ACTION_PACMAN_EAT, BLOCK_SIZE,
  directions
} from '../../constants';
import ReactDOM from "react-dom";

class Results extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate() {
    if(this.props.feeds === 0) {
      console.log(this.props.zone);
      if(this.props.zone < this.props.zones) {
        this.props.onChangeState(ACTION_CHANGE_ZONE, this.props.zone + 1);
      } else {
        //this.props.onChangeState(ACTION_USER_WON, {});
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return (<div className="results">
      <div className="zone">ZONE: {this.props.zone}</div>
      <div className="score">SCORE: {this.props.score}</div>
    </div>);
  }
}

Results.propTypes = {
  zone: PropTypes.number,
  score: PropTypes.number
};


export default connect(
  state => state.game,
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Results);