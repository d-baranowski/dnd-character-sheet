import React from 'react';
import ScrollableTextElement from '../../ScrollableTextElement';
import withSimpleForm from '../../../../form/withSimpleForm';

const AlliesAndOrganisations = ({ onClick, renderValue, setWrapperRef }) => (
  <g>
    <ScrollableTextElement
      fontSize={16}
      rectX="297"
      rectY="177"
      rectWidth="497"
      rectHeigth="297"
      fillPath="m316.54378,498.27771 -8.03967,-0.16539 -1.77275,-1.06014 c -0.975,-0.58308 -2.50264,-1.72128 -3.39475,-2.5293 L 301.7146,493.0537 V 339.41033 185.76695 l 1.50213,-1.56669 c 1.02332,-1.0673 2.2975,-1.95132 3.99739,-2.77336 l 2.49525,-1.20668 h 235.45154 235.45153 l 2.17621,1.09591 c 1.2808,0.64501 2.97413,1.86011 4.11554,2.95326 l 1.93937,1.85735 -0.16453,152.35801 c -0.10493,97.15099 -0.27152,152.85191 -0.45977,153.72105 -0.37717,1.74149 -2.27192,3.48467 -5.61244,5.16348 l -2.38254,1.19739 -227.82042,-0.0618 c -125.30122,-0.034 -231.43826,-0.13621 -235.86008,-0.22717 z"
      borderPath=""
      value={renderValue}
      onClick={onClick}
      setWrapperRef={setWrapperRef}
    >
      <path d="M299.48 181.37C299.48 181.37 296.11 184.74 296.11 184.74C296.11 184.74 296.11 493.94 296.11 493.94C296.11 493.94 299.51 497.34 299.51 497.34C299.51 497.34 302.88 500.71 302.88 500.71C302.88 500.71 787.64 500.71 787.64 500.71C787.64 500.71 790.88 497.48 790.88 497.48C790.88 497.48 794.08 494.28 794.08 494.28C794.08 494.28 794.08 184.4 794.08 184.4C794.08 184.4 790.85 181.17 790.85 181.17C790.85 181.17 787.65 177.97 787.65 177.97C787.65 177.97 302.88 177.97 302.88 177.97C302.88 177.97 299.48 181.37 299.48 181.37M783.26 181.37C784.97 182.19 786.26 183.12 787.28 184.27C787.28 184.27 788.8 185.96 788.8 185.96C788.8 185.96 788.8 339.14 788.8 339.14C788.8 490.91 788.8 492.3 788.14 493.35C787.28 494.77 783.94 497.21 781.67 498.04C781.67 498.04 779.86 498.73 779.86 498.73C779.86 498.73 545.13 498.73 545.13 498.73C327.36 498.73 310.3 498.7 308.78 498.17C308.15588 497.99591 307.5574 497.74038 307.0 497.41C306.9 497.28 306.3 496.91 305.68 496.55C304.78 496.0 303.92 495.36 303.14 494.64C303.14 494.64 301.72 493.32 301.72 493.32C301.72 493.32 301.72 185.56 301.72 185.56C301.72 185.56 302.91 184.24 302.91 184.24C304.29 182.72 305.71 181.8 308.29 180.74C308.29 180.74 310.13 179.95 310.13 179.95C310.13 179.95 545.46 180.05 545.46 180.05C545.46 180.05 780.75 180.11 780.75 180.11C780.75 180.11 783.25 181.37 783.25 181.37M300.4 339.57C300.4 432.4 300.27 490.77 300.07 490.45C299.62 489.45 299.24 488.41 298.92 487.35C298.92 487.35 298.09 484.77 298.09 484.77C298.09 484.77 298.09 339.54 298.09 339.54C298.09 206.91 298.12 194.11 298.62 192.46C299.25 190.38 300.07 188.2 300.27 188.2C300.33 188.2 300.4 256.31 300.4 339.57M791.28 191.67C791.28 191.67 792.1 194.24 792.1 194.24C792.1 194.24 792.1 339.08 792.1 339.08C792.1 470.02 792.03 484.14 791.57 485.96C791.3 487.06 790.93 488.13 790.45 489.16C789.82 490.28 789.82 487.18 789.82 339.17C789.82 246.51 789.92 188.23 790.12 188.57C790.28 188.83 790.82 190.25 791.27 191.67" />

      <text
        transform="matrix(1.33333 0 0 1.33333 306.347 276.153)"
        fontWeight={700}
        fontSize={8}
        fontFamily="Scala Sans Offc"
        fill="black"
      >
        <tspan y="160" x="147">
          Allies & Organisations
        </tspan>
      </text>
    </ScrollableTextElement>
  </g>
);

export default withSimpleForm({
  formName: 'allies',
  label: 'Allies',
  type: 'textarea',
  allowLineBreak: true
})(AlliesAndOrganisations);
