import React from 'react';
import PropTypes from 'prop-types';
import PanZoom from "../PanZoom";

const svg = [
  {fill: "M224.35 380.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 380.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 366.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 366.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 352.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 352.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 338.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 338.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 324.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 324.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 310.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 310.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 296.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 296.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 282.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 282.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 268.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 268.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 254.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 254.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M224.35 240.77a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M224.35 240.4a3.33 3.33 0 1 0 .01 6.67 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
];

const preparedLevelFour = (prepare) => ({prepared = []}) => (
  <React.Fragment>
    {svg.map((item, index) => (
      <g
        clipPath="url(#a)"
        transform="matrix(1.33333 0 0 -1.33333 0 1056)"
        onClick={() => prepared[index] && prepare(prepared[index].spellId, !prepared[index].prepared)}
      >
        <path
          fill={prepared[index] && prepared[index].prepared ? "black" : "#fff"}
          d={item.fill}
        />
        <path d={item.border}/>
      </g>
    ))}
  </React.Fragment>
);

preparedLevelFour.propTypes = {}

export default preparedLevelFour;