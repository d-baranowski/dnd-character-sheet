import {addItem, incrementItem, decrementItem, updateItem, removeItem, closeModal} from './equipmentActions';

const initialState = {
  modalOpen: false,
  modalEditId: undefined,
  inventory: {},
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
    slotTwelve: undefined,
  }
};

export const findBasket = (state, itemId) => {
  if (!state.inventory) {
    return null;
  }

  const basketEntry = Object.entries(state.inventory).find(entry => {
    if (entry) {
      return !!entry[1][itemId];
    }
    return false;
  });

  if (basketEntry) {
    return basketEntry[0];
  }

  return null;
};

export default (state = initialState, action) => {
  if (action.type === addItem.type) {
    const newState = {...state};
    newState.inventory[action.basket] = {};
    newState.inventory[action.basket][action.item.id] = action.item;
    newState.modalOpen = true;
    newState.modalEditId = action.item.id;

    return newState;
  }

  if (action.type === incrementItem.type) {
    const newState = {...state};
    const oldQuantity = newState.inventory[action.id].quantity;
    newState.inventory[action.id] = {...newState.inventory[action.id], quantity: oldQuantity + 1};
    return newState;
  }

  if (action.type === decrementItem.type) {
    const newState = {...state};
    const oldQuantity = newState.inventory[action.id].quantity;
    newState.inventory[action.id] = {...newState.inventory[action.id], quantity: oldQuantity - 1};
    return newState;
  }

  if (action.type === updateItem.type) {
    const newState = {...state};
    const basketName = findBasket(state, action.item.id);
    console.log(newState);
    console.log(basketName);
    console.log(action);
    newState.inventory[basketName][action.item.id] = {...action.item};
    return newState;
  }

  if (action.type === removeItem.type) {
    const newState = {...state};
    const basketName = findBasket(state, action.id);
    delete newState.inventory[basketName][action.id];
    return newState;
  }

  if (action.type === closeModal.type) {
    return {...state, modalOpen: false}
  }

  return state;
}
