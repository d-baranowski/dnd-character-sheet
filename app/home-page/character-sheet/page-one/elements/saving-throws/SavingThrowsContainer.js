import React from 'react';
import SavingThrow from './SavingThrow';
import {attributes} from '../attributes/state/attributesReducerMutator';
import Border from '../Border';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import {SavingThrowsDrawerRoute} from './SavingThrowsDrawer';
import {connect} from 'react-redux';

class SavingThrowsContainer extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  render() {
    const { isHovered } = this.state;
    return (
      <g>
        <Border isHovered={isHovered} />

        {attributes.map((value, index) => <SavingThrow name={value} transformY={18 * index} />)}

        <text
          transform="matrix(1.33333 0 0 1.33333 166.172 395.604)"
          fontWeight={700}
          fontSize={6.5}
          fontFamily="Scala Sans Offc"
        >
          <tspan
            y={0}
            x="0"
          >
            SAVING THROWS
          </tspan>
        </text>
        <rect
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={() => this.props.showEditor()}
          fill="transparent"
          x="124"
          y="265"
          width="150"
          height="140" />
      </g>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(SavingThrowsDrawerRoute))
});

export default connect(() => {}, mapDispatchToProps)(SavingThrowsContainer);
