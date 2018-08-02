import {addClass, removeClass, setClassLevel} from './classesActions';

const initialState = {
  classes: {
    Barbarian: { abbreviation: "Bbn", level: 0 },
    Bard: { abbreviation: "Brd", level: 0 },
    Cleric: { abbreviation: "Clr", level: 0 },
    Druid: { abbreviation: "Drd", level: 0 },
    Fighter: { abbreviation: "Ftr", level: 0 },
    Monk: { abbreviation: "Mnk", level: 0 },
    Paladin: { abbreviation: "Pal", level: 0 },
    Ranger: { abbreviation: "Rgr", level: 0 },
    Rogue: { abbreviation: "Rog", level: 0 },
    Sorcerer: { abbreviation: "Sor", level: 0 },
    Wizard: { abbreviation: "Wiz", level: 0 },
    Warlock: { abbreviation: "Wrk", level: 0 },
  },
  totalLevel: 0,
  proficiencyBonus: 0,
};

const calculateTotalLevel = (state) => Object.entries(state.classes)
  .map(([key, value]) => ({value: value.value}))
  .filter((value => value.level))
  .reduce((accumulator, current) =>
      current + accumulator
    , 0);

const calculateProficiencyBonus = (totalLevel) => Math.floor((7 + totalLevel) / 4);

const calculateState = (newState) => {
  const totalLevel = calculateTotalLevel(newState);

  return {
    ...newState,
    totalLevel,
    proficiencyBonus: calculateProficiencyBonus(totalLevel)
  };
};

const reducer = (state = initialState, action) => {
  if (action.type === addClass.type) {
    const newState = {
      ...state,
      classes: {
        ...state.classes,
        [action.className]: { abbreviation: action.abbreviation, level: 0 }
      }
    };

    return calculateState(newState);
  }

  if (action.type === removeClass.type) {
    const copy = {...state};
    delete copy.classes[action.className];
    const newState = copy;

    return calculateState(newState);
  }

  if (action.type === setClassLevel.type) {
    const newState = {
      ...state,
      classes: {
        ...state.classes,
        [action.className]: {...state.classes[action.className], level: action.level < 0 ? 0 : action.level}
      }
    };

    return calculateState(newState);
  }

  return state;
};

export default reducer;
