import {openModal, closeModal, pickFeat, setPage, editChosenFeat, deleteChosenFeat} from './featuresAndTraitsActions';
import uuid from '../../../../../../uuid';

const initialState = {
  modalOpen: false,
  modalFeat: {},
  pagedFeats: [],
  chosenFeats: [],
  pageSize: 24,
  currentPage: 1,
  maxPage: 1
};

export const paginate = (array, pageSize, pageNumber) => {
  const actualPageNumber = pageNumber - 1;
  return array.slice(actualPageNumber * pageSize, (actualPageNumber + 1) * pageSize);
};

export default (state = initialState, action) => {
  if (action.type === openModal.type) {
    return {
      ...state,
      modalOpen: true,
      modalFeat: action.feat
    }
  }

  if (action.type === closeModal.type) {
    return {
      ...state,
      modalOpen: false,
      modalFeat: {}
    }
  }

  if (action.type === pickFeat.type) {
    const newChosen = [...state.chosenFeats, {...action.feat, id: uuid()}];
    const newActivePage = Math.ceil(newChosen.length / state.pageSize);
    return {
      ...state,
      chosenFeats: newChosen,
      currentPage: newActivePage,
      maxPage: newActivePage,
      pagedFeats: paginate(newChosen, state.pageSize, newActivePage)
    }
  }

  if (action.type === setPage.type) {
    const max = Math.ceil(state.chosenFeats.length / state.pageSize);
    const min = 1;
    const newPage = Math.min(Math.max(parseInt(action.pageNo), min), max);
    return {
      ...state,
      currentPage: newPage,
      pagedFeats: paginate(state.chosenFeats, state.pageSize, newPage)
    }
  }

  if (action.type === editChosenFeat.type) {
    const newChosen = [...state.chosenFeats];
    const editIndex = newChosen.findIndex((feat) => feat.id === action.id);
    newChosen[editIndex] = {...action.newValue};
    return {
      ...state,
      chosenFeats: newChosen,
      pagedFeats: paginate(newChosen, state.pageSize, state.currentPage)
    }
  }

  if (action.type === deleteChosenFeat.type) {
    const newChosen = state.chosenFeats.filter(value => value.id !== action.id);
    return {
      ...state,
      chosenFeats: newChosen,
      pagedFeats: paginate(newChosen, state.pageSize, state.currentPage)
    }
  }

  return state;
}
