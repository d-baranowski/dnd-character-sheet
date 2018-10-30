import React from 'react';
import PropTypes from 'prop-types';
import PanZoom from "../PanZoom";
import prepared from "./prepared";

const svg = [
  {fill: "M411.48 126.07a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M411.48 125.71a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M411.48 112.07a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M411.48 111.71a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M411.48 98.07a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M411.48 97.71a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M411.48 84.07a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M411.48 83.71a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
  {fill: "M411.48 70.07a2.97 2.97 0 1 1 0 5.94 2.97 2.97 0 0 1 0-5.94", border: "M411.48 69.71a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23"},
];

const preparedLevelNine = prepared(svg);

export default preparedLevelNine;
