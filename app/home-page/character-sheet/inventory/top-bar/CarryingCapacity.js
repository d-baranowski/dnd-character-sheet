import React from 'react';
import PropTypes from 'prop-types';
import getValue from "../../../../form/getValue";
import connect from "react-redux/es/connect/connect";

const CarryingCapacity = ({strength}) => (
  <g>
    <text  x="652.78" y="99.2" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight="400">
      <tspan x="652.78" y="99.2">CARRYING CAPACITY</tspan>
    </text>
    <foreignObject  x="652" y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {strength * 15}
      </div>
    </foreignObject>
  </g>
);

CarryingCapacity.propTypes = {}

const mapStateToProps = (state) => ({
  strength: getValue(state, 'attributes', "Strength") || 0
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CarryingCapacity);
