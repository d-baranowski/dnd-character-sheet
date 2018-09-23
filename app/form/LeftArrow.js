import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({x, y, onClick}) => (
  <svg
    x={x}
    y={y}
    width={35}
    height={35}
    onClick={onClick}
  >
    <use xlinkHref="#icon-arrow-left" />
  </svg>
);

LeftArrow.propTypes = {};

export default LeftArrow;
