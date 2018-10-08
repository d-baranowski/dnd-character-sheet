import React from 'react';
import PropTypes from 'prop-types';
import getValue from "../../../../form/getValue";
import {connect} from "react-redux";

const PushAndLift = ({strength}) => (
  <g>
    <text  x="517.23" y="99.2" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight="400">
      <tspan x="517.23" y="99.2">PUSH &amp; LIFT</tspan>
    </text>
    <foreignObject  x="517" y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {strength * 30}
      </div>
    </foreignObject>
  </g>
);

PushAndLift.propTypes = {};

const mapStateToProps = (state) => ({
  strength: getValue(state, 'attributes', "Strength") || 0
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PushAndLift);
