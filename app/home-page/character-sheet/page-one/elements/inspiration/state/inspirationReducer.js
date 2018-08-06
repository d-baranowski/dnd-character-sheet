import {toggleInspiration} from './inspirationActions';

const initialState = {
  hasInspiration: false
};

export default (state = initialState, action) => {

  if (action.type === toggleInspiration.type) {
    return {
      ...state,
      hasInspiration: !state.hasInspiration
    }
  }

  return state;
}
