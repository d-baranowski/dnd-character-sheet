import {combineReducers} from 'redux';
import menuDrawerReducer from '../menu-drawer/state/menuDrawerReducer';
import classesReducer from '../character-sheet/page-one/elements/character-info/classes/state/classesReducer';
import inspirationReducer from '../character-sheet/page-one/elements/inspiration/state/inspirationReducer';
import featsAndTraitsReducer from '../character-sheet/page-one/elements/features-and-fraits/state/featuresAndTraitsReducer';

const reducer = combineReducers({
  menuDrawerReducer,
  classesReducer,
  inspirationReducer,
  featsAndTraitsReducer
});

export default reducer;
