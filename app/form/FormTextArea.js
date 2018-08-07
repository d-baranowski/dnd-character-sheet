import React from 'react';
import {TextArea} from 'semantic-ui-react';
import uuid from '../uuid';


class FormTextArea extends React.PureComponent {
  render() {
    const id = uuid();
    const {
      input,
      label,
      ...custom
    } = this.props;
    return (
      <TextArea
        autoHeight
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

export default FormTextArea;
