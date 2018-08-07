import React from 'react';
import {Input} from 'semantic-ui-react';
import uuid from '../uuid';


class FormInput extends React.PureComponent {
  render() {
    const id = uuid();
    const {
      input,
      label,
      ...custom
    } = this.props;
    return (
      <Input
        style={{marginBottom: 10}}
        label={label}
        placeholder={label} id={id}
        autoFocus
        {...input}
        {...custom}
      />
    );
  }
}

export default FormInput;
