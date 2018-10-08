import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';

const Age = ({age, isHovered}) => (
  <g>
    <text  x="354.29" y="99.2" strokeWidth="1.33" fontFamily="Zelda" fontSize="9.33" fontWeight={isHovered ? 700 : 400}>
      <tspan x="354.29" y="99.2">AGE</tspan>
    </text>
    <foreignObject  x="354" y={74}>
      <div style={{
        height: '18px',
        lineHeight: "18px",
        width: '75px',
        border: 'none',
        fontFamily: 'Zelda',
        fontSize: 'small',
        textAlign: 'left' }}>
        {age}
      </div>
    </foreignObject>
  </g>
);

Age.propTypes = {};

const HoverableAge = ({showEditor, age}) => (
  <Hoverable
    x={355}
    y={60}
    width={120}
    height={40}
    onClick={showEditor}
  >
    <Age
      age={age}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"age", label:"age", type:"textarea"})(HoverableAge);
