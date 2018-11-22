import {connect} from 'react-redux';
import React from 'react';
import {insertCharacterAtPosition, remove_character} from "./utils";
import {limit, onlyNumbers} from "./format";
import compose from 'redux/src/compose';
import {updateFormValue} from "./state/actions";

const {clipboard} = require('electron');

const getDefaultValue = (type) => {
  if (type === "textarea") {
    return ""
  }
  return "0";
};

const isInputKey = (key) => {
  return key.length === 1 && key.match(/^[0-9a-z]|( )|\+|-|\.$/i);
};

const withSimpleForm = ({formName, label, stateMapping, dispatchMapping, type = "number", limitValue = 2, allowLineBreak = false}) => (WrappedComponent) => {
  class Result extends React.Component {
    state = {
      past: [],
      future: [],
      value: this.props.formValue || "",
      cursor: 0,
      editing: false
    };

    update = (value, cursor) => {
      let newPast = this.state.past;
      if (!this.state.past[0] || Math.abs(value.length - this.state.past[0].value.length) > 3) {
        newPast = [{value, cursor}, ...this.state.past].slice(0,600);
      }

      this.setState({
        past: newPast,
        value,
        cursor
      }, () => this.props.changeValue(value))
    };

    undo = () => {
      if (this.state.past.length < 1) {
        return;
      }
      const {cursor, value} = this.state.past[0];

      this.setState({
        past: this.state.past.slice(1, this.state.past.length),
        cursor,
        value,
        future: [{cursor, value}, ...this.state.future].slice(0,300)
      })
    };

    redo = () => {
      if (this.state.future.length < 1) {
        return;
      }
      const {cursor, value} = this.state.future[0];

      this.setState({
        future: this.state.future.slice(1, this.state.future.length),
        cursor,
        value,
        past: [{cursor, value}, ...this.state.past].slice(0,600)
      })
    };

    getCursorClass = (index) => {
      if (!this.state.editing) {
        return "";
      }

      return index === this.state.cursor - 1 ? "hasCursor blinks" : index === 0 && this.state.cursor === 0 ? "hasCursorStart blinks" : ""
    };

    onKeyPress = (event) => {
      const key = event.key;

      if (event.ctrlKey && key === 'v') {
        this.pasteFromClipboard();
        return;
      }

      if (event.ctrlKey && key === 'z') {
        this.undo();
        return;
      }

      if (event.ctrlKey && key === 'y') {
        this.redo();
        return;
      }

      if (key === "Backspace") {
        const startLenght = this.state.value.length;
        const newValue = remove_character(this.state.value, this.state.cursor - 1);

        this.update(newValue, newValue.length !== startLenght && this.state.cursor > 0 ? this.state.cursor - 1 : this.state.cursor);
      }
      else if (key === "Enter" && allowLineBreak) {
        const newValue = this.parse(insertCharacterAtPosition(this.state.value, this.state.cursor, '\u0081'));
        if (!newValue) {
          return
        }

        this.update(newValue, this.state.value.length !== newValue.length ? this.state.cursor + 1 : this.state.cursor);
      }
      else if (isInputKey(key)) {
        const newValue = this.parse(insertCharacterAtPosition(this.state.value, this.state.cursor, key));
        if (!newValue) {
          return
        }

        this.update(newValue, this.state.value.length !== newValue.length ? this.state.cursor + 1 : this.state.cursor);
      } else if (key === "ArrowLeft") {
        this.setState({
          cursor: this.state.cursor !== 0 ? this.state.cursor - 1 : 0
        })
      } else if (key === "ArrowRight") {
        this.setState({
          cursor: this.state.cursor !== this.state.value.length ? this.state.cursor + 1 : this.state.value.length
        })
      } else if (key === "Escape") {
        this.leaveEditMode();
      }
    };

    componentWillMount() {
      this.parse = type === "number" ? compose(limit(limitValue), onlyNumbers) : val => val;
    }

    isValid = (str) => {
      return str.length === 0 || str.match(/^-{0,1}\d{1,2}$/);
    };

    leaveEditMode = () => {
      this.setState({
        editing: false
      });

      document.removeEventListener("keydown", this.onKeyPress, false);
      document.removeEventListener('mousedown', this.handleClick);
    };

    enterEditMode = () => {
      this.setState({
        editing: true
      });

      document.addEventListener("keydown", this.onKeyPress, false);
      document.addEventListener('mousedown', this.handleClick);
    };

    setWrapperRef = (node) => {
      this.wrapperRef = node;
    };

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick);
      document.removeEventListener("keydown", this.onKeyPress, false);
    }

    pasteFromClipboard = () => {
      const pastedText = clipboard.readText();
      const newValue = this.parse(insertCharacterAtPosition(this.state.value, this.state.cursor, pastedText));
      if (!newValue) {
        return
      }

      this.update(newValue, this.state.cursor + pastedText.length);
    };

    handleClick = (event) => {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.leaveEditMode();
      } else {
        if (event.which !== 1) { // Not left mouse button
          this.pasteFromClipboard();
        }
      }
    };

    getLetter = (letter, index) => {
      if (letter == ' ') {
        return (
          <span
            className={`${this.getCursorClass(index)}`}
            key={index}
            dangerouslySetInnerHTML={{__html: '&nbsp;'}}
          />
        )
      } else if (letter == '\u0081') {
        return (
          <React.Fragment>
            <br />
            <span
              style={{height: '1rem', width: 0}}
              className={`${index === this.state.cursor - 1 ? "hasCursor blinks" : ""}`}
              key={index}
              dangerouslySetInnerHTML={{__html: '&#8203;'}}
            />
          </React.Fragment>
        )
      }

      return (
        <span className={`${this.getCursorClass(index)}`} key={index}>
          {letter}
        </span>
      );
    };

    getRenderValue = () => {
      if (this.state.value.length === 0 && this.state.editing) {
        return (
          <span className="hasCursorStart blinks"> </span>
        )
      }

      return this.state.value.split('').map((letter, index) => this.getLetter(letter, index));
    };


    render() {
      const {children, ...rest} = this.props;
      const wrappedProps = {
        ...rest,
        setWrapperRef: this.setWrapperRef,
        onClick: this.enterEditMode,
        renderValue: this.getRenderValue(),
        editing: this.state.editing,
        value: this.state.value
      };
      return (
        <WrappedComponent {...wrappedProps}  />
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const prefix = ownProps.formPrefix || "";
    const formValue = state.myFormReducer[prefix + formName] || getDefaultValue(type);

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
      ...dispatchMapping && dispatchMapping(dispatch),
      changeValue: (value) => dispatch(updateFormValue(prefix + formName, value))
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(Result);
};

export default withSimpleForm;
