import React from 'react';
import withStyles from '@material-ui/core/es/styles/withStyles';
import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/es/Checkbox/Checkbox';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class FormCheckbox extends React.PureComponent {
  render() {
    const {
      value,
      classes,
      input,
      label,
      ...custom
    } = this.props;
    return (
      <div className={classes.container}>
        <FormControlLabel
          control={
            <Checkbox
              {...input}
              {...custom}
              value={value + ''}
              color="primary"
            />
          }
          label={label}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FormCheckbox);
