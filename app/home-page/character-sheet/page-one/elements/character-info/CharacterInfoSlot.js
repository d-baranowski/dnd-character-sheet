import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const characterInfoSlot = ({formName, label, textTransform, x, y, width, height, type = "textarea", limitValue = undefined}) => {

  const CharacterInfoSlot = ({value, isHovered}) => (
    <g>
      <text
        transform={textTransform}
        fontWeight={isHovered ? 700 : 400}
        fontSize={7}
        fontFamily="Scala Sans Offc"
      >
        <tspan
          y={0}
          x={0}
        >
          {label.toUpperCase()}
        </tspan>
      </text>
      <foreignObject
        y={0}
        x="0"
        transform={`${textTransform} translate(0, -30)`}
        fontWeight={500}
        fontSize={12}
        fontFamily="Scala Sans Offc"
      >
        {value}
      </foreignObject>
    </g>
  );

  const HoverableCharacterInfoSlot = ({onClick, renderValue, setWrapperRef}) => (
    <Hoverable
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={onClick}
      setWrapperRef={setWrapperRef}
    >
      <CharacterInfoSlot
        value={renderValue}
      />
    </Hoverable>
  );

  return withSimpleForm({formName, label, type, limitValue})(HoverableCharacterInfoSlot);
};

export default characterInfoSlot;
