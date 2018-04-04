import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ACTION_FEED_ATE, ACTION_PILL_ATE} from '../../constants';
import feed from "../../resources/sounds/feed.mp3";
import eat from "../../resources/sounds/eat.mp3";
import './Way.less';

class Way extends Component {

  constructor(props) {
    super(props);
    this.types = ['empty', 'feed', 'pill'];
    this.feedSound = new Audio(feed);
    this.eatSound = new Audio(eat);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.x === nextProps.x && this.props.y === nextProps.y) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    if (this.props.has === 2 || this.props.has === 1) {
      this.props.onChangeState(ACTION_FEED_ATE, this.props.has);
      if(this.props.has === 1) {
        this.feedSound.play();
      } else {
        this.props.onChangeState(ACTION_PILL_ATE, {});
        this.eatSound.play();
      }
    }
  }

  render() {
    const index = this.props.has || 0;
    return (<div className={`way ${this.types[index]}`}>
      <div></div>
    </div>);
  }
}

Way.propTypes = {
  has: PropTypes.oneOf([0, 1, 2]),
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

Way.defaultProps = {
  has: 0
};

export default connect(
  (state, props) => {
    return {has: state.field[props.y][props.x]};
  },
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Way);
