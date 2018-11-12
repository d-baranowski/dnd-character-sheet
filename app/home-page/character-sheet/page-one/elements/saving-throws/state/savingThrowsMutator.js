import {attributes} from '../../attributes/state/attributesReducer';

const getAttributeModifierValue = (state, attributeName) => (
  state &&
  state.attributesReducer &&
  state.attributesReducer[`${attributeName}Modifier`] || 0);

const getAttributeProficiency = (state, attributeName) => (
  state &&
  state.form &&
  state.form.savingThrows &&
  state.form.savingThrows.values &&
  state.form.savingThrows.values[`${attributeName}ThrowProficient`] || false);

const getProficiencyBonus = (state) => (
  state.homePageReducer.classesReducer.proficiencyBonus
);

const getOtherBonus = (state, attributeName) => (
  state &&
  state.form &&
  state.form.savingThrows &&
  state.form.savingThrows.values &&
  state.form.savingThrows.values[`${attributeName}OtherBonus`] || 0);


const reducerMutator = (reducer) => (state, action) => {
  const mutatedState = reducer(state, action);

  const savingThrowsModifiers = {};
  attributes.forEach(attributeName => {
    const attributeModifier = parseInt(getAttributeModifierValue(mutatedState, attributeName));
    const isProficient = getAttributeProficiency(mutatedState, attributeName);
    const otherBonus = getOtherBonus(mutatedState, attributeName);
    const proficiency = getProficiencyBonus(mutatedState);
    savingThrowsModifiers[attributeName] = attributeModifier + parseInt(otherBonus) + (isProficient ? proficiency : 0);
  });

  mutatedState.savingThrows = savingThrowsModifiers;

  return mutatedState;
};

export default reducerMutator;
