import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import getValue from "../../../../form/getValue";

const Status = ({status}) => (
  <g>
    <text  x="354.29" y="99.2" strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight="400">
      <tspan x="354.29" y="99.2">STATUS</tspan>
    </text>
    <foreignObject  x="354" y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'left' }}>
        {status}
      </div>
    </foreignObject>
  </g>
);

Status.propTypes = {};

const mapStateToProps = (state) => {
  const strength = getValue(state, 'attributes', "Strength") || 0;
  const totalWeight = Object.values(state.equipmentReducer.inventory).reduce((accumulator, value) => {
    return Object.values(value).reduce((total, item) => {
      return accumulator + parseFloat(item.weight) * parseInt(item.quantity);
    }, 0);
  }, 0);

  if (totalWeight > strength * 15) {
    return {status: "Immobile"}
  }

  if (totalWeight > strength * 10) {
    return {status: "Heavily Encumbered"}
  }

  if (totalWeight > strength * 5) {
    return {status: "Encumbered"}
  }

  return {status: "Normal"}
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Status);
