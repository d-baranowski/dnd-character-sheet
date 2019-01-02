import React from 'react';
import { Checkbox, Segment } from 'semantic-ui-react';

class FormCheckbox extends React.PureComponent {
  render() {
    const { input, label, value } = this.props;
    return (
      <Segment>
        <Checkbox
          label={label}
          checked={value}
          toggle
          onClick={(event, data) => input.onChange(data.checked)}
        />
      </Segment>
    );
  }
}

export default FormCheckbox;
