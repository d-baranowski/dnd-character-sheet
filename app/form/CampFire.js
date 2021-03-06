import React from 'react';

const CampFire = ({ onClick }) => (
  <div title="Long Rest">
    <svg
      id="startLongRest"
      onClick={onClick}
      style={{
        position: 'fixed',
        top: 10,
        right: 10,
        cursor: 'pointer',
        width: 50,
        height: 50,
        zIndex: 10
      }}
      className="fire"
      width="128.000000pt"
      height="128.000000pt"
      viewBox="0 0 128.000000 128.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M700 1227 c0 -3 9 -24 20 -48 37 -81 15 -180 -44 -195 -33 -8 -80 18
-106 61 -12 19 -23 35 -25 35 -1 0 0 -40 3 -90 5 -102 -8 -166 -44 -205 -49
-53 -111 -22 -135 67 l-10 40 -31 -28 c-63 -60 -108 -165 -108 -254 0 -72 56
-235 85 -246 6 -3 37 9 67 27 l56 32 -19 41 c-10 23 -19 55 -19 73 0 32 0 32
28 17 36 -19 69 -17 118 5 50 23 82 62 90 112 6 37 7 37 29 23 26 -17 50 -11
85 22 l25 23 -3 -86 c-4 -100 12 -154 59 -199 24 -23 39 -29 75 -29 49 0 51
-3 29 -46 -12 -23 -13 -30 -3 -33 7 -2 28 -9 47 -15 19 -6 44 -11 56 -11 46 0
127 125 141 216 10 67 -11 123 -67 177 -53 50 -89 64 -68 26 34 -65 25 -139
-19 -153 -40 -13 -109 30 -138 86 -19 37 -17 81 6 156 42 135 19 222 -87 323
-62 59 -93 85 -93 76z"
        />
        <path
          d="M381 1131 c-36 -34 -41 -74 -14 -124 9 -18 19 -45 22 -61 l7 -30 27
30 c26 26 28 33 22 79 -4 28 -8 69 -8 93 -2 50 -13 53 -56 13z"
        />
        <path
          d="M395 366 c-201 -117 -210 -124 -207 -151 3 -28 38 -105 47 -105 3 0
42 18 88 41 90 45 90 44 -1 -25 -51 -39 -61 -51 -51 -62 6 -8 16 -14 21 -14 5
0 52 24 103 52 87 50 93 55 98 90 13 95 123 162 211 128 14 -5 26 -6 26 -2 0
19 -33 102 -40 102 -5 0 -45 -16 -89 -35 -45 -19 -81 -33 -81 -31 0 2 32 24
70 50 39 25 70 50 70 56 0 10 -33 31 -47 29 -4 -1 -102 -56 -218 -123z"
        />
        <path
          d="M767 313 c4 -21 16 -53 27 -72 14 -24 20 -50 19 -86 l-1 -51 114 -31
115 -30 14 21 c24 33 18 41 -42 63 l-58 21 69 -2 c96 -2 94 15 -4 49 -44 16
-79 30 -77 31 2 2 30 -1 63 -6 87 -15 94 -14 94 14 0 15 -7 27 -17 30 -10 3
-79 21 -153 41 -74 20 -143 38 -152 41 -14 4 -16 0 -11 -33z"
        />
        <path
          d="M565 257 c-41 -41 -52 -90 -31 -140 34 -82 145 -102 209 -38 28 28
32 38 32 87 0 51 -3 58 -37 90 -33 29 -45 34 -89 34 -44 0 -55 -4 -84 -33z"
        />
      </g>
    </svg>
  </div>
);

CampFire.propTypes = {};

export default CampFire;
