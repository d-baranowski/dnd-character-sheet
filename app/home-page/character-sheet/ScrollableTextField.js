import React from 'react';

class ScrollableTextField extends React.PureComponent {
  constructor() {
    super();
    this.scollMe = React.createRef();
  }

  isScrollable = () => {
    const element = this.scollMe.current;
    const currentScroll = element.scrollTop;

    let canUpdateScrollTop = false;
    element.scrollTop = currentScroll + 1;
    if (element.scrollTop !== currentScroll) {
      canUpdateScrollTop = true;
    }

    element.scrollTop = currentScroll - 2;
    if (element.scrollTop !== currentScroll) {
      canUpdateScrollTop = true;
    }

    return canUpdateScrollTop;
  };

  wheel = (e) => {
    const {current} = this.scollMe;
    current.scrollTop += (e.deltaY / 6);
    if (this.isScrollable()) {
      e.stopPropagation();
    }
  };

  render() {
    return (
      <React.Fragment>
        <foreignObject x={this.props.x} y={this.props.y}>
          <p
            ref={this.scollMe}
            style={{
              padding: 10,
              height: `${this.props.height - 18}px`,
              width: `${this.props.width}px`,
              border: 'none',
              fontSize: this.props.fontSize || 'x-small',
              fontFamily: 'Scala Sans Offc',
              overflowWrap: 'break-word',
              overflow: 'hidden',
              whiteSpace: 'pre-line'
            }}
          >
            {this.props.children}
          </p>
        </foreignObject>
        <rect
          fill="transparent"
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          onMouseLeave={this.props.onMouseLeave}
          onMouseOver={this.props.onMouseOver}
          onClick={this.props.onClick}
          onWheel={(e) => this.wheel(e)}
        />
      </React.Fragment>
    );
  }
}

export default ScrollableTextField;
