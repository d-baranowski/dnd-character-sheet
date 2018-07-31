import {openDrawer, closeDrawer, setDrawerRoute} from './menuDrawerActions';

const initialState = {
  open: false,
  route: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === openDrawer.type) {
    return {
      ...state,
      open: true
    }
  }

  else if (action.type === closeDrawer.type) {
    return {
      ...state,
      open: false
    }
  }

  else if (action.type === setDrawerRoute.type) {
    return {
      ...state,
      route: action.route,
      props: action.props,
      open: true
    }
  }

  return state;
};

export default reducer;
