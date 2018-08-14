import {connect} from 'react-redux';
import {setDrawerRoute} from '../home-page/menu-drawer/state/menuDrawerActions';
import getValue from './getValue';
import createSimpleForm from './createSimpleForm';

const getDefaultValue = (type) => {
  if (type === "textarea") {
    return ""
  }
  return 0;
};

const withSimpleForm = ({formName, label, stateMapping, dispatchMapping, type, limitValue}) => (component) => {
  createSimpleForm(formName, label, formName, formName, type, limitValue);

  const mapStateToProps = (state) => ({
    [formName]: getValue(state, formName, formName) || getDefaultValue(type),
    ...stateMapping && stateMapping(state)
  });
  const mapDispatchToProps = (dispatch) => ({
    showEditor: () => dispatch(setDrawerRoute(formName)),
    ...dispatchMapping && dispatchMapping(dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default withSimpleForm;
