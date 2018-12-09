// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homePageReducer from '../home-page/state/homePageReducer';
import myFormReducer from "../form/state/formReducer";
import savingThrowsMutator
  from '../home-page/character-sheet/page-one/elements/saving-throws/state/savingThrowsMutator';
import equipmentReducer from '../home-page/character-sheet/inventory/state/equipmentReducer';
import equipedReducer from "../home-page/character-sheet/inventory/state/equipedReducer";
import spellsReducer from "../home-page/character-sheet/spells/spellsReducer";
import attributesReducer from "../home-page/character-sheet/page-one/elements/attributes/state/attributesReducer";
import {calculateTotalLevel} from "../home-page/character-sheet/page-one/elements/character-info/classes/state/classesReducer";

const combinedReducers = combineReducers({
  router,
  form: formReducer,
  homePageReducer,
  attributesReducer,
  equipmentReducer,
  equipedReducer,
  spellsReducer,
  myFormReducer
});

const regainHitDice = (combinedState) => {
  const spendDice = Math.abs(
    Object.entries(combinedState.homePageReducer.hitDiceReducer)
      .map(([key, value]) => value)
      .filter(value => value < 0)
      .reduce((aggregator, value) => aggregator + value, 0)
  );

  const totalHitDice = calculateTotalLevel(combinedState.homePageReducer.classesReducer);
  const halfTotalRoundUp = Math.ceil(totalHitDice / 2);

  const hitDiceToRegain = halfTotalRoundUp < spendDice ? halfTotalRoundUp : spendDice;
  let newHitDiceReducer = {
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0
  };

  if (spendDice <= hitDiceToRegain) {
    return newHitDiceReducer;
  } else {
    newHitDiceReducer = {
      d4: combinedState.homePageReducer.hitDiceReducer['d4'],
      d6: combinedState.homePageReducer.hitDiceReducer['d6'],
      d8: combinedState.homePageReducer.hitDiceReducer['d8'],
      d10: combinedState.homePageReducer.hitDiceReducer['d10'],
      d12: combinedState.homePageReducer.hitDiceReducer['d12'],
      d20: combinedState.homePageReducer.hitDiceReducer['d20'],
    };
  }

  const dieArray = [
    'd20',
    'd12',
    'd10',
    'd8',
    'd6',
    'd4'
  ];

  let hitDiceLeft = hitDiceToRegain;
  for (let i = 0; i < dieArray.length; i++) {
    if (hitDiceLeft <= 0) {
      break;
    }

    const currentDieValue = combinedState.homePageReducer.hitDiceReducer[dieArray[i]];

    if (currentDieValue >= 0) {
      continue;
    }

    if (hitDiceLeft >= Math.abs(currentDieValue)) {
      newHitDiceReducer[dieArray[i]] = 0;
      hitDiceLeft += currentDieValue
    } else {
      newHitDiceReducer[dieArray[i]] = currentDieValue + hitDiceLeft;
      hitDiceLeft = 0;
    }
  }

  return newHitDiceReducer;
};

const regainHitPoints = (combinedState) => {
  if (!combinedState.form.hitPoints) {
    return {}
  }

  if (!combinedState.form.hitPoints.values) {
    return {...combinedState.form.hitPoints}
  }

  return {
    ...combinedState.form.hitPoints,
    values: {
      ...combinedState.form.hitPoints.values,
      currentHp: combinedState.form.hitPoints.values.maxHp
    },
  }
};

const regainSpellSlots = (combinedState) => {
  const isSpellSlotsValue = /.*slots|One|Two|Three|Four|Five|Six|Seven|Eight|Nine/;
  const expendedSpellSlots = Object.keys(combinedState.myFormReducer).filter(value => value.match(isSpellSlotsValue));

  return expendedSpellSlots.reduce((aggregator, value) => {
    return {...aggregator, [value]: 0}
  }, {})
};

const rootReducer = (state, action) => {

  let combinedState = combinedReducers(state, action);

  if (action.type === "LOAD_CHARACTER") {
    return { ...combinedState , ...JSON.parse(action.payload) };
  }

  if (action.type === "LONG_REST") {


    return {
      ...combinedState,
      form: combinedState.form ? {
        ...combinedState.form,
        hitPoints: regainHitPoints(combinedState)
      } : {},
      homePageReducer: {
        ...combinedState.homePageReducer,
        hitDiceReducer: {
          ...combinedState.homePageReducer.hitDiceReducer,
          ...regainHitDice(combinedState)
        }
      },
      myFormReducer: { ...combinedState.myFormReducer, ...regainSpellSlots(combinedState) }
    }
  }

  return combinedState;
};

export default savingThrowsMutator(rootReducer);
