import {setAttributeValue} from "./actions";

const initialState = {
  Strength: '0',
  StrengthModifier: '0',
  Dexterity: '0',
  DexterityModifier: '0',
  Constitution: '0',
  ConstitutionModifier: '0',
  Intelligence: '0',
  IntelligenceModifier: '0',
  Wisdom: '0',
  WisdomModifier: '0',
  Charisma: '0',
  CharismaModifier: '0'
};

export const attributes = [ "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const getModifier = (value) => Math.floor((parseInt(value) - 10) / 2);

export default (state = initialState, action) => {

  if(action.type === setAttributeValue.type) {
    if (!action.value && !action.value.match) {
      return state;
    }

    if (!action.value.match(/^-{0,1}\d{1,2}$/) && action.value.length > 0) {
      return state;
    }

    if (!attributes.find(val => val === action.name)) {
      return state;
    }

    return {...state, [action.name]: action.value.length === 0 ? 0 : action.value, [`${action.name}Modifier`]: action.value.length === 0 ? 0 : getModifier(action.value)};
  }

  return state;
}

export const getValue = (state, attribute) => {
  return state.attributesReducer[attribute]
};

export const mapAttributesFromStateToProps = (state) =>
  attributes.reduce((result, val) => {
    const copy = {...result};
    copy.values[val] = {};
    copy.values[val].value = getValue(state, val) || 0;
    copy.values[val].modifier = getValue(state, `${val}Modifier`) || 0;
    return copy;
  }, {values: {}});
