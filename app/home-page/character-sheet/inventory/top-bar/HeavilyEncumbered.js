import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import getValue from "../../../../form/getValue";

const HeavilyEncumbered = ({strength}) => (
  <g>
    <text  x="652.78" y="133.55" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight="400">
      <tspan x="652.78" y="133.55">HEAVILY ENCUMBERED</tspan>
    </text>
    <foreignObject  x="652" y={108}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {strength * 10}
      </div>
    </foreignObject>
  </g>
);

HeavilyEncumbered.propTypes = {};

const mapStateToProps = (state) => ({
  strength: getValue(state, 'attributes', "Strength") || 0
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HeavilyEncumbered);
