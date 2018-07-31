import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import uuid from '../uuid';
import Input from '@material-ui/core/Input';
import withStyles from '@material-ui/core/es/styles/withStyles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class FormTextField extends React.PureComponent {
  render() {
    const id = uuid();
    const {
      classes,
      input,
      label,
      meta: {touched, error},
      ...custom
    } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Input
            id={id}
            autoFocus
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(FormTextField);
