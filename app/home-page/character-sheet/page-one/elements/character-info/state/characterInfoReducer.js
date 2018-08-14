import {selectAlignment, setModalVisibility} from './characterInfoActions';

const initialState = {
  alignment: "",
  alignmentModalVisible: false
};

export default (state = initialState, action) => {
  console.log(state);
  console.log(action);
  if (action.type === selectAlignment.type) {
    return {
      ...state,
      alignment: action.alignment,
      alignmentModalVisible: false
    }
  }

  if (action.type === setModalVisibility.type) {
    return {
      ...state,
      alignmentModalVisible: action.visible
    }
  }

  return state;
}
