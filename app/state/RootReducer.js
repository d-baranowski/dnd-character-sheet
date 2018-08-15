// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homePageReducer from '../home-page/state/homePageReducer';
import attributesMutator from '../home-page/character-sheet/page-one/elements/attributes/state/attributesMutator';
import savingThrowsMutator
  from '../home-page/character-sheet/page-one/elements/saving-throws/state/savingThrowsMutator';

const combinedReducers = combineReducers({
  router,
  form: attributesMutator(formReducer),
  homePageReducer,
});

const rootReducer = (state, action) => {

  if (action.type === "LOAD_CHARACTER") {
    return JSON.parse(action.payload);
  }

  return combinedReducers(state, action)
};

export default savingThrowsMutator(rootReducer);
