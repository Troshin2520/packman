import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Spider.less';

class Spider extends Component {

  constructor(props) {
    super(props);
    this.state = {x:0, y:0, move:'top', ...props};
  }

  render() {
    return (<div className={`spider spider-${this.state.color} move-${this.state.move}`}
                 style={{top:`${this.state.y}rem`, left:`${this.state.x}rem`}}
                 onAnimationEnd={this.props.animationEnd.bind(this)}>
              <div className="spider-body">
                <div className="spider-eyes">
                  <div className="spider-pupils"></div>
                </div>
                <div className="spider-eyes">
                  <div className="spider-pupils"></div>
                </div>
              </div>
              <div className="spider-bottom">
                <div className="spider-claws">
                  <div className="spider-claw"></div>
                  <div className="spider-claw"></div>
                  <div className="spider-claw"></div>
                  <div className="spider-claw"></div>
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