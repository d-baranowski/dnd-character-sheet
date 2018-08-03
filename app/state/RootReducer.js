// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homePageReducer from '../home-page/state/homePageReducer';
import attributesMutator from '../home-page/character-sheet/page-one/elements/attributes/state/attributesMutator';
import savingThrowsMutator
  from '../home-page/character-sheet/page-one/elements/saving-throws/state/savingThrowsMutator';

const rootReducer = combineReducers({
  router,
  form: attributesMutator(formReducer),
  homePageReducer,
});

export default savingThrowsMutator(rootReducer);
