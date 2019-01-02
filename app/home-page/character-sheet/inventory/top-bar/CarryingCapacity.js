import React from 'react';
import PropTypes from 'prop-types';
import { getValue } from '../../page-one/elements/attributes/state/attributesReducer';
import connect from 'react-redux/es/connect/connect';

const CarryingCapacity = ({ strength }) => (
  <g>
    <text
      x="652.78"
      y="99.2"
      strokeWidth="1.33"
      fontFamily="Scala Sans Offc"
      fontSize="9.33"
      fontWeight="400"
    >
      <tspan x="652.78" y="99.2">
        CARRYING CAPACITY
      </tspan>
    </text>
    <foreignObject x="652" y={74}>
      <div
        style={{
          height: '18px',
          lineHeight: '18px',
          width: '75px',
          border: 'none',
          fontFamily: 'Scala Sans Offc',
          fontSize: 'small',
          textAlign: 'left'
        }}
      >
        {strength * 15}
      </div>
    </foreignObject>
  </g>
);

CarryingCapacity.propTypes = {};

const mapStateToProps = state => ({
  strength: getValue(state, 'Strength')
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CarryingCapacity);
