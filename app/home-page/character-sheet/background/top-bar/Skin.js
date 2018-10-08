import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const x = 520;
const moveDown = 35;
const Skin = ({skin, isHovered}) => (
  <g>
    <text  x={x} y={99.2 + moveDown} strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x={x} y={99.2 + moveDown}>SKIN</tspan>
    </text>
    <foreignObject  x={x} y={74 + moveDown}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {skin}
      </div>
    </foreignObject>
  </g>
);

Skin.propTypes = {};

const HoverableSkin = ({showEditor, skin}) => (
  <Hoverable
    x={x}
    y={60 + moveDown}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Skin
      skin={skin}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"skin", label:"skin", type:"textarea"})(HoverableSkin);
