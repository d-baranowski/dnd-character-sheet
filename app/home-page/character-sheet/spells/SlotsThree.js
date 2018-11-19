import React from 'react';
import ActualSlots from "./ActualSlots";
import withSimpleForm from "../../../form/withSimpleForm";

const y = 190;
const x = 315;

const Slots = ({onClick, renderValue, setWrapperRef}) => (
  <ActualSlots
    setWrapperRef={setWrapperRef}
    onClick={onClick}
    rectX={x}
    rectY={y}
    rectWidth={210}
    rectHeight={35}
    fillPath="M518.23 225.93l6.44-7.77v-19.31l-6.44-7.78H307.31v34.86z"
    borderPath="M394.19 628.1v15.05l-6.23 6.23H229.22l1.58-1.37h48.74l7.03-8.58c-.23-.79-.4-1.67-.48-2.65a1.19 1.19 0 0 1-.96-1.16c0-.57.42-1.03.96-1.15.08-.98.25-1.86.48-2.65l-7.03-8.58H230.8l-1.58-1.37h158.74zm-110.5-4.86l1.62 2.04h99.8a21.15 21.15 0 0 0-6.06-2.04zm5.9 15.13v-5.5l-1.89-2.36a11.16 11.16 0 0 0-1.01 3.98c.49.16.85.6.85 1.13 0 .54-.37.98-.85 1.13.12 1.6.5 2.91 1.01 3.99zm-3.81 7h5.56a9.9 9.9 0 0 1-3.28-2.88zm2.29-16.61a9.87 9.87 0 0 1 3.27-2.88h-5.56zm-1.27 2.4c.15-.41.32-.8.5-1.15l-5.38-6.77h-1.61zm.5 10.07c-.18-.35-.34-.73-.5-1.13l-6.48 7.9h1.6zm91.16 6.78c1.68-.26 4.05-.82 6.46-2.05H285.3l-1.62 2.05zm14.36-8.83c-2.7 5.27-7.28 7.7-10.97 8.83h5.54l5.43-5.43zm0-5.36a16.06 16.06 0 0 0-6.72-7.98v.04h-93.3c-.3.09-2.64.86-4.36 3.35l2.52 3.17v6.45l-2.52 3.17a8.76 8.76 0 0 0 4.36 3.34H386a16.08 16.08 0 0 0 6.82-8.04zm0-5.15l-5.43-5.43h-5.23c3.64 1.17 8.04 3.6 10.66 8.72z"
  >
    <foreignObject  x={x + 68.77} y={y}>
      <div style={{
        height: '35px',
        lineHeight: "35px",
        width: '140px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {renderValue}
      </div>
    </foreignObject>
  </ActualSlots>
);

export default withSimpleForm({formName: 'slotsThree', label: 'Slots'})(Slots);
