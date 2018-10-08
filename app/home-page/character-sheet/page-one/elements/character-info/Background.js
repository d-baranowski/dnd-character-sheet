import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const Background = ({isHovered, background}) => (
    <g>
      <text
        transform="matrix(1.33333 0 0 1.33333 511.3 93.667)"
        fontWeight={isHovered ? 700 : 400}
        fontSize={7}
        fontFamily="Zelda"
      >
        <tspan
          y={0}
          x="0 4.1370001 8.2670002 12.502 16.358999 21.315001 25.368 30.709 35.609001 40.922001"
        >
          BACKGROUND
        </tspan>
      </text>
      <text
        transform="matrix(1.33333 0 0 1.33333 511.3 93.667) translate(0, -10)"
        fontWeight={500}
        fontSize={12}
        fontFamily="Zelda"
      >
        <tspan
          y={0}
          x="0"
        >
          {background}
        </tspan>
      </text>
    </g>

);

const HoverableBackground = ({showEditor, background}) => (
  <Hoverable
    x={505}
    y={60}
    width={120}
    height={35}
    onClick={showEditor}
  >
    <Background
      background={background}
      showEditor={showEditor}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"background", label:"Background", type:"textarea"})(HoverableBackground);
