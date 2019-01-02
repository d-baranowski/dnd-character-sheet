import React from 'react';
import { connect } from 'react-redux';
import { setDrawerRoute } from '../../../../../menu-drawer/state/menuDrawerActions';
import { ClassAndLevelDrawerRoute } from './ClassAndLevelDrawer';

class ClassAndLevelContainer extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({ isHovered: true });
  };

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  getClassAndLevelText = () =>
    Object.entries(this.props.dndClasses)
      .map(([key, value]) => ({ name: key, value }))
      .filter(value => value.value.level > 0)
      .reduce(
        (accumulator, current, index, array) =>
          `${accumulator} ${
            array.length > 1 ? current.value.abbreviation : current.name
          } / ${current.value.level}`,
        ''
      );

  render() {
    const { isHovered } = this.state;
    return (
      <g>
        <text
          transform="matrix(1.33333 0 0 1.33333 360.96 93.667)"
          fontWeight={isHovered ? 800 : 400}
          fontSize={7}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0">
            CLASS & LEVEL
          </tspan>
        </text>
        <text
          transform="matrix(1.33333 0 0 1.33333 360.96 93.667) translate(0, -10)"
          fontWeight={500}
          fontSize={12}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0">
            {this.getClassAndLevelText()}
          </tspan>
        </text>
        <rect
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
          fill="transparent"
          x="360"
          y="60"
          width="133"
          height="35"
        />
      </g>
    );
  }
}

const mapStateToProps = state => ({
  dndClasses: state.homePageReducer.classesReducer.classes
});
const mapDispatchToProps = dispatch => ({
  showEditor: () => dispatch(setDrawerRoute(ClassAndLevelDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ClassAndLevelContainer
);
