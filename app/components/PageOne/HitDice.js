import React from 'react';

const HitDice = () => (
  <g>
    <path id="HitDiceFill"
          d="M402.257 426.777v52.091l-5.6 5.6h-91.836l-5.613-5.6v-52.09l5.613-5.614h91.836z"
          fill="#fff"
    />
    <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path id="hitDiceBorder"
            d="M297.542 477.048h-69l-5.012-5.013V432.74l5.012-5.012h69l5.013 5.012v39.295zm3.638-5.583v-3.875c-.408 1.222-.987 2.525-1.799 3.756v.071h-.046c-1.155 1.727-2.782 3.294-5.07 4.256h2.707zm-8.852-42.362h-58.597c-2.613.632-4.706 2.071-6.277 4.278v37.99c1.366 1.915 3.37 3.58 6.302 4.302h58.597c2.614-.632 4.706-2.07 6.278-4.278v-37.99c-1.366-1.915-3.37-3.579-6.303-4.302m-67.423 36.216c.303 1.417.843 3.181 1.8 4.873V434.57c-.168.297-.345.58-.496.898-.658 1.385-1.058 2.776-1.304 3.94zm74.476 4.888c.167-.297.344-.579.495-.898.657-1.385 1.058-2.776 1.304-3.94v-25.91c-.303-1.419-.843-3.183-1.799-4.875zm-70.268 5.466h2.707c-2.288-.962-3.915-2.529-5.07-4.256h-.046v-.07c-.813-1.232-1.392-2.535-1.799-3.757v3.875zm-4.208-42.363v3.876c.407-1.222.986-2.525 1.8-3.756v-.07h.045c1.155-1.728 2.782-3.295 5.07-4.257h-2.707zm72.067-4.207h-2.707c2.288.962 3.915 2.53 5.07 4.256h.046v.071c.812 1.231 1.391 2.534 1.8 3.756v-3.876z"/>
    </g>

    <text
      style={{ InkscapeFontSpecification: "ScalaSansOffc" }}
      transform="matrix(1.33333 0 0 1.33333 306.347 436.932)"
      fontWeight={400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
      fill="#969797"
    >
      <tspan y={0} x="0 3.073 6.8039999 8.967 12.299">
        Total
      </tspan>
    </text>
    <text
      style={{ InkscapeFontSpecification: "ScalaSansOffc" }}
      transform="matrix(1.33333 0 0 1.33333 335.342 479.016)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 4.43325 6.1582499 9.2574997 10.695 14.78325 16.508249 19.987"
      >
        HIT DICE
      </tspan>
    </text>
  </g>
);

export default HitDice;
