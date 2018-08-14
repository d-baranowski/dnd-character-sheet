export const closeModal = () => ({
  type: "CLOSE_FEATURES_AND_TRAITS_MODAL"
});

closeModal.type = "CLOSE_FEATURES_AND_TRAITS_MODAL";

export const openModal = (feat) => ({
  type: "OPEN_FEATURES_AND_TRAITS_MODAL",
  feat
});
openModal.type = "OPEN_FEATURES_AND_TRAITS_MODAL";

export const pickFeat = (feat) => ({
  type: "PICK_FEAT",
  feat
});
pickFeat.type = "PICK_FEAT";

export const setPage = (pageNo) => ({
  type: "SET_PAGE",
  pageNo
});
setPage.type = "SET_PAGE";

export const editChosenFeat = (id, newValue) => ({
  type: "EDIT_CHOSEN_FEAT",
  id,
  newValue
});
editChosenFeat.type = "EDIT_CHOSEN_FEAT";

export const deleteChosenFeat = (id) => ({
  type: "DELETE_CHOSEN_FEAT",
  id
});
deleteChosenFeat.type = "DELETE_CHOSEN_FEAT";
