import React, {Component} from 'react';
import PropTypes from 'prop-types';
import feed from "../../resources/sounds/feed.mp3";
import eat from "../../resources/sounds/eat.mp3";
import './Way.less';

const FIELD_TYPE_EMPTY = 0;
const FIELD_TYPE_FEED = 1;
const FIELD_TYPE_PILL = 2;

class Way extends Component {

  constructor(props) {
    super(props);
    this.types = ['empty', 'feed', 'pill'];
    this.feedSound = new Audio(feed);
    this.eatSound = new Audio(eat);
  }

  shouldComponentUpdate({has: nextState}) {
    const {has: currentState} = this.props;
    return currentState !== nextState;
  }

  componentWillUpdate() {
    const {has} = this.props;
    this.props.onChangeState(has);
    if (has === FIELD_TYPE_FEED) {
      this.feedSound.play();
    } else if (has === FIELD_TYPE_PILL) {
      this.eatSound.play();
    }
  }

  render() {
    const {has} = this.props;
    const index = has || FIELD_TYPE_EMPTY;
    return (<div className={`way ${this.types[index]}`}>
      <div></div>
    </div>);
  }
}

Way.propTypes = {
  onChangeState: PropTypes.func,
  has: PropTypes.oneOf([
    FIELD_TYPE_EMPTY,
    FIELD_TYPE_FEED,
    FIELD_TYPE_PILL
  ]),
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

Way.defaultProps = {
  has: FIELD_TYPE_EMPTY
};

export default Way;
