import React from 'react';
import PropTypes from 'prop-types';
import PanZoom from '../PanZoom';

const svg = [
  {
    fill: 'M224.35 606.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 606a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 592.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 592a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 578.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 578a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 564.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 564a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 550.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 550a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 536.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 536a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 522.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 522a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 508.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 508a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 494.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 494a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 480.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 480a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  },
  {
    fill: 'M224.35 466.35a2.97 2.97 0 1 1 0 5.95 2.97 2.97 0 0 1 0-5.95',
    border:
      'M224.35 466a3.33 3.33 0 1 0 .01 6.66 3.33 3.33 0 0 0 0-6.67m0 5.95a2.62 2.62 0 1 1 0-5.23 2.62 2.62 0 0 1 0 5.23'
  }
];

const preparedLevelThree = prepare => ({ prepared = [] }) => (
  <React.Fragment>
    {svg.map((item, index) => (
      <g
        clipPath="url(#a)"
        transform="matrix(1.33333 0 0 -1.33333 0 1056)"
        onClick={() =>
          prepared[index] &&
          prepare(prepared[index].spellId, !prepared[index].prepared)
        }
      >
        <path
          fill={prepared[index] && prepared[index].prepared ? 'black' : '#fff'}
          d={item.fill}
        />
        <path d={item.border} />
      </g>
    ))}
  </React.Fragment>
);

preparedLevelThree.propTypes = {};

export default preparedLevelThree;
