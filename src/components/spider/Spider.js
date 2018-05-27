import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Spider.less';
import {
  ACTION_MOVE_SPIDER,
  ACTION_CHECK_POSITION,
  BLOCK_SIZE,
  SPIDER_EATEN,
  directions,
  colors
} from '../../constants';

class Spider extends Component {

  constructor(props) {
    super(props);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
  }

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      node.style.animation = 'none';
      node.offsetHeight;
      node.style.animation = '';
    }
  }

  onAnimationEnd() {
    const {onChangeState, ...params} = this.props;
    this.props.onChangeState(ACTION_MOVE_SPIDER, params);
  }

  onAnimationStart() {
    const {onChangeState, ...params} = this.props;
    this.props.onChangeState(ACTION_CHECK_POSITION, params);
  }


  render() {
    const {
      color,
      drugged,
      move,
      speed,
      x,
      y
    } = this.props;
    return (
      <div className={`spider ${color}
                             ${drugged && 'drugged'}
                             ${drugged === SPIDER_EATEN && 'eaten'}
                             move-${move}
                             move-speed-${speed}
                             turn-${move}`}
           style={{
             top: `${y * BLOCK_SIZE}rem`,
             left: `${x * BLOCK_SIZE}rem`
           }}
           onAnimationEnd={this.onAnimationEnd}
           onAnimationStart={this.onAnimationStart}>
        <div className="body">
          <div className="eyes">
            <div className="pupils"></div>
          </div>
          <div className="eyes">
            <div className="pupils"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="claws">
            <div className="claw"></div>
            <div className="claw"></div>
            <div className="claw"></div>
            <div className="claw"></div>
          </div>
        </div>
      </div>
    );
  }
}

Spider.propTypes = {
  color: PropTypes.oneOf(colors).isRequired,
  move: PropTypes.oneOf(Object.values(directions)),
  drugged: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

Spider.defaultProps = {
  pursues: false,
  drugged: 0,
  move: directions.up
};


export default connect(
  (state, props) => state.spiders[props.color],
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Spider);
