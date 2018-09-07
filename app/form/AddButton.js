import React from 'react';

const AddButton = ({onClick, x, y}) => (
  <svg
    x={x}
    y={y}
    width={25}
    height={25}
    onClick={onClick}
  >
    <use xlinkHref="#icon-add" />
  </svg>
);

export default AddButton;
