export default (state, formName, name) =>
  state &&
  state.form &&
  state.form[formName] &&
  state.form[formName].values &&
  state.form[formName].values[name];
