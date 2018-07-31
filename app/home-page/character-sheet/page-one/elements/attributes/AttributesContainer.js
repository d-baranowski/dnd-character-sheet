import React from 'react';
import AttributeBox from './AttributeBox';
import './AttributeDrawer';
import {AttributeDrawerRoute} from './AttributeDrawer';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import getValue from '../../../../../form/getValue';
import {connect} from 'react-redux';

const attributes = [
  {name: "Strength", transform: "matrix(1.33333 0 0 1.33333 51.554 201.88)"},
  {name: "Dexterity", transform: "matrix(1.33333 0 0 1.33333 50.854 201.88)"},
  {name: "Constitution", transform: "matrix(1.33333 0 0 1.33333 45.724 201.88) scale(0.9,0.9)"},
  {name: "Intelligence", transform: "matrix(1.33333 0 0 1.33333 46 201.88) scale(0.9,0.9)"},
  {name: "Wisdom", transform: "matrix(1.33333 0 0 1.33333 55.854 201.88)"},
  {name: "Charisma", transform: "matrix(1.33333 0 0 1.33333 52.5 201.88)"}
];

class AttributesContainer extends React.PureComponent {
  state = {
    isHovered: {
      Strength: false,
      Dexterity: false,
      Constitution: false,
      Intelligence: false,
      Wisdom: false,
      Charisma: false
    }
  };

  updateHover = (attribute, isHovered) => {
    this.setState(
      {
        isHovered: {
        ...this.state.isHovered,
        [attribute]: isHovered
        }
      })
  };

  render() {
    return (
      <g>
        {attributes.map((element, index) => (
          <AttributeBox
            transformX={index * 96}
            textTransform={element.transform}
            name={element.name}
            onMouseEnter={() => this.updateHover(element.name, true)}
            onMouseLeave={() => this.updateHover(element.name, false)}
            onClick={() => this.props.showAttributeEditor(element.name)}
            isHovered={this.state.isHovered[element.name]}
            value={this.props.values[element.name]}
          />
        ))}
      </g>
    );
  }
}

const mapStateToProps = (state) =>
  attributes.reduce((result, val) => {
    const copy = {...result};
    copy.values[val.name] = getValue(state, 'attributes', val.name);
    return copy;
  }, {values: {}});


const mapDispatchToProps = (dispatch) => ({
  showAttributeEditor: (attribute) => dispatch(setDrawerRoute(AttributeDrawerRoute, {name: attribute}))
});


export default connect(mapStateToProps, mapDispatchToProps)(AttributesContainer);
