import React from 'react';

class InteractiveElement extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({ isHovered: true });
  };

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
    const {
      fillPath,
      borderPah,
      rectX,
      rectY,
      rectWidth,
      rectHeigth
    } = this.props;

    return (
      <g>
        <g filter={isHovered && 'url(#sofGlow)'}>
          <path d={fillPath} fill="#fff" />
          <path d={borderPah} />
        </g>
        {this.props.children}
        <rect
          fill="transparent"
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeigth}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.onClick}
          ref={this.props.setWrapperRef}
        />
      </g>
    );
  }
}

export default InteractiveElement;
