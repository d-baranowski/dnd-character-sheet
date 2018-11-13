import React from 'react';

class ScrollableTextField extends React.PureComponent {
  constructor() {
    super();
    this.scollMe = React.createRef();
  }

  isScrollable = () => {
    const {current} = this.scollMe;
    return current.scrollHeight > current.clientHeight;
  };

  wheel = (e) => {
    const {current} = this.scollMe;
    const deltaMove =  Math.round(e.deltaY / 6);
    current.scrollTop = current.scrollTop + deltaMove;

    if (this.isScrollable()) {
      e.stopPropagation();
    }
  };

  ensureCursorInView = () => {
    const {current} = this.scollMe;

    if (!current) {
      return;
    }

    const cursor = current.getElementsByClassName('blinks')[0];

    if (!cursor) {
      return;
    }

    //Determine container top and bottom
    let cTop = current.scrollTop;
    let cBottom = cTop + current.clientHeight;

    //Determine element top and bottom
    let eTop = cursor.offsetTop;
    let eBottom = eTop + cursor.clientHeight;

    //Check if out of view
    current.scrollTop = cursor.offsetTop + cursor.clientHeight;
  };

  render() {
    this.ensureCursorInView();
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
          ref={this.props.setWrapperRef}
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
