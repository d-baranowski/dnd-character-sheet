import uuid from '../../../../uuid';

export const addItem = (basket) => ({
  type: "ADD_ITEM",
  item: {id: uuid(), quantity: 1, name: "", weight: 0},
  basket
});
addItem.type = "ADD_ITEM";

export const incrementItem = (id) => ({
  type: "INCREMENT_ITEM",
  id
});
incrementItem.type = "INCREMENT_ITEM";

export const decrementItem = (id) => ({
  type: "DECREMENT_ITEM",
  id
});
decrementItem.type = "DECREMENT_ITEM";

export const updateItem = (item) => ({
  type: "UPDATE_ITEM",
  item
});
updateItem.type = "UPDATE_ITEM";

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id
});
removeItem.type = "REMOVE_ITEM";

export const closeModal = () => ({
  type: "CLOSE_MODAL"
});
closeModal.type = "CLOSE_MODAL";

export const openModal = (modalEditId) => ({
  type: "OPEN_MODAL",
  modalEditId
});
openModal.type = "OPEN_MODAL";

export const incrementPage = (basketName) => ({
  type: "INCREMENT_PAGE",
  basketName
});
incrementPage.type = "INCREMENT_PAGE";

export const decrementPage = (basketName) => ({
  type: "DECREMENT_PAGE",
  basketName
});
decrementPage.type = "DECREMENT_PAGE";
