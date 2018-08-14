import React from 'react';
import ScrollableTextField from './ScrollableTextField';

class ScrollableTextElement extends React.PureComponent {
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
    const {fillPath, borderPah, rectX, rectY, rectWidth, rectHeigth, value, fontSize} = this.props;

    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <path d={fillPath}
                fill="#fff"
          />
          <path d={borderPah} />
        </g>
        {this.props.children}
        <ScrollableTextField
          fill="transparent"
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeigth}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          fontSize={fontSize}
          onClick={this.props.onClick}
        >
          {value}
        </ScrollableTextField>
      </g>
    )
  }
}

export default ScrollableTextElement;
