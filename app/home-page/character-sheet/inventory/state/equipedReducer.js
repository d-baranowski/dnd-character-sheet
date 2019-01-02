import { closeModal, openModal, selectItem } from './equipedActions';

const initialState = {
  modalOpen: false,
  modalEditSlot: undefined,
  equipped: {
    slotOne: undefined,
    slotTwo: undefined,
    slotThree: undefined,
    slotFour: undefined,
    slotFive: undefined,
    slotSix: undefined,
    slotSeven: undefined,
    slotEight: undefined,
    slotNine: undefined,
    slotTen: undefined,
    slotEleven: undefined,
    slotTwelve: undefined
  }
};

export default (state = initialState, action) => {
  if (action.type === closeModal.type) {
    return { ...state, modalOpen: false };
  }

  if (action.type === openModal.type) {
    return { ...state, modalOpen: true, modalEditSlot: action.modalEditSlot };
  }

  if (action.type === selectItem.type) {
    return {
      ...state,
      equipped: { ...state.equipped, [action.slot]: action.item.id }
    };
  }

  return state;
};
