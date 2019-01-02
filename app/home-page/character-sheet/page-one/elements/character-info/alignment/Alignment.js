import React from 'react';
import { connect } from 'react-redux';
import Hoverable from '../../../../../../form/Hoverable';
import { setModalVisibility } from '../state/characterInfoActions';

const Alignment = ({ isHovered, alignment }) => (
  <g>
    <text
      transform="matrix(1.33333 0 0 1.33333 511.3 128.44)"
      fontWeight={isHovered ? 700 : 400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 4.165 7.6300001 9.7299995 14.686 19.999001 26.145 29.917999 35.230999"
      >
        ALIGNMENT
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 511.3 128.44) translate(0, -11)"
      fontWeight={500}
      fontSize={12}
      fontFamily="Scala Sans Offc"
    >
      <tspan y={0} x="0">
        {alignment}
      </tspan>
    </text>
  </g>
);

const HoverableAlignment = ({ alignment, setModalVisibility }) => (
  <Hoverable
    x={505}
    y={95}
    width={120}
    height={35}
    onClick={() => setModalVisibility(true)}
  >
    <Alignment alignment={alignment} />
  </Hoverable>
);

const mapStateToProps = state => ({
  alignment: state.homePageReducer.characterInfoReducer.alignment
});

const mapDispatchToProps = dispatch => ({
  setModalVisibility: visible => dispatch(setModalVisibility(visible))
});

export default connect(mapStateToProps, mapDispatchToProps)(HoverableAlignment);
