import {readSpell, closeModal, pickSpell, setPage, editSpell, deleteSpell, changeSpell} from "./spellsActions"
import spells from "./spells.json";
import uuidv4 from "../../../uuid";

const pageSize = {
  0: 6
};

const initialState = {
  modalOpen: false,
  modalSpell: {},
  chosenSpells: {},
  page: {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
  }
};

export default (state = initialState, action) => {
  if(action.type === readSpell.type) {
    const spellName = action.spellName;
    const modalSpell = spells.descriptions[spellName];

    return {
      ...state,
      modalOpen: true,
      modalSpell: {name: spellName, ...modalSpell}
    }
  }

  if (action.type === closeModal.type) {
    return {
      ...state,
      modalOpen: false,
      modalSpell: {}
    }
  }

  if (action.type === pickSpell.type) {
    const { spellName, level } = action;
    const modalSpell = spells.descriptions[spellName];
    const id = uuidv4();
    const newSpells = {...state.chosenSpells[level], [id]: {...modalSpell, name: spellName, id: id}};
    const maxPage = Math.ceil(Object.values(newSpells).length / pageSize[level]);


    return {
      ...state,
      chosenSpells: {
        ...state.chosenSpells,
        [level]: {...newSpells}
      },
      page: {
        ...state.page,
        [level]: maxPage
      }
    }
  }

  if (action.type === setPage.type) {
    return {
      ...state,
      page: {
        ...state.page,
        [action.level]: action.page
      }
    }
  }

  if (action.type === editSpell.type) {
    const allChosenSpells = Object.values(state.chosenSpells).reduce((sum, value) => {
      return {...sum, ...value}
    }, {});

    return {
      ...state,
      modalOpen: true,
      modalSpell: allChosenSpells[action.spellId],
    }
  }

  if (action.type === deleteSpell.type) {
    const newChosen = Object.entries(state.chosenSpells).reduce((sum, [key, value]) => {
      sum[key] = Object.entries(value).filter(([spellId]) => {
        return spellId !== action.spellId
      }).reduce((_sum, [_spellId, spell]) => {return {..._sum, [_spellId]: spell}}, {});

      return sum;
    }, {});

    return {
      ...state,
      chosenSpells: newChosen
    }
  }

  if (action.type === changeSpell.type) {
    const level = Object.entries(state.chosenSpells).find(([level, spells]) => {
      return Object.keys(spells).find((spellId) => spellId === action.spell.id)
    })[0];

    const newChosen = {
      ...state.chosenSpells,
      [level]: {
        ...state.chosenSpells[level],
        [action.spell.id]: action.spell
      }
    };

    return {
      ...state,
      chosenSpells: newChosen
    }
  }

  return state;
}