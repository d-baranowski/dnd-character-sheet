import React from 'react';
import ActualSlots from "./ActualSlots";
import withSimpleForm from "../../../form/withSimpleForm";

const y = 415;
const x = 565;

const Slots = ({showEditor, formValue}) => (
  <ActualSlots
    onClick={() => showEditor()}
    rectX={x}
    rectY={y}
    rectWidth={210}
    rectHeight={35}
    fillPath="M767.73 452.27l6.44-7.78v-19.3l-6.44-7.78H556.81v34.86z"
    borderPath="M581.32 458.35v15.05l-6.24 6.23H416.34l1.59-1.38h48.74l7.03-8.57c-.24-.79-.4-1.67-.48-2.65a1.19 1.19 0 0 1-.96-1.16c0-.58.41-1.04.96-1.15.07-.98.24-1.86.48-2.65l-7.04-8.58h-48.73l-1.59-1.38h158.74zm-110.51-4.86l1.62 2.04h99.8a21.15 21.15 0 0 0-6.05-2.04zm5.9 15.12v-5.48l-1.88-2.37a11.16 11.16 0 0 0-1.02 3.98c.49.16.85.6.85 1.13 0 .54-.36.98-.85 1.13.13 1.6.5 2.9 1.02 3.98zm-3.8 7h5.56a9.9 9.9 0 0 1-3.28-2.87zm2.28-16.6a9.87 9.87 0 0 1 3.28-2.88h-5.56zm-1.26 2.39c.15-.4.32-.78.5-1.14l-5.38-6.77h-1.61zm.5 10.08c-.18-.35-.35-.73-.5-1.13l-6.49 7.9h1.6zm91.15 6.77c1.68-.25 4.06-.81 6.46-2.04h-99.61l-1.63 2.04zm14.36-8.82c-2.69 5.26-7.27 7.7-10.96 8.82h5.53l5.43-5.42zm0-5.36a16.06 16.06 0 0 0-6.72-7.98v.04h-93.3c-.29.09-2.64.86-4.36 3.35l2.52 3.17v6.44l-2.52 3.18a8.76 8.76 0 0 0 4.36 3.34h93.2a16.08 16.08 0 0 0 6.82-8.04zm0-5.15l-5.43-5.43h-5.22c3.63 1.16 8.04 3.6 10.65 8.72z"
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
        {formValue}
      </div>
    </foreignObject>
  </ActualSlots>
);

export default withSimpleForm({formName: 'slotsSeven', label: 'Slots'})(Slots);
