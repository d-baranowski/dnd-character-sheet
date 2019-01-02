import { modulateDeathSaves } from './deathSavesActions';

const initialState = {
  success: 0,
  failure: 0
};

export default (state = initialState, action) => {
  if (action.type === modulateDeathSaves.type) {
    return {
      ...state,
      [action.save]: (state[action.save] + 1) % 4
    };
  }

  return state;
};
