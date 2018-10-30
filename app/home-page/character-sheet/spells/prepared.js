import React from 'react';
import PropTypes from 'prop-types';

const prepared = (svg) => (prepare) => ({prepared = []}) => (
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

export default prepared;
