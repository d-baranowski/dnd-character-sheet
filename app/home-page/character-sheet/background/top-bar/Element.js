import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import Hoverable from '../../../../form/Hoverable';
// x is 355
// y is 60 + moveDown

const backgroundInfoSlot = ({
  formName,
  label,
  x,
  y,
  width,
  height,
  type = 'textarea',
  limitValue = undefined
}) => {
  const Element = ({ value, isHovered }) => (
    <g>
      <text
        x={x}
        y={y + 40}
        strokeWidth="1.33"
        fontFamily="Scala Sans Offc"
        fontSize="9.33"
        fontWeight={isHovered ? 700 : 400}
      >
        <tspan x={x} y={y + 40}>
          {label.toUpperCase()}
        </tspan>
      </text>
      <foreignObject x={x} y={y + 14}>
        <div
          style={{
            height: '18px',
            lineHeight: '18px',
            width: '75px',
            border: 'none',
            fontFamily: 'Scala Sans Offc',
            fontSize: 'small',
            textAlign: 'left'
          }}
        >
          {value}
        </div>
      </foreignObject>
    </g>
  );

  const HoverableElement = ({ onClick, renderValue, setWrapperRef }) => (
    <Hoverable
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={onClick}
      setWrapperRef={setWrapperRef}
    >
      <Element value={renderValue} />
    </Hoverable>
  );

  return withSimpleForm({ formName, label, type, limitValue })(
    HoverableElement
  );
};

export default backgroundInfoSlot;
