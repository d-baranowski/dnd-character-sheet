import { addClass, removeClass, setClassLevel } from './classesActions';

const initialState = {
  classes: {
    Barbarian: { abbreviation: 'Bbn', level: 0, hitDie: 'd12' },
    Bard: { abbreviation: 'Brd', level: 0, hitDie: 'd6' },
    Cleric: { abbreviation: 'Clr', level: 0, hitDie: 'd8' },
    Druid: { abbreviation: 'Drd', level: 0, hitDie: 'd8' },
    Fighter: { abbreviation: 'Ftr', level: 0, hitDie: 'd10' },
    Monk: { abbreviation: 'Mnk', level: 0, hitDie: 'd8' },
    Paladin: { abbreviation: 'Pal', level: 0, hitDie: 'd10' },
    Ranger: { abbreviation: 'Rgr', level: 0, hitDie: 'd8' },
    Rogue: { abbreviation: 'Rog', level: 0, hitDie: 'd6' },
    Sorcerer: { abbreviation: 'Sor', level: 0, hitDie: 'd4' },
    Wizard: { abbreviation: 'Wiz', level: 0, hitDie: 'd4' },
    Warlock: { abbreviation: 'Wrk', level: 0, hitDie: 'd6' }
  },
  totalLevel: 0,
  proficiencyBonus: 0
};

export const calculateTotalLevel = state => {
  const mapped = Object.entries(state.classes).map(
    ([key, value]) => value.level
  );

  const filtered = mapped
    .filter(value => value > 0)
    .map(value => parseInt(value));

  return filtered.reduce((accumulator, current) => current + accumulator, 0);
};

const calculateProficiencyBonus = totalLevel =>
  Math.floor((7 + totalLevel) / 4);

const calculateState = newState => {
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
    const copy = { ...state };
    delete copy.classes[action.className];
    const newState = copy;

    return calculateState(newState);
  }

  if (action.type === setClassLevel.type) {
    const newState = {
      ...state,
      classes: {
        ...state.classes,
        [action.className]: {
          ...state.classes[action.className],
          level: action.level < 0 ? 0 : action.level
        }
      }
    };

    return calculateState(newState);
  }

  return state;
};

export default reducer;
