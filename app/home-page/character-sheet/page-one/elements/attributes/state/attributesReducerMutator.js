const getValue = (state, name) => (
  state &&
  state.attributes &&
  state.attributes.values &&
  state.attributes.values[name] || '');

const getModifier = (value) => Math.floor((parseInt(value) - 10) / 2);

const attributes = [ "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const reducerMutator = (reducer) => (state, action) => {
  const mutatedState = reducer(state, action);

  attributes.forEach((attr) => {
    const value = getValue(mutatedState, attr);
    const mod = getModifier(value);
    
    if (!isNaN(mod)) {
      mutatedState.attributes.values[`${attr}Modifier`] = mod;
    }
  });

  return mutatedState
};

export default reducerMutator;
