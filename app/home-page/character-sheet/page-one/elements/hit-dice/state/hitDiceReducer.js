import {
  setModalVisibility,
  decrementDie,
  incrementDie
} from './hitDiceActions';

const initialState = {
  modalVisible: false,
  d4: 0,
  d6: 0,
  d8: 0,
  d10: 0,
  d12: 0,
  d20: 0
};

export default (state = initialState, action) => {
  if (action.type === setModalVisibility.type) {
    return {
      ...state,
      modalVisible: action.visible
    };
  }

  if (action.type === decrementDie.type) {
    return {
      ...state,
      [action.die]: state[action.die] - 1
    };
  }

  if (action.type === incrementDie.type) {
    return {
      ...state,
      [action.die]: state[action.die] + 1
    };
  }

  return state;
};
