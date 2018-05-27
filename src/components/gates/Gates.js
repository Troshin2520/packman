import React, {Component} from 'react';
import './Gates.less';

class Gates extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div className="gates">
        <div></div>
      </div>
    );
  }
}

export default Gates;
