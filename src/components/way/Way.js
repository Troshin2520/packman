import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ACTION_FEED_ATE} from '../../constants';
import './Way.less';

class Way extends Component {

  constructor(props) {
    super(props);
    this.types = ['empty', 'feed', 'pill'];
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.x === nextProps.x && this.props.y === nextProps.y) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    if (this.props.has === 2 || this.props.has === 1) {
      this.props.onChangeState(ACTION_FEED_ATE, {type: this.props.has});
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
