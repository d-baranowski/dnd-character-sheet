import React from 'react';

const AddButton = ({onClick, x, y, width=25}) => (
  <svg
    x={x}
    y={y}
    width={width}
    height={width}
    onClick={onClick}
  >
    <use xlinkHref="#icon-add" />
  </svg>
);

export default AddButton;
