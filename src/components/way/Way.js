import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Way.less';

class Way extends Component {

  constructor(props) {
    super(props);
    this.types = ['empty', 'feed', 'pill'];
  }

  render() {
    const index = this.props.has || 0;
    return (<div className={`way ${this.types[index]}`}>
      <div></div>
    </div>);
  }
}

Way.propTypes = {
  has: PropTypes.number
};

export default Way;