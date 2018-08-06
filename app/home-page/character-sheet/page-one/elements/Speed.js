import React from 'react';
import {connect} from 'react-redux';
import getValue from '../../../../form/getValue';
import {setDrawerRoute} from '../../../menu-drawer/state/menuDrawerActions';
import createSimpleForm from '../../../../form/createSimpleForm';



const SpeedDrawerRoute = "speed";
createSimpleForm("speed", "Speed", "speed", SpeedDrawerRoute);

class Speed extends React.PureComponent {
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
    const {speed} = this.props;

    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <path id="SpeedFill"
                d="M516.833 187.364v52.09l-5.6 5.6h-56.37l-5.614-5.6v-52.09l5.614-5.613h56.37z"
                fill="#fff"
          />
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="SpeedBorder" d="M383.457 656.487h-42.215l-5.012-5.013V612.22l5.012-5.012h42.215l5.013 5.012v39.253zm3.638-5.583v-3.875c-.408 1.222-.987 2.525-1.799 3.756v.07h-.046c-1.155 1.728-2.782 3.295-5.07 4.257h2.707zm-8.852-42.32h-31.812c-2.614.632-4.706 2.072-6.278 4.279v37.947c1.367 1.915 3.37 3.579 6.303 4.302h31.812c2.614-.632 4.706-2.071 6.278-4.278v-37.948c-1.366-1.915-3.37-3.58-6.303-4.302m-40.638 36.174c.302 1.417.842 3.18 1.798 4.873V614.05c-.167.297-.343.579-.495.899-.657 1.384-1.057 2.775-1.303 3.939zm47.691 4.888c.167-.297.344-.58.495-.898.657-1.385 1.058-2.776 1.304-3.94v-25.87c-.303-1.417-.843-3.181-1.799-4.872zm-43.483 5.466h2.707c-2.289-.962-3.915-2.53-5.07-4.256h-.047v-.071c-.812-1.231-1.39-2.534-1.798-3.756v3.875zm-4.208-42.321v3.876c.407-1.221.986-2.525 1.798-3.755v-.072h.046c1.156-1.726 2.782-3.294 5.071-4.256h-2.707zm45.282-4.207h-2.707c2.288.962 3.915 2.53 5.07 4.256h.046v.072c.812 1.23 1.391 2.534 1.8 3.755v-3.876z" />
          </g>
        </g>
        <text
          transform="matrix(1.33333 0 0 1.33333 470.658 240.768)"
          fontWeight={700}
          fontSize={6.5}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0 3.471 7.085 10.5885 14.092">
            SPEED
          </tspan>
        </text>
        <foreignObject x="452" y="190">
          <div>
            <p style={{
              height: '30px',
              width: '60px',
              border: 'none',
              fontFamily: 'Scala Sans Offc',
              fontSize: 'x-large',
              textAlign: 'center' }}>
              {speed}ft
            </p>
          </div>
        </foreignObject>
        <rect
          fill="transparent"
          x="449"
          y="180"
          width="70"
          height="70"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
        />
      </g>
    );
  }
}

const mapStateToProps = (state) => ({
  speed: getValue(state, "speed", "speed") || 0
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(SpeedDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(Speed);
