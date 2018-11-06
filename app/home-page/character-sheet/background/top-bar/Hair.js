import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const x = 670;
const moveDown = 35;
const Hair = ({hair, isHovered}) => (
  <g>
    <text  x={x} y={99.2 + moveDown} strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x={x} y={99.2 + moveDown}>HAIR</tspan>
    </text>
    <foreignObject  x={x} y={74 + moveDown}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'left' }}>
        {hair}
      </div>
    </foreignObject>
  </g>
);

Hair.propTypes = {};

const HoverableHair = ({showEditor, hair}) => (
  <Hoverable
    x={x}
    y={60 + moveDown}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Hair
      hair={hair}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"hair", label:"hair", type:"textarea"})(HoverableHair);
