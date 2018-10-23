export const closeModal = () => ({
  type: "SPELLS_CLOSE_MODAL"
});
closeModal.type = "SPELLS_CLOSE_MODAL";

export const readSpell = (spellName) => ({
  type: "SPELLS_READ_SPELL",
  spellName
});
readSpell.type = "SPELLS_READ_SPELL";

export const pickSpell = (spellName, level) => ({
  type: "SPELLS_PICK_SPELL",
  spellName,
  level
});
pickSpell.type = "SPELLS_PICK_SPELL";

export const setPage = (page, level) => ({
  type: "SPELLS_SET_PAGE",
  page,
  level
});
setPage.type = "SPELLS_SET_PAGE";

export const editSpell = (spellId) => ({
  type: "SPELLS_EDIT_SPELL",
  spellId
});
editSpell.type = "SPELLS_EDIT_SPELL";

export const deleteSpell = (spellId) => ({
  type: "SPELLS_DELETE_SPELL",
  spellId
});
deleteSpell.type = "SPELLS_DELETE_SPELL";

export const changeSpell = (spell) => ({
  type: "SPELLS_CHANGE_SPELL",
  spell
});
changeSpell.type = "SPELLS_CHANGE_SPELL";

export const prepareSpell = (spellId, prepared) => ({
  type: "SPELLS_PREPARE_SPELL",
  spellId,
  prepared
});
prepareSpell.type = "SPELLS_PREPARE_SPELL";
