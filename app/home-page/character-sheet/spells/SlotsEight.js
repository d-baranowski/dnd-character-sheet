import React from 'react';
import ActualSlots from "./ActualSlots";
import withSimpleForm from "../../../form/withSimpleForm";

const y = 644;
const x = 565;

const Slots = ({onClick, renderValue, setWrapperRef}) => (
  <ActualSlots
    setWrapperRef={setWrapperRef}
    onClick={onClick}
    rectX={x}
    rectY={y}
    rectWidth={210}
    rectHeight={35}
    fillPath="M767.73 678.67l6.44-7.77v-19.31l-6.44-7.77H556.81v34.85z"
    borderPath="M581.32 288.54v15.05l-6.24 6.24H416.34l1.59-1.38h48.74l7.03-8.57c-.24-.8-.4-1.68-.48-2.66a1.19 1.19 0 0 1-.96-1.15c0-.58.41-1.04.96-1.15.07-.98.24-1.87.48-2.66l-7.04-8.58h-48.73l-1.59-1.37h158.74zm-110.51-4.86l1.62 2.05h99.8a21.15 21.15 0 0 0-6.05-2.05zm5.9 15.13v-5.49l-1.88-2.37a11.16 11.16 0 0 0-1.02 3.99c.49.15.85.59.85 1.13 0 .54-.36.98-.85 1.13.13 1.6.5 2.9 1.02 3.98zm-3.8 7h5.56a9.9 9.9 0 0 1-3.28-2.88zm2.28-16.6a9.87 9.87 0 0 1 3.28-2.88h-5.56zm-1.26 2.39c.15-.41.32-.79.5-1.14l-5.38-6.78h-1.61zm.5 10.08c-.18-.36-.35-.73-.5-1.14l-6.49 7.91h1.6zm91.15 6.77c1.68-.25 4.06-.81 6.46-2.04h-99.61l-1.63 2.04zm14.36-8.83c-2.69 5.27-7.27 7.7-10.96 8.83h5.53l5.43-5.43zm0-5.35a16.06 16.06 0 0 0-6.72-7.98v.04h-93.3c-.29.08-2.64.86-4.36 3.34l2.52 3.17v6.45l-2.52 3.17a8.76 8.76 0 0 0 4.36 3.35h93.2a16.08 16.08 0 0 0 6.82-8.04zm0-5.16l-5.43-5.43h-5.22c3.63 1.17 8.04 3.61 10.65 8.73z"
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

export default withSimpleForm({formName: 'slotsEight', label: 'Slots'})(Slots);
