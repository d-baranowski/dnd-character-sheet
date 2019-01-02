import React from 'react';
import { connect } from 'react-redux';
import AttributeBox from './AttributeBox';
import { mapAttributesFromStateToProps } from './state/attributesReducer';
import { setAttributeValue } from './state/actions';

const attributes = [
  { name: 'Strength', transform: 'matrix(1.33333 0 0 1.33333 51.554 201.88)' },
  { name: 'Dexterity', transform: 'matrix(1.33333 0 0 1.33333 50.854 201.88)' },
  {
    name: 'Constitution',
    transform: 'matrix(1.33333 0 0 1.33333 45.724 201.88) scale(0.9,0.9)'
  },
  {
    name: 'Intelligence',
    transform: 'matrix(1.33333 0 0 1.33333 46 201.88) scale(0.9,0.9)'
  },
  { name: 'Wisdom', transform: 'matrix(1.33333 0 0 1.33333 55.854 201.88)' },
  { name: 'Charisma', transform: 'matrix(1.33333 0 0 1.33333 52.5 201.88)' }
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
    this.setState({
      isHovered: {
        ...this.state.isHovered,
        [attribute]: isHovered
      }
    });
  };

  render() {
    return (
      <g>
        {attributes.map((element, index) => (
          <AttributeBox
            transformY={index * 96}
            textTransform={element.transform}
            name={element.name}
            onMouseEnter={() => this.updateHover(element.name, true)}
            onMouseLeave={() => this.updateHover(element.name, false)}
            isHovered={this.state.isHovered[element.name]}
            value={this.props.values[element.name].value}
            changeValue={value =>
              this.props.updateAttribute(element.name, value)
            }
            modifier={this.props.values[element.name].modifier}
          />
        ))}
      </g>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateAttribute: (name, value) => dispatch(setAttributeValue(name, value))
});

export default connect(mapAttributesFromStateToProps, mapDispatchToProps)(
  AttributesContainer
);
