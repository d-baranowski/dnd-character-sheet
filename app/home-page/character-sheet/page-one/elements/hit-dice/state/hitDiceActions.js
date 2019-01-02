export const setModalVisibility = visible => ({
  type: 'SET_HIT_DICE_MODAL_VISIBILITY',
  visible
});
setModalVisibility.type = 'SET_HIT_DICE_MODAL_VISIBILITY';

export const decrementDie = die => ({
  type: 'DECREMENT_HIT_DIE_VALUE',
  die
});
decrementDie.type = 'DECREMENT_HIT_DIE_VALUE';

export const incrementDie = die => ({
  type: 'INCREMENT_HIT_DIE_VALUE',
  die
});
incrementDie.type = 'INCREMENT_HIT_DIE_VALUE';
