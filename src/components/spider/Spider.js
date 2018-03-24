import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Spider.less';

class Spider extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (<div className={`spider ${this.props.color} move-${this.props.move}`}
                 style={{top:`${this.props.y}rem`, left:`${this.props.x}rem`}}
                 onAnimationEnd={this.props.animationEnd.bind(this)}>
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
  color: PropTypes.oneOf(['red', 'green', 'blue', 'orange', 'drugged']).isRequired,
  move: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  x: PropTypes.number,
  y: PropTypes.number,
  animationEnd: PropTypes.func.isRequired
};

export default Spider;