import React from 'react';
import PropTypes from 'prop-types';
import InteractiveElement from "../InteractiveElement";

class ActualSlots extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  render() {
    const {isHovered} = this.state;
    const {fillPath, borderPath, rectX, rectY, rectWidth, rectHeight} = this.props;

    return (
      <g>
        <g filter={isHovered ? "url(#sofGlow)" : undefined}>
          <path d={fillPath}
                fill="#fff"
          />
          <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path d={borderPath}/>
          </g>
        </g>
        {this.props.children}
        <rect
          fill="transparent"
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeight}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.onClick}
        />
      </g>
    );
  }
}

ActualSlots.propTypes = {};

export default ActualSlots;
