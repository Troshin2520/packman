import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ACTION_FEED_ATE, ACTION_PILL_ATE} from '../../constants';
import Breaks from '../breaks/Breaks';
import Way from '../way/Way';
import Gates from '../gates/Gates';
import './Field.less';

class Field extends Component {

  constructor(props) {
    super(props);
    this.updateWayState = this.updateWayState.bind(this);
  }

  updateWayState(action) {
    this.props.onChangeState(action === 1 ? ACTION_FEED_ATE : ACTION_PILL_ATE, {});
  }

  render() {
    const field = this.props.field.map((line, i) => {
      return (<div
        key={i}
        tabIndex="1"
        className="row">
        {line.map((cell, j) => {
          let key = `w${i}.${j}`;
          switch (cell) {
            case 0:
            case 1:
            case 2:
              return <Way
                x={j}
                y={i}
                key={key}
                has={cell}
                onChangeState={this.updateWayState}
              />
            case 4:
              return <Breaks key={key}/>
            case 8:
              return <Gates key={key}/>
            default:
          }
          return '';
        })}
      </div>)
    });
    return <div className="field">{field}</div>;
  }
}

Field.propTypes = {};


export default connect(
  ({field}) => {
    return {field};
  },
  dispatch => ({
    onChangeState(type, item) {
      dispatch({type: type, payload: item});
    }
  })
)(Field);
