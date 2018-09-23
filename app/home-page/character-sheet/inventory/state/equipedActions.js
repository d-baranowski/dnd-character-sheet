export const closeModal = () => ({
  type: "CLOSE_MODAL"
});
closeModal.type = "CLOSE_MODAL";

export const openModal = (modalEditSlot) => ({
  type: "EQUIPED_OPEN_MODAL",
  modalEditSlot
});
openModal.type = "EQUIPED_OPEN_MODAL";

export const selectItem = (item, slot) => ({
  type: "SELECT_ITEM",
  item,
  slot
});
selectItem.type = "SELECT_ITEM";

export const removeItem = (slot) => ({
  type: "REMOVE_ITEM",
  slot
});
removeItem.type = "REMOVE_ITEM";
