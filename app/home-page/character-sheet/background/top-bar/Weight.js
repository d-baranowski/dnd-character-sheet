import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const x = 670;
const Weight = ({weigth, isHovered}) => (
  <g>
    <text  x={x} y="99.2" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x={x} y="99.2">WEIGHT</tspan>
    </text>
    <foreignObject  x={x} y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {weigth}
      </div>
    </foreignObject>
  </g>
);

Weight.propTypes = {};

const HoverableWeigth = ({showEditor, weight}) => (
  <Hoverable
    x={x}
    y={60}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Weight
      weigth={weight}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"weight", label:"weight", type:"textarea"})(HoverableWeigth);
