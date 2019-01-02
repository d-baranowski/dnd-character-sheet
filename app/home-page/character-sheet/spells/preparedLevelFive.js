import React from 'react';
import PropTypes from 'prop-types';
import PanZoom from '../PanZoom';
import prepared from './prepared';

const svg = [
  {
    fill: 'M224.35 154.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 153.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 140.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 139.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 126.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 125.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 112.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 111.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 98.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 97.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 84.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 83.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 70.2a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 69.85a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.66m0 5.94a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  }
];

const preparedLevelFive = prepared(svg);

export default preparedLevelFive;
