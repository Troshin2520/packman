import React, {Component} from 'react';
import './Way.less';

class Way extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<div className={`way ${this.props.type}`}>
      <div></div>
    </div>);
  }
}

export default Way;