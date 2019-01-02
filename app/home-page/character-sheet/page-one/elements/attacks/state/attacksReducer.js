import {
  addAttack,
  removeAttack,
  updateAttack,
  openModal,
  closeModal
} from './attacksActions';
import uuidv4 from '../../../../../../uuid';

const initialState = {
  modalOpen: false,
  modalEditSlot: undefined,
  attacks: {}
};

export default (state = initialState, action) => {
  if (action.type === addAttack.type) {
    const attackId = uuidv4();
    const newState = {
      ...state,
      attacks: { ...state.attacks },
      modalOpen: true,
      modalEditSlot: attackId
    };
    newState.attacks[attackId] = {
      id: attackId,
      name: '',
      modifier: undefined,
      proficient: false,
      otherBonus: undefined,
      damageType: '',
      attribute: undefined,
      damageDice: '',
      notes: ''
    };
    return newState;
  }

  if (action.type === removeAttack.type) {
    const newState = {
      ...state,
      attacks: { ...state.attacks },
      modalOpen: false,
      modalEditSlot: undefined
    };
    delete newState.attacks[action.id];
    return newState;
  }

  if (action.type === updateAttack.type) {
    const newState = { ...state, attacks: { ...state.attacks } };
    newState.attacks[state.modalEditSlot] = {
      ...state.attacks[state.modalEditSlot],
      ...action.attack
    };
    return newState;
  }

  if (action.type === openModal.type) {
    return {
      ...state,
      modalOpen: true,
      modalEditSlot: action.id
    };
  }

  if (action.type === closeModal.type) {
    return {
      ...state,
      modalOpen: false
    };
  }

  return state;
};
