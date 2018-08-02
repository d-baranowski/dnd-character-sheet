import {combineReducers} from 'redux';
import menuDrawerReducer from '../menu-drawer/state/menuDrawerReducer';
import classesReducer from '../character-sheet/page-one/elements/character-info/classes/state/classesReducer';

const reducer = combineReducers({
  menuDrawerReducer,
  classesReducer
});

export default reducer;
