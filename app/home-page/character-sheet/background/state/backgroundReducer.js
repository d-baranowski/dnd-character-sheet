import { setCharacterArt, openModal, closeModal } from './backgroundActions';

const initialState = {
  modalOpen: false,
  characterAvatar: "",
  pickerX: undefined,
  pickerY: undefined,
  width: undefined,
  height: undefined
};

export default (state = initialState, action) => {
  if (action.type === setCharacterArt.type) {
    return {
      ...state,
      characterAvatar: action.image
    }
  }

  if (action.type === openModal.type) {
    return {
      ...state,
      modalOpen: true
    }
  }

  if (action.type === closeModal.type) {
    return {
      ...state,
      modalOpen: false,
      pickerX: action.x,
      pickerY: action.y,
      width: action.width,
      height: action.height
    }
  }

  return state;
}
