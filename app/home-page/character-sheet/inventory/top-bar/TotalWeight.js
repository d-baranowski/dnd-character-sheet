import React from 'react';
import { openModal } from '../state/equipedActions';
import connect from 'react-redux/es/connect/connect';

const TotalWeight = ({ totalWeight }) => (
  <g>
    <text
      x="354.29"
      y="133.55"
      strokeWidth="1.33"
      fontFamily="Scala Sans Offc"
      fontSize="9.33"
      fontWeight="400"
    >
      <tspan x="354.29" y="133.55">
        TOTAL WEIGHT
      </tspan>
    </text>
    <foreignObject x="354" y={108}>
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
        {totalWeight}
      </div>
    </foreignObject>
  </g>
);

TotalWeight.propTypes = {};

export const mapStateToTotalWeight = state =>
  Object.values(state.equipmentReducer.inventory).reduce(
    (accumulator, value) =>
      Object.values(value).reduce(
        (total, item) =>
          accumulator + parseFloat(item.weight) * parseInt(item.quantity),
        0
      ),
    0
  );

const mapStateToProps = state => ({
  totalWeight: mapStateToTotalWeight(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: slotName => dispatch(openModal(slotName))
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalWeight);
