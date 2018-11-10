import {connect} from 'react-redux';
import {setDrawerRoute} from '../home-page/menu-drawer/state/menuDrawerActions';
import getValue from './getValue';
import createSimpleForm from './createSimpleForm';
import React from 'react';

const getDefaultValue = (type) => {
  if (type === "textarea") {
    return ""
  }
  return 0;
};

const withSimpleForm = ({formName, label, stateMapping, dispatchMapping, type, limitValue}) => (WrappedComponent) => {
  class Result extends React.Component {
    componentWillMount() {
      const prefix = this.props.prefix;
      createSimpleForm(prefix + formName, label, prefix + formName, prefix + formName, type, limitValue);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const prefix = ownProps.formPrefix || "";
    const formValue = getValue(state, prefix + formName, prefix + formName) || getDefaultValue(type);

    return {
      [prefix + formName]: formValue,
      ...stateMapping && stateMapping(state),
      prefix,
      formValue
    }
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    const prefix = ownProps.formPrefix || "";

    return {
      showEditor: () => dispatch(setDrawerRoute(prefix + formName)),
      ...dispatchMapping && dispatchMapping(dispatch)
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(Result);
};

export default withSimpleForm;
