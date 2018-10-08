import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import getValue from "../../../../form/getValue";

const Encumbered = ({strength}) => (
  <g>
    <text  x="516.8" y="133.55" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight="400">
      <tspan x="516.8" y="133.55">ENCUMBERED</tspan>
    </text>
    <foreignObject  x="516" y={108}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {strength * 5}
      </div>
    </foreignObject>
  </g>
);

Encumbered.propTypes = {};

const mapStateToProps = (state) => ({
  strength: getValue(state, 'attributes', "Strength") || 0
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Encumbered);
