import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Way.less';

class Way extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={`way ${this.props.has || 'empty'}`}>
      <div></div>
    </div>);
  }
}

Way.propTypes = {
  has: PropTypes.oneOf(['empty', 'feed', 'pill'])
};

export default Way;