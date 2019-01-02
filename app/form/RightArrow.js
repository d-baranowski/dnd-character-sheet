import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ x, y, onClick }) => (
  <svg x={x} y={y} width={35} height={35} onClick={onClick}>
    <use xlinkHref="#icon-arrow-right" />
  </svg>
);

RightArrow.propTypes = {};

export default RightArrow;
