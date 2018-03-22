import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Spider.less';

class Spider extends Component {

  constructor(props) {
    super(props);
    this.state = {x:0, y:0, move:'top', ...props};
  }

  render() {
    return (<div className={`spider ${this.state.color} move-${this.state.move}`}
                 style={{top:`${this.state.y}rem`, left:`${this.state.x}rem`}}
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