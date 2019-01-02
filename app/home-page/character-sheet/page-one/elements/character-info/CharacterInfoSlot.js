import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const getY = () => {
  const pixelRatio = window.devicePixelRatio;

  if (pixelRatio === 1) {
    return -25;
  }
  if (pixelRatio === 1.5) {
    return -28;
  }
  if (pixelRatio === 2) {
    return -24;
  }

  return -28;
};

const characterInfoSlot = ({
  formName,
  label,
  textTransform,
  x,
  y,
  width,
  height,
  type = 'textarea',
  limitValue = undefined
}) => {
  const CharacterInfoSlot = ({ value, renderValue, isHovered, editing }) => (
    <g>
      <text
        transform={textTransform}
        fontWeight={isHovered ? 700 : 400}
        fontSize={7}
        fontFamily="Scala Sans Offc"
      >
        <tspan y={0} x={0}>
          {label.toUpperCase()}
        </tspan>
      </text>
      {editing && (
        <foreignObject
          y={getY()}
          x="0"
          transform={`${textTransform}`}
          fontWeight={500}
          fontSize={12}
          fontFamily="Scala Sans Offc"
        >
          {renderValue}
        </foreignObject>
      )}
      {!editing && (
        <text
          transform={`${textTransform} translate(0, -10)`}
          fontWeight={500}
          fontSize={12}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0">
            {value}
          </tspan>
        </text>
      )}
    </g>
  );

  const HoverableCharacterInfoSlot = ({
    onClick,
    renderValue,
    setWrapperRef,
    editing,
    value
  }) => (
    <Hoverable
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={onClick}
      setWrapperRef={setWrapperRef}
    >
      <CharacterInfoSlot
        editing={editing}
        renderValue={renderValue}
        value={value}
      />
    </Hoverable>
  );

  return withSimpleForm({ formName, label, type, limitValue })(
    HoverableCharacterInfoSlot
  );
};

export default characterInfoSlot;
