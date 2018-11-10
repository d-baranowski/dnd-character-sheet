import React from 'react';
import ActualSlots from "./ActualSlots";
import withSimpleForm from "../../../form/withSimpleForm";

const y = 492;
const x = 315;

const Slots = ({showEditor, formValue}) => (
  <ActualSlots
    onClick={() => showEditor()}
    rectX={x}
    rectY={y}
    rectWidth={210}
    rectHeight={35}
    fillPath="M518.23 526.71l6.44-7.77v-19.31l-6.44-7.78H307.31v34.86z"
    borderPath="M394.19 402.51v15.05l-6.23 6.24H229.22l1.58-1.38h48.74l7.03-8.57c-.23-.8-.4-1.68-.48-2.66a1.19 1.19 0 0 1-.96-1.15c0-.58.42-1.04.96-1.15.08-.98.25-1.87.48-2.66l-7.03-8.57H230.8l-1.58-1.38h158.74zm-110.5-4.85l1.62 2.04h99.8a21.15 21.15 0 0 0-6.06-2.04zm5.9 15.12v-5.49l-1.89-2.36a11.16 11.16 0 0 0-1.01 3.98c.49.15.85.6.85 1.13 0 .54-.37.98-.85 1.13.12 1.6.5 2.9 1.01 3.98zm-3.81 7h5.56a9.9 9.9 0 0 1-3.28-2.88zm2.29-16.6a9.87 9.87 0 0 1 3.27-2.88h-5.56zm-1.27 2.39c.15-.4.32-.79.5-1.14l-5.38-6.77h-1.61zm.5 10.08c-.18-.36-.34-.73-.5-1.13l-6.48 7.9h1.6zm91.16 6.77c1.68-.25 4.05-.81 6.46-2.04H285.3l-1.62 2.04zm14.36-8.82c-2.7 5.26-7.28 7.7-10.97 8.82h5.54l5.43-5.43zm0-5.36a16.06 16.06 0 0 0-6.72-7.98v.04h-93.3c-.3.08-2.64.86-4.36 3.34l2.52 3.17v6.45l-2.52 3.17a8.76 8.76 0 0 0 4.36 3.35H386a16.08 16.08 0 0 0 6.82-8.04zm0-5.16l-5.43-5.42h-5.23c3.64 1.16 8.04 3.6 10.66 8.72z"
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

export default withSimpleForm({formName: 'slotsFour', label: 'Slots'})(Slots);
