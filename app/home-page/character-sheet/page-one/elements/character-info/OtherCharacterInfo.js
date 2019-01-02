import React from 'react';
import Alignment from './alignment/Alignment';
import Background from './Background';
import ClassAndLevelContainer from './classes/ClassAndLevelContainer';
import ExperiencePoints from './ExperiencePoints';
import PlayerName from './PlayerName';
import Race from './Race';

const OtherCharacterInfo = () => (
  <g>
    <path
      id="classLevelBackroundPlayerNameITP"
      d="M766.037 136.61H347.512V55.752h418.525z"
      fill="#fff"
    />
    <path
      id="toDoWithClassLevelItpBorder"
      d="M766.037 136.61H347.512V55.752h418.525z"
      fill="none"
      stroke="#000"
      strokeWidth={1.6666625}
      strokeMiterlimit={10}
    />
    <g clipPath="url(#e)" transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path
        id="classLevelItpLeftBorderBit"
        d="M258.536 756.493l-.001-73.258c1.048 2.516 2.098 3.565 2.098 3.565v66.13s-1.05 1.045-2.097 3.563z"
        fill="none"
        stroke="#000"
        strokeWidth={1.25}
        strokeMiterlimit={10}
      />
      <path
        id="classLevelItpLeftCorners"
        d="M260.634 742.297s1.067 10.333 8.4 10.333h22s7.167-2.445 20.5-2.445m-50.901-52.754s1.067-10.333 8.4-10.333h22s7.167 2.445 20.5 2.445"
        fill="none"
        stroke="#000"
        strokeWidth={1.25}
        strokeMiterlimit={10}
      />
      <path
        id="classLevelItpRightBorderBit"
        d="M576.625 756.493l.001-73.258c-1.048 2.516-2.098 3.565-2.098 3.565v66.13s1.05 1.045 2.097 3.563"
        fill="#fff"
      />
      <path
        id="classLevelItpRightborderBit"
        d="M576.625 756.493l.001-73.258c-1.048 2.516-2.098 3.565-2.098 3.565v66.13s1.05 1.045 2.097 3.563z"
        fill="none"
        stroke="#000"
        strokeWidth={1.25}
        strokeMiterlimit={10}
      />
      <path
        id="classLevelItpRightBorderConrders"
        d="M574.528 742.297s-1.067 10.333-8.401 10.333h-22s-7.166-2.445-20.5-2.445m50.902-52.754s-1.067-10.333-8.401-10.333h-22s-7.166 2.445-20.5 2.445"
        fill="none"
        stroke="#000"
        strokeWidth={1.25}
        strokeMiterlimit={10}
      />
      <path
        id="classLevelItpTopBottomBorder"
        d="M552.63 750.184c-5.203-.907-11.466-1.923-17.207-1.923H299.738c-5.74 0-12.004 1.016-17.206 1.923m0-60.641c5.202.908 11.465 1.923 17.206 1.923h235.685c5.741 0 12.004-1.015 17.206-1.923"
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeMiterlimit={10}
      />
    </g>
    <g clipPath="url(#c)" transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path
        id="top-nav-banner-end"
        d="M574.247 737.143V699c14.567.085 16.462 0 18.946 3.228v37.5c-4.659-2.474-9.473-2.55-18.946-2.586z"
        fill="none"
        stroke="#000"
        strokeWidth={1.375}
        strokeMiterlimit={10}
      />
      <path
        id="top-banner-nav-border-piece"
        d="M573.643 734.308c16.235.054 17.687 1.176 19.157 2.303m-18.554-34.496c19.602-2.231 17.932 3.579 18.804 3.754"
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeMiterlimit={10}
      />
    </g>
    <Alignment />
    <Background />
    <ClassAndLevelContainer />
    <ExperiencePoints />
    <PlayerName />
    <Race />
  </g>
);

export default OtherCharacterInfo;
