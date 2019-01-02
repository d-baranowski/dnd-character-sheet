import { updateFormValue } from './actions';

export default (state = {}, action) => {
  if (action.type === updateFormValue.type) {
    return {
      ...state,
      [action.formName]: action.value
    };
  }

  return state;
};
