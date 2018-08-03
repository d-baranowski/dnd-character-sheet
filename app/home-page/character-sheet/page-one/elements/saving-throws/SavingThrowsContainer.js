import React from 'react';
import SavingThrow from './SavingThrow';
import {attributes} from '../attributes/state/attributesMutator';
import Border from '../Border';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import {SavingThrowsDrawerRoute} from './SavingThrowsDrawer';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';

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

        {attributes.map((attributeName, index) => (
            <SavingThrow
              isProficient={this.props.proficiencies[`${attributeName}ThrowProficient`]}
              savingThrow={this.props.savingThrows[attributeName]}
              name={attributeName}
              transformY={18 * index} />)
          )

        }

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

const formStateSelector = formValueSelector('savingThrows');
const selectors = attributes.map(attributeName => `${attributeName}ThrowProficient`);

const mapStateToProps = (state) => ({
  savingThrows: state.savingThrows,
  proficiencies: formStateSelector(state, ...selectors)
});

const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(SavingThrowsDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavingThrowsContainer);
