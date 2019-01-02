import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import SavingThrow from './SavingThrow';
import { attributes } from '../attributes/state/attributesReducer';
import Border from './Border';
import { setDrawerRoute } from '../../../../menu-drawer/state/menuDrawerActions';
import { SavingThrowsDrawerRoute } from './SavingThrowsDrawer';

class SavingThrowsContainer extends React.PureComponent {
  render() {
    return (
      <g>
        <Border label="SAVING THROWS" onClick={this.props.showEditor}>
          {attributes.map((attributeName, index) => (
            <SavingThrow
              isProficient={
                this.props.proficiencies[`${attributeName}ThrowProficient`]
              }
              savingThrow={this.props.savingThrows[attributeName]}
              name={attributeName}
              transformY={18 * index}
            />
          ))}
        </Border>
      </g>
    );
  }
}

const formStateSelector = formValueSelector('savingThrows');
const selectors = attributes.map(
  attributeName => `${attributeName}ThrowProficient`
);

const mapStateToProps = state => ({
  savingThrows: state.savingThrows,
  proficiencies: formStateSelector(state, ...selectors)
});

const mapDispatchToProps = dispatch => ({
  showEditor: () => dispatch(setDrawerRoute(SavingThrowsDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  SavingThrowsContainer
);
