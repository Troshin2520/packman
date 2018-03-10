import React, {Component} from 'react';
import './Breaks.less';

class Breaks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="wall">
      <div className="wall-stone"></div>
      <div className="wall-stone"></div>
      <div className="wall-stone-half"></div>
      <div className="wall-stone"></div>
      <div className="wall-stone-half"></div>
      <div className="wall-stone"></div>
      <div className="wall-stone"></div>
      <div className="wall-stone-half"></div>
      <div className="wall-stone"></div>
      <div className="wall-stone-half"></div>
    </div>);
  }
}

export default Breaks;