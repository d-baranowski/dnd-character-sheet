import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const moveDown = 35;
const Eyes = ({eyes, isHovered}) => (
  <g>
    <text  x="354.29" y={99.2 + moveDown} strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x="354.29" y={99.2 + moveDown}>EYES</tspan>
    </text>
    <foreignObject  x="354" y={74 + moveDown}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {eyes}
      </div>
    </foreignObject>
  </g>
);

Eyes.propTypes = {};

const HoverableEyes = ({showEditor, eyes}) => (
  <Hoverable
    x={355}
    y={60 + moveDown}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Eyes
      eyes={eyes}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"eyes", label:"eyes", type:"textarea"})(HoverableEyes);
