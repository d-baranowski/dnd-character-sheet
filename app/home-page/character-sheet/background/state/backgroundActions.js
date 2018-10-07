export const setCharacterArt = (image) => ({
  type: "SET_CHARACTER_ART",
  image,
});
setCharacterArt.type = "SET_CHARACTER_ART";

export const closeModal = (x, y, width, height) => ({
  type: "BACKGROUND_CLOSE_MODAL",
  x,
  y,
  width,
  height
});
closeModal.type = "BACKGROUND_CLOSE_MODAL";

export const openModal = (modalEditSlot) => ({
  type: "BACKGROUND_OPEN_MODAL",
  modalEditSlot
});
openModal.type = "BACKGROUND_OPEN_MODAL";

