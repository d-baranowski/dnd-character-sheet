import {connect} from 'react-redux';
import React from 'react';
import {insertCharacterAtPosition, remove_character} from "./utils";
import {limit, onlyNumbers} from "./format";
import compose from 'redux/src/compose';
import {updateFormValue} from "./state/actions";

const connectSimpleForm = (formName) => (WrappedComponent) => {
  class Result extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props}  />
      )
    }
  }

  const mapStateToProps = (state) => {
    const formValue = state.myFormReducer[formName] || null;

    return {
      formValue
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      changeValue: (value) => dispatch(updateFormValue(formName, value))
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(Result);
};

export default connectSimpleForm;
