import React, {Component} from 'react';
import './Breaks.less';

class Breaks extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (<div className="wall">
      <div className="stone"></div>
      <div className="stone"></div>
      <div className="stone-half"></div>
      <div className="stone"></div>
      <div className="stone-half"></div>
      <div className="stone"></div>
      <div className="stone"></div>
      <div className="stone-half"></div>
      <div className="stone"></div>
      <div className="stone-half"></div>
    </div>);
  }
}

export default Breaks;