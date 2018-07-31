// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homePageReducer from '../home-page/state/homePageReducer';

const rootReducer = combineReducers({
  router,
  form: formReducer,
  homePageReducer,
});

export default rootReducer;
