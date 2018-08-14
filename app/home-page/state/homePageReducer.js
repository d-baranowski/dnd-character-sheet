import {combineReducers} from 'redux';
import menuDrawerReducer from '../menu-drawer/state/menuDrawerReducer';
import classesReducer from '../character-sheet/page-one/elements/character-info/classes/state/classesReducer';
import inspirationReducer from '../character-sheet/page-one/elements/inspiration/state/inspirationReducer';
import featsAndTraitsReducer from '../character-sheet/page-one/elements/features-and-fraits/state/featuresAndTraitsReducer';
import characterInfoReducer from '../character-sheet/page-one/elements/character-info/state/characterInfoReducer';
import deathSavesReducer from '../character-sheet/page-one/elements/death-saves/state/deathSavesReducer';

const reducer = combineReducers({
  menuDrawerReducer,
  classesReducer,
  inspirationReducer,
  featsAndTraitsReducer,
  characterInfoReducer,
  deathSavesReducer,
});

export default reducer;
