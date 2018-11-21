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
import undoable from 'redux-undo';

const combinedReducers = combineReducers({
  router,
  form: formReducer,
  homePageReducer,
  attributesReducer,
  equipmentReducer,
  equipedReducer,
  spellsReducer,
  myFormReducer: undoable(myFormReducer, { limit: 60 })
});

const rootReducer = (state, action) => {

  if (action.type === "LOAD_CHARACTER") {
    return JSON.parse(action.payload);
  }

  return combinedReducers(state, action)
};

export default savingThrowsMutator(rootReducer);
