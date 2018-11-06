import React from 'react';
import Hoverable from '../../../../../form/Hoverable';
import withSimpleForm from '../../../../../form/withSimpleForm';

const ExperiencePoints = ({isHovered, experience}) => (
  <g>
    <text
      transform="matrix(1.33333 0 0 1.33333 640.32 128.697)"
      fontWeight={isHovered ? 700 : 400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 3.773 7.777 11.669 15.442 19.530001 21.629999 25.403 30.716 34.951 38.723999 40.424999 44.317001 49.658001 51.757999 57.070999 60.844002"
      >
        EXPERIENCE POINTS
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 640.32 128.697) translate(0, -11)"
      fontWeight={500}
      fontSize={12}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0"
      >
        {experience}
      </tspan>
    </text>
  </g>
);

const HoverableExperiencePoints = ({showEditor, experience}) => (
  <Hoverable
    x={630}
    y={95}
    width={120}
    height={35}
    onClick={showEditor}
  >
    <ExperiencePoints
      experience={experience}
    />
  </Hoverable>
);

export default withSimpleForm({formName: 'experience', label: 'Experience Points', limitValue: 10})(HoverableExperiencePoints);
