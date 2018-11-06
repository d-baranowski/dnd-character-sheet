import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const Race = ({race, isHovered}) => (
  <g>
    <text
      transform="matrix(1.33333 0 0 1.33333 360.96 128.44)"
      fontWeight={isHovered ? 700 : 400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan y={0} x="0 4.0879998 8.2180004 12.453">
        RACE
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 360.96 128.44) translate(0, -11)"
      fontWeight={500}
      fontSize={12}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0"
      >
        {race}
      </tspan>
    </text>
  </g>
);

const HoverableRace = ({showEditor, race}) => (
  <Hoverable
    x={360}
    y={95}
    width={120}
    height={35}
    onClick={showEditor}
  >
    <Race
      race={race}
    />
  </Hoverable>
);

export default withSimpleForm({formName: 'race', label: 'Race', type: 'textarea'})(HoverableRace);
