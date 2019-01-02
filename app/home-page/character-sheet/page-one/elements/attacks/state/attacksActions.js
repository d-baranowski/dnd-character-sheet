export const addAttack = () => ({
  type: 'ADD_ATTACK'
});
addAttack.type = 'ADD_ATTACK';

export const removeAttack = id => ({
  type: 'REMOVE_ATTACK',
  id
});
removeAttack.type = 'REMOVE_ATTACK';

export const updateAttack = attack => ({
  type: 'UPDATE_ATTACK',
  attack
});
updateAttack.type = 'UPDATE_ATTACK';

export const openModal = id => ({
  type: 'OPEN_ATTACK_MODAL',
  id
});
openModal.type = 'OPEN_ATTACK_MODAL';

export const closeModal = () => ({
  type: 'CLOSE_ATTACK_MODAL'
});
closeModal.type = 'CLOSE_ATTACK_MODAL';
