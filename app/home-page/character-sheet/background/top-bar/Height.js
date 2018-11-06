import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const x = 520;
const Heigth = ({heigth, isHovered}) => (
  <g>
    <text  x={x} y="99.2" strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x={x} y="99.2">HEIGTH</tspan>
    </text>
    <foreignObject  x={x} y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'left' }}>
        {heigth}
      </div>
    </foreignObject>
  </g>
);

Heigth.propTypes = {};

const HoverableHeigth = ({showEditor, heigth}) => (
  <Hoverable
    x={x}
    y={60}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Heigth
      heigth={heigth}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"heigth", label:"heigth", type:"textarea"})(HoverableHeigth);
