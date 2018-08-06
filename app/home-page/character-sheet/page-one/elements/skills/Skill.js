import React from 'react';
import {modifierWithSign} from '../attributes/AttributeBox';

const Skill = ({name, attribute, transformY, value, isProficient}) => (
  <g transform={`translate(0 ${transformY})`}>

    <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path
        id="acrobaticsDot"
        d="M104.33 462.462a2.971 2.971 0 1 1 .001 5.942 2.971 2.971 0 0 1-.002-5.942"
        fill={isProficient ? "#000" : "#fff"}
      />

      <path id="acrobaticsDotBorder" d="M104.33 462.103a3.332 3.332 0 0 0-3.33 3.33 3.332 3.332 0 0 0 3.33 3.329 3.332 3.332 0 0 0 3.33-3.33 3.332 3.332 0 0 0-3.33-3.329m0 5.942a2.615 2.615 0 0 1-2.614-2.613 2.616 2.616 0 0 1 2.613-2.613 2.617 2.617 0 0 1 2.614 2.613 2.616 2.616 0 0 1-2.614 2.613" />
    </g>
    <path
      d="M149.333 440.862H168.3"
      fill="none"
      stroke="#000"
      strokeWidth={0.666665}
      strokeMiterlimit={10}
    />
    <text
      transform="matrix(1.33333 0 0 1.33333 174.67 438.529)"
      fontWeight={400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x={0}
      >
        {`${name}  (${attribute.substring(0, 3)})`}
      </tspan>
    </text>
    <foreignObject transform="matrix(1.33333 0 0 1.33333 174.667 284.85) translate(-18, 108) scale(0.5, 0.5)">
      <div>
        <p style={{height: '15px', width: '27px', border: 'none', fontFamily: 'Scala Sans Offc', textAlign: 'center' }}>{modifierWithSign(value)}</p>
      </div>
    </foreignObject>
  </g>
);

export default Skill;
