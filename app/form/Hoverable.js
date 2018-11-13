import React from 'react';

class Hoverable extends React.PureComponent {
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
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { isHovered: this.state.isHovered }));

    return (
      <React.Fragment>
        {childrenWithProps}
        <rect
          fill="transparent"
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.onClick}
          ref={this.props.setWrapperRef}
        />
      </React.Fragment>
    );
  }
}

export default Hoverable;
