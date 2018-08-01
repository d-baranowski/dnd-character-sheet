import React from 'react';

const SavingThrow = (
  {
    transformY,
    name
  }) => (
  <g transform={`translate(0 ${transformY})`}>
    <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path
        id="dot"
        d="M104.33 577.721a2.971 2.971 0 1 1 .001 5.942 2.971 2.971 0 0 1-.002-5.942"
        fill="#fff"
      />
      <path id="strenghtDotBorder" d="M104.33 577.363a3.332 3.332 0 0 0-3.33 3.329 3.332 3.332 0 0 0 3.33 3.329 3.332 3.332 0 0 0 3.33-3.33 3.332 3.332 0 0 0-3.33-3.328m0 5.942a2.615 2.615 0 0 1-2.614-2.613 2.616 2.616 0 0 1 2.613-2.613 2.617 2.617 0 0 1 2.614 2.613 2.616 2.616 0 0 1-2.614 2.613" />
    </g>
    <path
      id="SavingThrowUnderline"
      d="M150.667 287.183h18.965"
      fill="none"
      stroke="#000"
      strokeWidth={0.666665}
      strokeMiterlimit={10}
    />
    <text
      style={{ InkscapeFontSpecification: "ScalaSansOffc" }}
      transform="matrix(1.33333 0 0 1.33333 174.667 284.85)"
      fontWeight={400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0"
      >
        {name}
      </tspan>
    </text>
  </g>
);

export default SavingThrow;
