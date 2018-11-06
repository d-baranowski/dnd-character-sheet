import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const PlayerName = ({playerName, isHovered}) => (
  <g>
    <text
      transform="matrix(1.33333 0 0 1.33333 640.32 93.667)"
      fontWeight={isHovered ? 700 : 400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 3.892 7.3569999 11.172 15.022 18.795 22.882999 24.632999 29.945999 34.111 40.257"
      >
        PLAYER NAME
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 640.32 93.667) translate(0, -10)"
      fontWeight={500}
      fontSize={12}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0"
      >
        {playerName}
      </tspan>
    </text>
  </g>
);

const HoverablePlayerName = ({showEditor, playerName}) => (
  <Hoverable
    x={630}
    y={60}
    width={100}
    height={35}
    onClick={showEditor}
  >
    <PlayerName
      playerName={playerName}
    />
  </Hoverable>
);

export default withSimpleForm({formName:"playerName", label:"Player Name", type:"textarea"})(HoverablePlayerName);
