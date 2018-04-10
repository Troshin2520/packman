import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Spider.less';
import {ACTION_MOVE_SPIDER, ACTION_CHECK_POSITION, BLOCK_SIZE, directions, colors} from '../../constants';

class Spider extends Component {

  constructor(props) {
    super(props);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
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
    this.props.onChangeState(ACTION_CHECK_POSITION, {});
  }


  render() {
    return (<div className={`spider ${this.props.color}
                             ${this.props.drugged > 0 ? 'drugged' : ''}
                             ${this.props.drugged < 0 ? 'eaten' : ''}
                             move-${this.props.move}
                             move-speed-${this.props.speed}
                             turn-${this.props.move}`}
                 style={{top: `${this.props.y * BLOCK_SIZE}rem`,
                         left: `${this.props.x * BLOCK_SIZE}rem`}}
                 onAnimationEnd={this.onAnimationEnd}>
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
    </div>);
  }
}

Spider.propTypes = {
  color: PropTypes.oneOf(colors).isRequired,
  move: PropTypes.oneOf(Object.values(directions)),
  drugged: PropTypes.number,
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