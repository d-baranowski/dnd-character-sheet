import {
  addItem,
  incrementItem,
  decrementItem,
  updateItem,
  removeItem,
  closeModal,
  openModal,
  incrementPage,
  decrementPage
} from './equipmentActions';

const initialState = {
  modalOpen: false,
  modalEditId: undefined,
  pages: {
    basketOne: { number: 1 },
    basketTwo: { number: 1 }
  },
  inventory: {}
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
    const newState = { ...state };
    if (!newState.inventory[action.basket]) {
      newState.inventory[action.basket] = {};
    }
    newState.inventory[action.basket] = {
      ...newState.inventory[action.basket],
      [action.item.id]: action.item
    };
    newState.modalOpen = true;
    newState.modalEditId = action.item.id;

    const maxPage = Math.ceil(
      Object.entries(newState.inventory[action.basket]).length / 11
    );
    return {
      ...newState,
      pages: {
        ...newState.pages,
        [action.basket]: {
          ...newState.pages[action.basket],
          number: maxPage,
          maxPage
        }
      }
    };
  }

  if (action.type === incrementItem.type) {
    const newState = { ...state };
    const basketName = findBasket(state, action.id);

    const oldQuantity = newState.inventory[basketName][action.id].quantity;
    newState.inventory[basketName] = {
      ...newState.inventory[basketName],
      [action.id]: {
        ...newState.inventory[basketName][action.id],
        quantity: oldQuantity + 1
      }
    };
    return newState;
  }

  if (action.type === decrementItem.type) {
    const newState = { ...state };
    const basketName = findBasket(state, action.id);

    const oldQuantity = newState.inventory[basketName][action.id].quantity;
    newState.inventory[basketName] = {
      ...newState.inventory[basketName],
      [action.id]: {
        ...newState.inventory[basketName][action.id],
        quantity: oldQuantity > 1 ? oldQuantity - 1 : oldQuantity
      }
    };
    return newState;
  }

  if (action.type === updateItem.type) {
    const newState = { ...state };
    const basketName = findBasket(state, action.item.id);
    newState.inventory[basketName] = {
      ...newState.inventory[basketName],
      [action.item.id]: action.item
    };
    return newState;
  }

  if (action.type === removeItem.type) {
    const newState = { ...state, modalOpen: false };

    const basketName = findBasket(state, action.id);
    delete newState.inventory[basketName][action.id];
    newState.inventory[basketName] = { ...newState.inventory[basketName] };
    return newState;
  }

  if (action.type === closeModal.type) {
    return { ...state, modalOpen: false };
  }

  if (action.type === openModal.type) {
    return { ...state, modalOpen: true, modalEditId: action.modalEditId };
  }

  if (action.type === incrementPage.type) {
    const maxPage = Math.ceil(
      Object.entries(state.inventory[action.basketName]).length / 11
    );
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.basketName]: {
          number: Math.min(state.pages[action.basketName].number + 1, maxPage),
          maxPage
        }
      }
    };
  }

  if (action.type === decrementPage.type) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.basketName]: {
          ...state.pages[action.basketName],
          number: Math.max(state.pages[action.basketName].number - 1, 1)
        }
      }
    };
  }

  return state;
};
